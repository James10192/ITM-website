'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { IBAK_HOME_IMAGES } from '@/lib/constants/ibak-home'

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : IBAK_HOME_IMAGES[activeIndex]
  const firstImage = IBAK_HOME_IMAGES[0]

  if (!firstImage) {
    return null
  }

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
            Cliquez sur la pile pour ouvrir un aperçu plein ecran et faire defiler les images.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="group relative aspect-[4/3] w-full max-w-4xl focus-visible-ring"
          aria-label="Ouvrir la galerie en grand"
        >
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-2xl bg-cover bg-center opacity-60 shadow-lg"
            style={{ backgroundImage: `url(${IBAK_HOME_IMAGES[2]?.src ?? firstImage.src})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-2 rounded-2xl bg-cover bg-center opacity-75 shadow-lg"
            style={{ backgroundImage: `url(${IBAK_HOME_IMAGES[1]?.src ?? firstImage.src})` }}
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/30">
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </button>
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
            <div className="flex flex-col gap-4">
              <div className="relative h-[65vh] w-full overflow-hidden rounded-xl bg-primary-900">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {IBAK_HOME_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                      index === activeIndex
                        ? 'ring-accent-500'
                        : 'ring-white/20 hover:ring-white/60'
                    }`}
                    aria-label={`Voir l'image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
