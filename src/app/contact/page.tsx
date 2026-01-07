import * as React from 'react'
import { Metadata } from 'next'
import { ContactForm } from '@/components/sections/contact-form'
import { Mail, Phone, Facebook, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - ITM Construction Métallique',
  description:
    "Contactez ITM Construction Métallique pour votre projet de construction métallique en Côte d'Ivoire. Devis gratuit et personnalisé.",
  openGraph: {
    title: 'Contact - ITM Construction Métallique',
    description:
      "Contactez ITM Construction Métallique pour votre projet de construction métallique en Côte d'Ivoire. Devis gratuit et personnalisé.",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-off-white to-white">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-heading text-section-mobile md:text-section">
              Contactez-nous
            </h1>
            <p className="text-body-mobile text-grey-200 md:text-body">
              Vous avez un projet de construction métallique ? Notre équipe est à votre écoute pour
              vous accompagner et vous proposer des solutions sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="rounded-lg border border-grey-200 bg-white p-6 shadow-lg md:p-8">
                <h2 className="mb-2 font-heading text-h4-mobile text-primary-900 md:text-h4">
                  Demander un devis
                </h2>
                <p className="mb-6 text-body-mobile text-secondary-600">
                  Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 space-y-8 lg:order-2">
              <div>
                <h2 className="mb-6 font-heading text-h4-mobile text-primary-900 md:text-h4">
                  Informations de contact
                </h2>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4 rounded-lg border border-grey-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-900/10">
                      <Phone className="h-6 w-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-primary-900">Téléphone</h3>
                      <a
                        href="tel:+2250777589211"
                        className="text-body-mobile text-secondary-600 transition-colors hover:text-primary-900"
                      >
                        +225 07 77 58 92 11
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 rounded-lg border border-grey-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-900/10">
                      <Mail className="h-6 w-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-primary-900">Email</h3>
                      <a
                        href="mailto:itmcotedivoire@gmail.com"
                        className="break-all text-body-mobile text-secondary-600 transition-colors hover:text-primary-900"
                      >
                        itmcotedivoire@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 rounded-lg border border-grey-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-900/10">
                      <MapPin className="h-6 w-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-primary-900">Localisation</h3>
                      <p className="text-body-mobile text-secondary-600">Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-4 rounded-lg border border-grey-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-900/10">
                      <Facebook className="h-6 w-6 text-primary-900" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-primary-900">Réseaux sociaux</h3>
                      <a
                        href="https://www.facebook.com/profile.php?id=100028848442967"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-mobile text-secondary-600 transition-colors hover:text-primary-900"
                      >
                        ITM sur Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="rounded-lg border border-grey-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-h4-mobile text-primary-900">
                  Pour qui construisons-nous ?
                </h3>
                <ul className="space-y-3 text-body-mobile text-secondary-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
                    <span>Particuliers à fort pouvoir d'achat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
                    <span>Promoteurs immobiliers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
                    <span>Entreprises & institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
                    <span>Investisseurs immobiliers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
