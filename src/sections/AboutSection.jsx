import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { SectionShell } from '@/components/shared/SectionShell'
import { AnimatedNumbers } from '@/components/shared/AnimatedNumbers'
import { OrbitalSkills } from '@/components/shared/OrbitalSkills'
import { AchievementsCarousel } from '@/components/shared/AchievementsCarousel'

// Experience data - CORRECT timeline from resume
const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'Otsuka Holdings Co., Ltd.',
    companyLink: 'https://www.otsuka.com/jp/',
    period: 'Oct 2025 — Present',
    location: 'Tokyo, Japan',
    description:
      'Architected and deployed Ryukan Godo GPT, a production RAG chatbot serving 500+ internal users across 1,000+ confidential corporate documents. Engineered hybrid search with cross-encoder reranking achieving <1.2s latency. Built enterprise LLM evaluation framework benchmarking Cohere MLM across 3 industry datasets. Automated emergency pipeline recovering 10,000+ emails during Microsoft Office outage.',
  },
  {
    role: 'Project Lead',
    company: 'Presription Audit Project- Vikarabad District PHCs',
    companyLink: '#',
    period: 'Oct 2024 — Mar 2025',
    location: 'Vikarabad,Telangana, India',
    description:
      'Developed Prescription Audit Application for frontline PHC workers across Vikarabad district. Recognized with Letter of Appreciation from District Collector for measurable improvement in prescription management and healthcare delivery.',
  },
  {
    role: 'Data Scientist',
    company: 'Otsuka Holdings Co., Ltd.',
    companyLink: 'https://www.otsuka.com/jp/',
    period: 'May 2024 — Jul 2025',
    location: 'Tokyo, Japan',
    description:
      'Developed Otsuka GENCURE AI, An AI-powered web application that uses OpenAI and Cohere APIs to condense complex blood cancer research papers into unified, customizable summaries and data visualizations for fast medical decision-making.',
  },
  {
    role: 'AWS Architect',
    company: 'Suzuki Innovation Center, IIT Hyderabad',
    companyLink: 'https://in.linkedin.com/company/suzuki-innovation-centre',
    period: 'Sep 2023 — Feb 2024',
    location: 'Kandi, Telangana, India',
    description:
      'Built and launched the Tomodachi Application across 4 villages as part of Suzuki-backed rural development initiative. Directly improved connectivity and accessibility for underserved communities through mobile-first design.',
  },
  {
    role: 'Smart Meter Authorisation System Tester',
    company: 'IIT Hyderabad',
    companyLink: 'https://iith.ac.in',
    period: 'Apr 2023 — Aug 2023',
    location: 'Hyderabad, India',
    description:
      'Paid research internship under Prof. Abhinav Kumar. Engineered a multi-layer security and authorization framework for smart meters in telecom networks, focusing on IoT cybersecurity for power grid infrastructure.',
  },
  
]

// Education data - CORRECT from resume
const education = [
  {
    degree: 'B.Tech — Mechanical & Aerospace Engineering',
    institution: 'Indian Institute of Technology (IIT) Hyderabad',
    period: '2021 — 2025',
    location: 'Hyderabad, India',
    description:
      'CGPA: 9.02/10.0 IEEE INDICON 2023 published researcher. General Secretary of NSS. Software & Simulations Head at Tinkerers\' Lab.',
  },
   {
    degree: 'B.Tech — Minor in Entrepreneurship',
    institution: 'Indian Institute of Technology (IIT) Hyderabad',
    period: '2023 — 2025',
    location: 'Hyderabad, India',
    description:
      'C.G.PA: 8.23/10.0. Co-Founder of a Drone Startup currently leading Advanced AI Integration to enable autonomous drone navigation and operations.',
  },
  {
    degree: 'Board of Intermediate Education, Andhra Pradesh',
    institution: 'Sri Chaitanya Junior College',
    period: '2019 — 2021',
    location: 'Andhra Pradesh, India',
    description:
      'Secured 97.1% in Higher Secondary Examination with a focus on Mathematics, Physics, and Chemistry.',
  },
  {
    degree: 'ICSE Class 10',
    institution: 'De Paul School',
    period: '2009-2019',
    location: 'Visakhapatnam, India',
    description:
      'Secured 92.3% in ICSE Class 10 Examination with a focus on Science, Mathematics, and English.',
  },
]

// Animated line icon for timeline
function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute -left-[42px] stroke-accent md:-left-[36px] sm:-left-[32px] xs:-left-[28px]">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="fill-none stroke-accent/20 stroke-1" />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-surface stroke-accent stroke-[5px] md:stroke-[4px] sm:stroke-[3px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" className="animate-pulse fill-accent stroke-1" />
      </svg>
    </figure>
  )
}

// Experience/Education detail card
function Details({ role, company, companyLink, period, location, description }) {
  const ref = useRef(null)

  return (
    <li ref={ref} className="mx-auto mb-6 sm:mb-8 flex w-[70%] sm:w-[65%] md:w-[80%] flex-col items-start justify-between first:mt-0 last:mb-0">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-bold capitalize text-text">
          {role}&nbsp;
          {company && (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize text-accent hover:underline"
            >
              @{company}
            </a>
          )}
        </h3>
        <span className="text-xs sm:text-sm font-medium capitalize text-muted/75">
          {period} | {location}
        </span>
        <p className="mt-1 sm:mt-2 w-full text-xs sm:text-sm md:text-base font-medium text-muted line-clamp-4 md:line-clamp-none">{description}</p>
      </motion.div>
    </li>
  )
}
const heroBadges = [
  'Azure AI',
  'RAG Systems Design',
  'Power Automate DLP',
  'AWS-native Orchestration',
  'LLM Evaluation Frameworks',
  'Power Platform',
  'LangChain',
  'LLM'
]

