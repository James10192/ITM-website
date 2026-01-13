// IBAK HOME Content Constants
// Single source of truth for all IBAK HOME page content
// Structured for future Sanity CMS migration

export interface IbakBenefit {
  id: 'construction-rapide' | 'deplacable' | 'faible-entretien' | 'architecture' | 'resistance'
  title: string
  description: string
}

export interface IbakHomeImage {
  src: string
  alt: string
}

export const IBAK_HOME_IMAGES: IbakHomeImage[] = [
  { src: '/images/ibak-home/30924.jpg', alt: 'Maison métallique IBAK HOME, vue 1' },
  { src: '/images/ibak-home/30925.jpg', alt: 'Maison métallique IBAK HOME, vue 2' },
  { src: '/images/ibak-home/30928.jpg', alt: 'Maison métallique IBAK HOME, vue 3' },
  { src: '/images/ibak-home/30929.jpg', alt: 'Maison métallique IBAK HOME, vue 4' },
  { src: '/images/ibak-home/30930.jpg', alt: 'Maison métallique IBAK HOME, vue 5' },
  { src: '/images/ibak-home/30935.jpg', alt: 'Maison métallique IBAK HOME, vue 6' },
  { src: '/images/ibak-home/30936.jpg', alt: 'Maison métallique IBAK HOME, vue 7' },
  { src: '/images/ibak-home/30937.jpg', alt: 'Maison métallique IBAK HOME, vue 8' },
  { src: '/images/ibak-home/30938.jpg', alt: 'Maison métallique IBAK HOME, vue 9' },
  { src: '/images/ibak-home/30939.jpg', alt: 'Maison métallique IBAK HOME, vue 10' },
  { src: '/images/ibak-home/change.jpg', alt: 'Maison métallique IBAK HOME, détail extérieur' },
  { src: '/images/ibak-home/csss.jpg', alt: 'Maison métallique IBAK HOME, détail intérieur' },
]

export const IBAK_BENEFITS: IbakBenefit[] = [
  {
    id: 'construction-rapide',
    title: 'Construction rapide',
    description:
      'Installation en 4-8 semaines vs 6-12 mois pour construction traditionnelle. Structure préfabriquée en atelier, montage rapide sur site.',
  },
  {
    id: 'deplacable',
    title: 'Possibilité de déplacement',
    description:
      "Structure 98% démontable et relocalisable. Idéal pour terrains temporaires ou projets évolutifs. Conservez votre investissement en cas de déménagement.",
  },
  {
    id: 'faible-entretien',
    title: 'Faible entretien',
    description:
      'Métal traité anti-corrosion. Pas de termites, pas de fissures. Économies long terme garanties avec entretien minimal.',
  },
  {
    id: 'architecture',
    title: 'Architecture contemporaine',
    description:
      'Design moderne personnalisable (couleurs, agencement, finitions). Valorise votre propriété avec une esthétique résolument contemporaine.',
  },
  {
    id: 'resistance',
    title: 'Excellente résistance climatique',
    description:
      "Conçu pour le climat tropical ivoirien. Résiste aux pluies intenses, humidité élevée et chaleur. Isolation thermique et phonique performante.",
  },
]

// Future: Add pricing models, process steps, FAQs when needed
// export interface IbakPricingModel { ... }
// export const IBAK_PRICING: IbakPricingModel[] = [ ... ]
