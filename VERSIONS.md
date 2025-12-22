# Versions des Packages - ITM Construction

**Date de génération:** 19 décembre 2024
**Node.js requis:** >=20.0.0
**Package Manager:** pnpm >=9.0.0

---

## Framework & Core

| Package | Version | Latest | Notes |
|---------|---------|--------|-------|
| **Next.js** | 15.5.9 | 16.1.0 | ✅ Next.js 15 stable (App Router) |
| **React** | 19.2.3 | 19.2.3 | ✅ Latest stable |
| **React DOM** | 19.2.3 | 19.2.3 | ✅ Latest stable |
| **TypeScript** | 5.9.3 | 5.9.3 | ✅ Latest stable |

**Pourquoi Next.js 15 et pas 16?**
- Next.js 15 est la version stable recommandée pour production en décembre 2024
- Next.js 16 vient de sortir (janvier 2025) mais nécessite plus de tests
- Migration vers 16 prévue en Phase 2 (Q1 2025)

---

## Styling & Design System

| Package | Version | Notes |
|---------|---------|-------|
| **Tailwind CSS** | 3.4.19 | ✅ Stable, design system ITM configuré |
| **PostCSS** | 8.5.6 | ✅ Compatible Tailwind |
| **Autoprefixer** | 10.4.23 | ✅ Latest |
| **tailwindcss-animate** | 1.0.7 | ⚠️ Déprécié - Migration vers tw-animate-css prévue |

**Notes importantes:**
- **Tailwind v3.4** utilisé (pas v4) pour stabilité
- **tailwindcss-animate** installé mais déprécié
- Migration vers **tw-animate-css** ou **Tailwind v4** prévue en Phase 2
- Design system ITM entièrement configuré dans `tailwind.config.ts`

