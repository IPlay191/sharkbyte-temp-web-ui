'use client'

import Image from "next/image"
import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

// ============================================================================
// 1. DATA ARCHITECTURE: OFFICIAL SPONSORS & NATIONAL PARTNERS
// ============================================================================
const sponsorsRow1 = [
  { href: "https://www.roocapital.com/", src: "https://i.ibb.co/DgTndgYp/roo-capital.png", alt: "roo_capital_logo", tier: 1 },
  { href: "https://knightfoundation.org/", src: "https://i.ibb.co/DfGpRjcY/knight-foundation-logo.jpg", alt: "knight_foundation_logo", tier: 1 },
  { href: "https://www.wix.com/", src: "https://i.ibb.co/RWpYv6K/wix-logo.png", alt: "wix_logo", tier: 1 },
  { href: "https://www.celsius.com/", src: "https://i.ibb.co/XfVsrq93/Celcius-logo.webp", alt: "celsius_logo", tier: 2 },
  { href: "https://www.lab22c.com/", src: "https://i.ibb.co/4wQ52k3p/lab22c-logo.jpg", alt: "lab22c_logo", tier: 2 },
  { href: "https://www.milamsmarkets.com/", src: "https://i.ibb.co/C5DbxdhF/milams-market-logo.png", alt: "milams_markets_logo", tier: 3 },
];

const sponsorsRow2 = [
  { href: "https://www.blackstone.com/", src: "https://i.ibb.co/DH7G9ZmY/blackstone-logo.png", alt: "blackstone_logo", tier: 1 },
  { href: "https://www.microsoft.com/en-us/", src: "https://i.ibb.co/bRW3gGHy/microsoft.png", alt: "microsoft_logo", tier: 1 },
  { href: "https://starquix.com/", src: "https://i.ibb.co/5gkw19sf/starquix-logo.jpg", alt: "starquix_logo", tier: 1 },
  { href: "https://momentum.miami/", src: "https://i.ibb.co/m5s65Wp8/momentum-miami-logo.png", alt: "momentum_miami_logo", tier: 2 },
  { href: "https://www.miamigov.com/", src: "https://i.ibb.co/ksYnj2Sr/city-of-miami-logo.png", alt: "city_of_miami_logo", tier: 2 },
];

// ============================================================================
// 2. COMPONENT: DYNAMIC SPONSOR CARD
// ============================================================================
const SponsorCard = ({ sponsor }) => {
  const getTierStyles = (tier) => {
    switch (tier) {
      case 1:
        return { wrapper: "w-[220px] h-[clamp(100px,18vh,140px)] tablet:w-[280px] tablet:h-[clamp(120px,20vh,160px)] laptop:w-[320px] laptop:h-[clamp(140px,25vh,200px)] bg-gradient-to-br from-white via-amber-50 to-amber-100 border-[#ffd700] border-3 shadow-[0_0_18px_rgba(255,215,0,0.5)] hover:shadow-[0_0_35px_rgba(255,215,0,0.9)] z-20", inner: "inset-3 tablet:inset-4" };
      case 2:
        return { wrapper: "w-[120px] h-[clamp(100px,18vh,140px)] tablet:w-[150px] tablet:h-[clamp(120px,20vh,160px)] laptop:w-[180px] laptop:h-[clamp(140px,25vh,200px)] bg-gray-100 border-[#8b5cf6] border-[2px] shadow-[0_0_12px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] z-10", inner: "inset-4 tablet:inset-6" };
      case 3:
      default:
        return { wrapper: "w-[120px] h-[clamp(100px,18vh,140px)] tablet:w-[150px] tablet:h-[clamp(120px,20vh,160px)] laptop:w-[180px] laptop:h-[clamp(140px,25vh,200px)] bg-gray-200 border-gray-500 border-[2px] hover:shadow-[0_0_15px_rgba(156,163,175,0.6)] opacity-90 hover:opacity-100 z-0", inner: "inset-6 tablet:inset-8" };
    }
  };

  const styles = getTierStyles(sponsor.tier);

  return (
    <a href={sponsor.href} target="_blank" rel="noopener noreferrer" className={`group relative flex justify-center items-center pixel-shadow transition-all duration-300 hover:-translate-y-2 flex-shrink-0 overflow-hidden ${styles.wrapper}`}>
      <div className={`absolute transition-transform duration-300 group-hover:scale-105 ${styles.inner}`}>
        <Image src={sponsor.src} alt={sponsor.alt} fill sizes="(max-width: 700px) 200px, 350px" className="object-contain" loading="lazy" />
      </div>
    </a>
  );
};

