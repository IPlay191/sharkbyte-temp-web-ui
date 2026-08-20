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

      {/* --- STANDARD VERTICAL SCROLLING --- */}
      <Hero />
      <About />
      <Statistics />
      <Location />

      {/* --- INVISIBLE STATIC ANCHOR --- */}
      {/* This never moves horizontally, giving GSAP a perfect target to scroll to */}
      <div id="sponsors-anchor"></div>

      {/* --- MODULAR GSAP HORIZONTAL SCROLLING --- */}
      <HorizontalScroll panels={2}>
        <div className="w-[100vw] h-svh flex-shrink-0">
          <Sponsors />
        </div>
        
        <div className="w-[100vw] h-svh flex-shrink-0">
          <Team />
        </div>
      </HorizontalScroll>

      {/* --- BACK TO VERTICAL SCROLLING --- */}
      <FAQ />
      <Socials />

    </main>
  )
}