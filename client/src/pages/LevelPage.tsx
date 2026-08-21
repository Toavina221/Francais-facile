/**
 * FrançaisFacile+ — Page d'un niveau (A1/A2/B1/B2)
 * Liste des leçons avec progression sauvegardée.
 */
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, CheckCircle2, ArrowLeft, Clock } from "lucide-react";
import { allLessons, levelInfos, type LevelId } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

export default function LevelPage() {
  const params = useParams<{ level: string }>();
  const level = (params.level?.toUpperCase() ?? "A1") as LevelId;
  const info = levelInfos.find((l) => l.id === level);
  const lessons = allLessons[level];
  const { bestScore } = useProgress();

  if (!info || !lessons) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <p>Niveau introuvable.</p>
          <Button asChild className="mt-4 font-sans">
            <Link href="/niveaux">Voir tous les niveaux</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`Niveau ${level} : ${info.title}`} 
        description={`Programme de français niveau ${level} (${info.subtitle}). ${info.description} ${lessons.length} leçons avec exercices et quiz.`}
      />
      <Header />

      <section className="container pt-8 pb-4">
        <Breadcrumbs 
          items={[
            { label: "Niveaux", href: "/niveaux" },
            { label: `Niveau ${level}` }
          ]} 
        />
      </section>

      <section className="container pb-12">
        <div className="fade-up">
          <span className="font-display italic text-[var(--gold)] text-sm">
            Niveau {info.id} — {info.subtitle}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-1 mb-3">
            {info.title}
          </h1>
          <p className="text-foreground/75 max-w-2xl">{info.description}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4 space-y-0">
          {lessons.map((data, i) => {
            const record = bestScore(data.lesson.id);
            return (
              <Link
                key={data.lesson.id}
                href={`/lecon/${level.toLowerCase()}/${data.lesson.slug}`}
                className="group folio flex items-center gap-4 p-5 transition-all fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="size-12 rounded-full border border-[var(--gold)]/50 bg-background flex items-center justify-center font-display text-lg font-bold text-[var(--ink)] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {data.lesson.title}
                  </h2>
                  <p className="text-sm text-muted-foreground truncate">
                    Objectif : {data.lesson.objective}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="size-3" /> {data.lesson.duration} ·{" "}
                    {data.exercises.reduce((n, g) => n + g.exercises.length, 0)}{" "}
                    exercices · {data.quiz.length} questions de quiz
                  </p>
                </div>
                {record ? (
                  <div className="flex items-center gap-2 shrink-0 text-right">
                    <div className="hidden sm:block">
                      <p className="font-sans text-xs text-muted-foreground">
                        Meilleur score
                      </p>
                      <p className="font-display font-bold">
                        {record.score}/{record.total}
                      </p>
                    </div>
                    <CheckCircle2 className="size-5 text-emerald-600" />
                  </div>
                ) : (
                  <div className="shrink-0 hidden sm:flex items-center gap-1 font-sans text-xs text-primary font-semibold">
                    <BookOpen className="size-4" /> Lire cette leçon
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
