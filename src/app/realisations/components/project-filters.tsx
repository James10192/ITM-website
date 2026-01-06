'use client'

import { Home, DoorOpen, Fence, Armchair, Grid2X2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ProjectCategory, PROJECT_CATEGORIES } from '@/lib/constants/realisations'

const CATEGORY_ICONS = {
  all: Grid2X2,
  maisons: Home,
  portes: DoorOpen,
  palissades: Fence,
  meubles: Armchair,
} as const

interface ProjectFiltersProps {
  activeCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
}

export function ProjectFilters({ activeCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <section className="bg-white py-lg">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PROJECT_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id]
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  'flex items-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-all duration-200 md:px-6 md:py-3 md:text-base',
                  isActive
                    ? 'border-primary-900 bg-primary-900 text-white shadow-lg'
                    : 'border-grey-200 bg-white text-secondary-600 hover:border-primary-900 hover:bg-primary-900/5 hover:text-primary-900'
                )}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
