'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  GraduationCap,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/', active: true },
  { label: 'My Courses', icon: BookOpen, href: '/' },
  { label: 'Progress', icon: TrendingUp, href: '/' },
  { label: 'Schedule', icon: Calendar, href: '/' },
]

const bottomItems = [
  { label: 'Settings', icon: Settings, href: '/' },
  { label: 'Help', icon: HelpCircle, href: '/' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSidebar = useCallback(() => setIsOpen(false), [])
  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`sidebar ${isOpen ? 'open' : ''}`}
        aria-label="Main navigation"
        role="navigation"
      >
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <GraduationCap size={22} color="#fff" />
          </div>
          <span className="sidebar-logo-text">LearnHub</span>
        </div>

        {/* Main Nav */}
        <div className="sidebar-nav">
          <div className="sidebar-section-label">Main Menu</div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
              onClick={closeSidebar}
              aria-current={item.active ? 'page' : undefined}
            >
              <div className="sidebar-link-icon">
                <item.icon size={18} />
              </div>
              <span>{item.label}</span>
            </a>
          ))}

          <div style={{ marginTop: '1.5rem' }}>
            <div className="sidebar-section-label">Support</div>
            {bottomItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={closeSidebar}
              >
                <div className="sidebar-link-icon">
                  <item.icon size={18} />
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom User Section */}
        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="sidebar-avatar">SJ</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">Samantha J.</div>
              <div className="sidebar-user-role">Pro Learner</div>
            </div>
          </div>
          <a
            href="/"
            className="sidebar-link"
            style={{ marginTop: '0.5rem', color: 'var(--color-rose)' }}
          >
            <div className="sidebar-link-icon">
              <LogOut size={18} />
            </div>
            <span>Sign Out</span>
          </a>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />
    </>
  )
}
