# ITM Construction Métallique - Documentation Développement

**Version**: 1.0
**Dernière mise à jour**: 2025-12-19
**Stack**: Next.js 15 + React + Tailwind CSS + Sanity CMS + Vercel
**Type**: Site Vitrine Premium (Showcase Website)

---

## 📖 Contexte du Projet

### Vision

**ITM Construction Métallique** est une entreprise ivoirienne spécialisée dans la construction métallique haut de gamme. Ce site vitrine vise à :

1. **Inspirer confiance** : Positionner ITM comme leader de la construction métallique premium en Côte d'Ivoire
2. **Générer des leads qualifiés** : Attirer des clients capables d'investir à partir de 19M FCFA (particuliers fortunés, promoteurs immobiliers, entreprises)
3. **Showcaser l'expertise** : Présenter les réalisations (maisons IBAK HOME, portes, palissades, mobilier métallique)
4. **Convertir** : Transformer les visiteurs en demandes de devis qualifiées

**Promesse centrale** : "Construire aujourd'hui des structures métalliques durables, élégantes et intelligentes pour l'Afrique moderne"

**Référence design** : Site immobilier ADOHA (design premium, minimaliste, architectural)

### Architecture Globale

```
┌─────────────────────────────────────────────────────────────┐
│                      UTILISATEUR FINAL                       │
│         (Mobile 4G Côte d'Ivoire, Desktop WiFi)             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              VERCEL EDGE NETWORK (CDN Global)                │
│  - Routing automatique vers edge le plus proche             │
│  - Cache statique (SSG pages)                                │
│  - Image optimization (WebP/AVIF)                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│           NEXT.JS 15 APP (Vercel Serverless)                 │
│                                                               │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │   Pages     │  │  API Routes  │  │  Server Actions  │   │
│  │   (RSC)     │  │  /api/*      │  │  (form submit)   │   │
│  └─────────────┘  └──────────────┘  └──────────────────┘   │
└─────┬─────────────────┬────────────────────┬────────────────┘
      │                 │                    │
      ▼                 ▼                    ▼
┌──────────┐   ┌──────────────┐   ┌──────────────────┐
│ Sanity   │   │   Resend     │   │  Supabase DB     │
│  CMS     │   │   Email API  │   │  (optionnel)     │
│ (Images, │   │  (Contact    │   │  (Form storage)  │
│ Gallery) │   │  forms)      │   │                  │
└──────────┘   └──────────────┘   └──────────────────┘
```

**Flow utilisateur typique:**
1. Recherche Google "maison métallique Abidjan" → Landing sur Home
2. Consulte galerie "Réalisations" (filtre par "Maisons")
3. Visite page "IBAK HOME" (maisons déplaçables)
4. Remplit formulaire contact/devis
5. Email envoyé à ITM + confirmation client

### Personas Cibles

1. **Jean-Marc Kouassi** (Particulier fortuné)
   - **Âge**: 35-55 ans, cadre supérieur
   - **Besoin**: Maison moderne, durable, rapide à construire (IBAK HOME)
   - **Budget**: 19M - 50M FCFA
   - **Comportement**: Mobile-first (4G Abidjan), consulte galerie, compare qualité/prix

2. **Aminata Diallo** (Promoteur immobilier)
   - **Âge**: 40-60 ans
   - **Besoin**: Construire lotissements rapidement avec structures métalliques
   - **Budget**: 50M - 500M FCFA (projets multiples)
   - **Comportement**: Desktop, demande devis personnalisé, références clients

3. **Directeur Général Entreprise**
   - **Âge**: 45-65 ans
   - **Besoin**: Portes, portails, palissades sécurisées pour locaux professionnels
   - **Budget**: 5M - 100M FCFA
   - **Comportement**: Recherche sécurité, robustesse, esthétique professionnelle

4. **Investisseur immobilier**
   - **Âge**: 35-60 ans (diaspora incluse)
   - **Besoin**: Actifs immobiliers rentables (IBAK HOME pour location/revente)
   - **Budget**: 20M - 200M FCFA
   - **Comportement**: Analyse ROI, durabilité, valorisation long terme

