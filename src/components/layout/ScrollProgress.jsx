import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-neon via-accent to-accentSoft transition-[width] duration-200"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
