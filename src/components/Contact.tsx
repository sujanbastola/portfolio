import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, GitFork, MapPin, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('bastolasujan202@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cards = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'bastolasujan202@gmail.com',
      action: copyEmail,
      actionLabel: copied ? 'Copied!' : 'Copy',
      actionIcon: copied ? <Check size={14} /> : <Copy size={14} />,
      color: '#2997ff',
    },
    {
      icon: <GitFork size={24} />,
      label: 'GitHub',
      value: 'github.com/sujanbastola',
      href: 'https://github.com/sujanbastola',
      actionLabel: 'View Profile',
      actionIcon: <GitFork size={14} />,
      color: '#bf5af2',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Osaka, Japan',
      actionLabel: '🇯🇵 JST (UTC+9)',
      color: '#30d158',
    },
  ];

  return (
    <section id="contact" style={{ padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Contact</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: -2, marginBottom: 16 }}>
            Let's Build Together
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            I'm open to new opportunities, collaborations, and interesting problems. Feel free to reach out.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginBottom: 60 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 24, padding: '32px 28px',
                transition: 'border-color 0.2s, box-shadow 0.3s',
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
              <div style={{
                width: 52, height: 52, borderRadius: 16, marginBottom: 20,
                background: `${card.color}18`, border: `1px solid ${card.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: card.color,
              }}>
                {card.icon}
              </div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{card.label}</p>
              <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 20, wordBreak: 'break-all' }}>{card.value}</p>

              {card.href ? (
                <motion.a
                  href={card.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 600, color: card.color,
                    textDecoration: 'none', padding: '8px 16px',
                    borderRadius: 20, background: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                  }}
                >
                  {card.actionIcon} {card.actionLabel}
                </motion.a>
              ) : card.action ? (
                <motion.button
                  onClick={card.action} whileHover={{ scale: 1.03 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 600, color: copied ? '#30d158' : card.color,
                    cursor: 'pointer', padding: '8px 16px', borderRadius: 20,
                    background: copied ? '#30d15815' : `${card.color}15`,
                    border: `1px solid ${copied ? '#30d15830' : `${card.color}30`}`,
                    fontFamily: 'inherit', transition: 'all 0.2s',
                  }}
                >
                  {card.actionIcon} {card.actionLabel}
                </motion.button>
              ) : (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 600, color: card.color,
                  padding: '8px 16px', borderRadius: 20,
                  background: `${card.color}15`, border: `1px solid ${card.color}30`,
                }}>
                  {card.actionLabel}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textAlign: 'center', padding: '40px',
            background: 'linear-gradient(135deg, rgba(41,151,255,0.06), rgba(191,90,242,0.06))',
            border: '1px solid var(--border)', borderRadius: 24,
          }}
        >
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 20 }}>
            Ready to work together? Send me a message.
          </p>
          <motion.a
            href="mailto:bastolasujan202@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 36px', borderRadius: 40,
              background: 'var(--accent)', color: '#fff',
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(41,151,255,0.35)',
            }}
          >
            <Mail size={18} /> Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
