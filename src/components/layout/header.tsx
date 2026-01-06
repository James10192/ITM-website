'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <Link href="/" className="relative z-20 flex items-center px-2 py-1">
      <Image
        src="/images/logo.png"
        alt="ITM Construction Métallique"
        width={80}
        height={40}
        className="h-10 w-auto transition-opacity duration-300 hover:opacity-80"
        priority
      />
    </Link>
  )

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        {({ visible }) => (
          <>
            <ITMLogo />

            {/* Navigation Items with Active State */}
            <div
              onMouseLeave={() => setHovered(null)}
              className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex xl:space-x-2"
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`nav-${idx}`}
                  href={item.link}
                  onMouseEnter={() => setHovered(idx)}
                  className={cn(
                    'relative px-3 py-2 transition-colors duration-300 xl:px-4',
                    pathname === item.link
                      ? visible
                        ? 'text-primary-900'
                        : 'text-white'
                      : visible
                        ? 'text-secondary-600 hover:text-primary-900'
                        : 'text-grey-200 hover:text-white'
                  )}
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId="hovered"
                      className={cn(
                        'absolute inset-0 h-full w-full rounded-full transition-colors',
                        visible ? 'bg-gray-100' : 'bg-white/10'
                      )}
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                asChild
                variant={visible ? 'default' : 'secondary'}
                className={cn(
                  'transition-all duration-300',
                  !visible && 'border-white bg-white text-primary-900 hover:bg-white/90'
                )}
              >
                <Link href={ctaLinks.primary.href}>{ctaLinks.primary.label}</Link>
              </Button>
            </div>
          </>
        )}
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        {({ visible }) => (
          <>
            <MobileNavHeader>
              <ITMLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                visible={visible}
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
                      ? 'bg-primary-900/10 text-primary-900'
                      : 'text-secondary-600 hover:bg-grey-100 hover:text-primary-900'
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
          </>
        )}
      </MobileNav>
    </Navbar>
  )
}
