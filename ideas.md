# FrançaisFacile+ — Brainstorm design

## Trois approches stylistiques

### 1. « La Classe Parisienne »
Élégance éditoriale française : crème papier, bleu marine profond, touches bordeaux, typographie serif littéraire. Évoque un beau livre de grammaire du XIXe siècle modernisé. Émotion : confiance, sérieux chaleureux, fierté de la langue.
Probabilité : 0.07

### 2. « Cahier d'Écolier Ensoleillé »
Esthétique cahier scolaire africain méditerranéen : papier à lignes, crayon, couleurs vives (jaune safran, vert, rouge), hand-drawn doodles. Émotion : proximité, enfance, encouragement.
Probabilité : 0.03

### 3. « Néon Duolingo »
Fond sombre, accents verts néon, badges lumineux, style app gamifiée. Émotion : ludique, moderne.
Probabilité : 0.02

## Choix : « La Classe Parisienne »

- **Design Movement** : Éditorial français classique (typographie Didone/serif, mise en page de revue littéraire) croisé avec le « warm editorial » moderne. Références : La Pléiade, les cahiers d'écolier raffinés, les sites du Figaro littéraire.
- **Core Principles** :
  1. La leçon comme un beau texte : hiérarchie typographique serrée, lignes de lecture confortables.
  2. Chaleur humaine : encouragement visible partout (badges « Bravo », messages de progression bienveillants).
  3. Précision rigoureuse : encadrés de règles encadrés, exemples colorés, vocabulaire exact.
  4. Calme et clarté : une seule idée par écran, pas de surcharge.
- **Color Philosophy** : Papier crème (#FAF6EF / oklch ~0.97 0.01 85) pour évoquer un vrai livre ; **Bleu encre de France** (navy profond #1B2A4A) comme couleur signature — la couleur de l'encre et de la tradition scolaire française ; accents **Rouge Marianne** pour les validations/CTA et or doux pour les succès. Le bleu inspire la confiance pédagogique, le crème la douceur de lecture.
- **Layout Paradigm** : Asymétrique éditorial : hero avec colonne de texte à gauche + illustration à droite ; pages de leçon avec une barre latérale de progression/niveau et le contenu centré à gauche en lecture ; sections en « chapitres » numérotés comme un livre.
- **Signature Elements** :
  1. Numérotation de chapitres en serif italique (« Chapitre I ») avec filet doré.
  2. Encadrés « Règle essentielle » avec liseré bleu encre et petite puce coq/plume.
  3. Soulignements ondulés sur les mots-clés, comme annoté au crayon.
- **Interaction Philosophy** : Douce et encourageante : chaque bonne réponse = micro-célébration (confettis légers + mot de félicitation), chaque erreur = explication bienveillante jamais punitive.
- **Animation** : Entrées en fondu + léger translateY (16px, 300ms ease-out) ; transitions de boutons 150ms scale(0.97) ; progression qui se remplit en douceur ; confettis discrets aux réussites. Rien de frénétique.
- **Typography System** : **Fraunces** (serif display, caractères français chaleureux) pour titres et niveaux ; **Source Serif 4** pour le corps des leçons (lisibilité littéraire) ; **Instrument Sans** pour l'UI (boutons, nav). Hiérarchie : titres serif 600, corps serif 400 taille 1.05rem, interligne 1.75.
- **Brand Essence** : La plateforme gratuite qui fait de la grammaire française un plaisir, pour les millions d'apprenants étrangers. Adjectifs : chaleureux, rigoureux, encourageant.
- **Brand Voice** : Comme un bon professeur patient. Exemples : « Chaque erreur est une leçon qui commence. » / « Votre français, un chapitre à la fois. » Bannis : « Bienvenue sur notre site », « Commencez dès aujourd'hui ».
- **Wordmark & Logo** : Logotype « FrançaisFacile+ » en Fraunces, le « + » en rouge Marianne ; icône : une plume stylisée formant un point d'exclamation français (bleu encre, fond transparent).
- **Signature Brand Color** : Bleu encre de France (#1B2A4A).

## Style Decisions

- Les cartes et listes de leçons doivent se lire comme des folios de livre de grammaire ou des fiches d'index de bibliothèque, jamais comme des panneaux SaaS arrondis génériques (bords rectilignes ou à peine arrondis, filets, ombres de papier).
- Les couleurs de niveau restent dans la palette éditoriale FrançaisFacile+ uniquement : encre marine, crème, bordeaux, or atténué et variantes « tampon de papier » — pas de pastels vert/rose/teal.
- La copie fonctionnelle (CTA, labels, buttons) utilise la voix du professeur patient : encourageante et précise, jamais des commandes produit génériques.
