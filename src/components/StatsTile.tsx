'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { BookOpen, Clock, Trophy, Target } from 'lucide-react'

const stats = [
  {
    label: 'Courses Active',
    value: '6',
    change: '+2 this week',
    positive: true,
    icon: BookOpen,
    color: '#60A5FA',
  },
  {
    label: 'Hours Learned',
    value: '47',
    change: '+8.5 hrs',
    positive: true,
    icon: Clock,
    color: '#34D399',
  },
  {
    label: 'Achievements',
    value: '12',
    change: '+3 new',
    positive: true,
    icon: Trophy,
    color: '#FBBF24',
  },
  {
    label: 'Avg. Score',
    value: '94%',
    change: '+2.1%',
    positive: true,
    icon: Target,
    color: '#A78BFA',
  },
]

export default function StatsTile() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      className="tile stats-tile"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: prefersReducedMotion ? 0 : 0.15,
      }}
      aria-label="Learning statistics"
    >
      <div className="tile-header">
        <h3 className="tile-title">Quick Stats</h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem',
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.3 + i * 0.1,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.25rem',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 'var(--radius-sm)',
                  background: `${stat.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <stat.icon size={14} color={stat.color} />
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
            <span className="stat-value">{stat.value}</span>
            <span
              className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}
            >
              {stat.positive ? '↑' : '↓'} {stat.change}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
