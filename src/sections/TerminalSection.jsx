import { SectionShell } from '@/components/shared/SectionShell'

export function TerminalSection() {
  return (
    <SectionShell
      id="terminal"
      eyebrow="Terminal"
      title="AI ops console"
      description="Phase 4 will introduce a terminal-inspired storytelling module for prompts, deploy logs, and observability cues."
    >
      <div className="glass-panel font-mono text-xs sm:text-sm text-accent p-4 sm:p-5 md:p-6 bg-black/40 overflow-x-auto">
        <span className="whitespace-nowrap">$ coming-soon — ai_pipeline status --watch</span>
      </div>
    </SectionShell>
  )
}
