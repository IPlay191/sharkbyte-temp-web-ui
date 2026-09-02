export function fadeOnScroll({
  page,
  startAt,
  endAt,
  startOpacity = 1,
  endOpacity = 0,
  easing = 'easeOutCubic',
}) {
  // GUARD CLAUSE: Prevents execution errors if the DOM element unmounts or is missing.
  if (!page) return 0;

  // SCROLL PROGRESSION: Maps the user's absolute scroll position to a 0-1 multiplier within the target range.
  const range = endAt - startAt;
  const current = window.scrollY;
  const rawProgress = range === 0 ? 0 : (current - startAt) / range;
  const progress = Math.min(1, Math.max(0, rawProgress));

  // EASING ENGINE: 'easeOutCubic' creates a natural deceleration curve, softening the visual transition.
  const easedProgress =
    easing === 'easeOutCubic'
      ? 1 - (1 - progress) ** 3
      : progress;

  // OPACITY CALCULATION: Interpolates mathematically between the start and end opacities.
  const opacity = startOpacity + (endOpacity - startOpacity) * easedProgress;

  // DOM PAINT: Directly applies the opacity. 
  // (Note: translateY logic was stripped from this function to prevent CSS collision with zoomOnScroll).
  page.style.opacity = opacity.toFixed(3);
  page.style.willChange = 'opacity, transform';

  return opacity;
}