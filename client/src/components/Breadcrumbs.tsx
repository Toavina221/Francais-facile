/**
 * FrançaisFacile+ — Fil d'Ariane (Breadcrumbs)
 * Améliore le SEO et la navigation.
 */
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground mb-6 no-print overflow-x-auto py-1" aria-label="Fil d'Ariane">
      <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors shrink-0">
        <Home className="size-3" />
        <span className="sr-only">Accueil</span>
      </Link>
      
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5 shrink-0">
          <ChevronRight className="size-3 text-muted-foreground/40" />
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-none">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
