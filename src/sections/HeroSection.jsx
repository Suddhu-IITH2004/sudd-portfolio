import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, Cpu, ShieldCheck, Sparkles } from 'lucide-react'
import { useSectionObserver } from '@/hooks/useSectionObserver'
import { scrollToSection } from '@/utils/scrollTo'

const heroStats = [
  {
    label: 'Active daily users on production RAG system',
    value: '500+',
    meta: "Ryukan Godo GPT · <1.2s latency · 6 languages",
  },
  {
    label: 'Documents indexed with hybrid search',
    value: '1,000+',
    meta: 'semantic + BM25 · cross-encoder reranking',
  },
  {
    label: 'Students impacted as NSS General Secretary',
    value: '2,000+',
    meta: 'Led 15 initiatives · ₹2L+ budget managed',
  },
  {
    label: 'Monthly automated tasks via Power Platform',
    value: '400K+',
    meta: 'DLP-compliant · audit trails · zero downtime',
  }
]

const heroSignals = [
  {
    title: 'Production RAG Systems',
    detail:
      'Hybrid search with semantic + BM25 retrieval, cross-encoder reranking, and GPT-4 achieving <1.2s latency across 1,000+ documents.',
    icon: Sparkles,
  },
  {
    title: 'Enterprise LLM Evaluation',
    detail: 'Benchmarking frameworks across NFCorpus, FinanceBench, and InfographicVQA datasets for multimodal retrieval accuracy.',
    icon: Cpu,
  },
  {
    title: 'Crisis Automation',
    detail: 'Emergency pipelines recovering 10,000+ emails during Microsoft Office outages with zero data loss.',
    icon: ShieldCheck,
  },
]

const heroBadges = [
  'Azure AI',
  'RAG Systems Design',
  'Power Automate DLP',
  'AWS-native Orchestration',
  'LLM Evaluation Frameworks'
]

export function HeroSection() {
  const ref = useSectionObserver('hero', { threshold: 0.45 })
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setGradientPos({ x, y })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="section-wrapper relative overflow-hidden rounded-[32px] border border-border/20 bg-surface py-0"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, rgba(88,230,217,0.28), transparent 45%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-hero-noise opacity-60" />

      <div className="relative space-y-8 sm:space-y-10 md:space-y-8">
        {/* Row 1 Wrapper: Adopts the layout styles from your reference code */}
        <div className="flex w-full items-start justify-between gap-8 lg:gap-12 md:flex-col">

          {/* LEFT COLUMN: Text content takes exactly half width on desktop, scales to full on tablet/mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-1/2 md:w-full flex flex-col items-start self-center space-y-4 sm:space-y-6 pt-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/60 px-3 sm:px-4 py-2 text-xs font-mono uppercase tracking-[0.35em] text-accent">
              AI/ML Engineer · Tokyo, Japan
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-text capitalize text-left">
              Turning Ideas Into Intelligent Systems With AI & Code.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed font-medium">
              I build production RAG systems, LLM evaluation pipelines, and enterprise automation on cloud platforms.
              IIT Hyderabad graduate, IEEE-published researcher, and Azure-certified engineer shipping AI solutions that serve 500+ users.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-text px-6 sm:px-7 py-2.5 sm:py-3 font-semibold text-canvas shadow-glow transition hover:bg-accent hover:text-canvas w-full sm:w-auto"
              >
                Get in Touch?
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/40 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-text transition hover:border-accent w-full sm:w-auto"
              >
                View Projects
                <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SVG Vector Portrait takes remaining 50% spacing on desktop viewports */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-1/2 md:w-full relative flex items-center justify-center md:justify-start"
          >
            {/* Clean backdrop canvas layer matching your glass architecture */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-3xl filter blur-2xl opacity-70" />
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-xl p-1.5 sm:p-2 aspect-[3/4] w-auto max-w-[450px] sm:max-w-[320px] md:max-w-md shadow-l">
              <img
                src={`${import.meta.env.BASE_URL}images/profile/developer-pic-sudd.png`}
                alt="AI/ML Engineer Portrait Vector"
                className="w-full h-full object-contain object-center rounded-xl sm:rounded-2xl filter grayscale contrast-110 hover:grayscale-0 transition duration-500 mix-blend-lighten color-transparent"
              />
            </div>
          </motion.div>

        </div>

        {/* OUTER PARENT WRAPPER: Aligns Stats and Operating Model side-by-side on desktop, stacks them on mobile */}
        <div className="flex w-full items-start justify-between gap-6 sm:gap-8 md:flex-col mt-8 sm:mt-10 md:mt-12">

          {/* LEFT COLUMN: Stats Grid (Takes exactly half width on desktop, scales to full on tablet/mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-1/2 md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel p-4 sm:p-5 md:p-6 text-left w-full h-full flex flex-col justify-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display text-text">{stat.value}</p>
                <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted leading-normal">{stat.meta}</p>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* RIGHT COLUMN: Operating Model Section (Takes remaining 50% spacing on desktop viewports) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-1/2 md:w-full glass-panel relative overflow-hidden p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full min-h-max"
          >
            {/* Background blur layer */}
            <div className="absolute inset-x-4 sm:inset-x-6 top-4 sm:top-6 h-8 sm:h-10 rounded-full bg-gradient-to-r from-accent/30 via-amber/30 to-accentSoft/30 blur-3xl pointer-events-none" />

            <div className="relative space-y-6 sm:space-y-8 w-full flex flex-col h-full justify-between">
              {/* Operating Model Header */}
              <div>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-accent">Operating model</p>
                <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-text leading-snug">
                  Think/Discovery → System Architecture → Secure rollout with TELEMETRY loops running in parallel.
                </p>
              </div>

              {/* Internal Focus & Signals Blocks (Stacked vertically for cleaner spacing inside the half-width box) */}
              <div className="space-y-4 sm:space-y-6 w-full">
                {/* Current Focus */}
                <div className="rounded-2xl border border-border/20 bg-card/60 p-4 sm:p-5">
                  <p className="text-sm font-medium text-text">Current focus</p>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                    Automation ·System Architecture ·Enterprise RAG Architecture
                  </p>
                </div>

                {/* Hero Signals Stack */}
                <div className="space-y-3 sm:space-y-4">
                  {heroSignals.map((signal) => (
                    <div key={signal.title} className="flex gap-3 sm:gap-4 rounded-2xl border border-border/20 bg-card/60 p-3 sm:p-4">
                      <div className="flex h-9 sm:h-10 w-9 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <signal.icon className="h-4 sm:h-5 w-4 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-text">{signal.title}</p>
                        <p className="text-xs sm:text-sm text-muted line-clamp-2 mt-0.5 leading-relaxed">{signal.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>
          </motion.div>

        </div>


      </div>
    </section>
  )
}
