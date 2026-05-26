'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { getGreeting } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

interface HeroTileProps {
  name: string
  streak: number
}

export default function HeroTile({ name, streak }: HeroTileProps) {
  const prefersReducedMotion = useReducedMotion()
  const greeting = getGreeting()

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.15,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  }

  return (
    <motion.section
      className="tile hero-tile"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Welcome section"
    >
      <motion.h2 className="hero-greeting" variants={childVariants}>
        {greeting}, {name}! 👋
      </motion.h2>

      <motion.p className="hero-subtitle" variants={childVariants}>
        You&apos;re making great progress. Keep pushing forward and unlock your
        full potential today.
      </motion.p>

      <motion.div
        variants={childVariants}
        style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
      >
        <motion.div
          className="streak-badge"
          whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="streak-badge-emoji">🔥</span>
          <span>{streak}-day streak</span>
        </motion.div>

        <motion.div
          className="streak-badge"
          style={{
            background: 'rgba(96, 165, 250, 0.1)',
            borderColor: 'rgba(96, 165, 250, 0.3)',
            color: 'var(--color-blue-accent)',
          }}
          whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={16} />
          <span>Level 12</span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
