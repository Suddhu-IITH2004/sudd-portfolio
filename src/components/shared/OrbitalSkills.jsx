import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Production-grade structured data array
const skillsData = {
  core: { name: 'AI/ML Systems', confidence: 96 },
  skills: [
    // Core AI / Data Layer (Inner Orbit Ring Tracks)
    { name: 'RAG Systems', confidence: 95, x: '0%', y: '-18%', category: 'AI/ML Stack' },
    { name: 'Vector DBs', confidence: 92, x: '16%', y: '-8%', category: 'AI/ML Stack' },
    { name: 'LangChain', confidence: 90, x: '16%', y: '8%', category: 'AI/ML Stack' },
    { name: 'GPT-4 / LLMs', confidence: 95, x: '0%', y: '18%', category: 'AI/ML Stack' },
    { name: 'Python', confidence: 94, x: '-16%', y: '8%', category: 'Languages' },
    { name: 'OpenSearch', confidence: 90, x: '-16%', y: '-8%', category: 'AI/ML Stack' },
    
    // Systems & Infrastructure Layer (Mid Orbit Ring Tracks)
    { name: 'Docker', confidence: 88, x: '0%', y: '-32%', category: 'Infrastructure & Tools' },
    { name: 'TypeScript', confidence: 88, x: '-22%', y: '-22%', category: 'Languages' },
    { name: 'Tailwind CSS', confidence: 92, x: '22%', y: '-22%', category: 'Frontend' },
    { name: 'AWS', confidence: 90, x: '-30%', y: '0%', category: 'Infrastructure & Tools' },
    { name: 'Azure', confidence: 85, x: '30%', y: '0%', category: 'Infrastructure & Tools' },
    { name: 'Power Automate', confidence: 92, x: '-22%', y: '22%', category: 'Infrastructure & Tools' },
    { name: 'SharePoint', confidence: 88, x: '22%', y: '22%', category: 'Infrastructure & Tools' },
    
    // Peripherals & App State Delivery Layer (Outer Orbit Ring Tracks)
    { name: 'CI/CD', confidence: 85, x: '-38%', y: '-16%', category: 'Infrastructure & Tools' },
    { name: 'Monitoring', confidence: 82, x: '38%', y: '-16%', category: 'Infrastructure & Tools' },
    { name: 'Redis', confidence: 85, x: '-38%', y: '16%', category: 'Infrastructure & Tools' },
    { name: 'React', confidence: 90, x: '38%', y: '16%', category: 'Frontend' },
    { name: 'FastAPI', confidence: 90, x: '-16%', y: '38%', category: 'Languages' },
    { name: 'PostgreSQL', confidence: 88, x: '16%', y: '38%', category: 'Infrastructure & Tools' },
    { name: 'Git', confidence: 92, x: '0%', y: '44%', category: 'Infrastructure & Tools' },
    
    // Additional AI/ML Technologies
    { name: 'Prompt Engineering', confidence: 94, x: '-12%', y: '-28%', category: 'AI/ML Stack' },
    { name: 'Embedding Models', confidence: 88, x: '12%', y: '-28%', category: 'AI/ML Stack' },
    { name: 'Claude AI', confidence: 90, x: '-26%', y: '-12%', category: 'AI/ML Stack' },
    { name: 'Semantic Search', confidence: 92, x: '26%', y: '-12%', category: 'AI/ML Stack' },
    
    // Backend & Data Processing
    { name: 'Node.js', confidence: 85, x: '-42%', y: '-8%', category: 'Languages' },
    { name: 'REST APIs', confidence: 92, x: '42%', y: '-8%', category: 'Languages' },
    { name: 'GraphQL', confidence: 78, x: '-42%', y: '8%', category: 'Languages' },
    { name: 'Pandas', confidence: 85, x: '42%', y: '8%', category: 'Languages' },
    
    // Frontend & UI
    { name: 'Next.js', confidence: 82, x: '-26%', y: '32%', category: 'Frontend' },
    { name: 'Vite', confidence: 88, x: '26%', y: '32%', category: 'Frontend' },
    { name: 'Framer Motion', confidence: 90, x: '-8%', y: '46%', category: 'Frontend' },
    { name: 'Zustand', confidence: 85, x: '8%', y: '46%', category: 'Frontend' },
    
    // Microsoft Ecosystem
    { name: 'Power Apps', confidence: 90, x: '-46%', y: '0%', category: 'Infrastructure & Tools' },
    { name: 'Power BI', confidence: 82, x: '46%', y: '0%', category: 'Infrastructure & Tools' },
    { name: 'MS Graph API', confidence: 85, x: '-34%', y: '-24%', category: 'Infrastructure & Tools' },
    { name: 'Teams Integration', confidence: 88, x: '34%', y: '-24%', category: 'Infrastructure & Tools' },
    
    // DevOps & Cloud Services
    { name: 'Lambda', confidence: 85, x: '-34%', y: '24%', category: 'Infrastructure & Tools' },
    { name: 'S3', confidence: 88, x: '34%', y: '24%', category: 'Infrastructure & Tools' },
    { name: 'CloudWatch', confidence: 80, x: '-18%', y: '-42%', category: 'Infrastructure & Tools' },
    { name: 'API Gateway', confidence: 82, x: '18%', y: '-42%', category: 'Infrastructure & Tools' },
  ],
}


