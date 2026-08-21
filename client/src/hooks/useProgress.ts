/**
 * FrançaisFacile+ — Suivi de progression (localStorage)
 * Sauvegarde les quiz réussis et les scores pour encourager l'apprenant.
 */
import { useCallback, useEffect, useState } from "react";

interface ProgressState {
  completed: Record<string, { score: number; total: number; date: string }>;
  /** Historique chronologique de chaque tentative de quiz (pour les graphiques). */
  history: { lessonId: string; score: number; total: number; date: string }[];
  badges: string[];
  email?: string;
}

const KEY = "francaisfacile-plus-progress";

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ProgressState;
      // Migration : les anciennes données n'ont pas de champ `history`
      return {
        completed: parsed.completed || {},
        history: Array.isArray(parsed.history) ? parsed.history : [],
        badges: Array.isArray(parsed.badges) ? parsed.badges : [],
        email: parsed.email,
      };
    }
  } catch {
    /* ignore */
  }
  return { completed: {}, history: [], badges: [] };
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(() => load());

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  const recordScore = useCallback(
    (lessonId: string, score: number, total: number) => {
      const now = new Date().toISOString();
      setState((prev) => {
        const existing = prev.completed[lessonId];
        
        // On ne met à jour que si c'est un meilleur score
        const newCompleted = (existing && existing.score >= score) 
          ? prev.completed 
          : {
              ...prev.completed,
              [lessonId]: { score, total, date: now },
            };

        const newHistory = [
          ...prev.history,
          { lessonId, score, total, date: now },
        ].slice(-100);

        // Calcul des badges
        const count = Object.keys(newCompleted).length;
        const newBadges = [...(prev.badges || [])];
        
        if (count >= 5 && !newBadges.includes("plume-bronze")) newBadges.push("plume-bronze");
        if (count >= 12 && !newBadges.includes("plume-argent")) newBadges.push("plume-argent");
        if (count >= 23 && !newBadges.includes("plume-or")) newBadges.push("plume-or");

        return {
          ...prev,
          completed: newCompleted,
          history: newHistory,
          badges: newBadges
        };
      });
    },
    [],
  );

  const bestScore = useCallback((lessonId: string) => {
    return state.completed[lessonId] ?? null;
  }, [state]);

  const resetLesson = useCallback((lessonId: string) => {
    setState((prev) => {
      const { [lessonId]: _removed, ...rest } = prev.completed;
      return { ...prev, completed: rest };
    });
  }, []);

  const saveEmail = useCallback((email: string) => {
    setState((prev) => ({ ...prev, email }));
  }, []);

  return {
    recordScore,
    bestScore,
    resetLesson,
    saveEmail,
    completed: state.completed,
    history: state.history,
    badges: state.badges,
    email: state.email,
  };
}
