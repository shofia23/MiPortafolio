import React, { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';

const FlowFieldBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const noise2D = createNoise2D();
        const particles = [];
        const numParticles = 300;
        const noiseScale = 0.002;
        const particleSpeed = 0.5;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.history = [{ x: this.x, y: this.y }];
                this.maxLength = Math.floor(Math.random() * 50) + 20;
            }

            update(time) {
                const angle = noise2D(this.x * noiseScale, this.y * noiseScale + time * 0.00005) * Math.PI * 2;
                this.x += Math.cos(angle) * particleSpeed;
                this.y += Math.sin(angle) * particleSpeed;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > this.maxLength) {
                    this.history.shift();
                }

                if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.history = [{ x: this.x, y: this.y }];
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.history[0].x, this.history[0].y);
                for (let i = 1; i < this.history.length; i++) {
                    ctx.lineTo(this.history[i].x, this.history[i].y);
                }
                const gradient = ctx.createLinearGradient(this.history[0].x, this.history[0].y, this.history[this.history.length - 1].x, this.history[this.history.length - 1].y);
                gradient.addColorStop(0, 'rgba(255, 0, 107, 0)');
                gradient.addColorStop(1, 'rgba(255, 0, 107, 0.4)');
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }

        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        let time = 0;
        const animate = () => {
            time++;
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update(time);
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default FlowFieldBackground;