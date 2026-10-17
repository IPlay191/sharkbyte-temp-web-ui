'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { zoomOnScroll } from '../lib/zoomOnScroll'

export default function Hero() {
  const trackRef = useRef(null)
  const contentRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const content = contentRef.current
    const badge = badgeRef.current

    if (!track || !content) return undefined
    
    // [ PERFORMANCE: Scroll Debouncing & Memory Management ]
    let ticking = false;
    let animationFrameId;
    
    // Cache layout metrics to prevent layout thrashing inside the animation frame
    let start = 0;
    let end = 0;
    let badgeScrollRange = 0;
    let heroTransitionStart = 0;

    const calculateLayout = () => {
      start = track.offsetTop
      end = track.offsetTop + track.offsetHeight - window.innerHeight
      badgeScrollRange = window.innerHeight * 0.15
      heroTransitionStart = start + (window.innerHeight * 0.10)
    }

    // Initial calculation and listener for viewport changes
    calculateLayout()
    window.addEventListener('resize', calculateLayout, { passive: true })

    const updateTransition = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          const current = window.scrollY

          if (badge) {
            const badgeRawProgress = Math.max(0, Math.min(1, (current - start) / badgeScrollRange));
            
            const badgeEase = badgeRawProgress < 0.5 
              ? 4 * badgeRawProgress * badgeRawProgress * badgeRawProgress 
              : 1 - Math.pow(-2 * badgeRawProgress + 2, 3) / 2;

            const badgeY = -(badgeEase * 150);
            const badgeRotate = -(badgeEase * 15);
            const badgeOpacity = 1 - (badgeRawProgress * 1.2);

            badge.style.transform = `translate3d(0, ${badgeY}px, 0) rotate(${badgeRotate}deg)`;
            badge.style.opacity = Math.max(0, badgeOpacity).toFixed(3);
          }

          fadeOnScroll({ page: content, startAt: heroTransitionStart, endAt: end, startOpacity: 1, endOpacity: 0 })
          zoomOnScroll({ page: content, startAt: heroTransitionStart, endAt: end, startScale: 1, endScale: 1.8 })
          
          ticking = false;
        });
        ticking = true;
      }
    }
    
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    
    // Cleanup: Remove listeners and cancel pending animation frames to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', calculateLayout)
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section ref={trackRef} id='hero' className="w-full h-[125vh] tablet:h-[130vh] laptop:h-[140vh] relative z-0">
      <div ref={contentRef} id='hero-content' className="sticky top-0 h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col overflow-hidden will-change-transform">

        {/* 
          [ MLH BADGE: THE CORRIDOR DROP ]
          Mobile & PC: Anchored strictly to top-[60px] to clear the universal height of the top navigation bar.
        */}
        <a 
          ref={badgeRef}
          id="mlh-trust-badge" 
          className="absolute top-[60px] left-1 mobile:left-3 tablet:top-[60px] tablet:left-12 w-[12%] min-w-[55px] tablet:min-w-[60px] max-w-[100px] z-40 origin-top animate-badge-drop will-change-transform transform-gpu" 
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2027/mlh-trust-badge-2027-yellow.svg" alt="Major League Hacking 2027" className="w-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
        </a>

        {/* [ MAIN CENTRAL CLUSTER ] */}
        <div className='relative flex flex-col justify-center items-center z-10 animate-smooth-levitate will-change-transform transform-gpu'>
          
          {/* 
            [ DATE BUBBLE: RIGHT-SHIFT & DOWN-SHIFT POSITIONAL FIX ]
            Mobile: Shifted down (-top-2) and right (left-20 / left-24).
            This physically tucks the bubble directly over the shark's nose, pulling it entirely 
            out of the path of the MLH badge. Tablet+ remains untouched.
          */}
          <div className="absolute -top-2 left-20 mobile:top-4 mobile:-left-4 tablet:-top-2 tablet:-left-6 laptop:-top-2 laptop:-left-8 desktop:-top-4 desktop:-left-12 min-[1440px]:-top-4 min-[1440px]:-left-16 z-30 pointer-events-none">
            <Image 
              src="/svgs/date-bubble.png"
              alt="Date Bubble" 
              width={300} 
              height={300} 
              priority 
              className="w-[80px] mobile:w-[100px] tablet:w-[115px] laptop:w-[130px] desktop:w-[150px] min-[1440px]:w-[180px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
            />
          </div>

          {/* 
            [ PRIMARY LOGO: MICRO-SCALING ]
            Mobile: Adjusted widths to 175px/160px to slightly increase negative space.
            Tablet+ remains untouched.
          */}
          <Image 
            src="/svgs/logo.svg" 
            alt="SharkByte Logo" 
            width={100} 
            height={100} 
            priority 
            className="w-[175px] mobile:w-[160px] tablet:w-[250px] laptop:w-[280px] desktop:w-[300px] min-[1440px]:w-[380px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative z-10" 
          />

          <div className="mt-3 tablet:mt-4 laptop:mt-6 font-bold text-center text-white text-[1rem] tablet:text-[1.1rem] laptop:text-[1.3rem] desktop:text-[1.5rem] min-[1440px]:text-[2.2rem] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-20 tracking-wide px-4"> 
            Miami Dade College's Signature Hackathon 
          </div>

          {/* [ INSTITUTIONAL ANCHOR: RESTORED SCALE ] */}
          <div className="mt-4 tablet:mt-6 flex items-center justify-center gap-4 tablet:gap-6 bg-gray-950/95 border border-gray-600/50 px-5 py-2.5 tablet:px-6 tablet:py-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-20 transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src="/svgs/init-logo.jpg"
              alt="INIT Logo" 
              width={150} 
              height={75} 
              className="w-[75px] tablet:w-[95px] laptop:w-[110x] desktop:w-[90px] h-auto object-contain rounded-lg drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" 
            />
            
            <div className="w-[2px] h-[30px] tablet:h-[40px] bg-gray-700 rounded-full"></div>
            
            <Image 
              src="/svgs/miami-dade-college-logo.webp"
              alt="Miami Dade College Logo" 
              width={150} 
              height={75} 
              className="w-[75px] tablet:w-[95px] laptop:w-[110px] desktop:w-[90px] h-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" 
            />
          </div>
          
        </div>

        {/* 
          ========================================================================
          [ ACTION UI ZONE : RESPONSIVE STACK ] 
          ========================================================================
        */}
        <div className="z-30 flex flex-col gap-3 tablet:gap-5 w-full max-[700px]:relative max-[700px]:items-center max-[700px]:mt-6 min-[701px]:w-auto min-[701px]:absolute min-[701px]:bottom-6 min-[701px]:right-6 tablet:bottom-10 tablet:right-10 min-[701px]:items-end px-4 min-[701px]:px-0">
          
          <a 
            href="https://airtable.com/appY1e4YbYhqNWdpE/shr5bPimkY7ck4v88"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-all duration-300 hover:-translate-y-2 active:translate-y-0 cursor-pointer will-change-transform transform-gpu max-[700px]:w-full max-[700px]:max-w-[280px]"
          >
            <div className="bg-gray-950/95 border-2 border-[#00f3ff]/40 shadow-[0_15px_35px_rgba(0,243,255,0.15)] rounded-xl py-3 px-4 tablet:p-6 w-full min-[701px]:w-[280px] tablet:w-[360px] text-center group-hover:bg-gray-900/95 group-hover:border-[#00f3ff] group-hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all duration-300">
              <p className="text-[10px] mobile:text-[12px] tablet:text-base font-bold text-gray-300 tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                Ready to dive in?
              </p>
              <span className="mt-1 tablet:mt-2 block text-[15px] mobile:text-[16px] tablet:text-[22px] font-mono font-bold text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,1)] group-hover:text-white uppercase tracking-widest transition-all duration-300">
                Register Here<span className="animate-blink text-white ml-1">_</span>
              </span>
            </div>
          </a>

          <a 
            href="mailto:Mdc-north@weareinit.org?subject=SharkByte%20Hackathon%20Inquiry" 
            className="group block transition-all duration-300 hover:-translate-y-2 active:translate-y-0 cursor-pointer will-change-transform transform-gpu max-[700px]:w-full max-[700px]:max-w-[260px]"
          >
            <div className="bg-gray-950/95 border-2 border-gray-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] rounded-xl py-3 px-4 tablet:p-6 w-full min-[701px]:w-[260px] tablet:w-[340px] text-center group-hover:border-[#8b5cf6] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
              <p className="text-[10px] mobile:text-[12px] tablet:text-base font-bold text-gray-300 tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                Have Questions?
              </p>
              <span className="mt-1 tablet:mt-2 block break-all text-[14px] mobile:text-[15px] tablet:text-[18px] font-mono font-bold text-[#8b5cf6] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,1)] transition-all duration-300 uppercase tracking-widest">
                Contact Us<span className="animate-blink text-[#39ff14] ml-1 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">_</span>
              </span>
            </div>
          </a>

        </div>
        
      </div>

      <style jsx>{`
        @keyframes smooth-levitate {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }
        .animate-smooth-levitate {
          animation: smooth-levitate 5s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite; 
        }
      `}</style>
    </section>
  )
}