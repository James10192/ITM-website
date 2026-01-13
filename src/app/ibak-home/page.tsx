import { Metadata } from 'next'
import { PageHeader } from './components/page-header'
import { BenefitsGrid } from './components/benefits-grid'
import { CtaSection } from './components/cta-section'
import { PhotoGallery } from './components/photo-gallery'

// ISR: Revalidate every 60 seconds (optional, content rarely changes)
export const revalidate = 60

// SEO Metadata
export const metadata: Metadata = {
  title: 'IBAK HOME - Maisons Métalliques 98% Déplaçables | ITM Construction',
  description:
    "Maisons métalliques 98% déplaçables dès 19M FCFA. Construction rapide, durable, moderne. Investissement rentable en Côte d'Ivoire.",
  keywords: [
    'maison métallique',
    'IBAK HOME',
    'maison déplaçable',
    'Abidjan',
    'construction rapide',
    'investissement immobilier',
    "Côte d'Ivoire",
    'construction métallique',
  ],
  openGraph: {
    title: 'IBAK HOME - Maisons Métalliques Déplaçables',
    description: 'Investissez dans une habitation moderne, durable et rentable à partir de 19M FCFA',
    url: 'https://itm-construction.ci/ibak-home',
    type: 'website',
    images: [
      {
        url: '/images/benefits/resistance.jpg',
        width: 1200,
        height: 630,
        alt: 'Maison métallique IBAK HOME',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBAK HOME - Maisons Métalliques Déplaçables',
    description: 'Maisons métalliques dès 19M FCFA. Construction rapide, durable, moderne.',
    images: ['/images/benefits/resistance.jpg'],
  },
  alternates: {
    canonical: 'https://itm-construction.ci/ibak-home',
  },
}

export default function IbakHomePage() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IBAK HOME - Maison Métallique Déplaçable',
    description:
      'Maison métallique 98% déplaçable, construction rapide en 8-10 semaines. Durable, moderne, adaptable.',
    brand: {
      '@type': 'Organization',
      name: 'ITM Construction Métallique',
      url: 'https://itm-construction.ci',
    },
    offers: {
      '@type': 'Offer',
      price: '19000000',
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
      url: 'https://itm-construction.ci/ibak-home',
    },
    category: 'Construction métallique',
    image: '/images/benefits/resistance.jpg',
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
      <BenefitsGrid />
      <CtaSection />
      <PhotoGallery />
    </>
  )
}
