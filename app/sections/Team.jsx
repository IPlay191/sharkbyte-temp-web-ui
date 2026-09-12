'use client'
import { useState } from "react";

// ============================================================================
// [ DATA ARCHITECTURE: THE ROSTER ENGINE ]
// ============================================================================
const Team = () => {
  // --------------------------------------------------------------------------
  // 1. STATE MANAGEMENT (View Controllers)
  // --------------------------------------------------------------------------
  // We use React's useState hook to strictly control the DOM rendering lifecycle.
  // Instead of navigating to entirely new web pages, we mount and unmount specific 
  // grid layouts in real-time. This guarantees zero-latency tab switching.
  const [showCarousel, setShowCarousel] = useState(true);
  const [showCMembers, setCMembers] = useState(false);

  // --------------------------------------------------------------------------
  // 2. PRIMARY DATASETS (Schema Definitions)
  // --------------------------------------------------------------------------
  // TEAM ROSTER: Contains the primary student/organizer profiles.
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

  // COMMUNITY PARTNERS: Non-monetary organizational backers. 
  // Schema strictly requires 'logo' and 'website' keys to map to the Component render logic.
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
  // 3. ARRAY BISECTION ALGORITHM (Marquee Preparation)
  // --------------------------------------------------------------------------
  // To create the opposing left/right scroll effect on the desktop marquee, we must 
  // mathematically divide the single array into a top track and a bottom track. 
  // Math.ceil() acts as a failsafe: if the array length is an odd number (e.g., 11), 
  // it forces the extra card into the top row to prevent rendering errors.
  const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
  const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));


