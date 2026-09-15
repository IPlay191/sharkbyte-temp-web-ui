/**
 * MASTER SCROLL CONFIGURATION
 * Serves as the single source of truth for horizontal scrolling physics across the app.
 * Modifying these values will automatically update the GSAP track speed, 
 * Navbar routing math, and Location fade-in triggers simultaneously.
 */

export const SCROLL_CONFIG = {
  MOBILE_FACTOR: 2.0,
  DESKTOP_FACTOR: 1.5,
  BREAKPOINT: 768, 
};

export const getScrollFactor = (windowWidth) => {
  return windowWidth < SCROLL_CONFIG.BREAKPOINT 
    ? SCROLL_CONFIG.MOBILE_FACTOR 
    : SCROLL_CONFIG.DESKTOP_FACTOR;
};