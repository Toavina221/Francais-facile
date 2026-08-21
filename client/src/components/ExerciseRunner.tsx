/**
 * FrançaisFacile+ — Exercices interactifs
 * Fill (à trous), Order (remise en ordre), Match (correspondance).
 * Correction immédiate et bienveillante après chaque validation.
 */
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import type { Exercise, ExerciseGroup } from "@/data/types";
import { renderInline } from "./LessonBlocks";

/* ----------------- Exercice à trous ----------------- */
function FillExerciseRunner({
  exercise,
  index,
}: {
  exercise: Extract<Exercise, { type: "fill" }>;
  index: number;
}) {
  const [answers, setAnswers] = useState<string[]>(
    exercise.answers.map(() => ""),
  );
  const [checked, setChecked] = useState<boolean[]>(
    exercise.answers.map(() => false),
  );
  const allChecked = checked.every(Boolean);

  const parts = useMemo(
    () => exercise.sentence.split(/(\{\{\d+\}\})/g),
    [exercise.sentence],
  );

  const setAnswer = (i: number, value: string) => {
    const next = [...answers];
    next[i] = value.trim();
    setAnswers(next);
  };

  const check = (i: number) => {
    const ok = answers[i].toLowerCase() === exercise.answers[i].toLowerCase();
    setChecked((prev) => prev.map((c, j) => (j === i ? ok : c)));
  };

  const checkAll = () => {
    setChecked(exercise.answers.map((a, i) => answers[i].toLowerCase() === a.toLowerCase()));
  };

  const reset = () => {
    setAnswers(exercise.answers.map(() => ""));
    setChecked(exercise.answers.map(() => false));
  };

  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <p className="mb-3 leading-relaxed">
        {parts.map((part, i) => {
          const m = part.match(/^\{\{(\d+)\}\}$/);
          if (!m) return <span key={i}>{part}</span>;
          const idx = parseInt(m[1], 10) - 1;
          const status = checked[idx];
          return (
            <span key={i} className="inline-flex items-center gap-1.5 mx-0.5">
              <Input
                value={answers[idx]}
                onChange={(e) => setAnswer(idx, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") check(idx);
                }}
                placeholder="..."
                aria-label={`Réponse ${idx + 1}`}
                className={`h-9 w-28 sm:w-32 text-center font-semibold ${
                  status === true
                    ? "border-emerald-600 bg-emerald-50"
                    : status === false && answers[idx] !== ""
                      ? "border-destructive bg-red-50"
                      : ""
                }`}
              />
              {status === true && (
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              )}
              {status === false && answers[idx] !== "" && (
                <XCircle className="size-4 text-destructive shrink-0" />
              )}
            </span>
          );
        })}
      </p>

      {exercise.hint && !allChecked && (
        <p className="text-sm text-muted-foreground dark:text-foreground/60 italic mb-2">
          Indice : {exercise.hint}
        </p>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        {!allChecked ? (
          <Button size="sm" onClick={checkAll} className="font-sans">
            Vérifier
          </Button>
        ) : (
          <Button size="sm" variant="outline" onClick={reset} className="font-sans">
            <RotateCcw className="size-4 mr-1" /> Recommencer
          </Button>
        )}
      </div>

      {allChecked && (
        <div className="tip-box mt-3">
          <p className="text-sm font-semibold mb-0.5">Correction expliquée</p>
          <p className="text-sm">{renderInline(exercise.explanation)}</p>
        </div>
      )}
    </div>
  );
}

/* ----------------- Exercice de remise en ordre ----------------- */
function OrderExerciseRunner({
  exercise,
}: {
  exercise: Extract<Exercise, { type: "order" }>;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState<null | boolean>(null);

  const isCorrect = (sel: string[]) =>
    sel.length === exercise.correct.length &&
    sel.every((w, i) => w.toLowerCase() === exercise.correct[i].toLowerCase());

  const remaining = exercise.words.filter(
    (w) => selected.filter((s) => s === w).length < exercise.words.filter((x) => x === w).length,
  );

  const toggleWord = (word: string) => {
    setSelected((prev) => [...prev, word]);
    setChecked(null);
  };

  const removeWord = (idx: number) => {
    setSelected((prev) => prev.filter((_, i) => i !== idx));
    setChecked(null);
  };

  const check = () => {
    setChecked(
      selected.length === exercise.correct.length &&
        selected.every((w, i) => w.toLowerCase() === exercise.correct[i].toLowerCase()),
    );
  };

  const reset = () => {
    setSelected([]);
    setChecked(null);
  };

  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      {/* Zone de réponse */}
      <div className="min-h-12 border-b-2 border-dashed border-border rounded-md p-2 mb-3 flex flex-wrap gap-2 items-center">
        {selected.length === 0 && (
          <span className="text-sm text-muted-foreground italic">
            Cliquez sur les mots dans l'ordre...
          </span>
        )}
        {selected.map((w, i) => (
          <button
            key={i}
            type="button"
            onClick={() => removeWord(i)}
            className="px-3 py-1 rounded-full bg-primary text-primary-foreground font-sans text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {w}
          </button>
        ))}
      </div>

      {/* Banque de mots */}
      <div className="flex flex-wrap gap-2 mb-3">
        {remaining.map((w, i) => (
          <button
            key={`${w}-${i}`}
            type="button"
            onClick={() => toggleWord(w)}
            className="px-3 py-1.5 rounded-full border border-border bg-background font-sans text-sm hover:border-primary hover:text-primary transition-colors"
          >
            {w}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {checked !== true && (
          <Button
            size="sm"
            onClick={check}
            disabled={selected.length !== exercise.correct.length}
            className="font-sans"
          >
            Vérifier
          </Button>
        )}
        <Button size="sm" variant="outline" onClick={reset} className="font-sans">
          <RotateCcw className="size-4 mr-1" /> Recommencer
        </Button>
      </div>

      {checked !== null && (
        <div className={`mt-3 rounded-md p-3 text-sm ${checked ? "tip-box" : "border border-destructive/40 bg-red-50"}`}>
          <p className="font-semibold mb-0.5">
            {checked ? "Bravo, c'est parfait !" : "Pas tout à fait... voici la bonne réponse :"}
          </p>
          {!checked && (
            <p className="font-semibold italic mb-1">« {exercise.correct.join(" ")} »</p>
          )}
          <p>{renderInline(exercise.explanation)}</p>
        </div>
      )}
    </div>
  );
}

/* ----------------- Exercice de correspondance ----------------- */
function MatchExerciseRunner({
  exercise,
}: {
  exercise: Extract<Exercise, { type: "match" }>;
}) {
  const shuffledRight = useMemo(
    () => [...exercise.pairs].sort(() => Math.random() - 0.5),
    [exercise],
  );
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<null | boolean>(null);

  const selectLeft = (left: string) => {
    if (matchedPairs[left]) return;
    setSelectedLeft(left);
  };

  const selectRight = (right: string) => {
    if (!selectedLeft) return;
    const pair = exercise.pairs.find((p) => p.left === selectedLeft);
    const pairCorrect = pair?.right === right;
    
    // Feedback visuel immédiat via toast ou simple state si on veut être discret
    // Ici on met à jour matchedPairs, ce qui déclenche le re-render avec la couleur emerald
    setMatchedPairs((prev) => ({ ...prev, [selectedLeft]: right }));
    setChecked((prev) => (prev === false ? false : pairCorrect));
    setSelectedLeft(null);
  };

  const allMatched =
    Object.keys(matchedPairs).length === exercise.pairs.length;
  const isAllCorrect =
    allMatched &&
    exercise.pairs.every((p) => matchedPairs[p.left] === p.right);

  const reset = () => {
    setMatchedPairs({});
    setChecked(null);
    setSelectedLeft(null);
  };

  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <p className="text-sm text-muted-foreground mb-3">{exercise.instruction}</p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="space-y-2">
          {exercise.pairs.map((p) => (
            <button
              key={p.left}
              type="button"
              onClick={() => selectLeft(p.left)}
              disabled={!!matchedPairs[p.left]}
              className={`w-full px-3 py-2 rounded-md border text-left font-sans text-sm transition-colors ${
                matchedPairs[p.left]
                  ? "border-emerald-500 bg-emerald-50 opacity-70"
                  : selectedLeft === p.left
                    ? "border-primary bg-accent ring-1 ring-primary/40"
                    : "border-border bg-background hover:border-primary/60"
              }`}
            >
              {p.left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((p) => (
            <button
              key={p.right}
              type="button"
              onClick={() => selectRight(p.right)}
              className={`w-full px-3 py-2 rounded-md border text-left font-sans text-sm transition-colors ${
                Object.values(matchedPairs).includes(p.right)
                  ? "border-emerald-500 bg-emerald-50 opacity-70"
                  : selectedLeft
                    ? "border-border bg-background hover:border-primary cursor-pointer"
                    : "border-border bg-muted/60"
              }`}
            >
              {p.right}
            </button>
          ))}
        </div>
      </div>

      {allMatched && (
        <div className={`rounded-md p-3 text-sm ${isAllCorrect ? "tip-box" : "border border-destructive/40 bg-red-50"}`}>
          <p className="font-semibold mb-0.5">
            {isAllCorrect ? "Toutes les paires sont correctes !" : "Certaines paires sont incorrectes, recommencez."}
          </p>
          {!isAllCorrect && (
            <>
              <p className="mb-1">Correspondances attendues :</p>
              <ul className="list-disc pl-5">
                {exercise.pairs.map((p) => (
                  <li key={p.left}>
                    <strong>{p.left}</strong> → {p.right}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-1">{renderInline(exercise.explanation)}</p>
        </div>
      )}

      <Button
        size="sm"
        variant="outline"
        onClick={reset}
        className="font-sans mt-2"
        disabled={Object.keys(matchedPairs).length === 0}
      >
        <RotateCcw className="size-4 mr-1" /> Recommencer
      </Button>
    </div>
  );
}

/* ----------------- Groupe d'exercices ----------------- */
export function ExerciseGroupRunner({ group }: { group: ExerciseGroup }) {
  return (
    <section className="mb-8">
      <h3 className="font-display text-lg font-semibold mb-1">{group.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
      <div className="space-y-4">
        {group.exercises.map((ex, i) => {
          if (ex.type === "fill")
            return <FillExerciseRunner key={i} exercise={ex} index={i} />;
          if (ex.type === "order")
            return <OrderExerciseRunner key={i} exercise={ex} />;
          return <MatchExerciseRunner key={i} exercise={ex} />;
        })}
      </div>
    </section>
  );
}
