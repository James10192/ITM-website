'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { IBAK_HOME_IMAGES } from '@/lib/constants/ibak-home'

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : IBAK_HOME_IMAGES[activeIndex]
  const firstImage = IBAK_HOME_IMAGES[0]

  const goToPrevious = () => {
    if (activeIndex === null) return
    setActiveIndex(activeIndex === 0 ? IBAK_HOME_IMAGES.length - 1 : activeIndex - 1)
  }

  const goToNext = () => {
    if (activeIndex === null) return
    setActiveIndex(activeIndex === IBAK_HOME_IMAGES.length - 1 ? 0 : activeIndex + 1)
  }

  if (!firstImage) {
    return null
  }

  return (
    <section className="bg-white py-2xl">
      <div className="container-custom">
        <div className="mb-xl max-w-2xl">
          <p className="mb-sm text-small font-semibold uppercase tracking-[0.2em] text-accent-700">
            Galerie IBAK HOME
          </p>
          <h2 className="font-heading text-section-mobile font-bold text-primary-900 md:text-section">
            Explorez nos maisons en image
          </h2>
          <p className="mt-sm text-body-mobile text-secondary-600 md:text-body">
            Cliquez sur la pile pour ouvrir un aperçu plein ecran et faire defiler les images.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="focus-visible-ring group relative mx-auto aspect-[4/3] w-full max-w-3xl"
          aria-label="Ouvrir la galerie en grand"
        >
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-cover bg-center opacity-60 shadow-lg"
            style={{ backgroundImage: `url(${IBAK_HOME_IMAGES[2]?.src ?? firstImage.src})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -translate-x-2 translate-y-1.5 -rotate-2 rounded-2xl bg-cover bg-center opacity-75 shadow-lg"
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
        onOpenChange={open => {
          if (!open) {
            setActiveIndex(null)
          }
        }}
      >
        <DialogContent className="h-auto max-h-[92vh] w-[95vw] max-w-6xl overflow-hidden border-0 bg-primary-900/95 p-4 shadow-2xl sm:p-6">
          {activeImage && (
            <div className="flex h-full max-h-[calc(92vh-3rem)] flex-col gap-4 overflow-hidden">
              {/* Main Image avec boutons navigation */}
              <div className="relative flex-shrink-0">
                <div className="relative h-[55vh] w-full overflow-hidden rounded-xl bg-primary-900 md:h-[65vh]">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(min-width: 768px) 90vw, 95vw"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Boutons Previous/Next */}
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 md:left-4 md:p-3"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 md:right-4 md:p-3"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex flex-shrink-0 gap-2 overflow-x-auto pb-1">
                {IBAK_HOME_IMAGES.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md ring-2 transition ${
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
                      sizes="96px"
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
