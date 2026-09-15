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

      {/* --- TRACK 1: STATISTICS & LOCATION (HORIZONTAL) --- */}
      <div id="horizontal-anchor-1"></div>
      <HorizontalScroll panels={2}>
        
        {/* PANEL 1: STATISTICS (The Train & Tunnel) */}
        {/* [ BUG FIX ]: Added w-max so GSAP scales the track to the massive train length */}
        <div className="horizontal-panel w-max h-svh flex-shrink-0 relative overflow-hidden">
          <Statistics />
        </div>

        {/* PANEL 2: LOCATION */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Location />
        </div>

      </HorizontalScroll>

      {/* --- TRACK 2: SPONSORS & TEAM (HORIZONTAL) --- */}
      <div id="horizontal-anchor-2"></div>
      <HorizontalScroll panels={2}>
        
        {/* PANEL 1: SPONSORS */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Sponsors />
        </div>

        {/* PANEL 2: TEAM */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Team />
        </div>

      </HorizontalScroll>

      {/* --- BACK TO VERTICAL SCROLLING SECTIONS --- */}
      <FAQ />
      <Socials />

    </main>
  )
}