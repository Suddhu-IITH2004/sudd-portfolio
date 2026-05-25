import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { SectionShell } from '@/components/shared/SectionShell'

const featuredProject = {
  title: 'Ryukan Godo GPT',
  summary:
    'Enterprise RAG chatbot serving 500+ users across Japan & global offices. Hybrid search over 1,000+ documents with GPT-4 streaming responses in <1.2s first token latency.',
  highlights: [
    '500+ active users across business units',
    'Hybrid search: OpenSearch + semantic retrieval',
    '<1.2s streaming response latency',
    'Feedback loop & guardrails dashboard'
  ],
  stack: ['OpenSearch', 'AZURE OpenAI', 'LangChain', 'React', 'Python','AWS'],
  image: '/images/projects/ryukan-godo.png',
  metrics: { users: '500+', documents: '1,000+', latency: '<1.2s' }
}

const projectCards = [
  {
    title: 'Enterprise Process Automation Suite',
    summary: 
      'Power Automate & Power Apps solution automating 400K+ monthly tasks with DLP compliance, reducing manual processing by 85% across business units.',
    stack: ['Power Automate', 'Power Apps', 'Azure', 'DLP Compliance'],
    image: '/images/projects/power_automation.png',
    category: 'Enterprise Automation',
    link: null
  },
  {
    title: 'Cohere MLM Evaluation Framework',
    summary:
      'Comprehensive evaluation pipeline for multimodal language models across diverse benchmarks including NFCorpus, FinanceBench, and InfographicVQA.',
    stack: ['Cohere', 'Python', 'LangChain', 'Evaluation Metrics'],
    image: '/images/projects/llm_eval.jpg',
    category: 'AI/ML Research',
    link: null
  },
  {
    title: 'Prescription Audit Application',
    summary: 
      'Healthcare app for Vikarabad PHCs auditing prescription data. Recognized by the District Collector for improving healthcare delivery quality.',
    stack: ['React', 'Node.js', 'MongoDB', 'Healthcare APIs'],
    image: '/images/projects/phc_vikarabad-application.png',
    category: 'Healthcare Tech',
    link: null
  },
  {
    title: 'Suzuki AGILE Tomodachi App',
    summary: 
      'Rural development platform deployed across 4 villages in Telangana, connecting communities with government schemes and resources.',
    stack: ['React', 'AWS'],
    image: '/images/projects/sic_tomodachi.png',
    category: 'Social Impact',
    link: null
  },
]

const articleSpotlight = {
  title: 'Multiscale 3D Visualisation of Pharma Supply Chain',
  description: 
    'IEEE INDICON 2023 published research on interactive 3D visualization using Three.js and WebGL for pharmaceutical supply chain analytics with VR support.',
  image: '/images/articles/3d_multiscale_visualisation.png',
  link: 'https://ieeexplore.ieee.org/document/10440892',
  publication: 'IEEE INDICON 2023'
}

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Production systems that deliver real impact"
      description="From enterprise RAG chatbots to IEEE-published research—systems built with measurable outcomes and user-first design."
    >
      <motion.article
        className="overflow-hidden rounded-[32px] border border-border/20 bg-surface/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-6 md:gap-8">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-accent">Flagship Project</p>
              <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent w-fit">Live</span>
            </div>
            <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl text-text">{featuredProject.title}</h3>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted leading-relaxed">{featuredProject.summary}</p>

            <div className="mt-4 sm:mt-6 grid grid-cols-2 md:grid-cols-1 gap-4 sm:grid-cols-1"> 
              <div className="align-self-center flex justify-center">
          <img src={`${import.meta.env.BASE_URL}${featuredProject.image}`} alt={featuredProject.title} className="h-auto sm:h-50 md:h-50 rounded-lg w-30 object-cover" loading="lazy" />
              </div>
              <div>
                 {/* Metrics Row */}
            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-accent">{featuredProject.metrics.users}</p>
                <p className="mt-1 text-xs text-muted">Active Users</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-accent">{featuredProject.metrics.documents}</p>
                <p className="mt-1 text-xs text-muted">Indexed Documents</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-accent">{featuredProject.metrics.latency}</p>
                <p className="mt-1 text-xs text-muted">Response Time</p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-text">
              {featuredProject.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
              </div>
              </div>            
           
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              {featuredProject.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-border/30 px-2.5 sm:px-3 py-1 text-xs font-semibold text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="relative hidden">
            <img
              src={`${import.meta.env.BASE_URL}${featuredProject.image}`}
              alt={featuredProject.title}
              className="h-full w-full object-cover rounded-[28px]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 border-l border-border/20 rounded-[28px]" />
          </div>
        </div>
      </motion.article>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 sm:grid-cols-1">
        {projectCards.map((project) => (
          <motion.article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-[20px] sm:rounded-[28px] border border-border/20 bg-card/70 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="h-32 sm:h-40 md:h-48 w-full object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col gap-3 sm:gap-4 p-4 sm:p-6">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent">{project.category}</p>
              <div>
                <h4 className="text-lg sm:text-xl text-text">{project.title}</h4>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted line-clamp-2">{project.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-border/30 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="grid gap-4 sm:gap-6 "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
       
        <a
          href={articleSpotlight.link}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col overflow-hidden rounded-[20px] sm:rounded-[28px] border border-border/20 bg-card/70 transition-all duration-300 hover:border-accent/30"
        >
          <img src={`${import.meta.env.BASE_URL}${articleSpotlight.image}`} alt={articleSpotlight.title} className="h-32 sm:h-40 md:h-44 w-full object-cover" loading="lazy" />
          <div className="flex flex-1 flex-col gap-2 sm:gap-4 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-accent">Published Research</p>
              <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent w-fit">{articleSpotlight.publication}</span>
            </div>
            <h4 className="text-base sm:text-lg text-text leading-tight line-clamp-2">{articleSpotlight.title}</h4>
            <p className="text-xs sm:text-sm text-muted line-clamp-2">{articleSpotlight.description}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
              View on IEEE Xplore
              <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </a>
      </motion.div>
       <div className="rounded-[20px] sm:rounded-[28px] border border-border/20 bg-surface/80 p-4 pb-0 sm:p-6">
          <div className="flex items-start sm:items-center justify-between gap-2">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted">Technical Philosophy</p>
            <ArrowUpRight className="h-4 w-4 text-muted flex-shrink-0" />
          </div>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-text">
            Every system I build prioritizes measurable impact, user experience, and operational excellence.
          </p>
          <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted">
            <li>• Production-first: Ship working systems, iterate fast</li>
            <li>• User-centric: 500+ users validate every design decision</li>
            <li>• Research-backed: IEEE published, academically rigorous</li>
            <li>• Cloud-native: Azure certified, AWS experienced</li>
          </ul>
        </div>
    </SectionShell>
  )
}
