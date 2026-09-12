'use client'
import { useState } from "react";

// ============================================================================
// 1. DATA ARCHITECTURE: TEAM, COMMUNITY, & FACULTY
// ============================================================================
const Team = () => {
  // STATE MANAGEMENT: Controls which content sub-view is actively mounted to the DOM.
  const [showCarousel, setShowCarousel] = useState(true);
  const [showCMembers, setCMembers] = useState(false);

  const teamMembers = [
    { name: "Jimmy Jean Baptiste", role: "Hack Project Manager", image: "https://i.ibb.co/HDC5L03D/image.png", linkedin: "https://www.linkedin.com/in/jimmy-jean-baptiste-01679436a/" },
    { name: "Erick Gonzalez", role: "President of INIT", image: "https://i.ibb.co/PzTTyGRY/image.png", linkedin: "https://www.linkedin.com/in/erick-gonzalez-888b7a377/" },
    { name: "Elias Estrada", role: "Vice President of INIT", image: "https://i.ibb.co/jZHvT0T1/image.png", linkedin: "https://www.linkedin.com/in/elias-estrada-1445ab2b5/" },
    { name: "Dannia Dupotey", role: "Director of Marketing", image: "https://i.ibb.co/MxQPbXzd/image.png", linkedin: "https://www.linkedin.com/in/dannia-dupotey-1169193b5/" },
    { name: "Kathween Vargas", role: "Director of Marketing", image: "https://i.ibb.co/hFH9PFjv/image.png", linkedin: "https://www.linkedin.com/in/kathween-vargas-villafuerte-6409941aa/" },
    { name: "Mikhail Guevara", role: "Marketing", image: "https://i.ibb.co/hR4j6K5L/image.png", linkedin: "https://www.linkedin.com/in/mikhail-guevara-a425a6231/" },
    { name: "Linet Lima", role: "Director of Industry Relations", image: "https://i.ibb.co/bRmj9dnn/image.png", linkedin: "https://www.linkedin.com/in/linet-lima-5437a0239/" },
    { name: "Kelvin Rodriguez", role: "Director of Industry Relations", image: "https://i.ibb.co/3yv4J59B/image.png", linkedin: "https://www.linkedin.com/in/kelvin-rodriguez-a519a0265/" },
    { name: "Richard Canina Miranda", role: "Director of Industry Relations", image: "https://i.ibb.co/JjxZyh6Q/image.png", linkedin: "https://www.linkedin.com/in/richardcm-info" },
    { name: "Fritz Bonhomme", role: "Director of Technology", image: "https://i.ibb.co/8gsb8gdq/image.png", linkedin: "" },
    { name: "Oliver Martinez Fernandez", role: "Web Development", image: "https://i.ibb.co/LhkWsVTT/image.png", linkedin: "https://www.linkedin.com/in/oliver-martinez-9a1ba4340/" }
  ];

  // ORGANIZATIONAL PARTNERS (Non-Monetary Logistics & Promotion)
  const communityPartners = [
    { name: "INIT", logo: "https://i.ibb.co/jvPsQy3z/init-logo.jpg", website: "https://weareinit.org" },
    { name: "City of Coral Gables", logo: "https://i.ibb.co/8LwsNNcX/image.png", website: "https://www.coralgables.com/department/innovation-and-technology" },
    { name: "MDC Entec", logo: "https://i.ibb.co/ZRGcKBQz/image.png", website: "https://www.mdc.edu/entec/" }, 
    { name: "MDC Magic Lab", logo: "https://i.ibb.co/hRjk6hwb/image.png", website: "https://magic.mdc.edu/" },
    { name: "Major League Hacking", logo: "https://i.ibb.co/39dNcD2q/mlh-logo-white.jpg", website: "https://mlh.io/" },
    { name: "ManaTech", logo: "https://i.ibb.co/F4KzC836/Mana-Tech-logo.png", website: "https://manatech.com/" }
  ];

  const facultyAdvisors = [
    { name: "Carmen Bucher" },
    { name: "George Gabb" }
  ];

  // ARRAY SPLITTING: Pre-calculates the median index to divide the single roster 
  // array into two separate rows, enabling the opposing scroll directions in the marquee.
  const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));

