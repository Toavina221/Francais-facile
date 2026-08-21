/**
 * FrançaisFacile+ — Fiches de révision récapitulatives
 * Une fiche par niveau résume toutes les règles essentielles vues dans les leçons.
 * Ces fiches sont conçues pour être imprimées en PDF (bouton « Imprimer en PDF »).
 */
import type { LevelId } from "./types";

export interface RevisionSection {
  title: string;
  items: Array<{ rule: string; example: string }>;
}

export interface RevisionSheet {
  level: LevelId;
  title: string;
  subtitle: string;
  sections: RevisionSection[];
}

export const revisionSheets: RevisionSheet[] = [
  {
    level: "A1",
    title: "Fiche de révision — Niveau A1",
    subtitle: "Les premiers pas : présentations, verbes, phrases de la vie quotidienne",
    sections: [
      {
        title: "Les verbes essentiels au présent",
        items: [
          { rule: "ÊTRE : je suis, tu es, il est, nous sommes, vous êtes, ils sont", example: "Je suis étudiant." },
          { rule: "AVOIR : j'ai, tu as, il a, nous avons, vous avez, ils ont", example: "J'ai 25 ans." },
          { rule: "ALLER : je vais, tu vas, il va, nous allons, vous allez, ils vont", example: "Je vais à l'école." },
          { rule: "Les verbes en -ER : on retire -ER, on ajoute -e, -es, -e, -ons, -ez, -ent", example: "Je parle, tu parles, ils parlent." },
        ],
      },
      {
        title: "Les articles",
        items: [
          { rule: "Définis : le (masculin), la (féminin), les (pluriel), l' (devant voyelle)", example: "le livre, la table, l'école." },
          { rule: "Indéfinis : un (masculin), une (féminin), des (pluriel)", example: "un stylo, une chaise, des amis." },
        ],
      },
      {
        title: "La négation",
        items: [
          { rule: "Ne + verbe + pas · élision « n' » devant une voyelle", example: "Je ne fume pas. / Je n'habite pas ici." },
        ],
      },
      {
        title: "Se présenter",
        items: [
          { rule: "Je m'appelle... · J'ai ... ans (avec AVOIR !) · J'habite à... · Je suis [nationalité]", example: "Je m'appelle Amina. J'ai 24 ans. J'habite à Alger." },
          { rule: "Nationalité : « je suis marocain » (homme) / « je suis marocaine » (femme)", example: "Il est espagnol, elle est espagnole." },
        ],
      },
      {
        title: "Les pronoms sujets",
        items: [
          { rule: "Je, tu, il/elle, nous, vous, ils/elles", example: "Nous parlons français." },
        ],
      },
      {
        title: "Le futur proche",
        items: [
          { rule: "ALLER au présent + infinitif", example: "Je vais manger. / Nous allons partir." },
        ],
      },
      {
        title: "La famille et les nombres",
        items: [
          { rule: "Possessifs : mon (m.), ma (f.), mes (pl.) devant le nom possédé", example: "Mon père, ma mère, mes sœurs." },
          { rule: "Nombres de 70 à 99 : soixante-dix (70), quatre-vingts (80), quatre-vingt-dix-neuf (99)", example: "87 = quatre-vingt-sept." },
        ],
      },
    ],
  },
  {
    level: "A2",
    title: "Fiche de révision — Niveau A2",
    subtitle: "Le récit au passé : passé composé, imparfait, comparaisons",
    sections: [
      {
        title: "Le passé composé",
        items: [
          { rule: "Auxiliaire AVOIR ou ÊTRE au présent + participe passé", example: "J'ai mangé. / Je suis parti(e)." },
          { rule: "Verbes de mouvement avec ÊTRE (aller, venir, partir, arriver...) : accord du participe passé avec le sujet", example: "Elle est venue. / Nous sommes arrivés." },
        ],
      },
      {
        title: "L'imparfait",
        items: [
          { rule: "Radical de « nous » au présent + -ais, -ais, -ait, -ions, -iez, -aient", example: "Je jouais, nous finissions." },
          { rule: "Usage : habitudes et descriptions du passé", example: "Quand j'étais petit, je jouais au ballon." },
          { rule: "ÊTRE à l'imparfait : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient", example: "Il était tard." },
        ],
      },
      {
        title: "Le futur simple",
        items: [
          { rule: "Infinitif (ou radical irrégulier) + -ai, -as, -a, -ons, -ez, -ont", example: "Je voyagerai. / Il viendra." },
        ],
      },
      {
        title: "Les pronoms COD et COI",
        items: [
          { rule: "COD (remplace un complément direct) : le, la, les — placés AVANT le verbe", example: "Je regarde la télé → Je la regarde." },
          { rule: "COI (remplace « à + personne ») : lui, leur", example: "Je parle à Marie → Je lui parle." },
        ],
      },
      {
        title: "Le comparatif et le superlatif",
        items: [
          { rule: "Comparatif : plus/moins/aussi + adjectif + que", example: "L'été est plus chaud que l'hiver." },
          { rule: "Superlatif : le/la/les + plus/moins + adjectif", example: "C'est le plus beau jardin de la ville." },
        ],
      },
    ],
  },
  {
    level: "B1",
    title: "Fiche de révision — Niveau B1",
    subtitle: "L'autonomie : conditionnel, pronoms relatifs, discours indirect",
    sections: [
      {
        title: "Le conditionnel présent",
        items: [
          { rule: "Radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient)", example: "Je voudrais, il pourrait, nous irions." },
          { rule: "Usages : politesse, souhait, conseil, hypothèse (avec « si » + imparfait)", example: "Si j'avais le temps, je voyagerais." },
        ],
      },
      {
        title: "Les pronoms relatifs simples",
        items: [
          { rule: "QUI remplace le sujet · QUE remplace le complément direct · OÙ remplace le lieu", example: "L'homme qui parle. / Le livre que je lis. / La ville où j'habite." },
          { rule: "DONT remplace « de + complément » (parler de, avoir besoin de...)", example: "Le film dont je t'ai parlé." },
        ],
      },
      {
        title: "Le discours rapporté",
        items: [
          { rule: "Introducteur au présent → aucun changement de temps", example: "Il dit : « Je suis fatigué. » → Il dit qu'il est fatigué." },
          { rule: "Introducteur au passé → présent devient imparfait, passé composé devient plus-que-parfait", example: "Il a dit qu'il était fatigué. / Il a dit qu'il avait fini." },
        ],
      },
      {
        title: "Donner son opinion",
        items: [
          { rule: "À mon avis... · Je pense que + indicatif · Je trouve que... · Il me semble que...", example: "À mon avis, c'est une bonne idée." },
          { rule: "Exprimer l'accord et le désaccord : je suis d'accord · je ne partage pas cet avis", example: "Je ne partage pas cet avis." },
        ],
      },
      {
        title: "Vocabulaire du travail et des études",
        items: [
          { rule: "Postuler, candidater, un CV, un entretien d'embauche, obtenir un diplôme", example: "Elle a obtenu son diplôme en juin." },
          { rule: "Verbes utiles : réussir, échouer, postuler, embaucher, démissionner", example: "Il a réussi son examen." },
        ],
      },
    ],
  },
  {
    level: "B2",
    title: "Fiche de révision — Niveau B2",
    subtitle: "La maîtrise : subjonctif, argumentation, registres de langue",
    sections: [
      {
        title: "Le subjonctif présent",
        items: [
          { rule: "Radical de « ils » au présent (sans -ent) + -e, -es, -e, -ions, -iez, -ent", example: "Que je parle, que nous parlions." },
          { rule: "Irréguliers : que je sois (être) · que j'aie (avoir) · que je fasse · que j'aille · que je puisse · que je sache", example: "Il faut que je puisse venir." },
          { rule: "Déclencheurs : il faut que, je veux que, bien que, pour que, je suis content que...", example: "Bien qu'il soit malade, il travaille." },
        ],
      },
      {
        title: "Le subjonctif passé",
        items: [
          { rule: "Auxiliaire au subjonctif présent + participe passé", example: "Il faut que j'aie fini. / Qu'il soit venu." },
          { rule: "Présent = action simultanée ou à venir · Passé = action antérieure", example: "Je ne crois pas qu'il comprenne (maintenant) / qu'il ait compris (déjà fait)." },
        ],
      },
      {
        title: "Les connecteurs logiques",
        items: [
          { rule: "Ordre : d'abord · ensuite · en outre · enfin · en conclusion", example: "D'abord... Ensuite... Enfin..." },
          { rule: "Opposition/concession : pourtant · en revanche · néanmoins · certes... mais · bien que + subj. · malgré + nom", example: "Certes c'est cher, mais c'est utile." },
          { rule: "Cause : car · puisque · étant donné que · Conséquence : donc · par conséquent · c'est pourquoi", example: "Il pleut ; par conséquent, nous restons." },
        ],
      },
      {
        title: "Les registres de langue",
        items: [
          { rule: "Familier (entre amis) → courant (vie quotidienne) → soutenu (écrit formel, examens)", example: "boulot → travail · bagnole → voiture · c'est pas grave → cela n'a guère d'importance." },
          { rule: "Question soutenue : inversion du sujet", example: "Viendriez-vous nous rejoindre ?" },
          { rule: "Verbes soutenus : solliciter (demander), résider (habiter), demeurer (rester)", example: "Je sollicite votre aide." },
        ],
      },
      {
        title: "Structurer une argumentation",
        items: [
          { rule: "Thèse → arguments (d'abord, en outre) → nuance (certes, cependant) → conclusion (en définitive)", example: "En définitive, le bilan reste positif." },
        ],
      },
    ],
  },
];
