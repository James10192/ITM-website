import Link from 'next/link'
import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons-react'
import { REALISATIONS_HEADER_IMAGES } from '@/lib/constants/realisations'
import styles from './page-header.module.css'

export function PageHeader() {
  const slideDurationSeconds = 4
  const totalDurationSeconds = REALISATIONS_HEADER_IMAGES.length * slideDurationSeconds

  return (
    <section className="relative bg-primary-900 py-xl md:py-2xl">
      {/* Background carousel avec overlay */}
      <div className="absolute inset-0">
        {REALISATIONS_HEADER_IMAGES.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt=""
            fill
            className={`${styles.heroSlide} object-cover opacity-90`}
            priority={index === 0}
            sizes="100vw"
            style={{
              animationDelay: `${index * slideDurationSeconds}s`,
              animationDuration: `${totalDurationSeconds}s`,
            }}
          />
        ))}
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
              <span className="font-semibold text-white">Réalisations</span>
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <div className="max-w-4xl">
          <h1 className="mb-md font-heading text-section-mobile font-bold text-white md:text-section lg:text-hero-mobile">
            Nos projets parlent pour nous
          </h1>
          <p className="text-body-mobile leading-relaxed text-grey-200 md:text-body">
            Découvrez nos réalisations de construction métallique en Côte d&apos;Ivoire. Maisons
            déplaçables, portes sécurisées, palissades robustes et mobilier sur mesure pour vos
            projets résidentiels et professionnels.
          </p>
        </div>
      </div>
    </section>
  )
}
