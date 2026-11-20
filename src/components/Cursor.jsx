import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const follow = useRef({ x: -100, y: -100 });
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a real precision pointer (mouse)
    const mql = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mql.matches);

    const onMediaChange = (e) => setIsPointerFine(e.matches);
    mql.addEventListener('change', onMediaChange);

    if (!mql.matches) return () => mql.removeEventListener('change', onMediaChange);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let rafId;
    const animate = () => {
      follow.current.x += (mouse.current.x - follow.current.x) * 0.15;
      follow.current.y += (mouse.current.y - follow.current.y) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${follow.current.x - 18}px, ${follow.current.y - 18}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // Event delegation for hovering clickable items
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .sk-card, .pj-card');
      if (target) {
        dot.current?.classList.add('dot-hover');
        ring.current?.classList.add('ring-hover');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .sk-card, .pj-card');
      if (target) {
        dot.current?.classList.remove('dot-hover');
        ring.current?.classList.remove('ring-hover');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      mql.removeEventListener('change', onMediaChange);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isPointerFine) return null;

  return (
    <>
      <style>{`
        .cur-dot {
          position: fixed;
          top: 0; left: 0;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #a855f7;
          pointer-events: none;
          z-index: 99999;
          mix-blend-mode: screen;
          box-shadow: 0 0 12px #a855f7;
          will-change: transform;
          transition: width 0.2s, height 0.2s, background 0.2s;
        }
        .cur-ring {
          position: fixed;
          top: 0; left: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(168, 85, 247, 0.6);
          pointer-events: none;
          z-index: 99998;
          mix-blend-mode: screen;
          will-change: transform;
          transition: width 0.25s, height 0.25s, border-color 0.25s, transform 0.05s linear;
        }
        .dot-hover {
          background: #38bdf8;
          box-shadow: 0 0 16px #38bdf8;
          transform-origin: center;
        }
        .ring-hover {
          border-color: rgba(56, 189, 248, 0.85);
          width: 46px; height: 46px;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
        }
      `}</style>
      <div className="cur-dot" ref={dot} />
      <div className="cur-ring" ref={ring} />
    </>
  );
}
