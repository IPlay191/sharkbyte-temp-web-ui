'use client'

import { useState, useRef, useEffect } from 'react'
import { fadeOnScroll } from '../lib/fadeOnScroll'
import { getScrollFactor } from '../lib/scrollConfig'

const Location = () => {
  const [activeMap, setActiveMap] = useState(1) 
  const locationRef = useRef(null)

  // ============================================================================
  // [ FLAWLESS TRADITIONAL FADE ENGINE ]
  // ============================================================================
  useEffect(() => {
    const updateTransition = () => {
      const el = locationRef.current;
      const anchor = document.getElementById('horizontal-anchor-1');
      const wrapper = el?.closest('.horizontal-panel');
      
      if (!el || !anchor || !wrapper) return;

      const startScroll = anchor.offsetTop;
      const scrollFactor = getScrollFactor(window.innerWidth);

      const initialX = wrapper.offsetLeft;
      const current = window.scrollY;

      // Enter screen starts when the panel reaches the viewport
      const fadeInStartX = initialX - window.innerWidth;
      const fadeInEndX = initialX;

      // Translate X-Coordinates into actual Y-Scroll triggers
      const fadeInStart = startScroll + (fadeInStartX * scrollFactor);
      const fadeInEnd = startScroll + (fadeInEndX * scrollFactor);

      if (current < fadeInStart) {
        el.style.opacity = 0;
      } else if (current > fadeInEnd) {
        el.style.opacity = 1;
      } else {
        fadeOnScroll({ page: el, startAt: fadeInStart, endAt: fadeInEnd, startOpacity: 0, endOpacity: 1 });
      }
    };

    updateTransition();
    window.addEventListener('scroll', updateTransition, { passive: true });
    window.addEventListener('resize', updateTransition);

    return () => {
      window.removeEventListener('scroll', updateTransition);
      window.removeEventListener('resize', updateTransition);
    };
  }, []);

  const mapOptions = [
    { name: "Google Map", value: 1, url: "https://maps.google.com/maps?q=John+F.+Kennedy+Center,+Kennedy+Dr,+Miami,+FL+33167" },
    { name: "MDC Map", value: 0, url: 'https://clients.mapsindoors.com/miamidadecollege/cd5ee2abc27c4ea8876a331a/search' }
  ]

  const openInNewTab = () => {
    const currentMap = mapOptions.find(map => map.value === activeMap)
    if (currentMap) window.open(currentMap.url, '_blank')
  }

  const renderMapContent = () => {
    const commonIframeProps = {
      style: { border: 0, transform: 'scale(0.9)', transformOrigin: 'top left', width: '111.11%', height: '111.11%' },
      allowFullScreen: true,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    }

    const containerHeight = 'h-[240px] tablet:h-[280px] laptop:h-[330px] xl:h-[380px]'

    const MapFrame = ({ src }) => (
      <div className="relative w-full max-w-[95%] tablet:max-w-[580px] laptop:max-w-[700px] xl:max-w-[800px]">
        <div className="relative overflow-hidden border-[4px] border-gray-800 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-gray-950">
          
          <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-950 to-gray-900 border-b-2 border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
              <span className="text-gray-400 font-mono text-[10px] tablet:text-[12px] tracking-widest uppercase select-none">
                Live Terminal Routing
              </span>
            </div>

            <div className="flex gap-2 z-20">
              <button onClick={openInNewTab} className="w-7 h-7 cursor-pointer bg-gray-800 hover:bg-[#8b5cf6] text-gray-400 hover:text-white rounded flex items-center justify-center transition-colors duration-300" title="Open in new tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </button>
              <button onClick={() => { const iframe = document.querySelector('iframe'); if (iframe && iframe.requestFullscreen) iframe.requestFullscreen(); }} className="w-7 h-7 cursor-pointer bg-gray-800 hover:bg-[#8b5cf6] text-gray-400 hover:text-white rounded flex items-center justify-center transition-colors duration-300" title="Fullscreen">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              </button>
            </div>
          </div>

          <div className={`relative ${containerHeight} bg-gray-950`}>
            <iframe src={src} className="w-full h-full relative z-10" {...commonIframeProps} />
          </div>

        </div>
      </div>
    )

    return activeMap === 0 
      ? <MapFrame src='https://clients.mapsindoors.com/miamidadecollege/cd5ee2abc27c4ea8876a331a/search' />
      : <MapFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.033039379458!2d-80.24827804517018!3d25.879864182976842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0391b7d8ae9%3A0x412412fc3d70a127!2sJohn%20F.%20Kennedy%20Center%2C%20Kennedy%20Dr%2C%20Miami%2C%20FL%2033167!5e0!3m2!1sen!2sus!4v1757597869517!5m2!1sen!2sus" />
  }

  return (
    // [ ECOSYSTEM SHIFT: PART 1 ]
    // Removed `bg-center` class. Injected a dynamic inline style to physically drag the 
    // background image exactly 120px down the screen, pulling the building out from under the Navbar.
    <section 
      ref={locationRef} 
      id="location" 
      className="w-full h-screen flex flex-col justify-start items-center relative overflow-hidden location-bg py-4 max-[1350px]:py-4 max-[650px]:py-4 laptop:pl-10 laptop:pr-6 will-change-[opacity] opacity-0"
      style={{ backgroundPosition: 'center calc(50% + 120px)' }}
    >
      
      {/* 
        [ ECOSYSTEM SHIFT: PART 2 ]
        By wrapping the UI and translating it down by the identical 120px, the 
        relationship between the UI and the pixel art remains perfectly locked.
      */}
      <div className="w-full flex flex-col items-center translate-y-[120px]">

        {/* 1. TITLE EMBLEM: Exact Original Offsets Untouched */}
        <div className="mx-4 mb-4 mt-2 max-[650px]:mt-2 max-[650px]:mb-4 table:self-start laptop:self-start tablet:translate-x-[20px] laptop:translate-x-[150px] xl:translate-x-[190px] -translate-y-10 laptop:-translate-y-[32px]">
          <div className="bg-gray-950/95 border-2 border-gray-700 text-white px-6 py-2.5 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            <h1 className="text-2xl font-bold tablet:text-3xl laptop:text-3xl xl:text-4xl max-[1350px]:text-xl max-[650px]:text-base max-[500px]:text-[22px]">
              SharkByte Ave
            </h1>
          </div>
        </div>

        {/* 2. ADDRESS / DETAILS BLOCK: Exact Original Offsets Untouched */}
        <div className="mx-4 max-[650px]:mx-1 mb-4 text-center py-3.5 px-6 max-[650px]:px-4 max-[500px]:px-3 bg-gray-950/95 border-2 border-gray-700 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] tablet:translate-x-[20px] laptop:translate-x-[170px] xl:translate-x-[210px] -translate-y-10 laptop:-translate-y-[64px]">
          <div className="flex flex-col gap-1 text-gray-300 font-mono text-[12px] mobile:text-[14px] tablet:text-[15px] text-left">
            <p><span className="text-[#8b5cf6] font-bold mr-2">{">"}</span>School of Justice Building</p>
            <p><span className="text-[#8b5cf6] font-bold mr-2">{">"}</span>Miami Dade College, North Campus</p>
            <p className="text-gray-400 mt-2 text-[10px] mobile:text-[12px]">11380 NW 27th Ave, Miami, Florida 33167</p>
          </div>
        </div>

        {/* 3. MAP SELECTION CONTROLS: Exact Original Offsets Untouched */}
        <div className="px-4 max-[650px]:px-0 flex flex-wrap justify-center gap-4 max-[650px]:gap-2 mb-4 tablet:translate-x-[20px] laptop:translate-x-[170px] xl:translate-x-[210px] -translate-y-10 laptop:-translate-y-[64px]">
          {mapOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setActiveMap(option.value)}
              className={`px-5 py-2 rounded-md font-bold text-sm tablet:text-[15px] tracking-wide transition-all duration-300 border-2 ${
                activeMap === option.value
                  ? 'bg-gray-950 text-white border-[#8b5cf6] shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),0_0_15px_rgba(139,92,246,0.4)] translate-y-[2px]'
                  : 'bg-gray-800 text-gray-400 border-gray-600 hover:border-gray-400 hover:text-white hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* 4. MAP FRAME TERMINAL: Exact Original Offsets Untouched */}
        <div className="flex justify-center w-full px-4 tablet:translate-x-[30px] laptop:translate-x-[180px] xl:translate-x-[220px] -translate-y-10 laptop:-translate-y-[56px]">
          {renderMapContent()}
        </div>

      </div>
    </section>
  )
}

export default Location