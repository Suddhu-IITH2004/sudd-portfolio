import { SectionShell } from '@/components/shared/SectionShell'

export function GitHubSection() {
  return (
    <SectionShell
      id="github"
      eyebrow="GitHub"
      title="GitHub activity"
      description="Phase 4+ will wire GitHub API metrics and contribution graphs."
    >
      <div className="glass-panel p-4 sm:p-6 md:p-8 text-sm sm:text-base text-slate/80">
        Placeholder analytics: contributions heatmap + repo spotlight will render here once data hooks are implemented.
      </div>
    </SectionShell>
  )
}
