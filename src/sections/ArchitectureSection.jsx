import { SectionShell } from '@/components/shared/SectionShell'

export function ArchitectureSection() {
  return (
    <SectionShell
      id="architecture"
      eyebrow="AI & Cloud"
      title="Architecture showcase"
      description="Upcoming visualization will feature interactive RAG + automation pipeline diagrams rendered with React Three Fiber + GSAP timelines."
    >
      <div className="glass-panel p-4 sm:p-6 md:p-8 text-sm sm:text-base text-slate/80">
        <p>
          Phase 3 will introduce an interactive diagram layering ingestion, vector search, orchestration, and observability. For now, this placeholder ensures routing, layout, and nav anchors are ready.
        </p>
      </div>
    </SectionShell>
  )
}
