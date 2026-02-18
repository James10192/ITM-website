# Plan des Modifications - ITM Construction Métallique

**Date :** 2026-02-18
**Statut :** EN ATTENTE DE CONFIRMATION

---

## Ce que j'ai compris

La demande comporte **6 modifications distinctes** sur le site :

1. **Texte de présentation** : Remplacer le texte actuel sur la photo dans la hero section
2. **Photo équipe** : Faire apparaître la photo de l'équipe dans les premiers visuels
3. **Photo spécifique chantier** : Intégrer une photo précise en première ligne de visuel
4. **Témoignages clients** : Ajouter une section "Témoignages clients" sur la page Réalisations, avec une vidéo Facebook ITM
5. **Photos avant/après chantiers** : Ajouter des photos avant/après sur la page Réalisations + supprimer les doublons d'images
6. **TikTok + WhatsApp 2e numéro** : Ajouter le compte TikTok et le 2e numéro 0711050619 (également WhatsApp)

### Points à clarifier / hypothèses faites

> ⚠️ **IMPORTANT** : Les modifications 2 et 3 font référence à des photos spécifiques que vous devez fournir. Je n'ai pas ces fichiers dans le projet actuellement. Voici ce que j'attends de vous :
>
> - **Modification 2 (photo équipe)** → À quelle photo faites-vous référence ? Il faut la déposer dans le dossier `public/images/team/` du projet
> - **Modification 3 (photo chantier en 1ère ligne)** → Même chose, quelle photo ? À déposer dans `public/images/`
> - **Modification 4 (vidéo témoignages)** → La vidéo est sur Facebook ITM. Comme on ne peut pas intégrer directement une vidéo Facebook en embed natif (restrictions Facebook), je propose d'utiliser une **iframe embed Facebook** ou un **lien cliquable vers la vidéo**. Quelle option préférez-vous ?
> - **Modification 5 (photos avant/après)** → Le dossier photos mentionné n'est pas dans le projet. À déposer dans `public/images/chantiers/`

---

## Ce que je vais faire

