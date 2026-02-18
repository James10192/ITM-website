'use client'

import React from 'react'
import { Timeline } from '@/components/ui/timeline'

const IMG_CLASS =
  'h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'

export function WhyMetalSection() {
  const data = [
    {
      title: 'Résistance',
      content: (
        <div>
          <p className="mb-2 font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4 dark:text-white">
            Résistance supérieure aux intempéries
          </p>
          <p className="mb-8 font-sans text-body-mobile leading-relaxed text-secondary-600 md:text-body dark:text-neutral-200">
            Nos structures métalliques sont conçues pour résister aux conditions climatiques
            tropicales les plus extrêmes : pluies torrentielles, forte humidité, chaleur intense.
            Le traitement anticorrosion garantit une protection optimale contre la rouille et
            la dégradation, même en climat côtier.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/benefits/resistance-intemperies-01.jpg"
              alt="Structure métallique ITM résistante aux intempéries tropicales"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
            <img
              src="/images/benefits/resistance-intemperies-02.jpg"
              alt="Traitement anticorrosion sur charpente métallique ITM"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Longévité',
      content: (
        <div>
          <p className="mb-2 font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4 dark:text-white">
            Longévité accrue
          </p>
          <p className="mb-8 font-sans text-body-mobile leading-relaxed text-secondary-600 md:text-body dark:text-neutral-200">
            Investissez dans la durabilité avec des structures qui durent plusieurs décennies.
            Contrairement au bois qui se dégrade ou au béton qui se fissure, nos constructions
            métalliques conservent leur intégrité structurelle pendant 50 ans et plus avec un
            entretien minimal.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/benefits/longevite-01.jpg"
              alt="Bâtiment métallique durable construit par ITM"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
            <img
              src="/images/benefits/longevite-02.jpg"
              alt="Structure métallique ITM après plusieurs années d'utilisation"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Rapidité',
      content: (
        <div>
          <p className="mb-2 font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4 dark:text-white">
            Rapidité de construction
          </p>
          <p className="mb-4 font-sans text-body-mobile leading-relaxed text-secondary-600 md:text-body dark:text-neutral-200">
            Gagnez un temps précieux avec nos méthodes de construction. Délais
            réduits de 40 à 60% par rapport aux constructions traditionnelles.
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex items-start gap-3 font-sans text-body-mobile text-secondary-600 md:text-body dark:text-neutral-300">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
              <span>Fabrication en atelier pendant la préparation du terrain</span>
            </div>
            <div className="flex items-start gap-3 font-sans text-body-mobile text-secondary-600 md:text-body dark:text-neutral-300">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
              <span>Assemblage rapide sur site (quelques jours seulement)</span>
            </div>
            <div className="flex items-start gap-3 font-sans text-body-mobile text-secondary-600 md:text-body dark:text-neutral-300">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
              <span>Pas de temps de séchage nécessaire</span>
            </div>
            <div className="flex items-start gap-3 font-sans text-body-mobile text-secondary-600 md:text-body dark:text-neutral-300">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
              <span>Moins de perturbations sur le chantier</span>
            </div>
            <div className="flex items-start gap-3 font-sans text-body-mobile text-secondary-600 md:text-body dark:text-neutral-300">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"></span>
              <span>Installation possible toute l&apos;année, même en saison des pluies</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/benefits/rapidite-construction-01.jpg"
              alt="Montage rapide d'une structure métallique ITM sur chantier"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
            <img
              src="/images/benefits/rapidite-construction-02.jpg"
              alt="Chantier de construction métallique ITM en cours d'assemblage"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Esthétique',
      content: (
        <div>
          <p className="mb-2 font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4 dark:text-white">
            Esthétique moderne
          </p>
          <p className="mb-8 font-sans text-body-mobile leading-relaxed text-secondary-600 md:text-body dark:text-neutral-200">
            Alliez fonctionnalité et design contemporain. Nos structures métalliques offrent
            des lignes épurées, des espaces ouverts et une architecture moderne qui valorise
            votre propriété. Finitions personnalisables : peinture, bardage, vitrages...
            créez l&apos;ambiance qui vous ressemble.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/benefits/esthetique-moderne-01.jpg"
              alt="Design moderne d'une construction métallique ITM"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
            <img
              src="/images/benefits/esthetique-moderne-02.jpg"
              alt="Architecture métallique contemporaine réalisée par ITM"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'ROI',
      content: (
        <div>
          <p className="mb-2 font-heading text-h4-mobile font-semibold text-primary-900 md:text-h4 dark:text-white">
            Investissement rentable sur le long terme
          </p>
          <p className="mb-8 font-sans text-body-mobile leading-relaxed text-secondary-600 md:text-body dark:text-neutral-200">
            Maximisez votre retour sur investissement avec des coûts maîtrisés à chaque étape.
            Économies sur les fondations (structures plus légères), sur les délais (moins de
            main d&apos;œuvre), sur l&apos;entretien (matériau durable nécessitant peu d&apos;interventions).
            Valeur de revente supérieure grâce à la qualité et la modernité de la construction.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/benefits/investissement-rentable-01.jpg"
              alt="Rentabilité et économies d'une construction métallique ITM"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
            <img
              src="/images/benefits/investissement-rentable-02.jpg"
              alt="Valeur patrimoniale d'une construction métallique ITM"
              width={500}
              height={500}
              className={IMG_CLASS}
            />
          </div>
        </div>
      ),
    },
  ]

  return <Timeline data={data} />
}
