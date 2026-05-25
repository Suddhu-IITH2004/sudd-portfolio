import { SectionShell } from '@/components/shared/SectionShell'

const checkpoints = [
  { period: '2024—Present', note: 'AI Engineer driving multilingual RAG systems and automation at Otsuka.' },
  { period: '2022—2024', note: 'Cloud Solutions Engineer scaling AWS serverless architectures.' },
  { period: '2019—2022', note: 'Automation Engineer crafting enterprise workflow platforms.' },
]

export function TimelineSection() {
  return (
    <SectionShell
      id="timeline"
      eyebrow="Journey"
      title="Career journey"
      description="Phase 3 will convert this into a GSAP-driven scrolling timeline with metrics per milestone."
    >
      <div className="space-y-4 sm:space-y-6">
        {checkpoints.map((item) => (
          <div key={item.period} className="glass-panel p-4 sm:p-5">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent">{item.period}</p>
            <p className="text-base sm:text-lg text-white mt-1 sm:mt-2">{item.note}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
