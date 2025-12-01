# L'Or Vert - Growshop Professionnel

Un site e-commerce professionnel pour matériel de culture indoor, avec une direction artistique technique anti-template.

## 🎨 Direction Artistique

### Philosophie
- **Anti-générique** : Pas de gradients violets/bleus, pas de blobs flottants, pas de hero sections classiques
- **Esthétique technique** : Interface de monitoring de serre croisée avec catalogue technique
- **Densité d'information** : Plus de données utiles, moins de décoration

### Palette de Couleurs
```css
/* Backgrounds */
--background-primary: #0D0D0D    /* Noir profond */
--background-surface: #1A1A1A    /* Surface cartes */
--background-elevated: #2A2A2A   /* Éléments surélevés */

/* Text */
--text-primary: #E8E8E8          /* Texte principal */
--text-secondary: #888888        /* Texte secondaire */
--text-muted: #666666            /* Texte atténué */

/* Accents */
--accent-primary: #00D26A        /* Vert franc (CTA) */
--accent-data: #3B82F6           /* Bleu technique (graphiques) */
--accent-alert: #F59E0B          /* Ambre (alertes/promos) */
```

### Typographie
- **Titres** : JetBrains Mono (monospace = précision)
- **Corps** : Inter à 16px minimum
- **Données/specs** : Monospace pour alignement des chiffres

## 🏗️ Architecture

### Stack Technique
- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS 4 (config CSS variables)
- **UI Components** : Radix UI (accessibilité)
- **Animations** : Framer Motion (sparingly)
- **State** : Zustand
- **TypeScript** : Strict mode

### Structure des Fichiers
```
/app
  /page.tsx                    # Homepage
  /boutique
    /page.tsx                  # Product listing
    /produit/[id]/page.tsx     # Product detail
  /configurateur/page.tsx      # Configurator dashboard
  /labo/page.tsx              # Documentation "Le Labo"

/components
  /ui                          # Design system (Button, Badge, Card, Input)
  /product                     # Product components (ProductCard, ProductDetail, ProductGrid)
  /navigation                  # Navigation (Header, Breadcrumb)
  /configurator                # Configurator components
  /labo                        # Documentation components

/lib
  /utils.ts                    # Utilities (cn, formatPrice, etc.)
  /types.ts                    # TypeScript types
```

## 🎯 Composants Clés

### 1. Navigation - Style "Panneau de Contrôle"
- Header sticky minimal (48px)
- Barre de filtres actifs contextuelle
- Breadcrumb style chemin de fichier

### 2. Cartes Produits - Format Dense
- Image + specs en survol
- LED indicator pour stock
- Prix TTC/HT
- Bouton ajout rapide

### 3. Page Produit - "Datasheet Technique"
- Layout 2 colonnes fixes
- Galerie d'images avec miniatures
- Specs en tableau technique
- Onglets (Description, Specifications, Compatibilité, Guides)

### 4. Configurateur - Interface Dashboard
- Sélecteurs de paramètres (espace, méthode, budget, niveau)
- Configuration recommandée en temps réel
- Total dynamique
- Options modifiables/alternatives

### 5. Le Labo - Documentation Style
- Sidebar de navigation expandable
- Format documentation technique
- Tableaux de référence
- Produits liés

## 🎨 Éléments Visuels Distinctifs

### Grille Technique
- Fine grille de points en background (papier millimétré)
- `radial-gradient(circle, #2A2A2A 1px, transparent 1px)`
- Taille: 20px x 20px
- Opacité: 0.3

### LED Indicators
- Petits points colorés pour statut stock
- Box-shadow pour effet lumineux
- 3 états : available (vert), low (orange), unavailable (rouge)

### Bordures Franches
- Border-radius minimal (0-4px max)
- Pas de rounded-full sauf exceptions

### Tableaux Techniques
- Police monospace
- Alignement précis des chiffres
- Headers avec background-elevated

## 🚀 Démarrage

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Start production
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Conventions de Code

### Composants
- Utiliser TypeScript strict
- Préférer les fonctions fléchées pour les composants
- Utiliser `"use client"` uniquement quand nécessaire (interactivité)
- Props typées avec interfaces

### Styling
- Utiliser les classes Tailwind
- Variables CSS pour les couleurs (var(--color-name))
- Classes utilitaires custom dans globals.css si nécessaire
- Fonction `cn()` pour merger les classes

## 📦 Intégration E-commerce

Le projet est prêt pour intégration avec :
- Shopify Storefront API
- Medusa.js
- WooCommerce REST API
- API custom

Les types TypeScript sont définis dans `/lib/types.ts`

## 📄 Licence

Projet propriétaire - L'Or Vert © 2025
