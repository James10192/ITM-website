import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitization utilities for user input
 * Prevents XSS attacks and malicious code injection
 */

/**
 * Sanitize plain text (no HTML allowed)
 * Strips all HTML tags and special characters
 *
 * @param text - User input text
 * @returns Sanitized plain text
 */
export function sanitizeText(text: string): string {
  // Remove all HTML tags
  const withoutHtml = DOMPurify.sanitize(text, { ALLOWED_TAGS: [] })

  // Trim whitespace
  return withoutHtml.trim()
}

/**
 * Sanitize HTML (allow safe HTML tags only)
 * Useful for rich text content from CMS or user input
 *
 * @param html - HTML string
 * @returns Sanitized HTML with only safe tags
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  })
}

/**
 * Sanitize email address
 * Ensures valid email format and prevents injection
 *
 * @param email - Email address
 * @returns Sanitized email or empty string if invalid
 */
export function sanitizeEmail(email: string): string {
  const sanitized = sanitizeText(email).toLowerCase()

  // Basic email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailRegex.test(sanitized) ? sanitized : ''
}

/**
 * Sanitize phone number (Ivory Coast format)
 * Removes all non-numeric characters except +
 *
 * @param phone - Phone number
 * @returns Sanitized phone number
 */
export function sanitizePhone(phone: string): string {
  // Keep only digits and +
  const cleaned = phone.replace(/[^\d+]/g, '')

  // Ensure it starts with +225 for Ivory Coast
  if (cleaned.startsWith('+225')) {
    return cleaned
  }

  return ''
}

/**
 * Sanitize URL
 * Ensures valid URL format and prevents javascript: or data: URLs
 *
 * @param url - URL string
 * @returns Sanitized URL or empty string if invalid
 */
export function sanitizeUrl(url: string): string {
  const sanitized = sanitizeText(url)

  try {
    const parsed = new URL(sanitized)

    // Only allow http and https protocols
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return sanitized
    }

    return ''
  } catch {
    return ''
  }
}
