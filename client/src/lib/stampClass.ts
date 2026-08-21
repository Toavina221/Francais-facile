/**
 * FrançaisFacile+ — Normalisation des tampons de niveau
 * Les classes CSS sont .stamp-a1 … .stamp-b2p (B2+) .stamp-c1.
 */
import type { LevelId } from "@/data/types";

export function stampClass(level: LevelId): string {
  if (level === "B2+") return "stamp-b2p";
  if (level === "C1") return "stamp-c1";
  return `stamp-${level.toLowerCase()}`;
}
