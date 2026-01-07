'use client'

import { Button } from '@/components/ui/button'
import { ContactModal } from '@/components/sections/contact-modal'

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
          <ContactModal
            title="Parler à un expert IBAK HOME"
            description="Remplissez ce formulaire et notre équipe vous contactera pour discuter de votre projet de maison métallique."
          >
            <Button size="lg">Parler à un expert</Button>
          </ContactModal>
        </div>
      </div>
    </section>
  )
}
