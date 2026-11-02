'use client';

import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getScrollFactor } from '../lib/scrollConfig';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// [ SSR HYDRATION FIX ]
// useLayoutEffect is not safe during server rendering in Next.js.
// We use an isomorphic version so the browser still gets the layout-phase effect,
// while SSR skips it entirely to avoid hydration warnings.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const HorizontalScroll = ({ children }) => {
  const trackRef = useRef(null);
  const railRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;

    const ctx = gsap.context(() => {
      // [ SPEED CALIBRATION IMPORTED ]
      // Retrieves the single source of truth from the scroll physics configuration.
      const scrollFactor = getScrollFactor(window.innerWidth);

      // Allows the rail to expand to the full width of the enormous horizontal track.
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
          // Dynamically calculates the exact end point based on the physical width of the train + pages.
          end: () => `+=${(rail.scrollWidth - window.innerWidth) * scrollFactor}`,
          scrub: 0.8,
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