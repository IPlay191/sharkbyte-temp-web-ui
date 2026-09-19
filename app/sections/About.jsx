'use client'

import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

const About = () => {
  // ============================================================================
  // [ SCROLL ANIMATION ENGINE ]
  // ============================================================================
  useEffect(() => {
    const about = document.getElementById('about')

    // Guard clause prevents execution errors if component unmounts during routing
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

    // Passive listener improves browser scrolling performance by bypassing main thread
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateTransition)
    }
  }, [])

  return (
   <section id="about" className="w-full h-svh flex justify-center items-center relative overflow-hidden about-bg px-4">
     
     {/* 
        [ OPTICAL ALIGNMENT CALIBRATION ] 
        - Y-Axis: Kept the downward shift (-translate-y-2 to -4) to drop the text lower into the frame.
        - X-Axis: Reverted to the tighter original values (translate-x-2 to 5) to prevent right-side drifting.
        - max-w-[780px]: Maintains the slight width bump to accommodate the larger typography scale without breaking line wraps.
     */}
     <div className="w-[90%] max-w-[780px] flex justify-center items-center -translate-y-2 tablet:-translate-y-4 laptop:-translate-y-4 desktop:-translate-y-4 translate-x-2 tablet:translate-x-3 laptop:translate-x-4 desktop:translate-x-5 z-10">
       
       {/* 
          [ VISUAL DESIGN: THE FAULTY NEON TUBE ]
          - Removed the hover state completely to ensure the diegetic illusion is never broken. The text behaves like a physical object in the world.
          - TYPOGRAPHY: Retains the micro-increment bump (1-2px) across all breakpoints for a slightly heavier visual presence.
       */}
       <p className="font-bold text-center text-[19px] mobile:text-[21px] tablet:text-[26px] laptop:text-[30px] desktop:text-[34px] leading-relaxed tracking-wide text-red-500 animate-faulty-neon cursor-default px-2">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
       
     </div>

     {/* 
        [ CSS ENGINE: NEON PHYSICS ] 
        Creates a randomized opacity and drop-shadow sequence to simulate electrical flickering.
        Drops to 40% opacity randomly, then snaps back to an aggressive glowing text-shadow.
     */}
     <style jsx>{`
       @keyframes faulty-neon {
         0%, 2%, 4%, 8%, 33%, 35%, 37%, 39%, 100% { 
           opacity: 1; 
           text-shadow: 0 0 5px rgba(239,68,68,0.5), 0 0 15px rgba(239,68,68,0.7), 0 0 30px rgba(185,28,28,0.9); 
         }
         3%, 5%, 34%, 36% { 
           opacity: 0.4; 
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