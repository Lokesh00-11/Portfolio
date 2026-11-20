import { useEffect, useRef } from 'react';

export default function Background() {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let W = (c.width = window.innerWidth);
    let H = (c.height = window.innerHeight);

    const onResize = () => {
      if (!c) return;
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const cols = ['rgba(168, 85, 247, ', 'rgba(56, 189, 248, ', 'rgba(99, 102, 241, ', 'rgba(236, 72, 153, '];
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.8 + Math.random() * 1.6,
      col: cols[Math.floor(Math.random() * cols.length)],
      sp: 0.12 + Math.random() * 0.25,
      a: 0.15 + Math.random() * 0.45,
      dx: (Math.random() - 0.5) * 0.3,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.y -= p.sp;
        p.x += p.dx;
        p.a += (Math.random() - 0.5) * 0.006;
        p.a = Math.max(0.06, Math.min(0.55, p.a));
        if (p.y < -5) {
          p.y = H + 5;
          p.x = Math.random() * W;
        }
        if (p.x < 0 || p.x > W) p.dx *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col + p.a + ')';
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <style>{`
        .orb-wrap {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          animation: floatOrb 18s ease-in-out infinite;
          will-change: transform;
        }
        .o1 {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.18), transparent 70%);
          top: -200px;
          left: -150px;
          animation-delay: 0s;
        }
        .o2 {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15), transparent 70%);
          top: 25%;
          right: -140px;
          animation-delay: -6s;
        }
        .o3 {
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.12), transparent 70%);
          bottom: 2%;
          left: 8%;
          animation-delay: -11s;
        }
        .o4 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.14), transparent 70%);
          bottom: 12%;
          right: 5%;
          animation-delay: -4s;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(35px, -45px) scale(1.06); }
          66% { transform: translate(-25px, 28px) scale(0.94); }
        }
        .bg-canvas {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
      <div className="orb-wrap">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <div className="orb o4" />
      </div>
      <canvas ref={canvas} className="bg-canvas" />
    </>
  );
}
