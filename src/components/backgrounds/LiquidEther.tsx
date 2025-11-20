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
  autoResumeDelay = 3000,
  autoRampDuration = 0.6
}: LiquidEtherProps): React.ReactElement {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, isDown: false });
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }>>([]);
  const autoTimeRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    canvas.width = width * resolution * pixelRatio;
    canvas.height = height * resolution * pixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Initialize particles
    const particleCount = 150;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }> = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random()
      });
    }
    particlesRef.current = particles;

    // Mouse tracking
    const updateMouse = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.px = mouseRef.current.x;
      mouseRef.current.py = mouseRef.current.y;
      mouseRef.current.x = (e.clientX - rect.left) * resolution * pixelRatio;
      mouseRef.current.y = (e.clientY - rect.top) * resolution * pixelRatio;
    };

    const handleMouseDown = () => {
      mouseRef.current.isDown = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateMouse(e);
    };

    const handleTouchStart = (e: TouchEvent) => {
      mouseRef.current.isDown = true;
      updateMouse(e.touches[0]);
    };

    const handleTouchEnd = () => {
      mouseRef.current.isDown = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      updateMouse(e.touches[0]);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Animation loop
    const render = () => {
      if (!ctx) return;

      // Clear with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply background gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      bgGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Auto demo mode
      if (autoDemo) {
        autoTimeRef.current += 0.016 * autoSpeed;
        const autoX = (Math.sin(autoTimeRef.current) * 0.4 + 0.5) * canvas.width;
        const autoY = (Math.cos(autoTimeRef.current * 0.7) * 0.4 + 0.5) * canvas.height;

        // Auto gradient effect
        const autoGradient = ctx.createRadialGradient(
          autoX, autoY, 0,
          autoX, autoY, cursorSize * autoIntensity * pixelRatio
        );
        
        const color1 = new THREE.Color(colors[0]);
        const color2 = new THREE.Color(colors[1]);
        
        autoGradient.addColorStop(0, `rgba(${Math.round(color1.r * 255)}, ${Math.round(color1.g * 255)}, ${Math.round(color1.b * 255)}, 0.4)`);
        autoGradient.addColorStop(0.5, `rgba(${Math.round(color2.r * 255)}, ${Math.round(color2.g * 255)}, ${Math.round(color2.b * 255)}, 0.2)`);
        autoGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = autoGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Mouse interaction effect
      const dx = mouseRef.current.x - mouseRef.current.px;
      const dy = mouseRef.current.y - mouseRef.current.py;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      if (velocity > 0.5) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, cursorSize * Math.min(velocity * 0.5, 3) * pixelRatio
        );
        
        const mouseColor = new THREE.Color(colors[colors.length > 2 ? 2 : 1]);
        const alpha = Math.min(velocity * 0.02, 0.6);
        
        gradient.addColorStop(0, `rgba(${Math.round(mouseColor.r * 255)}, ${Math.round(mouseColor.g * 255)}, ${Math.round(mouseColor.b * 255)}, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(${Math.round(mouseColor.r * 255)}, ${Math.round(mouseColor.g * 255)}, ${Math.round(mouseColor.b * 255)}, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Mouse interaction with particles
        const distToMouse = Math.hypot(particle.x - mouseRef.current.x, particle.y - mouseRef.current.y);
        if (distToMouse < cursorSize * pixelRatio * 2) {
          const angle = Math.atan2(particle.y - mouseRef.current.y, particle.x - mouseRef.current.x);
          const force = (1 - distToMouse / (cursorSize * pixelRatio * 2)) * mouseForce * 0.1;
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }
        
        // Apply damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.9;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.9;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
        
        // Update life
        particle.life = (particle.life + 0.002) % 1;
        
        // Draw particle with glow
        const color = new THREE.Color(particle.color);
        const alpha = 0.3 * Math.sin(particle.life * Math.PI);
        
        ctx.beginPath();
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, 15 * pixelRatio
        );
        particleGradient.addColorStop(0, `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${alpha})`);
        particleGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = particleGradient;
        ctx.arc(particle.x, particle.y, 15 * pixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(render);
    };

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      canvas.width = width * resolution * pixelRatio;
      canvas.height = height * resolution * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    window.addEventListener('resize', handleResize);
    mountRef.current.appendChild(canvas);
    render();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
      if (canvas.parentElement) canvas.parentElement.removeChild(canvas);
    };
  }, [colors, mouseForce, cursorSize, resolution, autoDemo, autoSpeed, autoIntensity]);

  return (
    <div
      ref={mountRef}
      className={`liquid-ether ${className}`}
      style={style}
    />
  );
}
