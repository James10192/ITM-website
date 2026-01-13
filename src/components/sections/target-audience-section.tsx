import { TARGET_AUDIENCES } from '@/lib/constants/target-audience'

export function TargetAudienceSection() {
  return (
    <section className="bg-off-white py-2xl">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-2xl">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Pour qui construisons-nous ?
          </h2>
          <p className="max-w-2xl text-body-mobile text-secondary-600 md:text-body">
            Nos solutions s'adressent à ceux qui recherchent l'excellence et la durabilité
          </p>
        </div>

        {/* Target Audiences Grid */}
        <div className="grid grid-cols-1 gap-px bg-grey-200 md:grid-cols-2 lg:grid-cols-4">
          {TARGET_AUDIENCES.map(audience => {
            const Icon = audience.icon

            return (
              <div
                key={audience.id}
                className="hover:bg-grey-50 group bg-white p-xl transition-colors"
              >
                <div className="mb-lg">
                  <Icon className="h-10 w-10 text-primary-900" strokeWidth={1.5} />
                </div>
                <h3 className="mb-md font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4">
                  {audience.title}
                </h3>
                <p className="text-body-mobile leading-relaxed text-secondary-600">
                  {audience.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
