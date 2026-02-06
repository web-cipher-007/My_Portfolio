import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2 + 1,
    }));

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const mouseRadius = 120;

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply mouse repulsion only when very close
        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius;
          const repulsion = 0.3;
          particle.vx += (dx / distance) * force * repulsion;
          particle.vy += (dy / distance) * force * repulsion;
        }

        // Keep particles moving with minimal damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Maintain minimum velocity
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed < 0.3) {
          const angle = Math.random() * Math.PI * 2;
          particle.vx += Math.cos(angle) * 0.1;
          particle.vy += Math.sin(angle) * 0.1;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with bounce
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -1;
        }
        if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -1;
        }
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -1;
        }
        if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -1;
        }

        // Draw particle
        const isDark = document.documentElement.classList.contains('dark');
        const isNearMouse = distance < mouseRadius;
        ctx.fillStyle = isDark 
          ? (isNearMouse ? 'rgba(99, 102, 241, 0.9)' : 'rgba(99, 102, 241, 0.6)')
          : (isNearMouse ? 'rgba(79, 70, 229, 0.7)' : 'rgba(79, 70, 229, 0.4)');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      const maxDistance = 150;
      const isDark = document.documentElement.classList.contains('dark');
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = isDark 
              ? `rgba(99, 102, 241, ${opacity})` 
              : `rgba(79, 70, 229, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        const mouse = mouseRef.current;
        const dxMouse = particlesRef.current[i].x - mouse.x;
        const dyMouse = particlesRef.current[i].y - mouse.y;
        const distanceToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceToMouse < 120) {
          const opacity = (1 - distanceToMouse / 120) * 0.6;
          ctx.strokeStyle = isDark 
            ? `rgba(139, 92, 246, ${opacity})` 
            : `rgba(124, 58, 237, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ opacity: 0.4, pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;
