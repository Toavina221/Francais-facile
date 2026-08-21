/**
 * FrançaisFacile+ — Page « Test de niveau d'entrée »
 * Style « La Classe Parisienne » : papier crème, encre marine,
 * tampons de niveau façon cachet d'examen, voix professorale.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  computePlacement,
  placementQuestions,
  type PlacementResult,
} from "@/data/testNiveau";
import { levelInfos } from "@/data/delf";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const STAMP_CLASS: Record<string, string> = {
  A1: "stamp-a1",
  A2: "stamp-a2",
  B1: "stamp-b1",
  B2: "stamp-b2",
};

export default function TestNiveau() {
  const [step, setStep] = useState(0); // 0 = intro, 1..15 = questions, 16 = résultat
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const total = placementQuestions.length;
  const q = step > 0 && step <= total ? placementQuestions[step - 1] : null;
  const progress = step > 0 ? Math.round(((step - 1) / total) * 100) : 0;

  const result: PlacementResult | null = useMemo(
    () => (step > total ? computePlacement(answers) : null),
    [step, answers],
  );

  const choose = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    setAnswers((prev) => ({ ...prev, [q!.id]: idx }));
  };

  const next = () => {
    setRevealed(false);
    setSelected(null);
    setStep((s) => s + 1);
    window.scrollTo({ top: 0 });
  };

  /* ---------- Introduction ---------- */
  if (step === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <SEO 
          title="Test de niveau de français" 
          description="Déterminez votre niveau de français (A1, A2, B1, B2) en 15 questions progressives. Test gratuit avec corrections expliquées par un professeur."
        />
        <Header />
        <main className="flex-1">
          <div className="container max-w-3xl py-16 md:py-24">
            <Breadcrumbs items={[{ label: "Test de niveau" }]} />
            <p className="chapter-rule mb-6">Évaluation d'entrée</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Quel est votre niveau de français ?
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Répondez à <strong>15 questions progressives</strong>, du niveau
              A1 au niveau B2. Le test ne vous juge pas : il trouve simplement
              le chapitre par lequel commencer. Une erreur n'est qu'une leçon
              qui commence.
            </p>
            <div className="rule-box mb-8">
              <p className="font-display font-semibold mb-2">✦ Comment ça marche</p>
              <p className="text-foreground/90">
                Chaque question est corrigée immédiatement avec une explication
                du professeur. Le questionnaire dure environ cinq minutes. À la
                fin, vous recevez votre niveau recommandé et le parcours de
                leçons qui vous correspond.
              </p>
            </div>
            <Button size="lg" className="quill-btn" onClick={() => setStep(1)}>
              Commencer le test <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /* ---------- Résultat ---------- */
  if (result) {
    const info = levelInfos.find((l) => l.id === result.level)!;
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <SEO title="Résultat de votre test de niveau" />
        <Header />
        <main className="flex-1">
          <div className="container max-w-3xl py-16 md:py-20">
            <Breadcrumbs items={[{ label: "Test de niveau", href: "/test-niveau" }, { label: "Votre résultat" }]} />
            <p className="chapter-rule mb-6">Votre résultat</p>
            <div className="folio p-8 md:p-10 text-center">
              <div className={`${STAMP_CLASS[result.level]} mx-auto mb-6 w-fit -rotate-6`}>
                {result.level}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {result.message.title}
              </h2>
              <p className="text-foreground/80 max-w-xl mx-auto mb-6">
                {result.message.body}
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-foreground/80 mb-8">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                Score : {result.score} / {result.total} bonnes réponses
              </div>
              <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mb-8">
                {(["A1", "A2", "B1", "B2"] as const).map((lv) => {
                  const count = result.detail[lv];
                  const isRec = lv === result.level;
                  return (
                    <div
                      key={lv}
                      className={`rounded-md border px-2 py-3 ${
                        isRec
                          ? "border-primary bg-primary/10"
                          : "border-border bg-secondary/60"
                      }`}
                    >
                      <p className={`text-xs font-semibold ${STAMP_CLASS[lv]} mb-1`}>
                        {lv}
                      </p>
                      <p className="text-lg font-display font-semibold">
                        {count}/4
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                Votre parcours recommandé :{" "}
                <strong className="text-foreground">
                  {result.level === "A1"
                    ? "les fondamentaux — présentations, verbes, phrases de la vie quotidienne"
                    : result.level === "A2"
                      ? "le récit au passé — passé composé, imparfait, comparaisons"
                      : result.level === "B1"
                        ? "l'autonomie — conditionnel, pronoms relatifs, discours indirect"
                        : "la maîtrise — subjonctif, argumentation, style soutenu"}
                </strong>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild className="quill-btn">
                  <Link href={`/niveaux/${result.level}`}>
                    Voir le programme {result.level}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep(0);
                    setAnswers({});
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Refaire le test
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/delf">Préparation DELF</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /* ---------- Question en cours ---------- */
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title={`Test de niveau - Question ${step}/${total}`} />
      <Header />
      <main className="flex-1">
        <div className="container max-w-3xl py-12 md:py-16">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/test-niveau">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quitter
              </Link>
            </Button>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Question {step} / {total}
            </p>
          </div>
          <Progress value={progress} className="mb-8" />
          <div className="folio p-8 md:p-10">
            <span className={`${STAMP_CLASS[q!.level]} mb-5 inline-block -rotate-6`}>
              {q!.level}
            </span>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
              {q!.question}
            </h2>
            <div className="space-y-3">
              {q!.options.map((opt, idx) => {
                const isCorrect = idx === q!.correct;
                const isSelected = idx === selected;
                let cls =
                  "w-full justify-start text-left rounded-md border px-4 py-3 font-sans transition-colors ";
                if (!revealed) {
                  cls += "border-border bg-background hover:border-primary/40 hover:bg-secondary/70";
                } else if (isCorrect) {
                  cls += "border-emerald-600/50 bg-emerald-600/10 text-emerald-900";
                } else if (isSelected) {
                  cls += "border-destructive/50 bg-destructive/10 text-destructive-foreground";
                } else {
                  cls += "border-border bg-secondary/50 text-muted-foreground";
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => choose(idx)}
                    disabled={revealed}
                    className={cls}
                  >
                    {opt}
                    {revealed && isCorrect && (
                      <CheckCircle2 className="ml-2 inline h-4 w-4 text-emerald-700" aria-hidden />
                    )}
                  </button>
                );
              })}
            </div>
            {revealed && (
              <div className="fade-up rule-box mt-6">
                <p className="font-display font-semibold text-foreground mb-1">
                  ✦ L'explication du professeur
                </p>
                <p className="text-foreground/90">{q!.explanation}</p>
              </div>
            )}
            {revealed && (
              <div className="mt-6 flex justify-end">
                <Button onClick={next} className="quill-btn">
                  {step === total ? "Voir mon niveau" : "Question suivante"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
