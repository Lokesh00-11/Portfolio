export default function Footer() {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        footer {
          position: relative;
          z-index: 1;
          padding: 60px 24px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(6, 8, 19, 0.85);
        }
        .ft-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .ft-links {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .ft-link {
          font-size: 0.85rem;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          font-family: var(--font-b);
          transition: color 0.25s;
          letter-spacing: 0.3px;
        }
        .ft-link:hover {
          color: #38bdf8;
        }
        .ft-sep {
          width: 50px;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 6px 0;
        }
        .ft-txt {
          font-size: 0.82rem;
          color: #64748b;
          font-family: var(--font-b);
          font-weight: 400;
          text-align: center;
          line-height: 1.8;
        }
        .ft-txt span {
          background: linear-gradient(135deg, #a855f7, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .ft-links { gap: 16px; }
        }
      `}</style>
      <footer>
        <div className="ft-inner">
          <div className="ft-links">
            {links.map((l) => (
              <a 
                key={l.id} 
                href={`#${l.id}`} 
                className="ft-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="ft-sep" />
          <div className="ft-txt">
            Designed &amp; Built by <span>Chowduvada Lokesh</span><br/>
            Full Stack &amp; AI/ML Engineer • Class of 2026<br/>
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
