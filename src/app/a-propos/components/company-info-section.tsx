import { Building2, MapPin, Calendar, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { COMPANY_INFO } from '@/lib/constants/a-propos'

const INFO_ITEMS = [
  {
    icon: Building2,
    label: 'Raison sociale',
    value: COMPANY_INFO.fullName,
  },
  {
    icon: Calendar,
    label: 'Année de création',
    value: COMPANY_INFO.foundedYear.toString(),
  },
  {
    icon: MapPin,
    label: 'Siège social',
    value: COMPANY_INFO.location,
  },
  {
    icon: Briefcase,
    label: 'Forme juridique',
    value: COMPANY_INFO.legalForm,
  },
]

export function CompanyInfoSection() {
  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        <div className="mb-xl text-center">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Notre Entreprise
          </h2>
          <p className="mx-auto max-w-3xl text-body-mobile text-secondary-600 md:text-body">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Layout 2 colonnes: Photo + Cards */}
        <div className="grid grid-cols-1 gap-xl lg:grid-cols-2">
          {/* Colonne gauche: Photo */}
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-[600px]">
            <Image
              src="/images/projects/structure-metallique-01.png"
              alt="ITM Construction Métallique - Structure métallique"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-lg">
              <h3 className="font-heading text-h4 font-bold text-white">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-body-mobile text-grey-200">
                {COMPANY_INFO.location}
              </p>
            </div>
          </div>

          {/* Colonne droite: Cards d'informations */}
          <div className="grid grid-cols-1 gap-lg sm:grid-cols-2">
            {INFO_ITEMS.map((item) => {
              const Icon = item.icon

              return (
                <Card
                  key={item.label}
                  className="border-grey-200 bg-off-white shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="p-lg">
                    <div className="mb-md flex h-14 w-14 items-center justify-center rounded-full bg-primary-900">
                      <Icon className="h-7 w-7 text-accent-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-sm font-heading text-h4-mobile font-semibold text-primary-900">
                      {item.label}
                    </h3>
                    <p className="text-body-mobile leading-relaxed text-secondary-600">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
