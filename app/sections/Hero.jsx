'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { zoomOnScroll } from '../lib/zoomOnScroll'

export default function Hero() {
  useEffect(() => {
    const track = document.getElementById('hero')
    const content = document.getElementById('hero-content')
    const badge = document.getElementById('mlh-trust-badge')

    if (!track || !content) return undefined
    
    // [ PERFORMANCE: Scroll Debouncing ]
    // Locks the scroll calculations to the screen's refresh rate to prevent layout thrashing.
    let ticking = false;
    
    const updateTransition = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const start = track.offsetTop
          const end = track.offsetTop + track.offsetHeight - window.innerHeight
          const current = window.scrollY

          if (badge) {
            const badgeScrollRange = window.innerHeight * 0.15;
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

          const heroTransitionStart = start + (window.innerHeight * 0.10);

          fadeOnScroll({ page: content, startAt: heroTransitionStart, endAt: end, startOpacity: 1, endOpacity: 0 })
          zoomOnScroll({ page: content, startAt: heroTransitionStart, endAt: end, startScale: 1, endScale: 1.8 })
          
          ticking = false;
        });
        ticking = true;
      }
    }
    
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    return () => window.removeEventListener('scroll', updateTransition)
  }, [])

  return (
    <section id='hero' className="w-full h-[125vh] tablet:h-[130vh] laptop:h-[140vh] relative z-0">
      <div id='hero-content' className="sticky top-0 h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col overflow-hidden will-change-transform">

        <a 
          id="mlh-trust-badge" 
          className="absolute top-[60px] left-4 tablet:left-12 w-[10%] min-w-[60px] max-w-[100px] z-40 origin-top animate-badge-drop will-change-transform transform-gpu" 
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2027/mlh-trust-badge-2027-yellow.svg" alt="Major League Hacking 2027" className="w-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
        </a>

        {/* [ MAIN CENTRAL CLUSTER ] */}
        <div className='relative flex flex-col justify-center items-center z-10 animate-smooth-levitate will-change-transform transform-gpu'>
          
          <div className="absolute top-0 -left-4 tablet:-top-2 tablet:-left-6 laptop:-top-2 laptop:-left-8 desktop:-top-4 desktop:-left-12 min-[1440px]:-top-4 min-[1440px]:-left-16 z-30 pointer-events-none">
            <Image 
              src="https://i.ibb.co/Q7tQMWqH/image.png" 
              alt="Date Bubble" 
              width={300} 
              height={300} 
              priority 
              className="w-[100px] tablet:w-[115px] laptop:w-[130px] desktop:w-[150px] min-[1440px]:w-[180px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
            />
          </div>

          <Image 
            src="/svgs/logo.svg" 
            alt="SharkByte Logo" 
            width={100} 
            height={100} 
            priority 
            className="w-[220px] tablet:w-[250px] laptop:w-[280px] desktop:w-[300px] min-[1440px]:w-[380px] h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative z-10" 
          />

          <div className="mt-4 tablet:mt-4 laptop:mt-6 font-bold text-center text-white text-[1rem] tablet:text-[1.1rem] laptop:text-[1.3rem] desktop:text-[1.5rem] min-[1440px]:text-[2.2rem] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] z-20 tracking-wide px-4"> 
            Miami Dade College's Signature Hackathon 
          </div>

          {/* 
            [ INSTITUTIONAL ANCHOR ]
            Replaced expensive backdrop-blur with highly optimized bg-gray-950/95.
            Yields 0 GPU strain during the levitation animation loop.
          */}
          <div className="mt-5 tablet:mt-8 flex items-center justify-center gap-5 tablet:gap-8 bg-gray-950/95 border border-gray-600/50 px-6 py-3 tablet:px-8 tablet:py-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-20 transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src="https://i.ibb.co/jvPsQy3z/init-logo.jpg" 
              alt="INIT Logo" 
              width={150} 
              height={75} 
              className="w-[70px] tablet:w-[90px] laptop:w-[110px] desktop:w-[130px] h-auto object-contain rounded-lg drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" 
            />
            
            <div className="w-[2px] h-[35px] tablet:h-[45px] bg-gray-700 rounded-full"></div>
            
            <Image 
              src="https://i.ibb.co/z96LThT/Miami-Dade-College-logo-svg.webp" 
              alt="Miami Dade College Logo" 
              width={150} 
              height={75} 
              className="w-[85px] tablet:w-[110px] laptop:w-[130px] desktop:w-[150px] h-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]" 
            />
          </div>
          
        </div>

        {/* 
          [ ACTION UI ZONE ] 
          Added transform-gpu and will-change-transform for optimized hover states.
        */}
        <div className="absolute bottom-6 right-6 tablet:bottom-10 tablet:right-10 z-30 flex flex-col items-end gap-4 tablet:gap-5">
          
          <a 
            href="https://airtable.com/appY1e4YbYhqNWdpE/shr5bPimkY7ck4v88"
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-all duration-300 hover:-translate-y-2 active:translate-y-0 cursor-pointer will-change-transform transform-gpu"
          >
            <div className="bg-gray-950/95 border-2 border-[#00f3ff]/40 shadow-[0_15px_35px_rgba(0,243,255,0.15)] rounded-xl p-5 tablet:p-6 w-[280px] tablet:w-[360px] text-center group-hover:bg-gray-900/95 group-hover:border-[#00f3ff] group-hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all duration-300">
              <p className="text-sm tablet:text-base font-bold text-gray-300 tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                Ready to dive in?
              </p>
              <span className="mt-2 block text-[16px] tablet:text-[22px] font-mono font-bold text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(0,243,255,1)] group-hover:text-white uppercase tracking-widest transition-all duration-300">
                Register Here<span className="animate-blink text-white ml-1">_</span>
              </span>
            </div>
          </a>

          <a 
            href="mailto:Mdc-north@weareinit.org?subject=SharkByte%20Hackathon%20Inquiry" 
            className="group block transition-all duration-300 hover:-translate-y-2 active:translate-y-0 cursor-pointer will-change-transform transform-gpu"
          >
            <div className="bg-gray-950/95 border-2 border-gray-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.6)] rounded-xl p-5 tablet:p-6 w-[260px] tablet:w-[340px] text-center group-hover:border-[#8b5cf6] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
              <p className="text-sm tablet:text-base font-bold text-gray-300 tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                Have Questions?
              </p>
              <span className="mt-2 block break-all text-[14px] tablet:text-[18px] font-mono font-bold text-[#8b5cf6] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,1)] transition-all duration-300 uppercase tracking-widest">
                Contact Us<span className="animate-blink text-[#39ff14] ml-1 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">_</span>
              </span>
            </div>
          </a>

        </div>
        
      </div>

      <style jsx>{`
        @keyframes smooth-levitate {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -15px, 0); }
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