import { z } from 'zod'

/**
 * Contact Form Validation Schema
 * Used for both frontend (React Hook Form) and backend (API route) validation
 */

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Veuillez entrer votre nom complet' })
    .max(100, { message: 'Le nom ne doit pas dépasser 100 caractères' })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, {
      message: 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets',
    }),

  phone: z
    .string()
    .min(1, { message: 'Le numéro de téléphone est requis' })
    .regex(/^\+225\s\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/, {
      message: 'Format de téléphone invalide. Exemple: +225 07 77 58 92 11',
    }),

  email: z.string().email({ message: 'Adresse email invalide' }),

  projectType: z.enum(
    [
      'Maison métallique (IBAK HOME)',
      'Porte ou portail',
      'Palissade ou clôture',
      'Mobilier métallique',
      'Projet sur mesure',
    ],
    {
      errorMap: () => ({ message: 'Veuillez sélectionner un type de projet' }),
    }
  ),

  budget: z
    .enum([
      'Moins de 19M FCFA',
      '19M - 30M FCFA',
      '30M - 50M FCFA',
      '50M - 100M FCFA',
      'Plus de 100M FCFA',
      'À discuter',
    ])
    .optional(),

  message: z
    .string()
    .min(10, { message: 'Votre message doit contenir au moins 10 caractères' })
    .max(1000, { message: 'Votre message ne doit pas dépasser 1000 caractères' }),

  // Cloudflare Turnstile token (CAPTCHA)
  turnstileToken: z.string().min(1, { message: 'Vérification CAPTCHA requise' }),
})

/**
 * TypeScript type inferred from schema
 * Use this for form types
 */
export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Project Type Options (for select dropdown)
 */
export const projectTypeOptions = [
  { value: 'Maison métallique (IBAK HOME)', label: 'Maison métallique (IBAK HOME)' },
  { value: 'Porte ou portail', label: 'Porte ou portail' },
  { value: 'Palissade ou clôture', label: 'Palissade ou clôture' },
  { value: 'Mobilier métallique', label: 'Mobilier métallique' },
  { value: 'Projet sur mesure', label: 'Projet sur mesure' },
] as const

/**
 * Budget Options (for select dropdown)
 */
export const budgetOptions = [
  { value: 'Moins de 19M FCFA', label: 'Moins de 19M FCFA' },
  { value: '19M - 30M FCFA', label: '19M - 30M FCFA' },
  { value: '30M - 50M FCFA', label: '30M - 50M FCFA' },
  { value: '50M - 100M FCFA', label: '50M - 100M FCFA' },
  { value: 'Plus de 100M FCFA', label: 'Plus de 100M FCFA' },
  { value: 'À discuter', label: 'À discuter' },
] as const
