import { Mail, MapPin, Clock, Sparkles } from 'lucide-react'
import { SectionShell } from '@/components/shared/SectionShell'

const contactChannels = [
  {
    label: 'Email',
    value: 'suddhu11050@gmail.com',
    icon: Mail,
    href: 'mailto:suddhu11050@gmail.com',
  },
  {
    label: 'Location',
    value: 'Tokyo · Japan',
    icon: MapPin,
  },
  {
    label: 'Timezone',
    value: 'JST (UTC+9) · overlaps EST mornings',
    icon: Clock,
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://jp.linkedin.com/in/suddhodhan-jajula-682184234',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Suddhu-IITH2004',
  },
  {
    label: 'Download Resume',
    href: `${import.meta.env.BASE_URL}2026_03_15_resume.pdf`,
  },
]

export function ContactSection() {
  return (
   <SectionShell
  id="contact"
  eyebrow="Contact"
  title="Let’s co-create your next AI or automation program"
  description="I partner with leadership, product, and ops teams to design copilots, automation fabrics, and telemetry loops that scale from pilot to global rollout."
>
  {/* WRAPPER FIX: Changed to horizontal flex engine with proportional child columns */}
  <div className="flex w-full items-stretch justify-between gap-6 sm:gap-8 lg:flex-row sm:flex-col md:flex-col md:justify-center md:items-center">
    
    {/* LEFT COLUMN: Message Box Form & Channels (Takes 55% layout space on desktop) */}
    <div className=" w-[55%] md:w-full rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-border/20 bg-surface/80 p-4 sm:p-6 md:p-8 flex flex-col justify-between sm:w-full md:w-3/4">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-card/60 px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] sm:tracking-[0.35em] text-accent">
          Currently collaborating · open to advisory
        </div>
        <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl text-text leading-tight font-semibold">
          Tell me about the workflow, business case, or KPI target you are chasing.
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-muted leading-relaxed">
          From discovery and architecture, through secure rollout and enablement, I stay embedded until the telemetry proves the outcome.
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="mailto:suddhu11050@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-text px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-canvas shadow-glow transition hover:bg-accent w-full sm:w-auto text-center"
          >
            Email Suddhodhan
            <Sparkles className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/817091218078"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border/30 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-text w-full sm:w-auto text-center hover:border-accent transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-6 md:mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-1 w-full">
        {contactChannels.map((channel) => (
          <div key={channel.label} className="rounded-[14px] sm:rounded-2xl border border-border/20 bg-card/70 p-3 sm:p-4 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-text">
              <channel.icon className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-accent flex-shrink-0" />
              <span className="truncate">{channel.label}</span>
            </div>
            {channel.href ? (
              <a href={channel.href} className="mt-2 block text-xs sm:text-sm text-muted hover:text-accent truncate transition" rel="noreferrer">
                {channel.value}
              </a>
            ) : (
              <p className="mt-2 text-xs sm:text-sm text-muted truncate">{channel.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT COLUMN: Profile Status & Social Network Links (Takes 45% layout space on desktop) */}
    <div className="w-[45%] md:w-full rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-border/20 bg-card/70 p-4 sm:p-6 md:p-8 flex flex-col justify-between sm:w-full md:w-3/4">
      <div className="flex flex-col items-center text-center">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 border border-border/10 shadow-md">
          <img
            src={`${import.meta.env.BASE_URL}images/profile/sudd-developer-2.png`}
            alt="Suddhodhan speaking at an event"
            className="h-full w-full object-cover filter grayscale contrast-[1.05]"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted">Availability</p>
        <p className="mt-1 sm:mt-1.5 text-lg sm:text-xl md:text-2xl font-bold text-text">New engagements from July 2026</p>
        <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted max-w-xs leading-relaxed">
          Enterprise consulting, advisory retainers, or fractional leadership for AI/automation initiatives.
        </p>
      </div>

      <div className="mt-4 space-y-1 sm:space-y-2 md:space-y-1 w-full">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[12px] sm:rounded-2xl border border-border/20 bg-surface/30 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-text transition hover:border-accent hover:bg-surface/60"
          >
            {link.label}
            <span className="text-accent text-sm">↗</span>
          </a>
        ))}
      </div>
    </div>

  </div>
</SectionShell>

  )
}
