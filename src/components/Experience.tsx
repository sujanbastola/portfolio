import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'Espec Corp',
    period: '2021 – Present · 5 years',
    location: 'Osaka, Japan',
    description: 'Building and maintaining full-stack applications with Ruby and React. Developing internal tools, APIs, and Linux-based systems for a world-leading R&D equipment manufacturer.',
    tags: ['Ruby', 'React', 'Linux', 'REST API', 'PostgreSQL'],
    link: 'https://www.espec.co.jp/english/corporate/research.html',
    linkLabel: 'Espec R&D Center',
  },
  {
    type: 'education',
    title: 'Bachelor of Information Technology',
    org: 'Wakkanai Hokusei Gakuen University',
    period: 'Graduated Sep 2021',
    location: 'Wakkanai, Hokkaido, Japan',
    description: 'Degree in Information Technology with focus on software engineering, systems, and computer science fundamentals.',
    tags: ['Software Engineering', 'CS Fundamentals', 'Systems'],
  },
];

const TimelineItem: React.FC<{ item: typeof timeline[0]; index: number }> = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isWork = item.type === 'work';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="timeline-row" style={{ display: 'flex', gap: 20, marginBottom: 40 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: isWork ? 'var(--accent)' : 'var(--accent-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 20px ${isWork ? 'rgba(41,151,255,0.3)' : 'rgba(191,90,242,0.3)'}`,
        }}>
          {isWork ? <Briefcase size={20} color="#fff" /> : <GraduationCap size={20} color="#fff" />}
        </div>
        <div style={{ width: 2, flex: 1, background: 'var(--border)', marginTop: 8 }} />
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        style={{
          flex: 1, background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 20, padding: 'clamp(16px, 3vw, 28px) clamp(16px, 3vw, 32px)', marginBottom: 12,
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--border-hover)';
          e.currentTarget.style.boxShadow = 'var(--shadow)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.5, marginBottom: 4 }}>{item.title}</h3>
            <p style={{ color: isWork ? 'var(--accent)' : 'var(--accent-2)', fontWeight: 600, fontSize: 15 }}>{item.org}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: 13, marginBottom: 2 }}>
              <Calendar size={12} /> {item.period}
            </div>
            <p style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>{item.location}</p>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 15, marginBottom: 16 }}>
          {item.description}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: item.link ? 16 : 0 }}>
          {item.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 12, fontWeight: 600, padding: '4px 10px',
              borderRadius: 20, background: 'var(--border)', color: 'var(--text-secondary)',
            }}>{tag}</span>
          ))}
        </div>
        {item.link && (
          <motion.a
            href={item.link} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 700,
              color: 'var(--accent)', textDecoration: 'none',
              padding: '8px 16px', borderRadius: 20,
              background: 'rgba(41,151,255,0.1)',
              border: '1px solid rgba(41,151,255,0.25)',
            }}
          >
            <ExternalLink size={13} /> {item.linkLabel}
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" style={{ padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Journey</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: -2 }}>
            Experience & Education
          </h2>
        </motion.div>

        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
