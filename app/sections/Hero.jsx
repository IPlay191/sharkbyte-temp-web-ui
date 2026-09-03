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
    // BUG FIX: Reverted the observer to target 'hero' so it matches the Navbar's router
    const track = document.getElementById('hero')
    const content = document.getElementById('hero-content')

    if (!track || !content) return undefined
    
    const updateTransition = () => {
      // Mathematical boundaries mapped perfectly to the artificial scroll track
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
        endScale: 1.8, // Limits scale to 1.8 to prevent an extreme fly-by effect
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
    <section id='hero' className="w-full h-[200vh] relative">
      {/* 
        RESTORED ID: Changed back to 'hero'.
        The Navbar uses document.getElementById('hero') to calculate where to auto-scroll.
      */}

      {/* 
        ARTIFICIAL SCROLL TRACK: 
        Using 'h-[200vh]' provides an extra 100% of viewport height to scroll through.
        This extends the transition duration, solving the "easily skippable" issue 
        without relying on artificial delays or scroll locking.
      */}

      {/* 
        STICKY CONTAINER: 
        Pins the visual content to the screen while scrolling through the 200vh track.
        Once the track finishes, this container unpins and scrolls away naturally.
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

        {/* 
          CONTACT US WIDGET
          Using 'absolute' binds this widget to the sticky hero container. 
          This ensures it stays visible during the Hero section, but fades and scrolls away 
          perfectly with the rest of the content when moving to the next page.
        */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col items-center justify-center p-4 text-center text-white retro-box pixel-shadow sm:bottom-6 sm:left-auto sm:right-6 sm:w-[18rem] sm:p-5">
          <p className="text-sm font-bold sm:text-base tablet:text-lg">
            Have Questions? Contact Us!
          </p>
          {/* 
            INTERACTIVE EMAIL LINK:
            Opens the default email client with a pre-filled subject line. 
            Hover effects apply a neon drop-shadow, underline, and color brighten to clearly indicate interactivity.
            'inline-block' prevents the drop-shadow from clipping at the element's edges.
          */}
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