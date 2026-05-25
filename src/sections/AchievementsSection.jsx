import { SectionShell } from '@/components/shared/SectionShell'

const achievements = [
  'AWS Certified Solutions Architect',
  'Microsoft Power Platform Architect',
  'Internal innovation awards for AI chatbot + automation platform',
]

export function AchievementsSection() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Achievements"
      title="Certifications & recognition"
      description="Will evolve into animated badges, counters, and partner testimonials during Phase 3."
    >
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {achievements.map((item) => (
          <div key={item} className="glass-panel p-4 sm:p-5 text-sm sm:text-base text-slate/80">
            {item}
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
