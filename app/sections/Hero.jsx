'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { zoomOnScroll } from '../lib/zoomOnScroll'

export default function Hero() {
  // ============================================================================
  // PARALLAX & FADE SCROLL ENGINE
  // ============================================================================
  useEffect(() => {
    const track = document.getElementById('hero')
    const content = document.getElementById('hero-content')
    const badge = document.getElementById('mlh-trust-badge')

    if (!track || !content) return undefined
    
    const updateTransition = () => {
      const start = track.offsetTop
      const end = track.offsetTop + track.offsetHeight - window.innerHeight
      const current = window.scrollY

      // 1. FLASHY BADGE ANIMATION (Pre-Transition)
      // Calculates progress specifically for the first 15% of the user's scroll.
      if (badge) {
        const badgeScrollRange = window.innerHeight * 0.15;
        const badgeRawProgress = Math.max(0, Math.min(1, (current - start) / badgeScrollRange));
        
        // Easing curve creates a "snap" effect as it gets pulled upwards.
        const badgeEase = badgeRawProgress < 0.5 
          ? 4 * badgeRawProgress * badgeRawProgress * badgeRawProgress 
          : 1 - Math.pow(-2 * badgeRawProgress + 2, 3) / 2;

        // Slides UP behind the navbar (-150px) and tilts left (-15deg) before fading out
        const badgeY = -(badgeEase * 150);
        const badgeRotate = -(badgeEase * 15);
        const badgeOpacity = 1 - (badgeRawProgress * 1.2);

        badge.style.transform = `translateY(${badgeY}px) rotate(${badgeRotate}deg)`;
        badge.style.opacity = Math.max(0, badgeOpacity).toFixed(3);
      }

      // 2. DELAYED HERO TRANSITION
      // By adding a 10% offset to the startAt, we guarantee the Hero doesn't begin 
      // zooming or fading until the MLH badge is already animating out of the way.
      const heroTransitionStart = start + (window.innerHeight * 0.10);

      fadeOnScroll({
        page: content,
        startAt: heroTransitionStart,
        endAt: end,
        startOpacity: 1,
        endOpacity: 0,
      })
      
      zoomOnScroll({
        page: content,
        startAt: heroTransitionStart,
        endAt: end,
        startScale: 1,
        endScale: 1.8,
      })
    }
    
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    window.addEventListener('resize', updateTransition)
    
    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', updateTransition)
    }
  }, [])

  return (
    <section id='hero' className="w-full h-[200vh] relative">
      <div id='hero-content' className="sticky top-0 h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col overflow-hidden will-change-transform">

        {/* 
          MLH EVENT TRUST BADGE (2027 SEASON - YELLOW)
          z-40: Forces it underneath the z-50 Navbar.
          top-[60px]: Hangs it perfectly flush to the bottom lip of the Navbar.
          animate-badge-drop: Triggers the CSS keyframe load animation.
        */}
        <a 
          id="mlh-trust-badge" 
          className="absolute top-[60px] left-4 tablet:left-12 w-[10%] min-w-[60px] max-w-[100px] z-40 origin-top animate-badge-drop" 
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=yellow" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2027/mlh-trust-badge-2027-yellow.svg" 
            alt="Major League Hacking 2027 Hackathon Season" 
            className="w-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          />
        </a>

        <div className='relative flex-column justify-center items-center'>
          <div className="flex absolute left-[-3rem] top-[-1rem] desktop:left-[-10rem] -rotate-[15deg] z-9 animate-bounce">
            <Image className="w-[100px] h-auto desktop:w-[200px]"
              src="https://i.ibb.co/Q7tQMWqH/image.png"
              alt="text-bubble for feedback form"
              width={300}
              height={300}
              priority
            />
          </div>

          <div className="z-2">
            <Image
              src="/svgs/logo.svg"
              alt="SharkByte Logo"
              width={100}
              height={100}
              priority
              className="w-[300px] h-[300px] tablet:w-[350px] tablet:h-[350px] laptop:w-[400px] laptop:w-[400px] desktop:w-full desktop:h-full"
            />
          </div>

          <div className="font-bold absolute text-nowrap justify-self-center text-white text-[1rem] tablet:text-[1.25rem] laptop:text-[1.5rem] desktop:text-[2.2rem] text-shadow-lg/100 text-shadow-white-900"> 
            Miami Dade College's Signature Hackathon 
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col items-center justify-center p-4 text-center text-white retro-box pixel-shadow sm:bottom-6 sm:left-auto sm:right-6 sm:w-[18rem] sm:p-5">
          <p className="text-sm font-bold sm:text-base tablet:text-lg">
            Have Questions? Contact Us!
          </p>
          <a 
            href="mailto:Mdc-north@weareinit.org?subject=SharkByte%20Hackathon%20Inquiry" 
            className="mt-2 break-all text-sm text-purple-400 tablet:text-base hover:text-purple-300 hover:underline hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] transition-all duration-300 inline-block"
          >
            Mdc-north@weareinit.org
          </a>
        </div>
        
      </div>
    </section>
  )
}