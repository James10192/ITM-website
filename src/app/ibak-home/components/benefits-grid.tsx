import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  IconClock,
  IconRefresh,
  IconTool,
  IconHome,
  IconUmbrella,
} from '@tabler/icons-react'
import { IBAK_BENEFITS } from '@/lib/constants/ibak-home'

const BENEFIT_ICONS = {
  'construction-rapide': IconClock,
  'deplacable': IconRefresh,
  'faible-entretien': IconTool,
  'architecture': IconHome,
  'resistance': IconUmbrella,
} as const

export function BenefitsGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-grey-50 via-white to-grey-100/60 py-2xl">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary-800/10 blur-3xl" />
      <div className="container-custom">
        <h2 className="mb-xl text-center font-heading text-section-mobile font-bold text-primary-900 md:text-section">
          Avantages clés
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {IBAK_BENEFITS.map((benefit) => {
            const Icon = BENEFIT_ICONS[benefit.id]
            return (
              <Card
                key={benefit.id}
                className="group relative overflow-hidden border-grey-200/70 bg-white/90 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-[0_24px_70px_-40px_rgba(15,23,42,0.65)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500 via-primary-800 to-secondary-500" />
                <CardHeader className="relative">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-secondary-500">
                    IBAK HOME
                  </span>
                  <div className="mb-md mt-sm flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-900/95 ring-1 ring-white/10 shadow-inner transition duration-300 group-hover:scale-105">
                    <Icon className="h-8 w-8 text-accent-500" stroke={1.5} />
                  </div>
                  <CardTitle className="text-primary-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-mobile leading-relaxed text-secondary-700 md:text-body">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
