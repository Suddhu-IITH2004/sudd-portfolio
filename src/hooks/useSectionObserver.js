import { useEffect, useRef } from 'react'
import { useUIStore } from '@/store/uiStore'

export function useSectionObserver(sectionId, options = {}) {
  const ref = useRef(null)
  const setActiveSection = useUIStore((state) => state.setActiveSection)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Simple logic: if any part of the section is visible in the top 70% of viewport
            const rect = entry.boundingClientRect
            const viewportHeight = window.innerHeight
            
            // Activate if section top is in viewport or section covers viewport
            if (rect.top < viewportHeight * 0.5 && rect.bottom > 0) {
              setActiveSection(sectionId)
            }
          }
        })
      },
      {
        threshold: [0, 0.1, 0.3, 0.5],
        rootMargin: '-20% 0px -30% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [sectionId, options.rootMargin, setActiveSection])

  return ref
}
