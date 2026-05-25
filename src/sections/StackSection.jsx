import { SectionShell } from '@/components/shared/SectionShell'

const stack = ['AWS', 'OpenSearch', 'Power Automate', 'React', 'Python', 'Lambda', 'Serverless', 'API integrations']

export function StackSection() {
  return (
    <SectionShell
      id="stack"
      eyebrow="Tech Stack"
      title="Tooling & platforms"
      description="Particle-based visualization will arrive in Phase 3. For now, tags communicate breadth."
    >
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/80">
            {item}
          </span>
        ))}
      </div>
    </SectionShell>
  )
}
