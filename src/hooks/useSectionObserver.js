import { useEffect, useRef } from 'react'
import { useUIStore } from '@/store/uiStore'

export function useSectionObserver(sectionId, options = {}) {
  const ref = useRef(null)
  const setActiveSection = useUIStore((state) => state.setActiveSection)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId)
        }
      },
      {
        threshold: options.threshold ?? 0.35,
        rootMargin: options.rootMargin ?? '-20% 0px -40% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [sectionId, options.threshold, options.rootMargin, setActiveSection])

  return ref
}
