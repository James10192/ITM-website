import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="bg-off-white py-2xl">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-md font-heading text-subsection-mobile font-bold text-primary-900 md:text-subsection">
            Prêt à investir dans votre maison IBAK HOME ?
          </h2>
          <p className="mb-lg text-body-mobile text-secondary-600 md:text-body">
            Notre équipe d&apos;experts vous accompagne de la conception à la livraison. Parlons de
            votre projet dès aujourd&apos;hui.
          </p>
          <Button asChild size="lg">
            <Link href="/contact?project=maison">Parler à un expert</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
