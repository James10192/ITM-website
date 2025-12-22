import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Image URL Builder for Sanity images
 * Provides optimized image URLs with transformations
 */
const builder = imageUrlBuilder(sanityClient)

/**
 * Generate optimized image URL from Sanity image
 *
 * @example
 * // Basic usage
 * urlFor(project.image).width(800).url()
 *
 * // With blur placeholder
 * urlFor(project.image).width(20).blur(10).url()
 *
 * // Full optimization
 * urlFor(project.image)
 *   .width(800)
 *   .height(600)
 *   .quality(90)
 *   .auto('format')
 *   .url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
