'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navigationLinks, ctaLinks } from '@/lib/constants/navigation'
import { Button } from '@/components/ui/button'
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar'

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [hovered, setHovered] = React.useState<number | null>(null)

  // Map navigation links to Aceternity format
  const navItems = navigationLinks.map((link) => ({
    name: link.label,
    link: link.href,
  }))

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Custom ITM Logo component
  const ITMLogo = () => (
    <Link href="/" className="relative z-20 flex items-center space-x-2 px-2 py-1">
      <span className="font-heading text-h4 font-bold text-primary-900 dark:text-white">
        ITM
      </span>
    </Link>
  )

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        <ITMLogo />

        {/* Navigation Items with Active State */}
        <div
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2"
        >
          {navItems.map((item, idx) => (
            <Link
              key={`nav-${idx}`}
              href={item.link}
              onMouseEnter={() => setHovered(idx)}
              className={cn(
                'relative px-4 py-2 transition-colors',
                pathname === item.link
                  ? 'text-primary-900 dark:text-white'
                  : 'text-secondary-600 dark:text-neutral-300 hover:text-primary-900'
              )}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href={ctaLinks.primary.href}>{ctaLinks.primary.label}</Link>
          </Button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <ITMLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navigationLinks.map((link, idx) => (
            <Link
              key={`mobile-nav-${idx}`}
              href={link.href}
              className={cn(
                'w-full rounded-md px-4 py-2 text-left text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-primary-900/10 text-primary-900 dark:bg-white/10 dark:text-white'
                  : 'text-secondary-600 hover:bg-grey-100 hover:text-primary-900 dark:text-neutral-300 dark:hover:bg-neutral-800',
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full">
            <Link href={ctaLinks.primary.href}>{ctaLinks.primary.label}</Link>
          </Button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
