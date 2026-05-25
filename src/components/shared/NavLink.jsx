import clsx from 'classnames'
import { scrollToSection } from '@/utils/scrollTo'
import { useUIStore } from '@/store/uiStore'

export function NavLink({ section }) {
  const activeSection = useUIStore((state) => state.activeSection)
  const closeNav = useUIStore((state) => state.closeNav)

  console.log(`activeSection="${activeSection}"`)
  const handleClick = (event) => {
    event.preventDefault()
    scrollToSection(section.id)
    closeNav()
  }

  const isActive = activeSection === section.id

  return (
    <a
      href={`#${section.id}`}
      onClick={handleClick}
      className={clsx(
        'relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200',
        isActive
          ? 'bg-accent/10 text-text shadow-sm dark:text-white'
          : 'text-muted hover:text-text dark:text-muted dark:hover:text-white',
      )}
    >
      <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-accent" hidden={!isActive} />
      {section.label}
    </a>
  )
}
