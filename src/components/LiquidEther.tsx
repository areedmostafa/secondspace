import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

export interface LiquidEtherProps {
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

interface SimOptions {
  iterations_poisson: number;
  iterations_viscous: number;
  mouse_force: number;
  resolution: number;
  cursor_size: number;
  viscous: number;
  isBounce: boolean;
  dt: number;
  isViscous: boolean;
  BFECC: boolean;
}

interface LiquidEtherWebGL {
  output?: { simulation?: { options: SimOptions; resize: () => void } };
  autoDriver?: {
    enabled: boolean;
    speed: number;
    resumeDelay: number;
    rampDurationMs: number;
    mouse?: { autoIntensity: number; takeoverDuration: number };
    forceStop: () => void;
  };
  resize: () => void;
  start: () => void;
  pause: () => void;
  dispose: () => void;
}

const defaultColors = ['#5227FF', '#FF9FFC', '#B19EEF'];

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = defaultColors,
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}: LiquidEtherProps): React.ReactElement {
  const mountRef = useRef<HTMLDivElement>(null);
  const webglRef = useRef<LiquidEtherWebGL | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rafRef = useRef<number | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const resizeRafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    function makePaletteTexture(stops: string[]): THREE.DataTexture {
      let arr: string[];
      if (Array.isArray(stops) && stops.length > 0) {
        arr = stops.length === 1 ? [stops[0], stops[0]] : stops;
      } else {
        arr = ['#ffffff', '#ffffff'];
      }
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const bgVec4 = new THREE.Vector4(0, 0, 0, 0);

    class CommonClass {
      width = 0;
      height = 0;
      aspect = 1;
      cellScale: THREE.Vector2 | null = null;
      fboSize: THREE.Vector2 | null = null;
      supportRenderTextureFormat: THREE.TextureDataType | null = null;
      gl: WebGLRenderingContext | null = null;
      camera: THREE.OrthographicCamera | null = null;
      scene: THREE.Scene | null = null;
      mesh: THREE.Mesh | null = null;
      renderer: THREE.WebGLRenderer | null = null;
      constructor() {}
      createBaseMesh() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const geom = new THREE.PlaneGeometry(2, 2);
        return geom;
      }
      createRenderTarget(w: number, h: number, options: any = {}) {
        const opt = Object.assign(
          {
            wrapS: THREE.ClampToEdgeWrapping,
            wrapT: THREE.ClampToEdgeWrapping,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: this.supportRenderTextureFormat,
            depthBuffer: false,
            stencilBuffer: false
          },
          options
        );
        const rt = new THREE.WebGLRenderTarget(w, h, opt);
        return rt;
      }
    }

    class ShaderPass extends CommonClass {
      uniforms: any;
      props: any;
      constructor(props: any) {
        super();
        this.props = props;
      }
      init() {
        const geom = this.createBaseMesh();
        const mat = new THREE.RawShaderMaterial({
          vertexShader: this.props.material.vertexShader,
          fragmentShader: this.props.material.fragmentShader,
          uniforms: this.props.material.uniforms,
          depthTest: false,
          depthWrite: false
        });
        this.mesh = new THREE.Mesh(geom, mat);
        this.scene!.add(this.mesh);
        this.uniforms = mat.uniforms;
      }
      update() {
        if (!this.renderer || !this.scene || !this.camera || !this.props.output) return;
        this.renderer.setRenderTarget(this.props.output);
        this.renderer.render(this.scene, this.camera);
        this.renderer.setRenderTarget(null);
      }
    }

    const face_vert = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const advect_frag = `
      precision highp float;
      uniform sampler2D velocity;
      uniform sampler2D source;
      uniform vec2 px;
      uniform float dt;
      uniform bool isBounce;
      uniform vec2 fboSize;
      void main() {
        vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
        vec2 uv = gl_FragCoord.xy / fboSize.xy;
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uvN = uv - vel * px * dt * ratio;
        vec2 clampedUV = clamp(uvN, vec2(0.0), vec2(1.0));
        vec4 val = texture2D(source, clampedUV);
        if (isBounce) {
          if (uvN.x < 0.0 || uvN.x > 1.0 || uvN.y < 0.0 || uvN.y > 1.0) {
            val = vec4(0.0);
          }
        }
        gl_FragColor = val;
      }
    `;

    const externalForce_frag = `
      precision highp float;
      uniform sampler2D velocity;
      uniform vec2 force;
      uniform vec2 center;
      uniform vec2 scale;
      uniform vec2 px;
      void main() {
        vec2 uv = gl_FragCoord.xy * px;
        vec2 diff = (uv - center) * vec2(1.0, 1.0);
        float dist = length(diff) / length(scale);
        float w = smoothstep(1.0, 0.0, dist);
        vec4 vel = texture2D(velocity, uv);
        gl_FragColor = vel + vec4(force * w, 0.0, 0.0);
      }
    `;

    const viscous_frag = `
      precision highp float;
      uniform sampler2D velocity;
      uniform sampler2D velocity_new;
      uniform float v;
      uniform vec2 px;
      uniform float dt;
      uniform vec2 boundarySpace;
      void main() {
        if (gl_FragCoord.x <= boundarySpace.x || gl_FragCoord.x >= boundarySpace.y ||
            gl_FragCoord.y <= boundarySpace.x || gl_FragCoord.y >= boundarySpace.y) {
          gl_FragColor = vec4(0.0);
          return;
        }
        vec2 uv = gl_FragCoord.xy * px;
        vec2 xOffset = vec2(px.x, 0.0);
        vec2 yOffset = vec2(0.0, px.y);
        vec2 vl = texture2D(velocity_new, uv - xOffset).xy;
        vec2 vr = texture2D(velocity_new, uv + xOffset).xy;
        vec2 vb = texture2D(velocity_new, uv - yOffset).xy;
        vec2 vt = texture2D(velocity_new, uv + yOffset).xy;
        vec2 vc = texture2D(velocity, uv).xy;
        float a = dt * v / (px.x * px.y);
        gl_FragColor = vec4((vc + a * (vl + vr + vb + vt)) / (1.0 + 4.0 * a), 0.0, 1.0);
      }
    `;

    const divergence_frag = `
      precision highp float;
      uniform sampler2D velocity;
      uniform vec2 px;
      uniform float dt;
      uniform vec2 boundarySpace;
      void main() {
        if (gl_FragCoord.x <= boundarySpace.x || gl_FragCoord.x >= boundarySpace.y ||
            gl_FragCoord.y <= boundarySpace.x || gl_FragCoord.y >= boundarySpace.y) {
          gl_FragColor = vec4(0.0);
          return;
        }
        vec2 uv = gl_FragCoord.xy * px;
        vec2 xOffset = vec2(px.x, 0.0);
        vec2 yOffset = vec2(0.0, px.y);
        float vl = texture2D(velocity, uv - xOffset).x;
        float vr = texture2D(velocity, uv + xOffset).x;
        float vb = texture2D(velocity, uv - yOffset).y;
        float vt = texture2D(velocity, uv + yOffset).y;
        float div = (vr - vl + vt - vb) * 0.5;
        gl_FragColor = vec4(div / dt, 0.0, 0.0, 1.0);
      }
    `;

    const poisson_frag = `
      precision highp float;
      uniform sampler2D pressure;
      uniform sampler2D divergence;
      uniform vec2 px;
      uniform vec2 boundarySpace;
      void main() {
        if (gl_FragCoord.x <= boundarySpace.x || gl_FragCoord.x >= boundarySpace.y ||
            gl_FragCoord.y <= boundarySpace.x || gl_FragCoord.y >= boundarySpace.y) {
          gl_FragColor = vec4(0.0);
          return;
        }
        vec2 uv = gl_FragCoord.xy * px;
        vec2 xOffset = vec2(px.x, 0.0);
        vec2 yOffset = vec2(0.0, px.y);
        float pl = texture2D(pressure, uv - xOffset).x;
        float pr = texture2D(pressure, uv + xOffset).x;
        float pb = texture2D(pressure, uv - yOffset).x;
        float pt = texture2D(pressure, uv + yOffset).x;
        float div = texture2D(divergence, uv).x;
        float newP = (pl + pr + pb + pt - div) * 0.25;
        gl_FragColor = vec4(newP, 0.0, 0.0, 1.0);
      }
    `;

    const pressure_frag = `
      precision highp float;
      uniform sampler2D pressure;
      uniform sampler2D velocity;
      uniform vec2 px;
      uniform float dt;
      uniform vec2 boundarySpace;
      void main() {
        if (gl_FragCoord.x <= boundarySpace.x || gl_FragCoord.x >= boundarySpace.y ||
            gl_FragCoord.y <= boundarySpace.x || gl_FragCoord.y >= boundarySpace.y) {
          gl_FragColor = vec4(0.0);
          return;
        }
        vec2 uv = gl_FragCoord.xy * px;
        vec2 xOffset = vec2(px.x, 0.0);
        vec2 yOffset = vec2(0.0, px.y);
        float pl = texture2D(pressure, uv - xOffset).x;
        float pr = texture2D(pressure, uv + xOffset).x;
        float pb = texture2D(pressure, uv - yOffset).x;
        float pt = texture2D(pressure, uv + yOffset).x;
        vec2 v = texture2D(velocity, uv).xy;
        v.xy -= vec2(pr - pl, pt - pb) * 0.5;
        gl_FragColor = vec4(v, 0.0, 1.0);
      }
    `;

    const render_frag = `
      precision highp float;
      uniform sampler2D velocity;
      uniform sampler2D paletteTexture;
      uniform vec2 px;
      uniform vec4 backgroundColor;
      void main() {
        vec2 uv = gl_FragCoord.xy * px;
        vec2 vel = texture2D(velocity, uv).xy;
        float speed = length(vel);
        float t = clamp(speed * 0.5, 0.0, 1.0);
        vec4 color = texture2D(paletteTexture, vec2(t, 0.5));
        gl_FragColor = mix(backgroundColor, color, t);
      }
    `;

    class Mouse {
      static coords = new THREE.Vector2(9999, 9999);
      static diff = new THREE.Vector2(0, 0);
    }

    class Advect extends ShaderPass {
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: advect_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.fbo_vel.texture },
              source: { value: simProps.fbo_vel.texture },
              px: { value: simProps.cellScale },
              fboSize: { value: simProps.fboSize },
              dt: { value: simProps.dt },
              isBounce: { value: simProps.isBounce }
            }
          },
          output: simProps.fbo_vel_
        });
        this.init();
      }
      update(...args: any[]) {
        const props = args[0] || {};
        if (!this.uniforms) return;
        if (props.vel) this.uniforms.velocity.value = props.vel.texture;
        if (props.dt) this.uniforms.dt.value = props.dt;
        if (props.isBounce !== undefined) this.uniforms.isBounce.value = props.isBounce;
        if (props.dst) this.props.output = props.dst;
        super.update();
      }
    }

    class ExternalForce extends ShaderPass {
      mouse: THREE.Mesh;
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: externalForce_frag,
            uniforms: {
              px: { value: simProps.cellScale },
              force: { value: new THREE.Vector2(0, 0) },
              center: { value: new THREE.Vector2(0, 0) },
              scale: { value: new THREE.Vector2(0, 0) },
              velocity: { value: simProps.src.texture }
            }
          },
          output: simProps.dst
        });
        this.init();
        const mouseG = new THREE.PlaneGeometry(1, 1);
        const mouseM = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
        this.mouse = new THREE.Mesh(mouseG, mouseM);
        this.scene!.add(this.mouse);
      }
      update(...args: any[]) {
        const props = args[0] || {};
        const forceX = (Mouse.diff.x / 2) * (props.mouse_force || 0);
        const forceY = (Mouse.diff.y / 2) * (props.mouse_force || 0);
        const cellScale = props.cellScale || { x: 1, y: 1 };
        const cursorSize = props.cursor_size || 0;
        const cursorSizeX = cursorSize * cellScale.x;
        const cursorSizeY = cursorSize * cellScale.y;
        const centerX = Math.min(
          Math.max(Mouse.coords.x, -1 + cursorSizeX + cellScale.x * 2),
          1 - cursorSizeX - cellScale.x * 2
        );
        const centerY = Math.min(
          Math.max(Mouse.coords.y, -1 + cursorSizeY + cellScale.y * 2),
          1 - cursorSizeY - cellScale.y * 2
        );
        const uniforms = (this.mouse.material as THREE.RawShaderMaterial).uniforms;
        uniforms.force.value.set(forceX, forceY);
        uniforms.center.value.set(centerX, centerY);
        uniforms.scale.value.set(cursorSize, cursorSize);
        super.update();
      }
    }

    class Viscous extends ShaderPass {
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: viscous_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.src.texture },
              velocity_new: { value: simProps.dst_.texture },
              v: { value: simProps.viscous },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst,
          output0: simProps.dst_,
          output1: simProps.dst
        });
        this.init();
      }
      update(...args: any[]) {
        const { viscous, iterations, dt } = (args[0] || {}) as {
          viscous?: number;
          iterations?: number;
          dt?: number;
        };
        if (!this.uniforms) return;
        let fbo_in: any, fbo_out: any;
        if (typeof viscous === 'number') this.uniforms.v.value = viscous;
        const iter = iterations ?? 0;
        for (let i = 0; i < iter; i++) {
          if (i % 2 === 0) {
            fbo_in = this.props.output0;
            fbo_out = this.props.output1;
          } else {
            fbo_in = this.props.output1;
            fbo_out = this.props.output0;
          }
          this.uniforms.velocity_new.value = fbo_in.texture;
          this.props.output = fbo_out;
          if (typeof dt === 'number') this.uniforms.dt.value = dt;
          super.update();
        }
        return fbo_out;
      }
    }

    class Divergence extends ShaderPass {
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: divergence_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              velocity: { value: simProps.src.texture },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst
        });
        this.init();
      }
      update(...args: any[]) {
        const { vel } = (args[0] || {}) as { vel?: any };
        if (this.uniforms && vel) {
          this.uniforms.velocity.value = vel.texture;
        }
        super.update();
      }
    }

    class Poisson extends ShaderPass {
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: poisson_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              pressure: { value: simProps.dst_.texture },
              divergence: { value: simProps.src.texture },
              px: { value: simProps.cellScale }
            }
          },
          output: simProps.dst,
          output0: simProps.dst_,
          output1: simProps.dst
        });
        this.init();
      }
      update(...args: any[]) {
        const { iterations } = (args[0] || {}) as { iterations?: number };
        if (!this.uniforms) return;
        let fbo_in: any, fbo_out: any;
        const iter = iterations ?? 0;
        for (let i = 0; i < iter; i++) {
          if (i % 2 === 0) {
            fbo_in = this.props.output0;
            fbo_out = this.props.output1;
          } else {
            fbo_in = this.props.output1;
            fbo_out = this.props.output0;
          }
          this.uniforms.pressure.value = fbo_in.texture;
          this.props.output = fbo_out;
          super.update();
        }
        return fbo_out;
      }
    }

    class Pressure extends ShaderPass {
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: pressure_frag,
            uniforms: {
              boundarySpace: { value: simProps.boundarySpace },
              pressure: { value: simProps.src_p.texture },
              velocity: { value: simProps.src.texture },
              px: { value: simProps.cellScale },
              dt: { value: simProps.dt }
            }
          },
          output: simProps.dst
        });
        this.init();
      }
      update(...args: any[]) {
        const props = args[0] || {};
        if (!this.uniforms) return;
        if (props.pressure) this.uniforms.pressure.value = props.pressure.texture;
        if (props.vel) this.uniforms.velocity.value = props.vel.texture;
        super.update();
      }
    }

    class Render extends ShaderPass {
      constructor(simProps: any) {
        super({
          material: {
            vertexShader: face_vert,
            fragmentShader: render_frag,
            uniforms: {
              velocity: { value: simProps.src.texture },
              paletteTexture: { value: paletteTex },
              backgroundColor: { value: bgVec4 },
              px: { value: simProps.cellScale }
            }
          },
          output: null
        });
        this.init();
      }
      update(...args: any[]) {
        const props = args[0] || {};
        if (!this.uniforms) return;
        if (props.vel) this.uniforms.velocity.value = props.vel.texture;
        super.update();
      }
    }

    function createAutoDriver(options: {
      speed?: number;
      intensity?: number;
      resumeDelay?: number;
      rampDurationMs?: number;
      takeoverDuration?: number;
    }) {
      const config = {
        enabled: true,
        speed: options.speed ?? 0.5,
        resumeDelay: options.resumeDelay ?? 1000,
        rampDurationMs: options.rampDurationMs ?? 600,
        mouse: {
          autoIntensity: options.intensity ?? 2.2,
          takeoverDuration: options.takeoverDuration ?? 0.25
        }
      };

      let animFrame: number | null = null;
      let lastUserTime = 0;
      let rampStartTime = 0;
      let isRamping = false;
      let angle = 0;

      const driver = {
        ...config,
        forceStop: () => {
          driver.enabled = false;
          if (animFrame) cancelAnimationFrame(animFrame);
        }
      };

      function tick() {
        if (!driver.enabled) return;

        const now = Date.now();
        const timeSinceUser = now - lastUserTime;

        if (Mouse.diff.x !== 0 || Mouse.diff.y !== 0) {
          lastUserTime = now;
          isRamping = false;
        }

        if (timeSinceUser > driver.resumeDelay) {
          if (!isRamping) {
            isRamping = true;
            rampStartTime = now;
          }

          const rampProgress = Math.min((now - rampStartTime) / driver.rampDurationMs, 1);
          const eased = rampProgress * rampProgress * (3 - 2 * rampProgress);

          angle += driver.speed * 0.02;
          const radius = 0.3 * driver.mouse.autoIntensity * eased;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          Mouse.coords.set(x, y);
          Mouse.diff.set(
            (x - Mouse.coords.x) * driver.mouse.takeoverDuration,
            (y - Mouse.coords.y) * driver.mouse.takeoverDuration
          );
        } else {
          Mouse.diff.set(0, 0);
        }

        animFrame = requestAnimationFrame(tick);
      }

      tick();
      return driver;
    }

    function init() {
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
      const gl = renderer.getContext();
      const supportRenderTextureFormat = (() => {
        if (gl.getExtension('OES_texture_half_float') && gl.getExtension('OES_texture_half_float_linear'))
          return THREE.HalfFloatType;
        if (gl.getExtension('OES_texture_float') && gl.getExtension('OES_texture_float_linear'))
          return THREE.FloatType;
        return THREE.UnsignedByteType;
      })();

      renderer.setPixelRatio(1);
      renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
      mountRef.current!.appendChild(renderer.domElement);

      const width = Math.round(resolution * renderer.domElement.width);
      const height = Math.round(resolution * renderer.domElement.height);
      const cellScale = new THREE.Vector2(1.0 / width, 1.0 / height);
      const fboSize = new THREE.Vector2(width, height);
      const boundarySpace = new THREE.Vector2(1, Math.max(width, height) - 1);

      function createRenderTarget() {
        return new THREE.WebGLRenderTarget(width, height, {
          wrapS: THREE.ClampToEdgeWrapping,
          wrapT: THREE.ClampToEdgeWrapping,
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat,
          type: supportRenderTextureFormat,
          depthBuffer: false,
          stencilBuffer: false
        });
      }

      const fbo_vel = createRenderTarget();
      const fbo_vel_ = createRenderTarget();
      const fbo_vel__ = createRenderTarget();
      const fbo_diverge = createRenderTarget();
      const fbo_pressure = createRenderTarget();
      const fbo_pressure_ = createRenderTarget();

      const simProps = {
        cellScale,
        fboSize,
        boundarySpace,
        dt,
        viscous,
        isBounce,
        fbo_vel,
        fbo_vel_,
        fbo_vel__,
        fbo_diverge,
        fbo_pressure,
        fbo_pressure_
      };

      const advect = new Advect(simProps);
      const externalForce = new ExternalForce({
        ...simProps,
        src: fbo_vel,
        dst: fbo_vel_
      });
      const viscous_pass = new Viscous({
        ...simProps,
        src: fbo_vel_,
        dst_: fbo_vel__,
        dst: fbo_vel
      });
      const divergence = new Divergence({
        ...simProps,
        src: fbo_vel,
        dst: fbo_diverge
      });
      const poisson = new Poisson({
        ...simProps,
        src: fbo_diverge,
        dst_: fbo_pressure_,
        dst: fbo_pressure
      });
      const pressure_pass = new Pressure({
        ...simProps,
        src: fbo_vel,
        src_p: fbo_pressure,
        dst: fbo_vel_
      });
      const render_pass = new Render({
        ...simProps,
        src: fbo_vel
      });

      [advect, externalForce, viscous_pass, divergence, poisson, pressure_pass, render_pass].forEach((p) => {
        p.renderer = renderer;
        p.cellScale = cellScale;
        p.fboSize = fboSize;
      });

      const options: SimOptions = {
        iterations_poisson: iterationsPoisson,
        iterations_viscous: iterationsViscous,
        mouse_force: mouseForce,
        resolution,
        cursor_size: cursorSize,
        viscous,
        isBounce,
        dt,
        isViscous,
        BFECC
      };

      function update() {
        const { iterations_poisson, iterations_viscous, mouse_force, cursor_size, isBounce: isBounceOpt, dt: dtOpt, isViscous: isViscousOpt, BFECC: BFECCOpt } = options;

        externalForce.update({
          cellScale,
          cursor_size,
          mouse_force
        });

        if (isViscousOpt) {
          viscous_pass.update({
            viscous: options.viscous,
            iterations: iterations_viscous,
            dt: dtOpt
          });
        }

        advect.update({
          vel: fbo_vel,
          dst: fbo_vel_,
          dt: dtOpt,
          isBounce: isBounceOpt
        });

        if (BFECCOpt) {
          advect.update({
            vel: fbo_vel,
            dst: fbo_vel__,
            dt: -dtOpt,
            isBounce: isBounceOpt
          });

          advect.update({
            vel: fbo_vel,
            dst: fbo_vel_,
            dt: dtOpt,
            isBounce: isBounceOpt
          });
        }

        divergence.update({ vel: fbo_vel_ });
        poisson.update({ iterations: iterations_poisson });
        pressure_pass.update({ vel: fbo_vel_, pressure: poisson.props.output });
        render_pass.update({ vel: fbo_vel });

        [fbo_vel, fbo_vel_].forEach((f, i) => {
          const temp = i === 0 ? fbo_vel : fbo_vel_;
          temp.texture = (i === 0 ? fbo_vel_ : fbo_vel).texture;
        });
      }

      function resize() {
        renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
      }

      const autoDriver = autoDemo
        ? createAutoDriver({
            speed: autoSpeed,
            intensity: autoIntensity,
            resumeDelay: autoResumeDelay,
            rampDurationMs: autoRampDuration * 1000,
            takeoverDuration
          })
        : undefined;

      function render() {
        update();
        rafRef.current = requestAnimationFrame(render);
      }

      const webgl: LiquidEtherWebGL = {
        output: { simulation: { options, resize } },
        autoDriver,
        resize,
        start: render,
        pause: () => {
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }
        },
        dispose: () => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          if (autoDriver) autoDriver.forceStop();
          renderer.dispose();
          [fbo_vel, fbo_vel_, fbo_vel__, fbo_diverge, fbo_pressure, fbo_pressure_].forEach((fbo) => fbo.dispose());
          if (mountRef.current?.contains(renderer.domElement)) {
            mountRef.current.removeChild(renderer.domElement);
          }
        }
      };

      webglRef.current = webgl;
      webgl.start();

      const rect = mountRef.current!.getBoundingClientRect();
      const handleMove = (clientX: number, clientY: number) => {
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((clientY - rect.top) / rect.height) * 2 + 1;
        const dx = x - Mouse.coords.x;
        const dy = y - Mouse.coords.y;
        Mouse.coords.set(x, y);
        Mouse.diff.set(dx, dy);
      };

      const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
      const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        if (touch) handleMove(touch.clientX, touch.clientY);
      };
      const onMouseLeave = () => Mouse.diff.set(0, 0);

      mountRef.current.addEventListener('mousemove', onMouseMove);
      mountRef.current.addEventListener('touchmove', onTouchMove, { passive: false });
      mountRef.current.addEventListener('mouseleave', onMouseLeave);

      return {
        webgl,
        cleanup: () => {
          mountRef.current?.removeEventListener('mousemove', onMouseMove);
          mountRef.current?.removeEventListener('touchmove', onTouchMove);
          mountRef.current?.removeEventListener('mouseleave', onMouseLeave);
        }
      };
    }

    const { webgl, cleanup } = init();

    resizeObserverRef.current = new ResizeObserver(() => {
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        webgl.resize();
        webgl.output?.simulation?.resize();
      });
    });

    if (mountRef.current) {
      resizeObserverRef.current.observe(mountRef.current);
    }

    intersectionObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          webgl.start();
        } else {
          webgl.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      intersectionObserverRef.current.observe(mountRef.current);
    }

    return () => {
      cleanup();
      webgl.dispose();
      resizeObserverRef.current?.disconnect();
      intersectionObserverRef.current?.disconnect();
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
    };
  }, [
    mouseForce,
    cursorSize,
    isViscous,
    viscous,
    iterationsViscous,
    iterationsPoisson,
    dt,
    BFECC,
    resolution,
    isBounce,
    colors,
    autoDemo,
    autoSpeed,
    autoIntensity,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration
  ]);

  return (
    <div
      ref={mountRef}
      className={`liquid-ether-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    />
  );
}
