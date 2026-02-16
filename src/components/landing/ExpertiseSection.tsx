'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { 
  Globe, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Users,
  Sparkles,
  ArrowUpRight,
  Server,
  Container
} from 'lucide-react'

const expertiseAreas = [
  {
    title: 'Cloud Architecture',
    description: 'Designing and implementing scalable cloud-native solutions on AWS. Serverless and microservices architecture expertise with focus on cost optimization.',
    icon: Cloud,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50',
    darkBgColor: 'dark:from-indigo-950/30 dark:to-purple-950/30',
    highlights: ['AWS Certified', 'Serverless', 'Microservices', 'Cost Optimization'],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automating infrastructure provisioning with Terraform, Pulumi, and CloudFormation. Building reusable IaC modules and templates.',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    darkBgColor: 'dark:from-blue-950/30 dark:to-cyan-950/30',
    highlights: ['Terraform', 'Pulumi', 'CloudFormation', 'Automation'],
  },
  {
    title: 'Platform Engineering',
    description: 'Building internal developer platforms and tools that automate infrastructure provisioning and deployment workflows.',
    icon: Server,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    darkBgColor: 'dark:from-violet-950/30 dark:to-purple-950/30',
    highlights: ['Developer Platforms', 'Self-Service', 'IaC', 'Automation'],
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Implementing robust CI/CD pipelines with GitHub Actions, ArgoCD, and automated testing. Achieving 99.9% service availability.',
    icon: Container,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    darkBgColor: 'dark:from-amber-950/30 dark:to-orange-950/30',
    highlights: ['GitHub Actions', 'ArgoCD', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Backend Development',
    description: 'Building scalable APIs and microservices with FastAPI, ASP.NET Core, and Go. Event-driven architecture with SNS/SQS.',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    darkBgColor: 'dark:from-emerald-950/30 dark:to-teal-950/30',
    highlights: ['FastAPI', 'Go', 'Microservices', 'Event-Driven'],
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Reducing cloud costs by 30-50% through architectural improvements, right-sizing, and identifying hidden operational costs.',
    icon: Brain,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'from-rose-50 to-pink-50',
    darkBgColor: 'dark:from-rose-950/30 dark:to-pink-950/30',
    highlights: ['Cost Analysis', 'Architecture Review', 'Savings', 'Optimization'],
  },
]

function ExpertiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="expertise" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-200/50 dark:border-indigo-500/30 mb-6 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Domain Expertise</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 transition-colors">
            Areas of Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Specialized domains where I bring deep knowledge and proven track record of successful project delivery.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.bgColor} ${area.darkBgColor} opacity-50 dark:opacity-100`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-7 h-7 text-white" />
                    </div>

                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {area.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight, hIndex) => (
                      <motion.span
                        key={highlight}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + hIndex * 0.05 + 0.4 }}
                        className="px-3 py-1 text-xs font-medium bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-indigo-200 dark:group-hover:border-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Arrow on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '90%', label: 'Design Time Reduction' },
              { value: '50%', label: 'Cloud Cost Savings' },
              { value: '70%', label: 'Infrastructure Cost Reduction' },
              { value: '99.9%', label: 'Service Availability' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                className="text-center p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(ExpertiseSection)
