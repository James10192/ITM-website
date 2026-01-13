'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { IBAK_HOME_IMAGES } from '@/lib/constants/ibak-home'

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : IBAK_HOME_IMAGES[activeIndex]

  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        <div className="mb-xl max-w-2xl">
          <p className="mb-sm text-small font-semibold uppercase tracking-[0.2em] text-accent-500">
            Galerie IBAK HOME
          </p>
          <h2 className="text-section-mobile font-heading font-bold text-primary-900 md:text-section">
            Explorez nos maisons en image
          </h2>
          <p className="mt-sm text-body-mobile text-secondary-600 md:text-body">
            Cliquez sur une pile pour ouvrir un aperçu plein ecran et decouvrir les details.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IBAK_HOME_IMAGES.map((image, index) => {
            const backOne =
              IBAK_HOME_IMAGES[(index + 1) % IBAK_HOME_IMAGES.length] ?? image
            const backTwo =
              IBAK_HOME_IMAGES[(index + 2) % IBAK_HOME_IMAGES.length] ?? image

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/3] w-full focus-visible-ring"
                aria-label={`Ouvrir l'image ${index + 1} en grand`}
              >
                <div
                  className="absolute inset-0 translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-cover bg-center opacity-60 shadow-lg"
                  style={{ backgroundImage: `url(${backTwo.src})` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 -translate-x-2 translate-y-1 -rotate-2 rounded-2xl bg-cover bg-center opacity-75 shadow-lg"
                  style={{ backgroundImage: `url(${backOne.src})` }}
                  aria-hidden="true"
                />
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/30">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActiveIndex(null)
          }
        }}
      >
        <DialogContent className="max-w-5xl border-0 bg-primary-900/95 p-3 shadow-2xl sm:p-4">
          {activeImage && (
            <div className="relative h-[70vh] w-full overflow-hidden rounded-xl bg-primary-900">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
