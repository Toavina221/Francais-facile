/**
 * FrançaisFacile+ — Quiz avec correction immédiate bienveillante
 * Style « La Classe Parisienne » : chaque réponse est expliquée, jamais punie.
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, Download } from "lucide-react";
import { generateCertificate } from "@/lib/certificate";
import type { QuizQuestion } from "@/data/types";
import { quizMessage } from "@/data";

interface QuizRunnerProps {
  questions: QuizQuestion[];
  lessonId: string;
  onScore?: (score: number, total: number) => void;
}

export function QuizRunner({ questions, lessonId, onScore }: QuizRunnerProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);

  const q = questions[current];

  const answer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) {
      setScore((s) => s + 1);
    }
  };

  const next = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
      if (!scoreSaved) {
        onScore?.(score + (selected === q.correct ? 0 : 0), questions.length);
        setScoreSaved(true);
      }
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setScoreSaved(false);
  };

  if (finished) {
    const msg = quizMessage(score, questions.length);
    return (
      <div className="rule-box text-center py-8 fade-up">
        <Award className="size-10 text-[var(--gold)] mx-auto mb-3" />
        <h3 className="font-display text-2xl font-semibold mb-2">{msg.title}</h3>
        <p className="text-foreground/80 mb-4 max-w-md mx-auto">{msg.body}</p>
        <p className="font-display text-4xl font-bold mb-6">
          {score}
          <span className="text-lg text-muted-foreground">/{questions.length}</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={restart} variant="outline" className="font-sans">
            <RotateCcw className="size-4 mr-1" /> Réessayer
          </Button>
          <Button
            onClick={() => {
              const name = prompt("Nom de l'élève pour le compte-rendu :");
              if (name) {
                generateCertificate(name, `Quiz ${lessonId} (${score}/${questions.length})`, true);
              }
            }}
            className="quill-btn font-sans"
          >
            <Download className="size-4 mr-1" /> Export Professeur (PDF)
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg p-5 bg-card">
      <div className="flex items-center justify-between mb-3">
        <p className="font-sans text-sm text-muted-foreground">
          Question {current + 1} sur {questions.length}
        </p>
        <p className="font-sans text-sm font-semibold text-primary">
          Score : {score}
        </p>
      </div>
      <Progress value={((current + (answered ? 1 : 0)) / questions.length) * 100} className="mb-5" />

      <h4 className="font-display text-lg font-semibold mb-4">{q.question}</h4>

      <div className="space-y-2.5 mb-4">
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.correct;
          const isSelected = idx === selected;
          let cls = "border-border bg-background hover:border-primary/60";
          if (answered) {
            if (isCorrect) cls = "border-emerald-600 bg-emerald-50";
            else if (isSelected) cls = "border-destructive bg-red-50";
            else cls = "border-border bg-muted/50 opacity-60";
          } else if (isSelected) {
            cls = "border-primary bg-accent";
          }
          return (
            <button
              key={idx}
              type="button"
              onClick={() => answer(idx)}
              disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-md border font-serif transition-colors flex items-center gap-3 ${cls}`}
            >
              <span className="font-sans text-sm font-semibold text-muted-foreground shrink-0">
                {String.fromCharCode(65 + idx)}.
              </span>
              <span className="flex-1">{opt}</span>
              {answered && isCorrect && (
                <CheckCircle2 className="size-5 text-emerald-600 shrink-0" />
              )}
              {answered && isSelected && !isCorrect && (
                <XCircle className="size-5 text-destructive shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="tip-box mb-4 fade-up">
          <p className="font-sans text-xs uppercase tracking-widest mb-1 not-italic font-semibold">
            Explication du professeur
          </p>
          <p className="text-sm">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <Button onClick={next} className="font-sans">
          {current + 1 < questions.length ? (
            <>
              Question suivante <ArrowRight className="size-4 ml-1" />
            </>
          ) : (
            "Voir mon résultat"
          )}
        </Button>
      )}
    </div>
  );
}
