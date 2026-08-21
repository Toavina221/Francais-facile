/**
 * FrançaisFacile+ — Structure des données pédagogiques
 * Design : « La Classe Parisienne » (éditorial, précis, chaleureux)
 */

export type LevelId = "A1" | "A2" | "B1" | "B2" | "B2+" | "C1";

export interface LessonBlock {
  type: "text" | "rule" | "example" | "tip";
  title?: string;
  content: string; // Markdown simple (gras **x**, italique *x*)
}

export interface Lesson {
  id: string;
  slug: string;
  level: LevelId;
  title: string;
  objective: string;
  duration: string; // ex "10 min"
  blocks: LessonBlock[];
}

/** Exercice à trous : compléter les phrases */
export interface FillExercise {
  type: "fill";
  sentence: string; // contient "{{1}}", "{{2}}"...
  answers: string[]; // réponses attendues dans l'ordre
  hint?: string;
  explanation: string;
}

/** Exercice de remise en ordre : réordonner les mots */
export interface OrderExercise {
  type: "order";
  words: string[]; // mots mélangés
  correct: string[]; // ordre correct
  hint?: string;
  explanation: string;
}

/** Exercice de correspondance */
export interface MatchExercise {
  type: "match";
  instruction: string;
  pairs: { left: string; right: string }[];
  explanation: string;
}

export type Exercise = FillExercise | OrderExercise | MatchExercise;

export interface ExerciseGroup {
  title: string;
  description: string;
  exercises: Exercise[];
}

/** Question de quiz */
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number; // index de la bonne réponse
  explanation: string; // explication bienveillante
}

export interface LessonData {
  lesson: Lesson;
  exercises: ExerciseGroup[];
  quiz: QuizQuestion[];
}

export interface LevelInfo {
  id: LevelId;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export interface DelphModule {
  id: string;
  slug: string;
  level: LevelId;
  title: string;
  description: string;
  sections: { title: string; content: string }[];
  practice: QuizQuestion[];
}
