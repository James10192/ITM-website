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
    <section className="bg-white py-2xl">
      <div className="container-custom">
        <h2 className="mb-xl text-center font-heading text-section-mobile font-bold text-primary-900 md:text-section">
          Avantages clés
        </h2>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
          {IBAK_BENEFITS.map((benefit) => {
            const Icon = BENEFIT_ICONS[benefit.id]
            return (
              <Card key={benefit.id} className="border-grey-200 shadow-lg">
                <CardHeader>
                  <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-primary-900">
                    <Icon className="h-8 w-8 text-accent-500" stroke={1.5} />
                  </div>
                  <CardTitle className="text-primary-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-mobile leading-relaxed text-secondary-600 md:text-body">
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
