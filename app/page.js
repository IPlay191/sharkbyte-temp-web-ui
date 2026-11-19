import HorizontalScroll from './components/HorizontalScroll'
import Hero from './sections/Hero'
import Statistics from './sections/Statistics'
import Sponsors from './sections/Sponsors'
import Team from './sections/Team'
import Socials from './sections/Socials'

export default function Home() {
  return (
    <main className="overflow-x-clip bg-gray-950">

      {/* --- VERTICAL ENTRY: HERO --- */}
      <Hero />

      {/* --- UNIFIED HORIZONTAL TRACK: STATISTICS -> SPONSORS -> TEAM --- */}
      <div id="horizontal-anchor-1"></div>
      <HorizontalScroll>
        
        {/* PANEL 1: 2026 STATISTICS (The Train & Tunnel) */}
        <div className="horizontal-panel w-max h-svh flex-shrink-0 relative overflow-hidden">
          <Statistics />
        </div>

        {/* PANEL 2: 2026 SPONSORS */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Sponsors />
        </div>

        {/* PANEL 3: 2026 TEAM & PARTNERS */}
        <div className="horizontal-panel w-screen max-w-full h-svh flex-shrink-0 relative overflow-hidden">
          <Team />
        </div>

      </HorizontalScroll>

      {/* --- VERTICAL EXIT: SOCIALS --- */}
      <Socials />

    </main>
  )
}