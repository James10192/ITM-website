import Image from 'next/image'

export function IbakPageHero() {
  return (
    <section className="relative bg-off-white py-2xl">
      {/* Optional: Subtle background image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/benefits/resistance.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-md font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Des maisons métalliques 98% déplaçable pensées comme un investissement
          </h1>
          <p className="text-body-mobile leading-relaxed text-secondary-600 md:text-body">
            Nos maisons métalliques sont conçues pour ceux qui recherchent une solution moderne,
            durable et rentable. À partir de{' '}
            <strong className="font-semibold text-primary-900">19 000 000 FCFA</strong>, vous
            accédez à une habitation solide, rapide à installer et adaptable à vos besoins.
          </p>
        </div>
      </div>
    </section>
  )
}
