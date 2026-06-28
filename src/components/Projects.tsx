import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitFork, ExternalLink, Lock, Star } from 'lucide-react';

const featured = [
  {
    name: 'Hamro Cricket Score',
    tagline: 'Live scoreboard for local cricket games — free for everyone.',
    description:
      'A real-time cricket scoring app that lets anyone stream a live scoreboard overlay for local games. Users can score matches, share live links, and display professional overlays — completely free.',
    tags: ['React', 'Firebase', 'Real-time DB', 'JavaScript'],
    github: 'https://github.com/sujanbastola/Hamro-Cricket-Score-main',
    live: 'https://hamro-cricket-d3a64.web.app/#/login',
    gradient: 'linear-gradient(135deg, #30d158, #2997ff)',
    gradientBg: 'linear-gradient(135deg, rgba(48,209,88,0.08), rgba(41,151,255,0.08))',
    accentColor: '#30d158',
    emoji: '🏏',
  },
  {
    name: 'Wakkanai Hospital Management',
    tagline: 'Full hospital management system for clinical operations.',
    description:
      'A comprehensive hospital management system built with Django. Handles patient records, appointments, doctor schedules, billing, and medical history — designed for real clinical workflows.',
    tags: ['Django', 'Python', 'MySQL', 'HTML/CSS'],
    github: 'https://github.com/sujanbastola/wakkanaihospital',
    live: null,
    gradient: 'linear-gradient(135deg, #2997ff, #bf5af2)',
    gradientBg: 'linear-gradient(135deg, rgba(41,151,255,0.08), rgba(191,90,242,0.08))',
    accentColor: '#2997ff',
    emoji: '🏥',
  },
  {
    name: 'Bishnu Homestay Web App',
    tagline: 'Booking & management platform for a local homestay business.',
    description:
      'A Django-powered web application for a homestay business. Includes room browsing, booking management, guest inquiries, and an admin dashboard for managing reservations and availability.',
    tags: ['Django', 'Python', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/sujanbastola/bishnuhomestay',
    live: null,
    gradient: 'linear-gradient(135deg, #ff9900, #ff375f)',
    gradientBg: 'linear-gradient(135deg, rgba(255,153,0,0.08), rgba(255,55,95,0.08))',
    accentColor: '#ff9900',
    emoji: '🏡',
  },
  {
    name: 'Personal Portfolio',
    tagline: 'This site — built from scratch with React & TypeScript.',
    description:
      'My personal developer portfolio built with React + TypeScript, featuring Framer Motion animations, a particle canvas background, dark/light mode, and an Apple-inspired design system.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'CSS Variables'],
    github: 'https://github.com/sujanbastola',
    live: 'https://sujanbastola.github.io/sujan-portfolio',
    gradient: 'linear-gradient(135deg, #bf5af2, #2997ff)',
    gradientBg: 'linear-gradient(135deg, rgba(191,90,242,0.08), rgba(41,151,255,0.08))',
    accentColor: '#bf5af2',
    emoji: '💼',
  },
];

const confidential = [
  {
    name: 'Enterprise Projects @ Espec Corp',
    description: 'Internal tools and full-stack systems built over 5 years at Espec Corp — a world-leading R&D equipment manufacturer. Ruby APIs, React dashboards, PostgreSQL databases, and Linux/Nginx server infrastructure powering real industrial workflows.',
    tags: ['Ruby', 'React', 'PostgreSQL', 'Linux', 'Nginx'],
    accentColor: '#30d158',
    link: null,
    linkLabel: null,
  },
  {
    name: 'AI & Agentic Automation',
    description: 'Agentic workflow automation using n8n — multi-step LLM pipelines that integrate APIs and business logic to automate complex processes end-to-end.',
    tags: ['n8n', 'AI Agents', 'LLM', 'Automation'],
    accentColor: '#bf5af2',
    link: null,
    linkLabel: null,
  },
];

const FeaturedCard: React.FC<{ project: typeof featured[0]; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden',
        border: `1px solid ${hovered ? project.accentColor + '55' : 'var(--border)'}`,
        background: hovered ? project.gradientBg : 'var(--bg-card)',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px ${project.accentColor}22` : 'none',
      }}
    >
      {/* Top gradient bar */}
      <div style={{ height: 4, background: project.gradient }} />

      <div style={{ padding: 'clamp(20px, 4vw, 36px)' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 16, fontSize: 24,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: project.gradientBg,
              border: `1px solid ${project.accentColor}30`,
            }}>
              {project.emoji}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>{project.name}</h3>
                {project.live && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
                    background: '#30d15820', color: '#30d158', letterSpacing: 0.5,
                    border: '1px solid #30d15840',
                  }}>LIVE</span>
                )}
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{project.tagline}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            {project.github && (
              <motion.a
                href={project.github} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                style={{
                  width: 38, height: 38, borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = project.accentColor;
                  e.currentTarget.style.color = project.accentColor;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <GitFork size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 20,
                  background: project.accentColor, color: '#fff',
                  fontSize: 13, fontWeight: 700, textDecoration: 'none',
                  boxShadow: `0 4px 16px ${project.accentColor}44`,
                }}
              >
                <ExternalLink size={13} /> Live
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: 15, marginBottom: 24 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 12, fontWeight: 600, padding: '5px 12px',
              borderRadius: 20, color: project.accentColor,
              background: project.accentColor + '15',
              border: `1px solid ${project.accentColor}30`,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [showNDA, setShowNDA] = useState(true);

  return (
    <section id="projects" style={{ padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 24px)', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Work</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: -2, marginBottom: 16 }}>
            Projects & Achievements
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Real products built solo — from idea to deployment. Each one solves a genuine problem.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1, marginBottom: 48, borderRadius: 20, overflow: 'hidden',
            border: '1px solid var(--border)',
          }}
        >
          {[
            { value: '4+', label: 'Public Projects' },
            { value: '5yr', label: 'Experience' },
            { value: '1', label: 'Live App' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '20px 12px', textAlign: 'center',
              background: 'var(--bg-card)', borderRight: i < 2 ? '1px solid var(--border)' : 'none',
            }}>
              <p style={{ fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 800, letterSpacing: -1, color: 'var(--accent)', marginBottom: 4 }}>{s.value}</p>
              <p style={{ fontSize: 'clamp(11px, 2vw, 13px)', color: 'var(--text-secondary)', fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Featured projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: 20, marginBottom: 48 }}>
          {featured.map((project, i) => (
            <FeaturedCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* NDA toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', marginBottom: showNDA ? 32 : 0 }}
        >
          <button
            onClick={() => setShowNDA(o => !o)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 24px', borderRadius: 30,
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              color: 'var(--text-secondary)', fontSize: 14, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Lock size={14} />
            {showNDA ? 'Hide' : 'Show'} company achievements (NDA)
          </button>
        </motion.div>

        {/* NDA cards */}
        <AnimatePresence>
          {showNDA && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 16, paddingTop: 24 }}>
                {confidential.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: 'var(--bg-card)', border: '1px solid var(--border)',
                      borderRadius: 20, padding: '28px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <Lock size={14} color={c.accentColor} />
                      <h4 style={{ fontSize: 16, fontWeight: 700 }}>{c.name}</h4>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20, marginLeft: 'auto',
                        background: `${c.accentColor}15`, color: c.accentColor, border: `1px solid ${c.accentColor}30`,
                      }}>NDA</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{c.description}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: c.link ? 16 : 0 }}>
                      {c.tags.map(t => (
                        <span key={t} style={{
                          fontSize: 11, fontWeight: 600, padding: '3px 10px',
                          borderRadius: 20, background: 'var(--border)', color: 'var(--text-secondary)',
                        }}>{t}</span>
                      ))}
                    </div>
                    {c.link && (
                      <motion.a
                        href={c.link} target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          fontSize: 12, fontWeight: 700, color: c.accentColor,
                          textDecoration: 'none', padding: '7px 14px', borderRadius: 20,
                          background: `${c.accentColor}15`, border: `1px solid ${c.accentColor}35`,
                        }}
                      >
                        <ExternalLink size={12} /> {c.linkLabel}
                      </motion.a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <motion.a
            href="https://github.com/sujanbastola"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 40,
              border: '1px solid var(--border-hover)',
              color: 'var(--text-primary)', fontSize: 15, fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Star size={16} /> View all repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
