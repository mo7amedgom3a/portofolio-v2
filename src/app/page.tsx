'use client'


import dynamic from 'next/dynamic'
import { GridBackground } from '@/components/landing/GridBackground'
import HeroSection from '@/components/landing/HeroSection'
import FloatingNav from '@/components/landing/FloatingNav'
import SmoothScroll from '@/components/landing/SmoothScroll'
import { ArrowUp, Heart } from 'lucide-react'
import { useState, useEffect, memo } from 'react'

// Lazy load sections below the fold for better initial load performance
const ProjectsSection = dynamic(
  () => import('@/components/landing/ProjectsSection'),
  { loading: () => <SectionLoader /> }
)
const SkillsSection = dynamic(
  () => import('@/components/landing/SkillsSection'),
  { loading: () => <SectionLoader /> }
)
const ExpertiseSection = dynamic(
  () => import('@/components/landing/ExpertiseSection'),
  { loading: () => <SectionLoader /> }
)
const EducationSection = dynamic(
  () => import('@/components/landing/EducationSection'),
  { loading: () => <SectionLoader /> }
)
const CertificatesSection = dynamic(
  () => import('@/components/landing/CertificatesSection'),
  { loading: () => <SectionLoader /> }
)

// Simple loading placeholder
const SectionLoader = memo(function SectionLoader() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full" />
    </div>
  )
})

function Home() {
  const [scaleX, setScaleX] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScaleX(scrollY / docHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 500)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-x-hidden">
        {/* Progress Bar */}
        <div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
          style={{ transform: `scaleX(${scaleX})`, transformOrigin: '0% 0%'}}
        />

        {/* Floating Navigation */}
        <FloatingNav />

        {/* Animated Background */}
        <GridBackground />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section - Above the fold, loads immediately */}
          <HeroSection />

          {/* Projects Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-gray-900/50 to-transparent pointer-events-none transition-colors" />
            <ProjectsSection />
          </div>

          {/* Skills Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 dark:via-indigo-950/20 to-transparent pointer-events-none transition-colors" />
            <SkillsSection />
          </div>

          {/* Expertise Section */}
          <ExpertiseSection />

          {/* Education Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 dark:via-purple-950/20 to-transparent pointer-events-none transition-colors" />
            <EducationSection />
          </div>

          {/* Certificates Section */}
          <CertificatesSection />

          {/* Footer */}
          <footer className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent mb-12 transition-colors" />
              
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
                  Designed & Built with{' '}
                  <span className="inline-block text-red-500">
                    <Heart className="w-4 h-4 inline fill-current" />
                  </span>{' '}
                  using Next.js, Tailwind CSS & Framer Motion
                </p>
                
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  © {new Date().getFullYear()} Mohamed Gomaa. All rights reserved.
                </p>

                {/* Social Links in Footer */}
                <div className="flex justify-center gap-4 mt-6">
                  {[
                    { name: 'GitHub', href: 'https://github.com/mo7amedgom3a' },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-gomaa-mohamed/' },
                    { name: 'Portfolio', href: 'https://mohamedgomaa.vercel.app' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors animated-underline"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg flex items-center justify-center z-50 hover:shadow-xl transition-all duration-300 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </main>
    </SmoothScroll>
  )
}

export default memo(Home)
