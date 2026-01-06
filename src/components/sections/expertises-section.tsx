import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { EXPERTISES } from '@/lib/constants/expertises'

export function ExpertisesSection() {
  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-xl text-center">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Nos expertises
          </h2>
          <p className="mx-auto max-w-3xl text-body-mobile text-secondary-600 md:text-body">
            Des solutions métalliques adaptées à vos ambitions
          </p>
        </div>

        {/* Expertises Grid */}
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map((expertise) => (
            <Link key={expertise.id} href={expertise.href} className="group">
              <Card className="h-full overflow-hidden border-grey-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={expertise.image}
                    alt={expertise.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                </div>

                {/* Content */}
                <CardContent className="p-lg">
                  <h3 className="mb-sm font-heading text-h4-mobile font-bold text-primary-900 md:text-h4">
                    {expertise.title}
                  </h3>
                  <p className="mb-md text-body-mobile leading-relaxed text-secondary-600">
                    {expertise.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-small font-semibold text-accent-500 transition-colors group-hover:text-accent-600">
                    <span>En savoir plus</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
