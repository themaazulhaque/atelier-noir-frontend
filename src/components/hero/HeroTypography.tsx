'use client';

import { useEffect, useRef } from 'react';

interface TextItem {
  label: string;
  name: string;
  start: number;
  end: number;
}

const ITEMS: TextItem[] = [
  { label: 'BASED IN', name: 'DELHI', start: 0, end: 0.30 },
  { label: '', name: 'NOIDA', start: 0.25, end: 0.55 },
  { label: '', name: 'GURUGRAM', start: 0.50, end: 0.80 },
  { label: 'STUDIO', name: 'ATELIER NOIR', start: 0.75, end: 1.01 },
];

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function HeroTypography() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number>(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      reducedMotion.current = e.matches;
    };
    mq.addEventListener('change', handler);

    function findHero(): HTMLElement | null {
      return (
        document.getElementById('hero') ||
        document.querySelector('.hero') ||
        document.querySelector('section')
      );
    }

    function update() {
      const hero = findHero();
      const overlay = overlayRef.current;
      if (!hero || !overlay) {
        rafRef.current = requestAnimationFrame(update);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const scrolled = -rect.top;
      const vh = window.innerHeight;
      const total = hero.offsetHeight - vh;
      let progress = total > 0 ? scrolled / total : 0;
      progress = clamp01(progress);

      if (progress >= 0.93) {
        const fade = 1 - (progress - 0.93) / 0.07;
        overlay.style.opacity = String(clamp01(fade));
      } else {
        overlay.style.opacity = '1';
      }

      if (reducedMotion.current) {
        for (let i = 0; i < itemRefs.current.length; i++) {
          const el = itemRefs.current[i];
          if (!el) continue;
          el.style.opacity = '1';
          el.style.filter = 'none';
          el.style.transform = 'none';
        }
        rafRef.current = requestAnimationFrame(update);
        return;
      }

      for (let i = 0; i < ITEMS.length; i++) {
        const item = ITEMS[i];
        const el = itemRefs.current[i];
        if (!el) continue;

        const segLen = item.end - item.start;
        const enterEnd = item.start + segLen * 0.35;
        const exitStart = item.end - segLen * 0.35;

        const enterProgress = smoothstep(item.start, enterEnd, progress);
        const exitProgress = smoothstep(exitStart, item.end, progress);
        const visibility = enterProgress * (1 - exitProgress);

        const enterT = clamp01((progress - item.start) / Math.max(0.001, enterEnd - item.start));
        const exitT = clamp01((progress - exitStart) / Math.max(0.001, item.end - exitStart));

        const easeEnter = easeOutExpo(enterT);
        const easeExit = exitT;

        const opacity = visibility;
        const blur = (1 - easeEnter) * 6 + easeExit * 5;
        const ty = (1 - easeEnter) * 28 + easeExit * -24;
        const sc = 0.94 + easeEnter * 0.06 + easeExit * 0.06;

        el.style.opacity = String(opacity);
        el.style.filter = `blur(${blur}px)`;
        el.style.transform = `translateY(${ty}px) scale(${sc})`;
      }

      rafRef.current = requestAnimationFrame(update);
    }

    rafRef.current = requestAnimationFrame(update);

    return () => {
      mq.removeEventListener('change', handler);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="hero-typography-overlay"
      aria-hidden="true"
    >
      <div className="hero-typography-inner">
        {ITEMS.map((item, i) => (
          <div
            key={item.name}
            ref={(el) => {
              if (el) itemRefs.current[i] = el;
            }}
            className="hero-typography-item"
            style={{ opacity: 0 }}
          >
            {item.label ? (
              <span className="hero-typography-label">{item.label}</span>
            ) : null}
            <div className="hero-typography-rule" />
            <span className="hero-typography-name">{item.name}</span>
            <div className="hero-typography-rule" />
          </div>
        ))}
      </div>
    </div>
  );
}
