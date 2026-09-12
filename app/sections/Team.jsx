'use client'
import { useState } from "react";

// ============================================================================
// [ DATA ARCHITECTURE: THE ROSTER ENGINE ]
// ============================================================================
const Team = () => {
  // --------------------------------------------------------------------------
  // 1. STATE MANAGEMENT (View Controllers)
  // --------------------------------------------------------------------------
  const [showCarousel, setShowCarousel] = useState(true);
  const [showCMembers, setCMembers] = useState(false);

  // --------------------------------------------------------------------------
  // 2. PRIMARY DATASETS (Schema Definitions)
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // 3. MARQUEE BISECTION ALGORITHM
  // --------------------------------------------------------------------------
  const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));

// ============================================================================
// [ COMPONENT ARCHITECTURE: THE RESPONSIVE UI ENGINE ]
// ============================================================================

  // --------------------------------------------------------------------------
  // COMPONENT 1: The Team Roster Card
  // --------------------------------------------------------------------------
  const TeamCard = ({ member }) => (
    <a 
      href={member.linkedin || '#'} 
      target={member.linkedin ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className="group relative z-0 hover:z-50 flex flex-col justify-start items-center bg-gray-950/95 border-2 border-gray-700/50 hover:border-[#8b5cf6] rounded-xl p-3 tablet:p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] cursor-pointer flex-shrink-0 w-[120px] mobile:w-[140px] tablet:w-[150px] laptop:w-[170px] xl:w-[190px] 2xl:w-[220px] min-h-[160px] mobile:min-h-[180px] tablet:min-h-[190px] laptop:min-h-[210px] xl:min-h-[230px] 2xl:min-h-[250px]"
    >
      <div className="flex flex-col items-center w-full h-full">
        <img 
          src={member.image} 
          alt={member.name} 
          loading="lazy"
          decoding="async"
          className="w-14 h-14 mobile:w-16 mobile:h-16 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full mb-2 tablet:mb-3 border-2 border-gray-500 group-hover:border-[#8b5cf6] transition-colors duration-300 object-cover shadow-lg" 
        />
        
        <h3 className="font-bold tracking-wide text-[11px] mobile:text-[13px] tablet:text-[14px] laptop:text-[15px] xl:text-[17px] 2xl:text-[19px] text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight line-clamp-1 w-full">
          {member.name}
        </h3>
        
        <div className="flex-grow flex items-start justify-center mt-1 tablet:mt-2 w-full">
          <p className="text-gray-400 text-[9px] mobile:text-[11px] tablet:text-[12px] laptop:text-[13px] xl:text-[14px] line-clamp-2 leading-snug">
            {member.role}
          </p>
        </div>
      </div>
    </a>
  );

  // --------------------------------------------------------------------------
  // COMPONENT 2: The Community Partner Card
  // --------------------------------------------------------------------------
  const CommunityPartnerCard = ({ member }) => (
    <a 
      href={member.website || '#'} 
      target={member.website ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className="group relative z-0 hover:z-50 flex flex-col justify-center items-center bg-gray-950/95 border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] cursor-pointer w-full h-[120px] tablet:h-[130px] laptop:h-[140px] xl:h-[160px]"
    >
      <div className="w-14 h-14 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 xl:w-24 xl:h-24 mb-2 relative flex justify-center items-center">
        <img 
          src={member.logo} 
          alt={member.name} 
          loading="lazy"
          className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300" 
        />
      </div>
      
      <div className="flex items-start justify-center w-full">
        <h3 className="font-bold tracking-wide text-[11px] mobile:text-[12px] tablet:text-[13px] laptop:text-[15px] text-gray-400 group-hover:text-white transition-colors duration-300 text-center line-clamp-1">
          {member.name}
        </h3>
      </div>
    </a>
  );

  // --------------------------------------------------------------------------
  // COMPONENT 3: The Faculty Advisor Card
  // --------------------------------------------------------------------------
  const FacultyAdvisorCard = ({ member }) => (
    <div className="group relative z-0 hover:z-50 flex justify-center items-center bg-gray-950/95 border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl text-white p-6 text-center w-full max-w-[350px] h-[100px] tablet:h-[120px] mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)]">
      <h3 className="font-bold tracking-wide text-lg tablet:text-xl laptop:text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
        {member.name}
      </h3>
    </div>
  );

// ============================================================================
// [ MASTER DOM RENDERER ]
// ============================================================================
  return (
    <section id="team" className="isolate z-0 w-full h-full flex flex-col justify-start items-center relative overflow-hidden team-bg py-[4vh] px-4">
      
      <div className="w-full flex flex-col items-center justify-start h-full max-w-[1400px] mx-auto">

        {/* ---------------------------------------------------------------------- */}
        {/* INTERACTIVE STATE NAVIGATION TABS */}
        {/* ---------------------------------------------------------------------- */}
        <div className="flex flex-wrap justify-center gap-3 tablet:gap-6 z-10 max-w-full mt-[5vh] mb-2 tablet:mb-4 laptop:mb-6">
          <button
            onClick={() => { setShowCarousel(true); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${showCarousel ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/95 text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Our Team</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(true); }}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${!showCarousel && showCMembers ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/95 text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Community Partners</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${!showCarousel && !showCMembers ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/95 text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Faculty Advisors</h2>
          </button>
        </div>

        {/* ---------------------------------------------------------------------- */}
        {/* DYNAMIC CONTENT INJECTION MOUNTS */}
        {/* ---------------------------------------------------------------------- */}
        <div className="flex-grow flex flex-col justify-start items-center w-full">
          
          {/* 
            [ VIEW 1: COMMUNITY PARTNERS ] (Static Grid) 
            THE CENTERING FIX: Replaced 'mt-4' with 'my-auto'.
            This dynamic CSS spring calculates the leftover viewport height and 
            pushes equally from the top and bottom, centering the grid perfectly 
            on any monitor size.
          */}
          {!showCarousel && showCMembers && (
            <div className="custom-retro-scrollbar w-full max-w-[1000px] max-h-[65vh] overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4 tablet:gap-6 p-4 tablet:p-8 bg-gray-950/95 border border-gray-700/50 shadow-2xl items-stretch mx-auto rounded-2xl my-auto"> 
              {communityPartners.map((member, index) => <CommunityPartnerCard key={index} member={member} />)}
            </div>
          )}

          {/* 
            [ VIEW 2: FACULTY ADVISORS ] (Static Grid) 
            THE CENTERING FIX: Applies the exact same 'my-auto' spring logic 
            to ensure visual consistency when switching tabs.
          */}
          {!showCarousel && !showCMembers && (
            <div className="custom-retro-scrollbar w-full max-w-[800px] max-h-[65vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 tablet:gap-6 p-4 tablet:p-8 bg-gray-950/95 border border-gray-700/50 shadow-2xl items-center justify-items-center mx-auto rounded-2xl my-auto"> 
              {facultyAdvisors.map((member, index) => <FacultyAdvisorCard key={index} member={member} />)}
            </div>
          )}

          {/* [ VIEW 3: DESKTOP TEAM ROSTER ] (Animated Dual-Direction Marquee) */}
          {showCarousel && (
            <div className="hidden md:flex relative z-10 w-full max-w-[1400px] mx-auto overflow-hidden carousel-mask flex-col justify-center pt-6 pb-12">
              <div className="flex flex-col gap-[3vh] laptop:gap-[4vh] px-2">
                
                <div className="marquee">
                  <div className="marquee__track marquee__left items-center">
                    {[...firstHalf, ...firstHalf, ...firstHalf].map((member, i) => <TeamCard key={`top-${i}`} member={member} />)}
                  </div>
                </div>

                <div className="marquee">
                  <div className="marquee__track marquee__right items-center">
                    {[...secondHalf, ...secondHalf, ...secondHalf].map((member, i) => <TeamCard key={`bottom-${i}`} member={member} />)}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* [ VIEW 4: MOBILE TEAM ROSTER ] (Manual Touch Scroll) */}
          {showCarousel && (
            <div className="custom-retro-scrollbar md:hidden relative z-10 w-full overflow-x-auto carousel-mask pb-6 pt-4">
              <div className="flex flex-col gap-[3vh] w-max px-4">
                <div className="flex gap-4">
                  {firstHalf.map((member, index) => <TeamCard key={`mobile-top-${index}`} member={member} />)}
                </div>
                <div className="flex gap-4">
                  {secondHalf.map((member, index) => <TeamCard key={`mobile-bottom-${index}`} member={member} />)}
                </div>
              </div>
              <div className="text-gray-400 font-bold text-sm text-center drop-shadow-md mt-6 animate-pulse">
                ← Swipe horizontally →
              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .marquee { position: relative; width: 100%; }
        .marquee__track { display: flex; gap: 1.5rem; width: max-content; will-change: transform; transform: translateZ(0); }
        .marquee__left { animation: marquee-left 35s linear infinite; }
        .marquee__right { animation: marquee-right 35s linear infinite; }
        
        @keyframes marquee-left { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-33.33%, 0, 0); } }
        @keyframes marquee-right { 0% { transform: translate3d(-33.33%, 0, 0); } 100% { transform: translate3d(0, 0, 0); } }
        
        .marquee:hover .marquee__track { animation-play-state: paused; }

        .custom-retro-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-retro-scrollbar::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.4); 
          border-radius: 4px;
        }
        .custom-retro-scrollbar::-webkit-scrollbar-thumb {
          background: #8b5cf6; 
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