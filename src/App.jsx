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
      <AppLayout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <LeadershipSection />
        <ContactSection />
      </AppLayout>
    </ThemeProvider>
  )
}
