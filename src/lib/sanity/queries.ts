import { sanityClient } from './client'
import type { SanityProject, SiteSettings, SanityFaq, SanityPage, ProjectCategory } from './types'

/**
 * GROQ Queries for fetching Sanity content
 * All queries are typed and return properly formatted data
 */

/**
 * Get all published projects
 * Ordered by publication date (newest first)
 */
export async function getSanityProjects(): Promise<SanityProject[]> {
  const query = `*[_type == "project"] | order(publishedAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    category,
    location,
    description,
    clientObjective,
    image,
    gallery,
    featured,
    publishedAt
  }`

  return sanityClient.fetch(query)
}

/**
 * Get a single project by slug
 *
 * @param slug - URL-friendly project identifier
 * @returns Project or null if not found
 */
export async function getSanityProjectBySlug(slug: string): Promise<SanityProject | null> {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    category,
    location,
    description,
    clientObjective,
    image,
    gallery,
    featured,
    publishedAt
  }`

  return sanityClient.fetch(query, { slug })
}

/**
 * Get projects filtered by category
 *
 * @param category - Project category (maisons, portes, palissades, meubles)
 */
export async function getSanityProjectsByCategory(
  category: ProjectCategory
): Promise<SanityProject[]> {
  const query = `*[_type == "project" && category == $category] | order(publishedAt desc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    category,
    location,
    description,
    clientObjective,
    image,
    gallery,
    featured,
    publishedAt
  }`

  return sanityClient.fetch(query, { category })
}

/**
 * Get featured projects only
 * Limited to 6 most recent featured projects
 */
export async function getFeaturedProjects(): Promise<SanityProject[]> {
  const query = `*[_type == "project" && featured == true] | order(publishedAt desc)[0..5] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    category,
    location,
    clientObjective,
    image,
    publishedAt
  }`

  return sanityClient.fetch(query)
}

/**
 * Get all project slugs for static generation
 * Used in generateStaticParams()
 */
export async function getProjectSlugs(): Promise<string[]> {
  const query = `*[_type == "project"].slug.current`

  return sanityClient.fetch(query)
}

/**
 * Get site settings (singleton)
 * Returns global site configuration
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    logo,
    siteName,
    tagline,
    contact,
    socialLinks,
    openingHours
  }`

  return sanityClient.fetch(query)
}

/**
 * Get FAQs by category
 *
 * @param category - FAQ category (general, tarifs, delais, ibak-home)
 */
export async function getFaqsByCategory(
  category: 'general' | 'tarifs' | 'delais' | 'ibak-home'
): Promise<SanityFaq[]> {
  const query = `*[_type == "faq" && category == $category] | order(order asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    question,
    answer,
    category,
    order
  }`

  return sanityClient.fetch(query, { category })
}

/**
 * Get all FAQs (all categories)
 * Ordered by category and order
 */
export async function getAllFaqs(): Promise<SanityFaq[]> {
  const query = `*[_type == "faq"] | order(category asc, order asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    question,
    answer,
    category,
    order
  }`

  return sanityClient.fetch(query)
}

/**
 * Get a page by slug
 *
 * @param slug - Page slug (e.g., "a-propos", "ibak-home")
 */
export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    title,
    slug,
    content,
    seo
  }`

  return sanityClient.fetch(query, { slug })
}
