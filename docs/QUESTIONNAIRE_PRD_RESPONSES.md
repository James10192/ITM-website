# Questionnaire PRD - ITM Construction Métallique

**Date**: 2025-12-19
**Version**: 1.0
**Projet**: Site Web Vitrine ITM Construction Métallique
**Complété par**: Claude Code
**Basé sur**: DOCUMENTATION_GUIDE.md Section 1

---

## Phase 1: Vision Produit

### 1.1 Contexte Business

**Q1: Quel est le nom du produit/projet ?**
R: Site Web Vitrine ITM Construction Métallique (ITM-website)

**Q2: Quelle est la proposition de valeur unique (en 1 phrase) ?**
R: Site vitrine premium qui inspire confiance et modernité pour la construction métallique haut de gamme en Côte d'Ivoire, ciblant une clientèle capable d'investir à partir de 19 000 000 FCFA.

**Q3: Quel problème métier résout-il ?**
R: Manque de visibilité en ligne pour ITM Construction Métallique et absence de canal digital pour générer des leads qualifiés (particuliers fortunés, promoteurs immobiliers, entreprises) pour des projets de construction métallique (maisons IBAK HOME, portes, palissades, mobilier).

**Q4: Quelle est l'industrie/domaine cible ?**
R: Construction métallique / BTP / Immobilier (Côte d'Ivoire)

**Q5: Le projet est-il :**
- [ ] SaaS B2B
- [ ] SaaS B2C
- [ ] Produit interne
- [ ] Open source
- [x] **Autre: Site vitrine marketing (Showcase Website) avec formulaire de génération de leads**

---

### 1.2 Personas Utilisateurs

**Q6: Qui sont les utilisateurs finaux ? (minimum 2, maximum 4)**

**Persona 1:**
- **Nom**: Jean-Marc Kouassi
- **Rôle**: Particulier à fort pouvoir d'achat (Cadre supérieur, Entrepreneur)
- **Âge**: 35-55 ans
- **Localisation**: Abidjan, Côte d'Ivoire
- **Besoin principal**: Trouver une solution de construction moderne, durable et rapide pour une résidence principale ou secondaire (maison IBAK HOME déplaçable)
- **Point de douleur**: Manque de confiance dans la qualité des constructions métalliques locales, besoin de visualiser des réalisations concrètes, recherche d'un investissement rentable et durable (19M+ FCFA)
- **Comportement**: Recherche sur Google ("maison métallique Abidjan"), visite le site depuis mobile (4G), consulte la galerie de réalisations, demande un devis personnalisé

**Persona 2:**
- **Nom**: Aminata Diallo
- **Rôle**: Promoteur immobilier
- **Âge**: 40-60 ans
- **Localisation**: Abidjan, Yamoussoukro
- **Besoin principal**: Partenaire fiable pour construire rapidement des lotissements ou projets immobiliers avec des structures métalliques (coûts maîtrisés, délais courts)
- **Point de douleur**: Délais de construction trop longs avec méthodes traditionnelles, besoin de références clients et de garanties qualité
- **Comportement**: Recherche B2B, consulte les réalisations (maisons, palissades), contacte pour obtenir un devis sur mesure pour projet de grande envergure

**Persona 3:**
- **Nom**: Directeur Général d'Entreprise
- **Rôle**: Décideur d'entreprise/institution
- **Âge**: 45-65 ans
- **Localisation**: Principales villes de Côte d'Ivoire
- **Besoin principal**: Équiper son entreprise avec des structures métalliques sécurisées (portes, portails, palissades pour locaux professionnels, entrepôts)
- **Point de douleur**: Besoin de sécurité maximale, de robustesse et d'esthétique professionnelle
- **Comportement**: Recherche "porte métallique entreprise Abidjan", compare les prestataires, privilégie les références et certifications

**Persona 4:**
- **Nom**: Investisseur immobilier
- **Rôle**: Investisseur cherchant rentabilité long terme
- **Âge**: 35-60 ans
- **Localisation**: Côte d'Ivoire et diaspora
- **Besoin principal**: Investir dans des actifs immobiliers durables et rentables (maisons IBAK HOME pour location ou revente)
- **Point de douleur**: Recherche d'un ROI élevé, besoin de garanties sur la durabilité et la valorisation
- **Comportement**: Analyse le rapport qualité/prix, les délais de construction, la possibilité de déplacement (IBAK HOME 98% déplaçable)

---

### 1.3 Architecture & Stack Technique

**Q7: Type d'architecture ?**
- [ ] Monorepo (Turborepo, Nx, etc.)
- [x] **Monolithe** (Next.js App Router - application unique)
- [ ] Microservices
- [ ] Serverless (Next.js utilise serverless functions mais architecture globale monolithe)
- [ ] Autre: _______________________

**Q8: Framework frontend principal ?**
- [x] **Next.js 15** (App Router)
- [ ] React (Vite)
- [ ] Vue.js
- [ ] Svelte
- [ ] Angular
- [ ] Autre: _______________________

**Justification**: Next.js 15 offre le meilleur SEO (SSR/SSG), performance (Image optimization, automatic code splitting), et DX (Developer Experience) pour un site vitrine premium.

**Q9: Framework backend/API ?**
- [x] **Next.js API Routes** (App Router: route handlers)
- [ ] Express.js
- [ ] NestJS
- [ ] FastAPI (Python)
- [ ] Spring Boot (Java)
- [ ] Autre: _______________________

**Justification**: Next.js API Routes suffisant pour gérer les formulaires de contact/devis. Pas besoin de backend séparé.

**Q10: Base de données ?**
- [ ] PostgreSQL (standalone)
- [ ] MySQL
- [ ] MongoDB
- [x] **Supabase PostgreSQL** (pour stocker les soumissions de formulaires)
- [ ] Firebase
- [ ] PlanetScale
- [ ] Autre: _______________________

**Justification**: Supabase offre PostgreSQL + free tier généreux (500MB DB, auth prête si besoin futur). Alternative: Pas de DB (envoi email direct uniquement).

**Q11: ORM/Query Builder ?**
- [x] **Prisma** (si utilisation Supabase PostgreSQL)
- [ ] Drizzle
- [ ] TypeORM
- [ ] Sequelize
- [ ] Mongoose
- [ ] Aucun (SQL brut)
- [ ] Autre: _______________________

**Justification**: Prisma est le standard pour Next.js + PostgreSQL (type-safe, excellent DX, migrations automatiques).

**Q12: Authentification ?**
- [ ] Supabase Auth
- [ ] NextAuth.js / Auth.js
- [ ] Clerk
- [ ] Firebase Auth
- [ ] Custom JWT
- [ ] Auth0
- [x] **Aucune** (site vitrine public - pas de login utilisateur)

**Justification**: Pas besoin d'authentification pour un site vitrine. Pas de portail client (hors scope Phase 1).

**Q13: Styling ?**
- [x] **Tailwind CSS**
- [ ] CSS Modules
- [ ] Styled Components
- [ ] Emotion
- [ ] Sass/SCSS
- [ ] Autre: _______________________

**Justification**: Tailwind CSS est le standard moderne (rapid development, small bundle size, responsive-first).

**Q14: UI Component Library ?**
- [x] **shadcn/ui** (+ Radix UI primitives)
- [ ] Radix UI (seul)
- [ ] Headless UI
- [ ] Material UI
- [ ] Chakra UI
- [ ] Mantine
- [ ] Custom
- [ ] Aucune

**Justification**: shadcn/ui offre des composants unstyled mais fully accessible (Radix UI), personnalisables avec Tailwind, copiables dans le projet (pas de dépendance NPM lourde).

**Q15: State Management ?**
- [x] **React Context + useState/useReducer** (pour état global léger: filtres galerie, modals)
- [ ] Zustand
- [ ] Redux Toolkit
- [ ] Jotai
- [ ] Recoil
- [ ] MobX
- [ ] Aucun (Server State only)
- [ ] Autre: _______________________

**Justification**: Site vitrine simple, pas besoin de state management complexe. React Context suffit pour filtres de galerie et UI state (modals, mobile menu).

**Q16: Data Fetching ?**
- [x] **React Server Components (RSC)** (Next.js 15 App Router - fetch data server-side)
- [ ] TanStack Query (React Query)
- [ ] SWR
- [ ] Apollo Client (GraphQL)
- [ ] tRPC
- [ ] Fetch API
- [ ] Autre: _______________________

**Justification**: RSC (React Server Components) par défaut dans Next.js 15 App Router. Fetch côté serveur pour contenu Sanity CMS = SEO optimal + performance.

**Q17: Validation ?**
- [x] **Zod**
- [ ] Yup
- [ ] Joi
- [ ] class-validator
- [ ] AJV
- [ ] Autre: _______________________

**Justification**: Zod est le standard TypeScript-first, intégration parfaite avec React Hook Form et Next.js (validation client + serveur avec schémas partagés).

**Q18: Testing ?**
- [x] **Vitest** (unit tests, plus rapide que Jest)
- [x] **Playwright** (E2E tests: formulaire contact, filtres galerie)
- [ ] Jest
- [ ] Cypress
- [ ] Testing Library
- [ ] Autre: _______________________

**Justification**: Vitest (rapide, compatible Vite/Next.js) + Playwright (E2E moderne, meilleur que Cypress) pour tests critiques (formulaire, SEO).

**Q19: Deployment ?**
- [x] **Vercel**
- [ ] Netlify
- [ ] Railway
- [ ] AWS (EC2, ECS, Lambda, etc.)
- [ ] Google Cloud
- [ ] Azure
- [ ] DigitalOcean
- [ ] Autre: _______________________

**Justification**: Vercel est optimal pour Next.js (créateurs de Next.js, zero-config deployment, automatic optimizations, global CDN, free tier généreux).

**Q20: CI/CD ?**
- [x] **GitHub Actions** (Vercel déploiement auto via Git)
- [ ] GitLab CI
- [ ] CircleCI
- [ ] Jenkins
- [ ] Aucun
- [ ] Autre: _______________________

**Justification**: Vercel déploie automatiquement depuis GitHub (PR = preview URL, merge to main = production). GitHub Actions optionnel pour linting/tests pré-déploiement.

**Q21: Monitoring/Analytics ?**
- [ ] Sentry (errors)
- [x] **Vercel Analytics** (Core Web Vitals, performance - FREE)
- [x] **Plausible Analytics** ($9/month - privacy-friendly, GDPR-compliant, simple dashboard)
- [ ] PostHog
- [ ] Google Analytics
- [ ] Mixpanel
- [ ] Aucun

**Justification**:
- Vercel Analytics (gratuit): Web Vitals, performance monitoring
- Plausible ($9/month): Visiteurs, conversions, sources trafic (pas de cookies, pas besoin de banner GDPR)
- PAS Google Analytics 4 (trop complexe, problèmes RGPD, script lourd)

**Q22: Caching ?**
- [ ] Upstash Redis
- [ ] Vercel KV
- [ ] Redis
- [ ] In-memory
- [x] **Aucun** (Next.js cache intégré suffit - ISR/SSG)
- [ ] Autre: _______________________

**Justification**: Next.js gère le cache automatiquement (ISR = Incremental Static Regeneration, SSG). Pas besoin de Redis pour un site vitrine.

---

### 1.4 Versioning & Package Management

**Q23: Package Manager ?**
- [ ] npm
- [x] **pnpm**
- [ ] yarn
- [ ] bun

**Justification**: pnpm est plus rapide et économise de l'espace disque (linked node_modules). Standard moderne pour monorepos et projets Next.js.

**Q24: Node.js version minimale requise ?**
- [ ] v18.x
- [x] **v20.x LTS** (Long Term Support)
- [ ] v22.x
- [ ] Autre: _______________________

**Justification**: Node.js 20.x est la version LTS actuelle (support jusqu'à avril 2026). Next.js 15 nécessite Node 18.18+ minimum.

**Q25: TypeScript version ?**
- [x] **5.x (latest)** - actuellement 5.6+
- [ ] 4.x
- [ ] Autre: _______________________

**Justification**: TypeScript 5.x apporte de nouvelles features (decorators, const type parameters) et meilleures performances.

**Q26: Versions exactes des dépendances critiques :**

**Framework principal:**
- **Nom**: Next.js
- **Version**: ^15.0.0 (App Router stable)

**CMS:**
- **Nom**: Sanity
- **Version**: ^3.60.0 (@sanity/client, @sanity/image-url)

**UI Library:**
- **Nom**: shadcn/ui (composants copiés, pas de version NPM)
- **Radix UI**: ^1.1.0 (primitives)
- **Tailwind CSS**: ^3.4.0

**Validation:**
- **Nom**: Zod
- **Version**: ^3.23.0

**Forms:**
- **Nom**: React Hook Form
- **Version**: ^7.53.0

**Database/ORM (optionnel):**
- **Nom**: Prisma (si Supabase utilisé)
- **Version**: ^5.22.0

**Email:**
- **Nom**: Resend
- **Version**: ^4.0.0

**Analytics:**
- **Nom**: @vercel/analytics
- **Version**: ^1.3.0

---

### 1.5 Règles de Développement

**Q27: TypeScript strict mode obligatoire ?**
- [x] **Oui** (strict: true, noUncheckedIndexedAccess: true)
- [ ] Non

**Justification**: TypeScript strict évite les bugs runtime, améliore la maintenabilité. Standard pour projets professionnels.

**Q28: Convention de nommage fichiers ?**
- [x] **kebab-case** (page-name.tsx, button-component.tsx)
- [ ] camelCase
- [ ] PascalCase
- [ ] snake_case

**Justification**: kebab-case est standard pour fichiers (URLs friendly, évite les conflits case-sensitive sur différents OS).

**Q29: Convention de nommage composants ?**
- [x] **PascalCase** (ButtonPrimary, ContactForm, HeroSection)
- [ ] Autre: _______________________

**Justification**: PascalCase est le standard React pour composants (distingue composants des fonctions helpers).

**Q30: Pattern commit messages ?**
- [x] **Conventional Commits** (type(scope): description)
- [ ] Angular Commit Guidelines
- [ ] Custom
- [ ] Aucun standard

**Justification**: Conventional Commits permet génération automatique de changelogs, meilleure lisibilité historique Git.

**Format:**
```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

**Types autorisés:**
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `refactor`: Refactoring (pas de changement fonctionnel)
- `perf`: Amélioration de performance
- `style`: Formatage, lint (pas de changement logique)
- `test`: Ajout/modification de tests
- `docs`: Documentation uniquement
- `chore`: Maintenance (deps, config)
- `ci`: CI/CD changes

**Exemples:**
```
feat(gallery): add filtering by project type
fix(contact-form): validate phone number format +225
docs(readme): add setup instructions
chore(deps): update Next.js to 15.1.0
```

**Q31: Linter ?**
- [x] **ESLint** (avec config Next.js + TypeScript)
- [ ] Biome
- [ ] Custom
- [ ] Aucun

**Justification**: ESLint est le standard (next lint inclus par défaut). Configuration: `eslint-config-next` + `@typescript-eslint`.

**Q32: Formatter ?**
- [x] **Prettier**
- [ ] Biome
- [ ] Aucun

**Justification**: Prettier formatage automatique (cohérence code). Configuration: `.prettierrc` avec Tailwind plugin pour ordre classes CSS.

**Q33: Git hooks (Husky) ?**
- [x] **Oui - pre-commit** (lint, format, type-check via lint-staged)
- [ ] Oui - commit-msg (conventional commits)
- [ ] Oui - pre-push (tests)
- [ ] Non

**Justification**:
- `pre-commit`: Lint-staged vérifie uniquement fichiers modifiés (rapide)
- Évite de commit du code non formaté ou avec erreurs TypeScript
- `commit-msg` (optionnel): Valide format Conventional Commits
- `pre-push` (skip): Tests E2E trop lents pour pre-push (run en CI)

**Setup:**
```bash
pnpm add -D husky lint-staged
npx husky init
```

`.husky/pre-commit`:
```bash
pnpm lint-staged
```

`package.json`:
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

---

### 1.6 Sécurité

**Q34: Variables d'environnement validées au build ?**
- [x] **Oui - Zod** (validation env vars avec schéma Zod dans `env.ts`)
- [ ] Oui - t3-env
- [ ] Oui - envalid
- [ ] Non

**Justification**: Validation Zod des env vars évite erreurs runtime (manque de variables, mauvais format). Build échoue si env invalide.

**Exemple `/src/env.ts`:**
```typescript
import { z } from 'zod'

const envSchema = z.object({
  // Public (exposées au client via NEXT_PUBLIC_)
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url(),

  // Private (serveur uniquement)
  SANITY_API_TOKEN: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  DATABASE_URL: z.string().url().optional(), // Si Supabase
})

export const env = envSchema.parse(process.env)
```

**Q35: Rate limiting ?**
- [x] **Oui** (formulaire contact/devis: 3 soumissions max/IP/heure)
- [ ] Non

**Justification**: Évite spam et abus du formulaire de contact. Implémentation: Next.js middleware + Vercel KV (ou simple in-memory cache).

**Q36: CORS configuration ?**
- [ ] Whitelist domaines
- [x] **Allow all (dev only)** - En production: pas besoin de CORS (pas d'API publique consommée par d'autres sites)
- [ ] Custom

**Justification**: Site vitrine sans API publique. Pas de CORS nécessaire. Si API Route appelée, Next.js gère automatiquement same-origin.

**Q37: Gestion secrets en production ?**
- [x] **Vercel Env Vars** (dashboard Vercel: Settings → Environment Variables)
- [ ] AWS Secrets Manager
- [ ] .env.local (danger !)
- [ ] Autre: _______________________

**Justification**: Vercel gère les env vars de manière sécurisée (encrypted at rest, jamais dans Git). Séparation env: Development, Preview, Production.

---

### 1.7 Architecture Modulaire

**Q38: Structure projet ?**

```
/ITM-website
├── .husky/                    # Git hooks (pre-commit)
├── .vscode/                   # VSCode settings
├── docs/                      # Documentation
│   ├── PRD.md                 # Product Requirements (référence stratégique)
│   ├── DOCUMENTATION_GUIDE.md # Guide méthodologique
│   ├── QUESTIONNAIRE_PRD_RESPONSES.md # Ce fichier
│   └── CONTENT_STRATEGY.md    # Contenu pages, copy, SEO
├── public/                    # Fichiers statiques
│   ├── images/                # Images projet (logo, projets galerie)
│   ├── favicon.ico
│   └── robots.txt
├── sanity/                    # Sanity CMS (Studio)
│   ├── schemas/               # Content schemas (project, gallery, etc.)
│   ├── README.md              # Sanity setup documentation
│   └── sanity.config.ts
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (pages)/           # Route group (pages publiques)
│   │   │   ├── page.tsx       # Home (/)
│   │   │   ├── solutions/     # /solutions
│   │   │   ├── ibak-home/     # /ibak-home
│   │   │   ├── realisations/  # /realisations
│   │   │   ├── a-propos/      # /a-propos
│   │   │   └── contact/       # /contact
│   │   ├── api/               # API Routes
│   │   │   ├── contact/       # POST /api/contact (formulaire)
│   │   │   └── subscribe/     # POST /api/subscribe (newsletter future)
│   │   ├── layout.tsx         # Root layout (metadata, fonts, analytics)
│   │   ├── globals.css        # Tailwind imports, custom CSS
│   │   ├── not-found.tsx      # 404 page
│   │   └── README.md          # App Router documentation
│   ├── components/            # React components
│   │   ├── ui/                # shadcn/ui components (Button, Card, Input, etc.)
│   │   ├── layout/            # Layout components (Header, Footer, Nav)
│   │   ├── sections/          # Page sections (Hero, Gallery, ContactForm)
│   │   ├── shared/            # Shared components (Logo, SocialLinks)
│   │   └── README.md          # Component library documentation
│   ├── lib/                   # Utility functions, helpers
│   │   ├── sanity/            # Sanity client, queries, helpers
│   │   │   ├── client.ts      # Sanity client setup
│   │   │   ├── queries.ts     # GROQ queries (projects, gallery)
│   │   │   └── image-url.ts   # Sanity image URL builder
│   │   ├── utils.ts           # Utility functions (cn, formatters)
│   │   ├── validations.ts     # Zod schemas (contact form, etc.)
│   │   └── README.md          # Lib documentation
│   ├── styles/                # Additional styles (si nécessaire)
│   ├── types/                 # TypeScript types/interfaces
│   │   ├── sanity.ts          # Sanity content types
│   │   └── index.ts           # Global types
│   └── env.ts                 # Environment variables validation (Zod)
├── tests/                     # Tests
│   ├── e2e/                   # Playwright E2E tests
│   └── unit/                  # Vitest unit tests
├── .env.local.example         # Env vars template
├── .eslintrc.json             # ESLint config
├── .gitignore
├── .prettierrc                # Prettier config
├── BEST_PRACTICES.md          # Best practices (300-400 lignes)
├── CLAUDE.md                  # Documentation principale (600-800 lignes)
├── next.config.js             # Next.js config
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js          # PostCSS (Tailwind)
├── README.md                  # Projet overview, quick start
├── tailwind.config.ts         # Tailwind config (colors, fonts, etc.)
└── tsconfig.json              # TypeScript config
```

**Q39: Quels dossiers auront un README.md ?**
- [x] **/src/app** (Next.js App Router structure, routing conventions)
- [x] **/src/components** (Component library, usage, variants)
- [x] **/src/lib** (Utility functions, Sanity helpers)
- [x] **/sanity** (CMS setup, schemas, content management)
- [x] **/ (racine)** (Projet overview, installation, scripts)
- [ ] /prisma (skip - pas de migrations complexes)
- [ ] /src/lib/auth (skip - pas d'auth)
- [ ] /src/lib/supabase (optionnel - si Supabase utilisé)

---

## Phase 2: Décisions Techniques Complémentaires

### CMS & Content Management

**CMS choisi**: **Sanity.io**

**Plan (Free tier):**
- 10,000 documents
- 5GB bandwidth
- 3 utilisateurs
- Unlimited API requests
- Image CDN inclus

**Schemas Sanity:**
1. **project** (projets galerie):
   - title (string)
   - slug (slug)
   - category (string: "maisons" | "portes" | "palissades" | "meubles")
   - location (string)
   - clientObjective (text)
   - images (array of images)
   - featured (boolean)
   - order (number)

2. **siteSettings** (paramètres globaux):
   - contactEmail (string)
   - contactPhone (string)
   - facebookUrl (url)
   - businessHours (text)

### Email Service

**Service choisi**: **Resend**

**Plan (Free tier):**
- 100 emails/jour
- 3,000 emails/mois
- 1 domaine vérifié
- API moderne (REST)

**Usage:**
- Formulaire contact/devis → Envoie email à `itmcotedivoire@gmail.com`
- Email de confirmation au client (optionnel)

### Form & CAPTCHA

**Forms**: React Hook Form + Zod
**CAPTCHA**: Cloudflare Turnstile (gratuit, invisible, meilleur UX que reCAPTCHA)

### Chatbot (Phase Finale)

**Service**: Tidio Lyro AI
**Plan**: $29-59/mois
**Features**:
- IA conversationnelle (Claude-powered)
- Support français natif
- Escalation vers WhatsApp Business (+225 0777589211)
- Intégration simple (script tag)

**Note**: À implémenter en **semaine 12** (phase finale), pas avant développement.

---

## Phase 3: Design System (Résumé)

### Typographie

**Fonts:**
- **Headings**: Poppins (Bold 700, Semibold 600)
- **Body**: Inter (Regular 400)

**Scale:**
- H1: 64px / 1.1 / Bold 700 (mobile: 40px)
- H2: 48px / 1.2 / Bold 700 (mobile: 32px)
- H3: 32px / 1.3 / Semibold 600 (mobile: 24px)
- H4: 24px / 1.4 / Semibold 600 (mobile: 20px)
- Body: 18px / 1.6 / Regular 400 (mobile: 16px)
- Small: 14px / 1.5 / Regular 400

### Couleurs

**Palette (Tailwind config):**
```javascript
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
    500: '#B87333', // Copper (usage subtil uniquement)
  },
  // Neutrals
  white: '#FFFFFF',
  'off-white': '#F9FAFB',
  grey: {
    100: '#F3F4F6',
    200: '#E5E7EB',
    900: '#111827',
  },
  // Semantic
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
}
```

### Spacing (8px baseline grid)

```javascript
spacing: {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
  '3xl': '96px',
}
```

### Breakpoints

```javascript
screens: {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

---

## Phase 4: SEO & Performance

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
- maison modulaire Abidjan

**Long-tail:**
- maison métallique déplaçable prix
- construction métallique rapide Abidjan
- investissement immobilier métallique Côte d'Ivoire

### Performance Targets

**Lighthouse (Mobile):**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

**Load Time:**
- 4G: <3s
- WiFi: <1.5s

---

## Validation & Signatures

**Questionnaire complété par**: Claude Code (Assistant IA)
**Date de complétion**: 2025-12-19
**Basé sur**:
- `/home/levraimd/workspace/ITM-website/docs/PRD.md`
- `/home/levraimd/workspace/ITM-website/docs/DOCUMENTATION_GUIDE.md`
- Plan approuvé (serialized-waddling-lake.md)

**Prochaines étapes:**
1. ✅ Questionnaire PRD complété
2. 🔄 Créer CLAUDE.md (600-800 lignes) basé sur ces réponses
3. 🔄 Créer BEST_PRACTICES.md (300-400 lignes)
4. 🔄 Créer CONTENT_STRATEGY.md (contenu des 6 pages)
5. 🔄 Créer README.md modulaires

---

**FIN DU QUESTIONNAIRE**
