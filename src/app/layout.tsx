import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

// Font Configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'ITM Construction Métallique | Côte d\'Ivoire',
    template: '%s | ITM Construction Métallique',
  },
  description:
    'Constructions métalliques sur mesure à Abidjan : maisons déplaçables IBAK HOME, portes, palissades. Investissement durable dès 19M FCFA. Devis gratuit.',
  keywords: [
    'construction métallique',
    'Côte d\'Ivoire',
    'Abidjan',
    'maison métallique',
    'IBAK HOME',
    'porte métallique',
    'palissade métallique',
    'construction durable',
  ],
  authors: [{ name: 'ITM Construction Métallique' }],
  creator: 'ITM Construction Métallique',
  publisher: 'ITM Construction Métallique',
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: '/',
    siteName: 'ITM Construction Métallique',
    title: 'ITM Construction Métallique | Côte d\'Ivoire',
    description:
      'Constructions métalliques sur mesure à Abidjan : maisons déplaçables, portes, palissades. Investissement durable dès 19M FCFA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ITM Construction Métallique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITM Construction Métallique | Côte d\'Ivoire',
    description:
      'Constructions métalliques sur mesure à Abidjan : maisons déplaçables, portes, palissades.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
