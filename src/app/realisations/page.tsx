import { Metadata } from 'next'
import { PageHeader } from './components/page-header'
import { ProjectsGallery } from './components/projects-gallery'

// ISR: Revalidate every 60 seconds
export const revalidate = 60

// SEO Metadata
export const metadata: Metadata = {
  title: 'Nos Réalisations - Projets de Construction Métallique | ITM Construction',
  description:
    "Découvrez nos réalisations en construction métallique en Côte d'Ivoire : maisons IBAK HOME, portes sécurisées, palissades robustes et mobilier sur mesure. Portfolio de projets résidentiels et professionnels.",
  keywords: [
    'réalisations ITM',
    'projets construction métallique',
    'portfolio ITM',
    'maisons métalliques Abidjan',
    'portes métalliques',
    'palissades Côte d\'Ivoire',
    'mobilier métallique',
    'projets ITM Construction',
  ],
  openGraph: {
    title: 'Nos Réalisations - Projets de Construction Métallique',
    description:
      'Découvrez nos réalisations : maisons déplaçables, portes sécurisées, palissades et mobilier métallique en Côte d\'Ivoire',
    url: 'https://itm-construction.ci/realisations',
    type: 'website',
    images: [
      {
        url: '/images/projects/structure-metallique-01.png',
        width: 1200,
        height: 630,
        alt: 'Réalisations ITM Construction Métallique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Réalisations - ITM Construction',
    description: 'Portfolio de projets de construction métallique en Côte d\'Ivoire',
    images: ['/images/projects/structure-metallique-01.png'],
  },
  alternates: {
    canonical: 'https://itm-construction.ci/realisations',
  },
}

export default function RealisationsPage() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Réalisations ITM Construction Métallique',
    description:
      'Portfolio de nos réalisations en construction métallique : maisons, portes, palissades et mobilier',
    url: 'https://itm-construction.ci/realisations',
    provider: {
      '@type': 'Organization',
      name: 'ITM Construction Métallique',
      url: 'https://itm-construction.ci',
    },
    image: '/images/projects/structure-metallique-01.png',
  }

  return (
    <>
      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Sections */}
      <PageHeader />
      <ProjectsGallery />
    </>
  )
}
