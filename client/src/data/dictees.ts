/**
 * FrançaisFacile+ — Dictées audio interactives
 * Chaque dictée : phrase(s) à dicter, correction mot par mot, points forts.
 * La voix française lit la phrase ; l'apprenant la retape.
 */
import type { LevelId } from "./types";

export interface Dictee {
  id: string;
  slug: string;
  level: LevelId;
  title: string;
  focus: string;
  /** Les phrases de la dictée, dans l'ordre. */
  sentences: string[];
  /** Points de vigilance expliqués pour la correction. */
  tips: string[];
}

export const dictees: Dictee[] = [
  // ---------- A1 ----------
  {
    id: "d-a1-1",
    slug: "dict1-presentation",
    level: "A1",
    title: "Dictée 1 — Se présenter",
    focus: "Verbes être / avoir, apostrophes, nationalités",
    sentences: [
      "Je m'appelle Sophie et j'ai vingt-quatre ans.",
      "Je suis française et j'habite à Lyon.",
    ],
    tips: [
      "J'ai vingt-quatre ans : l'âge s'exprime avec « avoir ».",
      "Je suis française : « je suis » (être) + nationalité.",
      "Apostrophe : j'ai, j'habite, m'appelle (j' devant une voyelle).",
      "Vingt-quatre : trait d'union entre les dizaines et les unités.",
    ],
  },
  {
    id: "d-a1-2",
    slug: "dict2-le-quotidien",
    level: "A1",
    title: "Dictée 2 — Ma journée",
    focus: "Présent des verbes du quotidien, « au », « à la »",
    sentences: [
      "Je me lève à huit heures et je prends un café.",
      "Ensuite, je vais au bureau et je travaille jusqu'à midi.",
    ],
    tips: [
      "« Je prends » : verbe prendre à la 1ʳᵉ personne du singulier.",
      "Je vais au bureau : « à + le » devient « au ».",
      "Jusqu'à midi : accent grave sur le deuxième « à » (préposition).",
    ],
  },
  {
    id: "d-a1-3",
    slug: "dict3-la-famille",
    level: "A1",
    title: "Dictée 3 — Ma famille",
    focus: "Possessifs (mon, ma, mes), pluriels, ê/é",
    sentences: [
      "Ma mère s'appelle Fatima et mon père s'appelle Karim.",
      "Mes grands-parents habitent en Algérie, mais ils aiment beaucoup la France.",
    ],
    tips: [
      "Ma mère, mon père : possessif selon le nom qui suit (féminin/masculin).",
      "Mes grands-parents : pluriel avec « mes ».",
      "Ils aiment : verbe aimer au pluriel.",
    ],
  },
  // ---------- A2 ----------
  {
    id: "d-a2-1",
    slug: "dict4-le-weekend",
    level: "A2",
    title: "Dictée 4 — Le week-end dernier",
    focus: "Passé composé avec être et avoir, accords du participe passé",
    sentences: [
      "Samedi dernier, nous sommes allés au marché avec mes amis.",
      "J'ai acheté des fruits et nous avons mangé au restaurant.",
    ],
    tips: [
      "Nous sommes allés : verbe de mouvement avec « être », « allés » s'accorde au pluriel.",
      "J'ai acheté, nous avons mangé : passé composé avec « avoir », pas d'accord du participe passé.",
    ],
  },
  {
    id: "d-a2-2",
    slug: "dict5-lenfance",
    level: "A2",
    title: "Dictée 5 — Quand j'étais petit",
    focus: "Imparfait, habitudes du passé",
    sentences: [
      "Quand j'étais enfant, je jouais au football tous les samedis.",
      "Ma sœur regardait la télévision pendant que je faisais mes devoirs.",
    ],
    tips: [
      "Je jouais, je faisais : l'imparfait exprime une habitude du passé.",
      "Tous les samedis : marque d'habitude, typique de l'imparfait.",
      "Pendant que : deux actions simultanées, toutes deux à l'imparfait.",
    ],
  },
  {
    id: "d-a2-3",
    slug: "dict6-le-voyage",
    level: "A2",
    title: "Dictée 6 — Un voyage en train",
    focus: "Futur simple, « dont », pronoms relatifs",
    sentences: [
      "L'année prochaine, je voyagerai en Italie avec ma cousine.",
      "C'est le pays dont je rêve depuis toujours.",
    ],
    tips: [
      "Je voyagerai : futur simple (terminaison -ai), sans « s » final.",
      "Dont je rêve : on rêve « de » quelque chose, donc « dont ».",
    ],
  },
  // ---------- B1 ----------
  {
    id: "d-b1-1",
    slug: "dict7-la-politesse",
    level: "B1",
    title: "Dictée 7 — Une demande polie",
    focus: "Conditionnel de politesse, si + imparfait",
    sentences: [
      "Si j'avais le temps, je ferais plus de sport.",
      "Je vous serais reconnaissante si vous pouviez me répondre bientôt.",
    ],
    tips: [
      "Je ferais, je serais : conditionnel (radical du futur + terminaisons de l'imparfait).",
      "Si + imparfait (avais) → conditionnel (ferais).",
      "Reconnaissante : accord au féminin avec -e final.",
    ],
  },
  {
    id: "d-b1-2",
    slug: "dict8-le-discours",
    level: "B1",
    title: "Dictée 8 — Il a raconté son histoire",
    focus: "Discours rapporté au passé, imparfait et plus-que-parfait",
    sentences: [
      "Il a dit qu'il était fatigué et qu'il voulait dormir.",
      "Elle m'a expliqué qu'elle avait déjà visité Paris deux fois.",
    ],
    tips: [
      "Introducteur au passé : le présent du discours direct devient imparfait (il était).",
      "Avait déjà visité : plus-que-parfait pour une action antérieure au passé.",
      "Qu'elle avait : « que » se contracte en « qu' » devant une voyelle.",
    ],
  },
  {
    id: "d-b1-3",
    slug: "dict9-lopinion",
    level: "B1",
    title: "Dictée 9 — Donner son opinion",
    focus: "Connecteurs de base, pronoms « ce qui / ce que »",
    sentences: [
      "À mon avis, le télétravail présente des avantages certains.",
      "Cependant, ce qui compte surtout, c'est l'équilibre entre la vie professionnelle et la vie privée.",
    ],
    tips: [
      "À mon avis : formule d'opinion suivie d'une virgule.",
      "Ce qui compte : « ce qui » est sujet du verbe suivant.",
      "Professionnelle : accord féminin avec « vie ».",
    ],
  },
  // ---------- B2 ----------
  {
    id: "d-b2-1",
    slug: "dict10-le-subjonctif",
    level: "B2",
    title: "Dictée 10 — Le subjonctif à l'écrit",
    focus: "Subjonctif après « bien que », « quoique », « jusqu'à ce que »",
    sentences: [
      "Bien qu'il ait beaucoup plu, le match a été maintenu.",
      "Il faut que nous soyons partis avant que la foule n'arrive.",
    ],
    tips: [
      "Bien qu'il ait plu : subjonctif passé après la concession.",
      "Nous soyons partis : subjonctif passé avec « être ».",
      "Avant que + ne : le « ne » explétif est optionnel mais soutenu.",
    ],
  },
  {
    id: "d-b2-2",
    slug: "dict11-argumentation",
    level: "B2",
    title: "Dictée 11 — Un paragraphe argumenté",
    focus: "Connecteurs logiques avancés, concordance des temps",
    sentences: [
      "Certes, cette solution présente des risques ; néanmoins, elle demeure la plus réaliste.",
      "En définitive, ce que l'on choisit dépend de ce que l'on est prêt à accepter.",
    ],
    tips: [
      "Certes... néanmoins : structure concession → opposition.",
      "Demeure : verbe soutenu pour « rester ».",
      "Ce que / ce dont : pronoms neutres, sujets et compléments du propos.",
    ],
  },
  {
    id: "d-b2-3",
    slug: "dict12-style-soutenu",
    level: "B2",
    title: "Dictée 12 — Le registre soutenu",
    focus: "Vocabulaire soutenu, inversion, style formel",
    sentences: [
      "Nous vous serions gré de bien vouloir nous adresser votre candidature.",
      "Quoiqu'il en ait été informé la veille, il n'en a tenu aucun compte.",
    ],
    tips: [
      "Nous vous serions gré : formule épistolaire soutenue, conditionnel.",
      "Quoiqu'il en ait été informé : subjonctif passé après « quoique ».",
      "En tenir compte : locution verbale figée au style soutenu.",
    ],
  },
  // ---------- B2+ ----------
  {
    id: "d-b2p-1",
    slug: "dict13-registre-soutenu",
    level: "B2+",
    title: "Dictée 13 — Le registre soutenu",
    focus: "Inversion interrogative, vocabulaire élevé, « t » euphonique",
    sentences: [
      "Qu'en pensent-ils exactement, ceux qui ont décidé sans nous consulter ?",
      "Il convient de recourir à des moyens plus adéquats dès lors que l'urgence s'avère.",
    ],
    tips: [
      "Qu'en pensent-ils : inversion interrogative soutenue, « t » ou trait d'union entre verbe et sujet.",
      "Il convient de : tournure soutenue pour « il faut ».",
      "Dès lors que : locution de conséquence logique.",
      "S'avère : verbe soutenu pour « se montrer vrai ».",
    ],
  },
  {
    id: "d-b2p-2",
    slug: "dict14-argumentation",
    level: "B2+",
    title: "Dictée 14 — Une thèse nuancée",
    focus: "Concession, réfutation, verbes d'opinion",
    sentences: [
      "Certes, la technologie rapproche les hommes ; toutefois, elle peut aussi les isoler.",
      "J'estime qu'il faut demeurer vigilant sans sombrer dans le pessimisme.",
    ],
    tips: [
      "Certes... toutefois : la concession rétablit ensuite la thèse.",
      "J'estime que : verbe d'opinion soutenu à l'écrit argumenté.",
      "Demeurer : soutenu pour « rester » ; sombrer dans : image au registre littéraire.",
    ],
  },
  // ---------- C1 ----------
  {
    id: "d-c1-1",
    slug: "dict15-synthese-c1",
    level: "C1",
    title: "Dictée 15 — Style académique",
    focus: "Nominalisation, style universitaire, connecteurs complexes",
    sentences: [
      "La mise en œuvre de ces mesures exige une concertation préalable entre les parties prenantes.",
      "Force est de constater que l'application de la loi demeure inégale selon les territoires.",
    ],
    tips: [
      "Mise en œuvre : nominalisation typique du style administratif et universitaire.",
      "Parties prenantes : expression figée du monde professionnel.",
      "Force est de constater : tournure soutenue pour introduire un constat.",
      "Demeure inégale : « demeurer » + adjectif, registre élevé.",
    ],
  },
  {
    id: "d-c1-2",
    slug: "dict16-literaire-c1",
    level: "C1",
    title: "Dictée 16 — Une page littéraire",
    focus: "Subjonctif imparfait, inversion littéraire, rythme de la phrase",
    sentences: [
      "Eût-il su, il ne serait jamais parti ; fût-elle restée, tout aurait changé.",
      "Non seulement il s'abstint de répondre, mais encore feignit-il de ne pas comprendre.",
    ],
    tips: [
      "Eût-il su : plus-que-parfait du subjonctif inversé (= s'il avait su), très littéraire.",
      "Fût-elle restée : même mécanisme avec le verbe être.",
      "Non seulement... mais encore : structure d'addition au registre soutenu.",
      "Feignit : passé simple de feindre, propre au récit littéraire.",
    ],
  },
];

/** Normalise une chaîne pour la comparaison mot par mot (minuscules, ponctuation retirée). */
export function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // retire les accents pour tolérance
}

/**
 * Compare le texte tapé avec le texte attendu, mot par mot.
 * Retourne un tableau parallèle aux mots tapés : « correct », « wrong » ou « extra ».
 */
export function diffWords(expected: string, typed: string): Array<"correct" | "wrong" | "extra"> {
  const exp = expected.split(/\s+/).filter(Boolean);
  const typ = typed.split(/\s+/).filter(Boolean);
  const result: Array<"correct" | "wrong" | "extra"> = [];
  for (let i = 0; i < typ.length; i++) {
    if (i >= exp.length) {
      result.push("extra");
    } else if (normalizeWord(typ[i]) === normalizeWord(exp[i])) {
      result.push("correct");
    } else {
      result.push("wrong");
    }
  }
  return result;
}
