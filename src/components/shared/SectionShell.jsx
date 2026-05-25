import clsx from 'classnames'
import { useSectionObserver } from '@/hooks/useSectionObserver'

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  observe = true,
  className,
}) {
  const ref = observe ? useSectionObserver(id) : null

  return (
    <section
      id={id}
      ref={observe ? ref : undefined}
      className={clsx('section-wrapper', 'max-w-6xl', className)}
    >
      <div className="max-w-3xl space-y-2 sm:space-y-3 mb-5 sm:mb-5 md:mb-5">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
        )}
        {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">{title}</h2>}
        {description && (
          <p className="text-sm sm:text-base md:text-lg text-slate max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="section-grid text-left">{children}</div>
    </section>
  )
}
