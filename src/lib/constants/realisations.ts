// Réalisations (Projects) Constants
// Data for the portfolio/gallery page

export type ProjectCategory = 'maisons' | 'portes' | 'palissades' | 'meubles' | 'all'

export interface Project {
  id: string
  title: string
  category: Exclude<ProjectCategory, 'all'>
  location: string
  clientObjective: string
  image: string
  featured?: boolean
}

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
    id: 'maison-cocody-01',
    title: 'Villa Moderne IBAK HOME',
    category: 'maisons',
    location: 'Cocody, Abidjan',
    clientObjective:
      'Résidence principale familiale moderne avec possibilité de relocalisation future.',
    image: '/images/projects/maison-moderne-01.jpg',
    featured: true,
  },
  {
    id: 'maison-bingerville-01',
    title: 'Maison Modulaire 3 Chambres',
    category: 'maisons',
    location: 'Bingerville',
    clientObjective:
      'Investissement locatif avec structure déplaçable pour terrain temporaire.',
    image: '/images/projects/maison-moderne-01.jpg',
  },
  {
    id: 'maison-grand-bassam-01',
    title: 'Résidence Secondaire Bord de Mer',
    category: 'maisons',
    location: 'Grand-Bassam',
    clientObjective: 'Maison de vacances résistante à l\'humidité et au sel marin.',
    image: '/images/projects/maison-moderne-01.jpg',
  },

  // Portes et portails
  {
    id: 'portail-plateau-01',
    title: 'Portail Automatique Entreprise',
    category: 'portes',
    location: 'Plateau, Abidjan',
    clientObjective:
      'Sécuriser l\'entrée de locaux professionnels avec design élégant et système automatisé.',
    image: '/images/projects/structure-metallique-01.png',
    featured: true,
  },
  {
    id: 'porte-cocody-01',
    title: 'Portes Sécurisées Résidence',
    category: 'portes',
    location: 'Cocody Riviera',
    clientObjective: 'Renforcer la sécurité d\'une villa avec portes blindées sur mesure.',
    image: '/images/projects/structure-metallique-01.png',
  },
  {
    id: 'portail-marcory-01',
    title: 'Portail Coulissant Automatique',
    category: 'portes',
    location: 'Marcory',
    clientObjective:
      'Installation de portail coulissant pour faciliter l\'accès à une propriété.',
    image: '/images/projects/structure-metallique-01.png',
  },

  // Palissades et clôtures
  {
    id: 'palissade-yopougon-01',
    title: 'Clôture Métallique Sécurisée',
    category: 'palissades',
    location: 'Yopougon',
    clientObjective:
      'Sécuriser un terrain de 500m² avec clôture métallique résistante et esthétique.',
    image: '/images/projects/chantier-construction-01.png',
    featured: true,
  },
  {
    id: 'palissade-abobo-01',
    title: 'Palissade Entreprise 200m',
    category: 'palissades',
    location: 'Abobo',
    clientObjective: 'Délimiter et sécuriser un site industriel avec palissade hauteur 3m.',
    image: '/images/projects/chantier-construction-01.png',
  },
  {
    id: 'palissade-bingerville-01',
    title: 'Clôture Résidentielle Moderne',
    category: 'palissades',
    location: 'Bingerville',
    clientObjective:
      'Allier sécurité et esthétique pour une résidence haut de gamme.',
    image: '/images/projects/chantier-construction-01.png',
  },

  // Mobilier métallique
  {
    id: 'mobilier-plateau-01',
    title: 'Mobilier de Bureau Sur Mesure',
    category: 'meubles',
    location: 'Plateau, Abidjan',
    clientObjective:
      'Équiper des bureaux avec mobilier métallique design et durable.',
    image: '/images/projects/construction-metallique-01.jpg',
  },
  {
    id: 'mobilier-cocody-01',
    title: 'Étagères et Rangements Industriels',
    category: 'meubles',
    location: 'Cocody',
    clientObjective:
      'Optimiser l\'espace de stockage avec meubles métalliques robustes.',
    image: '/images/projects/construction-metallique-01.jpg',
  },
  {
    id: 'mobilier-marcory-01',
    title: 'Mobilier Extérieur Terrasse',
    category: 'meubles',
    location: 'Marcory Zone 4',
    clientObjective:
      'Créer un espace extérieur convivial avec mobilier résistant aux intempéries.',
    image: '/images/projects/construction-metallique-01.jpg',
  },

  // Projets supplémentaires pour une belle galerie
  {
    id: 'maison-anyama-01',
    title: 'Maison Économique IBAK',
    category: 'maisons',
    location: 'Anyama',
    clientObjective:
      'Première acquisition immobilière avec budget maîtrisé et construction rapide.',
    image: '/images/projects/maison-moderne-01.jpg',
  },
  {
    id: 'portail-angre-01',
    title: 'Portail Battant Double Vantaux',
    category: 'portes',
    location: 'Angré 8ème Tranche',
    clientObjective:
      'Portail élégant pour villa moderne avec finition peinture époxy.',
    image: '/images/projects/structure-metallique-01.png',
  },
  {
    id: 'palissade-riviera-01',
    title: 'Palissade Décorative Résidence',
    category: 'palissades',
    location: 'Riviera Palmeraie',
    clientObjective:
      'Clôture design associant sécurité et transparence pour jardin visible.',
    image: '/images/projects/chantier-construction-01.png',
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