---

## 🎯 Règles de Développement Strictes

### 1. Standards de Code

#### TypeScript Strict

**RÈGLE ABSOLUE** : TypeScript strict mode OBLIGATOIRE

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}

// ✅ TOUJOURS - Types explicites
interface ContactFormData {
  name: string
  phone: string
  email: string
  projectType: 'maison' | 'porte' | 'palissade' | 'mobilier' | 'sur-mesure'
  budget?: 'moins-19M' | '19-30M' | '30-50M' | '50-100M' | 'plus-100M' | 'a-discuter'
  message: string
}

async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  // Implementation
}

// ❌ JAMAIS - any
function processData(data: any) { // INTERDIT
  return data.someProperty
}

// ✅ FAIRE - unknown + type guard
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'someProperty' in data) {
    return (data as { someProperty: string }).someProperty
  }
  throw new Error('Invalid data shape')
}
```

#### Conventions Nommage

```typescript
// ✅ Files: kebab-case
// src/components/sections/hero-section.tsx
// src/components/ui/button-primary.tsx
// src/app/ibak-home/page.tsx

// ✅ Components: PascalCase
export function HeroSection() { }
export function ButtonPrimary() { }
export function ContactForm() { }

// ✅ Functions/variables: camelCase
const fetchProjects = async () => { }
const projectList = []
const isLoading = false

// ✅ Constants: UPPER_SNAKE_CASE
const MAX_UPLOAD_SIZE = 5 * 1024 * 1024
const API_BASE_URL = 'https://api.example.com'

// ✅ Types/Interfaces: PascalCase
interface Project { }
type ProjectCategory = 'maisons' | 'portes' | 'palissades' | 'meubles'
```

#### Structure Fichiers Next.js App Router

```
src/app/
├── (pages)/                    # Route group (layout commun pages publiques)
│   ├── page.tsx                # Home (/)
│   ├── solutions/
│   │   └── page.tsx            # /solutions
│   ├── ibak-home/
│   │   └── page.tsx            # /ibak-home
│   ├── realisations/
│   │   ├── page.tsx            # /realisations (gallery)
│   │   └── [slug]/             # /realisations/[slug] (projet individuel)
│   │       └── page.tsx
│   ├── a-propos/
│   │   └── page.tsx            # /a-propos
│   └── contact/
│       └── page.tsx            # /contact
├── api/
│   └── contact/
│       └── route.ts            # POST /api/contact
├── layout.tsx                  # Root layout
├── globals.css                 # Tailwind imports
├── not-found.tsx               # 404 page
└── error.tsx                   # Error boundary

RÈGLES:
- 1 page.tsx par route (React Server Component par défaut)
- Server Components pour fetching data (Sanity)
- Client Components uniquement si interactivité (filtres, forms, modals)
- Colocation: components proches de leur usage (ibak-home/components/)
```

📖 **Détails**: Voir `/src/app/README.md`

---

### 2. Gestion des Erreurs

#### Résumé

- ✅ **Try-catch** pour toutes les opérations async (fetch Sanity, submit form)
- ✅ **Error boundaries** (error.tsx) pour UI crashes
- ✅ **Result type pattern** : `{ success: boolean, data?, error? }`
- ✅ **Logging** : `console.error` (dev), Vercel logs (production)

**Pattern standard pour API Routes:**

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^\+225\s?\d{10}$/, 'Format invalide: +225 XX XX XX XX XX'),
  message: z.string().min(10, 'Message trop court'),
})

export async function POST(request: NextRequest) {
  try {
    // 1. Parse et valide input
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // 2. Business logic (send email)
    // await sendEmail(validatedData)

    // 3. Success response
    return NextResponse.json(
      { success: true, message: 'Demande envoyée avec succès' },
      { status: 200 }
    )
  } catch (error) {
    // 4. Error handling
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
```

📖 **Détails**: Voir `/src/lib/README.md` (Error handling patterns)

---

### 3. Validation Variables d'Environnement (Zod)

