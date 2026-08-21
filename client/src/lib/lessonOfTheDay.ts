/**
 * FrançaisFacile+ — Leçon du jour
 * Choisit de manière déterministe une leçon selon la date,
 * afin que tous les visiteurs du même jour voient la même leçon
 * (et que la page reste statique, sans serveur).
 */
import { allLessons, type LevelId } from "@/data";
import { levelInfos } from "@/data";

export interface LessonOfDay {
  level: LevelId;
  slug: string;
  title: string;
  objective: string;
  color: string;
}

/** Liste ordonnée des niveaux pour la rotation. */
const ORDER: LevelId[] = levelInfos.map((i) => i.id);

export function getLessonOfTheDay(date: Date = new Date()): LessonOfDay {
  // Clef du jour : YYYY-MM-DD
  const dayKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // Comptage cumulé de toutes les leçons pour l'index global
  const all: { level: LevelId; slug: string; title: string; objective: string }[] = [];
  for (const lvl of ORDER) {
    for (const entry of allLessons[lvl]) {
      all.push({
        level: lvl,
        slug: entry.lesson.slug,
        title: entry.lesson.title,
        objective: entry.lesson.objective,
      });
    }
  }
  // Hash simple du jour
  let hash = 0;
  for (let i = 0; i < dayKey.length; i++) {
    hash = (hash * 31 + dayKey.charCodeAt(i)) >>> 0;
  }
  const idx = hash % Math.max(all.length, 1);
  const chosen = all[idx];
  const info = levelInfos.find((i) => i.id === chosen.level);
  return {
    level: chosen.level,
    slug: chosen.slug,
    title: chosen.title,
    objective: chosen.objective,
    color: info?.color ?? "emerald",
  };
}
