import { z } from 'zod'

/**
 * Environment Variables Validation Schema
 * Validates all required and optional environment variables at build time
 * Prevents runtime errors due to missing or invalid configuration
 */

const envSchema = z.object({
  // Node Environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  // Sanity CMS (OPTIONAL - uses mock data if not configured)
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default('production'),
  SANITY_API_TOKEN: z.string().optional(),

  // Site Configuration
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url({
      message: 'NEXT_PUBLIC_SITE_URL must be a valid URL',
    })
    .default('http://localhost:3000'),

  // Resend Email API (OPTIONAL - contact form will be disabled if not configured)
  RESEND_API_KEY: z.string().optional(),

  // Cloudflare Turnstile (CAPTCHA) - REQUIRED for production
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),

  // Database (OPTIONAL - for form submissions if using Supabase)
  DATABASE_URL: z
    .string()
    .url({
      message: 'DATABASE_URL must be a valid PostgreSQL connection string',
    })
    .optional(),

  // Build Analysis (OPTIONAL - development only)
  ANALYZE: z
    .string()
    .transform(val => val === 'true')
    .optional(),
})

/**
 * Validates environment variables and provides type-safe access
 * Throws error if required variables are missing or invalid
 */
const parseEnv = () => {
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map(err => `  - ${err.path.join('.')}: ${err.message}`)

      throw new Error(
        `❌ Invalid environment variables:\n\n${missingVars.join('\n')}\n\n` +
          `Please check your .env.local file and compare with .env.local.example\n` +
          `See CLAUDE.md for complete environment setup instructions.`
      )
    }
    throw error
  }
}

/**
 * Validated and type-safe environment variables
 * Use this throughout the application instead of process.env
 */
export const env = parseEnv()

/**
 * Type definition for environment variables
 * Enables TypeScript autocomplete and type checking
 */
export type Env = z.infer<typeof envSchema>