#### Setup

```typescript
// src/env.ts
import { z } from 'zod'

const envSchema = z.object({
  // Public (NEXT_PUBLIC_ = exposées au client)
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default('production'),
  NEXT_PUBLIC_SITE_URL: z.string().url(),

  // Private (serveur uniquement)
  SANITY_API_TOKEN: z.string().min(1),
  RESEND_API_KEY: z.string().startsWith('re_'),
  DATABASE_URL: z.string().url().optional(),
})

// ⚠️ CRITICAL: Parse au build time (fail si env invalide)
export const env = envSchema.parse({
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
})

// Aide TypeScript: autocomplete + type safety
declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
```

#### RÈGLE CRITIQUE

**TOUJOURS importer `env` depuis `src/env.ts`, JAMAIS `process.env` directement**

```typescript
// ❌ JAMAIS
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // Type: string | undefined (unsafe)

// ✅ TOUJOURS
import { env } from '@/env'
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID // Type: string (safe, validated)
```

#### Utilisation

```typescript
// src/lib/sanity/client.ts
import { createClient } from '@sanity/client'
import { env } from '@/env'

export const sanityClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: env.SANITY_API_TOKEN, // Server-side only
  useCdn: process.env.NODE_ENV === 'production',
})
```

📖 **Configuration**: Voir `.env.local.example`

---

### 4. CMS - Sanity.io

#### Stack

- **Sanity Studio v3**: Headless CMS (gestion contenu via UI)
- **@sanity/client**: Fetch data depuis Next.js
- **@sanity/image-url**: Image optimization + CDN
- **GROQ**: Query language (similaire GraphQL mais plus simple)

#### Règles Essentielles

- ✅ **Fetch server-side** (React Server Components) = SEO optimal + pas d'API key exposée
- ✅ **CDN Sanity** pour images (automatic WebP/AVIF, responsive sizes)
- ✅ **ISR (Incremental Static Regeneration)** : revalidate gallery toutes les 60s
- ✅ **TypeScript**: Générer types depuis schemas (`sanity typegen`)

```typescript
// ✅ GOOD - Server Component (RSC)
// src/app/realisations/page.tsx
import { sanityClient } from '@/lib/sanity/client'
import { projectsQuery } from '@/lib/sanity/queries'

export const revalidate = 60 // ISR: Regenerate page toutes les 60s

export default async function RealisationsPage() {
  const projects = await sanityClient.fetch(projectsQuery)

  return <ProjectGallery projects={projects} />
}

// ❌ BAD - Client Component (expose API key, pas de SSR)
'use client'
import { useState, useEffect } from 'react'

export default function RealisationsPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects').then(res => res.json()).then(setProjects)
  }, [])

  return <ProjectGallery projects={projects} />
}
```

#### Schemas Sanity

```typescript
// sanity/schemas/project.ts
import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Projet (Réalisation)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du projet',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Maisons métalliques', value: 'maisons' },
          { title: 'Portes et portails', value: 'portes' },
          { title: 'Palissades et clôtures', value: 'palissades' },
          { title: 'Mobilier métallique', value: 'meubles' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lieu (Ville, Région)',
      type: 'string',
      placeholder: 'Abidjan, Cocody',
    }),
    defineField({
      name: 'clientObjective',
      title: 'Objectif client',
      type: 'text',
      rows: 3,
      description: '1-2 phrases décrivant le besoin du client et le résultat',
    }),
    defineField({
      name: 'images',
      title: 'Photos du projet',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Projet vedette (afficher en premier)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'images.0',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
```

📖 **Détails**: Voir `/sanity/README.md`

---

### 5. Architecture Client/Server (Next.js 15 App Router)

#### RÈGLE CRITIQUE

**Par défaut = Server Component (RSC)**. Client Component (`'use client'`) uniquement si:
- Interactivité (onClick, onChange, useState, useEffect)
- Hooks React (useState, useContext)
- Browser APIs (window, localStorage, IntersectionObserver)

