import Link from 'next/link'
import { Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { navigationLinks } from '@/lib/constants/navigation'
import { socialLinks, contactInfo, businessHours } from '@/lib/constants/social-links'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-grey-200 bg-primary-900 text-white">
      <div className="container-custom py-3xl">
        <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-h4-mobile font-bold">ITM</h3>
            <p className="mt-sm text-small text-grey-100">
              Construire aujourd&apos;hui des structures métalliques durables, élégantes et
              intelligentes pour l&apos;Afrique moderne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-body font-semibold">Navigation</h4>
            <ul className="mt-sm space-y-xs">
              {navigationLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-grey-100 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-body font-semibold">Contact</h4>
            <ul className="mt-sm space-y-sm">
              <li className="flex items-start gap-xs">
                <Phone className="mt-1 h-4 w-4 shrink-0" />
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="text-small text-grey-100 transition-colors hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-xs">
                <Mail className="mt-1 h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-small text-grey-100 transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-xs">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span className="text-small text-grey-100">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="font-heading text-body font-semibold">Horaires</h4>
            <ul className="mt-sm space-y-xs text-small text-grey-100">
              <li>{businessHours.weekdays}</li>
              <li>{businessHours.saturday}</li>
              <li>{businessHours.sunday}</li>
            </ul>

            <div className="mt-md flex items-center gap-sm">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-grey-100 transition-colors hover:border-white hover:bg-white hover:text-primary-900"
                >
                  {social.icon === 'Facebook' && <Facebook className="h-5 w-5" />}
                  {social.icon === 'MessageCircle' && <MessageCircle className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container-custom py-md">
          <div className="flex flex-col items-center justify-between gap-sm text-small text-grey-100 sm:flex-row">
            <div className="text-center sm:text-left">
              <p>© {currentYear} ITM Construction Métallique. Tous droits réservés.</p>
              <p className="mt-1 text-xs">
                Développé par{' '}
                <a
                  href="https://www.africandigitconsulting.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-500 transition-colors hover:text-white"
                >
                  African Digit Consulting
                </a>
              </p>
            </div>
            <div className="flex gap-md">
              <Link href="/mentions-legales" className="transition-colors hover:text-white">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="transition-colors hover:text-white">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