function MobileSkillsSection() {
  // Track which category dropdown is currently open (null means all are closed)
  const [openCategory, setOpenCategory] = useState('Frontend');
  
  const categories = ['AI/ML Stack', 'Languages', 'Frontend', 'Infrastructure & Tools'];

  // Toggle handler to handle opening, closing, and automatic accordion switching
  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="w-full flex flex-col gap-3 px-1">
      {categories.map((category) => {
        // Dynamically extract the specific skill arrays for this row block
        const categorySkills = skillsData.skills.filter(s => s.category === category);
        const isOpen = openCategory === category;

        return (
          <div 
            key={category} 
            className="w-full rounded-xl border border-border/40 bg-surface/30 overflow-hidden backdrop-blur-sm transition-colors duration-200"
          >
            {/* Accordion Dropdown Header Trigger Button */}
            <button
              onClick={() => handleToggle(category)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
            >
              <span className={`text-xs font-bold tracking-wide transition-colors ${isOpen ? 'text-accent' : 'text-text'}`}>
                {category}
              </span>
              
              {/* Interactive Chevron Rotate Indicator Arrow */}
              <svg
                className={`w-3.5 h-3.5 text-muted transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-accent' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Smoothly Animated Height Container Content Layer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {/* Grid Container Inner Padding Area */}
                  <div className="p-4 pt-0 grid grid-cols-1 gap-2 border-t border-border/20 bg-card/10">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: index * 0.03 }} // Subtle cascade stagger feel
                        className="flex flex-col gap-2 p-3 rounded-lg bg-surface/50 border border-border/30 shadow-sm"
                      >
                        <span className="text-xs font-semibold text-text">
                          {skill.name}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-border/20 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-accent rounded-full" 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.confidence}%` }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-accent">
                            {skill.confidence}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// SUB-COMPONENT: TOOLTIP (Premium UI Variant)
// ============================================================================
function Tooltip({ visible, confidence }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.92, x: "-50%" }}
          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
          exit={{ opacity: 0, y: 6, scale: 0.92, x: "-50%" }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          className="pointer-events-none absolute -top-12 left-1/2 whitespace-nowrap rounded-lg bg-neutral-950/95 dark:bg-white border border-neutral-800 dark:border-neutral-200 px-2.5 py-1 shadow-2xl text-neutral-100 dark:text-neutral-900 font-mono text-[10px] z-[100]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[8px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-bold">Conf</span>
            <div className="h-1 w-10 rounded-full bg-neutral-800 dark:bg-neutral-200 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 0.4, delay: 0.02 }}
              />
            </div>
            <span className="text-[10px] font-bold text-accent">{confidence}%</span>
          </div>
          <div className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border-r border-b border-neutral-800 dark:border-neutral-200 bg-neutral-950/95 dark:bg-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// SUB-COMPONENT: DESKTOP SKILL BADGE
// ============================================================================
function DesktopSkillBadge({ skill, isCore = false }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const style = isCore ? {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  } : {
    left: `calc(50% + ${skill.x})`,
    top: `calc(50% + ${skill.y})`,
    transform: 'translate(-50%, -50%)'
  };

  if (isCore) {
    return (
      <div className="absolute z-30" style={style}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 15 }}
          className="flex items-center justify-center rounded-full font-bold bg-light text-dark dark:bg-light dark:text-dark w-20 h-20 shadow-2xl select-none text-[10px] text-center tracking-wide px-2 leading-tight"
        >
          {skill.name}
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className={`absolute transition-all duration-200 ${showTooltip ? 'z-[60]' : 'z-20'}`} 
      style={style}
    >
      <motion.div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 85, damping: 15, delay: 0.05 }}
        className="cursor-pointer whitespace-nowrap font-semibold bg-light text-dark dark:bg-light dark:text-dark py-1.5 px-3 rounded-full shadow-md text-[10px] select-none"
        whileHover={{ 
          scale: 1.1,
          backgroundColor: 'rgb(88, 230, 217)',
          color: 'rgb(10, 15, 20)',
          boxShadow: '0 0 20px rgba(88, 230, 217, 0.5)'
        }}
        whileTap={{ scale: 0.96 }}
      >
        {skill.name}
        <Tooltip visible={showTooltip} confidence={skill.confidence} />
      </motion.div>
    </div>
  );
}

// ============================================================================
// SUB-COMPONENT: MOBILE SKILL GRID (Recruiter UI)
// ============================================================================


// ============================================================================
// MAIN COMPONENT EXPORT
// ============================================================================
export default function SkillsOrbit() {
  return (
    <section className="relative w-full bg-canvas flex flex-col items-center justify-center overflow-hidden select-none">
      <div className="text-center max-w-lg px-4">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-2">Technical Competency</h2>
        <p className="text-sm text-muted sm:hidden">Hover over engineering nodes to assess production proficiency metrics.</p>
      </div>
      
      {/* 🚀 SCREEN LAYOUT 1: DESKTOP EXPERIMENTAL CANVAS (Hidden on Tablets and Mobiles) */}
      <div className="hidden md:flex lg:flex relative w-full max-w-[860px] aspect-[1.4/1] items-center justify-center bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd rounded-full">
        <DesktopSkillBadge skill={skillsData.core} isCore={true} />
        {skillsData.skills.map((skill) => (
          <DesktopSkillBadge key={skill.name} skill={skill} />
        ))}
      </div>    
        
      {/* 🚀 SCREEN LAYOUT 2: MOBILE-OPTIMIZED GRID (Visible on Tablets and Mobiles) */ }
      <div className="md:hidden lg:hidden w-full max-w-lg">
        <MobileSkillsSection />
      </div>        
    </section>
  );
}