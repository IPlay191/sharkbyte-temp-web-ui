import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Statistics from './sections/Statistics'
import Sponsors from './sections/Sponsors'
import Socials from './sections/Socials'
import HorizontalScroll from './components/HorizontalScroll'
import Team from './sections/Team'
import Location from './sections/Location'
import About from './sections/About'
import FAQ from './sections/FAQ'

export default function Home() {
  return (
    <main className="overflow-x-clip bg-gray-950">

      <Navbar />

      {/* --- STANDARD VERTICAL SCROLLING --- */}
      <Hero />
      <About />
      <Statistics />
      <Location />

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