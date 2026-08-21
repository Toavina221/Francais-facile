/**
 * FrançaisFacile+ — Page d'accueil
 * Style « La Classe Parisienne » : éditorial, crème/bleu encre, hero asymétrique.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, PenLine, Sparkles, Trophy, GraduationCap } from "lucide-react";
import { levelInfos, delphModules, funFacts } from "@/data";
import { useEffect, useState } from "react";
import { getLessonOfTheDay } from "@/lib/lessonOfTheDay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import SEO from "@/components/SEO";

/**
 * Bandeau « Leçon du jour » : une leçon différente chaque jour,
 * choisie de manière déterministe pour tous les visiteurs du même jour.
 */
function LessonOfDayBanner() {
  const today = getLessonOfTheDay();
  const dateStr = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--gold)] whitespace-nowrap">
              {dateStr}
            </span>
            <span className={`font-sans text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${levelStamps[today.color]}`}>
              Niveau {today.level}
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold">
                La leçon du jour : {today.title}
              </h2>
              <p className="text-sm text-muted-foreground">{today.objective}</p>
            </div>
          </div>
          <Link
            href={`/lecon/${today.level.toLowerCase()}/${today.slug}`}
            className="shrink-0 quill-btn inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold transition-transform active:scale-[0.97]"
          >
            Lire la leçon <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const levelStamps: Record<string, string> = {
  emerald: "stamp-a1",
  teal: "stamp-a2",
  amber: "stamp-b1",
  rose: "stamp-b2",
  violet: "stamp-b2p",
  slate: "stamp-c1",
};

