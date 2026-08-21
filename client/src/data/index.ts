/**
 * FrançaisFacile+ — Index central des données pédagogiques
 */
import type { LessonData, LevelId } from "./types";
import { lessonsA1 } from "./lessonsA1";
import { lessonsA2 } from "./lessonsA2";
import { lessonsB1 } from "./lessonsB1";
import { lessonsB2 } from "./lessonsB2";
import { lessonsC1 } from "./lessonsC1";
import { delphModules } from "./delf";

export { levelInfos, delphModules, funFacts } from "./delf";
export type { LessonData, LevelId } from "./types";

export const allLessons: Record<LevelId, LessonData[]> = {
  A1: lessonsA1,
  A2: lessonsA2,
  B1: lessonsB1,
  B2: lessonsB2,
  "B2+": lessonsC1.filter((l) => l.lesson.level === "B2+"),
  C1: lessonsC1.filter((l) => l.lesson.level === "C1"),
};

export function getLesson(
  level: LevelId,
  slug: string,
): LessonData | undefined {
  return allLessons[level].find((l) => l.lesson.slug === slug);
}

export function getDelphModule(slug: string) {
  return delphModules.find((m) => m.slug === slug);
}

/** Messages de félicitation bienveillants selon le score */
export function quizMessage(score: number, total: number): {
  title: string;
  body: string;
} {
  const ratio = score / total;
  if (ratio === 1)
    return {
      title: "Parfait ! Vous êtes formidable !",
      body: "Score parfait : chaque point est une preuve de votre progression. Vous maîtrisez cette leçon.",
    };
  if (ratio >= 0.8)
    return {
      title: "Excellent travail !",
      body: "Vous avez très bien compris la leçon. Revoiez les questions manquées : elles vous apprendront encore plus.",
    };
  if (ratio >= 0.6)
    return {
      title: "Bien joué, continuez !",
      body: "Vous êtes sur la bonne voie. Relisez la leçon sur les points difficiles, puis réessayez le quiz.",
    };
  return {
    title: "Chaque erreur est une leçon qui commence",
    body: "Ne vous découragez jamais : relisez tranquillement la leçon et les corrections, puis réessayez. La persévérance fait tout.",
  };
}
