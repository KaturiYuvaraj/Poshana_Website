import { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import SplitText from '../SplitText/SplitText';
import logo from '../../assets/Poshana_logo.svg';
import './Preloader.css';

const rand = (min, max) => Math.random() * (max - min) + min;

export default function Preloader({ onDone }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [isGone, setIsGone] = useState(false);

  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: rand(2, 98),
      y: rand(2, 98),
      size: rand(1.5, 4),
      dur: rand(5, 14),
      del: rand(-14, 0),
      op: rand(0.2, 0.7),
    }))
  , []);

  useEffect(() => {
    // Disable scrolling when preloader starts
    document.body.style.overflow = 'hidden';

    // Timeline setup
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide down container to reveal page
        setTimeout(() => {
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              y: '100%',
              duration: 1.1,
              ease: 'power4.inOut',
              onComplete: () => {
                // Restore scrolling
                document.body.style.overflow = '';
                setIsGone(true);
                if (onDone) onDone();
              }
            });
          }
        }, 500); // 500ms premium pause after text finishes
      }
    });

    // 1. Logo Zoom & Tilt Animation
    // Scales from 0 -> 1.05 -> 1 with rotation/tilt of 8 degrees
    tl.fromTo(logoRef.current,
      { scale: 0, rotation: -20, opacity: 0 },
      { scale: 1.1, rotation: 8, opacity: 1, duration: 1.2, ease: 'back.out(1.8)' }
    );

    // Subtle snap back to scale 1
    tl.to(logoRef.current, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    }, '-=0.1');

    // 2. Letters stagger (starts slightly before the logo animation finishes)
    const targets = containerRef.current.querySelectorAll('.split-char');
    if (targets.length) {
      tl.fromTo(targets,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' },
        '-=0.7' // overlap logo completion for fluid transition
      );
    }

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (isGone) return null;

  return (
    <div ref={containerRef} className="preloader-container">

      {/* ── Premium aurora blobs ── */}
      <div className="pl-aurora" aria-hidden="true">
        <div className="pl-aurora-blob pl-aurora-blob--1" />
        <div className="pl-aurora-blob pl-aurora-blob--2" />
        <div className="pl-aurora-blob pl-aurora-blob--3" />
      </div>

      {/* ── Subtle grain overlay ── */}
      <div className="pl-grain" aria-hidden="true" />

      {/* Yellow particles background */}
      <div className="preloader-particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className="preloader-particle"
            style={{
              left: `${p.x}%`,
              top:  `${p.y}%`,
              width:  `${p.size}px`,
              height: `${p.size}px`,
              '--p-op':  p.op,
              '--p-dur': `${p.dur}s`,
              '--p-del': `${p.del}s`,
            }}
          />
        ))}
      </div>

      <div className="preloader-content">
        <img
          ref={logoRef}
          src={logo}
          alt="Poshana Logo"
          className="preloader-logo"
        />
        <SplitText
          text="POSHANA"
          className="preloader-title"
          animate={false} // Managed by unified timeline above
        />
      </div>
    </div>
  );
}
