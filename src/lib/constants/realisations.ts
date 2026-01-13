// Réalisations (Projects) Constants
// Data for the portfolio/gallery page

export type ProjectCategory = 'maisons' | 'portes' | 'palissades' | 'meubles' | 'all'

export interface Project {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'all'>
  clientObjective: string
  image: string
  featured?: boolean
}

export const REALISATIONS_HEADER_IMAGES = [
  '/images/realisations/31047.jpg',
  '/images/realisations/31004.jpg',
  '/images/realisations/31036.jpg',
  '/images/realisations/31021.jpg',
  '/images/realisations/31031.jpg',
]

export const PROJECT_CATEGORIES: Array<{
  id: ProjectCategory
  label: string
  icon?: string
}> = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'maisons', label: 'Maisons métalliques' },
  { id: 'portes', label: 'Portes et portails' },
  { id: 'palissades', label: 'Palissades et clôtures' },
  { id: 'meubles', label: 'Mobilier métallique' },
]

export const PROJECTS: Project[] = [
  // Maisons métalliques
  {
    id: 'structure-metallique-01',
    title: 'Structure métallique de bâtiment',
    category: 'maisons',
    clientObjective:
      'Mettre en place une ossature robuste pour un projet de construction métallique.',
    image: '/images/realisations/31036.jpg',
    featured: true,
  },
  {
    id: 'structure-metallique-02',
    title: 'Plancher métallique en montage',
    category: 'maisons',
    clientObjective:
      'Assembler une plateforme métallique stable pour accueillir les futurs aménagements.',
    image: '/images/realisations/31043.jpg',
  },
  {
    id: 'structure-metallique-03',
    title: 'Structure surélevée avec escalier',
    category: 'maisons',
    clientObjective:
      'Concevoir une plateforme métallique fonctionnelle et durable pour activité commerciale.',
    image: '/images/realisations/31035.jpg',
  },
  {
    id: 'structure-metallique-04',
    title: 'Pergolas métalliques contemporaines',
    category: 'maisons',
    clientObjective:
      'Créer des espaces extérieurs ombragés avec une signature architecturale métallique.',
    image: '/images/realisations/31014.jpg',
  },

  // Portes et portails
  {
    id: 'portail-decoratif-01',
    title: 'Portail décoratif à motifs floraux',
    category: 'portes',
    clientObjective: 'Allier sécurité et esthétique avec un portail sur mesure.',
    image: '/images/realisations/31004.jpg',
    featured: true,
  },
  {
    id: 'portail-coulissant-01',
    title: 'Portail coulissant décoratif',
    category: 'portes',
    clientObjective: 'Installer une fermeture coulissante avec découpe organique.',
    image: '/images/realisations/31005.jpg',
  },
  {
    id: 'porte-pieton-01',
    title: 'Porte piétonne sécurisée',
    category: 'portes',
    clientObjective: 'Renforcer l\'accès avec une porte métallique résistante.',
    image: '/images/realisations/31006.jpg',
  },
  {
    id: 'porte-coulissante-01',
    title: 'Panneaux coulissants ajourés',
    category: 'portes',
    clientObjective: 'Optimiser la circulation tout en gardant la ventilation naturelle.',
    image: '/images/realisations/31008.jpg',
  },
  {
    id: 'porte-geometrique-01',
    title: 'Porte métallique géométrique',
    category: 'portes',
    clientObjective: 'Installer une porte design avec découpe artistique.',
    image: '/images/realisations/31046.jpg',
  },
  {
    id: 'portail-plein-01',
    title: 'Portail plein contemporain',
    category: 'portes',
    clientObjective: 'Proposer un portail moderne et épuré pour entrée principale.',
    image: '/images/realisations/31047.jpg',
  },

  // Palissades et clôtures
  {
    id: 'garde-corps-01',
    title: 'Garde-corps décoratif extérieur',
    category: 'palissades',
    clientObjective:
      'Sécuriser les balcons avec des motifs perforés élégants.',
    image: '/images/realisations/31021.jpg',
    featured: true,
  },
  {
    id: 'garde-corps-02',
    title: 'Garde-corps motif feuilles',
    category: 'palissades',
    clientObjective: 'Apporter un motif végétal sur des balcons contemporains.',
    image: '/images/realisations/31028.jpg',
  },
  {
    id: 'garde-corps-03',
    title: 'Rampe d\'escalier découpée',
    category: 'palissades',
    clientObjective:
      'Sécuriser un escalier avec un garde-corps artistique sur mesure.',
    image: '/images/realisations/31029.jpg',
  },
  {
    id: 'garde-corps-04',
    title: 'Garde-corps de terrasse ajouré',
    category: 'palissades',
    clientObjective: 'Combiner sécurité et vue dégagée pour un balcon.',
    image: '/images/realisations/31030.jpg',
  },
  {
    id: 'garde-corps-05',
    title: 'Façade avec garde-corps métalliques',
    category: 'palissades',
    clientObjective: 'Habiller la façade avec une signature métallique cohérente.',
    image: '/images/realisations/31032.jpg',
  },
  {
    id: 'garde-corps-06',
    title: 'Balconnerie géométrique',
    category: 'palissades',
    clientObjective: 'Créer un rythme graphique sur une façade moderne.',
    image: '/images/realisations/31033.jpg',
  },
  {
    id: 'garde-corps-07',
    title: 'Balconnerie découpée sur mesure',
    category: 'palissades',
    clientObjective: 'Apporter du caractère aux balcons avec un motif ajouré.',
    image: '/images/realisations/31034.jpg',
  },
  {
    id: 'garde-corps-08',
    title: 'Garde-corps extérieur design',
    category: 'palissades',
    clientObjective: 'Sécuriser une terrasse avec un motif métallique fort.',
    image: '/images/realisations/31045.jpg',
  },
  {
    id: 'claustra-01',
    title: 'Claustra extérieur graphique',
    category: 'palissades',
    clientObjective: 'Créer une séparation ajourée pour patio et terrasse.',
    image: '/images/realisations/30955.jpg',
  },
  {
    id: 'pergola-01',
    title: 'Pergola ajourée de nuit',
    category: 'palissades',
    clientObjective: 'Installer un habillage métallique ajouré pour espace extérieur.',
    image: '/images/realisations/30962.jpg',
  },

  // Mobilier métallique
  {
    id: 'mobilier-claustra-01',
    title: 'Claustra intérieur décoratif',
    category: 'meubles',
    clientObjective: 'Habiller un intérieur avec une signature métallique artistique.',
    image: '/images/realisations/30953.jpg',
  },
  {
    id: 'mobilier-claustra-02',
    title: 'Habillage métallique ajouré',
    category: 'meubles',
    clientObjective: 'Apporter une touche contemporaine à un espace intérieur.',
    image: '/images/realisations/30954.jpg',
  },
  {
    id: 'mobilier-bar-01',
    title: 'Comptoir métallique rétroéclairé',
    category: 'meubles',
    clientObjective: 'Créer un bar signature avec une façade métallique lumineuse.',
    image: '/images/realisations/31031.jpg',
  },
  {
    id: 'mobilier-chaises-01',
    title: 'Chaises métalliques design',
    category: 'meubles',
    clientObjective: 'Fabriquer un mobilier élégant et robuste pour espace intérieur.',
    image: '/images/realisations/31044.jpg',
  },
]

// Helper functions
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (category === 'all') return PROJECTS
  return PROJECTS.filter((project) => project.category === category)
}

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.featured)
}

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((project) => project.id === id)
}
