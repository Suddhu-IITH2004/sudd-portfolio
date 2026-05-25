import { SectionShell } from '@/components/shared/SectionShell'

export function AutomationSection() {
  return (
    <SectionShell
      id="automation"
      eyebrow="Automation"
      title="Automation systems showcase"
      description="Dedicated section for Power Automate, approval workflows, and enterprise-scale governance patterns."
    >
      <div className="glass-panel p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 text-sm sm:text-base text-slate/80">
        <p>
          Timeline: Phase 3 will stitch live metrics, animated flow diagrams, and governance callouts. Current build secures the slot within the information architecture.
        </p>
        <p>
          Expect interactive toggles for DLP, connectors, and telemetry once data bindings are wired.
        </p>
      </div>
    </SectionShell>
  )
}
