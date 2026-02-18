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
                        className="block text-body-mobile text-secondary-600 transition-colors hover:text-primary-900"
                      >
                        +225 07 77 58 92 11
                      </a>
                      <a
                        href="tel:+2250711050619"
                        className="block text-body-mobile text-secondary-600 transition-colors hover:text-primary-900"
                      >
                        +225 07 11 05 06 19
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 rounded-lg border border-grey-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-900/10">
                      <svg className="h-6 w-6 text-primary-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-primary-900">WhatsApp</h3>
                      <a
                        href="https://wa.me/2250711050619"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-mobile text-secondary-600 transition-colors hover:text-primary-900"
                      >
                        +225 07 11 05 06 19
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
