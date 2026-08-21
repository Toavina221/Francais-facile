/**
 * FrançaisFacile+ — Test de niveau d'entrée (15 questions progressives A1→B2)
 * Logique d'orientation : le niveau retenu est celui correspondant
 * aux questions réussies en fin de parcours.
 */
import type { LevelId } from "./types";

export interface PlacementQuestion {
  id: number;
  /** Niveau CECRL auquel cette question correspond */
  level: "A1" | "A2" | "B1" | "B2";
  question: string;
  options: string[];
  /** Index de la bonne réponse */
  correct: number;
  explanation: string;
}

export const placementQuestions: PlacementQuestion[] = [
  // ---- A1 (questions 1 à 4) ----
  {
    id: 1,
    level: "A1",
    question: "« ___ m'appelle Sophie. »",
    options: ["Je", "Tu", "Il"],
    correct: 0,
    explanation:
      "Présentation de soi : « Je m'appelle Sophie. » (« je » pour parler de soi-même).",
  },
  {
    id: 2,
    level: "A1",
    question: "« Elle ___ française. » (verbe être)",
    options: ["es", "est", "êtes"],
    correct: 1,
    explanation:
      "Conjugaison d'« être » : il/elle « est ».",
  },
  {
    id: 3,
    level: "A1",
    question: "Quel article utilise-t-on devant « table » (féminin singulier) ?",
    options: ["un", "une", "des"],
    correct: 1,
    explanation:
      "« Table » est féminin : « une table ».",
  },
  {
    id: 4,
    level: "A1",
    question: "« Je ___ habite à Paris. » (phrase négative de « J'habite à Paris »)",
    options: ["Je habite pas à Paris", "Je n'habite pas à Paris", "Je ne pas habite à Paris"],
    correct: 1,
    explanation:
      "Négation : « ne » + verbe + « pas », avec élision « n' » devant la voyelle.",
  },
  // ---- A2 (questions 5 à 8) ----
  {
    id: 5,
    level: "A2",
    question: "« Hier, j'___ au cinéma avec mes amis. » (aller)",
    options: ["vais", "suis allé", "ai allé"],
    correct: 1,
    explanation:
      "Passé composé avec « être » pour les verbes de mouvement : « je suis allé(e) ».",
  },
  {
    id: 6,
    level: "A2",
    question: "« Quand j'étais enfant, je ___ au football tous les samedis. »",
    options: ["jouais", "joue", "jouerai"],
    correct: 0,
    explanation:
      "L'imparfait exprime une habitude du passé : « je jouais ».",
  },
  {
    id: 7,
    level: "A2",
    question: "« Je regarde la télé. Je ___ regarde. »",
    options: ["le", "la", "les"],
    correct: 1,
    explanation:
      "« La télé » est féminin singulier, complément direct → « la ».",
  },
  {
    id: 8,
    level: "A2",
    question: "« L'été est ___ chaud ___ l'hiver. »",
    options: ["plus / que", "aussi / de", "le plus / que"],
    correct: 0,
    explanation:
      "Comparatif de supériorité : « plus... que ».",
  },
  // ---- B1 (questions 9 à 12) ----
  {
    id: 9,
    level: "B1",
    question: "« Je ___ un café, s'il vous plaît. » (demander poliment)",
    options: ["veux", "voudrais", "voulu"],
    correct: 1,
    explanation:
      "Le conditionnel adoucit la demande : « je voudrais ».",
  },
  {
    id: 10,
    level: "B1",
    question: "« Si j'avais le temps, je ___ plus. » (voyager)",
    options: ["voyage", "voyagerais", "voyageais"],
    correct: 1,
    explanation:
      "« Si » + imparfait → conditionnel dans la conséquence : « je voyagerais ».",
  },
  {
    id: 11,
    level: "B1",
    question: "« C'est le livre ___ je t'ai parlé. »",
    options: ["que", "qui", "dont"],
    correct: 2,
    explanation:
      "On parle « de » quelque chose → « dont » : « le livre dont je t'ai parlé ».",
  },
  {
    id: 12,
    level: "B1",
    question: "Il a dit : « Je suis fatigué. » → Indirect (introducteur au passé) :",
    options: [
      "Il a dit qu'il est fatigué",
      "Il a dit qu'il était fatigué",
      "Il a dit qu'il serait fatigué",
    ],
    correct: 1,
    explanation:
      "Introducteur au passé : le présent du discours direct devient imparfait.",
  },
  // ---- B2 (questions 13 à 15) ----
  {
    id: 13,
    level: "B2",
    question: "« Il faut que tu ___ prudent. » (être)",
    options: ["es", "sois", "seras"],
    correct: 1,
    explanation:
      "« Il faut que » exige le subjonctif : « que tu sois ».",
  },
  {
    id: 14,
    level: "B2",
    question: "« Bien qu'il ___ (pleuvoir, passé) hier, nous sommes sortis. »",
    options: ["a plu", "ait plu", "pleuvait"],
    correct: 1,
    explanation:
      "« Bien que » + subjonctif passé pour un fait antérieur : « qu'il ait plu ».",
  },
  {
    id: 15,
    level: "B2",
    question: "Quel connecteur conclut correctement un argument ?",
    options: ["d'abord", "en revanche", "en définitive"],
    correct: 2,
    explanation:
      "« En définitive » conclut un raisonnement ; « d'abord » ouvre, « en revanche » oppose.",
  },
];

