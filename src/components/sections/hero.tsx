'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from '@/components/ui/button'
import { ctaLinks } from '@/lib/constants/navigation'

export function HeroSection() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      {/* Grid Background */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 select-none [background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]',
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-heading text-hero-mobile font-bold text-transparent md:text-hero">
          Construire en métal, <br /> investir dans la durabilité.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body font-normal text-neutral-300">
          Constructions métalliques sur mesure : maisons déplaçables, portes,
          palissades et mobiliers conçus pour durer.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={ctaLinks.primary.href}>Demander un devis personnalisé</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
