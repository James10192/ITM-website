'use client'

import { ExternalLink, Quote, Play } from 'lucide-react'

const FACEBOOK_VIDEO_URL = 'https://www.facebook.com/share/r/1DFwGM5mNo/'

const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'M. Kouassi Jean-Marc',
    role: 'Particulier — Abidjan, Cocody',
    quote:
      "ITM a transformé notre vision en réalité. Le portail et la clôture sont d'une qualité irréprochable, livrés dans les délais convenus. Je recommande sans hésitation.",
    initial: 'K',
  },
  {
    id: 'testimonial-2',
    name: 'Mme Diallo Aminata',
    role: 'Promoteur immobilier',
    quote:
      "Partenaire de confiance depuis deux ans. La rigueur technique et le professionnalisme de l'équipe ITM font toute la différence sur nos chantiers.",
    initial: 'D',
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-2xl">
      {/* Motif de fond subtil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Accent décoratif */}
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-60" />

      <div className="container-custom relative z-10">

        {/* En-tête de section */}
        <div className="mb-2xl text-center">
          <p className="mb-sm font-heading text-small font-semibold uppercase tracking-widest text-accent-500">
            Témoignages clients
          </p>
          <h2 className="mb-md font-heading text-section-mobile font-bold text-white md:text-section">
            Ils nous font confiance
          </h2>
          <p className="mx-auto max-w-xl text-body-mobile leading-relaxed text-grey-200 md:text-body">
            Un témoignage authentique vaut mieux qu&apos;un long discours.
            Voici ce que nos clients disent de leur expérience avec ITM.
          </p>
        </div>

        {/* Layout principal : vidéo + cards */}
        <div className="grid grid-cols-1 gap-xl lg:grid-cols-5">

          {/* Bloc vidéo — 3 colonnes sur 5 */}
          <div className="lg:col-span-3">
            <a
              href={FACEBOOK_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent-500/40 hover:bg-white/10"
              aria-label="Regarder le témoignage client ITM sur Facebook"
            >
              {/* Label */}
              <div className="absolute left-md top-md z-10 flex items-center gap-xs rounded-full bg-accent-500/90 px-sm py-1 backdrop-blur-sm">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                <span className="text-xs font-semibold uppercase tracking-wide text-white">
                  Vidéo témoignage
                </span>
              </div>

              {/* Vignette de lecture */}
              <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-md bg-gradient-to-br from-primary-800 to-primary-900">
                {/* Cercle play */}
                <div className="pointer-events-none flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-accent-500 group-hover:bg-accent-500/20">
                  <Play
                    className="h-8 w-8 translate-x-0.5 text-white transition-colors group-hover:text-accent-500"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>

                <div className="text-center">
                  <p className="font-heading text-h4-mobile font-semibold text-white">
                    Regarder le témoignage
                  </p>
                  <p className="mt-1 text-small text-grey-200">Vidéo disponible sur Facebook</p>
                </div>
              </div>

              {/* Pied de carte */}
              <div className="flex items-center justify-between border-t border-white/10 px-lg py-md">
                <div className="flex items-center gap-xs">
                  {/* Icône Facebook inline */}
                  <svg
                    className="h-4 w-4 text-grey-200"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-small text-grey-200">ITM Construction Métallique</span>
                </div>
                <span className="inline-flex items-center gap-xs text-small font-medium text-white transition-colors group-hover:text-accent-500">
                  <ExternalLink className="h-4 w-4" />
                  Voir sur Facebook
                </span>
              </div>
            </a>
          </div>

          {/* Cards témoignages textuels — 2 colonnes sur 5 */}
          <div className="flex flex-col gap-md lg:col-span-2">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                className="group relative flex flex-col gap-sm rounded-2xl border border-white/10 bg-white/5 p-lg backdrop-blur-sm transition-all duration-300 hover:border-accent-500/30 hover:bg-white/10"
              >
                {/* Guillemet décoratif */}
                <Quote
                  className="h-6 w-6 text-accent-500/60 transition-colors group-hover:text-accent-500"
                  strokeWidth={1.5}
                />

                {/* Citation */}
                <p className="flex-1 text-small leading-relaxed text-grey-100 md:text-body-mobile">
                  {testimonial.quote}
                </p>

                {/* Auteur */}
                <footer className="flex items-center gap-sm border-t border-white/10 pt-sm">
                  {/* Avatar initial */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-500/40 to-accent-500/10 ring-1 ring-accent-500/30">
                    <span className="font-heading text-sm font-bold text-accent-500">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-small font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-grey-200">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* CTA bas de section */}
        <div className="mt-2xl text-center">
          <p className="text-small text-grey-200">
            Rejoignez nos clients satisfaits.{' '}
            <a
              href="/contact"
              className="font-semibold text-accent-500 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Demandez votre devis gratuit →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
