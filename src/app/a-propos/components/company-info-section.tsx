import { Building2, MapPin, Calendar, Briefcase } from 'lucide-react'
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
        <div className="mb-2xl">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Notre Entreprise
          </h2>
          <p className="max-w-2xl text-body-mobile text-secondary-600 md:text-body">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Layout 2 colonnes: Photo + Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Colonne gauche: Photo */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[600px]">
            <Image
              src="/images/projects/structure-metallique-01.png"
              alt="ITM Construction Métallique - Structure métallique"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Colonne droite: Cards d'informations */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INFO_ITEMS.map(item => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="hover:bg-grey-50 rounded-2xl border border-grey-200 bg-white p-6 transition-colors"
                >
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-primary-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-sm font-medium text-secondary-600">{item.label}</h3>
                  <p className="font-heading text-lg font-semibold text-primary-900">
                    {item.value}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
