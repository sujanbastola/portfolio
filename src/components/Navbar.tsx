import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          height: 60,
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.5, cursor: 'pointer', color: 'var(--text-primary)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SB<span style={{ color: 'var(--accent)' }}>.</span>
        </motion.div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-links-desktop">
          {links.map(link => (
            <motion.button
              key={link}
              whileHover={{ color: 'var(--accent)' }}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', fontSize: 14, fontWeight: 500,
                padding: '6px 14px', borderRadius: 20, fontFamily: 'inherit',
                transition: 'color 0.2s',
              }}
            >
              {link}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '50%', width: 36, height: 36, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-primary)', marginLeft: 8,
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>

        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', color: 'var(--text-primary)', padding: 4,
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 60, left: 0, right: 0, zIndex: 999,
              background: 'var(--nav-bg)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)', padding: '20px 40px',
              display: 'flex', flexDirection: 'column', gap: 4,
            }}
          >
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-primary)', fontSize: 16, fontWeight: 500,
                  padding: '12px 0', textAlign: 'left', fontFamily: 'inherit',
                  borderBottom: '1px solid var(--border)',
                }}>{link}</button>
            ))}
            <button onClick={toggleTheme} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-secondary)', fontSize: 14, padding: '12px 0',
              textAlign: 'left', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
