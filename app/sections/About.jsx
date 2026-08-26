'use client'

import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

const About = () => {
  // ============================================================================
  // SCROLL ANIMATION EFFECT
  // ============================================================================
  useEffect(() => {
    const about = document.getElementById('about')

    // Guard clause prevents execution if component unmounts or DOM is missing
    if (!about) return undefined

    // Calculates opacity based on scroll depth to create a smooth fade-in reveal
    const updateTransition = () => {
      fadeOnScroll({
        page: about,
        startAt: about.offsetTop - window.innerHeight * 0.2,
        endAt: about.offsetTop + about.offsetHeight * 0.01,
        startOpacity: 0,
        endOpacity: 1,
      })
    }

    // Passive listener improves browser scrolling performance by bypassing default checks
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })

    // Cleanup prevents memory leaks
    return () => {
      window.removeEventListener('scroll', updateTransition)
    }
  }, [])

  return (
   <section id="about" className="w-full h-svh flex justify-center items-center relative overflow-hidden about-bg px-4">
     
     {/* 
        LAYOUT CONSTRAINT & OPTICAL ALIGNMENT: 
        - Strict max-w-[750px] establishes a safe bounding box to prevent horizontal overflow on ultra-wide monitors.
        - Gentle negative Y translation aligns the text vertically into the visual center of the background asset.
        - Subtle positive X translation (translate-x) perfectly centers the text optically, compensating for the billboard's left-sided 3D shadow without over-correcting.
     */}
     <div className="w-[90%] max-w-[750px] flex justify-center items-center -translate-y-6 tablet:-translate-y-8 laptop:-translate-y-10 translate-x-2 tablet:translate-x-3 laptop:translate-x-4 desktop:translate-x-5">
       
       {/* 
          TYPOGRAPHY ARCHITECTURE:
          Utilizes fluid responsive sizing via standard Tailwind breakpoints. 
          Tracking-wide enhances legibility and contrast against the complex background.
       */}
       <p className="glow-text font-bold text-center text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[28px] desktop:text-[32px] leading-relaxed tracking-wide px-2">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
       
     </div>

   </section>
 )
}

export default About