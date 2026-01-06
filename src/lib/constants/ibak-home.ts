// IBAK HOME Content Constants
// Single source of truth for all IBAK HOME page content
// Structured for future Sanity CMS migration

export interface IbakBenefit {
  id: 'construction-rapide' | 'deplacable' | 'faible-entretien' | 'architecture' | 'resistance'
  title: string
  description: string
}

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
