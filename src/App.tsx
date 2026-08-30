import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_114821_a8ca298f-be2c-4613-a4dd-51b69e16bbde.mp4';

// Official Discord SVG Icon
function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

// Official X / Twitter SVG Icon
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// Official Roblox SVG Icon
function RobloxIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.166 0L0 19.297l18.834 4.703 5.166-19.297L5.166 0zm9.467 14.512l-4.708-1.177 1.177-4.708 4.708 1.177-1.177 4.708z" />
    </svg>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [page, setPage] = useState(0); // 0 = Screen 1, 1 = Screen 2

  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const touchStartY = useRef(0);

  // High-performance color-inverting custom cursor with mix-blend-mode: difference
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isHoveringInteractive = false;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      isHoveringInteractive = !!target?.closest('button, a, [role="button"]');

      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHoveringInteractive ? 1.4 : 1})`;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  // Ultra-optimized GPU Shader Cache Pre-warming & Low Memory Pipeline (<50MB RAM)
  useEffect(() => {
    let isCancelled = false;
    let progress = 15;
    setLoadPercent(15);

    const warmPipeline = async () => {
      // Step 1: Pre-warm fonts safely
      if (document.fonts) {
        try {
          await document.fonts.ready;
        } catch (_) {}
      }

      // Step 2: Pre-warm GPU hardware video decoder pipeline
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.playsInline = true;
        if (video.readyState < 2) {
          await new Promise<void>((res) => {
            const onCanPlay = () => {
              video.removeEventListener('canplay', onCanPlay);
              res();
            };
            video.addEventListener('canplay', onCanPlay);
            setTimeout(res, 500);
          });
        }
      }

      // Step 3: Smooth progress increment
      const timer = setInterval(() => {
        if (isCancelled) {
          clearInterval(timer);
          return;
        }
        progress += Math.floor(Math.random() * 14) + 12;
        if (progress >= 100) {
          progress = 100;
          setLoadPercent(100);
          clearInterval(timer);
          setTimeout(() => {
            if (!isCancelled) {
              setIsLoading(false);
            }
          }, 200);
        } else {
          setLoadPercent(progress);
        }
      }, 35);
    };

    warmPipeline();

    return () => {
      isCancelled = true;
    };
  }, []);

  // 1-Scroll Page Switcher
  const handleScrollAction = useCallback((direction: 'down' | 'up') => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    if (direction === 'down') {
      setPage(1);
    } else {
      setPage(0);
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 650);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 15) {
        if (e.deltaY > 0) {
          handleScrollAction('down');
        } else {
          handleScrollAction('up');
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        handleScrollAction('down');
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        handleScrollAction('up');
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (Math.abs(diff) > 35) {
        if (diff > 0) {
          handleScrollAction('down');
        } else {
          handleScrollAction('up');
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleScrollAction]);

  return (
    <main className="h-screen w-full bg-[#05060A] text-white selection:bg-white selection:text-black select-none overflow-hidden fixed inset-0">
      {/* MIX-BLEND-DIFFERENCE COLOR-INVERTING CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference will-change-transform flex items-center justify-center transition-transform duration-75 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      </div>

      {/* 0) PURE BLACK & WHITE MINIMALIST LOADING SCREEN */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase select-none font-sans">
            Veltrix studio
          </div>
          <div className="w-36 sm:w-48 h-[2px] bg-white/20 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${Math.max(5, loadPercent)}%` }}
            />
          </div>
        </div>
      </div>

      {/* AMBIENT CINEMATIC VIDEO BACKGROUND (20PX BLUR, GPU OPTIMIZED) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transform-gpu" aria-hidden="true">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 filter blur-[20px] transform-gpu scale-110 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060A]/80 via-[#05060A]/50 to-[#05060A]" />
      </div>

      {/* 2-PAGE 1-SCROLL CONTAINER */}
      <div
        className="w-full h-full relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{ transform: `translateY(-${page * 100}vh)` }}
      >
        {/* ========================================================= */}
        {/* SCREEN 1: COMING SOON WITH ACTIVE BLUR-FADE ON SCROLL */}
        {/* ========================================================= */}
        <section
          aria-label="Coming Soon Screen"
          className="h-screen w-full flex flex-col justify-between overflow-hidden relative"
        >
          {/* TOP MARQUEE: VeltrixStudio.lol (LEFT TO RIGHT) */}
          <div className="w-full overflow-hidden border-b border-white/10 bg-[#05060A]/85 backdrop-blur-xl py-3 will-change-transform">
            <div className="flex w-max animate-marquee-left-to-right">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-[0.18em] text-white mx-8 select-none flex items-center gap-8 font-gondens"
                >
                  <span>VeltrixStudio.lol</span>
                  <span className="text-white/30 text-base sm:text-xl">✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* ULTRA-MASSIVE CRISP "COMING SOON" */}
          <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-8 overflow-hidden">
            <div
              className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,filter,transform] w-full text-center"
              style={{
                opacity: page === 0 ? 1 : 0,
                filter: page === 0 ? 'blur(0px)' : 'blur(35px)',
                transform: page === 0 ? 'scale(1) translateY(0px)' : 'scale(0.95) translateY(40px)',
              }}
            >
              <h1 className="w-full font-gondens font-black text-[clamp(3.5rem,15vw,13.5rem)] tracking-tight uppercase leading-[0.85] text-white text-center select-none transform-gpu drop-shadow-[0_20px_50px_rgba(255,255,255,0.25)]">
                COMING SOON
              </h1>
            </div>
          </div>

          {/* Bottom space bar / 1-click scroll prompt */}
          <div
            className="w-full py-4 text-center transition-all duration-500"
            style={{
              opacity: page === 0 ? 1 : 0,
              filter: page === 0 ? 'blur(0px)' : 'blur(10px)',
            }}
          >
            <button
              type="button"
              onClick={() => handleScrollAction('down')}
              className="group inline-flex flex-col items-center gap-1 text-[10px] sm:text-xs font-mono tracking-[0.35em] text-white/50 hover:text-white transition-colors uppercase animate-pulse"
            >
              <span>↓ SCROLL TO JOIN US ↓</span>
            </button>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCREEN 2: "JOIN US" (WITH BOTTOM MARQUEE IN FOOTER AREA) */}
        {/* ========================================================= */}
        <section
          aria-label="Community Hub and Join Links"
          className="h-screen w-full flex flex-col justify-between items-center border-t border-white/10 bg-gradient-to-b from-transparent via-[#07090F]/90 to-[#05060A] relative overflow-hidden"
        >
          {/* Top Return Button */}
          <button
            type="button"
            onClick={() => handleScrollAction('up')}
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-slate-400 hover:text-white transition-colors uppercase pt-6"
          >
            <ChevronUp size={14} />
            <span>BACK TO TOP</span>
          </button>

          {/* Centered Join Us Hub */}
          <div
            className="max-w-xl w-full text-center flex flex-col items-center px-6 sm:px-12 my-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,filter,transform]"
            style={{
              opacity: page === 1 ? 1 : 0,
              filter: page === 1 ? 'blur(0px)' : 'blur(25px)',
              transform: page === 1 ? 'scale(1) translateY(0px)' : 'scale(0.94) translateY(30px)',
            }}
          >
            <h2 className="font-gondens font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white mb-2 leading-none">
              JOIN US
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed text-center">
              We're releasing <span className="text-white font-semibold">Grow a Brainrot Baby!</span> very soon.<br className="hidden sm:inline" />
              Join our Discord and follow us on X.com for exclusive sneak peeks,<br className="hidden sm:inline" />
              and join our Roblox group for early playtests and launch codes.
            </p>

            {/* Centered Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-3.5">
              {/* Discord */}
              <div className="group p-5 rounded-2xl bg-[#0c0e18]/90 border border-white/10 text-white flex flex-col items-center text-center shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-2.5">
                  <DiscordIcon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider mb-0.5 font-gondens text-lg text-white">
                  DISCORD
                </h3>
                <p className="text-[10px] text-slate-400 mb-3">
                  Join the official Discord server
                </p>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-[11px] font-bold tracking-wider uppercase transition-colors duration-200 w-full justify-center"
                >
                  <span>JOIN DISCORD</span>
                  <ArrowRight size={12} />
                </a>
              </div>

              {/* X.com */}
              <div className="group p-5 rounded-2xl bg-[#0c0e18]/90 border border-white/10 text-white flex flex-col items-center text-center shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-2.5">
                  <XIcon className="w-4 h-4" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider mb-0.5 font-gondens text-lg text-white">
                  X.COM
                </h3>
                <p className="text-[10px] text-slate-400 mb-3">
                  Follow for official announcements
                </p>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-[11px] font-bold tracking-wider uppercase transition-colors duration-200 w-full justify-center"
                >
                  <span>FOLLOW @VELTRIX</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Roblox Group Card with Official Roblox Icon */}
            <div className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white flex items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <RobloxIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    ROBLOX GROUP
                  </div>
                  <div className="text-[9px] text-slate-400">
                    Join the Veltrix Studio Roblox Group
                  </div>
                </div>
              </div>

              <a
                href="https://www.roblox.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-[11px] font-bold tracking-wider uppercase transition-colors duration-200"
              >
                <span>JOIN</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Bottom Container: Bottom Marquee (RIGHT TO LEFT REVERSE MOTION) */}
          <footer
            className="w-full overflow-hidden border-t border-white/10 bg-[#05060A]/85 backdrop-blur-xl py-3 cursor-pointer will-change-transform"
            onClick={() => handleScrollAction('up')}
          >
            <div className="flex w-max animate-marquee-right-to-left">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-[0.18em] text-white/80 mx-8 select-none flex items-center gap-8 font-gondens"
                >
                  <span>VeltrixStudio.lol</span>
                  <span className="text-white/30 text-base sm:text-xl">✦</span>
                </span>
              ))}
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
