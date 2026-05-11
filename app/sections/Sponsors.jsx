'use client'

import Image from "next/image"

const Sponsors = () => {
  const sponsors = [
    {
      href: "https://www.mdc.edu/north/",
      src: "https://i.ibb.co/1fsDggVX/mdc-north.png",
      alt: "mdc_north_logo",
      className: "max-[1050px]:w-[120px] max-[700px]:w-[100px]"
    },
    {
      href: "https://www.mdc.edu/entec/",
      src: "https://i.ibb.co/DfLvZNcc/entec.png",
      alt: "entec_mdc_logo",
      height: 90,
      width: 180,
      className: "w-[180px] max-[1050px]:w-[120px] max-[700px]:w-[100px]"
    },
    {
      href: "https://www.roocapital.com/",
      src: "https://i.ibb.co/DgTndgYp/roo-capital.png",
      alt: "roo_capital_logo",
      height: 170,
      width: 180,
      className: "w-[180px] px-1 max-[1050px]:w-[140px] max-[1050px]:h-[120px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    /* {
      href: "https://www.perplexity.ai/",
      src: "https://res.cloudinary.com/dqo1uzz0i/image/upload/v1760653896/Perplexity_AI_logo.svg_tljxnl.png",
      height: 170,
      width: 180,
      alt: "perplexity_logo",
      className: "max-[1050px]:w-[120px] max-[700px]:w-[100px] px-1"
    }, */
    {
      href: "https://www.microsoft.com/en-us/",
      src: "https://i.ibb.co/bRW3gGHy/microsoft.png",
      height: 160,
      width: 180,
      alt: "microsoft_logo",
      className: "max-[1050px]:w-[120px] max-[700px]:w-[110px] px-1"
    },
    {
      href: "https://www.purebuttons.com/",
      src: "https://i.ibb.co/x42zDFb/pure-buttons.png",
      alt: "pure_buttons_logo",
      height: 90,
      width: 180,
      className: "w-[180px] max-[1050px]:w-[120px] max-[700px]:w-[110px]"
    },
    {
      href: "https://4geeks.com/",
      src: "https://i.ibb.co/BHd04wnq/4geeks.png",
      alt: "4_geeks_academy_logo",
      height: 90,
      width: 180,
      className: "w-[180px] max-[1050px]:w-[120px] max-[700px]:w-[110px]"
    },
    {
      href: "https://cybriant.com/",
      src: "https://i.ibb.co/rRgFM5vj/cybriant.png",
      alt: "cybriant_logo",
      height: 170,
      width: 170,
      className: "w-[180px] max-[1050px]:w-[160px] max-[1050px]:h-[150px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    {
      href: "https://miamitechworks.org/",
      src: "/svgs/miami_tech_works.svg",
      alt: "miami_tech_works_logo",
      height: 170,
      width: 180,
      className: "w-[180px] px-1 max-[1050px]:w-[140px] max-[1050px]:h-[120px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    {
      href: "https://www.redbull.com/",
      src: "/svgs/redbull.svg",
      alt: "redbull_logo",
      height: 170,
      width: 180,
      className: "w-[180px] px-1 max-[1050px]:w-[140px] max-[1050px]:h-[120px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    },
    {
      href: "https://www.reactmiami.com/",
      src: "https://i.ibb.co/vCMCRTrc/react-miami.webp",
      alt: "react_miami_logo",
      height: 160,
      width: 170,
      className: "w-[180px] px-1 max-[1050px]:w-[140px] max-[1050px]:h-[120px] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:hover:scale-100"
    }
  ];

  // Split sponsors into two rows (5 and 5)
  const firstRow = sponsors.slice(0, 5);
  const secondRow = sponsors.slice(5);

  const SponsorCard = ({ sponsor }) => (
    <a 
      href={sponsor.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="my-0.5 flex justify-center items-center transition-transform duration-300 hover:scale-105 border-3 border-gray-600 pixel-shadow bg-gradient-to-br from-white to-gray-300 py-1.5 min-h-[180px] min-w-[180px] max-[1350px]:min-w-[160px] max-[1350px]:min-h-[160px] max-[1050px]:min-w-[140px] max-[1050px]:min-h-[140px] max-[850px]:min-w-[120px] max-[850px]:min-h-[120px] max-[750px]:min-w-[110px] max-[750px]:min-h-[110px] max-[700px]:min-w-[100px] max-[700px]:min-h-[100px] max-[700px]:py-1 flex-shrink-0"
    >
      <div  className = {`flex justify-center items-center ${sponsor.className || 'w-[130px]'}`}>
        <Image
          src={sponsor.src}
          height={sponsor.height || 130}
          width={sponsor.width || 130}
          alt={sponsor.alt}
          sizes="(max-width: 700px) 100px, (max-width: 1050px) 120px, 180px"
          className="object-contain"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </a>
  );

  return (
    <section id="sponsors" className=" z-9 sponsors-bg w-screen min-h-screen flex flex-col justify-center items-center relative overflow-hidden max-[850px]:py-4 max-[750px]:py-3 max-[650px]:py-2 max-h-screen overflow-y-auto">
      <div className="w-full flex flex-col items-center">
        {/* TITLE */}
        <div className="mb-3 max-[850px]:mb-2 max-[750px]:mb-1.5 max-[650px]:mb-1 relative">
          <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-4 py-2 border-3 border-gray-600 pixel-shadow max-[850px]:px-3 max-[850px]:py-1.5 max-[650px]:px-3 max-[650px]:py-1">
            <h1 className="font-bold text-center text-[30px] laptop:text-[40px] desktop:text-[50px]">Sponsored By</h1>
          </div>
        </div>

        {/* DESKTOP TWO-ROW CAROUSEL */}
        <div className="max-laptop:hidden relative border-x-8 border-x-gray-900 max-[850px]:border-x-6 max-[750px]:border-x-4 min-desktop:w-full max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col gap-0.5">
            {/* TOP ROW */}
            <div className="marquee overflow-hidden">
              <div className="marquee__track marquee__left">
                {[...firstRow, ...firstRow].map((sponsor, i) => <SponsorCard key={`top-${i}`} sponsor={sponsor} />)}
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="marquee overflow-hidden">
              <div className="marquee__track marquee__right">
                {[...secondRow, ...secondRow].map((sponsor, i) => <SponsorCard key={`bottom-${i}`} sponsor={sponsor} />)}
              </div>
            </div>
          </div>
        </div>

      {/* MOBILE TWO-ROW SCROLL */}
      <div className="min-laptop:hidden relative w-full overflow-x-auto pb-1">
        <div className="flex flex-col gap-1.5">
          {/* Top row - First 5 sponsors */}
          <div className="flex gap-1.5 px-3" style={{ width: 'max-content' }}>
            {sponsors.slice(0, 5).map((sponsor, index) => (
              <SponsorCard key={`top-${index}`} sponsor={sponsor} />
            ))}
          </div>
          {/* Bottom row - Last 5 sponsors */}
          <div className="flex gap-1.5 px-3" style={{ width: 'max-content' }}>
            {sponsors.slice(5).map((sponsor, index) => (
              <SponsorCard key={`bottom-${index}`} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE SCROLL INDICATOR */}
      <div className="min-laptop:hidden mt-2 max-[500px]:mt-1 text-white font-bold text-sm text-center max-[650px]:text-xs max-[500px]:text-[22px]">
        ← Scroll horizontally →
      </div>
        
      {/* SPONSOR CTA */}
      <div className="relative w-[400px] laptop:w-[700px] desktop:w-[850px] mt-3 max-[850px]:mt-2 max-[750px]:mt-1.5 max-[650px]:mt-1">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-3 py-2.5 border-3 border-gray-600 pixel-shadow max-[850px]:py-2 max-[650px]:px-2 max-[650px]:py-1.5">
          <p className="text-center text-[20px] laptop:text-[20px] desktop:text-[30px]">
            Want to sponsor? Email us at{" "}
            <a
              href="mailto:mdc-north@weareinit.org"
              className="text-[#8b5cf6] hover:underline whitespace-nowrap"
            >
              mdc-north@weareinit.org
            </a>
          </p>
        </div>
      </div>

      {/* CSS for carousel animations */}
      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          gap: 0.375rem;
          width: max-content;
          will-change: transform;
        }

        @media (max-width: 850px) {
          .marquee__track {
            gap: 0.25rem;
          }
        }

        /* Left direction (continuous) */
        .marquee__left {
          animation: marquee-left 30s linear infinite;
        }

        /* Right direction (continuous) */
        .marquee__right {
          animation: marquee-right 30s linear infinite;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Pause on hover */
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }

        /* Handle very small viewport heights */
        @media (max-height: 700px) {
          #sponsors {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }

        @media (max-height: 600px) {
          #sponsors {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
      </div>
    </section>
  )
}

export default Sponsors