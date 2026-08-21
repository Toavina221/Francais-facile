/**
 * FrançaisFacile+ — Mode Examen Blanc
 * Chronomètre, questions de mise en condition, résultat final.
 */
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, AlertCircle, CheckCircle2, Trophy } from "lucide-react";
import { type QuizQuestion } from "@/data/types";

interface ExamenBlancProps {
  title: string;
  durationMinutes: number;
  questions: QuizQuestion[];
  onFinish?: (score: number, total: number) => void;
  onCancel: () => void;
  isRealMode?: boolean;
}

export function ExamenBlanc({ title, durationMinutes, questions, onFinish, onCancel, isRealMode = false }: ExamenBlancProps) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  // Verrouillage de la navigation en mode réel
  useEffect(() => {
    if (started && !finished && isRealMode) {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = "L'examen est en cours. Si vous quittez, vos réponses seront perdues.";
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [started, finished, isRealMode]);

  const finish = useCallback(() => {
    setFinished(true);
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    onFinish?.(score, questions.length);
  }, [answers, questions, onFinish]);

  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            finish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [started, finished, timeLeft, finish]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!started) {
    return (
      <div className="folio p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
          <Clock className="size-10 text-primary" />
        </div>
        <h2 className="font-display text-2xl font-bold mb-2">
          {isRealMode ? "Mode Examen Réel" : "Mode Examen Blanc"}
        </h2>
        <p className="text-foreground/70 mb-6 max-w-md mx-auto">
          Vous allez commencer une simulation chronométrée pour le <strong>{title}</strong>. 
          Vous avez <strong>{durationMinutes} minutes</strong> pour répondre à {questions.length} questions.
          {isRealMode && (
            <span className="block mt-2 text-rose-600 font-semibold">
              Attention : en mode réel, le retour en arrière est impossible et toute sortie de page annule l'examen.
            </span>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => setStarted(true)} size="lg" className="font-sans quill-btn">
            Commencer l'examen
          </Button>
          <Button onClick={onCancel} variant="ghost" className="font-sans">
            Annuler
          </Button>
        </div>
      </div>
    );
  }

  if (finished) {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    const percent = Math.round((score / questions.length) * 100);

    return (
      <div className="folio p-8 animate-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <Trophy className="size-12 text-[var(--gold)] mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold mb-2">Examen terminé</h2>
          <p className="text-xl font-display italic text-primary">
            Votre score : {score} / {questions.length} ({percent}%)
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {questions.map((q, i) => (
            <div key={i} className={`p-4 rounded-lg border ${answers[i] === q.correct ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'}`}>
              <p className="font-medium mb-2 flex items-start gap-2">
                <span className="shrink-0">{i + 1}.</span>
                <span>{q.question}</span>
              </p>
              <div className="flex items-center gap-2 text-sm">
                {answers[i] === q.correct ? (
                  <CheckCircle2 className="size-4 text-emerald-600" />
                ) : (
                  <AlertCircle className="size-4 text-rose-600" />
                )}
                <span className={answers[i] === q.correct ? 'text-emerald-700' : 'text-rose-700'}>
                  Votre réponse : {q.options[answers[i]] || "Aucune"}
                </span>
                {answers[i] !== q.correct && (
                  <span className="text-emerald-700 font-medium ml-auto">
                    Correct : {q.options[q.correct]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={onCancel} size="lg" className="font-sans quill-btn">
            Retour au module
          </Button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="folio p-6 md:p-8 animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-primary font-bold font-display">
          <Clock className={`size-5 ${timeLeft < 60 ? 'text-rose-500 animate-pulse' : ''}`} />
          <span className={timeLeft < 60 ? 'text-rose-500' : ''}>{formatTime(timeLeft)}</span>
        </div>
        <div className="text-sm text-muted-foreground font-sans">
          Question {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <Progress value={progress} className="h-1 mb-8" />

      <div className="mb-8">
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-6 leading-tight">
          {q.question}
        </h3>
        <div className="grid gap-3">
          {q.options.map((opt: string, i: number) => (
            <button
              key={i}
              onClick={() => setAnswers({ ...answers, [currentIndex]: i })}
              className={`text-left p-4 rounded-lg border transition-all active:scale-[0.98] ${
                answers[currentIndex] === i
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`size-5 rounded-full border flex items-center justify-center shrink-0 ${
                  answers[currentIndex] === i ? 'border-primary bg-primary' : 'border-muted-foreground/30'
                }`}>
                  {answers[currentIndex] === i && <div className="size-2 bg-white rounded-full" />}
                </div>
                <span className="font-sans">{opt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
        <Button
          variant="ghost"
          disabled={currentIndex === 0 || isRealMode}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          className="font-sans"
        >
          {isRealMode ? "Navigation verrouillée" : "Précédent"}
        </Button>
        
        {currentIndex < questions.length - 1 ? (
          <Button
            disabled={answers[currentIndex] === undefined}
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="font-sans quill-btn"
          >
            Suivant
          </Button>
        ) : (
          <Button
            disabled={answers[currentIndex] === undefined}
            onClick={finish}
            className="font-sans bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Terminer l'examen
          </Button>
        )}
      </div>
    </div>
  );
}
