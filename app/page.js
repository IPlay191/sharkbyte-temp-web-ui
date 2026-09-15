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

export default function Home() {
  return (
    <main className="overflow-x-clip bg-gray-950">

      <Navbar />

      {/* --- STANDARD VERTICAL SCROLLING SECTIONS --- */}
      <Hero />
      <About />

      {/* --- GLOBAL GSAP & FADE ANCHOR --- */}
      <div id="horizontal-anchor"></div>

      {/* --- MODULAR GSAP HORIZONTAL SCROLLING --- */}
      {/* Train, Location, and Sponsors are now one seamless horizontal world */}
      <HorizontalScroll>
        
        {/* PANEL 1: STATISTICS (The Train & Tunnel) */}
        <div className="horizontal-panel h-svh flex-shrink-0 relative overflow-hidden">
          <Statistics />
        </div>

        {/* PANEL 2: LOCATION */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Location />
        </div>
        
        {/* PANEL 3: SPONSORS */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Sponsors />
        </div>

      </HorizontalScroll>

      {/* --- BACK TO VERTICAL SCROLLING SECTIONS --- */}
      {/* Team perfectly restores the vertical flow */}
      <Team />
      <FAQ />
      <Socials />

    </main>
  )
}