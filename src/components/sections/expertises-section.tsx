import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { EXPERTISES } from '@/lib/constants/expertises'

export function ExpertisesSection() {
  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-2xl">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Nos expertises
          </h2>
          <p className="max-w-2xl text-body-mobile text-secondary-600 md:text-body">
            Des solutions métalliques adaptées à vos ambitions
          </p>
        </div>

        {/* Expertises Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map(expertise => (
            <Link key={expertise.id} href={expertise.href} className="group flex">
              <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-grey-200 bg-white transition-all hover:shadow-lg">
                {/* Image */}
                <div className="relative h-56 flex-shrink-0 overflow-hidden">
                  <Image
                    src={expertise.image}
                    alt={expertise.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                    {expertise.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-secondary-600">
                    {expertise.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary-900 transition-colors group-hover:text-accent-700">
                    <span>En savoir plus</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
