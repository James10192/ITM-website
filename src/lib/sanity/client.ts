import { createClient } from '@sanity/client'
import { env } from '@/env'

/**
 * Sanity Client Configuration
 * Configured for both read and write operations
 */
export const sanityClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01', // Use current date for latest API features
  useCdn: process.env.NODE_ENV === 'production', // CDN for production, direct for development
  token: env.SANITY_API_TOKEN,
  perspective: 'published', // Only fetch published documents
})

/**
 * Client for preview/draft mode (if needed in the future)
 */
export const sanityPreviewClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false, // Never use CDN for preview
  token: env.SANITY_API_TOKEN,
  perspective: 'previewDrafts', // Include draft documents
})
