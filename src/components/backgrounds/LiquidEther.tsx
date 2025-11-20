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
  const mountRef = useRef<HTMLDivElement | null>(null);
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
      pixelRatio = 1;
      constructor(public canvas: HTMLCanvasElement) {}
      resize(width: number, height: number, pixelRatio: number) {
        this.width = width;
        this.height = height;
        this.pixelRatio = pixelRatio;
        this.aspect = width / height;
      }
    }

    class Mouse {
      x = 0;
      y = 0;
      px = 0;
      py = 0;
      isDown = false;
      constructor(public canvas: HTMLCanvasElement) {
        this.init();
      }
      init() {
        const update = (e: MouseEvent | Touch) => {
          const rect = (this.canvas as HTMLCanvasElement).getBoundingClientRect();
          this.px = this.x;
          this.py = this.y;
          this.x = e.clientX - rect.left;
          this.y = e.clientY - rect.top;
        };
        this.canvas.addEventListener('mousedown', () => (this.isDown = true));
        this.canvas.addEventListener('mouseup', () => (this.isDown = false));
        this.canvas.addEventListener('mousemove', update);
        this.canvas.addEventListener('touchstart', e => {
          this.isDown = true;
          update(e.touches[0]);
        });
        this.canvas.addEventListener('touchend', () => (this.isDown = false));
        this.canvas.addEventListener('touchmove', e => {
          e.preventDefault();
          update(e.touches[0]);
        });
      }
    }

    // Simplified version of the fluid simulation
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const common = new CommonClass(canvas);
    const mouse = new Mouse(canvas);

    function resize() {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = width * resolution;
      canvas.height = height * resolution;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      common.resize(width * resolution, height * resolution, pixelRatio);
    }

    function render() {
      if (!ctx) return;
      const gradient = ctx.createRadialGradient(
        mouse.x * resolution,
        mouse.y * resolution,
        0,
        mouse.x * resolution,
        mouse.y * resolution,
        cursorSize * 2
      );
      
      // Use colors from palette
      const color1 = new THREE.Color(colors[0]);
      const color2 = colors.length > 1 ? new THREE.Color(colors[1]) : color1;
      const color3 = colors.length > 2 ? new THREE.Color(colors[2]) : color2;
      
      gradient.addColorStop(0, `rgba(${Math.round(color1.r * 255)}, ${Math.round(color1.g * 255)}, ${Math.round(color1.b * 255)}, 0.3)`);
      gradient.addColorStop(0.5, `rgba(${Math.round(color2.r * 255)}, ${Math.round(color2.g * 255)}, ${Math.round(color2.b * 255)}, 0.2)`);
      gradient.addColorStop(1, `rgba(${Math.round(color3.r * 255)}, ${Math.round(color3.g * 255)}, ${Math.round(color3.b * 255)}, 0.0)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (autoDemo) {
        const time = Date.now() * 0.001 * autoSpeed;
        const autoX = (Math.sin(time) * 0.5 + 0.5) * canvas.width;
        const autoY = (Math.cos(time * 0.7) * 0.5 + 0.5) * canvas.height;
        
        const autoGradient = ctx.createRadialGradient(
          autoX,
          autoY,
          0,
          autoX,
          autoY,
          cursorSize * autoIntensity
        );
        
        autoGradient.addColorStop(0, `rgba(${Math.round(color2.r * 255)}, ${Math.round(color2.g * 255)}, ${Math.round(color2.b * 255)}, 0.4)`);
        autoGradient.addColorStop(0.5, `rgba(${Math.round(color3.r * 255)}, ${Math.round(color3.g * 255)}, ${Math.round(color3.b * 255)}, 0.2)`);
        autoGradient.addColorStop(1, `rgba(${Math.round(color1.r * 255)}, ${Math.round(color1.g * 255)}, ${Math.round(color1.b * 255)}, 0.0)`);
        
        ctx.fillStyle = autoGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      rafRef.current = requestAnimationFrame(render);
    }

    if (mountRef.current) {
      mountRef.current.appendChild(canvas);
      resize();
      render();

      // Setup resize observer
      resizeObserverRef.current = new ResizeObserver(() => {
        if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
        resizeRafRef.current = requestAnimationFrame(resize);
      });
      resizeObserverRef.current.observe(mountRef.current);

      // Setup intersection observer for pause/resume
      intersectionObserverRef.current = new IntersectionObserver(entries => {
        isVisibleRef.current = entries[0].isIntersecting;
        if (isVisibleRef.current && rafRef.current === null) {
          render();
        } else if (!isVisibleRef.current && rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      });
      intersectionObserverRef.current.observe(mountRef.current);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      if (intersectionObserverRef.current) intersectionObserverRef.current.disconnect();
      if (canvas.parentElement) canvas.parentElement.removeChild(canvas);
    };
  }, [
    colors,
    mouseForce,
    cursorSize,
    resolution,
    autoDemo,
    autoSpeed,
    autoIntensity,
    isViscous,
    viscous,
    iterationsViscous,
    iterationsPoisson,
    isBounce,
    dt,
    BFECC,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration
  ]);

  return (
    <div
      ref={mountRef}
      className={`liquid-ether ${className}`}
      style={style}
    />
  );
}
