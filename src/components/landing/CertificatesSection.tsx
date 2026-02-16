'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import Image from 'next/image'
import { 
  Award, 
  ExternalLink, 
  Sparkles,
  Calendar,
  Building2,
  CheckCircle2
} from 'lucide-react'

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    issueDate: 'October 2025',
    expiryDate: 'October 2028',
    credentialId: 'SAA-C03',
    verifyUrl: 'https://www.credly.com/badges/24f40222-3340-4c6c-981c-e5374af0b9f4',
    image: '/certificates/aws-sa.png',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
    darkBgColor: 'dark:from-orange-950/30 dark:to-amber-950/30',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    issueDate: 'June 2025',
    expiryDate: 'June 2028',
    credentialId: 'CLF-C02',
    verifyUrl: 'https://www.credly.com/badges/8e1e3b2d-04ca-487a-bfc2-95669cf5771c',
    image: '/certificates/aws.jpeg',
    color: 'from-blue-500 to-sky-500',
    bgColor: 'from-blue-50 to-sky-50',
    darkBgColor: 'dark:from-blue-950/30 dark:to-sky-950/30',
  },
  {
    title: 'ALX Software Engineering',
    organization: 'ALX Africa',
    issueDate: '2024',
    expiryDate: '',
    credentialId: '',
    verifyUrl: '',
    image: '/certificates/alx.png',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    darkBgColor: 'dark:from-purple-950/30 dark:to-pink-950/30',
  },
]

function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Certifications</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 transition-colors">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Industry-recognized certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 dark:opacity-20`} />
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  {cert.verifyUrl && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6 gap-4"
                    >
                      <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="truncate">{cert.organization}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                    {cert.expiryDate && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>Valid until: {cert.expiryDate}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
                  style={{ padding: '2px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="w-4 h-4" />
            View All Certifications
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(CertificatesSection)
