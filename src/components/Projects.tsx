import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitFork, ExternalLink, Lock } from 'lucide-react';

const projects = [
  {
    name: 'GitHub Portfolio',
    description: 'A collection of personal and open-source projects built across full-stack, scripting, automation, and AI tooling. Each repo reflects real problem-solving — built solo from scratch.',
    tags: ['Ruby', 'JavaScript', 'React', 'Linux', 'AI'],
    github: 'https://github.com/sujanbastola',
    live: null,
    confidential: false,
    gradient: 'linear-gradient(135deg, #2997ff22, #bf5af222)',
    accentColor: '#2997ff',
  },
  {
    name: 'Enterprise Projects @ Espec',
    description: 'Internal tools and full-stack systems built for Espec Corp over 5 years. Includes Ruby APIs, React dashboards, PostgreSQL databases, and Linux/Nginx-based server infrastructure — details confidential.',
    tags: ['Ruby', 'React', 'PostgreSQL', 'Linux', 'Nginx', 'REST API'],
    github: null,
    live: null,
    confidential: true,
    gradient: 'linear-gradient(135deg, #30d15822, #2997ff22)',
    accentColor: '#30d158',
  },
  {
    name: 'AI & Agentic Automation (NDA)',
    description: 'Agentic workflow automation built at company level using n8n — multi-step pipelines that integrate LLMs, APIs, and business logic to automate complex processes end-to-end. Details are under NDA.',
    tags: ['n8n', 'AI Agents', 'LLM', 'Automation', 'Workflow'],
    github: null,
    live: null,
    confidential: true,
    gradient: 'linear-gradient(135deg, #bf5af222, #ff6b3522)',
    accentColor: '#bf5af2',
  },
];

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 24,
        padding: '40px',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? 'var(--shadow)' : 'none',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, background: project.gradient,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: `${project.accentColor}20`,
            border: `1px solid ${project.accentColor}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {project.confidential
              ? <Lock size={22} color={project.accentColor} />
              : <GitFork size={22} color={project.accentColor} />}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {project.github && (
              <motion.a
                href={project.github} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <GitFork size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                }}
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12 }}>{project.name}</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 15, marginBottom: 24 }}>
          {project.description}
        </p>

        {project.confidential && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16,
            fontSize: 12, color: project.accentColor, fontWeight: 600,
            padding: '4px 10px', borderRadius: 20,
            background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30`,
          }}>
            <Lock size={10} /> NDA — Details Confidential
          </div>
        )}

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 12, fontWeight: 600, padding: '4px 10px',
              borderRadius: 20, background: 'var(--border)', color: 'var(--text-secondary)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Work</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: -2, marginBottom: 16 }}>
            Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
            Most of my production work is under NDA. My public GitHub shows personal experiments and open exploration.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 48 }}
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
              textDecoration: 'none', transition: 'border-color 0.2s',
            }}
          >
            <GitFork size={18} /> View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
