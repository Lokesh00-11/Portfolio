import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-80px' });
  const fi = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <style>{`
        #about {
          position: relative;
          z-index: 1;
        }
        .ab-container {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
        }
        .ab-card {
          background: rgba(14, 18, 38, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 44px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }
        .ab-text p {
          color: #94a3b8;
          line-height: 1.85;
          margin-bottom: 20px;
          font-size: 1.02rem;
          font-weight: 400;
          font-family: var(--font-b);
        }
        .ab-text p strong {
          color: #f1f5f9;
          font-weight: 600;
        }
        .ab-text p .highlight {
          color: #38bdf8;
          font-weight: 600;
        }
        .ab-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 28px 0 32px;
        }
        .ab-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(124, 58, 237, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.28);
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #e2e8f0;
        }
        .ab-cta {
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        @media (max-width: 640px) {
          .ab-card {
            padding: 28px 20px;
          }
          .ab-text p {
            font-size: 0.95rem;
          }
        }
      `}</style>
      <section id="about" className="section-wrap">
        <div className="container" ref={ref}>
          <motion.div 
            variants={fi} 
            initial="hidden" 
            animate={inV ? 'visible' : 'hidden'} 
            transition={{ duration: 0.7, ease }} 
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <div className="eyebrow">About Me</div>
            <h2 className="sec-title">Who I <span className="grad-text">Am</span></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>
              Bridging modern full-stack web engineering with next-generation Artificial Intelligence.
            </p>
          </motion.div>
          
          <div className="ab-container">
            <motion.div 
              className="ab-card"
              variants={fi} 
              initial="hidden" 
              animate={inV ? 'visible' : 'hidden'} 
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <div className="ab-text">
                <p>
                  Hello! I'm <strong>Chowduvada Lokesh</strong>, a motivated <strong>Full Stack &amp; AI/ML Engineer</strong> completing my B.Tech in Computer Science Engineering (AI &amp; ML) at <strong>Nadimpalli Satyanarayana Raju Institute of Technology</strong> with a strong academic standing (<span className="highlight">8.70 / 10 CGPA</span>).
                </p>
                <p>
                  As an enthusiastic fresher, I combine foundational computer science principles with hands-on development. I specialize in developing end-to-end applications — architecting structured relational databases, engineering clean RESTful APIs with <strong>Python, Django, FastAPI, and Node.js</strong>, and crafting responsive, high-performance user interfaces with <strong>React</strong>.
                </p>
                <p>
                  Alongside full-stack development, I am deeply invested in <strong>Prompt Engineering &amp; Generative AI</strong>. I design zero-shot, few-shot, and chain-of-thought (CoT) prompt pipelines, integrate LLMs like <strong>Google Gemini Flash &amp; OpenAI GPT</strong>, and evaluate model outputs to minimize hallucinations and ensure dependable real-world output.
                </p>
                <p>
                  Through software development internships at <strong>APSSDC</strong> and <strong>Dem Software Solutions</strong>, I have worked directly with scalable cloud infrastructure, Docker containerization, and automated CI/CD pipelines. I am eager to bring this blend of software engineering discipline and AI enthusiasm to an innovative team.
                </p>
              </div>

              {/* Highlights pills */}
              <div className="ab-pills">
                <span className="ab-pill">🎓 B.Tech CSE (AI &amp; ML) • CGPA 8.70</span>
                <span className="ab-pill">💼 2 Industry Internships</span>
                <span className="ab-pill">🧠 Generative AI &amp; Prompt Engineering</span>
                <span className="ab-pill">⚡ End-to-End Full Stack Architecture</span>
                <span className="ab-pill">☁️ Docker &amp; AWS Deployment</span>
              </div>

              <div className="ab-cta">
                <a href="#contact" className="btn-prime" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <span>Get In Touch</span>
                  <span>→</span>
                </a>
                <a href="https://github.com/Lokesh00-11" target="_blank" rel="noreferrer" className="btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>GitHub Profile</span>
                </a>
                <a href="/resume/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <span>View Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
