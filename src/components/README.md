# Components (`/src/components`)

Bibliothèque de composants React réutilisables pour le site ITM Construction Métallique.

## Structure

```
components/
├── ui/               # Composants UI primitifs (shadcn/ui + Radix UI)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── layout/           # Composants de layout (Header, Footer, Navigation)
│   ├── header.tsx
│   ├── footer.tsx
│   └── navigation.tsx
├── sections/         # Sections de pages (Hero, Services, Gallery)
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   └── gallery-section.tsx
└── forms/            # Composants de formulaires
    ├── contact-form.tsx
    └── quote-form.tsx
```

## Conventions de Nommage

### Fichiers

- **Composants UI primitifs**: `kebab-case.tsx` (ex: `button.tsx`, `card.tsx`)
- **Composants métier**: `PascalCase.tsx` (ex: `HeroSection.tsx`, `ContactForm.tsx`)
- **Composants de layout**: `kebab-case.tsx` (ex: `header.tsx`, `footer.tsx`)

### Composants React

Tous les composants doivent être **nommés (named exports)** et **typés**:

```typescript
// ✅ Bon
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button className={cn('btn', `btn-${variant}`)} onClick={onClick}>
      {children}
    </button>
  )
}

// ❌ Éviter (default export, pas de types)
export default function Button({ variant, children, onClick }) {
  return <button>{children}</button>
}
```

## Composants UI Primitifs (`/ui`)

Les composants UI sont basés sur **shadcn/ui + Radix UI**. Ils sont:

- ✅ Accessibles (WCAG 2.1 AA)
- ✅ Sans style (Tailwind CSS uniquement)
- ✅ Composables (Radix UI primitives)
- ✅ Type-safe (TypeScript strict)

### Installation de nouveaux composants shadcn/ui

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Exemple d'utilisation

```typescript
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function ServiceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Maisons Métalliques</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Construction rapide, durable et élégante.</p>
        <Button variant="primary">En savoir plus</Button>
      </CardContent>
    </Card>
  )
}
```

## Composants de Layout (`/layout`)

### Header

Navigation principale avec logo, menu, et CTAs.

```typescript
import { Header } from '@/components/layout/header'

// Usage dans layout.tsx
<Header />
```

### Footer

Pied de page avec liens, informations de contact, et réseaux sociaux.

```typescript
import { Footer } from '@/components/layout/footer'

// Usage dans layout.tsx
<Footer />
```

## Composants de Sections (`/sections`)

Sections réutilisables pour construire les pages.

### HeroSection

Section hero avec image de fond, titre, description, et CTAs.

```typescript
import { HeroSection } from '@/components/sections/hero-section'

<HeroSection
  title="ITM Construction Métallique"
  description="Construire aujourd'hui des structures métalliques durables..."
  ctaPrimary={{ label: 'Demander un devis', href: '#contact' }}
  ctaSecondary={{ label: 'Voir nos réalisations', href: '/realisations' }}
/>
```

## Composants de Formulaires (`/forms`)

### ContactForm

Formulaire de contact avec validation Zod et React Hook Form.

```typescript
import { ContactForm } from '@/components/forms/contact-form'

<ContactForm />
```

**Validation:**

- Nom: requis, min 2 caractères, max 100
- Téléphone: format +225 XX XX XX XX XX
- Email: format email valide
- Message: requis, max 1000 caractères

## Règles de Développement

### 1. Client vs Server Components

**Server Components** (par défaut dans Next.js 15 App Router):

```typescript
// ✅ Server Component (pas de "use client")
import { getSanityProjects } from '@/lib/sanity/queries'

export async function ProjectGallery() {
  const projects = await getSanityProjects()

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}
```

**Client Components** (avec "use client"):

```typescript
'use client'

// ✅ Client Component (avec "use client")
import { useState } from 'react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ... hooks, event handlers
}
```

### 2. Styling avec Tailwind CSS

Utiliser la fonction `cn()` pour combiner les classes conditionnelles:

```typescript
import { cn } from '@/lib/utils'

<button
  className={cn(
    'px-6 py-3 rounded-md transition-colors',
    variant === 'primary' && 'bg-primary-800 text-white hover:bg-primary-700',
    variant === 'secondary' && 'border-2 border-primary-800 text-primary-800 hover:bg-primary-900/10',
    isLoading && 'opacity-50 cursor-not-allowed'
  )}
>
  {children}
</button>
```

### 3. Accessibilité (WCAG 2.1 AA)

Tous les composants doivent respecter les standards d'accessibilité:

- ✅ Labels pour tous les inputs
- ✅ Focus visible (`.focus-visible-ring`)
- ✅ Navigation au clavier
- ✅ ARIA attributes (rôles, labels)
- ✅ Contraste des couleurs (≥4.5:1 pour texte)

```typescript
// ✅ Bon
<button
  className="focus-visible-ring"
  aria-label="Fermer le menu"
  onClick={closeMenu}
>
  <CloseIcon />
</button>

// ❌ Éviter
<button onClick={closeMenu}>
  <CloseIcon />
</button>
```

### 4. Performance

- ✅ Lazy loading pour composants lourds (`React.lazy` ou `next/dynamic`)
- ✅ Memoization pour calculs coûteux (`useMemo`, `useCallback`)
- ✅ Images optimisées avec `next/image`

```typescript
import dynamic from 'next/dynamic'

// Lazy load pour composants non-critiques
const ChatbotWidget = dynamic(() => import('@/components/chatbot-widget'), {
  ssr: false, // Disable SSR pour widgets externes
  loading: () => <ChatbotSkeleton />,
})
```

## Tests

Tous les composants doivent avoir des tests unitaires avec Vitest + React Testing Library.

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-primary')
  })
})
```

## Ressources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
