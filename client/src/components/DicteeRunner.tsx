/**
 * FrançaisFacile+ — Dictée audio interactive
 * Style « La Classe Parisienne » : papier crème, encre marine, corrections bienveillantes.
 * L'apprenant écoute la phrase dictée (fr-FR), la retape, et reçoit une correction
 * mot par mot : vert = correct, rouge = erreur, gris = mot en trop.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, RotateCcw, CheckCircle2, AlertCircle, Ear } from "lucide-react";
import { speakFrench, stopSpeaking } from "@/components/LessonBlocks";
import { diffWords, type Dictee } from "@/data/dictees";

const STORAGE_KEY = "ff-dictees-best";

type Status = "listening" | "typing" | "corrected";

interface BestScores {
  [dicteeId: string]: number;
}

function loadBest(): BestScores {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function DicteeRunner({ dictee }: { dictee: Dictee }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [status, setStatus] = useState<Status>("listening");
  const [results, setResults] = useState<{ sentence: string; diff: Array<"correct" | "wrong" | "extra"> }[]>([]);
  const [playing, setPlaying] = useState(false);
  const [best, setBest] = useState<BestScores>(() => loadBest());
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sentence = dictee.sentences[index];
  const words = useMemo(() => sentence.split(/\s+/), [sentence]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  // Revenir à l'état « écouter » quand on change de phrase
  useEffect(() => {
    setStatus("listening");
    setTyped("");
    setResults([]);
    setPlaying(false);
  }, [index, dictee.id]);

  const toggleListen = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
    } else {
      speakFrench(sentence);
      setPlaying(true);
      if (status === "listening") setStatus("typing");
      // Repasser à « listening » visuellement quand la lecture se termine
      setTimeout(() => setPlaying(false), sentence.length * 90 + 600);
      textareaRef.current?.focus();
    }
  };

  const validate = () => {
    const diff = diffWords(sentence, typed);
    const score = diff.filter((d) => d === "correct").length;
    setResults((prev) => [
      ...prev,
      { sentence, diff: [...diff, ...Array(Math.max(0, words.length - diff.length)).fill("extra") as Array<"correct" | "wrong" | "extra">].slice(0, Math.max(diff.length, words.length)) },
    ]);
    setStatus("corrected");
    stopSpeaking();
    setPlaying(false);
    // Sauvegarder le meilleur score
    const total = words.length;
    const current = results.reduce((sum, r) => sum + r.diff.filter((d) => d === "correct").length, score);
    const allTotal = [...results.map((r) => r.diff.length), total].reduce((a, b) => a + b, 0);
    const percent = Math.round((current / allTotal) * 100);
    const prev = best[dictee.id] ?? 0;
    if (percent > prev) {
      const next = { ...best, [dictee.id]: percent };
      setBest(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
    }
  };

  const restart = () => {
    setIndex(0);
    setTyped("");
    setResults([]);
    setStatus("listening");
    setPlaying(false);
  };

  const isLast = index >= dictee.sentences.length - 1;
  const allCorrected = status === "corrected" && isLast;

  const totalTyped = results.reduce((sum, r) => sum + r.diff.length, 0) + (status === "corrected" ? 0 : 0);
  const bestPercent = best[dictee.id];

  return (
    <div className="fade-up">
      {/* Progression */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Dictée {index + 1} sur {dictee.sentences.length}
        </p>
        {bestPercent != null && (
          <p className="font-sans text-xs text-muted-foreground">
            Meilleur score : <span className="font-semibold text-primary">{bestPercent} %</span>
          </p>
        )}
      </div>

      {/* La phrase affichée en mots colorés après correction */}
      {status === "corrected" && results.length > 0 && (
        <div className="mb-5">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Correction mot par mot — vert : exact · rouge : à revoir
          </p>
          {results.map((r, ri) => (
            <p key={ri} className="mb-2 text-foreground/90">
              « {r.sentence.split(/\s+/).map((w, wi) => {
                const cls =
                  r.diff[wi] === "correct"
                    ? "text-forest bg-forest/10"
                    : r.diff[wi] === "wrong"
                      ? "text-destructive bg-destructive/10"
                      : "text-muted-foreground bg-muted line-through";
                return (
                  <span key={wi} className={`rounded px-1 py-0.5 mx-0.5 ${cls}`}>
                    {w}
                  </span>
                );
              })} »
            </p>
          ))}
        </div>
      )}

      {/* Phrase en cours */}
      {status !== "corrected" && (
        <div className="mb-5">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
            La phrase à dicter
          </p>
          <div className="border border-border rounded-lg bg-card p-4">
            <p className="text-xl text-foreground/30 italic tracking-wide select-none">
              {words.map((_, wi) => (
                <span key={wi} className="inline-block mx-1 align-middle">
                  {"●".repeat(Math.min(3, Math.max(2, _.length)))}
                </span>
              ))}
            </p>
            <p className="text-xs text-muted-foreground mt-2">{words.length} mots</p>
          </div>
        </div>
      )}

      {/* Commandes audio */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <button
          type="button"
          onClick={toggleListen}
          className="quill-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium transition-transform active:scale-[0.97]"
        >
          {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
          {playing ? "Arrêter la lecture" : "Écouter la dictée"}
        </button>
        <span className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
          <Ear className="h-4 w-4" aria-hidden />
          Écoutez plusieurs fois, à votre rythme.
        </span>
      </div>

      {/* Saisie */}
      <div className="mb-5">
        <label htmlFor={`dictee-typed-${index}`} className="font-sans text-xs uppercase tracking-widest text-muted-foreground block mb-2">
          Retapez la phrase entendue
        </label>
        <textarea
          ref={textareaRef}
          id={`dictee-typed-${index}`}
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          disabled={status === "corrected"}
          rows={3}
          placeholder="Écrivez ici ce que vous entendez…"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/60 disabled:opacity-60"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {status !== "corrected" ? (
          <button
            type="button"
            onClick={validate}
            disabled={typed.trim().length === 0}
            className="quill-btn inline-flex items-center gap-2 bg-forest text-white px-5 py-2.5 rounded-md font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-transform active:scale-[0.97]"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            Corriger ma dictée
          </button>
        ) : (
          <>
            {isLast ? (
              <button
                type="button"
                onClick={restart}
                className="quill-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium transition-transform active:scale-[0.97]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
                Recommencer la dictée
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIndex((i) => i + 1)}
                className="quill-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium transition-transform active:scale-[0.97]"
              >
                Phrase suivante
                <span aria-hidden>→</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Résultat global à la fin */}
      {allCorrected && (
        <div className="tip-box mt-6">
          <p className="font-display font-semibold text-foreground mb-1">Dictée terminée !</p>
          <p className="text-foreground/90">
            Votre score : <strong className="text-forest">{best[dictee.id]} %</strong>. Comparez chaque mot
            corrigé avec la phrase attendue, puis réécoutez et retapez : c'est en recommençant que l'oreille
            et l'orthographe se renforcent ensemble. Une erreur n'est qu'une leçon qui commence.
          </p>
        </div>
      )}

      {/* Points de vigilance */}
      {(status === "corrected" || typed.length > 0) && (
        <details className="mt-6 group">
          <summary className="cursor-pointer font-display font-semibold text-foreground select-none">
            Les points de vigilance de cette dictée
          </summary>
          <ul className="mt-3 space-y-2">
            {dictee.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-foreground/90">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
