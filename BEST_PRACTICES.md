# ITM Construction Métallique - Best Practices

**Version**: 1.0
**Dernière mise à jour**: 2025-12-19
**Objectif**: Standards de qualité, performance, accessibilité, SEO et sécurité

---

## 📋 Table des Matières

1. [Performance Optimizations](#performance-optimizations)
2. [Accessibility Guidelines (WCAG 2.1 AA)](#accessibility-guidelines)
3. [SEO Best Practices](#seo-best-practices)
4. [Security Practices](#security-practices)
5. [Code Quality Standards](#code-quality-standards)
6. [Testing Strategies](#testing-strategies)

---

## ⚡ Performance Optimizations

### 1. Next.js Image Optimization

**TOUJOURS utiliser `next/image` au lieu de `<img>`**

```typescript
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image-url'

// ✅ GOOD - Automatic optimization
<Image
  src={urlFor(project.image).width(800).url()}
  alt="Maison métallique moderne IBAK HOME à Abidjan"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL={urlFor(project.image).width(20).blur(10).url()}
  className="rounded-lg object-cover"
/>

// ❌ BAD - No optimization
<img src={imageUrl} alt="project" />
```

**Bénéfices:**
- WebP/AVIF automatic conversion (30-50% smaller than JPEG)
- Responsive images (srcset)
- Lazy loading (IntersectionObserver)
- Blur placeholder (meilleur LCP)

### 2. Code Splitting & Dynamic Imports

**Lazy load components non-critiques**

```typescript
import dynamic from 'next/dynamic'

// ✅ Lazy load chatbot (client-only, lourd)
const ChatWidget = dynamic(() => import('@/components/chat-widget'), {
  ssr: false, // Skip SSR
  loading: () => <div className="h-16 w-16 animate-pulse bg-grey-100" />,
})

// ✅ Lazy load gallery modal (visible seulement on click)
const ProjectModal = dynamic(() => import('@/components/sections/project-modal'))

export default function RealisationsPage() {
  return (
    <>
      <ProjectGallery />
      <ChatWidget /> {/* Chargé uniquement quand scroll */}
    </>
  )
}
```

### 3. Font Loading Strategy

**Utiliser `next/font` avec `font-display: swap`**

```typescript
// src/app/layout.tsx
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap', // ⚠️ CRITICAL: Affiche fallback font en attendant
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})
```

**Évite**: FOIT (Flash of Invisible Text) - texte invisible pendant chargement fonts

### 4. ISR (Incremental Static Regeneration)

**Régénérer les pages statiques périodiquement**

```typescript
// src/app/realisations/page.tsx
export const revalidate = 60 // Regenerate every 60 seconds

export default async function RealisationsPage() {
  const projects = await sanityClient.fetch(projectsQuery)
  return <ProjectGallery projects={projects} />
}

// Résultat:
// - User 1 (0s): Page SSG (build time, cached)
// - User 2 (30s): Cached version (fast)
// - User 3 (65s): Stale version served, regeneration triggered
// - User 4 (70s): Fresh version
```

### 5. Reduce JavaScript Bundle Size

**Stratégies:**

1. **Tree-shaking**: Importer uniquement ce qui est nécessaire

```typescript
// ❌ BAD - Importe toute la lib
import _ from 'lodash'
const result = _.uniq(array)

// ✅ GOOD - Importe seulement uniq
import uniq from 'lodash/uniq'
const result = uniq(array)
```

2. **Remove unused dependencies**

```bash
pnpm why <package-name> # Vérifier si package utilisé
pnpm remove <unused-package>
```

3. **Analyze bundle size**

```bash
pnpm add -D @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({ ... })

# Run
ANALYZE=true pnpm build
```

### 6. Caching Headers

**Vercel Edge Network gère le cache automatiquement. Pas de config nécessaire.**

Mais si deployment custom:

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 an
          },
        ],
      },
    ]
  },
}
```

---

## ♿ Accessibility Guidelines (WCAG 2.1 AA)

### 1. Semantic HTML

**Utiliser les bons éléments HTML**

```html
<!-- ✅ GOOD - Semantic -->
<header>
  <nav aria-label="Navigation principale">
    <ul>
      <li><a href="/">Accueil</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Titre de la page</h1>
    <p>Contenu...</p>
  </article>
