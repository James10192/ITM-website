'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { COMPANY_STORY } from '@/lib/constants/a-propos'

function StoryCard({ milestone, index }: { milestone: typeof COMPANY_STORY[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < COMPANY_STORY.length - 1 && (
        <div className="absolute left-6 top-20 h-full w-0.5 bg-grey-200 md:left-8" />
      )}

      <div className="flex gap-lg">
        {/* Year badge */}
        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-900 shadow-lg md:h-16 md:w-16">
          <span className="font-heading text-small font-bold text-white md:text-body">
            {milestone.year}
          </span>
        </div>

        {/* Content card */}
        <div className="flex-1 rounded-lg border border-grey-200 bg-white p-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="mb-sm font-heading text-h4-mobile font-bold text-primary-900 md:text-h4">
            {milestone.title}
          </h3>
          <p className="text-body-mobile leading-relaxed text-secondary-600 md:text-body">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function CompanyStorySection() {
  return (
    <section className="bg-off-white py-2xl">
      <div className="container-custom">
        <div className="mb-xl text-center">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Notre Histoire
          </h2>
          <p className="mx-auto max-w-3xl text-body-mobile text-secondary-600 md:text-body">
            Une croissance constante portée par l'innovation et l'excellence
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-lg">
          {COMPANY_STORY.map((milestone, index) => (
            <StoryCard key={milestone.year} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
