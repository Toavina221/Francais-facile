/**
 * FrançaisFacile+ — Emplacement publicitaire AdSense
 * Style éditorial discret : cadre « encart du journal », non intrusif.
 *
 * NOTE D'INSTALLATION :
 * 1. Remplacez « ca-pub-XXXXXXXXXXXXXXXX » ci-dessous par votre client-id AdSense réel
 *    (disponible dans votre compte Google AdSense → Comptes → Informations sur le compte).
 * 2. Le script AdSense est chargé UNIQUEMENT après consentement (CookieBanner.tsx).
 * 3. Les annonces ne s'afficheront qu'une fois votre compte AdSense approuvé et
 *    le site publié sur son domaine final.
 */
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSlotProps {
  /** Format de l'annonce : « horizontal » (728x90 / responsive) ou « rectangle » (300x250 / responsive). */
  format?: "horizontal" | "rectangle";
  /** Identifiant unique par emplacement (évite les doublons AdSense). */
  slotId?: number;
  className?: string;
}

export default function AdSlot({
  format = "horizontal",
  slotId = 0,
  className = "",
}: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null);
  const [pushed, setPushed] = useState(false);

  // L'encart ne rend rien tant que le visiteur n'a pas consenti aux cookies
  // publicitaires (bannière RGPD de CookieBanner.tsx).
  const hasConsent = () =>
    typeof window !== "undefined" &&
    ((window as unknown as { __ffAdConsent?: string }).__ffAdConsent ===
      "accept" ||
      localStorage.getItem("ff-cookie-consent") === "accept");
  if (!hasConsent()) return null;

  useEffect(() => {
    // AdSense n'est actif que sur le site publié avec un client-id réel.
    if (!ref.current) return;
    const win = window as Window & { adsbygoogle?: unknown[] };
    if (typeof win.adsbygoogle === "undefined") return;
    try {
      win.adsbygoogle.push({});
      setPushed(true);
    } catch {
      /* AdSense bloqué ou non approuvé : l'encart reste vide */
    }
  }, []);

  return (
    <div
      className={`my-8 mx-auto ${className}`}
      style={{ maxWidth: format === "horizontal" ? "970px" : "336px" }}
    >
      <div className="border border-dashed border-border bg-card/60 rounded-md overflow-hidden">
        <ins
          ref={ref}
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={String(slotId)}
          data-ad-format={format === "horizontal" ? "horizontal" : "auto"}
          data-full-width-responsive="true"
          aria-label="Publicité"
        />
        {/* Fallback visible tant que l'annonce n'est pas servie */}
        {!pushed && (
          <div className="py-4 text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground/70">
              Publicité
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