// ============================================================================
// [ COMPONENT ARCHITECTURE: THE "SMOKED GLASS" UI ENGINE ]
// ============================================================================

  // --------------------------------------------------------------------------
  // COMPONENT 1: The Team Roster Card
  // --------------------------------------------------------------------------
  const TeamCard = ({ member }) => (
    <a 
      href={member.linkedin || '#'} 
      target={member.linkedin ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      /* 
        [ CSS BOX MODEL & PHYSICS ]
        - The Context Fix (relative z-0 hover:z-50): This solves the stacking bug. By default, 
          all cards sit at z-index 0. When hovered, the specific card promotes itself to z-50. 
          This grants the card permission to mathematically overlap its neighbors.
        - The Tactile Lift (hover:-translate-y-2): Reduced from -y-4. This creates a gentle, 
          subtle physical "pop" that keeps the card firmly grounded within its row rather than flying away.
        - The Smoked Glass (bg-gray-900/40 backdrop-blur-sm): Creates translucency, allowing 
          the pixel-art background to bleed through the card.
        - The Dimensions (w-[140px] to laptop:w-[240px]): Aggressively scaled down. The maximum 
          width is strictly locked at 240px on widescreen monitors. This flawlessly synchronizes 
          the visual weight of this section with the Tier 1 / Tier 2 cards on the Sponsors page.
      */
      className="group relative z-0 hover:z-50 flex flex-col justify-start items-center bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl p-3 tablet:p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] cursor-pointer flex-shrink-0 w-[140px] mobile:w-[160px] tablet:w-[200px] laptop:w-[240px] min-h-[180px] tablet:min-h-[220px] laptop:min-h-[260px]"
    >
      <div className="flex flex-col items-center w-full h-full">
        {/* 
          [ AVATAR RENDERING ENGINE ]
          - Scaled down max dimensions (w-28 h-28 = 112px max). This prevents the "Jumbo" effect 
            where avatars were taking over the entire screen on desktop viewports.
          - 'object-cover' forces non-square source images to crop perfectly into the rounded-full border.
          - 'group-hover:border-[#8b5cf6]': Links the border color state of the image to the parent anchor tag.
        */}
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-14 h-14 mobile:w-16 mobile:h-16 tablet:w-20 tablet:h-20 laptop:w-28 laptop:h-28 rounded-full mb-3 tablet:mb-4 border-2 border-gray-500 group-hover:border-[#8b5cf6] transition-colors duration-300 object-cover shadow-lg" 
        />
        
        {/* 
          [ FLUID TYPOGRAPHY ]
          - 'line-clamp-1': A critical layout defender. If a name is too long, the browser automatically 
            truncates it with an ellipsis (...) instead of forcing a line-break that would shatter the grid height.
          - Text size has been proportionately scaled down to match the new card dimensions.
        */}
        <h3 className="font-bold tracking-wide text-[12px] mobile:text-[14px] tablet:text-[16px] laptop:text-[20px] text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight line-clamp-1 w-full">
          {member.name}
        </h3>
        
        <div className="flex-grow flex items-start justify-center mt-1 tablet:mt-2 w-full">
          <p className="text-gray-400 text-[10px] mobile:text-[12px] tablet:text-[13px] laptop:text-[15px] line-clamp-2 leading-snug">
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
      /* 
        [ STRUCTURAL INTEGRITY ]
        - Heights strictly capped (laptop:h-[180px]). By removing minimum dynamic clamps, we eliminate 
          the "Massive Screen Takeover" bug. These now mirror the exact visual volume of Sponsor Tier 2 cards.
      */
      className="group relative z-0 hover:z-50 flex flex-col justify-center items-center bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)] cursor-pointer w-full h-[120px] tablet:h-[160px] laptop:h-[180px]"
    >
      {/* 
        [ LOGO RENDERING ENGINE ]
        - 'object-contain' is strictly enforced. Unlike human headshots, corporate brand logos 
          (like Major League Hacking) cannot be cropped. This CSS property forces the browser to 
          shrink the logo mathematically until the entire graphic fits cleanly inside the bounding box.
      */}
      <div className="w-14 h-14 tablet:w-20 tablet:h-20 laptop:w-24 laptop:h-24 mb-2 tablet:mb-3 relative flex justify-center items-center">
        <img 
          src={member.logo} 
          alt={member.name} 
          className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300" 
        />
      </div>
      
      <div className="flex items-start justify-center w-full">
        <h3 className="font-bold tracking-wide text-[11px] mobile:text-[13px] tablet:text-[16px] laptop:text-[18px] text-gray-400 group-hover:text-white transition-colors duration-300 text-center line-clamp-1">
          {member.name}
        </h3>
      </div>
    </a>
  );

  // --------------------------------------------------------------------------
  // COMPONENT 3: The Faculty Advisor Card
  // --------------------------------------------------------------------------
  const FacultyAdvisorCard = ({ member }) => (
    <div className="group relative z-0 hover:z-50 flex justify-center items-center bg-gray-900/40 backdrop-blur-sm border-2 border-gray-700/50 hover:border-[#8b5cf6] hover:bg-gray-900/80 rounded-xl text-white p-6 text-center w-full max-w-[350px] h-[120px] tablet:h-[160px] mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.5)]">
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
      
      {/* 
        [ ALIGNMENT ENGINE ]
        'justify-start' forces the DOM to construct from the top-down. 
        This critical constraint prevents the Navigation Buttons from being shoved 
        off the top of the monitor on devices with very short vertical viewports.
      */}
      <div className="w-full flex flex-col items-center justify-start h-full max-w-[1400px] mx-auto">

        {/* ---------------------------------------------------------------------- */}
        {/* INTERACTIVE STATE NAVIGATION TABS */}
        {/* ---------------------------------------------------------------------- */}
        <div className="flex flex-wrap justify-center gap-3 tablet:gap-6 z-10 max-w-full mt-[5vh] mb-[4vh] laptop:mb-[6vh]">
          {/* 
            [ STATE LOGIC ] 
            onClick triggers React state changes. The inline ternary operator (?) evaluates 
            the current state to instantly apply the illuminated violet/neon-purple styling 
            if the tab is actively selected.
          */}
          <button
            onClick={() => { setShowCarousel(true); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${showCarousel ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/80 backdrop-blur-sm text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Our Team</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(true); }}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${!showCarousel && showCMembers ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/80 backdrop-blur-sm text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Community Partners</h2>
          </button>

          <button
            onClick={() => { setShowCarousel(false); setCMembers(false); }}
            className={`hover:cursor-pointer transition-colors px-4 py-2 tablet:px-6 tablet:py-3 border-2 sm:border-3 border-gray-600 rounded-lg shadow-lg ${!showCarousel && !showCMembers ? 'bg-violet-950 text-white border-[#8b5cf6]' : 'bg-gray-950/80 backdrop-blur-sm text-gray-300 hover:bg-gray-900'}`}
          >
            <h2 className="text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-bold text-center">Faculty Advisors</h2>
          </button>
        </div>

        {/* ---------------------------------------------------------------------- */}
        {/* DYNAMIC CONTENT INJECTION MOUNTS */}
        {/* ---------------------------------------------------------------------- */}
        <div className="flex-grow flex flex-col justify-center w-full">
          
          {/* [ VIEW 1: COMMUNITY PARTNERS ] (Static Grid) */}
          {!showCarousel && showCMembers && (
            // [ UI FRAMEWORK ] 
            // The outer container utilizes heavy glassmorphism (bg-gray-950/40 backdrop-blur-md) 
            // to create an ultra-premium transparent chassis that houses the internal cards.
            <div className="custom-retro-scrollbar w-full max-w-[1000px] max-h-[65vh] overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4 tablet:gap-6 p-4 tablet:p-8 bg-gray-950/40 backdrop-blur-md border border-gray-700/50 shadow-2xl items-stretch mx-auto rounded-2xl"> 
              {communityPartners.map((member, index) => <CommunityPartnerCard key={index} member={member} />)}
            </div>
          )}

          {/* [ VIEW 2: FACULTY ADVISORS ] (Static Grid) */}
          {!showCarousel && !showCMembers && (
            <div className="custom-retro-scrollbar w-full max-w-[800px] max-h-[65vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 tablet:gap-6 p-4 tablet:p-8 bg-gray-950/40 backdrop-blur-md border border-gray-700/50 shadow-2xl items-center justify-items-center mx-auto rounded-2xl"> 
              {facultyAdvisors.map((member, index) => <FacultyAdvisorCard key={index} member={member} />)}
            </div>
          )}

          {/* [ VIEW 3: DESKTOP TEAM ROSTER ] (Animated Dual-Direction Marquee) */}
          {showCarousel && (
            /* 
              [ THE INVISIBLE BUFFER FIX ]
              This master wrapper controls the left-to-right fade out mask ('carousel-mask').
              Because it has 'overflow-hidden', we inject massive vertical padding (py-10).
              This artificially expands the physical height of the bounding box. Now, when a 
              TeamCard translates upwards on hover, it safely enters the padding space instead 
              of being cleanly decapitated by the overflow border constraint.
            */
            <div className="hidden md:flex relative z-10 w-full max-w-[1400px] mx-auto overflow-hidden carousel-mask flex-col justify-center py-10">
              <div className="flex flex-col gap-[3vh] laptop:gap-[4vh] px-2">
                
                {/* TOP TRACK: Scans Left */}
                {/* Note: The 'overflow-hidden' class was purged from these child div tracks to prevent micro-clipping. */}
                <div className="marquee">
                  <div className="marquee__track marquee__left items-center">
                    {[...firstHalf, ...firstHalf, ...firstHalf].map((member, i) => <TeamCard key={`top-${i}`} member={member} />)}
                  </div>
                </div>

                {/* BOTTOM TRACK: Scans Right */}
                <div className="marquee">
                  <div className="marquee__track marquee__right items-center">
                    {[...secondHalf, ...secondHalf, ...secondHalf].map((member, i) => <TeamCard key={`bottom-${i}`} member={member} />)}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* [ VIEW 4: MOBILE TEAM ROSTER ] (Manual Touch Scroll) */}
          {/* Disables complex CSS animations on mobile devices to prevent extreme battery drain and scroll jank. */}
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

      {/* 
        =======================================================================
        [ LOCAL CSS ENGINE: ANIMATIONS & SCROLLBAR OVERRIDES ]
        =======================================================================
        '<style jsx>' isolates this CSS specifically to the Team.jsx component, 
        preventing these classes from bleeding out and breaking the rest of the site.
      */}
      <style jsx>{`
        /* [ MARQUEE PHYSICS ] */
        .marquee { position: relative; width: 100%; }
        /* gap: 1.5rem maintains strict physical separation between the translucent cards */
        .marquee__track { display: flex; gap: 1.5rem; width: max-content; will-change: transform; }
        .marquee__left { animation: marquee-left 35s linear infinite; }
        .marquee__right { animation: marquee-right 35s linear infinite; }
        
        /* 
          [ THE INFINITE LOOP ALGORITHM ] 
          Because we triplicated the arrays inside the React map function (e.g. [...firstHalf, ...firstHalf, ...firstHalf]),
          the browser renders 3 identical blocks of data. Translating the track backwards by exactly -33.33% 
          moves the track by exactly the width of ONE array block. Once it hits -33.33%, the animation 
          violently snaps back to 0%. Because block 1 and block 2 look identical, the human eye cannot perceive the snap, 
          resulting in a flawlessly smooth infinite loop.
        */
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes marquee-right { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        
        /* UX Enhancement: Halts the physics engine if the user's mouse enters the track area */
        .marquee:hover .marquee__track { animation-play-state: paused; }

        /* 
          [ WEBKIT SCROLLBAR OVERRIDE ]
          Native browser scrollbars inject a massive, solid-white block that instantly shatters 
          dark-mode immersion. This overrides the WebKit engine to render a sleek, translucent track 
          with an interactive Neon Purple thumb.
        */
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