import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const EXPERIENCES = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "APSSDC",
    period: "Apr 2025 – Jun 2025",
    type: "Internship",
    badgeColor: "#a855f7",
    desc: "Engineered full-stack web applications with Python & Django, implementing complete CRUD workflows and relational database architectures. Translated complex client requirements into scalable, testable code modules.",
    skills: ["Django", "Python", "REST APIs", "CRUD Operations", "PostgreSQL/SQLite"]
  },
  {
    id: 2,
    role: "Cloud & DevOps Intern",
    company: "Dem Software Solutions",
    period: "Jun 2024 – Jul 2024",
    type: "Internship",
    badgeColor: "#38bdf8",
    desc: "Configured AWS EC2 infrastructure for hosting LLM API endpoints with Docker containerization. Automated CI/CD deployment pipelines using Jenkins, improving model deployment consistency across sprint releases.",
    skills: ["AWS EC2", "Docker", "Jenkins", "CI/CD", "Linux", "API Hosting"]
  },
  {
    id: 3,
    role: "B.Tech in Computer Science (AI & ML)",
    company: "Nadimpalli Satyanarayana Raju Institute of Technology",
    period: "2022 – 2026",
    type: "Education • CGPA: 8.70 / 10",
    badgeColor: "#10b981",
    desc: "Specialized in Artificial Intelligence, Machine Learning, Deep Neural Networks, Data Structures, and Database Systems. Consistently maintained top academic performance while building production-grade projects.",
    skills: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning", "DBMS", "System Design"]
  },
  {
    id: 4,
    role: "Intermediate (MPC - Maths, Physics, Chemistry)",
    company: "Hayagriva Junior College",
    period: "2020 – 2022",
    type: "Education • CGPA: 8.4 / 10",
    badgeColor: "#64748b",
    desc: "Completed Higher Secondary education with a focus on Mathematics, Physics, and Analytical problem solving.",
    skills: ["Mathematics", "Physics", "Analytical Problem Solving"]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const ease = [0.22, 1, 0.36, 1];

  return (
    <>
      <style>{`
        #experience {
          position: relative;
          z-index: 1;
          padding: 110px 0;
          background: #060813;
        }

        .exp-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .exp-title {
          font-family: var(--font-h);
          font-size: clamp(2.2rem, 4.8vw, 3.8rem);
          font-weight: 700;
          line-height: 1.15;
          color: #f8fafc;
          letter-spacing: -1px;
        }

        .exp-title span {
          background: linear-gradient(135deg, #a855f7 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: rgba(255, 255, 255, 0.08);
          z-index: 0;
        }

        .timeline-progress {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: linear-gradient(to bottom, #a855f7, #38bdf8);
          box-shadow: 0 0 12px 1px rgba(168, 85, 247, 0.6);
          z-index: 2;
        }

        .timeline-progress-dot {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          width: 14px;
          height: 14px;
          background: #38bdf8;
          border-radius: 50%;
          box-shadow: 0 0 16px 4px rgba(56, 189, 248, 0.8);
        }

        .timeline-row {
          position: relative;
          display: flex;
          width: 100%;
          align-items: stretch;
          z-index: 1;
        }

        .timeline-left {
          width: 50%;
          padding-right: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: right;
        }

        .tl-badge {
          display: inline-flex;
          align-self: flex-end;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .tl-role {
          font-family: var(--font-h);
          font-size: 1.35rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }

        .tl-company {
          font-family: var(--font-b);
          font-size: 0.95rem;
          color: #38bdf8;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .tl-period {
          font-family: var(--font-b);
          font-size: 0.8rem;
          font-weight: 500;
          color: #94a3b8;
        }

        .timeline-right {
          width: 50%;
          padding-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .tl-card {
          background: rgba(14, 18, 38, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .tl-card:hover {
          border-color: rgba(168, 85, 247, 0.35);
          transform: translateY(-2px);
        }

        .tl-desc {
          font-family: var(--font-b);
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 14px;
        }

        .tl-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tl-skill-tag {
          font-size: 0.72rem;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          color: #cbd5e1;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .timeline-track, .timeline-progress {
            left: 20px;
          }
          .timeline-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-left {
            width: 100%;
            padding-right: 0;
            padding-left: 50px;
            text-align: left;
            margin-bottom: 12px;
          }
          .tl-badge {
            align-self: flex-start;
          }
          .timeline-right {
            width: 100%;
            padding-left: 50px;
          }
        }
      `}</style>
      
      <section id="experience" className="section-wrap">
        <div className="container" ref={ref}>
          <motion.div 
            className="exp-header"
            initial="hidden"
            animate={inV ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ duration: 0.7, ease }}
          >
            <div className="eyebrow">Career &amp; Education</div>
            <h2 className="exp-title">Experience &amp; <span>Journey</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>
              My industry internships and academic milestones in Computer Science (AI &amp; ML).
            </p>
          </motion.div>

          <div className="timeline-container" ref={containerRef}>
            <div className="timeline-track"></div>
            <motion.div 
              className="timeline-progress"
              style={{ height: lineHeight }}
            >
              <div className="timeline-progress-dot"></div>
            </motion.div>

            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={exp.id} 
                className="timeline-row"
                initial="hidden"
                animate={inV ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
              >
                <div className="timeline-left">
                  <span 
                    className="tl-badge" 
                    style={{ 
                      background: `${exp.badgeColor}18`, 
                      border: `1px solid ${exp.badgeColor}50`,
                      color: exp.badgeColor 
                    }}
                  >
                    {exp.type}
                  </span>
                  <h3 className="tl-role">{exp.role}</h3>
                  <div className="tl-company">{exp.company}</div>
                  <div className="tl-period">{exp.period}</div>
                </div>

                <div className="timeline-right">
                  <div className="tl-card">
                    <p className="tl-desc">{exp.desc}</p>
                    <div className="tl-skills">
                      {exp.skills.map((s, idx) => (
                        <span key={idx} className="tl-skill-tag">{s}</span>
                      ))}
                    </div>
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
