/**
 * FrançaisFacile+ — Page « Dictées audio »
 * Style « La Classe Parisienne » : chapter-rule, tampons de niveau, folios.
 * L'apprenant écoute la dictée, la retape et reçoit une correction mot par mot.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Ear, BookOpenCheck } from "lucide-react";
import { dictees } from "@/data/dictees";
import { DicteeRunner } from "@/components/DicteeRunner";
import type { LevelId } from "@/data/types";
import { stampClass } from "@/lib/stampClass";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const LEVELS: LevelId[] = ["A1", "A2", "B1", "B2", "B2+", "C1"];
const LEVEL_LABELS: Record<LevelId, string> = {
  A1: "A1 — Introductif",
  A2: "A2 — Élémentaire",
  B1: "B1 — Intermédiaire",
  B2: "B2 — Avancé",
  "B2+": "B2+ — Avancé supérieur",
  C1: "C1 — Autonome avancé",
};

export default function Dictees() {
  const [level, setLevel] = useState<LevelId>("A1");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = useMemo(
    () => dictees.find((d) => d.slug === activeSlug) ?? null,
    [activeSlug],
  );

  const byLevel = useMemo(
    () => Object.fromEntries(LEVELS.map((l) => [l, dictees.filter((d) => d.level === l)])) as Record<LevelId, typeof dictees>,
    [],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={active ? `Dictée : ${active.title}` : "Dictées audio interactives"} 
        description={active ? `Entraînez votre oreille avec la dictée "${active.title}" (niveau ${active.level}). Écoutez, écrivez et recevez une correction immédiate.` : "Améliorez votre orthographe et votre compréhension orale avec nos dictées audio interactives du niveau A1 au niveau C1."}
      />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <Breadcrumbs 
            items={active 
              ? [{ label: "Dictées audio", href: "/dictees" }, { label: active.title }]
              : [{ label: "Dictées audio" }]
            } 
          />

          <p className="chapter-rule">Exercice d'oreille</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Les dictées audio
          </h1>
          <p className="text-foreground/80 mb-10">
            L'orthographe française s'apprend aussi avec l'oreille. Écoutez la phrase dictée par une voix
            française, retapez-la, puis comparez mot par mot avec la correction. L'oreille et la main
            travaillent ensemble : c'est l'exercice préféré des professeurs.
          </p>

          {!active ? (
            <>
              {/* Sélecteur de niveau */}
              <div className="flex flex-wrap gap-2 mb-8">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLevel(l)}
                    className={`quill-btn px-4 py-2 rounded-md text-sm font-medium transition-colors active:scale-[0.97] ${
                      level === l
                        ? "bg-foreground text-background"
                        : "border border-border bg-card text-foreground/80 hover:border-foreground/30"
                    }`}
                  >
                    {LEVEL_LABELS[l]}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {byLevel[level].map((d, i) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setActiveSlug(d.slug)}
                    className="folio w-full text-left border border-border bg-card rounded-lg p-5 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-1">
                          <span className={`${stampClass(d.level)}`}>{d.level}</span>
                          <span className="ml-2 text-muted-foreground">Dictée {i + 1}</span>
                        </p>
                        <h2 className="font-display text-xl font-semibold text-foreground">{d.title}</h2>
                        <p className="text-sm text-foreground/70 mt-1">{d.focus}</p>
                      </div>
                      <Ear className="h-5 w-5 text-primary shrink-0" aria-hidden />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={`${stampClass(active.level)} inline-block mb-3`}>
                Niveau {active.level}
              </div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-2">{active.title}</h2>
              <p className="text-foreground/70 mb-6">{active.focus}</p>
              <DicteeRunner dictee={active} />
            </>
          )}

          {/* Bandeau méthode */}
          <div className="tip-box mt-12">
            <p className="font-display font-semibold text-foreground mb-1 inline-flex items-center gap-2">
              <BookOpenCheck className="h-4 w-4" aria-hidden />
              La méthode du professeur
            </p>
            <p className="text-foreground/90">
              Écoutez d'abord la phrase entière sans écrire. Écoutez une deuxième fois en notant les mots
              difficiles. Écrivez, puis corrigez. Ne regardez jamais la phrase avant d'avoir écrit : c'est
              l'effort de récupération qui fait travailler la mémoire.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
