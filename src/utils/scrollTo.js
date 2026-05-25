export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  element.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}
