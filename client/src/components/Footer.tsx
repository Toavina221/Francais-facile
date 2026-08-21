/**
 * FrançaisFacile+ — Pied de page
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[oklch(0.9_0.012_85)] mt-auto">
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/manus-storage/plume-logo_6ed97893.png"
                alt="Logo"
                className="size-8 brightness-[8] invert-0"
              />
              <span className="font-display text-lg font-bold">
                FrançaisFacile<span className="text-[var(--gold)]">+</span>
              </span>
            </div>
            <p className="text-sm text-[oklch(0.8_0.012_85)] max-w-xs">
              La plateforme gratuite qui fait de la grammaire française un
              plaisir, pour les millions d'apprenants du monde entier.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4">
              Apprendre
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/niveaux/a1" className="hover:underline">
                  Niveau A1 — Débutant
                </Link>
              </li>
              <li>
                <Link href="/niveaux/a2" className="hover:underline">
                  Niveau A2 — Élémentaire
                </Link>
              </li>
              <li>
                <Link href="/niveaux/b1" className="hover:underline">
                  Niveau B1 — Intermédiaire
                </Link>
              </li>
              <li>
                <Link href="/niveaux/b2" className="hover:underline">
                  Niveau B2 — Avancé
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4">
              Examens
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/delf/delf-a1" className="hover:underline">
                  Préparation DELF A1
                </Link>
              </li>
              <li>
                <Link href="/delf/delf-b1" className="hover:underline">
                  Préparation DELF B1
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/toutes-les-lecons" className="hover:underline">
                  Toutes les leçons
                </Link>
              </li>
              <li>
                <Link href="/dictees" className="hover:underline">
                  Dictées audio
                </Link>
              </li>
              <li>
                <Link href="/fiches" className="hover:underline">
                  Fiches de révision
                </Link>
              </li>
              <li>
                <Link href="/faux-amis" className="hover:underline">
                  Faux amis &amp; pièges
                </Link>
              </li>
              <li>
                <Link href="/test-niveau" className="hover:underline">
                  Test de niveau
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-sans text-xs text-[oklch(0.7_0.012_85)]">
            FrançaisFacile+ · 100 % gratuit · Conçu avec soin pour les apprenants
          </p>
          <div className="flex flex-wrap items-center gap-4 font-sans text-xs text-[oklch(0.7_0.012_85)]">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:underline">
              Confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="hover:underline">
              CGU
            </Link>
            <button
              type="button"
              onClick={() => {
                try {
                  localStorage.removeItem("ff-cookie-consent");
                } catch {
                  /* ignore */
                }
                window.dispatchEvent(new Event("ff-reset-cookies"));
                window.scrollTo({ top: 0 });
              }}
              className="hover:underline text-left"
            >
              Gérer les cookies
            </button>
            <span className="italic">« Chaque erreur est une leçon qui commence. »</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
