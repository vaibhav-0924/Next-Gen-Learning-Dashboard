'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { useMemo } from 'react'

function generateActivityData(): number[][] {
  // Generate deterministic-looking random activity data
  const seed = 42
  const data: number[][] = []
  let s = seed
  for (let week = 0; week < 7; week++) {
    const weekData: number[] = []
    for (let day = 0; day < 7; day++) {
      s = (s * 1103515245 + 12345) & 0x7fffffff
      weekData.push(s % 5)
    }
    data.push(weekData)
  }
  return data
}

export default function ActivityTile() {
  const prefersReducedMotion = useReducedMotion()
  const activityData = useMemo(() => generateActivityData(), [])
  const totalContributions = useMemo(
    () => activityData.flat().reduce((sum, val) => sum + val, 0),
    [activityData]
  )

  return (
    <motion.section
      className="tile"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: prefersReducedMotion ? 0 : 0.6,
      }}
      aria-label="Activity overview"
    >
      <div className="tile-header">
        <h3 className="tile-title">
          <Activity size={16} color="var(--color-blue-accent)" />
          Activity
        </h3>
        <span className="tile-badge">This Month</span>
      </div>

      {/* Contribution Graph */}
      <div className="activity-grid">
        {activityData.map((week, weekIdx) => (
          <div key={weekIdx} className="activity-week">
            {week.map((level, dayIdx) => (
              <motion.div
                key={dayIdx}
                className={`activity-dot ${level > 0 ? `level-${level}` : ''}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: prefersReducedMotion
                    ? 0
                    : 0.8 + (weekIdx * 7 + dayIdx) * 0.015,
                  type: 'spring',
                  stiffness: 400,
                  damping: 15,
                }}
                title={`${level} contribution${level !== 1 ? 's' : ''}`}
              />
            ))}
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: '0.75rem',
          color: 'var(--color-slate-400)',
          marginTop: '0.75rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {totalContributions} contributions this month
      </p>
    </motion.section>
  )
}
