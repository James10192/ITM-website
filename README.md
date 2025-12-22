# ITM Construction Métallique - Site Vitrine Premium

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity-3-f03e2f)](https://www.sanity.io/)

Site vitrine premium pour ITM Construction Métallique - Expert en construction métallique haut de gamme en Côte d'Ivoire.

**Démo**: [À venir]
**Production**: [À venir]

---

## 🎯 Projet

### Vue d'ensemble

Site showcase moderne pour ITM Construction Métallique, spécialisé dans:
- 🏠 Maisons métalliques déplaçables (IBAK HOME)
- 🚪 Portes et portails sur mesure
- 🏗️ Palissades et clôtures sécurisées
- 🪑 Mobilier métallique design

**Objectifs**:
- Générer des leads qualifiés (19M+ FCFA)
- Showcaser réalisations et expertise
- Convertir visiteurs en demandes de devis

**Public cible**:
- Particuliers fortunés (Abidjan, CI)
- Promoteurs immobiliers
- Entreprises et institutions
- Investisseurs immobiliers

---

## 🛠️ Stack Technique

### Core

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 15.x | Framework React (App Router, RSC) |
| **React** | 19.x | UI Library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.x | Styling |
| **pnpm** | 9.x | Package manager |

### CMS & Backend

| Service | Plan | Usage |
|---------|------|-------|
| **Sanity.io** | FREE (10k docs, 5GB bandwidth) | Headless CMS (gallery, projects) |
| **Resend** | FREE (100 emails/day) | Email API (contact form) |
| **Vercel** | FREE (100GB bandwidth) | Hosting + CDN |

### UI & Forms

- **shadcn/ui** + **Radix UI**: Component primitives (accessible)
- **React Hook Form**: Form handling
- **Zod**: Schema validation (forms, env vars)
- **Cloudflare Turnstile**: Invisible CAPTCHA

### Analytics & Monitoring

- **Vercel Analytics** (FREE): Core Web Vitals
- **Plausible Analytics** ($9/month): Privacy-friendly analytics

### Phase 2 (Future)

- **Tidio Lyro AI** ($29/month): AI Chatbot pour FAQ

---

## 📁 Structure du Projet

```
ITM-website/
├── public/                     # Fichiers statiques
│   ├── images/                 # Images (logo, projets)
│   ├── favicon.ico
│   └── robots.txt
├── sanity/                     # Sanity CMS Studio
│   ├── schemas/                # Content schemas (project, settings)
│   ├── sanity.config.ts
│   └── README.md
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/            # Route group (public pages)
│   │   │   ├── page.tsx        # Home (/)
│   │   │   ├── solutions/      # /solutions
│   │   │   ├── ibak-home/      # /ibak-home
│   │   │   ├── realisations/   # /realisations
│   │   │   ├── a-propos/       # /a-propos
│   │   │   └── contact/        # /contact
│   │   ├── api/                # API Routes
│   │   │   └── contact/        # POST /api/contact
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   └── not-found.tsx       # 404 page
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Header, Footer, Nav
│   │   ├── sections/           # Page sections (Hero, Gallery, etc.)
│   │   └── shared/             # Shared components
│   ├── lib/                    # Utilities & helpers
│   │   ├── sanity/             # Sanity client, queries
│   │   ├── utils.ts            # Utility functions
│   │   └── validations.ts      # Zod schemas
│   ├── types/                  # TypeScript types
│   └── env.ts                  # Environment variables validation
├── docs/                       # Documentation
│   ├── PRD.md                  # Product Requirements (original)
│   ├── QUESTIONNAIRE_PRD_RESPONSES.md
│   ├── CONTENT_STRATEGY.md     # Content des 6 pages + SEO
│   └── DOCUMENTATION_COMPLETE.md
├── CLAUDE.md                   # Documentation technique (700 lignes)
├── BEST_PRACTICES.md           # Best practices (350 lignes)
├── .env.local.example          # Environment variables template
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 🚀 Quick Start

### Prérequis

- **Node.js** 20.x LTS ou supérieur
- **pnpm** 9.x (recommandé) ou npm/yarn
- **Git**

### Installation

```bash
# 1. Cloner le repository
git clone https://github.com/[USERNAME]/itm-website.git
cd itm-website

# 2. Installer les dépendances
pnpm install

# 3. Configurer les variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local avec vos clés API

# 4. Lancer le serveur de développement
pnpm dev

# 5. Ouvrir http://localhost:3000
```

### Variables d'Environnement Requises

Créer `.env.local` à la racine:

```bash
# Sanity CMS (obligatoire)
NEXT_PUBLIC_SANITY_PROJECT_ID="votre_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="votre_token_read_write"

# Site URL (production)
NEXT_PUBLIC_SITE_URL="https://itm-construction.ci"

# Resend Email API (formulaire contact)
RESEND_API_KEY="re_xxxxxxxxxxxxxxxx"

# Cloudflare Turnstile (CAPTCHA)
NEXT_PUBLIC_TURNSTILE_SITE_KEY="votre_site_key"
TURNSTILE_SECRET_KEY="votre_secret_key"

# Database (optionnel - si Supabase utilisé pour forms)
DATABASE_URL="postgresql://..."
```

**Note**: Voir `.env.local.example` pour template complet.

---

## 📜 Scripts Disponibles

```bash
# Développement
pnpm dev              # Démarre serveur dev (http://localhost:3000)
pnpm dev:sanity       # Lance Sanity Studio (http://localhost:3333)

# Build & Production
pnpm build            # Build pour production
pnpm start            # Lance serveur production (après build)

# Qualité du code
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm format           # Format code avec Prettier
pnpm type-check       # Vérifier types TypeScript

# Tests
pnpm test             # Run Vitest unit tests
pnpm test:e2e         # Run Playwright E2E tests
pnpm test:coverage    # Coverage report

# Analyse
pnpm analyze          # Analyse bundle size (ANALYZE=true pnpm build)
```

---

## 🎨 Design System

### Couleurs

```typescript
// Palette principale (Tailwind config)
colors: {
  primary: {
    900: '#1A1A1A',  // Charcoal darkest
    800: '#2C2C2C',  // Charcoal main
    700: '#3F3F3F',
  },
  secondary: {
    600: '#52565E',  // Anthracite main
    500: '#6B7280',
  },
  accent: {
    500: '#B87333',  // Copper (usage subtil)
  },
}
```

### Typographie

- **Headings**: Poppins (Bold 700, Semibold 600)
- **Body**: Inter (Regular 400)
- **Scale**: H1 (64px) → H6 (20px), Body (18px)
- **Loading**: `next/font/google` avec `font-display: swap`

### Spacing

- **Baseline grid**: 8px
- **Scale**: xs (8px) → 3xl (96px)

Voir [CLAUDE.md](/CLAUDE.md) pour détails complets.

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [CLAUDE.md](/CLAUDE.md) | Documentation technique principale (700 lignes) |
| [BEST_PRACTICES.md](/BEST_PRACTICES.md) | Performance, accessibility, SEO, security |
| [docs/CONTENT_STRATEGY.md](/docs/CONTENT_STRATEGY.md) | Contenu des 6 pages + SEO |
| [docs/PRD.md](/docs/PRD.md) | Product Requirements (original) |
| [docs/QUESTIONNAIRE_PRD_RESPONSES.md](/docs/QUESTIONNAIRE_PRD_RESPONSES.md) | Décisions techniques (40 questions) |

### README Modulaires

- [src/README.md](/src/README.md) - Structure src/
- [src/components/README.md](/src/components/README.md) - Component library
- [src/app/README.md](/src/app/README.md) - Next.js App Router
- [sanity/README.md](/sanity/README.md) - Sanity CMS setup

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
pnpm test
pnpm test:coverage
```

### E2E Tests (Playwright)

```bash
# Install browsers (first time only)
pnpm exec playwright install

# Run tests
pnpm test:e2e

# Run tests in UI mode
pnpm exec playwright test --ui
```

### Lighthouse CI

```bash
pnpm lhci autorun
```

**Targets**:
- Performance: ≥90
- Accessibility: ≥95
- SEO: 100

---

## 🚢 Déploiement

### Vercel (Recommandé)

**Déploiement automatique depuis Git:**

1. Connecter repository GitHub à Vercel
2. Configurer env vars dans Vercel dashboard
3. Chaque push → main = deploy automatique

```bash
# Install Vercel CLI (optionnel)
pnpm add -g vercel

# Deploy
vercel
```

### Build Local

```bash
pnpm build
pnpm start
```

**Note**: Vercel optimise automatiquement (Edge Network, Image optimization, etc.)

---

## 📦 Sanity CMS Setup

### 1. Initialiser Sanity

```bash
cd sanity
pnpm install
pnpm sanity init
```

### 2. Configurer Schemas

Créer schemas dans `sanity/schemas/`:
- `project.ts` (Réalisations - gallery)
- `siteSettings.ts` (Paramètres globaux)

Voir [sanity/README.md](/sanity/README.md) pour détails.

### 3. Lancer Sanity Studio

```bash
pnpm dev:sanity
# Ouvre http://localhost:3333
```

### 4. Deployer Sanity Studio

```bash
cd sanity
pnpm sanity deploy
# Disponible sur https://[votre-project].sanity.studio
```

---

## 🔐 Sécurité

### Environment Variables

- ✅ Validation Zod (build échoue si env invalide)
- ✅ Secrets jamais committés (`.env.local` dans `.gitignore`)
- ✅ Vercel env vars encrypted

### Forms

- ✅ Validation Zod client + serveur
- ✅ Sanitization (DOMPurify)
- ✅ Rate limiting (3 requests/hour per IP)
- ✅ CAPTCHA (Cloudflare Turnstile)

### Headers

- ✅ HTTPS (Vercel automatic)
- ✅ Security headers (HSTS, X-Frame-Options, etc.)
- ✅ CSP (Content Security Policy)

Voir [BEST_PRACTICES.md](/BEST_PRACTICES.md) section Security.

---

## ⚡ Performance

### Targets (Lighthouse Mobile)

- **Performance**: ≥90
- **Accessibility**: ≥95
- **Best Practices**: 100
- **SEO**: 100

### Optimizations

- ✅ Next.js Image (WebP/AVIF automatic)
- ✅ Code splitting (automatic)
- ✅ ISR (Incremental Static Regeneration)
- ✅ Font optimization (`next/font`)
- ✅ Vercel Edge Network (CDN global)

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

---

## ♿ Accessibilité

**Standard**: WCAG 2.1 AA Compliance

- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Screen reader compatible
- ✅ Color contrast ≥4.5:1
- ✅ Alt texts descriptifs
- ✅ ARIA landmarks

Audit avec:
```bash
pnpm lint:a11y  # axe-core audit
```

---

## 🌍 SEO

### Keywords (Français - Côte d'Ivoire)

**Primary**:
- construction métallique Côte d'Ivoire
- maison métallique Abidjan
- IBAK HOME Abidjan

**Tools**:
- Google Search Console
- Sitemap: `/sitemap.xml` (auto-generated)
- Robots: `/robots.txt`
- Structured data: Schema.org (ConstructionCompany)

Voir [docs/CONTENT_STRATEGY.md](/docs/CONTENT_STRATEGY.md) pour meta descriptions complètes.

---

## 🤝 Contributing

### Workflow Git

1. Créer branche feature: `git checkout -b feat/nouvelle-feature`
2. Commit (Conventional Commits): `git commit -m "feat(gallery): add filters"`
3. Push: `git push origin feat/nouvelle-feature`
4. Créer Pull Request sur GitHub

### Commit Convention

Format: `<type>(<scope>): <description>`

**Types**:
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction bug
- `refactor`: Refactoring
- `docs`: Documentation
- `chore`: Maintenance

**Exemples**:
```bash
feat(contact): add form validation
fix(gallery): correct filter animation
docs(readme): update setup instructions
```

### Pre-commit Hooks

Husky + lint-staged:
- ✅ ESLint auto-fix
- ✅ Prettier format
- ✅ TypeScript check

---

## 📞 Support & Contact

### Équipe Projet

- **Tech Lead**: [À définir]
- **Designer**: [À définir]
- **Content Manager**: [À définir]

### Client ITM

- **Téléphone**: +225 07 77 58 92 11
- **Email**: itmcotedivoire@gmail.com
- **Facebook**: [ITM Construction](https://www.facebook.com/profile.php?id=100028848442967)

### Issues & Questions

- 🐛 **Bug**: [GitHub Issues](https://github.com/[USERNAME]/itm-website/issues)
- 💡 **Feature Request**: [GitHub Discussions](https://github.com/[USERNAME]/itm-website/discussions)
- 📧 **Email**: dev@itm-construction.ci (à configurer)

---

## 📄 Licence

**Propriétaire**: ITM Construction Métallique
**Tous droits réservés** © 2025

Ce projet est la propriété exclusive d'ITM Construction Métallique. Toute reproduction, distribution ou utilisation sans autorisation écrite est strictement interdite.

---

## 🙏 Remerciements

- **Next.js Team** - Framework exceptionnel
- **Vercel** - Hosting et infrastructure
- **Sanity.io** - Headless CMS moderne
- **shadcn** - UI components library

---

**Dernière mise à jour**: 2025-12-19
**Version**: 1.0.0
**Statut**: 🚧 En développement

---

Made with ❤️ in Abidjan, Côte d'Ivoire
