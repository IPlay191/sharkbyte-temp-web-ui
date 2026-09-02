import HorizontalScroll from './components/HorizontalScroll'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Statistics from './sections/Statistics'
import Location from './sections/Location'
import Sponsors from './sections/Sponsors'
import FAQ from './sections/FAQ'
import Socials from './sections/Socials'
import Team from './sections/Team'

// ============================================================================
// MAIN APPLICATION LAYOUT
// ============================================================================
export default function Home() {
  return (
    // overflow-x-clip strictly prevents horizontal scrolling bugs on mobile devices
    <main className="overflow-x-clip bg-gray-950">

      <Navbar />

      {/* --- STANDARD VERTICAL SCROLLING SECTIONS --- */}
      <Hero />
      <About />
      <Statistics />
      <Location />

      {/* --- GSAP STATIC ANCHOR --- */}
      {/* 
        This invisible div solves the "moving target" bug. Because the Sponsors 
        section slides horizontally, targeting it directly with a smooth-scroll 
        breaks the math. By targeting this static anchor instead, the page scrolls 
        perfectly to the top of the horizontal container every time.
      */}
      <div id="sponsors-anchor"></div>

      {/* --- MODULAR GSAP HORIZONTAL SCROLLING --- */}
      {/* 
        The HorizontalScroll wrapper pins the screen and translates vertical 
        mouse wheel movement into horizontal X-axis movement.
      */}
      <HorizontalScroll panels={2}>
        
        {/* 
          SCROLLBAR DEFENSE: 
          Using 'w-[100vw]' causes bugs on Windows because it includes the width of 
          the physical scrollbar, pushing content off-center. 'w-screen max-w-full' 
          forces the browser to safely calculate 100% of the visible space minus the scrollbar.
        */}
        <div className="w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Sponsors />
        </div>
        
        <div className="w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Team />
        </div>
      </HorizontalScroll>

      {/* --- BACK TO VERTICAL SCROLLING SECTIONS --- */}
      <FAQ />
      <Socials />

    </main>
  )
}