export interface PlacementResult {
  level: LevelId;
  score: number;
  total: number;
  /** Nombre de questions réussies au niveau recommandé et aux niveaux supérieurs */
  detail: { A1: number; A2: number; B1: number; B2: number };
  message: { title: string; body: string };
}

/**
 * Détermine le niveau recommandé selon les réponses.
 * Algorithme : on cherche le palier le plus élevé dont au moins la moitié
 * des questions sont réussies ; sinon on descend d'un cran avec bienveillance.
 */
export function computePlacement(answers: Record<number, number>): PlacementResult {
  const detail = { A1: 0, A2: 0, B1: 0, B2: 0 };
  let score = 0;
  placementQuestions.forEach((q) => {
    if (answers[q.id] === q.correct) {
      detail[q.level]++;
      score++;
    }
  });

  const thresholds: Array<{ level: LevelId; count: number; needed: number }> = [
    { level: "B2", count: detail.B2, needed: 2 },
    { level: "B1", count: detail.B1 + detail.B2, needed: 4 },
    { level: "A2", count: detail.A2 + detail.B1 + detail.B2, needed: 5 },
  ];

  let level: LevelId = "A1";
  for (const t of thresholds) {
    if (t.count >= t.needed) {
      level = t.level;
      break;
    }
  }

  const message =
    level === "B2"
      ? {
          title: "Excellent niveau !",
          body: "Vous maîtrisez les structures avancées : subjonctif, discours rapporté, argumentation. Le niveau B2 et la préparation DELF B2 vous attendent — et n'hésitez pas à consolider avec quelques leçons B1.",
        }
      : level === "B1"
        ? {
            title: "Très bon niveau !",
            body: "Vous raisonnez en français : conditionnel, pronoms relatifs, discours indirect. Le niveau B1 est votre terrain idéal pour progresser vers l'autonomie.",
          }
        : level === "A2"
          ? {
              title: "Bonnes bases !",
              body: "Vous racontez au passé et comparez : c'est le moment d'approfondir. Le niveau A2 renforcera vos acquis avant le cap du niveau intermédiaire.",
            }
          : {
              title: "Bienvenue, commençons ensemble !",
              body: "Vous avez quelques notions — c'est déjà très bien. Le niveau A1 vous donnera des bases solides : présentations, verbes, phrases de la vie quotidienne. Chaque grand voyage commence par un premier pas.",
            };

  return { level, score, total: placementQuestions.length, detail, message };
}