// Education detail card
function EducationDetails({ degree, institution, period, location, description }) {
  const ref = useRef(null)

  return (
    <li ref={ref} className="mx-auto mb-6 sm:mb-8 flex w-[70%] sm:w-[65%] md:w-[80%] flex-col items-start justify-between first:mt-0 last:mb-0">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-bold capitalize text-text">{degree}</h3>
        <span className="text-xs sm:text-sm font-medium capitalize text-muted/75">
          {period} | {institution}
        </span>
        <p className="mt-1 sm:mt-2 w-full text-xs sm:text-sm md:text-base font-medium text-muted line-clamp-4 md:line-clamp-none">{description}</p>
      </motion.div>
    </li>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div>
    <SectionShell
      id="about"
      eyebrow="About"
      title={
        <span className="inline-flex items-center gap-2 sm:gap-4">
          Passion <span className="text-accent">Fuels</span> Purpose!
        </span>
      }
      description=""
    >
     {/* Biography Section Wrapper - Guarantees side-by-side on desktop, stacks vertically on mobile */}
<div className="flex w-full items-start justify-between gap-8 md:gap-12 lg:gap-16 md:flex-col mt-8 sm:mt-12">
  
  {/* COLUMN 1: Profile Image (Takes exactly 40% on desktop) */}
  <motion.div
    className="w-[40%] md:w-full relative rounded-2xl bg-surface border border-border/10 p-3 sm:p-4"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Decorative background black block card anchor */}
    <div className="absolute -right-2 sm:-right-3 top-0 -z-10 h-auto w-auto rounded-[1.5rem] sm:rounded-[2rem] bg-text" />
    
    <div className="relative overflow-hidden rounded-xl bg-card">
      <img
        src={`${import.meta.env.BASE_URL}images/profile/sudd-developer-2.png`}
        alt="Suddhodhan Jajula"
        className="h-auto w-full object-cover filter grayscale contrast-[1.05] hover:grayscale-0 transition duration-500"
      />
    </div>
   
    
  </motion.div>

  {/* COLUMN 2: Bio Text Content (Takes exactly 60% on desktop) */}
  <motion.div
    className="w-[60%] md:w-full flex flex-col items-start justify-start text-left"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <h2 className="mb-2 sm:mb-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-accent">Biography</h2>
    
    <div className="space-y-4 text-sm sm:text-base font-medium text-muted leading-relaxed">
      <p>
        Hi, I'm <span className="font-bold text-text">Suddhodhan Jajula</span>, an AI/ML Engineer based in Tokyo, Japan,
        with a passion for building intelligent systems that solve real enterprise problems. Currently at Otsuka Holdings,
        I ship production RAG systems, multimodal LLM evaluation frameworks, and cloud-native automation serving hundreds of users.
      </p>
      <p>
        I believe that AI is about more than just building models – it's about creating systems that deliver measurable
        business value, reduce friction, and empower people with instant access to knowledge.
      </p>
      <p>
        From architecting a RAG chatbot indexing 1,000+ corporate documents to engineering emergency automation pipelines
        during critical outages, I bring a builder's mindset and a researcher's rigor to every challenge. IIT Hyderabad
        graduate (CGPA 9.02), IEEE-published researcher, and Azure-certified engineer — I look forward to bringing my
        skills and passion to impactful projects worldwide.
      </p>
    </div>
  </motion.div>

</div>
 {/* Tech Badges Footer block */}
    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/10 w-full">
      {heroBadges.map((badge) => (
        <span key={badge} className="rounded-full border border-border/30 bg-card/60 px-2.5 py-0.5 text-[11px] font-semibold text-muted">
          {badge}
        </span>
      ))}
    </div>


      {/* Skills Section - Orbital Layout */}
      <motion.div
        className="mt-16 sm:mt-24 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 sm:mb-12 md:mb-16 w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text">
          Skills
        </h2>
        <OrbitalSkills />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="mt-16 sm:mt-24 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 sm:mb-12 md:mb-16 w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text">
          Experience
        </h2>
        <div ref={ref} className="relative mx-auto w-full sm:w-[90%] md:w-[85%] lg:w-[75%]">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-6 sm:left-7 md:left-9 top-0 h-full w-[2px] sm:w-[3px] md:w-[4px] origin-top bg-text"
          />
          <ul className="ml-2 sm:ml-3 md:ml-4 flex w-full flex-col items-start justify-between">
            {experiences.map((exp) => (
              <Details
                key={exp.role + exp.period}
                role={exp.role}
                company={exp.company}
                companyLink={exp.companyLink}
                period={exp.period}
                location={exp.location}
                description={exp.description}
              />
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="mt-16 sm:mt-24 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 sm:mb-12 md:mb-16 w-full text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text">
          Education
        </h2>
        <div className="relative mx-auto w-full sm:w-[90%] md:w-[85%] lg:w-[75%]">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-6 sm:left-7 md:left-9 top-0 h-full w-[2px] sm:w-[3px] md:w-[4px] origin-top bg-text"
          />
          <ul className="ml-2 sm:ml-3 md:ml-4 flex w-full flex-col items-start justify-between">
            {education.map((edu) => (
              <EducationDetails
                key={edu.degree + edu.period}
                degree={edu.degree}
                institution={edu.institution}
                period={edu.period}
                location={edu.location}
                description={edu.description}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </SectionShell>
    {/* Achievements & Certifications Carousel */}
      <motion.div
        className="mt-16 sm:mt-24 md:mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <AchievementsCarousel />
      </motion.div>
    </div>  
  )
}
