'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Course } from '@/lib/types'
import { getLucideIcon } from '@/lib/icons'
import { getCourseStatus, getProgressColor } from '@/lib/utils'
import ProgressBar from './ProgressBar'

interface CourseTileProps {
  course: Course
  index: number
}

const iconColors: Record<string, string> = {
  Code: '#60A5FA',
  Palette: '#F472B6',
  BarChart3: '#34D399',
  Zap: '#FBBF24',
  BookOpen: '#A78BFA',
  FileCode: '#FB923C',
  Layers: '#38BDF8',
  Globe: '#2DD4BF',
  Cpu: '#E879F9',
  Database: '#4ADE80',
  Lightbulb: '#FCD34D',
  Flame: '#F87171',
}

export default function CourseTile({ course, index }: CourseTileProps) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = getLucideIcon(course.icon_name)
  const iconColor = iconColors[course.icon_name] || '#60A5FA'
  const status = getCourseStatus(course.progress)
  const progressColor = getProgressColor(course.progress)

  return (
    <motion.article
      className="tile course-tile"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.03,
              y: -4,
            }
      }
      whileTap={{ scale: 0.98 }}
      style={{ willChange: 'transform' }}
      aria-label={`${course.title}: ${course.progress}% complete`}
    >
      {/* Icon */}
      <div
        className="course-icon-wrapper"
        style={{
          background: `${iconColor}15`,
        }}
      >
        <Icon size={22} color={iconColor} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="course-title">{course.title}</h3>

      {/* Progress Bar */}
      <ProgressBar progress={course.progress} color={progressColor} />

      {/* Meta */}
      <div className="course-meta">
        <span className="course-progress-text">{course.progress}%</span>
        <span
          className="course-status"
          style={{
            background: `${status.color}15`,
            color: status.color,
          }}
        >
          {status.label}
        </span>
      </div>
    </motion.article>
  )
}
