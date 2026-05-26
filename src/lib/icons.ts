import {
  Code,
  Palette,
  BarChart3,
  Zap,
  BookOpen,
  Lightbulb,
  Layers,
  Globe,
  Cpu,
  Database,
  FileCode,
  Flame,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  BarChart3,
  Zap,
  BookOpen,
  Lightbulb,
  Layers,
  Globe,
  Cpu,
  Database,
  FileCode,
  Flame,
}

/**
 * Resolves a string icon name to its corresponding Lucide React icon component.
 * Falls back to BookOpen if the icon name is not found.
 */
export function getLucideIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || BookOpen
}
