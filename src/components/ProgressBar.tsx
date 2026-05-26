'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
  color?: string
}

export default function ProgressBar({ progress, color }: ProgressBarProps) {
  const prefersReducedMotion = useReducedMotion()
  const clampedProgress = Math.max(0, Math.min(100, progress))

  return (
    <div
      className="progress-bar-track"
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${clampedProgress}% complete`}
    >
      <motion.div
        className="progress-bar-fill"
        initial={{ width: '0%' }}
        animate={{ width: `${clampedProgress}%` }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
        style={
          color
            ? {
                background: `linear-gradient(90deg, ${color}, ${color}99)`,
              }
            : undefined
        }
      />
    </div>
  )
}
