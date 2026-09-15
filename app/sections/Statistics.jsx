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
        
        {/* Raw, full-color images with smooth transitions */}
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
    // [ PHYSICS COLLISION FIX MAINTAINED ]
    // Internal translate3d logic removed. Switched to 'w-max h-svh'. 
    // GSAP now handles the horizontal panning naturally without breaking the page.
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
          
          <div className="retro-box pixel-shadow p-2 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[25rem] desktop:h-[23rem] ml-[15vw] shrink-0 bg-[#060411] border-2 border-[#1e153b]">
            <div className="relative w-full h-full border-[3px] border-[#0a071a] rounded-sm overflow-hidden bg-[#030208] shadow-[inset_0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-center p-6">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-10"></div>
              <span className="text-gray-500 font-mono text-[10px] tablet:text-xs mb-2 tracking-widest uppercase z-20">[ System.Query ]</span>
              <h1 className="font-mono font-bold text-center text-[#00f3ff] text-3xl tablet:text-5xl uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,243,255,0.6)] animate-pulse z-20">Last Year</h1>
              <div className="mt-4 flex gap-2 z-20">
                <div className="w-3 h-3 bg-[#00f3ff] animate-ping"></div><div className="w-3 h-3 bg-[#00f3ff]/30"></div><div className="w-3 h-3 bg-[#00f3ff]/30"></div>
              </div>
            </div>
          </div>

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
          {/* THE ORIGINAL DIEGETIC TRANSIT TUNNEL RESTORED                             */}
          {/* ========================================================================= */}
          <div className="w-[150vw] h-full flex flex-row relative z-20 overflow-hidden bg-gradient-to-r from-transparent to-[#130727]">
            
            <div className="absolute inset-0 flex justify-around items-center w-full z-10 opacity-70">
                <div className="w-[12vw] h-full bg-[#0d0514] border-l-2 border-[#1f0d36]"></div>
                <div className="w-[12vw] h-full bg-[#0d0514] border-l-2 border-[#1f0d36]"></div>
                <div className="w-[12vw] h-full bg-[#0d0514] border-l-2 border-[#1f0d36]"></div>
                <div className="w-[12vw] h-full bg-[#0d0514] border-l-2 border-[#1f0d36]"></div>
            </div>

            <div className="absolute top-12 left-[50%] -translate-x-1/2 z-30 flex flex-col items-center">
              <div className="flex gap-16 mb-[-2px]">
                <div className="w-4 h-16 bg-gray-800 shadow-lg"></div>
                <div className="w-4 h-16 bg-gray-800 shadow-lg"></div>
              </div>
              <div className="bg-gray-950 border-4 border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.9)] px-10 py-5 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:100%_3px] z-10"></div>
                <h2 className="text-[#39ff14] font-mono font-bold text-2xl tablet:text-4xl animate-pulse tracking-widest drop-shadow-[0_0_15px_rgba(57,255,20,0.8)] z-20 relative">
                  &gt;&gt; ARRIVAL: SHARKBYTE AVE &lt;&lt;
                </h2>
              </div>
            </div>

            <div className="absolute right-0 w-[50vw] h-full bg-gradient-to-r from-transparent to-black/90 z-40"></div>
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