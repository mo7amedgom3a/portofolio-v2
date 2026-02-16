'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef, memo } from 'react'

const projects = [
  {
    title: 'CloudCanvas',
    description: 'Visual cloud architecture design platform that automatically generates production-ready IaC (Terraform, Pulumi, CloudFormation) with real-time cost estimation.',
    image: '/projects/cloudcanvas.png',
    tags: ['AWS', 'Terraform', 'TypeScript', 'Next.js'],
    color: 'from-indigo-500 to-purple-500',
    link: 'https://cloudcanvas.vercel.app/',
    github: '#',
  },
  {
    title: 'Serverless E-Commerce Platform',
    description: 'Fully serverless e-commerce platform using AWS Lambda, API Gateway, and DynamoDB. Reduced infrastructure costs by 70%.',
    image: '/projects/serverless-ecommerce.png',
    tags: ['AWS Lambda', 'Redis', 'Go', 'Python'],
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    github: 'https://github.com/mo7amedgom3a/Serverless-ECommerce-Platform',
  },
  {
    title: 'Easy Deploy Platform',
    description: 'DevOps automation platform for zero-intervention deployments to AWS. Reduced deployment time by 85%. Graduation Project.',
    image: '/projects/easy-deploy.png',
    tags: ['Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    github: '#',
  },
  {
    title: "Programmer's Social Hub",
    description: 'Microservices-based developer collaboration platform with gRPC and RabbitMQ for async communication.',
    image: '/projects/microservices.png',
    tags: ['.NET', 'Next.js', 'Docker', 'Kubernetes'],
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    github: 'https://github.com/mo7amedgom3a/Programmers-Social-Hub',
  },
]

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 transition-colors">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Showcasing cloud-native platforms, infrastructure automation, and scalable backend systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 dark:opacity-20`} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6 gap-4"
                  >
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
                  style={{ padding: '2px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:from-indigo-100 dark:hover:from-indigo-900/50 hover:to-purple-100 dark:hover:to-purple-900/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(ProjectsSection)
