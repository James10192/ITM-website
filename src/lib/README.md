# Lib (`/src/lib`)

Utilitaires, helpers, et configurations partagées pour le projet ITM Construction Métallique.

## Structure

```
lib/
├── utils.ts                    # Utilitaires généraux (cn, formatCurrency, etc.)
├── sanity/
│   ├── client.ts               # Client Sanity configuré
│   ├── image-url.ts            # Helper pour images Sanity (urlFor)
│   ├── queries.ts              # Requêtes Sanity (projets, settings)
│   └── types.ts                # Types TypeScript pour Sanity
├── email/
│   ├── resend-client.ts        # Client Resend configuré
│   └── templates.ts            # Templates d'emails (contact, devis)
├── validation/
│   ├── contact-form.schema.ts  # Schéma Zod pour formulaire contact
│   └── sanitize.ts             # Sanitization des inputs utilisateur
└── constants/
    ├── navigation.ts           # Menu de navigation
    └── social-links.ts         # Liens réseaux sociaux
```

## Utilitaires Généraux (`utils.ts`)

### `cn(...inputs: ClassValue[])`

Fonction pour combiner les classes Tailwind conditionnelles.

```typescript
import { cn } from '@/lib/utils'

<button
  className={cn(
    'px-6 py-3 rounded-md',
    isPrimary && 'bg-primary-800 text-white',
    isDisabled && 'opacity-50 cursor-not-allowed'
  )}
/>
```

### `formatCurrency(amount: number): string`

Formate un montant en FCFA.

```typescript
import { formatCurrency } from '@/lib/utils'

formatCurrency(19000000) // "19 000 000 FCFA"
```

### `formatPhoneNumber(phone: string): string`

Formate un numéro de téléphone au format ivoirien.

```typescript
import { formatPhoneNumber } from '@/lib/utils'

formatPhoneNumber('+2250777589211') // "+225 07 77 58 92 11"
```

### `slugify(text: string): string`

Génère un slug pour les URLs.

```typescript
import { slugify } from '@/lib/utils'

slugify('Maison Métallique IBAK HOME') // "maison-metallique-ibak-home"
```

### `truncate(text: string, length: number): string`

Tronque un texte avec ellipsis.

```typescript
import { truncate } from '@/lib/utils'

truncate('Texte très long...', 20) // "Texte très long..."
```

## Sanity CMS (`/lib/sanity`)

### Client Sanity (`client.ts`)

Client Sanity configuré avec les variables d'environnement.

```typescript
import { sanityClient } from '@/lib/sanity/client'

const projects = await sanityClient.fetch('*[_type == "project"]')
```

### Image URL Helper (`image-url.ts`)

Helper pour générer les URLs d'images Sanity optimisées.

```typescript
import { urlFor } from '@/lib/sanity/image-url'

<Image
  src={urlFor(project.image).width(800).url()}
  alt={project.title}
  width={800}
  height={600}
/>
```

**Options disponibles:**

```typescript
urlFor(image)
  .width(800) // Largeur
  .height(600) // Hauteur
  .quality(90) // Qualité JPEG (1-100)
  .blur(10) // Blur pour placeholder
  .auto('format') // Format automatique (WebP/AVIF)
  .url() // Génère l'URL finale
```

### Queries Sanity (`queries.ts`)

Requêtes Sanity réutilisables pour récupérer le contenu.

```typescript
import { getSanityProjects, getSanityProjectBySlug } from '@/lib/sanity/queries'

// Récupérer tous les projets
const projects = await getSanityProjects()

// Récupérer un projet par slug
const project = await getSanityProjectBySlug('maison-metallique-cocody')
```

**Requêtes disponibles:**

- `getSanityProjects()`: Tous les projets
- `getSanityProjectBySlug(slug)`: Un projet par slug
- `getSanityProjectsByCategory(category)`: Projets filtrés par catégorie
- `getSiteSettings()`: Paramètres du site (logo, contacts, réseaux sociaux)

### Types Sanity (`types.ts`)

Types TypeScript pour le contenu Sanity.

```typescript
import type { SanityProject, SanityImage, SiteSettings } from '@/lib/sanity/types'

const project: SanityProject = {
  _id: 'abc123',
  _type: 'project',
  title: 'Maison Métallique Cocody',
  slug: { current: 'maison-metallique-cocody' },
  category: 'maisons',
  location: 'Cocody, Abidjan',
  description: '...',
  image: { ... },
  gallery: [...],
}
```

