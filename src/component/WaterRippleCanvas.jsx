// component/WaterRippleCanvas.jsx
import React, { useEffect, useRef } from 'react';

const WaterRippleCanvas = () => {
  const canvasRef = useRef(null);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.alpha = 0.3;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      update() {
        this.radius += 1.2;
        this.alpha -= 0.005;
      }
      isDone() {
        return this.alpha <= 0;
      }
    }

    function clear() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
    }

    function animate() {
      clear();
      ripples.current.forEach((ripple, i) => {
        ripple.update();
        ripple.draw();
        if (ripple.isDone()) ripples.current.splice(i, 1);
      });
      requestAnimationFrame(animate);
    }

    const interval = setInterval(() => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ripples.current.push(new Ripple(x, y));
    }, 1500);

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}
    />
  );
};

export default WaterRippleCanvas;
