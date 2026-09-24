'use client'

import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

const About = () => {
  // ============================================================================
  // [ SCROLL ANIMATION ENGINE ]
  // ============================================================================
  useEffect(() => {
    const about = document.getElementById('about')

    if (!about) return undefined

    const updateTransition = () => {
      fadeOnScroll({
        page: about,
        startAt: about.offsetTop - window.innerHeight * 0.2,
        endAt: about.offsetTop + about.offsetHeight * 0.01,
        startOpacity: 0,
        endOpacity: 1,
      })
    }

    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateTransition)
    }
  }, [])

  return (
   <section id="about" className="w-full h-svh flex justify-center items-center relative overflow-hidden about-bg px-4">
     
     <div className="w-[90%] max-w-[780px] flex justify-center items-center -translate-y-2 tablet:-translate-y-4 laptop:-translate-y-4 desktop:-translate-y-4 translate-x-2 tablet:translate-x-3 laptop:translate-x-4 desktop:translate-x-5 z-10">
       
       {/* 
          [ VIBE + ACCESSIBILITY RESTORED ]
          - Explicitly set the text to the highly accessible Deep Crimson (#9f1239).
          - Restored the `animate-faulty-neon` class to bring back the snappy billboard flicker.
       */}
       <p className="font-bold text-center text-[19px] mobile:text-[21px] tablet:text-[26px] laptop:text-[30px] desktop:text-[34px] leading-relaxed tracking-wide text-[#9f1239] animate-faulty-neon cursor-default px-2">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
       
     </div>

     {/* 
        [ CSS ENGINE: ACCESSIBLE NEON PHYSICS ] 
        Re-engineered the faulty-neon keyframes.
        Uses tight, non-smudgy shadows to prevent eye strain and only drops opacity 
        to 0.6 so the text is never rendered illegible during a "glitch" frame.
     */}
     <style jsx>{`
       @keyframes faulty-neon {
         0%, 2%, 4%, 8%, 33%, 35%, 37%, 39%, 100% { 
           opacity: 1; 
           text-shadow: 0 0 2px rgba(159,18,57,0.4), 0 0 6px rgba(159,18,57,0.2); 
         }
         3%, 5%, 34%, 36% { 
           opacity: 0.6; 
           text-shadow: none; 
         }
       }
       .animate-faulty-neon {
         animation: faulty-neon 5s infinite;
       }
     `}</style>
   </section>
 )
}

export default About