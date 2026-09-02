export function fadeOnScroll({
  page,
  startAt,
  endAt,
  startOpacity = 1,
  endOpacity = 0,
  easing = 'easeOutCubic',
}) {
  // Guard clause to ensure the function doesn't run if the page element is not found. This prevents errors in case the element is missing from the DOM.
  if (!page) return 0;

  // Calculating the scroll progress. Measures the range of the animation by using endAt and startAt, then calculates how far the user has scrolled in that range.
  const range = endAt - startAt;
  const current = window.scrollY;
  const rawProgress = range === 0 ? 0 : (current - startAt) / range;
  const progress = Math.min(1, Math.max(0, rawProgress));

  // Easing function for smoother transition. The 'easeOutCubic' easing creates a smooth deceleration effect, making the fade feel more natural.
  const easedProgress =
    easing === 'easeOutCubic'
      ? 1 - (1 - progress) ** 3
      : progress;

  // Calaculatively calculating the current opacity based on the eased progress.
  const opacity = startOpacity + (endOpacity - startOpacity) * easedProgress;
  const translateY = (1 - opacity);

  page.style.opacity = opacity.toFixed(3);
  page.style.transform = `translateY(${translateY}px)`;
  page.style.willChange = 'opacity, transform';

  return opacity;
}