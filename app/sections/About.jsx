'use client'

import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

const About = () => {
  useEffect(() => {
    const about = document.getElementById('about')

    if (!about) return undefined

    let ticking = false
    let animationFrameId = null

    const updateTransition = () => {
      fadeOnScroll({
        page: about,
        startAt: about.offsetTop - window.innerHeight * 0.2,
        endAt: about.offsetTop + about.offsetHeight * 0.01,
        startOpacity: 0,
        endOpacity: 1,
      })
    }

    const onScroll = () => {
      if (ticking) return

      ticking = true
      animationFrameId = window.requestAnimationFrame(() => {
        updateTransition()
        ticking = false
      })
    }

    updateTransition()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
   <section id="about" className="w-full h-svh flex justify-center items-center relative overflow-hidden about-bg px-4">
     
     <div className="w-[90%] max-w-[780px] flex justify-center items-center -translate-y-2 tablet:-translate-y-4 laptop:-translate-y-4 desktop:-translate-y-4 translate-x-2 tablet:translate-x-3 laptop:translate-x-4 desktop:translate-x-5 z-10">
       <p className="font-bold text-center text-[19px] mobile:text-[21px] tablet:text-[26px] laptop:text-[30px] desktop:text-[34px] leading-relaxed tracking-wide text-[#9f1239] animate-faulty-neon cursor-default px-2">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
     </div>

   </section>
 )
}

export default About