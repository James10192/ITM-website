'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

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
    <section className="relative overflow-hidden bg-primary-900 py-2xl">
      {/* Accent lignes décoratives */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

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
          <h2 className="mb-md font-heading text-section-mobile font-bold text-white md:text-section">
            Avant / Après
          </h2>
          <p className="mx-auto max-w-lg text-body-mobile leading-relaxed text-grey-200 md:text-body">
            De l&apos;espace brut à la structure achevée, découvrez l&apos;ampleur
            de chaque transformation.
          </p>
        </motion.div>

        {/* Layout côte à côte avec séparateur central */}
        <div className="relative">

          {/* Séparateur central avec label — desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center lg:flex">
            <div className="h-full w-px bg-accent-500/30" />
            <div className="absolute top-1/2 -translate-y-1/2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/50 bg-primary-800 shadow-xl shadow-black/40">
                <svg className="h-5 w-5 text-accent-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-lg lg:grid-cols-2">

            {/* Carte AVANT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/avant-construction-terrain.jpg"
                  alt="Terrain vide avant construction métallique ITM"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute left-md top-md z-10 rounded-full bg-primary-900/80 px-sm py-2 backdrop-blur-sm">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-grey-200">
                    Avant
                  </span>
                </div>
                {/* Overlay gradient bas */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                {/* Légende sur l'image */}
                <div className="absolute bottom-0 left-0 right-0 p-lg">
                  <p className="font-heading text-h4-mobile font-semibold text-white">
                    Terrain vide
                  </p>
                  <p className="mt-1 text-small text-grey-200">
                    Sol non aménagé, aucune structure existante
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
              className="group overflow-hidden rounded-2xl border border-accent-500/20 bg-white/5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/realisation-maison-metallique-apres.jpg"
                  alt="Construction métallique ITM achevee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute left-md top-md z-10 flex items-center gap-xs rounded-full bg-accent-500/90 px-sm py-2 backdrop-blur-sm">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                    Après
                  </span>
                </div>
                {/* Overlay gradient bas */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                {/* Légende sur l'image */}
                <div className="absolute bottom-0 left-0 right-0 p-lg">
                  <p className="font-heading text-h4-mobile font-semibold text-white">
                    Structure métallique ITM
                  </p>
                  <p className="mt-1 text-small text-grey-200">
                    Charpente solide, finitions soignées, prête à vivre
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
