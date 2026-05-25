import { motion } from 'framer-motion'
import { SectionShell } from '@/components/shared/SectionShell'

const capabilityClusters = [
  {
    title: 'AI & RAG Platforms',
    description: 'Grounded retrieval, prompt evaluation, and multilingual experience layers.',
    tooling: ['OpenSearch', 'Bedrock', 'LangChain', 'Claude'],
    impact: '1.2s global latency · 6 languages served',
  },
  {
    title: 'Cloud & Serverless',
    description: 'AWS-native patterns with observability, IaC, and resilience baked in.',
    tooling: ['Lambda', 'Step Functions', 'SQS/SNS', 'CloudFormation'],
    impact: 'Event-driven suites powering incident, supply, and finance ops',
  },
  {
    title: 'Automation Systems',
    description: 'DLP-compliant flows unifying Power Automate, approvals, and custom APIs.',
    tooling: ['Power Automate', 'Power Apps', 'Graph API', 'SharePoint'],
    impact: '400K+ monthly tasks automated with audit trails',
  },
]

const skillMatrix = [
  { label: 'AWS / Serverless', score: 95 },
  { label: 'OpenSearch / Vector IR', score: 92 },
  { label: 'Power Automate & Microsoft 365', score: 94 },
  { label: 'ReactJS / Frontend systems', score: 90 },
  { label: 'Python automation + APIs', score: 88 },
]

export function ExpertiseSection() {
  return (
    <SectionShell
      id="expertise"
      eyebrow="Expertise"
      title="Systems I design, lead, and scale"
      description="From RAG copilots to AWS-native orchestration and Power Automate programs, I shape the architecture, guardrails, and UI polish required for enterprise impact."
    >
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {capabilityClusters.map((cluster) => (
            <motion.article
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="glass-panel space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-lg sm:text-xl text-white">{cluster.title}</h3>
              <p className="text-xs sm:text-sm text-slate/70">{cluster.description}</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-accent">Impact</p>
              <p className="text-xs sm:text-sm text-white/80">{cluster.impact}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate/70">
                {cluster.tooling.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 px-2 sm:px-3 py-0.5 sm:py-1 text-white/70">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="glass-panel h-full space-y-4 sm:space-y-5 p-4 sm:p-5 md:p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3 className="text-xl sm:text-2xl text-white">Skill pulse</h3>
          <p className="text-xs sm:text-sm text-slate/70">
            Weighted by real delivery hours across AI engineering, automation, and frontend craft.
          </p>
          <div className="space-y-3 sm:space-y-4">
            {skillMatrix.map((skill) => (
              <div key={skill.label}>
                <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate/60">
                  <p>{skill.label}</p>
                  <p>{skill.score}%</p>
                </div>
                <div className="mt-1.5 sm:mt-2 h-1.5 sm:h-2 rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon via-accent to-accentSoft"
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  )
}
