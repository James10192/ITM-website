# App Router (`/src/app`)

Structure Next.js 15 App Router pour le site ITM Construction Métallique.

## Structure

```
app/
├── layout.tsx                 # Root layout (fonts, Analytics, metadata)
├── page.tsx                   # Page d'accueil (/)
├── globals.css                # Styles globaux Tailwind
├── solutions/
│   └── page.tsx               # Page Solutions (/solutions)
├── ibak-home/
│   └── page.tsx               # Page IBAK HOME (/ibak-home)
├── realisations/
│   ├── page.tsx               # Page Réalisations (/realisations)
│   └── [slug]/
│       └── page.tsx           # Détail projet (/realisations/[slug])
├── a-propos/
│   └── page.tsx               # Page À propos (/a-propos)
├── contact/
│   └── page.tsx               # Page Contact/Devis (/contact)
├── api/
│   ├── contact/
│   │   └── route.ts           # API route POST /api/contact
│   └── revalidate/
│       └── route.ts           # API route POST /api/revalidate (Sanity webhook)
├── not-found.tsx              # Page 404
└── error.tsx                  # Page d'erreur générique
```

## Pages

### Page d'Accueil (`/`)

**Route:** `/`
**Fichier:** `/src/app/page.tsx`

**Sections:**

1. Hero Section (image + titre + CTAs)
2. Nos Expertises (4 catégories: Maisons, Portes, Palissades, Meubles)
3. IBAK HOME Preview (CTA vers page dédiée)
4. Projets Récents (galerie 6 projets avec filtres)
5. À propos ITM (vision, mission, CTA)
6. Contact (formulaire + infos)

### Page Solutions (`/solutions`)

**Route:** `/solutions`
**Fichier:** `/src/app/solutions/page.tsx`

**Sections:**

1. Maisons Métalliques (IBAK HOME)
2. Portes et Portails
3. Palissades et Clôtures
4. Mobilier Métallique

### Page IBAK HOME (`/ibak-home`)

**Route:** `/ibak-home`
**Fichier:** `/src/app/ibak-home/page.tsx`

**Sections:**

1. Hero (titre + description + prix)
2. Caractéristiques (98% déplaçable, rapide, durable)
3. Plans disponibles (3 modèles)
4. Processus (4 étapes)
5. FAQ
6. CTA Devis

### Page Réalisations (`/realisations`)

**Route:** `/realisations`
**Fichier:** `/src/app/realisations/page.tsx`

**Galerie filtrée:**

- Filtres: Tous, Maisons, Portes, Palissades, Meubles
- Grid responsive (1 col mobile → 3 cols desktop)
- Lightbox pour agrandir les images
- Pagination ou infinite scroll

### Détail Projet (`/realisations/[slug]`)

**Route:** `/realisations/[slug]`
**Fichier:** `/src/app/realisations/[slug]/page.tsx`

**Contenu:**

- Image principale (lightbox)
- Titre projet
- Lieu, type de réalisation
- Description complète
- Objectif client
- Galerie supplémentaire (si disponible)
- CTA "Projet similaire ?" → Contact

**Génération statique:**

```typescript
export async function generateStaticParams() {
  const projects = await getSanityProjects()
  return projects.map(project => ({ slug: project.slug.current }))
}
```

### Page À propos (`/a-propos`)

**Route:** `/a-propos`
**Fichier:** `/src/app/a-propos/page.tsx`

**Sections:**

1. Histoire ITM
2. Vision et Mission
3. Équipe (photos + descriptions)
4. Certifications et Partenaires
5. Nos Engagements (qualité, durabilité, innovation)

### Page Contact (`/contact`)

**Route:** `/contact`
**Fichier:** `/src/app/contact/page.tsx`

**Contenu:**

- Formulaire de contact/devis (ContactForm component)
- Informations de contact (téléphone, email, adresse)
- WhatsApp Business CTA
- Carte (si Google Maps API configurée)

## API Routes

### POST `/api/contact`

**Fichier:** `/src/app/api/contact/route.ts`

Traite les soumissions du formulaire de contact/devis.

**Flow:**

1. Validation avec Zod
2. Vérification Cloudflare Turnstile (CAPTCHA)
3. Sanitization des données (DOMPurify)
4. Rate limiting (max 5 soumissions/heure/IP)
5. Envoi email via Resend
6. (Optionnel) Sauvegarde en base de données
7. Retour JSON success/error

