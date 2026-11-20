import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    num: '01',
    img: '/projects/nutrition.png',
    title: 'Personalized Nutrition Recommendation System',
    badge: 'Final Year Project',
    cat: 'Generative AI & Health Tech',
    desc: 'Intelligent nutritional coaching platform calculating BMR/TDEE and streaming user health metrics to the Google Gemini 2.0 Flash API with structured prompt chains and dynamic allergen exclusion matrices.',
    tags: ['Python', 'Google Gemini API', 'FastAPI', 'React', 'Prompt Engineering'],
    catColor: '#10b981',
    github: 'https://github.com/Lokesh00-11/Foodie-AI',
    demo: 'https://lokesh00-11.github.io/Foodie-AI/',
    isDeployed: true
  },
  {
    num: '02',
    img: '/projects/shnoor.png',
    title: 'Shnoor International Website',
    badge: 'Client Project',
    cat: 'Business / Full Stack',
    desc: 'High-performance commercial business website developed for Shnoor International LLC. Features modular content management, fluid animations, robust SEO architecture, and brand-forward UI.',
    tags: ['React', 'Node.js', 'REST API', 'Framer Motion', 'Tailwind CSS'],
    catColor: '#38bdf8',
    github: 'https://github.com/Lokesh00-11',
    demo: 'https://shnoor-website.vercel.app/',
    isDeployed: true
  },
  {
    num: '03',
    img: '/projects/ecommerce.png',
    title: 'Veloce Tech & Gear (E-Commerce)',
    badge: 'E-Commerce & Payments',
    cat: 'Full Stack / Hardware',
    desc: 'Production-ready e-commerce platform with catalog filtering, real-time cart state, secure payment checkout integration, and customer order management dashboard.',
    tags: ['React 19', 'Node.js', 'Prisma', 'Tailwind CSS', 'Stripe'],
    catColor: '#f97316',
    github: 'https://github.com/Lokesh00-11/Ecommerce-project',
    demo: 'https://ecommerce-project-alpha-seven.vercel.app/',
    isDeployed: true
  },
  {
    num: '04',
    img: '/projects/hrms.png',
    title: 'Enterprise HRMS Portal',
    badge: 'Enterprise Automation',
    cat: 'Enterprise / Full Stack',
    desc: 'Scalable HR management system covering automated employee onboarding, attendance tracking, leave requests, role-based access control, and analytics performance dashboards.',
    tags: ['React', 'Java', 'PostgreSQL', 'Docker', 'AWS'],
    catColor: '#ec4899',
    github: 'https://github.com/Lokesh00-11/SHNOOR-HRMS-PORTAL',
    demo: 'https://shnoor-hrms-portal.vercel.app/',
    isDeployed: true
  },
  {
    num: '05',
    img: '/projects/lib.png',
    title: 'Readora — Library Management System',
    badge: 'Enterprise Architecture',
    cat: 'Enterprise / Academic',
    desc: 'Academic & enterprise library management system featuring RBAC (Student, Faculty, Librarian), Google Books API ISBN auto-ingestion, QR-code circulation slips, and automated overdue fine tracking.',
    tags: ['Django', 'Python', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    catColor: '#818cf8',
    github: 'https://github.com/Lokesh00-11/Readora',
    demo: 'https://readora-beryl.vercel.app/',
    isDeployed: true
  }
];

export default function Projects() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <style>{`
        #projects {
          position: relative;
          z-index: 1;
          padding: 100px 0;
        }
        
        .pj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }

        .pj-card {
          background: rgba(14, 18, 38, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .pj-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168, 85, 247, 0.45);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(124, 58, 237, 0.2);
        }

        .pj-img-container {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: #090d1f;
          display: block;
          text-decoration: none;
        }

        .pj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pj-card:hover .pj-img {
          transform: scale(1.07);
        }

        .pj-badge-top {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(8, 11, 24, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #f1f5f9;
          font-weight: 700;
          font-size: 0.72rem;
          padding: 5px 11px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          z-index: 2;
          letter-spacing: 0.5px;
        }

        .pj-live-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(16, 185, 129, 0.18);
          border: 1px solid rgba(16, 185, 129, 0.45);
          color: #34d399;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.4px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .live-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGreen 1.8s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.8); opacity: 0.5; }
        }

        .pj-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .pj-cat {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .pj-title {
          font-family: var(--font-h);
          font-size: 1.35rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .pj-desc {
          font-family: var(--font-b);
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .pj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .pj-tag {
          font-size: 0.72rem;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          color: #cbd5e1;
          font-weight: 500;
        }

        .pj-links {
          display: flex;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .pj-link-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .pj-link-btn.code {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }
        .pj-link-btn.code:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
        }

        .pj-link-btn.live {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(56, 189, 248, 0.5));
          border: 1px solid rgba(168, 85, 247, 0.6);
          color: #ffffff;
          box-shadow: 0 0 16px rgba(124, 58, 237, 0.25);
        }
        .pj-link-btn.live:hover {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(56, 189, 248, 0.8));
          box-shadow: 0 0 22px rgba(124, 58, 237, 0.5);
          transform: translateY(-1px);
        }
        
        @media (max-width: 640px) {
          .pj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="projects" className="section-wrap">
        <div className="container" ref={ref}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="eyebrow">Portfolio Work</div>
            <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>
              Full-stack platforms and AI implementations built with modern engineering standards.
            </p>
          </div>

          <div className="pj-grid">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.num}
                className="pj-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inV ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                {/* Clickable Image Banner directly opens project */}
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-img-container"
                  title={`Open ${p.title} in a new tab`}
                >
                  <span className="pj-badge-top">{p.badge}</span>
                  {p.isDeployed && (
                    <span className="pj-live-badge">
                      <span className="live-pulse"></span>
                      <span>Live Online</span>
                    </span>
                  )}
                  <img src={p.img} alt={p.title} className="pj-img" loading="lazy" />
                </a>

                <div className="pj-content">
                  <span className="pj-cat" style={{ color: p.catColor }}>{p.cat}</span>
                  <h3 className="pj-title">{p.title}</h3>
                  <p className="pj-desc">{p.desc}</p>
                  <div className="pj-tags">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="pj-tag">{t}</span>
                    ))}
                  </div>

                  <div className="pj-links">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-link-btn code"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>Repository</span>
                    </a>

                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-link-btn live"
                    >
                      <span>{p.isDeployed ? 'View Live Demo' : 'View Details'}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
