import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, GitFork, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,151,255,${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(41,151,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <section id="about" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,151,255,0.08) 0%, transparent 70%)',
      }} />

      <motion.div
        variants={container} initial="hidden" animate="show"
        style={{ position: 'relative', textAlign: 'center', padding: '120px 24px 80px', maxWidth: 900, margin: '0 auto' }}
      >
        <motion.div variants={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#30d158', boxShadow: '0 0 12px #30d158' }} />
          <span style={{ fontSize: 13, color: 'var(--text-secondary)', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 500 }}>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1 variants={item} style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: -3,
          marginBottom: 16,
        }}>
          <span style={{ color: 'var(--text-primary)' }}>Sujan</span>{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Bastola</span>
        </motion.h1>

        <motion.p variants={item} style={{
          fontSize: 'clamp(18px, 3vw, 26px)',
          color: 'var(--text-secondary)',
          fontWeight: 400,
          marginBottom: 12,
          letterSpacing: -0.5,
        }}>
          Full Stack Developer
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {['Ruby', 'JavaScript', 'React', 'Linux', 'AI Agents'].map(tech => (
            <span key={tech} style={{
              fontSize: 12, fontWeight: 600, padding: '4px 12px',
              borderRadius: 20, letterSpacing: 0.5,
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              color: 'var(--accent)',
            }}>{tech}</span>
          ))}
        </motion.div>

        <motion.p variants={item} style={{
          fontSize: 18, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 40px',
          lineHeight: 1.7, fontStyle: 'italic',
        }}>
          "Build it by yourself."
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-tertiary)', fontSize: 13 }}>
            <MapPin size={14} /> Osaka, Japan
          </span>
          <span style={{ color: 'var(--border-hover)' }}>·</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-tertiary)', fontSize: 13 }}>
            5 years experience
          </span>
        </motion.div>

        <motion.div variants={item} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="https://github.com/sujanbastola"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 40,
              background: 'var(--text-primary)', color: 'var(--bg)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            <GitFork size={18} /> GitHub
          </motion.a>
          <motion.a
            href="mailto:bastolasujan202@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 40,
              background: 'transparent',
              border: '1px solid var(--border-hover)',
              color: 'var(--text-primary)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}
          >
            <Mail size={18} /> Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: 'var(--text-tertiary)' }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
