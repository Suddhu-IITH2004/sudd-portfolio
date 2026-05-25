import { motion } from 'framer-motion'

const MotionLink = motion.a

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="#hero"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-text bg-text font-bold text-surface dark:border-surface"
        whileHover={{
          backgroundColor: [
            'rgba(var(--color-text), 1)',
            'rgba(88, 230, 217, 1)',
            'rgba(251, 191, 36, 1)',
            'rgba(167, 139, 250, 1)',
            'rgba(var(--color-text), 1)',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <span className="text-2xl">SJ</span>
      </MotionLink>
    </div>
  )
}
