"use client";
import { useEffect, useRef, useState } from "react";

// ============================================================================
// [ COMPONENT: TACTICAL HUD WINDOW CAROUSEL ]
// ============================================================================
const TrainWindow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return ( 
    // [ COLOR UPGRADE: MIDNIGHT INDIGO ]
    // Replaced flat gray with a deep, rich cyber-noir background to make the screens pop.
    <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[24rem] h-[18rem] tablet:w-[32rem] tablet:h-[24rem] desktop:w-[36rem] desktop:h-[26rem] shrink-0 flex items-center justify-center bg-[#060411] border-2 border-[#1e153b]">
      
      <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-black shadow-[inset_0_10px_40px_rgba(0,0,0,1)]">
        
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Hackathon Memory"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover grayscale-[40%] contrast-[1.3] brightness-90 animate-crt-flash"
        />
        
        {/* HUD OVERLAYS: Cyan Phosphor Tint & Scanlines */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-10"></div>
        <div className="absolute inset-0 pointer-events-none bg-[#00f3ff]/5 mix-blend-color z-10"></div>

        {/* REC Indicator */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/80 px-2 py-1 rounded-sm border border-[#ff003c]/30">
          <div className="w-2 h-2 bg-[#ff003c] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,0,60,1)]"></div>
          <span className="text-[#ff003c] font-mono text-[10px] tracking-widest uppercase">REC</span>
        </div>

        {/* Data Timecode */}
        <div className="absolute bottom-4 left-4 z-20 bg-black/80 px-2 py-1 border border-[#00f3ff]/30 shadow-lg">
          <span className="text-[#00f3ff] font-mono text-[10px] tracking-widest uppercase">DATABANK_SEQ: {currentIndex + 1}/6</span>
        </div>

        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30"></div>
      </div>
    </div>
  );
};

// ============================================================================
// [ MASTER DOM RENDERER ]
// ============================================================================
const Statistics = () => {
  const windowCar1 = [
    "https://i.ibb.co/5NYNDdY/image.png", "https://i.ibb.co/rRJpc6PT/image.png", "https://i.ibb.co/fzMbkWGC/image.png",
    "https://i.ibb.co/kg784D8H/image.png", "https://i.ibb.co/Cs9ht4jd/image.png", "https://i.ibb.co/RG0f1Cp7/image.png",
  ];

  const windowCar2 = [...windowCar1].reverse();

  const sectionRef = useRef(null);
  const trainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trainRef.current) return;

      const section = sectionRef.current;
      const train = trainRef.current;
      const sectionTop = section.offsetTop;
      const totalScrollableDistance = section.offsetHeight - window.innerHeight;
      const maxHorizontalScroll = train.scrollWidth - window.innerWidth;

      if (totalScrollableDistance <= 0 || maxHorizontalScroll <= 0) return;

      const currentScroll = window.scrollY - sectionTop;
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);

      train.style.transform = `translate3d(-${progress * maxHorizontalScroll}px, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="statistics" className="relative w-full h-[450vh] bg-[#020106] bg-fixed bg-center bg-no-repeat">
      
      <div className="sticky top-0 h-screen overflow-hidden stats-bg bg-fixed flex items-end">
        
        <div
          ref={trainRef}
          id="train-wrapper"
          className="flex flex-row items-center gap-[4vw] pl-[6vw] w-max h-[95vh] min-h-[450px] max-h-[1200px] z-10 shrink-0 will-change-transform"
          style={{
            backgroundImage: `url('https://i.ibb.co/VRWRBSH/Pixel-Train-Second-Half-Page-4.png'), url('https://i.ibb.co/pvLry1fW/Pixel-Train-First-Half-Page-3.png')`,
            backgroundPosition: "left bottom, right bottom",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "50% 100%, 50% 100%",
          }}
        >
          
          {/* ========================================================================= */}
          {/* TACTICAL HUD 1: SYSTEM QUERY                                                */}
          {/* ========================================================================= */}
          <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[25rem] desktop:h-[23rem] ml-[15vw] shrink-0 bg-[#060411] border-2 border-[#1e153b]">
            <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-[#030208] shadow-[inset_0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-6">
              
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-10"></div>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] z-10"></div>

              <span className="text-gray-500 font-mono text-[10px] tablet:text-xs mb-2 tracking-widest uppercase z-20">
                [ System.Query ]
              </span>
              
              <h1 className="font-mono font-bold text-center text-[#00f3ff] text-3xl tablet:text-5xl uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] animate-pulse z-20">
                Last Year
              </h1>

              <div className="mt-4 flex gap-2 z-20">
                <div className="w-3 h-3 bg-[#00f3ff] animate-ping"></div>
                <div className="w-3 h-3 bg-[#00f3ff]/30"></div>
                <div className="w-3 h-3 bg-[#00f3ff]/30"></div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* TACTICAL HUD 2: DATA READOUT                                                */}
          {/* ========================================================================= */}
          <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[24rem] h-[18rem] tablet:w-[32rem] tablet:h-[24rem] desktop:w-[28rem] desktop:h-[26rem] shrink-0 bg-[#060411] border-2 border-[#1e153b]">
            <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-[#030208] shadow-[inset_0_0_50px_rgba(0,0,0,1)] flex flex-col justify-center gap-6 p-6 tablet:p-8">
              
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-10"></div>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] z-10"></div>

              {/* Data Row 1 */}
              <div className="relative z-20 group">
                <div className="flex justify-between items-end pb-1">
                  <span className="font-mono text-gray-500 text-[11px] tablet:text-[13px] tracking-widest">SYS.ATTENDEES</span>
                  <span className="font-mono font-bold text-[#00f3ff] text-xl tablet:text-3xl drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">200+</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden"><div className="bg-[#00f3ff] h-full w-[85%] shadow-[0_0_8px_rgba(0,243,255,1)]"></div></div>
              </div>

              {/* Data Row 2 */}
              <div className="relative z-20 group">
                <div className="flex justify-between items-end pb-1">
                  <span className="font-mono text-gray-500 text-[11px] tablet:text-[13px] tracking-widest">SYS.PARTICIPANTS</span>
                  <span className="font-mono font-bold text-[#ff003c] text-xl tablet:text-3xl drop-shadow-[0_0_10px_rgba(255,0,60,0.8)]">130</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden"><div className="bg-[#ff003c] h-full w-[65%] shadow-[0_0_8px_rgba(255,0,60,1)]"></div></div>
              </div>

              {/* Data Row 3 */}
              <div className="relative z-20 group">
                <div className="flex justify-between items-end pb-1">
                  <span className="font-mono text-gray-500 text-[11px] tablet:text-[13px] tracking-widest">SYS.PROJECTS</span>
                  <span className="font-mono font-bold text-yellow-400 text-xl tablet:text-3xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">52</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden"><div className="bg-yellow-400 h-full w-[25%] shadow-[0_0_8px_rgba(250,204,21,1)]"></div></div>
              </div>

            </div>
          </div>

          <TrainWindow images={windowCar1} interval={3500} />
          <TrainWindow images={windowCar2} interval={4000} />

          {/* ========================================================================= */}
          {/* THE SCENE TRANSITION: THE ABYSSAL TUNNEL                                  */}
          {/* ========================================================================= */}
          {/* 
            [ CAMERA BOUNDS FIX ]
            Expanded from 100vw to 200vw. The first half is a smooth entry gradient. 
            The second half acts as a clamped camera zone where the terminal text is 
            physically locked dead-center in the screen, eliminating the bleed glitch.
          */}
          <div className="w-[200vw] h-full flex flex-row relative z-20">
            {/* The Gradient Entry */}
            <div className="w-[100vw] h-full bg-gradient-to-r from-transparent via-[#030208] via-60% to-[#030208]"></div>
            
            {/* The Clamped Terminal Zone */}
            <div className="w-[100vw] h-full bg-[#030208] flex flex-col justify-center items-center">
              <div className="flex flex-col items-center justify-center p-8 tablet:p-12 bg-[#060411]/80 border-2 border-[#1e153b] shadow-[0_0_50px_rgba(0,0,0,0.9)] rounded-xl backdrop-blur-md -translate-x-[50vw]">
                
                <h2 className="text-[#00f3ff] font-mono font-bold text-xl tablet:text-3xl laptop:text-5xl animate-pulse tracking-widest drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] text-center">
                  &gt;&gt; ROUTING TO: SHARKBYTE AVE &lt;&lt;
                </h2>
                
                <p className="text-gray-400 font-mono mt-4 tablet:mt-6 text-xs tablet:text-sm laptop:text-lg tracking-widest uppercase text-center">
                  Prepare for Disembarkation
                </p>
                
                <div className="mt-6 tablet:mt-8 flex gap-3">
                  <div className="w-5 h-1.5 bg-[#00f3ff] animate-pulse shadow-[0_0_8px_rgba(0,243,255,0.8)]"></div>
                  <div className="w-5 h-1.5 bg-[#00f3ff] animate-pulse shadow-[0_0_8px_rgba(0,243,255,0.8)]" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-5 h-1.5 bg-[#00f3ff] animate-pulse shadow-[0_0_8px_rgba(0,243,255,0.8)]" style={{ animationDelay: "300ms" }}></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes crtFlash {
          0% { opacity: 0; filter: brightness(3) sepia(1) hue-rotate(180deg); }
          10% { opacity: 1; filter: brightness(1) sepia(0) hue-rotate(0deg); }
          15% { opacity: 0.8; filter: contrast(1.5) grayscale(0.5); }
          100% { opacity: 1; filter: contrast(1.3) grayscale(0.4); }
        }
        .animate-crt-flash { 
          animation: crtFlash 0.8s ease-out forwards; 
        }
      `}</style>
    </section>
  );
};

export default Statistics;