// ============================================================================
// 3. LAYOUT: MAIN SPONSORS VIEW
// ============================================================================
const Sponsors = () => {
  useEffect(() => {
    const sponsors = document.getElementById('sponsors')
    const location = document.getElementById('location')
    if (!sponsors || !location) return undefined

    const updateTransition = () => {
      fadeOnScroll({ 
        page: sponsors, 
        startAt: location.offsetTop + location.offsetHeight - window.innerHeight * 0.25, 
        endAt: location.offsetTop + location.offsetHeight + sponsors.offsetHeight * 0.1, 
        startOpacity: 0, 
        endOpacity: 1 
      })
    }

    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    return () => window.removeEventListener('scroll', updateTransition)
  }, [])

  return (
    // Purged 'px-4' from the master section. The section must reach the raw edges of the monitor.
    <section id="sponsors" className="isolate z-0 sponsors-bg w-full h-full flex flex-col justify-between items-center relative overflow-hidden py-[4vh]">
      
      {/* 
        [ HEADER DOM BREAKOUT ] 
        Safely constrained to max-w-[1400px] and restored px-4 so the title doesn't hit the screen edges.
      */}
      <div className="w-full max-w-[1400px] mx-auto px-4 mt-[5vh] flex justify-center relative z-10">
        <div className="bg-gray-950/95 text-white px-8 py-3 border-2 border-gray-700 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
          <h1 className="font-bold text-center text-3xl laptop:text-4xl tracking-wider">Our Sponsors</h1>
        </div>
      </div>

      {/* 
        [ THE STADIUM WRAPAROUND: FULL-BLEED EXECUTION ] 
        - max-w-[100vw]: Forces the marquee to span the entire physical width of the monitor.
        - Because it hits the physical edges, the CSS mask-image gradient will fade the cards out 
          naturally into the peripheral darkness, fixing the ghosting effect.
      */}
      <div className="max-laptop:hidden relative w-full max-w-[100vw] overflow-hidden carousel-mask flex-grow flex flex-col justify-center my-[4vh]">
        <div className="flex flex-col gap-[3vh] laptop:gap-[5vh] items-center">
          
          <div className="marquee overflow-hidden w-full flex items-center">
            <div className="marquee__track marquee__left items-center">
              {[...sponsorsRow1, ...sponsorsRow1, ...sponsorsRow1].map((sponsor, i) => <SponsorCard key={`top-${i}`} sponsor={sponsor} />)}
            </div>
          </div>

          <div className="marquee overflow-hidden w-full flex items-center">
            <div className="marquee__track marquee__right items-center">
              {[...sponsorsRow2, ...sponsorsRow2, ...sponsorsRow2].map((sponsor, i) => <SponsorCard key={`bottom-${i}`} sponsor={sponsor} />)}
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE MARQUEE (Full-Bleed for natural swiping) */}
      <div className="min-laptop:hidden relative w-full max-w-[100vw] overflow-x-auto carousel-mask flex-grow flex flex-col justify-center my-[4vh]">
        <div className="flex flex-col gap-[3vh] items-start w-max px-6">
          <div className="flex items-center gap-4">{sponsorsRow1.map((sponsor, index) => <SponsorCard key={`mob-top-${index}`} sponsor={sponsor} />)}</div>
          <div className="flex items-center gap-4">{sponsorsRow2.map((sponsor, index) => <SponsorCard key={`mob-bot-${index}`} sponsor={sponsor} />)}</div>
        </div>
        <div className="text-gray-400 font-bold text-sm text-center drop-shadow-md mt-6 animate-pulse">← Swipe horizontally →</div>
      </div>
        
      {/* 
        [ CYBERPUNK COMMAND PROMPT DOM BREAKOUT ] 
        Constrained safely back to max-w-[1400px].
      */}
      <div className="w-full max-w-[1400px] mx-auto px-4 mb-[4vh] flex justify-center relative z-10 transition-transform duration-300 hover:-translate-y-2">
        <div className="bg-gray-950/95 border-2 border-gray-700 shadow-[0_15px_30px_rgba(0,0,0,0.6)] rounded-lg px-6 py-4 laptop:py-5 w-[90%] max-w-[850px]">
          <p className="text-left font-mono text-[14px] tablet:text-[18px] laptop:text-[24px] text-gray-300">
            <span className="text-[#39ff14] font-bold mr-3 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">{">"}</span> 
            Want to sponsor? Execute:{" "}
            <a 
              href="mailto:industry@weareinit.org?subject=SharkByte%20Sponsorship%20Inquiry"
              className="text-[#8b5cf6] break-all tablet:break-normal hover:text-white hover:drop-shadow-[0_0_12px_rgba(139,92,246,1)] transition-all duration-300 inline-block font-bold"
            >
              industry@weareinit.org
            </a>
            <span className="animate-blink text-[#39ff14] ml-1">_</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        /* 
          [ THE MASK GRADIENT UPGRADE ]
          Increased the gradient boundary from 10% to 15%. This creates a much smoother, 
          more gradual fade into the darkness, enhancing the 3D depth of the cylinder.
        */
        .carousel-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee { position: relative; width: 100%; }
        
        .marquee__track { display: flex; gap: 1.5rem; width: max-content; will-change: transform; transform: translateZ(0); }
        .marquee__left { animation: marquee-left 35s linear infinite; }
        .marquee__right { animation: marquee-right 35s linear infinite; }
        @keyframes marquee-left { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-33.33%, 0, 0); } }
        @keyframes marquee-right { 0% { transform: translate3d(-33.33%, 0, 0); } 100% { transform: translate3d(0, 0, 0); } }
        .marquee:hover .marquee__track { animation-play-state: paused; }
      `}</style>
    </section>
  )
}

export default Sponsors