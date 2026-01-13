// Expertises Constants
// Company services and expertise areas

export interface Expertise {
  id: string
  title: string
  description: string
  image: string
  href: string
}

export const EXPERTISES: Expertise[] = [
  {
    id: 'maisons',
    title: 'Maisons métalliques déplaçables',
    description: 'Habitations modernes, solides et adaptables à tous les terrains.',
    image: '/images/ibak-home/30924.jpg',
    href: '/ibak-home',
  },
  {
    id: 'portes',
    title: 'Portes et portails',
    description: 'Sécurité, design et robustesse.',
    image: '/images/realisations/31004.jpg',
    href: '/realisations?category=portes',
  },
  {
    id: 'palissades',
    title: 'Palissades et clôtures',
    description: 'Protection élégante et durable.',
    image: '/images/realisations/31028.jpg',
    href: '/realisations?category=palissades',
  },
  {
    id: 'meubles',
    title: 'Meubles et accessoires',
    description: 'Métal et design au service de votre intérieur.',
    image: '/images/realisations/30962.jpg',
    href: '/realisations?category=meubles',
  },
]
