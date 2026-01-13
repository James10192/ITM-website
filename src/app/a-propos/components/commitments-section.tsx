import { ShieldCheck, Clock, Eye, Handshake } from 'lucide-react'
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
        <div className="mb-2xl">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Nos engagements
          </h2>
          <p className="max-w-2xl text-body-mobile text-secondary-600 md:text-body">
            Des valeurs fortes qui guident chaque projet et garantissent votre satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-grey-200 md:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map(commitment => {
            const Icon = COMMITMENT_ICONS[commitment.icon as keyof typeof COMMITMENT_ICONS]

            return (
              <div
                key={commitment.id}
                className="hover:bg-grey-50 group bg-white p-xl transition-colors"
              >
                <div className="mb-lg">
                  <Icon className="h-10 w-10 text-primary-900" strokeWidth={1.5} />
                </div>
                <h3 className="mb-md font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4">
                  {commitment.title}
                </h3>
                <p className="text-body-mobile leading-relaxed text-secondary-600 md:text-body">
                  {commitment.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
