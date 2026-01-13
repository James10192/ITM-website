'use client'

import Image from 'next/image'
import { Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { Project, PROJECT_CATEGORIES } from '@/lib/constants/realisations'
import { Card, CardContent } from '@/components/ui/card'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryLabel =
    PROJECT_CATEGORIES.find((cat) => cat.id === project.category)?.label || project.category

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border-grey-200 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden bg-grey-100 md:h-72">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Badge catégorie */}
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-900 shadow-lg backdrop-blur-sm">
              {categoryLabel}
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Titre */}
          <h3 className="mb-3 font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4">
            {project.title}
          </h3>

          {/* Objectif client */}
          <div className="flex items-start gap-2">
            <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500" />
            <p className="text-sm leading-relaxed text-secondary-600">{project.clientObjective}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
