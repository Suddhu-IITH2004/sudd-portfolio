import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Skills organized with position data (using viewport-based positioning like the reference)
const skillsData = {
  core: { name: 'AI/ML', confidence: 95 },
  skills: [
    { name: 'Python', confidence: 90, x: -20, y: 2 },
    { name: 'RAG Systems', confidence: 92, x: -5, y: -10 },
    { name: 'JavaScript', confidence: 85, x: 20, y: 6 },
    { name: 'React', confidence: 85, x: 0, y: 12 },
    { name: 'LangChain', confidence: 88, x: -20, y: -15 },
    { name: 'GPT-4', confidence: 92, x: 15, y: -12 },
    { name: 'AWS', confidence: 88, x: -35, y: -5 },
    { name: 'Azure', confidence: 82, x: 32, y: -5 },
    { name: 'OpenSearch', confidence: 90, x: 0, y: -20 },
    { name: 'Power Platform', confidence: 90, x: -25, y: 18 },
    { name: 'Tailwind CSS', confidence: 88, x: 28, y: 18 },
  ],
}

// Individual skill badge component
function SkillBadge({ skill, isCore = false }) {
  const [showTooltip, setShowTooltip] = useState(false)

  if (isCore) {
    return (
      <motion.div
        className="cursor-pointer flex rounded-full font-semibold bg-text text-canvas p-6 sm:p-8 shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="text-base sm:text-lg font-bold">{skill.name}</span>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{
            opacity: showTooltip ? 1 : 0,
            y: showTooltip ? 0 : 10,
            scale: showTooltip ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute -top-16 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-xl bg-surface border border-border/30 px-4 py-2 text-sm font-medium text-text shadow-xl"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-wider text-muted">Confidence</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 rounded-full bg-text/20 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: showTooltip ? `${skill.confidence}%` : 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </div>
              <span className="text-lg font-bold text-accent">{skill.confidence}%</span>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-surface" />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative cursor-pointer w-max origin-center font-semibold bg-text text-canvas py-2 sm:py-3 px-4 sm:px-6 rounded-full lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-text xs:font-bold text-sm sm:text-base"
      style={{
        transform: `translateX(${skill.x}vw) translateY(${skill.y}vw)`,
      }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: 'rgb(88, 230, 217)',
        color: 'rgb(5, 6, 10)',
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {skill.name}
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: showTooltip ? 1 : 0,
          y: showTooltip ? 0 : 10,
          scale: showTooltip ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute -top-14 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-xl bg-surface border border-border/30 px-3 py-2 text-sm font-medium text-text shadow-xl"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] uppercase tracking-wider text-muted">Confidence</span>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 rounded-full bg-text/20 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: showTooltip ? `${skill.confidence}%` : 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </div>
            <span className="text-sm font-bold text-accent">{skill.confidence}%</span>
          </div>
        </div>
        <div className="absolute -bottom-1.5 left-1/2 h-0 w-0 -translate-x-1/2 border-x-6 border-t-6 border-x-transparent border-t-surface" />
      </motion.div>
    </motion.div>
  )
}

// Mobile fallback grid with categories
function MobileSkillsGrid() {
  const categories = {
    'Core': [skillsData.core],
    'AI/ML Stack': [
      { name: 'RAG Systems', confidence: 92 },
      { name: 'LangChain', confidence: 88 },
      { name: 'OpenSearch', confidence: 90 },
      { name: 'GPT-4', confidence: 92 },
    ],
    'Backend & Cloud': [
      { name: 'Python', confidence: 90 },
      { name: 'AWS', confidence: 88 },
      { name: 'Azure', confidence: 82 },
    ],
    'Frontend & UI': [
      { name: 'React', confidence: 85 },
      { name: 'Tailwind CSS', confidence: 88 },
      { name: 'JavaScript', confidence: 85 },
    ],
    'Tools': [
      { name: 'Power Platform', confidence: 90 },
    ],
  }

  return (
    <div className="w-full space-y-4 sm:space-y-6">
      {Object.entries(categories).map(([category, skills]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <MobileSkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function MobileSkillBadge({ skill }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="inline-flex items-center rounded-full border border-text/60 bg-transparent px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-text transition-all duration-300 cursor-pointer"
        whileHover={{
          scale: 1.05,
          borderColor: 'rgb(88, 230, 217)',
          backgroundColor: 'rgba(88, 230, 217, 0.1)',
          color: 'rgb(88, 230, 217)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {skill.name}
      </motion.span>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute -top-12 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-surface border border-border/30 px-3 py-1.5 text-xs font-medium text-text shadow-lg"
      >
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold">{skill.confidence}%</span>
          <span className="text-muted/60">confidence</span>
        </div>
        <div className="absolute -bottom-1.5 left-1/2 h-0 w-0 -translate-x-1/2 border-x-6 border-t-6 border-x-transparent border-t-surface" />
      </motion.div>
    </motion.div>
  )
}

export function OrbitalSkills() {
  const containerRef = useRef(null)

  return (
    <>
      {/* Desktop Circular Skills View - matches reference design */}
      <div className="hidden md:contents">
        {/* Center core skill */}
        <div className="relative z-10">
          <SkillBadge skill={skillsData.core} isCore />
        </div>

        {/* Positioned skills around the center */}
        {skillsData.skills.map((skill) => (
          <div
            key={skill.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
          >
            <SkillBadge skill={skill} />
          </div>
        ))}
      </div>

      {/* Mobile Grid View */}
      <div className="md:hidden w-full">
        <MobileSkillsGrid />
      </div>
    </>
  )
}
