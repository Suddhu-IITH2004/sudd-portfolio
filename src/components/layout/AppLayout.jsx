import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'

export function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-canvas text-text transition-colors dark:text-white">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-hero-noise" />
        <div className="absolute inset-0 bg-grid-overlay bg-[length:80px_80px] sm:bg-[length:100px_100px] md:bg-[length:120px_120px]" />
      </div>
      <div className="mx-auto w-full max-w-5xl px-2 py-4 sm:px-4 md:px-6 overflow-visible">
        <Navbar />
        <main className="mx-auto flex w-full flex-col gap-4 sm:gap-5 md:gap-6 pb-16 sm:pb-20 md:pb-24 pt-4 sm:pt-6 md:pt-8">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
