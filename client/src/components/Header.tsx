/**
 * FrançaisFacile+ — En-tête de navigation
 * Style « La Classe Parisienne » : logo plume, nav sobre, devient opaque au scroll.
 */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, Sun, Moon, TrendingUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/niveaux", label: "Niveaux A1–C1" },
  { href: "/test-niveau", label: "Test de niveau" },
  { href: "/delf", label: "Préparation DELF" },
  { href: "/stats", label: "Ma progression", icon: TrendingUp },
];

const resources = [
  { href: "/toutes-les-lecons", label: "Toutes les leçons" },
  { href: "/dictees", label: "Dictées audio" },
  { href: "/fiches", label: "Fiches de révision" },
  { href: "/faux-amis", label: "Faux amis & pièges" },
];

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const resRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu ressources au clic extérieur
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (resRef.current && !resRef.current.contains(e.target as Node)) setResOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/manus-storage/plume-logo_6ed97893.png"
            alt="Logo FrançaisFacile+"
            className="size-9"
          />
          <span className="font-display text-xl font-bold text-foreground">
            FrançaisFacile<span className="text-primary">+</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-sans text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location === l.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="size-3.5" aria-hidden />}
                {l.label}
              </Link>
            );
          })}
          <div ref={resRef} className="relative">
            <button
              type="button"
              onClick={() => setResOpen((v) => !v)}
              className={`font-sans text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                resOpen || ["/toutes-les-lecons", "/dictees", "/fiches", "/faux-amis"].includes(location)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Ressources
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${resOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {resOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-lg border border-border bg-popover shadow-lg py-1.5 z-50">
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => setResOpen(false)}
                    className={`block font-sans text-sm px-4 py-2 transition-colors ${
                      location === r.href
                        ? "text-primary font-medium"
                        : "text-foreground/70 hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => toggleTheme?.()}
            aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            className="p-2 rounded-md border border-border hover:border-primary/40 text-foreground/70 hover:text-foreground transition-colors dark:text-foreground/80 dark:hover:border-gold/50"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            href="/niveaux"
            className="font-sans text-sm font-semibold px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity dark:bg-primary dark:text-primary-foreground"
          >
            Tourner la première page
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background/98 backdrop-blur-md px-4 py-4 space-y-3">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block font-sans text-sm font-medium py-1 flex items-center gap-2 ${
                  location === l.href ? "text-primary" : "text-foreground/70"
                }`}
              >
                {Icon && <Icon className="size-4" aria-hidden />}
                {l.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => { toggleTheme?.(); }}
              aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
              className="p-2 rounded-md border border-border text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2 dark:text-foreground/80 dark:hover:border-gold/50"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="font-sans text-sm">{theme === "dark" ? "Mode clair" : "Mode sombre"}</span>
            </button>
          </div>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground pt-2">Ressources</p>
          {resources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setOpen(false)}
              className={`block font-sans text-sm font-medium py-1 ${
                location === r.href ? "text-primary" : "text-foreground/70"
              }`}
            >
              {r.label}
            </Link>
          ))}

          <Link
            href="/niveaux"
            onClick={() => setOpen(false)}
            className="block font-sans text-sm font-semibold px-4 py-2 rounded-md bg-primary text-primary-foreground w-fit mt-2 dark:bg-primary dark:text-primary-foreground"
          >
            Tourner la première page
          </Link>
        </nav>
      )}
    </header>
  );
}
