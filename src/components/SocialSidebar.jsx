import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = ({ className }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export default function SocialSidebar() {
  return (
    <>
      <style>{`
        .global-social-icons {
          position: fixed;
          left: 32px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 99;
          pointer-events: auto;
          background: rgba(14, 18, 38, 0.75);
          padding: 14px 10px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .global-social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #94a3b8;
          transition: all 0.25s ease;
        }

        .global-social-icons a:hover {
          color: #38bdf8;
          transform: scale(1.15);
          filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5));
        }

        @media (max-width: 900px) {
          .global-social-icons {
            display: none;
          }
        }
      `}</style>
      <motion.div 
        className="global-social-icons"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        aria-label="Social media links"
      >
        <a 
          href="https://github.com/Lokesh00-11" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="GitHub Profile"
        >
          <GithubIcon />
        </a>
        <a 
          href="https://www.linkedin.com/in/chowduvada-lokesh" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon />
        </a>
        <a 
          href="mailto:chowduvadalokesh11@gmail.com" 
          aria-label="Send Email"
        >
          <MailIcon />
        </a>
      </motion.div>
    </>
  );
}
