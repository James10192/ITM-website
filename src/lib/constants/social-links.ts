/**
 * Social Links and Contact Information
 * Used in header, footer, and contact page
 */

export interface SocialLink {
  name: string
  url: string
  icon: string // Lucide icon name
  label: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61559337628848',
    icon: 'Facebook',
    label: 'Suivez-nous sur Facebook',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/2250777589211',
    icon: 'MessageCircle',
    label: 'Contactez-nous sur WhatsApp',
  },
]

/**
 * Contact Information
 * Primary contact details
 */
export const contactInfo = {
  phone: '+225 07 77 58 92 11',
  phoneRaw: '+2250777589211', // For tel: links
  email: 'itmcotedivoire@gmail.com',
  address: 'Abidjan, Côte d\'Ivoire',
  whatsapp: 'https://wa.me/2250777589211',
}

/**
 * Business Hours
 */
export const businessHours = {
  weekdays: 'Lundi - Vendredi: 8h00 - 17h00',
  saturday: 'Samedi: 9h00 - 13h00',
  sunday: 'Dimanche: Fermé',
}
