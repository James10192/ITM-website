# Sanity CMS (`/sanity`)

Configuration et schémas Sanity Studio pour gérer le contenu du site ITM Construction Métallique.

## Vue d'ensemble

Sanity.io est le **headless CMS** utilisé pour gérer:

- ✅ **Projets/Réalisations** (galerie photos, descriptions, catégories)
- ✅ **Paramètres du site** (logo, contacts, réseaux sociaux, heures d'ouverture)
- ✅ **Pages** (contenu éditable pour pages statiques - À propos, IBAK HOME)
- ✅ **FAQ** (questions-réponses pour la page IBAK HOME et le chatbot)

**Offre gratuite Sanity.io:**
- 10 000 documents
- 5 GB de bande passante
- 3 utilisateurs
- Idéal pour un site vitrine comme ITM

## Installation et Configuration

### 1. Créer un projet Sanity

```bash
# Depuis le dossier /sanity
cd sanity
pnpm create sanity@latest

# Répondre aux questions:
# - Project name: ITM Construction Métallique
# - Use default dataset configuration? Yes
# - Dataset: production
# - Output path: ./
```

### 2. Obtenir les credentials

Après la création du projet, obtenir:

1. **Project ID**: `https://www.sanity.io/manage` → Votre projet → Project ID
2. **API Token**: `https://www.sanity.io/manage` → Votre projet → API → Tokens → Create new token
   - Label: `ITM Website Read+Write`
   - Permissions: **Editor** (read + write)

### 3. Configurer les variables d'environnement

Ajouter dans `.env.local` à la racine du projet:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="votre_project_id_ici"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="votre_token_ici"
```

### 4. Démarrer Sanity Studio

```bash
cd sanity
pnpm dev
```

Studio disponible sur `http://localhost:3333`

## Structure des Schémas

```
sanity/
├── schemas/
│   ├── project.ts              # Schéma Project (réalisations)
│   ├── site-settings.ts        # Paramètres du site
│   ├── page.ts                 # Pages éditables
│   ├── faq.ts                  # Questions-réponses FAQ
│   └── index.ts                # Export de tous les schémas
├── sanity.config.ts            # Configuration Sanity Studio
└── README.md                   # Ce fichier
```

## Schémas de Documents

### Project Schema (`project.ts`)

Schéma pour les projets/réalisations ITM.

**Champs:**

```typescript
{
  _id: string
  _type: 'project'
  title: string                       // Titre du projet
  slug: { current: string }           // URL-friendly slug
  category: 'maisons' | 'portes' | 'palissades' | 'meubles'
  location: string                    // Lieu (ex: "Cocody, Abidjan")
  description: PortableText          // Description riche (markdown)
  clientObjective: string            // Objectif client (1-2 phrases)
  image: SanityImage                 // Image principale
  gallery: SanityImage[]             // Galerie d'images supplémentaires
  featured: boolean                  // Afficher en "projet vedette" ?
  publishedAt: DateTime              // Date de publication
}
```

**Validation:**

- Titre: requis, min 5 caractères, max 100
- Slug: auto-généré depuis le titre, unique
- Catégorie: requis, valeurs: maisons/portes/palissades/meubles
- Location: requis
- Description: requis
- Image: requise, formats: JPG/PNG/WebP, max 10MB

**Exemple de document:**

```json
{
  "_id": "project-001",
  "_type": "project",
  "title": "Maison Métallique Moderne - Cocody",
  "slug": { "current": "maison-metallique-cocody" },
  "category": "maisons",
  "location": "Cocody, Abidjan",
  "description": [
    {
      "_type": "block",
      "children": [{ "text": "Maison métallique de 120m² avec 3 chambres..." }]
    }
  ],
  "clientObjective": "Construction rapide et déplaçable pour investissement locatif",
  "image": { ... },
  "gallery": [...],
  "featured": true,
  "publishedAt": "2024-12-01T10:00:00Z"
}
```

### Site Settings Schema (`site-settings.ts`)

Paramètres globaux du site (singleton - un seul document).

**Champs:**

```typescript
{
  _id: 'siteSettings'
  _type: 'siteSettings'
  logo: SanityImage                  // Logo ITM
  siteName: string                   // "ITM Construction Métallique"
  tagline: string                    // "Construire aujourd'hui..."
  contact: {
    phone: string                    // +225 0777589211
    email: string                    // itmcotedivoire@gmail.com
    address: string                  // Adresse physique
    whatsapp: string                 // Lien WhatsApp Business
  }
  socialLinks: {
    facebook: string
    instagram: string
    linkedin: string
  }
  openingHours: string               // "Lun-Ven: 8h-17h, Sam: 9h-13h"
}
```

### Page Schema (`page.ts`)

Pages éditables (À propos, IBAK HOME, etc.).

**Champs:**

```typescript
{
  _id: string
  _type: 'page'
  title: string                      // Titre de la page
  slug: { current: string }          // Slug (ex: "a-propos")
  content: PortableText              // Contenu riche
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: SanityImage
  }
}
```

### FAQ Schema (`faq.ts`)

Questions-réponses pour FAQ et chatbot.

**Champs:**

```typescript
{
  _id: string
  _type: 'faq'
  question: string                   // Question
  answer: PortableText               // Réponse
  category: 'general' | 'tarifs' | 'delais' | 'ibak-home'
  order: number                      // Ordre d'affichage
}
```

## Configuration Sanity Studio (`sanity.config.ts`)

```typescript
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ITM Construction Métallique',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool(),
    visionTool(), // Pour tester les requêtes GROQ
  ],

  schema: {
    types: schemaTypes,
  },
})
```

## Requêtes GROQ

GROQ (Graph-Relational Object Queries) est le langage de requête Sanity.

### Récupérer tous les projets

```groq
*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  location,
  clientObjective,
  image,
  publishedAt
}
```

### Récupérer un projet par slug

```groq
*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  location,
  description,
  clientObjective,
  image,
  gallery,
  publishedAt
}
```

### Récupérer projets filtrés par catégorie

```groq
*[_type == "project" && category == $category] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  location,
  image
}
```

### Récupérer les paramètres du site

```groq
*[_type == "siteSettings"][0] {
  logo,
  siteName,
  tagline,
  contact,
  socialLinks,
  openingHours
}
```

## Webhooks pour Revalidation (ISR)

Configurer un webhook Sanity pour revalider Next.js quand le contenu change.

### 1. Créer le webhook dans Sanity

`https://www.sanity.io/manage` → Votre projet → API → Webhooks → Create webhook

**Configuration:**

- **Name**: ITM Website Revalidation
- **URL**: `https://itm-construction.ci/api/revalidate`
- **Trigger on**: Create, Update, Delete
- **Document types**: `project`, `siteSettings`, `page`
- **HTTP method**: POST
- **Secret**: Générer un secret aléatoire (copier dans `.env.local`)

### 2. Ajouter le secret dans `.env.local`

```bash
SANITY_REVALIDATE_SECRET="votre_secret_webhook_ici"
```

### 3. Créer l'API route `/api/revalidate`

Voir `/src/app/api/revalidate/route.ts` (créé automatiquement par le setup).

## Gestion des Images

Sanity optimise automatiquement les images. Utiliser le helper `urlFor`:

```typescript
import { urlFor } from '@/lib/sanity/image-url'

<Image
  src={urlFor(project.image).width(800).height(600).url()}
  alt={project.title}
  width={800}
  height={600}
/>
```

**Options disponibles:**

```typescript
urlFor(image)
  .width(800) // Redimensionner largeur
  .height(600) // Redimensionner hauteur
  .quality(90) // Qualité JPEG (1-100)
  .blur(10) // Blur pour placeholder
  .auto('format') // Format auto (WebP/AVIF)
  .fit('crop') // Recadrage (crop, clip, fill, max)
  .crop('center') // Point focal
  .url() // Générer URL finale
```

## Import Initial de Contenu

Pour importer des projets existants en bulk:

```bash
cd sanity
pnpm sanity dataset import data.ndjson production
```

**Format NDJSON** (Newline Delimited JSON):

```json
{"_id":"project-001","_type":"project","title":"Maison Cocody",...}
{"_id":"project-002","_type":"project","title":"Porte Yopougon",...}
```

## Tests dans Vision Tool

Sanity Studio inclut le **Vision Tool** pour tester les requêtes GROQ en direct.

1. Ouvrir Studio: `http://localhost:3333`
2. Aller dans l'onglet **Vision**
3. Écrire une requête GROQ
4. Exécuter et voir le résultat JSON

**Exemple:**

```groq
*[_type == "project" && featured == true][0..5] {
  title,
  category,
  image
}
```

## Commandes Utiles

```bash
# Démarrer Sanity Studio (dev)
cd sanity && pnpm dev

# Build Sanity Studio (production)
pnpm build

# Deploy Sanity Studio (hosting Sanity)
pnpm deploy

# Exporter dataset
pnpm sanity dataset export production backup.tar.gz

# Importer dataset
pnpm sanity dataset import backup.tar.gz production

# Gérer les datasets
pnpm sanity dataset list
pnpm sanity dataset create staging
```

## Sécurité

### 1. Tokens API

- ✅ Utiliser des tokens **Editor** pour le site web (read + write pour revalidation)
- ✅ Utiliser des tokens **Viewer** pour applications read-only
- ❌ Ne jamais exposer les tokens dans le code frontend

### 2. CORS

Configurer CORS dans Sanity pour autoriser uniquement votre domaine:

`https://www.sanity.io/manage` → Votre projet → API → CORS Origins

Ajouter:
- `http://localhost:3000` (development)
- `https://itm-construction.ci` (production)

### 3. Permissions

Configurer les rôles utilisateur dans Sanity:

- **Administrator**: Accès complet (vous)
- **Editor**: Peut créer/modifier/supprimer du contenu
- **Viewer**: Lecture seule

## Ressources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Image URLs](https://www.sanity.io/docs/image-url)
- [Webhooks](https://www.sanity.io/docs/webhooks)
- [Vision Tool](https://www.sanity.io/docs/the-vision-plugin)

---

**Note:** Le dossier `/sanity` sera créé lors de l'installation de Sanity. Ce README sera placé dans ce dossier une fois créé.
