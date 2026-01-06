import { Metadata } from 'next'
import { PageHeader } from './components/page-header'
import { CompanyInfoSection } from './components/company-info-section'
import { CompanyStorySection } from './components/company-story-section'
import { CommitmentsSection } from './components/commitments-section'

// ISR: Revalidate every 60 seconds
export const revalidate = 60

// SEO Metadata
export const metadata: Metadata = {
  title: 'À Propos - Expertise Métallique en Côte d\'Ivoire | ITM Construction',
  description:
    'Découvrez ITM Construction Métallique : une expertise au service de projets ambitieux en Côte d\'Ivoire. Qualité, respect des délais, transparence et accompagnement personnalisé.',
  keywords: [
    'ITM Construction',
    'construction métallique Côte d\'Ivoire',
    'expertise métallique Abidjan',
    'qualité construction',
    'entreprise construction Abidjan',
    'structures métalliques',
    'à propos ITM',
  ],
  openGraph: {
    title: 'À Propos - ITM Construction Métallique',
    description:
      'Une expertise métallique au service de projets ambitieux. Découvrez nos engagements et notre savoir-faire en construction métallique.',
    url: 'https://itm-construction.ci/a-propos',
    type: 'website',
    images: [
      {
        url: '/images/benefits/resistance.jpg',
        width: 1200,
        height: 630,
        alt: 'ITM Construction Métallique - À Propos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À Propos - ITM Construction Métallique',
    description: 'Une expertise métallique au service de projets ambitieux en Côte d\'Ivoire',
    images: ['/images/benefits/resistance.jpg'],
  },
  alternates: {
    canonical: 'https://itm-construction.ci/a-propos',
  },
}

export default function AProposPage() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ITM Construction Métallique',
    description:
      'Depuis plusieurs années, nous accompagnons des particuliers et des entreprises dans la conception de structures métalliques solides, esthétiques et durables.',
    url: 'https://itm-construction.ci',
    logo: 'https://itm-construction.ci/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Côte d\'Ivoire',
    },
    knowsAbout: [
      'Construction métallique',
      'Maisons métalliques',
      'Portes métalliques',
      'Palissades',
      'Mobilier métallique',
    ],
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
      <CompanyInfoSection />
      <CompanyStorySection />
      <CommitmentsSection />
    </>
  )
}
