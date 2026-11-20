import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaHtml5, FaCss3Alt, FaAws, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiPostgresql, SiKubernetes, SiJavascript, SiSqlite, SiMysql, SiFastapi, SiFlask, SiNumpy, SiTailwindcss, SiPandas, SiTensorflow, SiPytorch, SiVercel, SiJupyter, SiPostman, SiDjango } from 'react-icons/si';

const SKILLS_ROWS = [
  // Row 1: Languages & Frontend
  [
    { icon: FaPython,     name: 'Python',     color: '#38bdf8' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaJava,       name: 'Java',       color: '#ea580c' },
    { icon: FaReact,      name: 'React.js',   color: '#61DAFB' },
    { icon: FaNodeJs,     name: 'Node.js',    color: '#22c55e' },
    { icon: FaHtml5,      name: 'HTML5',      color: '#E34F26' },
    { icon: FaCss3Alt,    name: 'CSS3',       color: '#38bdf8' },
  ],
  // Row 2: Cloud, DevOps & Tools
  [
    { icon: FaDocker,     name: 'Docker',     color: '#2496ED' },
    { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
    { icon: FaAws,        name: 'AWS EC2',    color: '#FF9900' },
    { icon: SiVercel,     name: 'Vercel',     color: '#ffffff' },
    { icon: FaGitAlt,     name: 'Git',        color: '#F05032' },
    { icon: FaGithub,     name: 'GitHub',     color: '#ffffff' },
  ],
  // Row 3: Backends & Databases
  [
    { icon: SiDjango,     name: 'Django',     color: '#10b981' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#60a5fa' },
    { icon: SiMysql,      name: 'MySQL',      color: '#38bdf8' },
    { icon: SiSqlite,     name: 'SQLite',     color: '#93c5fd' },
    { icon: SiTailwindcss,name: 'Tailwind',   color: '#06B6D4' },
    { icon: FaBootstrap,  name: 'Bootstrap',  color: '#a855f7' },
  ],
  // Row 4: AI & ML Frameworks
  [
    { icon: SiFastapi,    name: 'FastAPI',    color: '#14b8a6' },
    { icon: SiFlask,      name: 'Flask',      color: '#f1f5f9' },
    { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
    { icon: SiPytorch,    name: 'PyTorch',    color: '#EE4C2C' },
  ],
  // Row 5: Data Science
  [
    { icon: SiNumpy,      name: 'NumPy',      color: '#38bdf8' },
    { icon: SiPandas,     name: 'Pandas',     color: '#c084fc' },
    { icon: SiJupyter,    name: 'Jupyter',    color: '#F37626' },
  ],
  // Row 6: Testing & API
  [
    { icon: SiPostman,    name: 'Postman',    color: '#FF6C37' },
  ]
];

export default function Skills() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <style>{`
        #skills {
          position: relative;
          z-index: 1;
          padding: 110px 0;
          overflow: hidden;
          background: #060813;
        }
        
        .techstack-video-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .techstack-video-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 160px;
          background: linear-gradient(to bottom, #060813 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }
        
        .techstack-video-container::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 160px;
          background: linear-gradient(to top, #060813 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }
        
        .techstack-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }
        
        .techstack-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(6, 8, 19, 0.4) 0%, #060813 90%);
          z-index: 1;
        }

        .sk-triangle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin: 0 auto;
        }

        .sk-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .sk-card {
          width: 76px;
          height: 86px;
          background: rgba(14, 18, 38, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.28s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
        }

        .sk-card:hover {
          transform: translateY(-5px) scale(1.1);
          background: rgba(20, 26, 52, 0.95);
          border-color: var(--hover-color);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5), 0 0 20px var(--hover-color-glow);
          z-index: 10;
        }

        .sk-icon-wrapper {
          font-size: 1.85rem;
          color: #cbd5e1;
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sk-card:hover .sk-icon-wrapper {
          color: var(--hover-color);
          filter: drop-shadow(0 0 8px var(--hover-color));
          transform: translateY(-2px) scale(1.3);
        }

        .sk-name {
          font-family: var(--font-b);
          font-size: 0.65rem;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }

        .sk-card:hover .sk-name {
          color: #ffffff;
          transform: translateY(3px);
        }
      `}</style>
      <section id="skills" className="section-wrap">
        <div className="techstack-video-container">
          <video autoPlay loop muted playsInline className="techstack-video">
            <source src="/video/video.webm" type="video/webm" />
          </video>
          <div className="techstack-overlay"></div>
        </div>
        <div className="container" ref={ref} style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="eyebrow">Technical Competencies</div>
            <h2 className="sec-title">Tech <span className="grad-text">Stack</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>
              Languages, libraries, databases, and DevOps tools I use to build scalable software.
            </p>
          </div>
          
          <div className="sk-triangle-container">
            {SKILLS_ROWS.map((row, rowIndex) => (
              <div className="sk-row" key={`row-${rowIndex}`}>
                {row.map((s, colIndex) => {
                  const delay = (rowIndex * row.length + colIndex) * 0.025;
                  return (
                    <motion.div
                      className="sk-card" 
                      key={s.name}
                      style={{ 
                        '--hover-color': s.color, 
                        '--hover-color-glow': `${s.color}35`
                      }}
                      initial={{ opacity: 0, scale: 0.6, y: 24 }}
                      animate={inV ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, delay: delay, ease: "easeOut" }}
                    >
                      <div className="sk-icon-wrapper">
                        <s.icon />
                      </div>
                      <div className="sk-name">{s.name}</div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
