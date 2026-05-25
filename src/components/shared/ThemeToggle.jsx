import { Moon, Sun } from 'lucide-react'
import clsx from 'classnames'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className={clsx(
        'flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
    >
      {theme === 'dark' ? <Sun className="h-4 sm:h-5 w-4 sm:w-5" /> : <Moon className="h-4 sm:h-5 w-4 sm:w-5" />}
    </button>
  )
}
