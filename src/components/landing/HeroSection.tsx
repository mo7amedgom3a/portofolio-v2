'use client'

import { ArrowDown, Download, Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { memo, useEffect, useState } from 'react'

function HeroSection() {
  const titles = ['Cloud', 'DevOps']
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopIndex, setLoopIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[loopIndex]
      
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1))
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1))
        if (displayText === '') {
          setIsDeleting(false)
          setLoopIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, loopIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Image with Enhanced Glow */}
        <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mb-8">
          {/* Animated Glow Rings */}
          <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 dark:opacity-30 blur-2xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-60 dark:opacity-40" />
          
          {/* Profile Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-gray-700/50 shadow-2xl backdrop-blur-sm">
            <Image
              src="/profile.png"
              alt="Mohamed Gomaa"
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          {/* Animated Border Ring */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Location Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-sm text-gray-600 dark:text-gray-300 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            <span>Cairo, Egypt</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-white dark:via-indigo-200 dark:to-purple-200">
            Mohamed Gomaa
          </span>
        </h1>

        {/* Title Badge with Shimmer Effect */}
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 dark:opacity-40" />
            <span className="relative inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/50 dark:via-purple-950/50 dark:to-pink-950/50 border border-indigo-200/50 dark:border-indigo-500/30 backdrop-blur-sm transition-colors">
              <span className="text-lg sm:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 transition-colors">
                Backend & <span className="text-indigo-600 dark:text-indigo-400">{displayText}<span className="border-r-2 border-indigo-600 dark:border-indigo-400 animate-pulse ml-0.5" /></span> Engineer
              </span>
            </span>
          </div>
        </div>

        {/* Summary with Enhanced Typography */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
          Building scalable{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">cloud-native platforms</span>{' '}
          and <span className="text-purple-600 dark:text-purple-400 font-medium">infrastructure automation</span>{' '}
          solutions. Founded{' '}
          <span className="text-pink-600 dark:text-pink-400 font-medium">CloudCanvas</span> - reducing architecture design time by up to 90% and cloud costs by 30-50%.
        </p>

        {/* CTA Buttons with Enhanced Effects */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className="relative group px-8 py-4 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 blur-xl opacity-50 transition-opacity" />
            <span className="relative flex items-center gap-2 text-white font-semibold">
              <Mail className="w-5 h-5" />
              Get in Touch
            </span>
          </button>
          
          <button
            className="group px-8 py-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold shadow-lg flex items-center gap-2 hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
          >
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>

        {/* Social Links with Enhanced Hover Effects */}
        <div className="flex justify-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/mo7amedgom3a', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-gomaa-mohamed/', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500' },
            { Icon: ExternalLink, href: 'https://mohamedgomaa.vercel.app', label: 'Portfolio', color: 'hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500' },
          ].map(({ Icon, href, label, color }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-lg transition-all ${color}`}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(HeroSection)
