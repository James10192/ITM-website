import { ShieldCheck, Clock, Eye, Handshake } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { COMMITMENTS } from '@/lib/constants/a-propos'

const COMMITMENT_ICONS = {
  'shield-check': ShieldCheck,
  clock: Clock,
  eye: Eye,
  handshake: Handshake,
} as const

export function CommitmentsSection() {
  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        <div className="mb-xl text-center">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Nos engagements
          </h2>
          <p className="mx-auto max-w-3xl text-body-mobile text-secondary-600 md:text-body">
            Des valeurs fortes qui guident chaque projet et garantissent votre satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((commitment) => {
            const Icon = COMMITMENT_ICONS[commitment.icon as keyof typeof COMMITMENT_ICONS]

            return (
              <Card
                key={commitment.id}
                className="border-grey-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-primary-900">
                    <Icon className="h-8 w-8 text-accent-500" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-primary-900">{commitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-mobile leading-relaxed text-secondary-600 md:text-body">
                    {commitment.description}
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
