/**
 * FrançaisFacile+ — Bannière de consentement aux cookies (RGPD)
 * Style « La Classe Parisienne » : cadre éditorial discret, ton courtois.
 *
 * Règles appliquées :
 * - Aucun cookie publicitaire (AdSense) n'est chargé avant le consentement.
 * - Le contenu pédagogique, la progression locale et l'analyse de fréquentation
 *   anonyme (statistiques globales) n'exigent pas de consentement : ils sont
 *   conservés uniquement sur l'appareil de l'apprenant.
 * - Le choix est mémorisé (localStorage, « ff-cookie-consent ») et révocable
 *   à tout moment via le lien « Gérer les cookies » du pied de page.
 */
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CONSENT_KEY = "ff-cookie-consent";
const ADSENSE_CLIENT_ID = "ca-pub-XXXXXXXXXXXXXXXX";
const ADSENSE_URL =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
  ADSENSE_CLIENT_ID;

export type ConsentState = "accept" | "refuse" | null;

export function getConsent(): ConsentState {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accept" || v === "refuse" ? v : null;
  } catch {
    return null;
  }
}

/** Charge dynamiquement le script AdSense après acceptation. */
function loadAdSense() {
  if (typeof window === "undefined") return;
  const doc = window.document;
  if (doc.querySelector(`script[data-ff-adsense]`)) return;
  const script = doc.createElement("script");
  script.dataset.ffAdsense = "1";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = ADSENSE_URL;
  doc.head.appendChild(script);
}

function saveConsent(choice: ConsentState) {
  try {
    if (choice) localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* localStorage indisponible : on n'insiste pas */
  }
}

/**
 * Applique le choix de consentement : charge AdSense si accepté,
 * expose un flag global utilisé par les composants d'annonce.
 */
function applyConsent(choice: ConsentState) {
  if (typeof window === "undefined") return;
  (window as unknown as { __ffAdConsent?: ConsentState }).__ffAdConsent = choice;
  if (choice === "accept") loadAdSense();
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(() => getConsent());

  useEffect(() => {
    applyConsent(consent);
    const onReset = () => setConsent(null);
    window.addEventListener("ff-reset-cookies", onReset);
    return () => window.removeEventListener("ff-reset-cookies", onReset);
  }, [consent]);

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-2xl mx-auto folio border border-border bg-card shadow-lg rounded-lg p-5 md:p-6">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <span className="stamp-a2 font-sans text-xs px-2 py-0.5 rounded-sm">
              Cookies
            </span>
          </div>
          <div className="flex-1">
            <h2 className="font-display text-lg font-semibold text-foreground mb-1.5">
              Votre vie privée, d'abord
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-1">
              FrançaisFacile+ utilise uniquement des données stockées sur votre
              propre appareil : votre progression, vos scores et vos dictées
              ne quittent jamais votre navigateur.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Nous pouvons toutefois afficher des publicités (Google AdSense),
              qui utilisent des cookies. Acceptez-vous de les autoriser ? Ce
              choix peut être modifié à tout moment via le pied de page.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <button
            type="button"
            onClick={() => {
              saveConsent("accept");
              setConsent("accept");
            }}
            className="quill-btn px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold transition-transform active:scale-[0.97]"
          >
            Accepter les publicités
          </button>
          <button
            type="button"
            onClick={() => {
              saveConsent("refuse");
              setConsent("refuse");
            }}
            className="px-4 py-2 rounded-md border border-border bg-card text-foreground/80 text-sm font-medium hover:border-foreground/30 transition-colors active:scale-[0.97]"
          >
            Refuser
          </button>
        </div>
        <button
          type="button"
          aria-label="Masquer la bannière"
          onClick={() => {
            /* masquer sans décider : on repose la question plus tard ? Non —
               RGPD : pas de consentement implicite. On refuse par défaut si
               l'utilisateur ferme sans choisir. */
            saveConsent("refuse");
            setConsent("refuse");
          }}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