## Email (`/lib/email`)

### Client Resend (`resend-client.ts`)

Client Resend configuré pour envoyer des emails.

```typescript
import { sendContactEmail } from '@/lib/email/resend-client'

await sendContactEmail({
  to: 'itmcotedivoire@gmail.com',
  from: 'contact@itm-construction.ci',
  name: 'Jean Dupont',
  phone: '+225 07 77 58 92 11',
  email: 'jean@example.com',
  projectType: 'Maison métallique (IBAK HOME)',
  budget: '19M - 30M FCFA',
  message: 'Je souhaite un devis...',
})
```

### Templates d'Emails (`templates.ts`)

Templates HTML pour les emails (contact, devis).

```typescript
import { contactEmailTemplate } from '@/lib/email/templates'

const html = contactEmailTemplate({
  name: 'Jean Dupont',
  phone: '+225 07 77 58 92 11',
  email: 'jean@example.com',
  projectType: 'Maison métallique (IBAK HOME)',
  budget: '19M - 30M FCFA',
  message: 'Je souhaite un devis...',
})
```

## Validation (`/lib/validation`)

### Schéma Contact Form (`contact-form.schema.ts`)

Schéma Zod pour valider le formulaire de contact.

```typescript
import { contactFormSchema } from '@/lib/validation/contact-form.schema'

const result = contactFormSchema.safeParse(formData)

if (!result.success) {
  console.error(result.error.errors)
}
```

**Validation rules:**

```typescript
{
  name: z.string().min(2, "Nom requis").max(100),
  phone: z.string().regex(/^\+225\s\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/, "Format invalide"),
  email: z.string().email("Email invalide"),
  projectType: z.enum([...], "Sélectionnez un type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message trop court").max(1000, "Message trop long"),
}
```

### Sanitization (`sanitize.ts`)

Fonctions pour nettoyer les inputs utilisateur (prévention XSS).

```typescript
import { sanitizeHtml, sanitizeText } from '@/lib/validation/sanitize'

const clean = sanitizeText(userInput) // Nettoie le texte (pas de HTML)
const cleanHtml = sanitizeHtml(userHtml) // Nettoie HTML (balises autorisées uniquement)
```

## Constants (`/lib/constants`)

### Navigation (`navigation.ts`)

Menu de navigation principal.

```typescript
import { navigationLinks } from '@/lib/constants/navigation'

navigationLinks.forEach(link => {
  console.log(link.label, link.href)
})
```

**Structure:**

```typescript
export const navigationLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'IBAK HOME', href: '/ibak-home' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]
```

### Réseaux Sociaux (`social-links.ts`)

Liens vers les réseaux sociaux et contact.

```typescript
import { socialLinks } from '@/lib/constants/social-links'

socialLinks.forEach(link => {
  console.log(link.name, link.url, link.icon)
})
```

## Conventions

### 1. Nommage des Fichiers

- **Utilitaires généraux**: `utils.ts`
- **Modules spécifiques**: `[module]/[feature].ts` (ex: `sanity/queries.ts`)
- **Types**: `types.ts` ou `[module].types.ts`

### 2. Exports

Toujours utiliser des **named exports** (pas de default exports):

```typescript
// ✅ Bon
export function formatCurrency(amount: number): string { ... }

// ❌ Éviter
export default function formatCurrency(amount: number): string { ... }
```

### 3. Types

Tous les helpers doivent être **typés** avec TypeScript:

```typescript
// ✅ Bon
export function formatCurrency(amount: number): string {
  return `${new Intl.NumberFormat('fr-FR').format(amount)} FCFA`
}

// ❌ Éviter
export function formatCurrency(amount) {
  return `${new Intl.NumberFormat('fr-FR').format(amount)} FCFA`
}
```

### 4. Tests

Tous les utilitaires doivent avoir des tests unitaires:

```typescript
import { describe, it, expect } from 'vitest'
import { formatCurrency } from './utils'

describe('formatCurrency', () => {
  it('formats numbers correctly', () => {
    expect(formatCurrency(19000000)).toBe('19 000 000 FCFA')
  })
})
```

## Ressources

- [Zod Documentation](https://zod.dev/)
- [Sanity Client](https://www.sanity.io/docs/js-client)
- [Resend Documentation](https://resend.com/docs)
- [DOMPurify](https://github.com/cure53/DOMPurify)
