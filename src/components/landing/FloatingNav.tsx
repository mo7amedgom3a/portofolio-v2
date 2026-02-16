'use client'

import { useState, useMemo, memo, useCallback, useEffect } from 'react'
import { Home, Briefcase, Code, GraduationCap, Award, FileBadge } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', href: '#', icon: Home },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Expertise', href: '#expertise', icon: Award },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Certificates', href: '#certificates', icon: FileBadge },
]

function FloatingNav() {
  const [activeSection, setActiveSection] = useState('Home')
  const [isVisible, setIsVisible] = useState(false)

  // Show/hide nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show the nav when scrolling down, hide when at the top
      setIsVisible(window.scrollY > 100) // Adjust threshold as needed
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simple scroll handler using useEffect to update active section
  useEffect(() => {
    const handleScroll = () => {
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].label.toLowerCase()
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(navItems[i].label)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  // Memoize nav buttons to prevent unnecessary re-renders
  const navButtons = useMemo(() => 
    navItems.map((item) => ({
      ...item,
      isActive: activeSection === item.label,
    })),
    [activeSection]
  )

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl transition-colors duration-300">
        {navButtons.map((item) => (
          <NavButton 
            key={item.label} 
            item={item} 
            isActive={item.isActive}
            onClick={scrollToSection} 
          />
        ))}
        
        {/* Theme Toggle */}
        <div className="ml-1 pl-2 border-l border-gray-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

// Memoized nav button component
const NavButton = memo(function NavButton({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: typeof navItems[0]
  isActive: boolean
  onClick: (href: string) => void 
}) {
  return (
    <button
      onClick={() => onClick(item.href)}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive 
          ? 'text-white' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
      }`}
    >
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      )}
      <item.icon className="w-4 h-4 relative z-10" />
      <span className="relative z-10 hidden sm:inline">{item.label}</span>
    </button>
  )
})

export default memo(FloatingNav)
