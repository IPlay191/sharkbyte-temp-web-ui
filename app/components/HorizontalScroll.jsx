'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalScroll = ({ children }) => {
  const trackRef = useRef(null);
  const railRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;

    let ctx = gsap.context(() => {
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;
      
      // [ SPEED CALIBRATION ] 
      // Adjusted from 3.0 down to 1.5. This removes the restrictive, muddy feeling 
      // while keeping the scroll smooth and cinematic.
      const scrollFactor = isMobile ? 2 : 1.5; 

      // Allows the rail to natively expand to the size of the giant train
      gsap.set(rail, {
        width: 'max-content',
        display: 'flex',
        height: '100svh',
        flexWrap: 'nowrap',
      });

      gsap.to(rail, {
        x: () => -(rail.scrollWidth - window.innerWidth), 
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          // Dynamically calculates the exact end point based on the physical width of the train + pages
          end: () => `+=${(rail.scrollWidth - window.innerWidth) * scrollFactor}`, 
          scrub: 0.8, // Slightly smoothed scrub for a premium feel
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, trackRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={trackRef} className="relative h-svh overflow-hidden bg-gray-950">
      {/* Added id="horizontal-rail" so child components can reference it for math */}
      <div id="horizontal-rail" ref={railRef} className="flex h-full w-max will-change-transform">
        {children}
      </div>
    </section>
  );
};

export default HorizontalScroll;