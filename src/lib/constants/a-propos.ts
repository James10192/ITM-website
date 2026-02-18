// À Propos Constants
// Company information and commitments

export interface Commitment {
  id: string
  title: string
  description: string
  icon: string
}

export const COMMITMENTS: Commitment[] = [
  {
    id: 'quality',
    title: 'Qualité des matériaux',
    description:
      'Nous sélectionnons rigoureusement nos matériaux métalliques pour garantir robustesse, durabilité et résistance aux conditions climatiques tropicales.',
    icon: 'shield-check',
  },
  {
    id: 'deadlines',
    title: 'Respect des délais',
    description:
      'Nos processus optimisés et notre organisation permettent de respecter les délais convenus, avec un planning détaillé communiqué dès le début du projet.',
    icon: 'clock',
  },
  {
    id: 'transparency',
    title: 'Transparence',
    description:
      'Devis détaillés, suivi en temps réel de votre projet et communication claire à chaque étape. Vous savez exactement où va votre investissement.',
    icon: 'eye',
  },
  {
    id: 'support',
    title: 'Accompagnement personnalisé',
    description:
      'Un expert dédié vous accompagne de la conception à la livraison, en passant par tous les conseils techniques et administratifs nécessaires.',
    icon: 'handshake',
  },
]

export const COMPANY_INFO = {
  name: 'ITM Construction Métallique',
  fullName: 'Industrie de Transformation Métallique SARL (I.T.M SARL)',
  tagline: 'Une expertise métallique au service de projets ambitieux',
  description:
    'ITM est une entreprise spécialisée dans la construction et la transformation métallique. Elle conçoit, fabrique et installe des structures métalliques adaptées aux besoins des professionnels, notamment dans les secteurs industriel, commercial et du bâtiment. Grâce à son savoir-faire technique, à la qualité de ses matériaux et au respect des délais, ITM accompagne ses clients à chaque étape de leurs projets, de l\'étude à la réalisation. L\'entreprise met un point d\'honneur à proposer des solutions solides, fiables et durables, tout en garantissant sécurité, esthétique et performance.',
  location: 'Abidjan, Bingerville',
  fullAddress: 'Abidjan, Bingerville, SEBIA YAO, Lot 88, Ilot 18',
  foundedYear: 2021,
  legalForm: 'SARL',
  capital: '5 000 000 F CFA',
  rccm: 'CI-ABJ-03-2021-B13-05131',
  manager: 'M. KONATE IBRAHIMA BEN AZIZ',
}

export interface StoryMilestone {
  year: string
  title: string
  description: string
}

export const COMPANY_STORY: StoryMilestone[] = [
  {
    year: '2021',
    title: 'Création d\'ITM',
    description:
      'Fondation d\'ITM SARL le 2 septembre 2021 à Abidjan, avec une vision claire : devenir la référence en construction métallique en Côte d\'Ivoire.',
  },
  {
    year: '2022',
    title: 'Lancement IBAK HOME',
    description:
      'Développement et commercialisation de notre concept phare de maisons métalliques 98% déplaçables, répondant aux besoins d\'habitat moderne et durable.',
  },
  {
    year: '2023',
    title: 'Expansion des services',
    description:
      'Diversification de nos activités : portes sécurisées, palissades robustes, mobilier métallique sur mesure pour particuliers et entreprises.',
  },
  {
    year: '2024',
    title: 'Innovation continue',
    description:
      'Investissements dans des équipements de pointe et formations pour garantir la meilleure qualité de fabrication et de service à nos clients.',
  },
]
