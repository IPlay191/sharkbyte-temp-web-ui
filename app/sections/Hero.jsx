'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { zoomOnScroll } from '../lib/zoomOnScroll'

export default function Hero() {
  useEffect(() => {
    const hero = document.getElementById('hero')
    const about = document.getElementById('about')

    // Guard clause to ensure the function doesn't run if the page element is not found. This prevents errors in case the element is missing from the DOM.
    if (!hero || !about) return undefined
    // Multiply the startAt to make the animation happen earlier, divide it to make it happen later. Multiply the endAt to make the animation faster, divide it to make the transition slower.
    const updateTransition = () => {
      fadeOnScroll({
        page: hero,
        startAt: hero.offsetTop,
        endAt: about.offsetTop,
        startOpacity: 1,
        endOpacity: 0,
      })
     // Multiply the startAt to make the animation happen earlier, divide it to make it happen later. Multiply the endAt to make the animation faster, divide it to make the transition slower. Change endScale to make the zoom in more or less.
      zoomOnScroll({
        page: hero,
        startAt: hero.offsetTop - window.innerHeight * 0.001,
        endAt: about.offsetTop - window.innerHeight * 0.00001,
        startScale: 1,
        endScale: 3.0,
      })
    }
    
    // Using passive event listeners for scroll to improve performance and prevent potential jank during scrolling.
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    window.addEventListener('resize', updateTransition)
    
    // Clean up event listeners on component unmount to prevent memory leaks and unintended behavior.
    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', updateTransition)
    }
  }, [])

  return (
    <section id='hero' className="h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col relative overflow-hidden">

      {/* Grouping the text-bubble and logo */}
      <div className='relative flex-column justify-center items-center'>

        <div className="flex absolute left-[-3rem] top-[-1rem] desktop:left-[-10rem] -rotate-[15deg] z-9 animate-bounce">

        {/* TEXT-BUBBLE */}
          <Image className="w-[100px] h-auto desktop:w-[200px]"
            src="https://i.ibb.co/Q7tQMWqH/image.png"
            alt="text-bubble for feedback form"
            width={300}
            height={300}
            priority
          />

        </div>

        {/*LOGO*/}
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

        {/* SUB-TITLE */}
        <div className=" font-bold absolute text-nowrap justify-self-center text-white text-[1rem] tablet:text-[1.25rem] laptop:text-[1.5rem] desktop:text-[2rem] text-shadow-lg/100 text-shadow-white-900 "> Miami Dade College's Signature Hackathon </div>
      
      </div>
      
    </section>
  )
}