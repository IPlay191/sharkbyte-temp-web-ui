'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { zoomOnScroll } from '../lib/zoomOnScroll'

export default function Hero() {
  const trackRef = useRef(null)
  const contentRef = useRef(null)
  const badgeRef = useRef(null)

  const scrollToStats = () => {
    const anchor = document.getElementById('horizontal-anchor-1')
    if (anchor) {
      window.scrollTo({
        top: anchor.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const track = trackRef.current
    const content = contentRef.current
    const badge = badgeRef.current

    if (!track || !content) return undefined
    
    let ticking = false;
    let animationFrameId;
    
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
    
    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', calculateLayout)
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section ref={trackRef} id="hero" className="w-full h-[125vh] tablet:h-[130vh] laptop:h-[140vh] relative z-0">
      <div ref={contentRef} id="hero-content" className="sticky top-0 h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col overflow-hidden will-change-transform">

        <a 
          ref={badgeRef}
          id="mlh-trust-badge" 
          className="absolute top-[60px] right-1 mobile:right-3 tablet:right-auto tablet:left-12 w-[12%] min-w-[55px] tablet:min-w-[60px] max-w-[100px] z-40 origin-top animate-badge-drop will-change-transform transform-gpu" 
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Major League Hacking 2027 Trust Badge"
        >
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2027/mlh-trust-badge-2027-yellow.svg" alt="Major League Hacking 2027" className="w-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
        </a>

        {/* MAIN CENTRAL CLUSTER */}
        <div className="relative flex flex-col justify-center items-center z-10 animate-smooth-levitate will-change-transform transform-gpu px-4">

          <Image 
            src="/svgs/logo.svg" 
            alt="SharkByte Logo" 
            width={100} 
            height={100} 
            priority 
            className="w-[175px] mobile:w-[160px] tablet:w-[250px] laptop:w-[280px] desktop:w-[300px] min-[1440px]:w-[380px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative z-10" 
          />

          <div className="mt-3 tablet:mt-4 laptop:mt-6 font-bold text-center text-white text-[1rem] tablet:text-[1.1rem] laptop:text-[1.3rem] desktop:text-[1.5rem] min-[1440px]:text-[2.2rem] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-20 tracking-wide"> 
            Miami Dade College&apos;s Signature Hackathon 
          </div>

          {/* 2027 RETURN BANNER + DATES */}
          <div className="mt-3 tablet:mt-4 bg-gray-950/90 border-2 border-[#00f3ff]/60 shadow-[0_0_25px_rgba(0,243,255,0.25)] rounded-lg px-4 py-2 tablet:px-6 tablet:py-2.5 z-20 max-w-[95vw] flex flex-col items-center">
            <p className="font-mono font-bold text-center text-[#00f3ff] text-[11px] mobile:text-[12px] tablet:text-[15px] laptop:text-[17px] tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
              SEA YOU SOON. WE&apos;RE COMING BACK WITH A SPLASH!
            </p>
            <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff]/40 to-transparent my-1.5"></div>
            <p className="font-mono font-bold text-center text-yellow-400 text-[13px] mobile:text-[14px] tablet:text-[18px] laptop:text-[20px] tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
              November 5th - 7th, 2027
            </p>
          </div>

          {/* INSTITUTIONAL ANCHOR */}
          <div className="mt-4 tablet:mt-5 flex items-center justify-center gap-4 tablet:gap-6 bg-gray-950/95 border border-gray-600/50 px-5 py-2.5 tablet:px-6 tablet:py-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-20 transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src="/svgs/init-logo.jpg"
              alt="INIT Logo" 
              width={150}
              height={75}
              className="w-[75px] tablet:w-[95px] laptop:w-[110px] desktop:w-[90px] h-auto object-contain rounded-lg drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" 
            />
            
            <div className="w-[2px] h-[30px] tablet:h-[40px] bg-gray-700 rounded-full"></div>
            
            <Image 
              src="/svgs/miami-dade-college-logo.png"
              alt="Miami Dade College Logo" 
              width={150}
              height={75}
              className="w-[75px] tablet:w-[95px] laptop:w-[110px] desktop:w-[90px] h-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" 
             />
          </div>
          
        </div>

        {/* ACTION UI ZONE: POST-EVENT STACK */}
        <div className="z-30 flex flex-col gap-3 tablet:gap-4 w-full max-[700px]:relative max-[700px]:items-center max-[700px]:mt-6 min-[701px]:w-auto min-[701px]:absolute min-[701px]:bottom-6 min-[701px]:right-6 tablet:bottom-10 tablet:right-10 min-[701px]:items-end px-4 min-[701px]:px-0">
          
          {/* PRIMARY: 2026 STATS SCROLL */}
          <button 
            type="button"
            onClick={scrollToStats}
            aria-label="Scroll to SharkByte 2026 Stats"
            className="group block transition-all duration-300 hover:-translate-y-2 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f3ff] rounded-xl cursor-pointer will-change-transform transform-gpu max-[700px]:w-full max-[700px]:max-w-[280px]"
          >
            <div className="bg-gray-950/95 border-2 border-gray-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] rounded-xl py-3 px-4 tablet:p-5 w-full min-[701px]:w-[280px] tablet:w-[360px] text-center group-hover:bg-gray-900/95 group-hover:border-[#00f3ff] transition-all duration-300">
              <p className="text-[10px] mobile:text-[12px] tablet:text-[14px] font-bold text-gray-300 tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                SharkByte 2026 Concluded!
              </p>
              <span className="mt-1 tablet:mt-2 block text-[15px] mobile:text-[16px] tablet:text-[22px] font-mono font-bold text-[#00f3ff] group-hover:text-white uppercase tracking-widest transition-all duration-300">
                View 2026 Stats
              </span>
            </div>
          </button>

          {/* SECONDARY: CONTACT US */}
          <a 
            href="mailto:Mdc-north@weareinit.org?subject=SharkByte%20Hackathon%20Inquiry" 
            aria-label="Contact the SharkByte Team"
            className="group block transition-all duration-300 hover:-translate-y-2 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6] rounded-xl cursor-pointer will-change-transform transform-gpu max-[700px]:w-full max-[700px]:max-w-[260px]"
          >
            <div className="bg-gray-950/95 border-2 border-gray-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] rounded-xl py-3 px-4 tablet:p-5 w-full min-[701px]:w-[260px] tablet:w-[340px] text-center group-hover:border-[#8b5cf6] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
              <p className="text-[10px] mobile:text-[12px] tablet:text-[14px] font-bold text-gray-300 tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                Have Questions?
              </p>
              <span className="mt-1 tablet:mt-2 block break-all text-[14px] mobile:text-[15px] tablet:text-[18px] font-mono font-bold text-[#8b5cf6] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,1)] transition-all duration-300 uppercase tracking-widest">
                Contact Us
              </span>
            </div>
          </a>

        </div>
        
      </div>
    </section>
  )
}