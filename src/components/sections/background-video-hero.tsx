'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BackgroundVideoHeroProps {
  videos: string[]
  interval?: number
}

export function BackgroundVideoHero({
  videos,
  interval = 10000,
}: BackgroundVideoHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Auto-cycle videos (pause if reduced motion)
  useEffect(() => {
    if (prefersReducedMotion || videos.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, interval)

    return () => clearInterval(timer)
  }, [videos.length, interval, prefersReducedMotion])

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.video
          key={currentIndex}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <source src={videos[currentIndex]} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* Dark overlay to darken videos */}
      <div className="absolute inset-0 bg-black/85" />
    </div>
  )
}
