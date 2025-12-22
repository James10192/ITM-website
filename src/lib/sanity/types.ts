/**
 * TypeScript types for Sanity documents
 * These match the schemas defined in /sanity/schemas/
 */

/**
 * Base Sanity document fields
 */
interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

/**
 * Sanity Image Asset
 */
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

/**
 * Sanity Slug
 */
export interface SanitySlug {
  _type: 'slug'
  current: string
}

/**
 * Portable Text Block (rich text content)
 */
export interface PortableTextBlock {
  _type: 'block'
  _key: string
  style?: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    _key: string
    href?: string
  }>
}

export type PortableText = PortableTextBlock[]

/**
 * Project Category
 */
export type ProjectCategory = 'maisons' | 'portes' | 'palissades' | 'meubles'

/**
 * Project Document
 * Represents a construction project/realization
 */
export interface SanityProject extends SanityDocument {
  _type: 'project'
  title: string
  slug: SanitySlug
  category: ProjectCategory
  location: string
  description: PortableText
  clientObjective: string
  image: SanityImage
  gallery?: SanityImage[]
  featured: boolean
  publishedAt: string
}

/**
 * Contact Information
 */
export interface ContactInfo {
  phone: string
  email: string
  address: string
  whatsapp: string
}

/**
 * Social Links
 */
export interface SocialLinks {
  facebook?: string
  instagram?: string
  linkedin?: string
}

/**
 * Site Settings Document (Singleton)
 * Global site configuration
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  logo: SanityImage
  siteName: string
  tagline: string
  contact: ContactInfo
  socialLinks: SocialLinks
  openingHours: string
}

/**
 * FAQ Category
 */
export type FaqCategory = 'general' | 'tarifs' | 'delais' | 'ibak-home'

/**
 * FAQ Document
 * Questions and answers for FAQ section and chatbot
 */
export interface SanityFaq extends SanityDocument {
  _type: 'faq'
  question: string
  answer: PortableText
  category: FaqCategory
  order: number
}

/**
 * Page Document
 * Editable pages (About, IBAK HOME, etc.)
 */
export interface SanityPage extends SanityDocument {
  _type: 'page'
  title: string
  slug: SanitySlug
  content: PortableText
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage?: SanityImage
  }
}
