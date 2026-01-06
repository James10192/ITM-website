import Link from 'next/link'
import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons-react'

export function PageHeader() {
  return (
    <section className="relative bg-primary-900 py-xl md:py-2xl">
      {/* Background image avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/benefits/resistance.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Gradient overlay pour plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/95 to-primary-800/90" />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        <nav className="mb-lg" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-small">
            <li>
              <Link
                href="/"
                className="text-grey-200 transition-colors hover:text-white"
              >
                Accueil
              </Link>
            </li>
            <IconChevronRight className="h-4 w-4 text-accent-500" />
            <li>
              <span className="font-semibold text-white">IBAK HOME</span>
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="max-w-4xl">
          <h1 className="mb-md font-heading text-section-mobile font-bold text-white md:text-section lg:text-hero-mobile">
            Des maisons métalliques 98% déplaçable pensées comme un investissement
          </h1>
          <p className="text-body-mobile leading-relaxed text-grey-200 md:text-body">
            Nos maisons métalliques sont conçues pour ceux qui recherchent une solution moderne,
            durable et rentable. À partir de{' '}
            <strong className="font-semibold text-accent-500">19 000 000 FCFA</strong>, vous
            accédez à une habitation solide, rapide à installer et adaptable à vos besoins.
          </p>
        </div>
      </div>
    </section>
  )
}
