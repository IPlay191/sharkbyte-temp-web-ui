'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { zoomOnScroll } from '../lib/zoomOnScroll'

export default function Hero() {
  useEffect(() => {
    const hero = document.getElementById('hero')
    const about = document.getElementById('about')

    // GUARD CLAUSE: Ensures the scroll-listener logic does not execute if the target DOM nodes are unmounted or missing.
    if (!hero || !about) return undefined
    
    // ANIMATION CONFIGURATION: fadeOnScroll dictates the opacity transition between the Hero and About sections.
    const updateTransition = () => {
      fadeOnScroll({
        page: hero,
        startAt: hero.offsetTop,
        endAt: about.offsetTop,
        startOpacity: 1,
        endOpacity: 0,
      })
      
      // ZOOM CONFIGURATION: zoomOnScroll creates the parallax depth effect. Scale values determine the intensity of the zoom.
      zoomOnScroll({
        page: hero,
        startAt: hero.offsetTop - window.innerHeight * 0.001,
        endAt: about.offsetTop - window.innerHeight * 0.00001,
        startScale: 1,
        endScale: 3.0,
      })
    }
    
    // PERFORMANCE OPTIMIZATION: Passive event listeners prevent scroll jank by explicitly bypassing preventDefault() checks.
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    window.addEventListener('resize', updateTransition)
    
    // LIFECYCLE MANAGEMENT: Cleans up event listeners on component unmount to prevent memory leaks and ghost calculations.
    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', updateTransition)
    }
  }, [])

  return (
    <section id='hero' className="h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col relative overflow-hidden">

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

        <div className="z-2 ">

          <Image
            src="/svgs/logo.svg"
            alt="SharkByte Logo"
            width={100}
            height={100}
            priority
            className="w-[300px] h-[300px] tablet:w-[350px] tablet:h-[350px] laptop:w-[400px] laptop:w-[400px] desktop:w-full desktop:h-full"
          />

        </div>

        <div className=" font-bold absolute text-nowrap justify-self-center text-white text-[1rem] tablet:text-[1.25rem] laptop:text-[1.5rem] desktop:text-[2.2rem] text-shadow-lg/100 text-shadow-white-900 "> Miami Dade College's Signature Hackathon </div>
      
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-20 flex flex-col items-center justify-center p-4 text-center text-white retro-box pixel-shadow sm:bottom-6 sm:left-auto sm:right-6 sm:w-[18rem] sm:p-5">

        <p className="text-sm font-bold sm:text-base tablet:text-lg">
            Have Questions? Contact Us!
        </p>

        <a className="mt-2 break-all text-sm text-purple-400 tablet:text-base">
          Mdc-north@weareinit.org
        </a>

      </div>
      
    </section>
  )
}