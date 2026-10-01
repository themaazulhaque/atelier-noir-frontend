'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);
  const loaderTextRef = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const loader = loaderRef.current;
    const loaderBar = loaderBarRef.current;
    const loaderText = loaderTextRef.current;
    const hero = heroRef.current;
    if (!canvas || !loader || !loaderBar || !loaderText || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const TOTAL_FRAMES = 401;
    const FRAME_PATH_TEMPLATE = '/frames/frame-{ID}.webp';
    const DPR_CAP = 2;

    const frames: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let firstFrameReady = false;
    let currentDrawnFrame = -1;
    let targetFrame = 0;
    let rafId: number | null = null;
    let heroTotalHeight = 0;
    let viewportHeight = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

    function frameId(index: number): string {
      let s = String(index + 1);
      while (s.length < 4) s = '0' + s;
      return s;
    }

    function frameSrc(index: number): string {
      return FRAME_PATH_TEMPLATE.replace('{ID}', frameId(index));
    }

    function updateLoader() {
      const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      loaderBar!.style.width = pct + '%';
      loaderText!.textContent = 'Loading ' + pct + '%';
    }

    function hideLoader() {
      loader!.classList.add('hidden');
    }

    function resizeCanvas() {
      const w = hero!.clientWidth;
      const h = viewportHeight;
      const cw = Math.round(w * dpr);
      const ch = Math.round(h * dpr);
      if (canvas!.width !== cw || canvas!.height !== ch) {
        canvas!.width = cw;
        canvas!.height = ch;
        currentDrawnFrame = -1;
      }
    }

    function drawFrame(index: number) {
      if (index < 0 || index >= TOTAL_FRAMES) return;
      let img = frames[index];
      if (!img || !img.complete || img.naturalWidth === 0) {
        const nearest = findNearestLoaded(index);
        if (nearest === -1) return;
        img = frames[nearest];
        if (!img || !img.complete || img.naturalWidth === 0) return;
      }

      const cw = canvas!.width;
      const ch = canvas!.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const canvasAspect = cw / ch;
      const imageAspect = iw / ih;

      let drawW: number, drawH: number, offsetX: number, offsetY: number;

      if (canvasAspect > imageAspect) {
        drawW = cw;
        drawH = cw / imageAspect;
        offsetX = 0;
        offsetY = (ch - drawH) / 2;
      } else {
        drawH = ch;
        drawW = ch * imageAspect;
        offsetX = (cw - drawW) / 2;
        offsetY = 0;
      }

      ctx!.clearRect(0, 0, cw, ch);
      ctx!.drawImage(img, offsetX, offsetY, drawW, drawH);
      currentDrawnFrame = index;
    }

    function findNearestLoaded(index: number): number {
      let best = -1;
      let bestDist = TOTAL_FRAMES;
      for (let d = 0; d < TOTAL_FRAMES; d++) {
        const lo = index - d;
        const hi = index + d;
        if (lo >= 0 && frames[lo] && frames[lo]!.complete && frames[lo]!.naturalWidth > 0) {
          if (d < bestDist) { best = lo; bestDist = d; }
        }
        if (hi < TOTAL_FRAMES && frames[hi] && frames[hi]!.complete && frames[hi]!.naturalWidth > 0) {
          if (d < bestDist) { best = hi; bestDist = d; }
        }
        if (bestDist <= d) break;
      }
      return best;
    }

    function clampFrameIndex(index: number): number {
      if (index < 0) return 0;
      if (index >= TOTAL_FRAMES) return TOTAL_FRAMES - 1;
      return index;
    }

    function getScrollProgress(): number {
      const rect = hero!.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollableDistance = heroTotalHeight - viewportHeight;
      if (scrollableDistance <= 0) return 0;
      let progress = scrolled / scrollableDistance;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      return progress;
    }

    function onScroll() {
      const progress = getScrollProgress();
      targetFrame = clampFrameIndex(Math.round(progress * (TOTAL_FRAMES - 1)));
      if (rafId === null) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function tick() {
      rafId = null;
      if (targetFrame !== currentDrawnFrame) {
        drawFrame(targetFrame);
      }
    }

    function preloadAllParallel() {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        ((idx: number) => {
          const img = new Image();
          img.decoding = 'async';
          img.src = frameSrc(idx);
          img.onload = () => {
            frames[idx] = img;
            loadedCount++;
            updateLoader();
            if (!firstFrameReady && idx === 0) {
              firstFrameReady = true;
              resizeCanvas();
              drawFrame(0);
              hideLoader();
            }
            if (targetFrame !== currentDrawnFrame) {
              drawFrame(targetFrame);
            }
          };
          img.onerror = () => {
            loadedCount++;
            updateLoader();
          };
        })(i);
      }
    }

    function updateDimensions() {
      heroTotalHeight = hero!.offsetHeight;
      viewportHeight = window.innerHeight;
    }

    function onResize() {
      updateDimensions();
      resizeCanvas();
      currentDrawnFrame = -1;
      onScroll();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    updateDimensions();
    resizeCanvas();
    preloadAllParallel();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-sticky">
        <canvas id="hero-canvas" ref={canvasRef} />
        <div id="hero-loader" className="hero-loader" ref={loaderRef}>
          <div className="loader-content">
            <div className="loader-bar-track">
              <div id="loader-bar" className="loader-bar" ref={loaderBarRef} />
            </div>
            <p id="loader-text" className="loader-text" ref={loaderTextRef}>
              Loading 0%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
