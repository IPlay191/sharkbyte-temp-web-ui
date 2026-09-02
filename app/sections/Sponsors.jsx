'use client'

import Image from "next/image"
import { useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'

// --------------------------------------------------------
// 1. DATA ARCHITECTURE WITH TIERS
// Synchronized strictly with the confirmed MLH Master Tracker
// Tier 1: High Cash | Tier 2: Mid Cash/In-Kind/National | Tier 3: Community
// --------------------------------------------------------
const sponsorsRow1 = [
  { href: "https://www.roocapital.com/", src: "https://i.ibb.co/DgTndgYp/roo-capital.png", alt: "roo_capital_logo", tier: 1 },
  { href: "https://www.celsius.com/", src: "https://i.ibb.co/XfVsrq93/Celcius-logo.webp", alt: "celsius_logo", tier: 2 },
  { href: "https://www.lab22c.com/", src: "https://i.ibb.co/4wQ52k3p/lab22c-logo.jpg", alt: "lab22c_logo", tier: 2 },
  { href: "https://www.mdc.edu/entec/", src: "https://i.ibb.co/DfLvZNcc/entec.png", alt: "entec_mdc_logo", tier: 3 },
  { href: "https://www.coralgables.com/", src: "https://i.ibb.co/4qsVqHd/Coral-Gables-Logo.jpg", alt: "coral_gables_logo", tier: 3 },
  { href: "https://knightfoundation.org/", src: "https://i.ibb.co/DfGpRjcY/knight-foundation-logo.jpg", alt: "knight_foundation_logo", tier: 1 },
];

const sponsorsRow2 = [
  { href: "https://www.blackstone.com/", src: "https://i.ibb.co/DH7G9ZmY/blackstone-logo.png", alt: "blackstone_logo", tier: 1 },
  { href: "https://momentum.miami/", src: "https://i.ibb.co/m5s65Wp8/momentum-miami-logo.png", alt: "momentum_miami_logo", tier: 2 },
  { href: "https://www.miamigov.com/", src: "https://i.ibb.co/ksYnj2Sr/city-of-miami-logo.png", alt: "city_of_miami_logo", tier: 2 },
  { href: "https://www.microsoft.com/en-us/", src: "https://i.ibb.co/bRW3gGHy/microsoft.png", alt: "microsoft_logo", tier: 1 },
  { href: "https://www.mdc.edu/magic/", src: "https://i.ibb.co/8CYkRB0/MDC-Magic-Logo.png", alt: "mdc_magic_logo", tier: 3 },
];

// --------------------------------------------------------
// 2. DYNAMIC SPONSOR CARD
// Automatically scales and styles based on the 'tier' prop
// --------------------------------------------------------
const SponsorCard = ({ sponsor }) => {
  
  // Refined styling logic based on importance
  const getTierStyles = (tier) => {
    switch (tier) {
      case 1:
        // TIER 1: The "Billboard"
        // Same height as others, but massively wider. Gold border, tighter padding for bigger logo impact.
        return {
          wrapper: "w-[240px] h-[140px] tablet:w-[300px] tablet:h-[180px] laptop:w-[350px] laptop:h-[200px] border-[#ffd700] border-3 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]",
          inner: "inset-3 tablet:inset-4" // Tighter padding = bigger logo
        };
      case 2:
        // TIER 2: The "Standard Square"
        // Same height, square aspect ratio. Purple border.
        return {
          wrapper: "w-[140px] h-[140px] tablet:w-[180px] tablet:h-[180px] laptop:w-[200px] laptop:h-[200px] border-[#8b5cf6] border-[2px] hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]",
          inner: "inset-4 tablet:inset-6" // Standard padding
        };
      case 3:
      default:
        // TIER 3: The "Compact Square"
        // Same height, square aspect ratio. Gray border, heaviest padding.
        return {
          wrapper: "w-[140px] h-[140px] tablet:w-[180px] tablet:h-[180px] laptop:w-[200px] laptop:h-[200px] border-gray-500 border-[2px] hover:shadow-[0_0_10px_rgba(156,163,175,0.6)] opacity-90 hover:opacity-100",
          inner: "inset-6 tablet:inset-8" // Heavy padding forces the logo to appear smaller inside the same size box
        };
    }
  };

  const styles = getTierStyles(sponsor.tier);

  return (
    <a 
      href={sponsor.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      // Unified height achieved by passing the wrapper styles here
      className={`group relative flex justify-center items-center bg-gray-200 pixel-shadow transition-all duration-300 hover:-translate-y-2 flex-shrink-0 mx-2 overflow-hidden ${styles.wrapper}`}
    >
      {/* The inset padding dictates how large the image can physically render inside the box */}
      <div className={`absolute transition-transform duration-300 group-hover:scale-105 ${styles.inner}`}>
        <Image
          src={sponsor.src}
          alt={sponsor.alt}
          fill
          sizes="(max-width: 700px) 200px, 350px"
          className="object-contain"
        />
      </div>
    </a>
  );
};

// --------------------------------------------------------
// 3. MAIN COMPONENT RENDER
// --------------------------------------------------------
const Sponsors = () => {
  useEffect(() => {
    const sponsors = document.getElementById('sponsors')
    const location = document.getElementById('location')

    if (!sponsors || !location) return undefined

    const updateTransition = () => {
      const locationEnd = location.offsetTop + location.offsetHeight

      fadeOnScroll({
        page: sponsors,
        startAt: locationEnd - window.innerHeight * 0.25,
        endAt: locationEnd + sponsors.offsetHeight * 0.1,
        startOpacity: 0,
        endOpacity: 1,
      })
    }

    updateTransition()
    window.addEventListener('scroll', updateTransition, { passive: true })
    window.addEventListener('resize', updateTransition)

    return () => {
      window.removeEventListener('scroll', updateTransition)
      window.removeEventListener('resize', updateTransition)
    }
  }, [])

  return (
    <section id="sponsors" className="z-9 sponsors-bg w-full min-h-svh flex flex-col justify-center items-center relative overflow-hidden py-10 max-h-svh">
      
      <div className="w-full flex flex-col items-center h-full justify-between max-w-[1400px] mx-auto">
        
        {/* SECTION TITLE */}
        <div className="relative z-10 mt-4 mb-4">
          <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow">
            <h1 className="font-bold text-center text-[30px] laptop:text-[40px] desktop:text-[50px]">
              Our Sponsors & Partners
            </h1>
          </div>
        </div>

        {/* DESKTOP TWO-ROW CAROUSEL */}
        <div className="max-laptop:hidden relative w-full overflow-hidden carousel-mask flex-grow flex flex-col justify-center">
          <div className="flex flex-col gap-6 items-center">
            
            {/* TOP ROW (Scrolls Left) */}
            <div className="marquee overflow-hidden w-full flex items-center">
              <div className="marquee__track marquee__left items-center">
                {/* Tripled array ensures it never runs out of off-screen items */}
                {[...sponsorsRow1, ...sponsorsRow1, ...sponsorsRow1].map((sponsor, i) => (
                  <SponsorCard key={`top-${i}`} sponsor={sponsor} />
                ))}
              </div>
            </div>

            {/* BOTTOM ROW (Scrolls Right) */}
            <div className="marquee overflow-hidden w-full flex items-center">
              <div className="marquee__track marquee__right items-center">
                {[...sponsorsRow2, ...sponsorsRow2, ...sponsorsRow2].map((sponsor, i) => (
                  <SponsorCard key={`bottom-${i}`} sponsor={sponsor} />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE TWO-ROW SCROLL */}
        <div className="min-laptop:hidden relative w-full overflow-x-auto pb-4 carousel-mask flex-grow flex flex-col justify-center">
          <div className="flex flex-col gap-4 items-start w-max px-4">
            <div className="flex items-center">
              {sponsorsRow1.map((sponsor, index) => (
                <SponsorCard key={`mob-top-${index}`} sponsor={sponsor} />
              ))}
            </div>
            <div className="flex items-center">
              {sponsorsRow2.map((sponsor, index) => (
                <SponsorCard key={`mob-bot-${index}`} sponsor={sponsor} />
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE SCROLL INDICATOR */}
        <div className="min-laptop:hidden mt-2 text-white font-bold text-sm text-center drop-shadow-md">
          ← Scroll horizontally →
        </div>
          
        {/* SPONSOR CTA (Command Line Aesthetic) */}
        <div className="relative w-[90%] max-w-[850px] mt-6 mb-4 z-10">
          <div className="retro-box pixel-shadow px-4 py-3 tablet:px-6 bg-gray-950/95">
            <p className="text-left font-mono text-[14px] tablet:text-[18px] laptop:text-[22px] desktop:text-[26px]">
              <span className="text-[#39ff14] mr-2">{">"}</span> 
              Want to sponsor? Execute:{" "}
              <a
                href="mailto:mdc-north@weareinit.org"
                className="text-[#8b5cf6] hover:text-[#a78bfa] hover:underline transition-colors break-all tablet:break-normal"
              >
                mdc-north@weareinit.org
              </a>
              <span className="animate-blink text-[#39ff14] ml-1">_</span>
            </p>
          </div>
        </div>

      </div>

      {/* MARQUEE CSS INJECTIONS */}
      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
        }
        .marquee__track {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee__left {
          animation: marquee-left 35s linear infinite;
        }
        .marquee__right {
          animation: marquee-right 35s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Transforms exactly 1 array length */
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Sponsors