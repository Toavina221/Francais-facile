/**
 * FrançaisFacile+ — Page « Toutes les leçons »
 * Style « La Classe Parisienne » : table des matières d'un livre de grammaire.
 * Une seule page, un seul h1, les 23 leçons groupées par niveau — pratique
 * pour Google (SEO) et pour les professeurs (vue d'ensemble du programme).
 */
import { useState, useMemo } from "react";
import { BookOpen, Clock, Search, X } from "lucide-react";
import { Link } from "wouter";
import { allLessons } from "@/data";
import type { LevelId } from "@/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";

/** Ordre et étiquettes éditoriales des niveaux */
const levelOrder: LevelId[] = ["A1", "A2", "B1", "B2", "B2+", "C1"];

const levelMeta: Record<LevelId, { label: string; chapter: string; stamp: string }> = {
  A1: { label: "A1 — Introductif", chapter: "Chapitre I", stamp: "stamp-a1" },
  A2: { label: "A2 — Élémentaire", chapter: "Chapitre II", stamp: "stamp-a2" },
  B1: { label: "B1 — Intermédiaire", chapter: "Chapitre III", stamp: "stamp-b1" },
  B2: { label: "B2 — Avancé", chapter: "Chapitre IV", stamp: "stamp-b2" },
  "B2+": { label: "B2+ — Avancé supérieur", chapter: "Chapitre V", stamp: "stamp-b2p" },
  C1: { label: "C1 — Autonome avancé", chapter: "Chapitre VI", stamp: "stamp-c1" },
};

const levelPath: Record<LevelId, string> = {
  A1: "/niveaux/a1",
  A2: "/niveaux/a2",
  B1: "/niveaux/b1",
  B2: "/niveaux/b2",
  "B2+": "/niveaux/b2+",
  C1: "/niveaux/c1",
};

export default function ToutesLesLecons() {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<LevelId | "ALL">("ALL");

  const filteredLessons = useMemo(() => {
    const result: Partial<Record<LevelId, any[]>> = {};
    const query = search.toLowerCase().trim();

    levelOrder.forEach((level) => {
      if (selectedLevel !== "ALL" && selectedLevel !== level) return;

      const lessons = allLessons[level].filter((l) => {
        return (
          l.lesson.title.toLowerCase().includes(query) ||
          l.lesson.objective.toLowerCase().includes(query)
        );
      });

      if (lessons.length > 0) {
        result[level] = lessons;
      }
    });

    return result;
  }, [search, selectedLevel]);

  const totalFiltered = Object.values(filteredLessons).reduce(
    (acc, lessons) => acc + (lessons?.length || 0),
    0
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Toutes les leçons de français" 
        description="Consultez le programme complet des 23 leçons de français de A1 à C1. Grammaire, vocabulaire et préparation DELF/DALF avec exercices corrigés."
        image="/manus-storage/hero-livre_6af0dccc.png"
      />
      <Header />
      <main>
        {/* Entête : un seul h1 par page */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container py-12 md:py-16">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-4">
              Table des matières — {totalFiltered} leçons trouvées
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Toutes les leçons,
              <span className="italic text-primary"> du premier mot au DALF.</span>
            </h1>

            {/* Barre de recherche et Filtres */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher une leçon (ex: subjonctif, articles...)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-10 bg-background border-border"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedLevel("ALL")}
                  className={`px-4 py-2 rounded-md text-xs font-sans font-bold transition-all border ${
                    selectedLevel === "ALL"
                      ? "bg-primary text-primary-foreground border-primary dark:bg-primary dark:text-primary-foreground"
                      : "bg-background text-foreground/70 border-border hover:border-primary/50 dark:bg-card dark:text-foreground/80 dark:hover:border-gold/50"
                  }`}
                >
                  Tous les niveaux
                </button>
                {levelOrder.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 py-2 rounded-md text-xs font-sans font-bold transition-all border ${
                      selectedLevel === level
                        ? "bg-primary text-primary-foreground border-primary dark:bg-primary dark:text-primary-foreground"
                        : "bg-background text-foreground/70 border-border hover:border-primary/50 dark:bg-card dark:text-foreground/80 dark:hover:border-gold/50"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container py-10 md:py-12">
          {totalFiltered === 0 ? (
            <div className="py-20 text-center border-2 border-dashed border-border rounded-lg">
              <Search className="size-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <h2 className="font-display text-xl font-bold mb-2">Aucun résultat pour votre recherche</h2>
              <p className="font-serif text-muted-foreground">
                Essayez d'autres mots-clés ou changez de niveau.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedLevel("ALL");
                }}
                className="mt-6 text-primary font-sans font-bold hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            levelOrder.map((level, idx) => {
              const lessons = filteredLessons[level];
              if (!lessons || lessons.length === 0) return null;
              const meta = levelMeta[level];
              return (
                <section key={level} className="mb-12" aria-labelledby={`section-${level}`}>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className={`font-sans text-xs font-semibold uppercase tracking-widest px-2.5 py-1 ${meta.stamp}`}>
                      {meta.chapter}
                    </span>
                    <h2 id={`section-${level}`} className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {meta.label}
                    </h2>
                    <span className="font-sans text-sm text-muted-foreground">
                      {lessons.length} leçon{lessons.length > 1 ? "s" : ""}
                    </span>
                    <span className="ml-auto hidden md:block">
                      <Link
                        href={levelPath[level]}
                        className="font-sans text-sm font-medium text-primary hover:underline"
                      >
                        Voir le niveau →
                      </Link>
                    </span>
                  </div>
                  <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lessons.map((data, n) => (
                      <li key={data.lesson.slug}>
                        <Link
                          href={`/lecon/${data.lesson.level.toLowerCase()}/${data.lesson.slug}`}
                          className="folio group flex flex-col gap-2 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                              Leçon {n + 1}
                            </span>
                            <span className="inline-flex items-center gap-1 font-sans text-xs text-muted-foreground">
                              <Clock className="size-3" aria-hidden />
                              {data.lesson.duration}
                            </span>
                          </div>
                          <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                            {data.lesson.title}
                          </h3>
                          <p className="font-serif text-sm text-muted-foreground line-clamp-2">
                            {data.lesson.objective}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1.5 font-sans text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            <BookOpen className="size-3.5" aria-hidden />
                            Lire la leçon
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                  {idx === 2 && (
                    <div className="my-10">
                      <AdSlot />
                    </div>
                  )}
                </section>
              );
            })
          )}

          {/* Rappel de la méthode */}
          <section className="mb-8 rounded-md border border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="font-display text-xl font-bold mb-2">
              Comment utiliser ce programme ?
            </h2>
            <p className="font-serif text-muted-foreground max-w-3xl">
              Choisissez votre niveau, puis suivez les leçons dans l'ordre où
              elles sont présentées : chaque leçon s'ouvre sur la règle,
              poursuit avec des exercices pratiques et se termine par un quiz
              de validation avec corrections expliquées. Pour savoir par quel
              chapitre commencer, le{" "}
              <Link href="/test-niveau" className="text-primary hover:underline">
                test de niveau
              </Link>{" "}
              vous oriente en quelques minutes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
