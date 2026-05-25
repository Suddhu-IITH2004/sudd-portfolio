import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Premium modal component for expanded content with glassmorphism styling
 * Features:
 * - Smooth Framer Motion animations
 * - Keyboard accessibility (Escape to close)
 * - Background scroll prevention
 * - Touch-friendly on mobile
 */
export function ReadMoreModal({ isOpen, onClose, title, children, icon: Icon }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-canvas/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-border/20 bg-surface/95 backdrop-blur-xl shadow-2xl"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/10 bg-surface/80 backdrop-blur px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  {Icon && (
                    <div className="flex h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
                    </div>
                  )}
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text truncate">{title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="ml-2 sm:ml-4 flex h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0 items-center justify-center rounded-full border border-border/30 text-muted transition hover:bg-surface hover:text-text"
                  aria-label="Close modal"
                >
                  <X className="h-4 sm:h-5 w-4 sm:w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="prose prose-invert max-w-none prose-sm sm:prose-base"
                >
                  {children}
                </motion.div>
              </div>

              {/* Footer with close hint */}
              <div className="sticky bottom-0 border-t border-border/10 bg-surface/80 backdrop-blur px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-center">
                <p className="text-[10px] sm:text-xs text-muted">Press <kbd className="rounded bg-surface px-1.5 sm:px-2 py-0.5 sm:py-1 font-mono text-[9px] sm:text-[10px]">Esc</kbd> to close</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/**
 * Hook to manage modal state
 */
export function useReadMoreModal() {
  const [isOpen, setIsOpen] = useState(false)
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
  }
}
