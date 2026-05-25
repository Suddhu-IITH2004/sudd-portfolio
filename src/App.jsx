import { ThemeProvider } from '@/providers/ThemeProvider'
import { AppLayout } from '@/components/layout/AppLayout'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { LeadershipSection } from '@/sections/LeadershipSection'
import { ContactSection } from '@/sections/ContactSection'

export default function App() {
  return (
    <ThemeProvider>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <AppLayout>
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <LeadershipSection />
          <ContactSection />
        </main>
      </AppLayout>
    </ThemeProvider>
  )
}