</main>

<footer>
  <address>Contact: itmcotedivoire@gmail.com</address>
</footer>

<!-- ❌ BAD - Divitis -->
<div class="header">
  <div class="nav">
    <div class="link"><a href="/">Accueil</a></div>
  </div>
</div>
```

### 2. Color Contrast (WCAG AA)

**Ratio minimal: 4.5:1 (texte normal), 3:1 (texte large ≥24px)**

```typescript
// tailwind.config.ts - Vérifier contraste
colors: {
  primary: {
    800: '#2C2C2C', // Sur blanc: 11.6:1 ✅ (très bon)
  },
  accent: {
    500: '#B87333', // Sur blanc: 3.2:1 ❌ (insuffisant pour texte normal)
  },
}

// ✅ USAGE CORRECT
<p className="text-primary-800">Texte lisible</p> {/* 11.6:1 */}

// ❌ USAGE INCORRECT
<p className="text-accent-500">Texte peu lisible</p> {/* 3.2:1 - WCAG fail */}

// ✅ FIX - Accent uniquement pour éléments décoratifs (pas de texte)
<div className="border-accent-500" /> {/* OK */}
<button className="bg-accent-500 text-white hover:bg-accent-600">CTA</button> {/* Vérifier contraste */}
```

**Outil**: WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)

### 3. Keyboard Navigation

**Tous les éléments interactifs doivent être accessibles au clavier**

```typescript
// ✅ GOOD - Focusable, keyboard accessible
<button
  onClick={handleClick}
  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2"
>
  Demander un devis
</button>

// ✅ GOOD - Custom click handler mais focusable
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  className="cursor-pointer focus:ring-2"
>
  Card clickable
</div>

// ❌ BAD - Non-focusable
<div onClick={handleClick}>Not keyboard accessible</div>
```

### 4. Alt Texts (Images)

**Descriptifs et riches en keywords SEO**

```typescript
// ✅ GOOD - Descriptive + keywords
<Image
  src="/projects/maison-abidjan-01.jpg"
  alt="Maison métallique moderne IBAK HOME à Abidjan avec terrasse et jardin, construction métallique durable"
  width={800}
  height={600}
/>

// ❌ BAD - Generic
<Image src="/img1.jpg" alt="image" width={800} height={600} />

// ✅ GOOD - Decorative image (alt vide)
<Image
  src="/decorative-pattern.svg"
  alt="" {/* Screen readers skip */}
  width={100}
  height={100}
  aria-hidden="true"
/>
```

### 5. Form Labels

**Associer `<label>` avec `<input>` (for/id)**

```typescript
// ✅ GOOD - Explicit association
<div>
  <label htmlFor="name" className="block text-sm font-medium">
    Nom et Prénom *
  </label>
  <input
    id="name"
    name="name"
    type="text"
    required
    aria-required="true"
    aria-describedby="name-error"
    className="mt-1 block w-full"
  />
  <span id="name-error" className="text-error text-sm" role="alert">
    Veuillez entrer votre nom complet
  </span>
</div>

// ❌ BAD - No label
<input type="text" placeholder="Nom" /> {/* Placeholder n'est PAS un label */}
```

### 6. ARIA Landmarks

**Aider les screen readers à naviguer**

```html
<header role="banner">
  <nav role="navigation" aria-label="Navigation principale">
    <!-- Links -->
  </nav>
</header>

<main role="main">
  <section aria-labelledby="projects-heading">
    <h2 id="projects-heading">Nos Réalisations</h2>
    <!-- Projects -->
  </section>
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

