'use client'

import { ExternalLink, Quote } from 'lucide-react'

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/share/r/1DFwGM5mNo/'

const FACEBOOK_VIDEO_EMBED_URL =
  'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1DFwGM5mNo%2F&show_text=false&width=560'

const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'M. Kouassi Jean-Marc',
    role: 'Particulier — Abidjan, Cocody',
    quote:
      'ITM a transformé notre vision en réalité. Le portail et la clôture sont d\'une qualité irréprochable, livrés dans les délais convenus. Je recommande sans hésitation.',
    initial: 'K',
  },
  {
    id: 'testimonial-2',
    name: 'Mme Diallo Aminata',
    role: 'Promoteur immobilier',
    quote:
      'Partenaire de confiance depuis deux ans. La rigueur technique et le professionnalisme de l\'équipe ITM font toute la différence sur nos chantiers.',
    initial: 'D',
  },
  {
    id: 'testimonial-3',
    name: 'Direction Générale',
    role: 'Entreprise industrielle',
    quote:
      'Des structures robustes, une esthétique soignée, et un accompagnement de bout en bout. ITM comprend les exigences du secteur professionnel.',
    initial: 'E',
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
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Label */}
              <div className="absolute left-md top-md z-10 flex items-center gap-xs rounded-full bg-accent-500/90 px-sm py-1 backdrop-blur-sm">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                <span className="text-xs font-semibold uppercase tracking-wide text-white">
                  Vidéo témoignage
                </span>
              </div>

              {/* iFrame embed Facebook */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={FACEBOOK_VIDEO_EMBED_URL}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Témoignage client ITM Construction Métallique"
                />
              </div>

              {/* Lien de secours */}
              <div className="flex items-center justify-between border-t border-white/10 px-lg py-md">
                <p className="text-small text-grey-200">
                  Problème d&apos;affichage ?
                </p>
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-xs rounded-lg border border-white/20 px-md py-sm text-small font-medium text-white transition-all hover:border-accent-500 hover:text-accent-500"
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir la vidéo
                </a>
              </div>
            </div>
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
