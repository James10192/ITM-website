'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project, PROJECT_CATEGORIES } from '@/lib/constants/realisations'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryLabel =
    PROJECT_CATEGORIES.find(cat => cat.id === project.category)?.label || project.category

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group h-full overflow-hidden rounded-2xl border border-grey-200 bg-white transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-grey-100 md:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badge catégorie */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-medium text-primary-900 backdrop-blur-sm">
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Titre */}
        <h3 className="mb-2 font-heading text-xl font-semibold text-primary-900">
          {project.title}
        </h3>

        {/* Objectif client */}
        <p className="text-sm leading-relaxed text-secondary-600">{project.clientObjective}</p>
      </div>
    </motion.article>
  )
}
