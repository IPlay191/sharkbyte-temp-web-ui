"use client";
import { useEffect, useState } from "react";

// ============================================================================
// [ COMPONENT: CLEAN 2D GLASS CAROUSEL ]
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
    <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[24rem] h-[18rem] tablet:w-[32rem] tablet:h-[24rem] desktop:w-[36rem] desktop:h-[26rem] shrink-0 flex items-center justify-center bg-[#060411] border-2 border-[#1e153b]">
      <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-black shadow-[inset_0_10px_40px_rgba(0,0,0,1)]">
        
        {/* Raw, full-color images with smooth fade transitions */}
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Hackathon Memory"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        
        {/* 2D Glass Reflection (Restored) */}
        <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/10 via-white/5 to-transparent -translate-y-1/2 translate-x-1/4 -rotate-45 pointer-events-none z-20"></div>
        
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

  return (
    <section id="statistics" className="relative w-max h-svh bg-[#020106] bg-center bg-no-repeat">
      <div className="h-full overflow-hidden stats-bg flex items-end">
        <div
          id="train-wrapper"
          className="flex flex-row items-center gap-[4vw] pl-[6vw] w-max h-[95vh] min-h-[450px] max-h-[1200px] z-10 shrink-0"
          style={{
            backgroundImage: `url('https://i.ibb.co/VRWRBSH/Pixel-Train-Second-Half-Page-4.png'), url('https://i.ibb.co/pvLry1fW/Pixel-Train-First-Half-Page-3.png')`,
            backgroundPosition: "left bottom, right bottom",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "50% 100%, 50% 100%",
          }}
        >
          
          {/* ========================================================================= */}
          {/* ARCADE LIGHTBOARD 1: THE PROMPT                                           */}
          {/* ========================================================================= */}
          <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[25rem] desktop:h-[23rem] ml-[15vw] shrink-0 bg-[#060411] border-2 border-[#1e153b]">
            <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-[#030208] shadow-[inset_0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-6">
              
              {/* Subtle Screen Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-10"></div>
              
              {/* [ THE ARCADE TYPOGRAPHY ] 
                  Matches the exact Neon Pink and Yellow from the data box next to it. */}
              <h1 className="font-mono font-bold text-center text-[#ff003c] text-4xl tablet:text-6xl uppercase tracking-widest drop-shadow-[0_0_15px_rgba(255,0,60,0.6)] z-20">
                Last Year
              </h1>
              <h2 className="font-mono font-bold text-center text-yellow-400 text-2xl tablet:text-4xl uppercase tracking-widest drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] z-20 mt-1">
                We Had
              </h2>

              {/* [ RETRO DIRECTIONAL INDICATOR ] 
                  Replaces the terminal cursor. Physically guides the eye to the right. 
                  Matches the Cyan from the "SYS.ATTENDEES" bar. */}
              <div className="mt-6 flex gap-3 z-20">
                <span className="text-[#00f3ff] text-xl tablet:text-2xl animate-pulse drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" style={{ animationDelay: "0ms" }}>►</span>
                <span className="text-[#00f3ff] text-xl tablet:text-2xl animate-pulse drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" style={{ animationDelay: "150ms" }}>►</span>
                <span className="text-[#00f3ff] text-xl tablet:text-2xl animate-pulse drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" style={{ animationDelay: "300ms" }}>►</span>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* TACTICAL HUD 2: DATA READOUT                                                */}
          {/* ========================================================================= */}
          <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[24rem] h-[18rem] tablet:w-[32rem] tablet:h-[24rem] desktop:w-[28rem] desktop:h-[26rem] shrink-0 bg-[#060411] border-2 border-[#1e153b]">
            <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-[#030208] shadow-[inset_0_0_50px_rgba(0,0,0,1)] flex flex-col justify-center gap-6 p-6 tablet:p-8">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-10"></div>
              
              <div className="relative z-20 group">
                <div className="flex justify-between items-end pb-1">
                  <span className="font-mono text-gray-500 text-[11px] tablet:text-[13px] tracking-widest">SYS.ATTENDEES</span>
                  <span className="font-mono font-bold text-[#00f3ff] text-xl tablet:text-3xl drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">200+</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden"><div className="bg-[#00f3ff] h-full w-[85%] shadow-[0_0_8px_rgba(0,243,255,1)]"></div></div>
              </div>

              <div className="relative z-20 group">
                <div className="flex justify-between items-end pb-1">
                  <span className="font-mono text-gray-500 text-[11px] tablet:text-[13px] tracking-widest">SYS.PARTICIPANTS</span>
                  <span className="font-mono font-bold text-[#ff003c] text-xl tablet:text-3xl drop-shadow-[0_0_10px_rgba(255,0,60,0.8)]">130</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden"><div className="bg-[#ff003c] h-full w-[65%] shadow-[0_0_8px_rgba(255,0,60,1)]"></div></div>
              </div>

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
          {/* THE VOID TUNNEL RESTORED                                                  */}
          {/* ========================================================================= */}
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
        @keyframes fadeIn {
          from { opacity: 0.5; filter: contrast(1.5); }
          to { opacity: 1; filter: contrast(1); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Statistics;