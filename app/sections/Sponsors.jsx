'use client'

import Image from "next/image"

// --------------------------------------------------------
// 1. DATA ARCHITECTURE WITH TIERS
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
// --------------------------------------------------------
const SponsorCard = ({ sponsor }) => {
  const getTierStyles = (tier) => {
    switch (tier) {
      case 1:
        return {
          wrapper: "w-[240px] h-[140px] tablet:w-[300px] tablet:h-[180px] laptop:w-[350px] laptop:h-[200px] bg-gradient-to-br from-white via-amber-50 to-amber-100 border-[#ffd700] border-3 shadow-[0_0_18px_rgba(255,215,0,0.5)] hover:shadow-[0_0_35px_rgba(255,215,0,0.9)] z-20",
          inner: "inset-3 tablet:inset-4"
        };
      case 2:
        return {
          wrapper: "w-[140px] h-[140px] tablet:w-[180px] tablet:h-[180px] laptop:w-[200px] laptop:h-[200px] bg-gray-100 border-[#8b5cf6] border-[2px] shadow-[0_0_12px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] z-10",
          inner: "inset-4 tablet:inset-6"
        };
      case 3:
      default:
        return {
          wrapper: "w-[140px] h-[140px] tablet:w-[180px] tablet:h-[180px] laptop:w-[200px] laptop:h-[200px] bg-gray-200 border-gray-500 border-[2px] hover:shadow-[0_0_15px_rgba(156,163,175,0.6)] opacity-90 hover:opacity-100 z-0",
          inner: "inset-6 tablet:inset-8"
        };
    }
  };

  const styles = getTierStyles(sponsor.tier);

  return (
    <a 
      href={sponsor.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`group relative flex justify-center items-center pixel-shadow transition-all duration-300 hover:-translate-y-2 flex-shrink-0 mx-2 overflow-hidden ${styles.wrapper}`}
    >
      <div className={`absolute transition-transform duration-300 group-hover:scale-105 ${styles.inner}`}>
        {/* object-contain inherently prevents stretching while keeping it perfectly centered */}
        <Image src={sponsor.src} alt={sponsor.alt} fill sizes="(max-width: 700px) 200px, 350px" className="object-contain" />
      </div>
    </a>
  );
};

// --------------------------------------------------------
// 3. MAIN COMPONENT RENDER
// --------------------------------------------------------
const Sponsors = () => {
  return (
    <section id="sponsors" className="isolate z-0 sponsors-bg w-full h-full flex flex-col justify-center items-center relative overflow-hidden py-6 px-4">
      
      {/* THE FIX: Replaced justify-between with justify-center and gap-10 to prevent elements from crushing into the top/bottom of the screen */}
      <div className="w-full flex flex-col items-center justify-center gap-10 h-full max-w-[1400px] mx-auto">
        
        {/* SECTION TITLE */}
        <div className="relative z-10">
          <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow">
            <h1 className="font-bold text-center text-[30px] laptop:text-[40px] desktop:text-[50px]">
              Our Sponsors & Partners
            </h1>
          </div>
        </div>

        {/* DESKTOP TWO-ROW CAROUSEL */}
        <div className="max-laptop:hidden relative w-full overflow-hidden carousel-mask flex flex-col justify-center">
          {/* THE FIX: Increased gap-6 to gap-12 to ensure the glowing auras do not overlap/bleed into the cards below */}
          <div className="flex flex-col gap-12 items-center">
            
            <div className="marquee overflow-hidden w-full flex items-center">
              <div className="marquee__track marquee__left items-center">
                {[...sponsorsRow1, ...sponsorsRow1, ...sponsorsRow1].map((sponsor, i) => (
                  <SponsorCard key={`top-${i}`} sponsor={sponsor} />
                ))}
              </div>
            </div>

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
        <div className="relative w-[90%] max-w-[850px] z-10">
          <div className="retro-box pixel-shadow px-4 py-3 tablet:px-6 bg-gray-950/95">
            <p className="text-left font-mono text-[14px] tablet:text-[18px] laptop:text-[22px] desktop:text-[26px]">
              <span className="text-[#39ff14] mr-2">{">"}</span> 
              Want to sponsor? Execute:{" "}
              <a href="mailto:industry@weareinit.org" className="text-[#8b5cf6] hover:text-[#a78bfa] hover:underline transition-colors break-all tablet:break-normal">
                industry@weareinit.org
              </a>
              <span className="animate-blink text-[#39ff14] ml-1">_</span>
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .marquee { position: relative; width: 100%; }
        .marquee__track { display: flex; width: max-content; will-change: transform; }
        .marquee__left { animation: marquee-left 35s linear infinite; }
        .marquee__right { animation: marquee-right 35s linear infinite; }
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes marquee-right { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        .marquee:hover .marquee__track { animation-play-state: paused; }
      `}</style>
    </section>
  )
}

export default Sponsors