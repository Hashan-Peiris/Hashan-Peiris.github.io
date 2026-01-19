import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Lattice nodes for crystal structure animation
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      connections: number[];
    }

    const nodes: Node[] = [];
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        connections: [],
      });
    }

    // Hexagonal unit cell vertices (for crystal structure effect)
    const hexagons: { x: number; y: number; size: number; rotation: number; rotationSpeed: number }[] = [];
    const hexCount = 5;
    
    for (let i = 0; i < hexCount; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
      });
    }

    const drawHexagon = (x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(212, 164, 57, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw rotating hexagons (crystal unit cells)
      hexagons.forEach((hex) => {
        hex.rotation += hex.rotationSpeed;
        drawHexagon(hex.x, hex.y, hex.size, hex.rotation);
        // Inner hexagon
        drawHexagon(hex.x, hex.y, hex.size * 0.6, -hex.rotation * 1.5);
      });

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node (atom)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 164, 57, ${node.opacity * 0.5})`;
        ctx.fill();

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        );
        gradient.addColorStop(0, `rgba(212, 164, 57, ${node.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(212, 164, 57, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections (bonds)
        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(100, 180, 220, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="materials-bg">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="hex-pattern" />
      
      {/* Gradient orbs */}
      <div 
        className="gradient-orb"
        style={{
          width: '600px',
          height: '600px',
          top: '10%',
          left: '60%',
          background: 'radial-gradient(circle, hsl(38 75% 55% / 0.1) 0%, transparent 70%)',
        }}
      />
      <div 
        className="gradient-orb"
        style={{
          width: '400px',
          height: '400px',
          top: '60%',
          left: '10%',
          background: 'radial-gradient(circle, hsl(200 70% 50% / 0.08) 0%, transparent 70%)',
          animationDelay: '-10s',
        }}
      />
      <div 
        className="gradient-orb"
        style={{
          width: '300px',
          height: '300px',
          top: '80%',
          left: '70%',
          background: 'radial-gradient(circle, hsl(260 60% 55% / 0.06) 0%, transparent 70%)',
          animationDelay: '-15s',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
