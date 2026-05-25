import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, Calendar, Heart, Megaphone, Award, Target } from 'lucide-react'
import { SectionShell } from '@/components/shared/SectionShell'
import { AnimatedNumbers } from '@/components/shared/AnimatedNumbers'

// Leadership impact metrics
const impactMetrics = [
  {
    value: 900,
    suffix: '+',
    label: 'Volunteers Led',
    description: 'Cross-functional Team coordination',
    icon: Users,
  },
  {
    value: 400,
    suffix: '+',
    label: 'Blood Units Collected',
    description: 'Life-saving donation camp',
    icon: Heart,
  },
  {
    value: 4000,
    suffix: '+',
    label: 'People Reached',
    description: 'Educational outreach sessions',
    icon: Megaphone,
  },
  {
    value: 100,
    suffix: '+',
    label: 'Events Organized',
    description: 'On-campus and community initiatives',
    icon: Award,
  },
]

// Leadership initiatives
const initiatives = [
  {
    title: 'IITH Half Marathon 2024',
    role: 'Lead Organizer',
    description:
      'Conceptualized and executed IIT Hyderabad\'s first-ever Half Marathon event. Coordinated logistics, volunteer management, participant registration, and safety protocols for 500+ runners.',
    impact: 'First-ever campus marathon • 150+ volunteers • Campus-wide participation',
    image: '/images/articles/marathon.jpeg',
    color: 'from-accent/20 to-accentSoft/20',
  },
  {
    title: 'NSS Magazine Launch',
    role: 'Mentor & Editor',
    description:
      'Launched IITH\'s first official NSS Magazine documenting volunteer activities, social initiatives, and community impact stories. Created a lasting record of NSS achievements.',
    impact: 'First NSS publication • Community documentation • Legacy creation',
    image: '/images/articles/magazine.png',
    link: 'https://heyzine.com/flip-book/b4a1245a5f.html#page/1',
    color: 'from-neon/20 to-accent/20',
  }
]

// Leadership qualities
const leadershipQualities = [
  { label: 'Team Leadership', description: 'Led cross-functional teams of 150+ volunteers' },
  { label: 'Event Management', description: 'Organized campus-wide events and initiatives' },
  { label: 'Community Building', description: 'Built lasting relationships with stakeholders' },
  { label: 'Strategic Planning', description: 'Developed and executed multi-month programs' },
  { label: 'Communication', description: 'Coordinated with administration and external partners' },
  { label: 'Crisis Management', description: 'Handled real-time challenges during events' },
]

// Initiative card component
function InitiativeCard({ initiative, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[28px] border border-border/20 bg-surface/80"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      <div className="relative grid gap-6 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 md:grid-cols-[1fr,1.2fr]">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-2xl bg-card/50 md:aspect-square order-2 md:order-1">
          <img 
            src={`${import.meta.env.BASE_URL}${initiative.image}`} 
            alt={initiative.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4">
            <span className="inline-block rounded-full bg-accent/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-accent backdrop-blur-sm">
              {initiative.role}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between order-1 md:order-2">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text">{initiative.title}</h3>
            <p className="mt-1.5 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-muted line-clamp-3 md:line-clamp-none">{initiative.description}</p>
          </div>

          <div className="mt-2 sm:mt-3 md:mt-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Target className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-accent flex-shrink-0" />
              <span className="font-medium text-text">Impact</span>
            </div>
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted line-clamp-2">{initiative.impact}</p>

            {initiative.link && (
              <a
                href={initiative.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-3 md:mt-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-canvas"
              >
                View Magazine
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// Impact metric card
function ImpactMetric({ metric, index }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] border border-border/20 bg-card/70 p-3 sm:p-4 md:p-6 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      
      <div className="relative">
        <div className="mx-auto mb-2 sm:mb-3 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-accent/15 text-accent flex-shrink-0">
          <metric.icon className="h-5 sm:h-6 w-5 sm:w-6" />
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-text">
          <AnimatedNumbers value={metric.value} />
          {metric.suffix}
        </div>
        <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent">
          {metric.label}
        </div>
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted line-clamp-2">{metric.description}</p>
      </div>
    </motion.div>
  )
}

export function LeadershipSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <SectionShell
      id="leadership"
      eyebrow="Leadership"
      title="Building Communities, Driving Impact"
      description="As General Secretary of NSS IIT Hyderabad (2024-2025), I led 150+ volunteers to organize transformative initiatives that touched thousands of lives."
    >
      {/* Role highlight */}
      <motion.div
        className="relative mb-8 sm:mb-10 md:mb-12 overflow-hidden rounded-[20px] sm:rounded-[28px] border border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-accentSoft/10 p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accentSoft/10 blur-3xl" />
        
        <div className="relative grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-[1fr,auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-accent">
              <Award className="h-3 w-3" />
              2024 — 2025
            </div>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-text">
              General Secretary — NSS IIT Hyderabad
            </h3>
            <p className="mt-2 sm:mt-3 md:mt-3 text-xs sm:text-sm md:text-lg text-muted">
              Led the National Service Scheme unit at one of India's premier engineering institutions. 
              Orchestrated campus-wide social initiatives, volunteer programs, and community outreach 
              that created lasting impact beyond the classroom.
            </p>
          </div>
          
        </div>
        {/* Impact metrics grid */}
      <div className=" pt-5 mb-8 sm:mb-10 md:mb-12 grid gap-3 sm:gap-4 md:gap-4 grid-cols-2 sm:grid-cols-1 md:grid-cols-4">
        {impactMetrics.map((metric, index) => (
          <ImpactMetric key={metric.label} metric={metric} index={index} />
        ))}
      </div>
      </motion.div>

      

      {/* Initiatives showcase */}
      <motion.div
        className="mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 sm:mb-6 md:mb-8 text-center text-lg sm:text-xl md:text-2xl font-bold text-text">Key Initiatives</h3>
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {initiatives.map((initiative, index) => (
            <InitiativeCard key={initiative.title} initiative={initiative} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Leadership qualities */}
      <motion.div
        className="rounded-[20px] sm:rounded-[28px] border border-border/20 bg-card/70 p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 sm:mb-5 md:mb-6 text-center text-base sm:text-lg md:text-xl font-bold text-text">Leadership Competencies Developed</h3>
        <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {leadershipQualities.map((quality, index) => (
            <motion.div
              key={quality.label}
              className="rounded-[14px] sm:rounded-2xl border border-border/20 bg-surface/80 p-3 sm:p-4 md:p-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent flex-shrink-0 mt-1" />
                <span className="font-semibold text-xs sm:text-sm text-text">{quality.label}</span>
              </div>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-muted">{quality.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  )
}
