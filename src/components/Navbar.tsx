import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { key: 'about', label: t.nav.about },
    { key: 'skills', label: t.nav.skills },
    { key: 'experience', label: t.nav.experience },
    { key: 'projects', label: t.nav.projects },
    { key: 'blog', label: t.nav.blog },
    { key: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 40px', height: 60,
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

        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-links-desktop">
          {links.map(link => (
            <motion.button
              key={link.key}
              whileHover={{ color: 'var(--accent)' }}
              onClick={() => scrollTo(link.key)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500,
                padding: '6px 10px', borderRadius: 20, fontFamily: 'inherit',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '5px 12px', cursor: 'pointer',
              color: 'var(--text-primary)', fontSize: 12, fontWeight: 700,
              fontFamily: 'inherit', marginLeft: 4,
            }}
          >
            {lang === 'en' ? '🇯🇵 JP' : '🇬🇧 EN'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '50%', width: 36, height: 36, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-primary)', marginLeft: 4,
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>

        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: 4 }}
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
              <button key={link.key} onClick={() => scrollTo(link.key)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-primary)', fontSize: 16, fontWeight: 500,
                  padding: '12px 0', textAlign: 'left', fontFamily: 'inherit',
                  borderBottom: '1px solid var(--border)',
                }}>{link.label}</button>
            ))}
            <div style={{ display: 'flex', gap: 8, paddingTop: 12 }}>
              <button onClick={toggleLang} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20,
                padding: '8px 16px', cursor: 'pointer', color: 'var(--text-primary)',
                fontSize: 13, fontWeight: 700, fontFamily: 'inherit',
              }}>
                {lang === 'en' ? '🇯🇵 日本語' : '🇬🇧 English'}
              </button>
              <button onClick={toggleTheme} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20,
                padding: '8px 16px', cursor: 'pointer', color: 'var(--text-primary)',
                fontSize: 13, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
