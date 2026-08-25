'use client'
import { useState } from "react";

// ============================================================================
// 1. DATA ARCHITECTURE: TEAM & COMMUNITY
// ============================================================================
const Team = () => {
  // STATE MANAGEMENT: Controls which content sub-view is actively mounted to the DOM.
  const [showCarousel, setShowCarousel] = useState(true);
  const [showCMembers, setCMembers] = useState(false);

  const teamMembers = [
    { name: "Jimmy Jean Baptiste", role: "Hack Project Manager", image: "https://i.ibb.co/7NvZRmZt/Jimmy-Photo.png", linkedin: "https://www.linkedin.com/in/jimmy-jean-baptiste-01679436a/" },
    { name: "Erick Gonzalez", role: "President of INIT", image: "https://i.ibb.co/B5Xf6bv9/Erick-Headshot.jpg", linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/" },
    { name: "Elias Estrada", role: "Vice President of INIT", image: "https://i.ibb.co/jZHvT0T1/image.png", linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5/" },
    { name: "Dannia Dupotey", role: "Director of Marketing", image: "https://i.ibb.co/5Pkw1tg/image.png", linkedin: "https://www.linkedin.com/in/dannia-dupotey-1169193b5/" },
    { name: "Kathween Vargas", role: "Director of Marketing", image: "https://i.ibb.co/hFH9PFjv/image.png", linkedin: "" },
    { name: "Mikhail Guevara", role: "Marketing", image: "https://i.ibb.co/hR4j6K5L/image.png", linkedin: "https://www.linkedin.com/in/mikhail-guevara-a425a6231/" },
    { name: "Linet Lima", role: "Director of Industry Relations", image: "https://i.ibb.co/F4f6JFct/image.png", linkedin: "https://www.linkedin.com/in/linet-lima-5437a0239/" },
    { name: "Kelvin Rodriguez", role: "Director of Industry Relations", image: "https://i.ibb.co/hRHdfnpb/image.png", linkedin: "https://www.linkedin.com/in/kelvin-rodriguez-a519a0265/" },
    { name: "Richard Canina Miranda", role: "Director of Industry Relations", image: "https://i.ibb.co/CpHkbgh2/image.png", linkedin: "https://www.linkedin.com/in/richardcm-info" },
    { name: "Fritz Bonhomme", role: "Director of Technology", image: "https://i.ibb.co/Ndrnx4V6/image.png", linkedin: "" },
    { name: "Oliver Martinez Fernandez", role: "Director of Technology", image: "https://i.ibb.co/BVSMT9Dm/image.png", linkedin: "https://www.linkedin.com/in/oliver-martinez-9a1ba4340/" }
  ];

  // ORGANIZATIONAL PARTNERS (Non-Monetary Logistics & Promotion)
  const communityPartners = [
    { name: "INIT", logo: "https://i.ibb.co/7N4sWGLq/init-logo.png", website: "https://weareinit.org" },
    { name: "City of Coral Gables", logo: "https://i.ibb.co/8LwsNNcX/image.png", website: "https://www.coralgables.com/department/innovation-and-technology" },
    { name: "MDC Entec", logo: "https://i.ibb.co/ZRGcKBQz/image.png", website: "https://www.mdc.edu/entec/" }, 
    { name: "MDC Magic Lab", logo: "https://i.ibb.co/hRjk6hwb/image.png", website: "https://magic.mdc.edu/" }
  ];

  const facultyAdvisors = [
    { name: "Carmen Bucher" },
    { name: "George Gabb" }
  ];

  // ARRAY SPLITTING: Pre-calculates the median index to divide the single roster 
  // array into two separate rows, enabling the opposing scroll directions.
  const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));

// ============================================================================
// 2. COMPONENT ARCHITECTURE
// ============================================================================
  const TeamCard = ({ member }) => (
    <a 
      href={member.linkedin || '#'} target={member.linkedin ? "_blank" : "_self"} rel="noopener noreferrer"
      // HEIGHT CLAMP: min-h-[clamp(...)] maps physical boundaries to viewport height (vh).
      // This guarantees the card remains mathematically consistent, preventing jagged "bouncing" 
      // in the carousel track regardless of how the text wraps inside.
      className="my-1 flex flex-col justify-start items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-3 laptop:p-4 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:animate-[wiggle_2s_ease-in-out_infinite] hover:scale-105 cursor-pointer flex-shrink-0 w-40 sm:w-52 lg:w-60 min-h-[clamp(160px,25vh,220px)] lg:min-h-[clamp(200px,30vh,280px)]"
    >
      <div className="flex flex-col items-center w-full h-full">
        {/* object-cover ensures standard headshots fill the circle beautifully without stretching */}
        <img src={member.image} alt={member.name} className="w-[clamp(4rem,10vh,6rem)] h-[clamp(4rem,10vh,6rem)] lg:w-[clamp(5rem,14vh,8rem)] lg:h-[clamp(5rem,14vh,8rem)] rounded-full mb-3 border-2 border-gray-600 object-cover" />
        
        {/* line-clamp-1 forces names to stay on a single horizontal line, truncating with '...' if needed */}
        <h3 className="font-bold tracking-wide text-xs sm:text-base lg:text-lg leading-tight line-clamp-1 w-full">{member.name}</h3>
        
        <div className="flex-grow flex items-start justify-center mt-1 w-full">
          {/* line-clamp-2 grants long titles (e.g. Director of Industry Relations) permission to wrap to a safe second line */}
          <p className="text-gray-400 text-[10px] sm:text-sm lg:text-sm line-clamp-2 leading-snug">{member.role}</p>
        </div>
      </div>
    </a>
  );

  const CommunityPartnerCard = ({ member }) => (
    <a 
      href={member.website || '#'} target={member.website ? "_blank" : "_self"} rel="noopener noreferrer"
      className="flex flex-col justify-start items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-4 border-2 border-gray-600 pixel-shadow text-center transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] aspect-square mx-auto min-h-[clamp(160px,25vh,220px)] lg:min-h-[clamp(200px,30vh,280px)]"
    >
      {/* object-contain protects external logos by scaling them to fit entirely inside the circle without cropping */}
      <img src={member.logo} alt={member.name} className="w-[clamp(4rem,10vh,6rem)] h-[clamp(4rem,10vh,6rem)] lg:w-[clamp(5rem,14vh,8rem)] lg:h-[clamp(5rem,14vh,8rem)] rounded-full mb-3 border-2 border-gray-600 p-2 bg-gray-900 object-contain" />
      <div className="flex-grow flex items-start justify-center w-full">
        <h3 className="font-bold tracking-wide text-xs sm:text-sm lg:text-base line-clamp-2">{member.name}</h3>
      </div>
    </a>
  );

  const FacultyAdvisorCard = ({ member }) => (
    <div className="flex justify-center items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white p-6 border-2 border-gray-600 pixel-shadow text-center w-full max-w-[280px] aspect-[4/3] mx-auto">
      <h3 className="font-bold tracking-wide text-lg sm:text-2xl lg:text-3xl">{member.name}</h3>
    </div>
  );

// ============================================================================
// 3. LAYOUT: MAIN TEAM VIEW
// ============================================================================
  return (
    <section id="team" className="isolate z-0 w-full h-full flex flex-col justify-start items-center relative overflow-hidden team-bg py-[4vh] px-4">
      
      {/* 
        ANCHOR LOGIC: 'justify-start' forces the layout to construct from the top-down. 
        This is a critical defense that prevents the Navigation Buttons from being 
        pushed off the top of the screen on devices with short logical heights. 
      */}
      <div className="w-full flex flex-col items-center justify-start h-full max-w-[1400px] mx-auto">

        {/* TOP ANCHOR: Interactive Navigation Tab */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 z-10 max-w-full mt-[2vh] mb-[2vh] laptop:mb-[4vh]">
          {/* Active state styling applies conditionally depending on which boolean is true */}
          <button
            onClick={() => { setShowCarousel(true); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-3 border-gray-600 pixel-shadow ${showCarousel ? 'bg-violet-950 text-white' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white hover:bg-violet-950'}`}
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center">Our Team</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(true); }}
            className={`hover:cursor-pointer transition-colors px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-3 border-gray-600 pixel-shadow ${!showCarousel && showCMembers ? 'bg-violet-950 text-white' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white hover:bg-violet-950'}`}
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center">Community Partners</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-3 border-gray-600 pixel-shadow ${!showCarousel && !showCMembers ? 'bg-violet-950 text-white' : 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white hover:bg-violet-950'}`}
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center">Faculty Advisors</h2>
          </button>
        </div>

        {/* DYNAMIC CONTENT WRAPPER */}
        {/* flex-grow naturally absorbs the exact remaining viewport height, suspending the active view directly in the middle of the screen. */}
        <div className="flex-grow flex flex-col justify-center w-full">
          
          {/* STATIC GRID: Community Partners */}
          {!showCarousel && showCMembers && (
            <div className="w-full max-w-5xl max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-2 sm:border-3 border-gray-600 pixel-shadow items-center mx-auto"> 
              {communityPartners.map((member, index) => <CommunityPartnerCard key={index} member={member} />)}
            </div>
          )}

          {/* STATIC GRID: Faculty Advisors */}
          {!showCarousel && !showCMembers && (
            <div className="w-full max-w-4xl max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-10 md:p-12 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-2 sm:border-3 border-gray-600 pixel-shadow items-center justify-items-center mx-auto"> 
              {facultyAdvisors.map((member, index) => <FacultyAdvisorCard key={index} member={member} />)}
            </div>
          )}

          {/* ANIMATED MARQUEE: Team Roster (Desktop) */}
          {showCarousel && (
            <div className="hidden md:flex relative z-10 border-x-4 md:border-x-8 border-x-gray-900 w-full max-w-6xl mx-auto overflow-hidden carousel-mask flex-col justify-center">
              <div className="flex flex-col gap-[3vh] laptop:gap-[5vh] py-2">
                <div className="marquee overflow-hidden">
                  <div className="marquee__track marquee__left items-center">
                    {[...firstHalf, ...firstHalf, ...firstHalf].map((member, i) => <TeamCard key={`top-${i}`} member={member} />)}
                  </div>
                </div>

                <div className="marquee overflow-hidden">
                  <div className="marquee__track marquee__right items-center">
                    {[...secondHalf, ...secondHalf, ...secondHalf].map((member, i) => <TeamCard key={`bottom-${i}`} member={member} />)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MANUAL SCROLL: Team Roster (Mobile) */}
          {showCarousel && (
            <div className="md:hidden relative z-10 w-full overflow-x-auto carousel-mask pb-2">
              <div className="flex flex-col gap-[3vh] py-2 w-max px-4">
                <div className="flex gap-4">
                  {firstHalf.map((member, index) => <TeamCard key={`mobile-top-${index}`} member={member} />)}
                </div>
                <div className="flex gap-4">
                  {secondHalf.map((member, index) => <TeamCard key={`mobile-bottom-${index}`} member={member} />)}
                </div>
              </div>
              <div className="text-white font-bold text-sm text-center drop-shadow-md mt-4">
                ← Scroll horizontally →
              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .marquee { position: relative; width: 100%; }
        .marquee__track { display: flex; gap: 1rem; width: max-content; will-change: transform; }
        .marquee__left { animation: marquee-left 35s linear infinite; }
        .marquee__right { animation: marquee-right 35s linear infinite; }
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes marquee-right { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        .marquee:hover .marquee__track { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Team;