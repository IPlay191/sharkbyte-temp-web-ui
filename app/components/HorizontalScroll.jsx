'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin safely outside the component lifecycle
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalScroll = ({ children, panels = 1 }) => {
  const trackRef = useRef(null);
  const railRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;

    // gsap.context handles all cleanup automatically in modern React
    let ctx = gsap.context(() => {
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;
      
      // Faster scroll speed on mobile
      const scrollFactor = isMobile ? 2 : 1.25; 

      // Set the initial width of the film strip
      gsap.set(rail, {
        width: `${panels * 100}vw`,
        display: 'flex',
        height: '100svh',
        flexWrap: 'nowrap',
      });

      // Create the horizontal scroll tween
      gsap.to(rail, {
        x: () => -(rail.scrollWidth - window.innerWidth), // Move exactly the width of the hidden panels
        ease: 'none',
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: () => `+=${window.innerWidth * scrollFactor * (panels - 1)}`, // Dynamic scroll duration
          scrub: 0.35,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculates perfectly if the user resizes the window
        },
      });
    }, trackRef);

    return () => ctx.revert(); // Instantly kills the animation on unmount to prevent bugs
  }, [panels]);

  return (
    <section ref={trackRef} className="relative h-svh overflow-hidden bg-gray-950">
      
      {/* The Rail containing your slides */}
      <div ref={railRef} className="flex h-full w-max">
        {children}
      </div>
      
    </section>
  );
};

export default HorizontalScroll;