// ============================================================================
// 2. UNIFIED COMPONENT ARCHITECTURE ("SMOKED GLASS" AESTHETIC)
// ============================================================================
// All three card types share the exact same base styling to prevent "Frankenstein UI".
// - bg-gray-900/40 + backdrop-blur-sm: Creates the translucent smoked-glass effect.
// - hover:-translate-y-2 + neon shadow: Creates the interactive arcade-button physics.

  const TeamCard = ({ member }) => (
    <a 
      href={member.linkedin || '#'} target={member.linkedin ? "_blank" : "_self"} rel="noopener noreferrer"
      className="group flex flex-col justify-start items-center bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl p-3 laptop:p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer flex-shrink-0 w-40 sm:w-52 lg:w-72 min-h-[clamp(160px,25vh,220px)] lg:min-h-[clamp(200px,30vh,260px)]"
    >
      <div className="flex flex-col items-center w-full h-full">
        {/* Profile image border ignites neon purple on hover alongside the card border */}
        <img src={member.image} alt={member.name} className="w-[clamp(4rem,10vh,6rem)] h-[clamp(4rem,10vh,6rem)] lg:w-[clamp(6rem,12vh,8rem)] lg:h-[clamp(6rem,12vh,8rem)] rounded-full mb-3 border-2 border-gray-500 group-hover:border-[#8b5cf6] transition-colors duration-300 object-cover" />
        <h3 className="font-bold tracking-wide text-xs sm:text-base lg:text-xl text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight line-clamp-1 w-full">{member.name}</h3>
        <div className="flex-grow flex items-start justify-center mt-1 w-full">
          <p className="text-gray-400 text-[10px] sm:text-sm lg:text-md line-clamp-2 leading-snug">{member.role}</p>
        </div>
      </div>
    </a>
  );

  const CommunityPartnerCard = ({ member }) => (
    <a 
      href={member.website || '#'} target={member.website ? "_blank" : "_self"} rel="noopener noreferrer"
      className="group flex flex-col justify-center items-center bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer w-full h-full min-h-[160px]"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 relative flex justify-center items-center">
        {/* object-contain allows rectangular logos (like MLH) to render perfectly without circular cropping */}
        <img 
          src={member.logo} 
          alt={member.name} 
          className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300" 
        />
      </div>
      <div className="flex items-start justify-center w-full">
        <h3 className="font-bold tracking-wide text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300 text-center line-clamp-2">
          {member.name}
        </h3>
      </div>
    </a>
  );

  const FacultyAdvisorCard = ({ member }) => (
    <div className="group flex justify-center items-center bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl text-white p-6 text-center w-full max-w-[320px] aspect-[4/3] mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
      <h3 className="font-bold tracking-wide text-lg sm:text-2xl lg:text-3xl text-gray-300 group-hover:text-white transition-colors duration-300">{member.name}</h3>
    </div>
  );

// ============================================================================
// 3. LAYOUT: MAIN TEAM VIEW
// ============================================================================
  return (
    <section id="team" className="isolate z-0 w-full h-full flex flex-col justify-start items-center relative overflow-hidden team-bg py-[4vh] px-4">
      
      <div className="w-full flex flex-col items-center justify-start h-full max-w-[1400px] mx-auto">

        {/* TOP ANCHOR: Interactive Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 z-10 max-w-full mt-[5vh] mb-[2vh] laptop:mb-[4vh]">
          <button
            onClick={() => { setShowCarousel(true); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${showCarousel ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/80 backdrop-blur-sm text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center">Our Team</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(true); }}
            className={`hover:cursor-pointer transition-colors px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${!showCarousel && showCMembers ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/80 backdrop-blur-sm text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center">Community Partners</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-3 py-1.5 sm:px-5 sm:py-2 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${!showCarousel && !showCMembers ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/80 backdrop-blur-sm text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-center">Faculty Advisors</h2>
          </button>
        </div>

        {/* DYNAMIC CONTENT WRAPPER */}
        <div className="flex-grow flex flex-col justify-center w-full">
          
          {/* STATIC GRID: Community Partners */}
          {!showCarousel && showCMembers && (
            // ENCLOSURE: The outer container is a highly transparent glass pane (bg-gray-950/40), 
            // allowing the individual frosted-glass cards inside to physically "pop" off the background.
            <div className="custom-retro-scrollbar w-full max-w-5xl max-h-[60vh] overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-gray-950/40 backdrop-blur-md border border-gray-700/50 shadow-2xl items-stretch mx-auto rounded-2xl"> 
              {communityPartners.map((member, index) => <CommunityPartnerCard key={index} member={member} />)}
            </div>
          )}

          {/* STATIC GRID: Faculty Advisors */}
          {!showCarousel && !showCMembers && (
            <div className="custom-retro-scrollbar w-full max-w-4xl max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8 md:p-12 bg-gray-950/40 backdrop-blur-md border border-gray-700/50 shadow-2xl items-center justify-items-center mx-auto rounded-2xl"> 
              {facultyAdvisors.map((member, index) => <FacultyAdvisorCard key={index} member={member} />)}
            </div>
          )}

          {/* ANIMATED MARQUEE: Team Roster (Desktop) */}
          {showCarousel && (
            <div className="hidden md:flex relative z-10 w-full max-w-[1400px] mx-auto overflow-hidden carousel-mask flex-col justify-center">
              <div className="flex flex-col gap-[3vh] laptop:gap-[5vh] py-4 px-2">
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
            <div className="custom-retro-scrollbar md:hidden relative z-10 w-full overflow-x-auto carousel-mask pb-4">
              <div className="flex flex-col gap-[3vh] py-4 w-max px-4">
                <div className="flex gap-4">
                  {firstHalf.map((member, index) => <TeamCard key={`mobile-top-${index}`} member={member} />)}
                </div>
                <div className="flex gap-4">
                  {secondHalf.map((member, index) => <TeamCard key={`mobile-bottom-${index}`} member={member} />)}
                </div>
              </div>
              <div className="text-gray-400 font-bold text-sm text-center drop-shadow-md mt-2">
                ← Scroll horizontally →
              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .marquee { position: relative; width: 100%; }
        /* gap: 1.5rem spaces the translucent cards out perfectly so they don't blend together */
        .marquee__track { display: flex; gap: 1.5rem; width: max-content; will-change: transform; }
        .marquee__left { animation: marquee-left 35s linear infinite; }
        .marquee__right { animation: marquee-right 35s linear infinite; }
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes marquee-right { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        .marquee:hover .marquee__track { animation-play-state: paused; }

        /* CUSTOM RETRO SCROLLBAR: Overrides the jarring white browser default */
        .custom-retro-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-retro-scrollbar::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.4); 
          border-radius: 4px;
        }
        .custom-retro-scrollbar::-webkit-scrollbar-thumb {
          background: #8b5cf6; /* Neon Purple */
          border-radius: 4px;
        }
        .custom-retro-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a78bfa;
        }
      `}</style>
    </section>
  );
};

export default Team;