```typescript
// ❌ NE PAS FAIRE - Client Component inutile
'use client'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.location}</p>
    </div>
  )
}

// ✅ FAIRE - Server Component (pas d'interactivité)
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.location}</p>
    </div>
  )
}

// ✅ FAIRE - Client Component (interactivité nécessaire)
'use client'

export function ProjectFilters({ onFilterChange }: { onFilterChange: (category: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const handleClick = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="filters">
      {['all', 'maisons', 'portes', 'palissades', 'meubles'].map(category => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={activeCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
```

#### Checklist

Avant de mettre `'use client'`, demandez-vous:
1. **Ai-je besoin d'un hook React** (useState, useEffect, useContext) ? → OUI = Client
2. **Ai-je besoin d'event handlers** (onClick, onChange) ? → OUI = Client
3. **Ai-je besoin de browser APIs** (window, localStorage, IntersectionObserver) ? → OUI = Client
4. **Sinon** → Server Component (par défaut)

📖 **Détails**: Voir Next.js App Router docs (https://nextjs.org/docs/app)

---

### 6. Components UI (shadcn/ui + Radix UI)

#### Organisation

```
src/components/
├── ui/                    # shadcn/ui components (copiés depuis shadcn.com/ui)
│   ├── button.tsx         # Variants: default, secondary, ghost, destructive
│   ├── card.tsx           # Card, CardHeader, CardTitle, CardContent
│   ├── input.tsx          # Input avec validation styling
│   ├── label.tsx
│   ├── textarea.tsx
│   ├── select.tsx
│   └── ...
├── layout/                # Layout components
│   ├── header.tsx         # Site header + navigation
│   ├── footer.tsx         # Footer avec liens, contact, social
│   └── mobile-nav.tsx     # Mobile hamburger menu
├── sections/              # Page sections (composables)
│   ├── hero-section.tsx   # Hero avec background image + CTA
│   ├── gallery-grid.tsx   # Grid projets avec filtres
│   ├── contact-form.tsx   # Formulaire contact/devis
│   └── ...
└── shared/                # Shared components
    ├── logo.tsx
    ├── social-links.tsx
    └── ...
```

#### Best Practices

- ✅ **shadcn/ui**: Copier composants (pas de NPM dependency) = full control
- ✅ **Radix UI primitives**: Accessible par défaut (keyboard navigation, ARIA, screen readers)
- ✅ **Tailwind variants**: `cva` (class-variance-authority) pour variants propres
- ✅ **Composition**: Petits composants réutilisables (Button + Icon, Card + Image)

**Exemple: Button avec variants**

```typescript
// src/components/ui/button.tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles (tous les boutons)
  'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-800 text-white hover:bg-primary-700',
        secondary: 'border border-primary-800 text-primary-800 hover:bg-primary-900/10',
        ghost: 'hover:bg-grey-100 text-primary-800',
        destructive: 'bg-error text-white hover:bg-error/90',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
```

**Usage:**

```typescript
import { Button } from '@/components/ui/button'

<Button>Demander un devis</Button>
<Button variant="secondary">En savoir plus</Button>
<Button variant="ghost" size="sm">Annuler</Button>
```

📖 **Détails**: Voir `/src/components/README.md`

---

### 7. Performance & Optimisation

#### React Server Components

- ✅ **Fetch data server-side** : Moins de JavaScript client, meilleur SEO
- ✅ **Suspense boundaries** : Streaming HTML (affiche UI progressivement)
- ✅ **Metadata API** : SEO tags (title, description) générés server-side

```typescript
// src/app/realisations/[slug]/page.tsx
import { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity/client'
import { projectBySlugQuery } from '@/lib/sanity/queries'

// ✅ Generate metadata (SEO)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await sanityClient.fetch(projectBySlugQuery, { slug: params.slug })

  return {
    title: `${project.title} - Réalisations ITM`,
    description: project.clientObjective || `Projet de ${project.category} réalisé par ITM à ${project.location}`,
    openGraph: {
      images: [project.images[0]?.url],
    },
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await sanityClient.fetch(projectBySlugQuery, { slug: params.slug })
  return <ProjectDetail project={project} />
}
```

#### Next.js Image Optimization

```typescript
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image-url'

// ✅ TOUJOURS utiliser next/image (pas <img>)
<Image
  src={urlFor(project.images[0]).width(800).url()}
  alt={`${project.title} - Construction métallique ITM`}
  width={800}
  height={600}
  className="rounded-lg"
  loading="lazy"
  placeholder="blur"
  blurDataURL={urlFor(project.images[0]).width(20).blur(10).url()}
/>

// ❌ JAMAIS <img> directe (pas d'optimization)
<img src={imageUrl} alt="project" />
```

**Bénéfices:**
- Automatic WebP/AVIF conversion
- Responsive images (srcset)
- Lazy loading (IntersectionObserver)
- Blur placeholder (LCP amélioration)
- CDN caching

#### Lazy Loading & Code Splitting

```typescript
import dynamic from 'next/dynamic'

// ✅ Lazy load components lourds (charts, maps, chatbot)
const ChatWidget = dynamic(() => import('@/components/chat-widget'), {
  ssr: false, // Pas de SSR (browser-only)
  loading: () => <div>Chargement...</div>,
})

// Usage
export default function ContactPage() {
  return (
    <div>
      <ContactForm />
      <ChatWidget /> {/* Chargé seulement quand visible */}
    </div>
  )
}
```

#### ISR (Incremental Static Regeneration)

```typescript
// src/app/realisations/page.tsx
export const revalidate = 60 // Regenerate toutes les 60 secondes

export default async function RealisationsPage() {
  const projects = await sanityClient.fetch(projectsQuery)
  return <ProjectGallery projects={projects} />
}

// Résultat:
// - 1ère requête: SSG (statique, cache)
// - Après 60s: Regenerate en background
// - Utilisateurs suivants: Version mise à jour
```

---

## 🎨 Design System

### Typographie

**Fonts**: Poppins (headings), Inter (body)
**Loading**: `next/font/google` avec `font-display: swap`

```typescript
// src/app/layout.tsx
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

**Tailwind config:**

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Body (défaut)
        heading: ['var(--font-poppins)', 'sans-serif'], // Headings
      },
      fontSize: {
        // H1 (Hero)
        'hero': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-mobile': ['40px', { lineHeight: '1.1', fontWeight: '700' }],
        // H2 (Section)
        'section': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        // H3 (Subsection)
        'subsection': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'subsection-mobile': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        // H4
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-mobile': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        // Body
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        // Small
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
}
```

**Usage:**

```typescript
<h1 className="font-heading text-hero md:text-hero-mobile">Titre Hero</h1>
<h2 className="font-heading text-section md:text-section-mobile">Section Title</h2>
<p className="text-body md:text-body-mobile">Paragraph text</p>
```

### Couleurs

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1A1A1A', // Charcoal darkest
          800: '#2C2C2C', // Charcoal main
          700: '#3F3F3F',
        },
        secondary: {
          600: '#52565E', // Anthracite main
          500: '#6B7280',
        },
        accent: {
          500: '#B87333', // Copper (usage subtil: icons, hover)
        },
        white: '#FFFFFF',
        'off-white': '#F9FAFB',
        grey: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          900: '#111827',
        },
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
    },
  },
}
```

**Usage:**

```typescript
<button className="bg-primary-800 text-white hover:bg-primary-700">
  Demander un devis
