'use client'

import { HeroSection } from '@/components/sections/hero'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { WhyMetalSection } from '@/components/sections/why-metal'
import { heroProjects } from '@/lib/constants/projects'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroParallax products={heroProjects} />
      <WhyMetalSection />
    </>
  )
}
