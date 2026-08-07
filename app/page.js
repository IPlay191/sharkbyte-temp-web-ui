import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Statistics from './sections/Statistics'
import ComingSoon from './sections/ComingSoon'
import Sponsors from './sections/Sponsors'
import FAQ from './sections/FAQ'
import Socials from './sections/Socials'
import HorizontalScroll from './components/HorizontalScroll'

export default function Home() {
  return (
    <main className="overflow-x-clip bg-gray-950">

      <Navbar />

      {/* --- STANDARD VERTICAL SCROLLING --- */}
      <Hero />
      <Statistics />

      {/* --- MODULAR GSAP HORIZONTAL SCROLLING --- */}
      <HorizontalScroll panels={2}>

        <div className="w-[100vw] h-svh flex-shrink-0">
          
          <ComingSoon />

        </div>

        <div className="w-[100vw] h-svh flex-shrink-0">

          <Sponsors />

        </div>

      </HorizontalScroll>

      {/* --- BACK TO VERTICAL SCROLLING --- */}
      <FAQ />
      <Socials />

    </main>
  )
}