### 7. Skip Navigation Link

**Permettre d'éviter la navigation répétée**

```typescript
// src/components/layout/header.tsx
export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-800 text-white px-4 py-2 rounded"
      >
        Aller au contenu principal
      </a>
      <header>
        <nav>{/* Navigation */}</nav>
      </header>
    </>
  )
}

// sr-only (Tailwind) = visually hidden mais accessible aux screen readers
```

---

## 🔍 SEO Best Practices

### 1. Meta Tags (Per Page)

```typescript
// src/app/ibak-home/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maisons Métalliques Déplaçables IBAK HOME | ITM Construction',
  description: 'Maisons métalliques 98% déplaçables dès 19M FCFA. Construction rapide, durable, adaptable. Découvrez IBAK HOME en Côte d\'Ivoire.',
  keywords: ['maison métallique', 'IBAK HOME', 'Abidjan', 'construction rapide', 'maison déplaçable'],
  openGraph: {
    title: 'IBAK HOME - Maisons Métalliques Déplaçables | ITM',
    description: 'Maisons métalliques modernes dès 19M FCFA. Installation rapide, architecture contemporaine.',
    url: 'https://itm-construction.ci/ibak-home',
    images: [
      {
        url: '/og-ibak-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Maison IBAK HOME moderne en métal',
      },
    ],
    locale: 'fr_CI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBAK HOME - Maisons Métalliques Déplaçables',
    description: 'Construction métallique durable dès 19M FCFA en Côte d\'Ivoire',
    images: ['/twitter-ibak-home.jpg'],
  },
  alternates: {
    canonical: 'https://itm-construction.ci/ibak-home',
  },
}
```

### 2. Structured Data (Schema.org)

```typescript
// src/app/layout.tsx ou page.tsx
export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionCompany',
    name: 'ITM Construction Métallique',
    description: 'Spécialiste de la construction métallique haut de gamme en Côte d\'Ivoire',
    url: 'https://itm-construction.ci',
    logo: 'https://itm-construction.ci/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CI',
      addressLocality: 'Abidjan',
    },
    telephone: '+225-0777589211',
    email: 'itmcotedivoire@gmail.com',
    priceRange: '19000000-100000000 FCFA',
    areaServed: {
      '@type': 'Country',
      name: 'Côte d\'Ivoire',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100028848442967',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  )
}
```

### 3. Sitemap & Robots.txt

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://itm-construction.ci',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://itm-construction.ci/solutions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://itm-construction.ci/ibak-home',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://itm-construction.ci/realisations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://itm-construction.ci/a-propos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://itm-construction.ci/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
```

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://itm-construction.ci/sitemap.xml',
  }
}
```

### 4. Internal Linking

**Créer des liens internes pour améliorer SEO et navigation**

```typescript
// Exemple: Home page → IBAK HOME
<Link
  href="/ibak-home"
  className="text-primary-800 hover:underline"
>
  Découvrez nos maisons métalliques IBAK HOME dès 19M FCFA
</Link>

// Breadcrumbs (navigation secondaire)
<nav aria-label="Breadcrumb" className="text-sm">
  <ol className="flex items-center space-x-2">
    <li><Link href="/">Accueil</Link></li>
    <li>/</li>
    <li><Link href="/realisations">Réalisations</Link></li>
    <li>/</li>
    <li aria-current="page">Maison Cocody</li>
  </ol>
</nav>
```

---

## 🔒 Security Practices

### 1. Environment Variables Validation

**Toujours valider les env vars au build time**

```typescript
// src/env.ts
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  SANITY_API_TOKEN: z.string().min(1),
  RESEND_API_KEY: z.string().startsWith('re_'),
})

export const env = envSchema.parse(process.env)

// ⚠️ Build échoue si env vars invalides (évite erreurs en production)
```

### 2. Form Sanitization

**Nettoyer input utilisateur avant traitement**

