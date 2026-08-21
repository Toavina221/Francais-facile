/**
 * FrançaisFacile+ — Composant SEO
 * Gère dynamiquement le titre et la meta description de chaque page.
 */
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
}

const DEFAULT_TITLE = "FrançaisFacile+ — Apprenez le français gratuitement";
const DEFAULT_DESC = "Plateforme gratuite de formation en français langue étrangère : leçons précises, exercices interactifs et quiz corrigés, niveaux A1 à C1, préparation DELF/TCF.";
const DEFAULT_IMAGE = "/manus-storage/hero-livre_6af0dccc.png";

export default function SEO({ title, description, image, type = "website" }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} | FrançaisFacile+` : DEFAULT_TITLE;
    const fullDesc = description || DEFAULT_DESC;
    const fullImage = image || DEFAULT_IMAGE;
    const url = window.location.href;

    // 1. Titre standard
    document.title = fullTitle;

    // 2. Helper pour mettre à jour ou créer des balises meta
    const setMeta = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Meta standards
    setMeta('name', 'description', fullDesc);

    // 4. Open Graph (Facebook, LinkedIn, etc.)
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', fullDesc);
    setMeta('property', 'og:image', fullImage);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'FrançaisFacile+');

    // 5. Twitter Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', fullDesc);
    setMeta('name', 'twitter:image', fullImage);

  }, [title, description, image, type]);

  return null;
}
