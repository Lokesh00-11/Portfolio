import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const Avatar3D = lazy(() => import('./Avatar3D'));

export default function Hero() {
  const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const ease = [0.22, 1, 0.36, 1];

  return (
    <>
      <style>{`
        #home {
          min-height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 6% 40px;
          overflow: hidden;
          z-index: 1;
        }
        
        .spline-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .spline-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(168, 85, 247, 0.5);
          font-family: var(--font-b);
          font-size: 0.9rem;
        }

        .content-layer {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          pointer-events: none;
        }
        
        .content-layer > * {
          pointer-events: auto;
        }

        .left-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 440px;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          max-width: 440px;
        }

        .badge-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4ade80;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }
        .status-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 10px #22c55e;
          animation: pulseStatus 2s infinite;
        }
        @keyframes pulseStatus {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .h-hello {
          font-family: var(--font-b);
          font-size: 1.15rem;
          color: #a855f7;
          margin-bottom: 0.4rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .h-name {
          font-family: var(--font-h);
          font-size: clamp(2.4rem, 4.2vw, 4.4rem);
          font-weight: 800;
          line-height: 1.05;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(
            to right,
            #ffffff 10%, 
            #c084fc 35%, 
            #38bdf8 65%, 
            #c084fc 85%, 
            #ffffff 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: flowGradient 9s linear infinite;
        }

        .h-title-prefix {
          font-family: var(--font-b);
          font-size: 1.15rem;
          color: #38bdf8;
          margin-bottom: 0.4rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .h-title {
          font-family: var(--font-h);
          font-size: clamp(2.2rem, 3.8vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(
            to right,
            #ffffff 10%, 
            #38bdf8 40%, 
            #a855f7 70%, 
            #ffffff 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: flowGradient 9s linear infinite reverse;
        }

        @keyframes flowGradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .resume-btn {
          position: absolute;
          right: 6%;
          bottom: 36px;
          z-index: 2;
          font-family: var(--font-b);
          color: #ffffff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          background: rgba(14, 18, 38, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 40px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .resume-btn:hover {
          color: #38bdf8;
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 0 24px rgba(56, 189, 248, 0.3);
          transform: translateY(-2px);
        }
        
        @media (max-width: 900px) {
          #home {
            padding: 100px 5% 60px;
            min-height: auto;
          }
          .content-layer {
            flex-direction: column;
            gap: 280px;
            text-align: center;
          }
          .left-content, .right-content {
            align-items: center;
            text-align: center;
            max-width: 100%;
          }
          .resume-btn {
            position: static;
            margin-top: 30px;
          }
        }
      `}</style>
      
      <section id="home">
        {/* 3D Solar Tech Universe */}
        <div className="spline-container">
          <Suspense fallback={<div className="spline-fallback">Loading Interactive Orbit...</div>}>
            <Avatar3D />
          </Suspense>
        </div>

        {/* Content Overlay */}
        <div className="content-layer">
          <motion.div 
            className="left-content"
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ duration: 0.8, ease }}
          >
            <div className="badge-status">
              <span className="status-dot"></span>
              <span>Available for Hire • B.Tech '26</span>
            </div>
            <span className="h-hello">Hello, I'm</span>
            <h1 className="h-name">Chowduvada<br/>Lokesh</h1>
          </motion.div>

          <motion.div 
            className="right-content"
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            <span className="h-title-prefix">Aspiring</span>
            <h2 className="h-title">Full Stack &amp; AI/ML<br/>Engineer</h2>
          </motion.div>
        </div>

        {/* Resume Download CTA */}
        <motion.a 
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span>Resume</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </motion.a>
      </section>
    </>
  );
}
