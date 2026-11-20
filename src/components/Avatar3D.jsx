import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiPostgresql, SiKubernetes, SiTensorflow, SiDjango } from 'react-icons/si';

// Radii align with Saturn rings (2.6 for inner, 4.0 for outer)
const TECH_STACK = [
  { name: 'React', icon: FaReact, color: '#61DAFB', radius: 2.6, speed: 0.6, angle: 0 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', radius: 2.6, speed: 0.6, angle: Math.PI / 2 },
  { name: 'Python', icon: FaPython, color: '#3776AB', radius: 2.6, speed: 0.6, angle: Math.PI },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', radius: 2.6, speed: 0.6, angle: Math.PI * 1.5 },

  { name: 'Docker', icon: FaDocker, color: '#2496ED', radius: 4.0, speed: 0.35, angle: 0 },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', radius: 4.0, speed: 0.35, angle: Math.PI * 2 / 5 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', radius: 4.0, speed: 0.35, angle: Math.PI * 4 / 5 },
  { name: 'AWS', icon: FaAws, color: '#FF9900', radius: 4.0, speed: 0.35, angle: Math.PI * 6 / 5 },
  { name: 'Django', icon: SiDjango, color: '#092E20', radius: 4.0, speed: 0.35, angle: Math.PI * 8 / 5 },
];

function OrbitingTech({ tech }) {
  const groupRef = useRef();
  const Icon = tech.icon;
  const [active, setActive] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * tech.speed + tech.angle;
    groupRef.current.position.x = Math.cos(t) * tech.radius;
    groupRef.current.position.z = Math.sin(t) * tech.radius;
    groupRef.current.position.y = Math.sin(t * 3) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Html center zIndexRange={[100, 0]}>
        <div
          onClick={() => setActive(!active)}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Tech Name Tooltip */}
          <div style={{
            position: 'absolute',
            top: '-38px',
            background: 'rgba(10, 14, 28, 0.95)',
            color: '#ffffff',
            padding: '5px 10px',
            borderRadius: '6px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.4px',
            border: `1px solid ${tech.color}80`,
            boxShadow: `0 0 14px ${tech.color}40`,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.85)',
            transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            {tech.name}
          </div>

          {/* Glowing Sphere Icon */}
          <div
            style={{
              color: tech.color,
              fontSize: '20px',
              background: 'rgba(12, 16, 32, 0.88)',
              padding: '11px',
              borderRadius: '50%',
              border: `1px solid ${tech.color}80`,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: active ? `0 0 35px ${tech.color}` : `0 0 20px ${tech.color}60`,
              transform: active ? 'scale(1.25)' : 'scale(1)',
              transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!active) {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.boxShadow = `0 0 35px ${tech.color}`;
              }
            }}
            onMouseLeave={(e) => {
              if (!active) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}60`;
              }
            }}
          >
            <Icon />
          </div>
        </div>
      </Html>
    </group>
  );
}

function SaturnRings() {
  const ringsRef = useRef();

  useFrame((state) => {
    ringsRef.current.rotation.z = state.clock.getElapsedTime() * -0.05;
  });

  return (
    <group ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
      {/* Inner Ring */}
      <mesh>
        <ringGeometry args={[2.0, 3.2, 128]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[2.0, 2.04, 128]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[3.16, 3.2, 128]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[2.6, 2.61, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Outer Ring */}
      <mesh>
        <ringGeometry args={[3.6, 4.4, 128]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[3.6, 3.63, 128]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[4.37, 4.4, 128]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[4.0, 4.01, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function SaturnCore() {
  const coreRef = useRef();

  useFrame((state) => {
    coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={coreRef}>
      {/* Glass Bubble Core */}
      <mesh>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshBasicMaterial color="#080b18" transparent opacity={0.78} />
      </mesh>

      {/* Edge plasma glow */}
      <mesh>
        <sphereGeometry args={[1.92, 64, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.28} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Outer Atmospheric Glow */}
      <mesh>
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.16} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Center Dashboard */}
      <Html center zIndexRange={[100, 0]}>
        <div style={{
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          pointerEvents: 'auto',
          userSelect: 'none',
          padding: '16px',
        }}>
          {/* Header Title */}
          <div style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '17px',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 14px 0',
            lineHeight: 1.35,
            letterSpacing: '0.4px',
            textShadow: '0 2px 10px rgba(0,0,0,0.6)'
          }}>
            Code with purpose.<br />
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Engineered for impact.</span>
          </div>

          {/* Profile Photo Avatar Frame */}
          <div style={{
            position: 'relative',
            width: '92px',
            height: '92px',
            borderRadius: '50%',
            padding: '2.5px',
            background: 'linear-gradient(135deg, #a855f7, #38bdf8)',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.45)',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'radial-gradient(circle, #1a0f35 0%, #08051a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src="/models/My_image.png"
                alt="Chowduvada Lokesh"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
          </div>

          {/* Real Fresher Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            width: '100%',
            marginBottom: '16px'
          }}>
            {[
              { icon: '🎯', val: '8.70', lbl: 'CGPA' },
              { icon: '💼', val: '2', lbl: 'Interns' },
              { icon: '</>', val: '10+', lbl: 'Projects' },
              { icon: '🎓', val: "'26", lbl: 'B.Tech' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(14, 18, 38, 0.85)',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                borderRadius: '8px',
                padding: '8px 3px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ color: '#c084fc', fontSize: '13px', marginBottom: '2px' }}>{stat.icon}</span>
                <span style={{ color: '#fff', fontSize: '13px', fontWeight: 800, lineHeight: 1.1 }}>{stat.val}</span>
                <span style={{ color: '#94a3b8', fontSize: '8.5px', textTransform: 'uppercase', letterSpacing: '0.4px', marginTop: '2px' }}>{stat.lbl}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '25px',
              padding: '10px 24px',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(124, 58, 237, 0.45)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(124, 58, 237, 0.65)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(124, 58, 237, 0.45)';
            }}
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Projects →
          </button>
        </div>
      </Html>
    </group>
  );
}

function TechSystem() {
  const groupRef = useRef();

  useFrame((state) => {
    const targetX = state.pointer.x * 0.25;
    const targetY = state.pointer.y * 0.25;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (Math.PI / 6) - targetY, 0.05);
  });

  return (
    <group ref={groupRef}>
      <SaturnCore />
      <SaturnRings />
      {TECH_STACK.map((tech, i) => (
        <OrbitingTech key={i} tech={tech} />
      ))}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <Sparkles count={120} scale={10} size={1.4} speed={0.1} opacity={0.35} color="#c084fc" />
      </group>
    </group>
  );
}

export default function Avatar3D() {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'default' }}>
      <Canvas camera={{ position: [0, 0, 9.5], fov: 45 }}>
        <Sparkles count={160} scale={14} size={2} speed={0.15} opacity={0.2} color="#38bdf8" />
        <TechSystem />
      </Canvas>
    </div>
  );
}
