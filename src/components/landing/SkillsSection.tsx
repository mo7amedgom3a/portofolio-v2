'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import Image from 'next/image'
import { Code2, Database, Cloud, Wrench, Sparkles, Server } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50',
    darkBgColor: 'dark:from-indigo-950/30 dark:to-purple-950/30',
    skills: [
      { name: 'Python', level: 90, icon: '/Technology/Python.svg' },
      { name: 'Go', level: 85, icon: '/Technology/go.svg' },
      { name: 'TypeScript', level: 88, icon: '/Technology/typescript.svg' },
      { name: 'C#', level: 82, icon: '/Technology/C.svg' },
      { name: 'JavaScript', level: 90, icon: '/Technology/JavaScript.svg' },
    ],
  },
  {
    title: 'Backend Frameworks',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    darkBgColor: 'dark:from-blue-950/30 dark:to-cyan-950/30',
    skills: [
      { name: 'FastAPI', level: 90, icon: '/Technology/fastapi.svg' },
      { name: 'ASP.NET Core', level: 82, icon: '/Technology/NET.svg' },
      { name: 'Node.js/Express', level: 88, icon: '/Technology/Node.js.svg' },
      { name: 'Gin (Go)', level: 85, icon: '/Technology/go.svg' },
      { name: 'Django', level: 80, icon: '/Technology/Django.svg' },
    ],
  },
  {
    title: 'Cloud & AWS',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
    darkBgColor: 'dark:from-orange-950/30 dark:to-amber-950/30',
    skills: [
      { name: 'AWS Lambda', level: 95, icon: '/Technology/Lambda.svg' },
      { name: 'EC2', level: 90, icon: '/Technology/EC2.svg' },
      { name: 'ECS', level: 90, icon: '/Technology/ecs.svg' },
      { name: 'API Gateway', level: 92, icon: '/Technology/APIGateway.svg' },
      { name: 'S3', level: 88, icon: '/Technology/s3.svg' },

    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Wrench,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    darkBgColor: 'dark:from-emerald-950/30 dark:to-teal-950/30',
    skills: [
      { name: 'Terraform', level: 95, icon: '/Technology/Terraform.svg' },
      { name: 'Docker', level: 92, icon: '/Technology/Docker.svg' },
      { name: 'Kubernetes', level: 85, icon: '/Technology/Kubernetes.svg' },
      { name: 'GitHub Actions', level: 90, icon: '/Technology/Git.svg' },
      { name: 'Ansible', level: 82, icon: '/Technology/Ansible.svg' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    darkBgColor: 'dark:from-violet-950/30 dark:to-purple-950/30',
    skills: [
      { name: 'PostgreSQL', level: 88, icon: '/Technology/PostgreSQL.svg' },
      { name: 'MongoDB', level: 85, icon: '/Technology/MongoDB.svg' },
      { name: 'RDS', level: 88, icon: '/Technology/RDS.svg' },
      { name: 'DynamoDB', level: 88, icon: '/Technology/DynamoDB.svg' },
      { name: 'MySQL', level: 82, icon: '/Technology/MySQL.svg' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50',
    darkBgColor: 'dark:from-pink-950/30 dark:to-rose-950/30',
    skills: [
      { name: 'DataDog', level: 90, icon: '/Technology/datadog.svg' },
      { name: 'Prometheus', level: 85, icon: '/Technology/Prometheus.svg' },
      { name: 'Grafana', level: 82, icon: '/Technology/Grafana.svg' },
      { name: 'ArgoCD', level: 80, icon: '/Technology/ArgoCD.svg' },
      { name: 'CloudWatch', level: 88, icon: '/Technology/CloudWatch.svg' },
    ],
  },
]

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Skills & Expertise</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 transition-colors">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            A comprehensive toolkit honed through years of building diverse applications and solving complex problems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} ${category.darkBgColor} opacity-50 dark:opacity-100`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {skill.icon ? (
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                              />
                            ) : (
                              <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900 rounded">
                                {skill.name.charAt(0)}
                              </span>
                            )}
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'AWS', 'GCP', 'Azure', 'Serverless', 'IaC', 'Pulumi', 'ECR',
              'CloudFront', 'IAM', 'VPC', 'SNS', 'SQS', 'Step Functions',
              'ElastiCache', 'RDS Proxy', 'Bash', 'Linux', 'NGINX', 'Docker',
              'gRPC', 'REST API',
              'Next.js', 'React',
              'Redis', 'RabbitMQ', 'DataDog',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500 shadow-sm cursor-default transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(SkillsSection)
