'use client'

export function zoomOnScroll({
  page,
  startAt,
  endAt,
  startScale,
  endScale,
  easing = 'easeOutCubic',
}) {
  if (!page) return { progress: 0, scale: startScale }
// Calculate the range of the scroll and the current scroll position. The range is the distance over which the zoom effect will occur, and current is the user's current scroll position.
  const range = endAt - startAt
  const current = window.scrollY
  const resetZone = window.innerHeight * 0.5 // Distance over which to reset scale back to normal
  let scale = startScale
  let translateY = 0
  let easedProgress = 0
// Determine the scale and translateY based on the current scroll position relative to the start and end points of the zoom effect. The easing function is applied to create a smooth transition.
  if (current < startAt) {
    // Before transition starts
    scale = startScale
    easedProgress = 0
  } else if (current <= endAt) {
    // During transition
    const rawProgress = range === 0 ? 0 : (current - startAt) / range
    easedProgress = Math.min(1, Math.max(0, rawProgress))
    const easeFunc =
      easing === 'easeOutCubic'
        ? 1 - (1 - easedProgress) ** 3
        : easedProgress
    scale = startScale + (endScale - startScale) * easeFunc
    translateY = Math.round(easeFunc * -(window.innerHeight * 0.15))
  } else {
    // After transition ends - reset back to normal
    const distancePastEnd = current - endAt
    const resetProgress = Math.min(1, distancePastEnd / resetZone)
    scale = endScale + (startScale - endScale) * resetProgress
    // Calculate translateY during reset phase
    const easeFunc = 1 - (1 - (1 - resetProgress)) ** 3 // Reverse easing
    translateY = Math.round(easeFunc * -(window.innerHeight * 0.15))
    easedProgress = 1 - resetProgress
  }
// Apply the calculated scale and translateY to the page element's style. The transform origin is set to the center of the element to ensure it scales uniformly from the center.
  page.style.transformOrigin = 'center center'
  page.style.transform = `translateY(${translateY}px) scale(${scale.toFixed(3)})`
  page.style.willChange = 'transform'

  return { progress: easedProgress, scale }
}
