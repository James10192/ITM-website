'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const STRENGTHS = [
  'Ingénieurs et techniciens qualifiés sur chaque chantier',
  'Fabrication en atelier, installation rapide sur site',
  'Délais respectés, devis transparent, zéro surprise',
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export function SocialProofSection() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      {/* Ligne décorative cuivrée en haut */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="container-custom py-2xl">
        <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-5">

          {/* ── Colonne image (3/5) ── */}
          <motion.div
            className="relative lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
          >
            {/* Cadre décoratif cuivré décalé */}
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 z-0 hidden rounded-2xl border border-accent-500/40 lg:block"
              style={{ inset: 'auto -12px -12px auto', width: '92%', height: '92%' }}
              aria-hidden="true"
            />

            {/* Image */}
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/itm-equipe-chantier.jpg"
                alt="Technicien ITM supervisant l'érection d'une charpente métallique sur chantier à Abidjan"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />

              {/* Overlay dégradé bas pour fondre avec la section */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />

              {/* Badge flottant */}
              <div className="absolute bottom-md left-md z-10 flex items-center gap-xs rounded-full bg-primary-900/80 px-sm py-2 backdrop-blur-md">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent-500" />
                <span className="text-xs font-semibold text-white">
                  Chantier en cours · Abidjan
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Colonne texte (2/5) ── */}
          <div className="lg:col-span-2">

            {/* Eyebrow */}
            <motion.p
              className="mb-sm font-heading text-small font-semibold uppercase tracking-widest text-accent-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={fadeUp}
            >
              L&apos;expertise qui fait la différence
            </motion.p>

            {/* Titre */}
            <motion.h2
              className="mb-md font-heading text-section-mobile font-bold leading-tight text-white md:text-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              variants={fadeUp}
            >
              Rêvez.{' '}
              <span className="text-accent-500">Nous réalisons.</span>
            </motion.h2>

            {/* Corps */}
            <motion.p
              className="mb-lg text-body-mobile leading-relaxed text-grey-200 md:text-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              variants={fadeUp}
            >
              Chaque projet commence par votre vision. Nos ingénieurs, soudeurs et techniciens
              qualifiés la transforment en réalité, avec précision, dans les délais et au meilleur
              standard de qualité. Structures fixes ou modulaires, nous construisons ce dont vous
              avez besoin.
            </motion.p>

            {/* Points forts */}
            <motion.ul
              className="mb-xl space-y-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
              variants={fadeUp}
            >
              {STRENGTHS.map((strength) => (
                <li key={strength} className="flex items-start gap-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" strokeWidth={1.5} />
                  <span className="text-body-mobile text-grey-100">{strength}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={5}
              variants={fadeUp}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-sm rounded-xl bg-accent-500 px-lg py-md font-heading text-body-mobile font-semibold text-white transition-all duration-300 hover:bg-accent-500/90 hover:shadow-lg hover:shadow-accent-500/20 md:text-body"
              >
                Démarrer mon projet
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ligne décorative cuivrée en bas */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
    </section>
  )
}