</button>
<div className="border border-grey-200 bg-off-white">Card</div>
<p className="text-error">Erreur: champ requis</p>
```

### Spacing (8px baseline grid)

```javascript
// tailwind.config.ts (spacing déjà inclus mais référence)
spacing: {
  xs: '8px',    // 0.5rem (2)
  sm: '16px',   // 1rem (4)
  md: '24px',   // 1.5rem (6)
  lg: '32px',   // 2rem (8)
  xl: '48px',   // 3rem (12)
  '2xl': '64px',  // 4rem (16)
  '3xl': '96px',  // 6rem (24)
}
```

**Usage:**

```typescript
<section className="py-2xl"> {/* 64px padding vertical */}
  <div className="space-y-lg"> {/* 32px gap entre enfants */}
    <h2 className="mb-md">Title</h2> {/* 24px margin bottom */}
    <p>Content</p>
  </div>
</section>
```

### Breakpoints (Mobile-First)

```javascript
screens: {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

**Usage:**

```typescript
<div className="
  grid
  grid-cols-1        {/* Mobile: 1 colonne */}
  md:grid-cols-2     {/* Tablet: 2 colonnes */}
  lg:grid-cols-3     {/* Desktop: 3 colonnes */}
  gap-md
">
  {projects.map(project => <ProjectCard key={project.id} {...project} />)}
</div>
```

---

## 🚀 Performance & SEO

### Performance Targets (Lighthouse Mobile)

- **Performance**: ≥90
- **Accessibility**: ≥95
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals

- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### SEO Keywords (Français - Côte d'Ivoire)

**Primary:**
- construction métallique Côte d'Ivoire
- maison métallique Abidjan
- construction métallique Abidjan
- IBAK HOME Abidjan

**Secondary:**
- porte métallique Côte d'Ivoire
- palissade métallique Abidjan
- construction métallique durable

**Long-tail:**
- maison métallique déplaçable prix
- construction métallique rapide Abidjan
- investissement immobilier métallique Côte d'Ivoire

### Meta Tags (Example)

```typescript
// src/app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'ITM Construction Métallique | Côte d\'Ivoire',
    template: '%s | ITM Construction',
  },
  description: 'Constructions métalliques sur mesure à Abidjan : maisons déplaçables IBAK HOME, portes, palissades. Investissement durable dès 19M FCFA. Devis gratuit.',
  keywords: ['construction métallique', 'maison métallique', 'Abidjan', 'IBAK HOME', 'Côte d\'Ivoire'],
  authors: [{ name: 'ITM Construction Métallique' }],
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: 'https://itm-construction.ci',
    siteName: 'ITM Construction Métallique',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

---

## 🔄 Règles de Commit Git

### Format Commit Messages (Conventional Commits)

**OBLIGATOIRE**

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

**Types autorisés:**
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction bug
- `refactor` : Refactoring (pas de changement fonctionnel)
- `perf` : Amélioration performance
- `style` : Formatage, lint
- `test` : Ajout/modification tests
- `docs` : Documentation uniquement
- `chore` : Maintenance (deps, config)
- `ci` : CI/CD changes

**Exemples:**

```bash
feat(gallery): add filtering by project category
fix(contact-form): validate Côte d'Ivoire phone number format
docs(readme): add Sanity CMS setup instructions
chore(deps): update Next.js to 15.1.0
perf(images): implement blur placeholder for LCP
```

**Pre-commit hook** (Husky + lint-staged) valide format automatiquement.

---

## 📚 Documentation Modulaire

**Structure documentation:**

- `/CLAUDE.md` (ce fichier) : Documentation technique principale
- `/BEST_PRACTICES.md` : Best practices (performance, accessibility, SEO, security)
- `/src/README.md` : Overview structure src/
- `/src/components/README.md` : Component library documentation
- `/src/app/README.md` : Next.js App Router structure, routing
- `/src/lib/README.md` : Utility functions, helpers
- `/sanity/README.md` : Sanity CMS setup, schemas, content management
- `/docs/CONTENT_STRATEGY.md` : Contenu pages, copywriting, SEO
- `/docs/QUESTIONNAIRE_PRD_RESPONSES.md` : Réponses questionnaire PRD

**Convention:** Chaque dossier majeur a un README.md expliquant son contenu et usage.

---

## 🔗 Liens Utiles

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Sanity Docs**: https://www.sanity.io/docs
- **Vercel Deployment**: https://vercel.com/docs
- **Resend Email API**: https://resend.com/docs

---

**FIN DE CLAUDE.MD**

**Dernière mise à jour**: 2025-12-19
**Mainteneur**: Équipe ITM Dev
**Version**: 1.0
