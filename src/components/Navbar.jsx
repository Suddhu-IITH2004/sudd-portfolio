import { useState, useEffect, useRef } from 'react' // Added missing React hooks
import clsx from 'classnames'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { sections } from '@/data/sections'
import { useUIStore } from '@/store/uiStore'
import { NavLink } from '@/components/shared/NavLink'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { scrollToSection } from '@/utils/scrollTo'

const MotionButton = motion.button

export function Navbar() {
  // 1. Unified State Sources
  const navOpen = useUIStore((state) => state.navOpen)
  const toggleNav = useUIStore((state) => state.toggleNav)
  const closeNav = useUIStore((state) => state.closeNav)
  
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  // 2. Scroll Logic Inside the Component
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 0) return // Skip iOS rubber-banding

      if (currentScrollY < 10) {
        setIsVisible(true)
        lastScrollY.current = currentScrollY
        return
      }

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false)
        closeNav() // Cleanly auto-closes mobile menu using global state
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [closeNav])

  return (
    <header 
      className={clsx(
        // Changes: 
        // - Swapped 'sticky' to 'fixed inset-x-0' so centering works
        // - Added hardware-accelerated transitions
        // - Safely applied the dynamic translate calculation
        "fixed inset-x-0 top-2 sm:top-4 z-40 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-border/20 bg-surface/80 px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-2xl dark:border-white/10 transition-transform duration-300 ease-in-out", 
        !isVisible && "-translate-y-24"
      )}
    >
      <MotionButton
        type="button"
        onClick={() => scrollToSection('hero')}
        className="flex h-11 sm:h-12 w-11 sm:w-12 items-center justify-center rounded-full border-2 border-text bg-text font-bold text-surface dark:border-surface"
        whileHover={{
          backgroundColor: [
            'rgb(var(--color-text))',
            'rgb(88, 230, 217)',
            'rgb(251, 191, 36)',
            'rgb(167, 139, 250)',
            'rgb(88, 230, 217)',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        aria-label="Scroll to top"
      >
        <span className="text-base sm:text-lg font-bold">SJ</span>
      </MotionButton>

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        {/* <ThemeToggle /> */}
        <button
          type="button"
          onClick={toggleNav}
          className="inline-flex h-11 sm:h-11 w-11 sm:w-11 items-center justify-center rounded-full border border-border/30 text-text dark:border-white/20"
          aria-label="Toggle navigation"
        >
          {navOpen ? <X className="h-5 sm:h-5 w-5 sm:w-5" /> : <Menu className="h-5 sm:h-5 w-5 sm:w-5" />}
        </button>
      </div>

      <aside
        className={clsx(
          'fixed inset-x-2 sm:inset-x-4 top-16 sm:top-20 z-40 rounded-[20px] sm:rounded-3xl border border-border/30 bg-surface/95 p-4 sm:p-6 text-center shadow-2xl backdrop-blur-2xl transition-all dark:border-white/10',
          navOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        )}
      >
        <div className="flex flex-col gap-2 sm:gap-3">
          {sections.map((section) => (
            <NavLink key={section.id} section={section} />
          ))}
          <button
            type="button"
            onClick={closeNav}
            className="mt-3 sm:mt-4 py-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted"
            aria-label="Close navigation menu"
          >
            Close
          </button>
        </div>
      </aside>
    </header>
  )
}
