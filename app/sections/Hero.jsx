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
    // We separate the physical scroll "track" from the visual "content"
    const track = document.getElementById('hero-track')
    const content = document.getElementById('hero-content')

    if (!track || !content) return undefined
    
    const updateTransition = () => {
      // Mathematical boundaries perfectly mapped to the artificial scroll track
      const start = track.offsetTop
      const end = track.offsetTop + track.offsetHeight - window.innerHeight

      fadeOnScroll({
        page: content,
        startAt: start,
        endAt: end,
        startOpacity: 1,
        endOpacity: 0,
      })
      
      zoomOnScroll({
        page: content,
        startAt: start,
        endAt: end,
        startScale: 1,
        endScale: 1.8, // Reduced from 3.0 to prevent an extreme "fly-by" effect
      })
    }
    
    // PERF-OPTIMIZATION: Passive listeners prevent scroll jank by explicitly bypassing preventDefault() checks.
    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    window.addEventListener('resize', updateTransition)
    
    // MEMORY MANAGEMENT: Cleans up listeners on unmount.
    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', updateTransition)
    }
  }, [])

  return (
    <section id='hero-track' className="w-full h-[200vh] relative">
      {/* 
        ARTIFICIAL SCROLL TRACK: 
        Using 'h-[200vh]' gives the user an extra 100% of viewport height to scroll through.
        This physically forces the transition to take longer, solving the "easily skippable" issue 
        without relying on artificial delays or blocking the user's scroll wheel.
      */}

      {/* 
        STICKY CONTAINER: 
        Pins the visual content to the screen while the user scrolls through the 200vh track.
        Once the track finishes, this container unpins and scrolls away naturally into the About page.
      */}
      <div id='hero-content' className="sticky top-0 h-svh w-full hero-bg flex justify-center items-center flex-row max-[700px]:flex-col overflow-hidden will-change-transform">

        <div className='relative flex-column justify-center items-center'>

          {/* ABSOLUTE POSITIONING: Anchors the floating text bubble relative to the main logo. */}
          <div className="flex absolute left-[-3rem] top-[-1rem] desktop:left-[-10rem] -rotate-[15deg] z-9 animate-bounce">
            <Image className="w-[100px] h-auto desktop:w-[200px]"
              src="https://i.ibb.co/Q7tQMWqH/image.png"
              alt="text-bubble for feedback form"
              width={300}
              height={300}
              priority
            />
          </div>

          {/* MAIN LOGO */}
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

          {/* ABSOLUTE POSITIONING: Centers the sub-title directly underneath the main logo graphic. */}
          <div className="font-bold absolute text-nowrap justify-self-center text-white text-[1rem] tablet:text-[1.25rem] laptop:text-[1.5rem] desktop:text-[2.2rem] text-shadow-lg/100 text-shadow-white-900"> 
            Miami Dade College's Signature Hackathon 
          </div>
        
        </div>
        
      </div>
    </section>
  )
}