**Usage:**

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jean Dupont',
    phone: '+225 07 77 58 92 11',
    email: 'jean@example.com',
    projectType: 'Maison métallique (IBAK HOME)',
    budget: '19M - 30M FCFA',
    message: 'Je souhaite un devis pour une maison IBAK HOME.',
    turnstileToken: 'xxx',
  }),
})

const data = await response.json()
```

### POST `/api/revalidate`

**Fichier:** `/src/app/api/revalidate/route.ts`

Webhook Sanity pour revalider les pages quand le contenu change (ISR).

**Configuration Sanity Webhook:**

- URL: `https://itm-construction.ci/api/revalidate`
- HTTP method: POST
- Trigger: Publish/Unpublish (Project document type)
- Secret: `SANITY_REVALIDATE_SECRET` (env var)

**Flow:**

1. Vérification du secret Sanity
2. Revalidation des routes concernées (`revalidatePath('/realisations')`)
3. Retour JSON success

## Metadata et SEO

Chaque page doit avoir un objet `metadata` pour le SEO:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Réalisations | ITM Construction Métallique',
  description:
    'Découvrez nos réalisations : maisons, portes, palissades et mobilier métallique à Abidjan et en Côte d\'Ivoire. Plus de 100+ projets livrés.',
  keywords: [
    'réalisations construction métallique',
    'portfolio ITM',
    'projets Abidjan',
    'maisons métalliques Côte d\'Ivoire',
  ],
  openGraph: {
    title: 'Nos Réalisations | ITM Construction Métallique',
    description: 'Plus de 100+ projets métalliques livrés en Côte d\'Ivoire',
    images: ['/images/realisations-og.jpg'],
  },
}
```

## Conventions Next.js 15 App Router

### 1. Server Components par Défaut

Tous les composants sont **Server Components** par défaut (meilleur SEO, performance).

```typescript
// ✅ Server Component (pas de "use client")
export default async function RealisationsPage() {
  const projects = await getSanityProjects()

  return (
    <main>
      <h1>Nos Réalisations</h1>
      <ProjectGallery projects={projects} />
    </main>
  )
}
```

### 2. Client Components

Utiliser `"use client"` seulement si nécessaire (hooks, événements, state).

```typescript
'use client'

import { useState } from 'react'

export function ProjectGallery({ projects }) {
  const [filter, setFilter] = useState('all')
  // ... interactivité
}
```

### 3. Loading States

Créer un fichier `loading.tsx` pour afficher un skeleton pendant le chargement.

```typescript
// app/realisations/loading.tsx
export default function RealisationsLoading() {
  return <ProjectGallerySkeleton />
}
```

### 4. Error Handling

Créer un fichier `error.tsx` pour gérer les erreurs.

```typescript
'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Une erreur est survenue</h2>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  )
}
```

### 5. Génération Statique (SSG)

Pour les pages dynamiques avec contenu Sanity, utiliser `generateStaticParams`:

```typescript
export async function generateStaticParams() {
  const projects = await getSanityProjects()
  return projects.map(project => ({ slug: project.slug.current }))
}

export const revalidate = 3600 // Revalider toutes les heures (ISR)
```

## Performance

### 1. Images Optimisées

Toujours utiliser `next/image` avec les images Sanity:

```typescript
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image-url'

<Image
  src={urlFor(project.image).width(800).url()}
  alt="Maison métallique moderne IBAK HOME à Abidjan"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL={urlFor(project.image).width(20).blur(10).url()}
/>
```

### 2. Lazy Loading

Lazy load des composants non-critiques:

```typescript
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/forms/contact-form'), {
  loading: () => <FormSkeleton />,
  ssr: true, // SSR pour SEO
})
```

### 3. Revalidation Intelligente (ISR)

Configurer la revalidation selon le type de contenu:

```typescript
// Contenu statique (À propos, IBAK HOME)
export const revalidate = 86400 // 24 heures

// Contenu dynamique (Réalisations)
export const revalidate = 3600 // 1 heure

// Contenu temps réel (désactiver cache)
export const revalidate = 0
```

## Ressources

- [Next.js 15 App Router](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [ISR (Incremental Static Regeneration)](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [CLAUDE.md](/CLAUDE.md) - Documentation principale
