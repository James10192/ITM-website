import { IconClock, IconRefresh, IconTool, IconHome, IconUmbrella } from '@tabler/icons-react'
import { IBAK_BENEFITS } from '@/lib/constants/ibak-home'

const BENEFIT_ICONS = {
  'construction-rapide': IconClock,
  deplacable: IconRefresh,
  'faible-entretien': IconTool,
  architecture: IconHome,
  resistance: IconUmbrella,
} as const

export function BenefitsGrid() {
  const benefits = IBAK_BENEFITS.map(benefit => ({
    ...benefit,
    icon: BENEFIT_ICONS[benefit.id],
  }))

  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        <div className="mb-2xl">
          <h2 className="font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Pourquoi choisir IBAK HOME
          </h2>
          <p className="mt-md max-w-2xl text-body-mobile text-secondary-600 md:text-body">
            Des solutions de construction métallique pensées pour l'excellence et la durabilité
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Featured card - spans 2 columns */}
          {benefits[0] && (
            <div className="group relative overflow-hidden rounded-2xl border border-grey-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl lg:col-span-2">
              <div className="mb-6">
                {(() => {
                  const Icon = benefits[0].icon
                  return <Icon className="h-12 w-12 text-primary-900" stroke={1.5} />
                })()}
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                {benefits[0].title}
              </h3>
              <p className="text-base leading-relaxed text-secondary-600">
                {benefits[0].description}
              </p>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-500/5" />
            </div>
          )}

          {/* Regular card */}
          {benefits[1] && (
            <div className="group relative overflow-hidden rounded-2xl border border-grey-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl lg:col-span-1">
              <div className="mb-6">
                {(() => {
                  const Icon = benefits[1].icon
                  return <Icon className="h-10 w-10 text-primary-900" stroke={1.5} />
                })()}
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                {benefits[1].title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary-600">
                {benefits[1].description}
              </p>
            </div>
          )}

          {/* Tall card - spans 2 rows */}
          {benefits[2] && (
            <div className="group relative overflow-hidden rounded-2xl border border-grey-200 bg-gradient-to-br from-primary-900 to-primary-800 p-8 text-white shadow-sm transition-all hover:shadow-xl lg:row-span-2">
              <div className="mb-6">
                {(() => {
                  const Icon = benefits[2].icon
                  return <Icon className="h-12 w-12 text-accent-500" stroke={1.5} />
                })()}
              </div>
              <h3 className="mb-3 font-heading text-2xl font-semibold">{benefits[2].title}</h3>
              <p className="text-base leading-relaxed text-grey-200">{benefits[2].description}</p>
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/10" />
            </div>
          )}

          {/* Regular card */}
          {benefits[3] && (
            <div className="group relative overflow-hidden rounded-2xl border border-grey-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl lg:col-span-1">
              <div className="mb-6">
                {(() => {
                  const Icon = benefits[3].icon
                  return <Icon className="h-10 w-10 text-primary-900" stroke={1.5} />
                })()}
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                {benefits[3].title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary-600">
                {benefits[3].description}
              </p>
            </div>
          )}

          {/* Wide card - spans 2 columns */}
          {benefits[4] && (
            <div className="group relative overflow-hidden rounded-2xl border border-grey-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl lg:col-span-2">
              <div className="mb-6">
                {(() => {
                  const Icon = benefits[4].icon
                  return <Icon className="h-10 w-10 text-primary-900" stroke={1.5} />
                })()}
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                {benefits[4].title}
              </h3>
              <p className="text-base leading-relaxed text-secondary-600">
                {benefits[4].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