### Modification 1 — Texte hero section
**Fichier :** [`src/components/sections/hero.tsx:38`](src/components/sections/hero.tsx#L38)

**Texte actuel :**
```
Constructions métalliques sur mesure : maisons déplaçables, portes, palissades et mobiliers conçus pour durer.
```

**Nouveau texte :**
```
ITM est une entreprise spécialisée dans la construction et la transformation métallique. Elle conçoit, fabrique et installe des structures métalliques adaptées aux besoins des professionnels, notamment dans les secteurs industriel, commercial et du bâtiment.
Grâce à son savoir-faire technique, à la qualité de ses matériaux et au respect des délais, ITM accompagne ses clients à chaque étape de leurs projets, de l'étude à la réalisation. L'entreprise met un point d'honneur à proposer des solutions solides, fiables et durables, tout en garantissant sécurité esthétique et performance.
```

> Ce texte remplace uniquement le sous-titre `<p>` dans `hero.tsx`. Le titre H1 ("Construire en métal, investir dans la durabilité.") reste inchangé.

---

### Modification 2 — Photo équipe dans les premiers visuels
**Fichier :** [`src/lib/constants/projects.ts`](src/lib/constants/projects.ts)

Le carousel `HeroParallax` de la page d'accueil affiche 15 projets. J'ajouterai la photo d'équipe **en position 1** (première carte visible), une fois que vous l'avez déposée dans `public/images/team/equipe.jpg`.

---

### Modification 3 — Photo chantier en 1ère ligne
**Fichier :** [`src/lib/constants/projects.ts`](src/lib/constants/projects.ts)

J'ajouterai la photo spécifique mentionnée **en position 2 ou 3** du carousel `HeroParallax`, une fois que vous avez précisé et déposé le fichier.

---

### Modification 4 — Section "Témoignages clients" sur Réalisations
**Fichiers à modifier/créer :**

| Fichier | Action |
|---|---|
| `src/app/realisations/components/testimonials-section.tsx` | **CRÉER** — Nouveau composant |
| `src/lib/constants/testimonials.ts` | **CRÉER** — Données témoignages |
| `src/app/realisations/page.tsx` | **MODIFIER** — Importer et placer la section |

**Détail du composant :**
- Section avec titre "Ce que disent nos clients"
- Intégration de la vidéo Facebook ITM via un **bloc cliquable avec miniature** qui renvoie vers la vidéo Facebook (solution fiable qui évite les limitations d'embed Facebook)
- Possibilité d'ajouter des témoignages textuels futurs
- Design cohérent avec le reste du site (dark background ou off-white)

---

### Modification 5 — Photos avant/après chantiers sur Réalisations
**Fichiers à modifier :**

| Fichier | Action |
|---|---|
| `src/lib/constants/realisations.ts` | **MODIFIER** — Ajouter les nouvelles photos + supprimer doublons |
| `src/app/realisations/components/projects-gallery.tsx` | **MODIFIER** ou créer variante "avant/après" si besoin |

**Doublons à identifier et supprimer :** En comparant les images actuelles, aucun doublon évident n'est visible dans le code (toutes les images ont des noms différents). Je vérifierai visuellement quand vous préciserez quelles photos doublonnent.

> ⚠️ Cette modification nécessite que vous déposiez les photos avant/après dans `public/images/chantiers/` et que vous précisiez quels doublon supprimer.

---

### Modification 6 — TikTok + 2e numéro WhatsApp
**Fichiers à modifier :**

| Fichier | Action |
|---|---|
| `src/lib/constants/social-links.ts` | **MODIFIER** — Ajouter TikTok + 2e numéro |
| `src/components/layout/footer.tsx` | **MODIFIER** — Afficher l'icône TikTok |
| `src/app/contact/page.tsx` | **MODIFIER** — Afficher le 2e numéro WhatsApp |

**Détail :**
- Ajouter dans `socialLinks` : `{ name: 'TikTok', url: 'https://www.tiktok.com/@[COMPTE_ITM]', icon: 'TikTok' }`
- Ajouter `phone2: '0711050619'` et `whatsapp2: 'https://wa.me/2250711050619'` dans `contactInfo`
- Le footer affichera l'icône TikTok à côté de Facebook et WhatsApp (via `react-icons` ou SVG inline)
- La page contact affichera le 2e numéro + bouton WhatsApp

> ⚠️ **À préciser** : Quel est l'URL exact du compte TikTok ITM ? (ex: `@ITMConstructionCI` ou autre)

---

## Points d'attention

### Ce qui NE sera PAS modifié
- Le titre H1 hero ("Construire en métal, investir dans la durabilité")
- La navigation principale
- Toutes les autres pages (IBAK HOME, À propos, Contact — sauf ajout 2e numéro)
- Le design général, les couleurs, la typographie
- Le formulaire de contact
- Les métadonnées SEO existantes

### Dépendances et séquence
1. Modifications 1 et 6 sont **autonomes** → peuvent être faites immédiatement
2. Modifications 2, 3 et 5 **nécessitent vos fichiers photos** → je les implémenterai dès réception
3. Modification 4 (témoignages) → nécessite de confirmer l'approche vidéo Facebook

### Icône TikTok
Lucide React n'a pas d'icône TikTok. J'utiliserai un **SVG inline** ou l'import depuis `react-icons/si` (`SiTiktok`), qui devra être installé si pas déjà présent.

---

## Informations manquantes (à fournir avant implémentation complète)

| # | Information manquante | Impact |
|---|---|---|
| A | Fichier photo équipe | Modification 2 |
| B | Fichier photo chantier spécifique | Modification 3 |
| C | Photos avant/après + indication des doublons à supprimer | Modification 5 |
| D | URL exacte du compte TikTok ITM | Modification 6 |
| E | Approche vidéo Facebook : embed iframe ou lien cliquable ? | Modification 4 |

---

## Résumé des fichiers touchés

| Fichier | Type de modification |
|---|---|
| `src/components/sections/hero.tsx` | Modifier texte |
| `src/lib/constants/projects.ts` | Ajouter photos équipe/chantier |
| `src/lib/constants/realisations.ts` | Ajouter photos avant/après, supprimer doublons |
| `src/lib/constants/social-links.ts` | Ajouter TikTok + 2e numéro |
| `src/lib/constants/testimonials.ts` | Créer fichier témoignages |
| `src/components/layout/footer.tsx` | Ajouter icône TikTok |
| `src/app/realisations/page.tsx` | Ajouter section témoignages |
| `src/app/realisations/components/testimonials-section.tsx` | Créer composant |
| `src/app/contact/page.tsx` | Ajouter 2e numéro WhatsApp |

---

*Fichier généré automatiquement — en attente de confirmation*
