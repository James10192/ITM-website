/**
 * Navigation Links
 * Main menu navigation for the site
 */

export interface NavLink {
  label: string
  href: string
  description?: string
}

export const navigationLinks: NavLink[] = [
  {
    label: 'Accueil',
    href: '/',
    description: 'Page d\'accueil',
  },
  {
    label: 'Solutions',
    href: '/solutions',
    description: 'Nos solutions de construction métallique',
  },
  {
    label: 'IBAK HOME',
    href: '/ibak-home',
    description: 'Maisons métalliques déplaçables',
  },
  {
    label: 'Réalisations',
    href: '/realisations',
    description: 'Nos projets et réalisations',
  },
  {
    label: 'À propos',
    href: '/a-propos',
    description: 'Découvrez ITM Construction',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Contactez-nous pour un devis',
  },
]

/**
 * CTA Links (Call to Action)
 * Primary actions in header/footer
 */
export const ctaLinks = {
  primary: {
    label: 'Demander un devis',
    href: '/contact',
  },
  secondary: {
    label: 'Voir nos réalisations',
    href: '/realisations',
  },
}
