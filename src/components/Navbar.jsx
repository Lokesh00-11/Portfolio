import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActive(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .nav-outer {
          position: fixed;
          top: 20px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
          pointer-events: none;
          padding: 0 16px;
        }
        .nav-box {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          background: rgba(10, 14, 28, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55), 0 0 20px rgba(124, 58, 237, 0.15);
          max-width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .nav-box::-webkit-scrollbar {
          display: none;
        }
        .nav-links {
          display: flex;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-btn {
          position: relative;
          padding: 8px 16px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #94a3b8;
          background: none;
          border: none;
          border-radius: 30px;
          font-family: var(--font-b);
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nav-btn:hover {
          color: #f8fafc;
        }
        .nav-btn.on {
          color: #ffffff;
          font-weight: 600;
        }
        .nav-pill {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.35), rgba(56, 189, 248, 0.25));
          border: 1px solid rgba(168, 85, 247, 0.4);
          border-radius: 30px;
          box-shadow: 0 0 14px rgba(124, 58, 237, 0.3);
        }
        
        @media (max-width: 640px) {
          .nav-outer {
            top: 12px;
          }
          .nav-btn {
            padding: 6px 11px;
            font-size: 0.75rem;
          }
        }
      `}</style>
      <motion.nav
        className="nav-outer"
        aria-label="Main navigation"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-box">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-btn ${active === item.id ? 'on' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {active === item.id && (
                    <motion.span
                      className="nav-pill"
                      layoutId="navPill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
