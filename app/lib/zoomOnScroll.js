'use client'

export function zoomOnScroll({
  page,
  startAt,
  endAt,
  startScale,
  endScale,
  easing = 'easeOutCubic',
}) {
  // GUARD CLAUSE: Ensures safe execution only when the target DOM node exists.
  if (!page) return { progress: 0, scale: startScale }
  
  // ANIMATION BOUNDARIES: Defines the physical scroll distance over which the zoom occurs.
  const range = endAt - startAt
  const current = window.scrollY
  const resetZone = window.innerHeight * 0.5 // Distance allocated to smoothly reset the scale after the animation ends.
  
  let scale = startScale
  let translateY = 0
  let easedProgress = 0
  
  // STATE 1: Pre-Animation (User is above the trigger point)
  if (current < startAt) {
    scale = startScale
    easedProgress = 0
  } 
  // STATE 2: Active Animation (User is actively scrolling through the target zone)
  else if (current <= endAt) {
    const rawProgress = range === 0 ? 0 : (current - startAt) / range
    easedProgress = Math.min(1, Math.max(0, rawProgress))
    
    // Apply easing curve for a premium, non-linear zoom feel.
    const easeFunc =
      easing === 'easeOutCubic'
        ? 1 - (1 - easedProgress) ** 3
        : easedProgress
        
    scale = startScale + (endScale - startScale) * easeFunc
    translateY = Math.round(easeFunc * -(window.innerHeight * 0.15))
  } 
  // STATE 3: Post-Animation / Reset Phase (User has scrolled past the target zone)
  else {
    const distancePastEnd = current - endAt
    const resetProgress = Math.min(1, distancePastEnd / resetZone)
    
    scale = endScale + (startScale - endScale) * resetProgress
    
    // Reverse the easing curve to cleanly retract the translation.
    const easeFunc = 1 - (1 - (1 - resetProgress)) ** 3 
    translateY = Math.round(easeFunc * -(window.innerHeight * 0.15))
    easedProgress = 1 - resetProgress
  }
  
  // DOM PAINT: Centralizes the transform origin to prevent off-axis shifting during scale.
  page.style.transformOrigin = 'center center'
  page.style.transform = `translateY(${translateY}px) scale(${scale.toFixed(3)})`
  page.style.willChange = 'transform'

  return { progress: easedProgress, scale }
}