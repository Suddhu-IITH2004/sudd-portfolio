import { useState } from 'react'
import { motion } from 'framer-motion'

const achievements = [
  {
    name: 'IEEE Publication',
    image: '/badges/ieee.png',
    description: 'INDICON 2023 - Multiscale 3D Visualisation',
  },
  {
    name: 'IIT Hyderabad',
    image: '/badges/iith.jpg',
    description: 'B.Tech - CGPA 9.02/10.0',
  },
  {
    name: 'Microsoft Azure Certified',
    image: '/badges/microsoft-certified-fundamentals-badge.svg',
    description: 'Azure Fundamentals AZ-900',
  },
  {
    name: 'Milan Innovation',
    image: '/badges/milan.jpg',
    description: 'Innovation & Entrepreneurship',
  },
  {
    name: 'NSS General Secretary',
    image: '/badges/nss.jpg',
    description: 'Led 2,000+ students in social initiatives',
  },
  {
    name: 'Credly Achievement 1',
    image: '/badges/organizations_023bc5e2-4d1b-84cd-8215-0196d75420c8_issuers_b7f67357-9b11-4a49-889a-08ddb4612ba5_achievements_a47d960d-5546-8062-85e9-019afca0a5e5_a47d960d-5546-8062-85e9-019afca0a5e5.png',
    description: 'Professional Certification',
  },
  {
    name: 'Credly Achievement 2',
    image: '/badges/organizations_023bc5e2-4d1b-84cd-8215-0196d75420c8_issuers_b7f67357-9b11-4a49-889a-08ddb4612ba5_achievements_d54af2b9-c323-8d3b-8c0f-019bbb218018_d54af2b9-c323-8d3b-8c0f-019bbb218018.png',
    description: 'Professional Certification',
  },
  {
    name: 'SIC IIT Hyderabad',
    image: '/badges/sic_iith.png',
    description: 'Student Innovation Council',
  },
  {
    name: 'Tinkerers Lab IIT Hyderabad',
    image: '/badges/tl_iith.png',
    description: 'Software & Simulations Head',
  },
]

function AchievementBadge({ achievement, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] mx-4 sm:mx-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass-panel p-4 sm:p-5 md:p-6 h-full flex flex-col items-center justify-center gap-3 sm:gap-4">
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={achievement.image}
            alt={achievement.name}
            className={`w-full h-full object-contain transition-all duration-500 ${
              isHovered ? 'filter-none' : 'grayscale contrast-[1.1]'
            }`}
          />
        </div>
        <div className="text-center">
          <h3 className="text-xs sm:text-sm font-semibold text-text line-clamp-2">
            {achievement.name}
          </h3>
          <p className="text-[10px] sm:text-xs text-muted/70 mt-1 line-clamp-2">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function AchievementsCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate achievements for seamless infinite scroll
  const duplicatedAchievements = [...achievements, ...achievements]

  return (
    <div className="w-full overflow-hidden py-8 sm:py-12 md:py-16">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-3 sm:mb-4">
          Achievements & Certifications
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto px-4">
          Recognition and certifications earned through academic excellence, research publications, 
          leadership roles, and professional development
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{
            x: isPaused ? 0 : [0, -100 * achievements.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
          style={{ willChange: 'transform' }}
        >
          {duplicatedAchievements.map((achievement, index) => (
            <AchievementBadge
              key={`${achievement.name}-${index}`}
              achievement={achievement}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs sm:text-sm text-muted/60 italic">
          Hover over badges to pause and view details
        </p>
      </div>
    </div>
  )
}
