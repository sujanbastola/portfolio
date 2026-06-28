import React from 'react';
import { motion } from 'framer-motion';
import { GitFork, Heart } from 'lucide-react';

const Footer: React.FC = () => (
  <footer style={{
    padding: '32px 24px',
    borderTop: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
  }}>
    <div style={{
      maxWidth: 900, margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
    }}>
      <p style={{ color: 'var(--text-tertiary)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
        Built with <Heart size={12} color="#ff375f" fill="#ff375f" /> by Sujan Bastola · Osaka, Japan
      </p>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <motion.a
          href="https://github.com/sujanbastola"
          target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: 'var(--text-primary)' }}
          style={{ color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center' }}
        >
          <GitFork size={18} />
        </motion.a>
        <span style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>© {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

export default Footer;