export default function Home() {
  const [fact, setFact] = useState(funFacts[0]);

  useEffect(() => {
    setFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Apprendre le français gratuitement : Leçons, Exercices et Quiz" 
        description="FrançaisFacile+ est une plateforme pédagogique gratuite pour apprendre le français de A1 à C1. Leçons interactives, exercices corrigés, dictées audio et préparation DELF/TCF."
      />
      <Header />

      {/* Hero asymétrique */}
      <section className="container pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid md:grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="fade-up">
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--gold)] mb-4">
              Formation gratuite · Leçon · Exercice · Quiz
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.12] mb-5">
              Votre français,
              <br />
              <em className="text-primary">un chapitre à la fois.</em>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              Des leçons précises, des exercices interactifs et des quiz corrigés
              avec bienveillance — du niveau A1 au C1, plus une préparation au
              DELF et au DALF. 100 % gratuit, pensé pour les apprenants du monde entier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-sans">
                <Link href="/niveaux">
                  Commencer à apprendre <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-sans bg-card">
                <Link href="/delf">
                  Préparation DELF <GraduationCap className="size-4 ml-1" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic flex items-center gap-2">
              <Sparkles className="size-4 text-[var(--gold)]" />
              « Chaque erreur est une leçon qui commence. »
            </p>
          </div>
          <div className="fade-up hidden lg:block">
            <img
              src="/manus-storage/hero-livre_6af0dccc.png"
              alt="Illustration d'un livre de grammaire ouvert avec des lettres françaises"
              className="rounded-lg shadow-xl border border-border"
            />
          </div>
        </div>
      </section>

      <LessonOfDayBanner />

      {/* Publicité — encart sous le hero */}
      <AdSlot format="horizontal" slotId={1} className="no-print" />

      {/* Méthode en 3 étapes */}
      <section className="bg-secondary/70 border-y border-border">
        <div className="container py-14">
          <p className="chapter-rule mb-4">
            <span className="font-display italic text-[var(--gold)] text-sm">
              La méthode
            </span>
          </p>
          <h2 className="font-display text-3xl font-semibold mb-6">
            Trois temps simples à chaque leçon
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
              {[
              {
                icon: BookOpen,
                title: "1. La leçon",
                body: "Une leçon courte et exacte, avec les règles essentielles encadrées et les conseils d'un professeur patient.",
              },
              {
                icon: PenLine,
                title: "2. Les exercices",
                body: "Phrases à compléter, mots à remettre en ordre, associations : pratiquez immédiatement ce que vous venez de lire.",
              },
              {
                icon: Trophy,
                title: "3. Le quiz",
                body: "Un quiz de validation avec score et corrections expliquées. On ne punit jamais : on explique, on encourage.",
              },
              ].map((step, i) => (
              <div key={step.title} className="folio p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <step.icon className="size-6 text-primary" />
                  <span className="font-display italic text-[var(--gold)] text-xs uppercase tracking-[0.25em]">
                    {i === 0 ? "Premier temps" : i === 1 ? "Deuxième temps" : "Troisième temps"}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/75">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niveaux */}
      <section className="container py-16">
        <p className="chapter-rule mb-8">
          <span className="font-display italic text-[var(--gold)] text-sm">
            Chapitre I — Choisissez votre niveau
          </span>
        </p>
        <h2 className="font-display text-3xl font-semibold mb-2">
          Du premier mot à la conversation fluide
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Les niveaux suivent le Cadre européen commun de référence (CECRL),
          le même référentiel que le DELF et le TCF.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {levelInfos.map((lvl) => (
            <Link
              key={lvl.id}
              href={`/niveaux/${lvl.id.toLowerCase()}`}
              className="group folio p-6 transition-all"
            >
              <span
                className={`inline-block font-sans text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-3 ${levelStamps[lvl.color]}`}
              >
                Niveau {lvl.id}
              </span>
              <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                {lvl.title}
              </h3>
              <p className="font-sans text-sm font-medium text-muted-foreground mb-2">
                {lvl.subtitle}
              </p>
              <p className="text-sm text-foreground/75">{lvl.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bandeau DELF */}
      <section className="bg-[var(--ink)] text-[oklch(0.97_0.012_85)]">
        <div className="container py-14 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--gold)] mb-3">
              Préparation aux examens officiels
            </p>
            <h2 className="font-display text-3xl font-semibold mb-4">
              Visez le DELF ou le TCF
            </h2>
            <p className="text-[oklch(0.9_0.012_85)] mb-6 max-w-lg">
              Découvrez la structure exacte des épreuves, les phrases clés à
              maîtriser et entraînez-vous avec des quiz de mise en condition.
              {delphModules.length > 0 &&
                ` Modules disponibles : ${delphModules.map((m) => m.title.replace(" :", "")).join(" · ")}.`}
            </p>
            <Button asChild variant="secondary" size="lg" className="font-sans">
              <Link href="/delf">
                Découvrir le module DELF <ArrowRight className="size-4 ml-1" />
              </Link>
            </Button>
          </div>
          <div className="hidden lg:block">
            <img
              src="/manus-storage/quiz-examen_409cfa6a.png"
              alt="Illustration de feuilles d'examen avec un stylo"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Le mot du professeur */}
      <section className="container py-16">
        <div className="rule-box max-w-3xl">
          <p className="font-display italic text-xl leading-relaxed">
            « Le français n'est pas une montagne, c'est un escalier : chaque
            leçon est une marche. Ne regardez pas le sommet — montez, une
            marche à la fois. Nous serons là à chaque étape. »
          </p>
          <p className="font-sans text-sm text-muted-foreground mt-3 not-italic">
            — Le mot du professeur, FrançaisFacile+
          </p>
        </div>
      </section>

      {/* Nouveaux chapitres */}
      <section className="bg-secondary/70 border-t border-border">
        <div className="container py-10">
          <p className="chapter-rule">Nouveaux chapitres</p>
          <div className="grid gap-4 md:grid-cols-3 mt-5">
            <Link href="/dictees" className="group border border-border bg-card rounded-lg p-5 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                Dictées audio
              </h3>
              <p className="text-sm text-foreground/70">
                Écoutez, retapez, comparez mot par mot : l'orthographe se travaille aussi avec l'oreille.
              </p>
            </Link>
            <Link href="/fiches" className="group border border-border bg-card rounded-lg p-5 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                Fiches de révision
              </h3>
              <p className="text-sm text-foreground/70">
                Toutes les règles d'un niveau sur une fiche, imprimables en PDF.
              </p>
            </Link>
            <Link href="/faux-amis" className="group border border-border bg-card rounded-lg p-5 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                Faux amis &amp; pièges
              </h3>
              <p className="text-sm text-foreground/70">
                Les erreurs classées par langue maternelle : anglais, arabe, espagnol, allemand.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Fait du jour */}
      <section className="bg-secondary/70 border-t border-border">
        <div className="container py-8 flex flex-wrap items-center justify-between gap-3">
          <p className="font-sans text-sm text-muted-foreground">
            <span className="text-[var(--gold)] font-semibold">Le saviez-vous ?</span>{" "}
            {fact}
          </p>
          <Link href="/niveaux"
            className="font-sans text-sm font-semibold text-primary hover:underline"
          >
            Tourner la première page →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