**Recherches effectuées:**
- [shadcn/ui Tailwind v4 migration](https://ui.shadcn.com/docs/tailwind-v4)
- [Next.js + Tailwind CSS 2025 Guide](https://codeparrot.ai/blogs/nextjs-and-tailwind-css-2025-guide-setup-tips-and-best-practices)

---

## UI Components (shadcn/ui + Radix UI)

| Package | Version | Notes |
|---------|---------|-------|
| **@radix-ui/react-accordion** | 1.2.12 | ✅ |
| **@radix-ui/react-dialog** | 1.1.15 | ✅ |
| **@radix-ui/react-dropdown-menu** | 2.1.16 | ✅ |
| **@radix-ui/react-label** | 2.1.8 | ✅ |
| **@radix-ui/react-select** | 2.2.6 | ✅ |
| **@radix-ui/react-slot** | 1.2.4 | ✅ |
| **@radix-ui/react-tabs** | 1.1.13 | ✅ |
| **lucide-react** | 0.441.0 | ✅ Icons |
| **class-variance-authority** | 0.7.1 | ✅ CVA pour variants |
| **clsx** | 2.1.1 | ✅ Class merging |
| **tailwind-merge** | 2.6.0 | ✅ Tailwind class merging |

**Composants créés:**
- ✅ Button, Card, Input, Label, Textarea, Select
- ✅ Header (navigation + mobile menu - **avec Aceternity UI resizable navbar**)
- ✅ Footer (complet)

---

## Animation

| Package | Version | Notes |
|---------|---------|-------|
| **framer-motion** | 12.23.26 | ✅ Animation library pour navbar scroll effects - Compatible React 19 |
| **@tabler/icons-react** | 3.36.0 | ✅ Icons pour composant Aceternity UI (Menu, X) |

**Utilisation:**
- ✅ Navbar scroll resize animation (spring animations)
- ✅ Mobile menu AnimatePresence transitions
- ✅ useScroll + useMotionValueEvent pour scroll tracking
- ✅ Compatible React 19 (version stable v12+)

**Notes importantes:**
- Framer Motion v12.23.26 supporte React 19 (versions antérieures à v12 incompatibles)
- Import `framer-motion` (PAS `motion/react`)
- Bundle size: ~95KB gzipped (acceptable pour UX premium)
- Alternative légère: Motion library si bundle size critique

**Recherches effectuées:**
- [Framer Motion React 19 Support](https://github.com/framer/motion/releases)
- [Aceternity UI Components](https://ui.aceternity.com)

---

## Forms & Validation

| Package | Version | Notes |
|---------|---------|-------|
| **react-hook-form** | 7.68.0 | ✅ Form management |
| **zod** | 3.25.76 | ✅ Schema validation |
| **@hookform/resolvers** | 3.10.0 | ✅ Zod integration |
| **isomorphic-dompurify** | 2.34.0 | ✅ XSS protection |

**Schémas créés:**
- ✅ Contact form schema (complet avec validation téléphone CI)
- ✅ Sanitization utilities (anti-XSS)

---

## CMS & External APIs

| Package | Version | Notes |
|---------|---------|-------|
| **@sanity/client** | 6.29.1 | ✅ Sanity CMS client |
| **@sanity/image-url** | 1.2.0 | ✅ Image URL builder |
| **resend** | 4.8.0 | ✅ Email API (100 emails/day gratuit) |
| **@marsidev/react-turnstile** | 1.4.0 | ✅ Cloudflare CAPTCHA |

**Services configurés:**
- ✅ Sanity client + queries + types
- ✅ Resend email (formulaire contact)
- ✅ Cloudflare Turnstile (anti-spam)

---

## Analytics & Monitoring

| Package | Version | Notes |
|---------|---------|-------|
| **@vercel/analytics** | 1.6.1 | ✅ Vercel Analytics (gratuit) |

**À ajouter en production:**
- Plausible Analytics ($9/month) - Privacy-friendly
- Sentry (erreurs frontend/backend) - Optionnel

---

## Testing

| Package | Version | Notes |
|---------|---------|-------|
| **vitest** | 2.1.9 | ✅ Unit tests |
| **@vitest/coverage-v8** | 2.1.9 | ✅ Coverage |
| **@testing-library/react** | 16.3.1 | ✅ React testing |
| **@testing-library/jest-dom** | 6.9.1 | ✅ DOM matchers |
| **@testing-library/user-event** | 14.6.1 | ✅ User interactions |
| **@playwright/test** | 1.57.0 | ✅ E2E tests |
| **jsdom** | 25.0.1 | ✅ DOM simulation |
| **@vitejs/plugin-react** | 4.7.0 | ✅ Vitest React support |

---

## Code Quality

| Package | Version | Notes |
|---------|---------|-------|
| **eslint** | 8.57.1 | ⚠️ Deprecated - ESLint 9 disponible |
| **eslint-config-next** | 15.5.9 | ✅ |
| **eslint-config-prettier** | 9.1.2 | ✅ |
| **eslint-plugin-tailwindcss** | 3.18.2 | ✅ |
| **@typescript-eslint/eslint-plugin** | 8.50.0 | ✅ |
| **@typescript-eslint/parser** | 8.50.0 | ✅ |
| **prettier** | 3.7.4 | ✅ |
| **prettier-plugin-tailwindcss** | 0.6.14 | ✅ |
| **husky** | 9.1.7 | ✅ Git hooks |
| **lint-staged** | 15.5.2 | ✅ Pre-commit |

**Note:** ESLint 8 déprécié mais utilisé car Next.js 15 n'est pas encore compatible avec ESLint 9.

---

## Upgrades Disponibles (Non critiques)

| Package | Current | Latest | Raison de ne pas upgrader maintenant |
|---------|---------|--------|--------------------------------------|
| next | 15.5.9 | 16.1.0 | Next.js 16 trop récent (janvier 2025) |
| @sanity/client | 6.29.1 | 7.13.2 | Breaking changes, tester d'abord |
| resend | 4.8.0 | 6.6.0 | Vérifier changelog avant upgrade |
| lucide-react | 0.441.0 | 0.562.0 | Non urgent, icons stables |
| eslint | 8.57.1 | 9.39.2 | Attendre support Next.js 15 |

---

## Roadmap Upgrades

### Phase 2 (Q1 2025)
- [ ] Migrer vers Next.js 16 (quand stable)
- [ ] Migrer vers Tailwind v4
- [ ] Remplacer tailwindcss-animate par tw-animate-css
- [ ] Upgrader ESLint vers v9

### Phase 3 (Q2 2025)
- [ ] Upgrader @sanity/client vers v7
- [ ] Upgrader Resend vers v6
- [ ] Review et upgrade autres packages

---

## Commandes Utiles

```bash
# Vérifier les packages outdated
pnpm outdated

# Mettre à jour un package spécifique
pnpm update [package-name]

# Mettre à jour tous les packages (ATTENTION!)
pnpm update --latest

# Check pour security vulnerabilities
pnpm audit

# Fix security issues
pnpm audit fix
```

---

## Compatibilité

### Node.js
- **Minimum:** 20.0.0 LTS
- **Recommandé:** 20.18.0 LTS
- **Testé avec:** Node.js 20.18.0

### Navigateurs (Target)
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

---

## Sources & Documentation

**Recherches effectuées le 19/12/2024:**
- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Next.js and Tailwind CSS 2025 Guide](https://codeparrot.ai/blogs/nextjs-and-tailwind-css-2025-guide-setup-tips-and-best-practices)
- [shadcn/ui Tailwind v4 Migration](https://ui.shadcn.com/docs/tailwind-v4)
- [shadcn/ui Next.js Installation](https://ui.shadcn.com/docs/installation/next)
- [tailwindcss-animate on npm](https://www.npmjs.com/package/tailwindcss-animate)
- [Next.js 15 + ShadCN + Tailwind CSS v4 (2025) Guide](https://dev.to/darshan_bajgain/setting-up-2025-nextjs-15-with-shadcn-tailwind-css-v4-no-config-needed-dark-mode-5kl)
- [Building Modern Applications 2025: Next.js Complete Guide](https://medium.com/@dilit/building-a-modern-application-2025-a-complete-guide-for-next-js-1b9f278df10c)

---

*Généré automatiquement le 19 décembre 2024*
*Voir CLAUDE.md et BEST_PRACTICES.md pour les conventions de développement*
