'use client'

import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

const About = () => {
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
     
     {/* 
        THE FIX: 
        - Strict max-w-[750px] so it never bleeds off the left/right edges of the billboard.
        - Gentle -translate-y-8 to center it vertically within the white space.
     */}
     <div className="w-[90%] max-w-[750px] flex justify-center items-center -translate-y-6 tablet:-translate-y-8 laptop:-translate-y-10">
       
       {/* 
          Restored controlled text sizes relative to your original design.
          Used tracking-wide to help it 'pop' without needing a background box.
       */}
       <p className="glow-text font-bold text-center text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[28px] desktop:text-[32px] leading-relaxed tracking-wide px-2">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
       
     </div>

   </section>
 )
}

export default About