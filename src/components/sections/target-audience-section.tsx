import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { TARGET_AUDIENCES } from '@/lib/constants/target-audience'

export function TargetAudienceSection() {
  return (
    <section className="bg-off-white py-2xl">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-xl text-center">
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Pour qui construisons-nous ?
          </h2>
          <p className="mx-auto max-w-3xl text-body-mobile text-secondary-600 md:text-body">
            Nos solutions s'adressent à ceux qui recherchent l'excellence et la durabilité
          </p>
        </div>

        {/* Target Audiences Grid */}
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
          {TARGET_AUDIENCES.map((audience) => {
            const Icon = audience.icon

            return (
              <Card
                key={audience.id}
                className="border-grey-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-primary-900">
                    <Icon className="h-8 w-8 text-accent-500" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-h4-mobile font-bold text-primary-900 md:text-h4">
                    {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-mobile leading-relaxed text-secondary-600">
                    {audience.description}
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
