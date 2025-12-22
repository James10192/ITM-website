# Source Code (`/src`)

Cette dossier contient tout le code source de l'application Next.js ITM Construction Métallique.

## Structure

```
src/
├── app/              # Next.js App Router (pages, layouts, API routes)
├── components/       # Composants React réutilisables
├── lib/              # Utilitaires, helpers, configurations
└── env.ts            # Validation des variables d'environnement (Zod)
```

## Conventions de Code

### Nommage des Fichiers

- **Composants React**: `PascalCase.tsx` (ex: `HeroSection.tsx`, `ContactForm.tsx`)
- **Pages Next.js**: `kebab-case` ou routes (ex: `page.tsx`, `layout.tsx`, `loading.tsx`)
- **Utilitaires**: `kebab-case.ts` (ex: `format-currency.ts`, `api-client.ts`)
- **Types**: `types.ts` ou `[module].types.ts` (ex: `sanity.types.ts`)

### Imports

Toujours utiliser l'alias `@/` pour les imports:

```typescript
// ✅ Bon
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

// ❌ Éviter
import { cn } from '../../../lib/utils'
```

### TypeScript Strict Mode

Le projet utilise TypeScript strict mode. Toutes les fonctions doivent avoir des types explicites:

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

## Variables d'Environnement

Toutes les variables d'environnement sont validées dans `/src/env.ts` avec Zod.

**Utilisation:**

```typescript
import { env } from '@/env'

// ✅ Type-safe, auto-complete
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID

// ❌ Ne jamais utiliser directement
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
```

## Navigation

- [Components README](/src/components/README.md) - Documentation des composants
- [App README](/src/app/README.md) - Structure App Router
- [Lib README](/src/lib/README.md) - Utilitaires et helpers
- [CLAUDE.md](/CLAUDE.md) - Documentation principale du projet
- [BEST_PRACTICES.md](/BEST_PRACTICES.md) - Meilleures pratiques

## Ressources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
