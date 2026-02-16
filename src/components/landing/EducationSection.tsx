'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { GraduationCap, Award, BookOpen, Sparkles, Calendar, MapPin } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Assiut University',
    location: 'Assiut, Egypt',
    period: '2021 - 2025',
    description: 'Comprehensive computer science curriculum with focus on software engineering, algorithms, and cloud computing.',
    achievements: [
      'GPA: 3.3/4.0',
      'Cloud Computing Specialization',
      'Graduation Project: Easy Deploy Platform',
    ],
    color: 'from-indigo-500 to-purple-500',
    icon: GraduationCap,
  },
]

function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Education</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 transition-colors">
            Academic Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            A solid educational foundation that has shaped my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ y: 50, opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { y: 0, opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-1/2 z-10"
                />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Icon & Period */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Degree & School */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                      <span>{edu.school}</span>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{edu.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ x: -10, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + achIndex * 0.05 + 0.5 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-indigo-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Gradient accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} rounded-b-2xl`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(EducationSection)
