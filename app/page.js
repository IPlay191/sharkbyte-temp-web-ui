import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Statistics from './sections/Statistics'
import ComingSoon from './sections/ComingSoon'
import Sponsors from './sections/Sponsors'
import Socials from './sections/Socials'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <ComingSoon />
      <Sponsors />
      <Socials />
    </>
  )
}
