/**
 * FrançaisFacile+ — Page de leçon
 * Parcours : Leçon → Exercices → Quiz, avec tabs et progression.
 */
import { useState } from "react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, PenLine, Trophy, ArrowLeft, ArrowRight, Clock, Share2 } from "lucide-react";
import { getLesson, allLessons, type LevelId } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { LessonBlocks } from "@/components/LessonBlocks";
import { ExerciseGroupRunner } from "@/components/ExerciseRunner";
import { QuizRunner } from "@/components/QuizRunner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import SEO from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function LessonPage() {
  const params = useParams<{ level: string; slug: string }>();
  const level = (params.level?.toUpperCase() ?? "A1") as LevelId;
  const data = getLesson(level, params.slug ?? "");
  const { recordScore, bestScore } = useProgress();
  const [quizKey, setQuizKey] = useState(0);
  // Onglets contrôlés par state : les boutons « Passer aux exercices/quiz » (de
  // vrais <button>) changent d'onglet via setTab. Les TabsTrigger de Radix
  // restent uniquement dans TabsList, conformément à l'API de Radix Tabs.
  const [tab, setTab] = useState("lesson");

  if (!data) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <p>Leçon introuvable.</p>
          <Button asChild className="mt-4 font-sans">
            <Link href={`/niveaux/${level.toLowerCase()}`}>
              Retour au niveau {level}
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const lessons = allLessons[level];
  const idx = lessons.findIndex((l) => l.lesson.id === data.lesson.id);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;
  const record = bestScore(data.lesson.id);

  const handleScore = (score: number, total: number) => {
    recordScore(data.lesson.id, score, total);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${data.lesson.title} (${level})`} 
        description={`Leçon de français : ${data.lesson.title}. ${data.lesson.objective} Apprenez avec nos explications claires, nos exercices pratiques et nos quiz corrigés.`}
        type="article"
      />
      <Header />

      <section className="container pt-8 pb-2">
        <Breadcrumbs 
          items={[
            { label: "Niveaux", href: "/niveaux" },
            { label: `Niveau ${level}`, href: `/niveaux/${level.toLowerCase()}` },
            { label: data.lesson.title }
          ]} 
        />
      </section>

      <article className="container pb-16">
        {/* En-tête de la leçon */}
        <header className="py-6 border-b border-border mb-8 fade-up">
          <p className="font-display italic text-[var(--gold)] text-sm mb-1">
            Niveau {level} · {data.lesson.duration} de lecture
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            {data.lesson.title}
          </h1>
          <p className="text-foreground/75 max-w-2xl flex items-start gap-2">
            <Clock className="size-4 mt-1.5 shrink-0 text-muted-foreground" />
            <span>
              <strong>Objectif de la leçon :</strong> {data.lesson.objective}
            </span>
          </p>
          {record && (
            <p className="font-sans text-sm text-emerald-700 mt-2 font-semibold flex items-center gap-1">
              <Trophy className="size-4" /> Meilleur score au quiz :{" "}
              {record.score}/{record.total}
            </p>
          )}
        </header>

        {/* Leçon / Exercices / Quiz */}
          <Tabs value={tab} onValueChange={setTab} className="max-w-3xl" id="parcours">

            <TabsList className="w-full grid grid-cols-3 font-sans bg-secondary">
            <TabsTrigger value="lesson" className="gap-1.5">
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">I — La leçon</span>
              <span className="sm:hidden">Leçon</span>
            </TabsTrigger>
            <TabsTrigger value="exercises" className="gap-1.5">
              <PenLine className="size-4" />
              <span className="hidden sm:inline">II — Les exercices</span>
              <span className="sm:hidden">Exercices</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-1.5">
              <Trophy className="size-4" />
              <span className="hidden sm:inline">III — Le quiz</span>
              <span className="sm:hidden">Quiz</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lesson" className="mt-6">
            <LessonBlocks blocks={data.lesson.blocks} />
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
              <Button
                className="quill-btn font-sans"
                onClick={() => setTab("exercises")}
              >
                Passer aux exercices <ArrowRight className="size-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="font-sans"
                onClick={() => setTab("quiz")}
              >
                Passer au quiz <ArrowRight className="size-4 ml-1" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="mt-6">
            <div id="exercices">
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Maintenant que vous avez lu la leçon, mettez-la en pratique.
              Chaque exercice vous donne une correction expliquée : lisez-la
              attentivement, c'est là que l'apprentissage se fixe. Le crayon
              pardonne tout — écrivez sans crainte.
            </p>
            {data.exercises.map((group, i) => (
              <ExerciseGroupRunner key={i} group={group} />
            ))}
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <div id="quiz">
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Dernier contrôle : {data.quiz.length} questions pour valider
              vos acquis. Visez au moins {Math.ceil(data.quiz.length * 0.6)}/
              {data.quiz.length} et gardez l'habitude d'un quiz par jour :
              votre meilleur score est sauvegardé.
            </p>
            <QuizRunner
              key={quizKey}
              questions={data.quiz}
              lessonId={data.lesson.id}
              onScore={handleScore}
            />
            {record && (
              <Button
                variant="outline"
                size="sm"
                className="font-sans mt-3"
                onClick={() => setQuizKey((k) => k + 1)}
              >
                Recommencer le quiz pour battre votre record
              </Button>
            )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Partage social */}
        <div className="max-w-3xl mt-12 py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
            <Share2 className="size-4" />
            <span>Partager cette leçon :</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`J'apprends le français sur FrançaisFacile+ ! Aujourd'hui : ${data.lesson.title}`)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="quill-btn px-4 py-2 rounded-md text-xs font-bold bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="size-3 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              Twitter
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Regarde cette leçon de français gratuite : ${data.lesson.title} — ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="quill-btn px-4 py-2 rounded-md text-xs font-bold bg-[#25D366] text-white hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="size-3 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Navigation entre leçons */}
        <nav className="max-w-3xl py-6 border-t border-border flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/lecon/${level.toLowerCase()}/${prev.lesson.slug}`}
              className="font-sans text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              <ArrowLeft className="size-4" /> {prev.lesson.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/lecon/${level.toLowerCase()}/${next.lesson.slug}`}
              className="font-sans text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            >
              Leçon suivante : {next.lesson.title} <ArrowRight className="size-4" />
            </Link>
          ) : (
            <Link
              href="/delf"
              className="font-sans text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            >
              Niveau terminé ! Préparez le DELF <ArrowRight className="size-4" />
            </Link>
          )}
        </nav>
      </article>

      {/* Publicité — encart en fin de leçon */}
      <AdSlot format="rectangle" slotId={2} className="no-print" />
      <Footer />
    </div>
  );
}
