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
   <section id="about" className="w-screen h-screen flex flex-col justify-start items-center pt-16 relative overflow-hidden about-bg">
     {/* TITLE */}
     <div className="mb-6 max-[1350px]:mb-4 max-[650px]:mb-2">
       <div className="mt-14 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[1350px]:px-4 max-[1350px]:py-2">
         <h1 className="text-[20px] font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">About</h1>
       </div>
     </div>

     {/* CONTENT BLOCK - CENTERED */}
     <div className=" from-gray-950 via-gray-900 to-gray-950 text-white p-6 pixel-shadow max-[1350px]:text-sm max-[650px]:text-xs max-[1350px]:p-4 max-[650px]:p-3 max-w-2xl tablet:max-w-2xl laptop:max-w-2xl mx-4">
       <p className="glow-text glow-text text-[30px] tablet:text-[33px] laptop:text-[33px] leading-relaxed max-[1350px]:leading-normal max-[650px]:leading-tight max-[650px]:text-[23px] mb-2 max-[500px]:text-[21px] max-[500px]:mb-1">
         SharkByte is a weekend-long tech sprint where innovation meets caffeine. Whether you're building your first project or aiming to disrupt the status quo, this is your space to code, create, and connect. Stay tuned for more details!
       </p>
     </div>
   </section>
 )
}

export default About
