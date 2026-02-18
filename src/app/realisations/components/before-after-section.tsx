'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-off-white py-2xl">
      {/* Accent ligne haute */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="container-custom relative z-10">

        {/* En-tête */}
        <motion.div
          className="mb-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <p className="mb-sm font-heading text-small font-semibold uppercase tracking-widest text-accent-500">
            La transformation ITM
          </p>
          <h2 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Avant / Après
          </h2>
          <p className="mx-auto max-w-xl text-body-mobile leading-relaxed text-secondary-600 md:text-body">
            De l&apos;espace brut à la structure métallique achevée — découvrez l&apos;ampleur
            de la transformation que nous opérons sur chaque chantier.
          </p>
        </motion.div>

        {/* Grille Avant / Après */}
        <div className="grid grid-cols-1 gap-lg lg:grid-cols-2">

          {/* Carte AVANT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeUp}
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              {/* Badge */}
              <div className="absolute left-md top-md z-10 flex items-center gap-xs rounded-full bg-primary-900/80 px-sm py-2 backdrop-blur-md">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-grey-200">
                  Avant
                </span>
              </div>

              {/* Image avant */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-grey-200">
                <Image
                  src="/images/avant-construction-terrain.jpg"
                  alt="Terrain vide avant construction métallique ITM"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay léger */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
              </div>

              {/* Légende */}
              <div className="border-t border-grey-200 bg-white px-lg py-md">
                <p className="font-heading text-h4-mobile font-semibold text-primary-900">
                  Terrain vide
                </p>
                <p className="mt-1 text-small text-secondary-600">
                  Espace brut — sol non aménagé, aucune structure existante
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carte APRÈS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeUp}
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              {/* Badge */}
              <div className="absolute left-md top-md z-10 flex items-center gap-xs rounded-full bg-accent-500/90 px-sm py-2 backdrop-blur-md">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                  Après
                </span>
              </div>

              {/* Image après */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/realisation-maison-metallique-apres.jpg"
                  alt="Construction métallique ITM achevée — maison métallique Abidjan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay léger */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
              </div>

              {/* Légende */}
              <div className="border-t border-grey-200 bg-white px-lg py-md">
                <p className="font-heading text-h4-mobile font-semibold text-primary-900">
                  Structure métallique ITM
                </p>
                <p className="mt-1 text-small text-secondary-600">
                  Construction achevée — charpente métallique solide, finitions soignées
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecteur visuel flèche entre les deux — desktop uniquement */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-500/40 bg-white shadow-lg shadow-accent-500/10">
            <ArrowRight className="h-6 w-6 text-accent-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Stat mise en valeur */}
        <motion.div
          className="mt-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          variants={fadeUp}
        >
          <div className="flex flex-col items-center justify-center gap-md rounded-2xl border border-accent-500/20 bg-primary-900 px-xl py-xl text-center sm:flex-row sm:gap-xl">
            <div>
              <p className="font-heading text-subsection-mobile font-bold text-accent-500 md:text-subsection">
                40–60 %
              </p>
              <p className="mt-1 text-small text-grey-200">de délai en moins</p>
            </div>
            <div className="h-px w-24 bg-white/10 sm:h-16 sm:w-px" />
            <div>
              <p className="font-heading text-subsection-mobile font-bold text-accent-500 md:text-subsection">
                50 ans
              </p>
              <p className="mt-1 text-small text-grey-200">de durée de vie garantie</p>
            </div>
            <div className="h-px w-24 bg-white/10 sm:h-16 sm:w-px" />
            <div>
              <p className="font-heading text-subsection-mobile font-bold text-accent-500 md:text-subsection">
                100 %
              </p>
              <p className="mt-1 text-small text-grey-200">sur mesure</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Accent ligne basse */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
    </section>
  )
}
