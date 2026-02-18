'use client'

import { HeroSection } from '@/components/sections/hero'
import { SocialProofSection } from '@/components/sections/social-proof-section'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { WhyMetalSection } from '@/components/sections/why-metal'
import { ExpertisesSection } from '@/components/sections/expertises-section'
import { TargetAudienceSection } from '@/components/sections/target-audience-section'
import { heroProjects } from '@/lib/constants/projects'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <HeroParallax products={heroProjects} />
      <WhyMetalSection />
      <ExpertisesSection />
      <TargetAudienceSection />
    </>
  )
}
