import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const LINKS = [
  { 
    icon: '✉️', 
    label: 'Email', 
    val: 'chowduvadalokesh11@gmail.com', 
    href: 'mailto:chowduvadalokesh11@gmail.com' 
  },
  { 
    icon: '💼', 
    label: 'LinkedIn', 
    val: 'linkedin.com/in/chowduvada-lokesh', 
    href: 'https://www.linkedin.com/in/chowduvada-lokesh' 
  },
  { 
    icon: '💻', 
    label: 'GitHub', 
    val: 'github.com/Lokesh00-11', 
    href: 'https://github.com/Lokesh00-11' 
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  
  const fi = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const ease = [0.22, 1, 0.36, 1];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chowduvadalokesh11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Recruiter/Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:chowduvadalokesh11@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <style>{`
        #contact {
          position: relative;
          z-index: 1;
          padding: 100px 0;
          background: linear-gradient(180deg, transparent 0%, rgba(14, 18, 38, 0.4) 100%);
        }
        .ct-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }
        .ct-info-card, .ct-form-card {
          background: rgba(14, 18, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 36px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
        }
        .ct-info-card::before {
          content: '';
          position: absolute;
          top: -70px;
          right: -70px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%);
          pointer-events: none;
        }
        .ct-links-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ct-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ct-link:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(168, 85, 247, 0.35);
          transform: translateX(4px);
        }
        .ct-link-ico {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(56, 189, 248, 0.3));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .ct-link-lbl {
          font-size: 0.72rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 2px;
        }
        .ct-link-val {
          font-size: 0.92rem;
          font-weight: 500;
          color: #f1f5f9;
        }
        .ct-copy-box {
          margin-top: 24px;
          padding: 18px;
          background: rgba(124, 58, 237, 0.08);
          border: 1px dashed rgba(168, 85, 247, 0.35);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .ct-copy-txt {
          font-size: 0.85rem;
          color: #cbd5e1;
        }
        .ct-copy-btn {
          padding: 8px 16px;
          background: var(--grad2);
          border: none;
          border-radius: 20px;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
          white-space: nowrap;
        }
        .ct-copy-btn:hover {
          transform: scale(1.04);
        }
        .ct-form-title {
          font-family: var(--font-h);
          font-size: 1.4rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 20px;
        }
        .fg {
          margin-bottom: 16px;
        }
        .fg label {
          display: block;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 7px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .fg input, .fg textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 12px;
          padding: 12px 16px;
          color: #f1f5f9;
          font-family: var(--font-b);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.25s ease;
          resize: none;
        }
        .fg input:focus, .fg textarea:focus {
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.04);
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }
        .fg input::placeholder, .fg textarea::placeholder {
          color: #64748b;
        }
        .fg textarea {
          height: 100px;
        }
        .ct-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.92rem;
          padding: 14px;
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          .ct-wrap { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="contact" className="section-wrap">
        <div className="container" ref={ref}>
          <motion.div 
            variants={fi} 
            initial="hidden" 
            animate={inV ? 'visible' : 'hidden'} 
            transition={{ duration: 0.7, ease }}
          >
            <div className="eyebrow">Get In Touch</div>
            <h2 className="sec-title">Let's <span className="grad-text">Connect</span></h2>
            <p className="sec-sub">
              Actively seeking full-time and internship opportunities in Full Stack &amp; AI Engineering. My inbox is always open!
            </p>
          </motion.div>

          <div className="ct-wrap">
            {/* Left Info Card */}
            <motion.div 
              variants={fi} 
              initial="hidden" 
              animate={inV ? 'visible' : 'hidden'} 
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <div className="ct-info-card">
                <div>
                  <h3 className="ct-form-title">Direct Channels</h3>
                  <div className="ct-links-list">
                    {LINKS.map(l => (
                      <a 
                        key={l.label} 
                        href={l.href} 
                        target={l.href.startsWith('http') ? '_blank' : undefined} 
                        rel="noreferrer" 
                        className="ct-link"
                      >
                        <div className="ct-link-ico">{l.icon}</div>
                        <div>
                          <div className="ct-link-lbl">{l.label}</div>
                          <div className="ct-link-val">{l.val}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="ct-copy-box">
                  <div className="ct-copy-txt">
                    <strong>Quick Email:</strong><br/>
                    chowduvadalokesh11@gmail.com
                  </div>
                  <button 
                    type="button" 
                    className="ct-copy-btn" 
                    onClick={handleCopyEmail}
                  >
                    {copied ? '✓ Copied!' : '📋 Copy Email'}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Form Card */}
            <motion.div 
              variants={fi} 
              initial="hidden" 
              animate={inV ? 'visible' : 'hidden'} 
              transition={{ duration: 0.7, delay: 0.18, ease }}
            >
              <div className="ct-form-card">
                <h3 className="ct-form-title">Send a Direct Message</h3>
                <form onSubmit={handleSend}>
                  <div className="fg">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      required
                    />
                  </div>
                  <div className="fg">
                    <label>Your Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@company.com" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      required
                    />
                  </div>
                  <div className="fg">
                    <label>Your Message</label>
                    <textarea 
                      placeholder="Hi Lokesh, we'd love to interview you for an engineering role at..." 
                      value={message} 
                      onChange={e => setMessage(e.target.value)} 
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-prime ct-btn"
                    style={sent ? { background: 'linear-gradient(135deg, #10b981, #059669)' } : {}}
                  >
                    <span>{sent ? 'Opening Mail Client...' : 'Send Message'}</span>
                    <span>{sent ? '✓' : '→'}</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
