import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-canvas text-text"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        <motion.div
          className="text-4xl sm:text-5xl font-display tracking-[0.5em] sm:tracking-[0.7em]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          SJ
        </motion.div>
        <div className="w-36 sm:w-48">
          <div className="h-1 sm:h-1.5 w-full overflow-hidden rounded-full bg-muted/30">
            <motion.span
              className="block h-full bg-gradient-to-r from-neon via-accent to-accentSoft"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
            />
          </div>
          <p className="mt-2 sm:mt-3 text-center text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-muted">
            Loading
          </p>
        </div>
      </div>
    </motion.div>
  )
}
