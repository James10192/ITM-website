'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProjectFilters } from './project-filters'
import { ProjectCard } from './project-card'
import { ProjectCategory, getProjectsByCategory } from '@/lib/constants/realisations'

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const filteredProjects = getProjectsByCategory(activeCategory)

  return (
    <>
      {/* Filtres */}
      <ProjectFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Galerie de projets */}
      <section className="bg-off-white py-2xl">
        <div className="container-custom">
          {/* Compteur de projets */}
          <div className="mb-xl text-center">
            <p className="text-body-mobile text-secondary-600 md:text-body">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''}{' '}
              {activeCategory !== 'all' && (
                <>
                  dans la catégorie{' '}
                  <span className="font-semibold text-primary-900">
                    {
                      {
                        maisons: 'Maisons métalliques',
                        portes: 'Portes et portails',
                        palissades: 'Palissades et clôtures',
                        meubles: 'Mobilier métallique',
                      }[activeCategory]
                    }
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Grille de projets */}
          <AnimatePresence mode="wait">
            <div
              key={activeCategory}
              className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </AnimatePresence>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="py-2xl text-center">
              <p className="text-body text-secondary-600">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
