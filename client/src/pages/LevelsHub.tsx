/**
 * FrançaisFacile+ — Hub des niveaux (tous les niveaux)
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { levelInfos } from "@/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const levelStamps: Record<string, string> = {
  emerald: "stamp-a1",
  teal: "stamp-a2",
  amber: "stamp-b1",
  rose: "stamp-b2",
  violet: "stamp-b2p",
  slate: "stamp-c1",
};

export default function LevelsHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Parcours d'apprentissage par niveau" 
        description="Choisissez votre niveau de français de A1 à C1. Chaque niveau propose un programme structuré avec leçons, exercices et quiz de validation."
      />
      <Header />
      <section className="container py-12">
        <Breadcrumbs items={[{ label: "Niveaux" }]} />
        <p className="chapter-rule mb-6">
          <span className="font-display italic text-[var(--gold)] text-sm">
            Chapitre I — Les six niveaux du CECRL
          </span>
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          Choisissez votre point de départ
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Chaque niveau contient des leçons précises, des exercices interactifs
          et un quiz de validation. Commencez par le niveau qui correspond à
          vos acquis : rien ne vous empêche de recommencer plus bas.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {levelInfos.map((lvl, i) => (
            <Link
              key={lvl.id}
              href={`/niveaux/${lvl.id.toLowerCase()}`}
              className="group folio p-7 transition-all fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline justify-between mb-3">
              <span
                className={`inline-block font-sans text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${levelStamps[lvl.color]}`}
              >
                Niveau {lvl.id}
              </span>
              <span className="font-display text-[var(--gold)]/60 text-sm italic">
                t. {i + 1}
              </span>
              </div>
              <h2 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                {lvl.title}
              </h2>
              <p className="font-sans text-sm font-medium text-muted-foreground mb-2">
                {lvl.subtitle}
              </p>
              <p className="text-sm text-foreground/75 mb-4">{lvl.description}</p>
              <span className="font-sans text-sm font-semibold text-primary flex items-center gap-1">
                Ouvrir le tome <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
