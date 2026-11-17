'use client';

import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getScrollFactor } from '../lib/scrollConfig';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
      const scrollFactor = getScrollFactor(window.innerWidth);

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
      <div id="horizontal-rail" ref={railRef} className="flex h-full w-max will-change-transform">
        {children}
      </div>
    </section>
  );
};

export default HorizontalScroll;