```typescript
import { z } from 'zod'
import DOMPurify from 'isomorphic-dompurify'

const contactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().toLowerCase(),
  phone: z.string().regex(/^\+225\s?\d{10}$/),
  message: z.string().min(10).max(1000).transform(val =>
    DOMPurify.sanitize(val, { ALLOWED_TAGS: [] }) // Strip HTML
  ),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validatedData = contactSchema.parse(body) // Validated + sanitized
  // ...
}
```

### 3. Rate Limiting (Form Submission)

**Limiter soumissions pour éviter spam**

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 requests per hour
})

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Réessayez dans 1 heure.' },
      { status: 429 }
    )
  }

  // Process form
}
```

### 4. CAPTCHA (Cloudflare Turnstile)

**Protéger formulaire contre bots**

```typescript
// src/components/sections/contact-form.tsx
'use client'
import { Turnstile } from '@marsidev/react-turnstile'

export function ContactForm() {
  const [token, setToken] = useState<string>('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!token) {
      alert('Veuillez compléter la vérification')
      return
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, captchaToken: token }),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={setToken}
      />
      <button type="submit">Envoyer</button>
    </form>
  )
}
```

### 5. HTTPS & Security Headers

**Vercel ajoute automatiquement:**
- HTTPS (SSL/TLS)
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`

**Custom headers (si besoin):**

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

---

## ✅ Code Quality Standards

### 1. ESLint + Prettier

```bash
# Installation
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-tailwindcss

# .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "plugins": ["tailwindcss"],
  "rules": {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off"
  }
}

# .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 2. TypeScript Strict

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### 3. Git Hooks (Husky + lint-staged)

```bash
# Installation
pnpm add -D husky lint-staged
npx husky init

# .husky/pre-commit
pnpm lint-staged

# package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": ["prettier --write"]
  }
}
```

---

## 🧪 Testing Strategies

### 1. Unit Tests (Vitest)

```typescript
// src/lib/__tests__/utils.test.ts
import { describe, it, expect } from 'vitest'
import { formatPhoneNumber } from '@/lib/utils'

describe('formatPhoneNumber', () => {
  it('should format Côte d\'Ivoire phone number', () => {
    expect(formatPhoneNumber('0777589211')).toBe('+225 07 77 58 92 11')
  })

  it('should handle already formatted number', () => {
    expect(formatPhoneNumber('+225 07 77 58 92 11')).toBe('+225 07 77 58 92 11')
  })
})
```

### 2. E2E Tests (Playwright)

```typescript
// tests/e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test'

test('submit contact form successfully', async ({ page }) => {
  await page.goto('http://localhost:3000/contact')

  // Fill form
  await page.fill('input[name="name"]', 'Jean-Marc Kouassi')
  await page.fill('input[name="email"]', 'jeanmarc@example.com')
  await page.fill('input[name="phone"]', '+225 07 77 58 92 11')
  await page.selectOption('select[name="projectType"]', 'maison')
  await page.fill('textarea[name="message"]', 'Je souhaite un devis pour une maison IBAK HOME')

  // Submit
  await page.click('button[type="submit"]')

  // Assert success
  await expect(page.locator('text=Merci ! Votre demande a été envoyée')).toBeVisible()
})
```

### 3. Lighthouse CI

```bash
# Installation
pnpm add -D @lhci/cli

# lighthouserc.js
module.exports = {
  ci: {
    collect: {
      staticDistDir: '.next',
      url: ['http://localhost:3000', 'http://localhost:3000/ibak-home'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1.0 }],
      },
    },
  },
}

# Run
pnpm lhci autorun
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Core Web Vitals)

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics /> {/* Automatic Web Vitals tracking */}
      </body>
    </html>
  )
}
```

### Plausible Analytics (Privacy-friendly)

```typescript
// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script defer data-domain="itm-construction.ci" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

**FIN DE BEST_PRACTICES.MD**

**Dernière mise à jour**: 2025-12-19
**Version**: 1.0
