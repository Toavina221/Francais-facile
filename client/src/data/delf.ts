/**
 * FrançaisFacile+ — Module préparation DELF/TCF
 * Contenu exact sur la structure officielle des examens.
 */
import type { DelphModule, LevelInfo, QuizQuestion } from "./types";

export const levelInfos: LevelInfo[] = [
  {
    id: "A1",
    title: "A1 — Introductif",
    subtitle: "Les premiers pas",
    description:
      "Vous comprenez des phrases simples et pouvez vous présenter, parler de votre quotidien. Durée conseillée : 60 à 100 heures d'étude.",
    color: "emerald",
  },
  {
    id: "A2",
    title: "A2 — Élémentaire",
    subtitle: "Survivre au quotidien",
    description:
      "Vous échangez sur des sujets familiers : famille, achats, travail, environnement proche. Durée conseillée : 160 à 200 heures.",
    color: "teal",
  },
  {
    id: "B1",
    title: "B1 — Intermédiaire",
    subtitle: "Gagner en autonomie",
    description:
      "Vous vous débrouillez dans la plupart des situations de la vie courante et exprimez votre opinion. Durée conseillée : 350 à 400 heures.",
    color: "amber",
  },
  {
    id: "B2",
    title: "B2 — Avancé",
    subtitle: "Parler et convaincre",
    description:
      "Vous comprenez des sujets complexes, argumentez et participez à une conversation avec aisance. Durée conseillée : 500 à 600 heures.",
    color: "rose",
  },
  {
    id: "B2+",
    title: "B2+ — Avancé supérieur",
    subtitle: "Affiner l'expression",
    description:
      "Vous perfectionnez le registre soutenu, l'argumentation structurée et la nuance. C'est le palier de transition vers le niveau expert : 600 à 700 heures.",
    color: "violet",
  },
  {
    id: "C1",
    title: "C1 — Autonome avancé",
    subtitle: "Le niveau expert",
    description:
      "Vous comprenez des textes longs et exigeants, vous exprimez des idées complexes avec fluidité et spontanéité, en contexte universitaire ou professionnel. Durée conseillée : 800 à 1000 heures.",
    color: "slate",
  },
];

export const delphModules: DelphModule[] = [
  {
    id: "delf-a1",
    slug: "delf-a1",
    level: "A1",
    title: "DELF A1 : tout savoir avant l'examen",
    description:
      "Le DELF A1 valide vos tout premiers acquis : se présenter, poser des questions simples, comprendre des annonces courantes. Examen d'environ 1 h 10, note minimale 50/100.",
    sections: [
      {
        title: "Structure de l'examen",
        content:
          "Le DELF A1 comporte quatre épreuves. **Compréhension de l'oral** (20 min, 25 pts) : écouter des dialogues courts et cocher les bonnes réponses. **Compréhension des écrits** (30 min, 25 pts) : lire des annonces, des courriels simples. **Production écrite** (30 min, 25 pts) : remplir un formulaire et rédiger un message court (40 à 50 mots). **Production orale** (5 à 7 min, 25 pts) : entretien guidé, échange d'informations, dialogue simulé.",
      },
      {
        title: "Les phrases clés à maîtriser",
        content:
          "À l'oral, entraînez-vous avec ces structures : « Comment vous appelez-vous ? / Je m'appelle... » · « Vous habitez où ? / J'habite à... » · « Quelle est votre profession ? / Je suis... » · « Qu'est-ce que vous faites dans la vie ? » · « Depuis combien de temps... ? ». Savoir poser ET répondre est tout aussi important.",
      },
      {
        title: "Conseils de préparation",
        content:
          "Écoutez chaque jour des dialogues courts (podcasts FLE, TV5Monde). Apprenez les chiffres de 1 à 100 et les heures par cœur : ils tombent presque toujours. Révisez votre présentation personnelle en 10 phrases exactes. Le jour J : répondez avec des phrases complètes, même courtes, et n'ayez pas peur de demander « Répétez, s'il vous plaît » : c'est autorisé et bien vu.",
      },
    ],
    practice: [
      {
        question: "Combien de temps dure l'épreuve de compréhension orale du DELF A1 ?",
        options: ["10 minutes", "20 minutes", "45 minutes"],
        correct: 1,
        explanation:
          "La compréhension de l'oral dure environ 20 minutes et vaut 25 points.",
      },
      {
        question: "Quelle note sur 100 faut-il obtenir pour réussir le DELF A1 ?",
        options: ["40/100", "50/100", "60/100"],
        correct: 1,
        explanation:
          "Le seuil de réussite est 50/100, avec au moins 5/25 dans chaque épreuve (note éliminatoire).",
      },
      {
        question: "Combien de mots environ faut-il écrire à la production écrite du DELF A1 ?",
        options: ["20 à 30 mots", "40 à 50 mots", "150 à 200 mots"],
        correct: 1,
        explanation:
          "Au DELF A1, la production écrite demande environ 40 à 50 mots (formulaire + message court).",
      },
      {
        question: "À l'oral du DELF A1, pouvez-vous demander à l'examinateur de répéter ?",
        options: [
          "Non, c'est interdit",
          "Oui, c'est autorisé et naturel",
          "Seulement par écrit",
        ],
        correct: 1,
        explanation:
          "Demander de répéter (« Répétez, s'il vous plaît ») est autorisé et montre que vous savez gérer la communication.",
      },
    ],
  },
  {
    id: "delf-b1",
    slug: "delf-b1",
    level: "B1",
    title: "DELF B1 : réussir l'examen d'autonomie",
    description:
      "Le DELF B1 est le diplôme d'entrée dans la vie professionnelle et les études en France : argumenter, raconter, donner son avis. Examen d'environ 1 h 45.",
    sections: [
      {
        title: "Structure de l'examen",
        content:
          "**Compréhension de l'oral** (25 min, 25 pts) : deux écoutes, dont un monologue de 2 minutes. **Compréhension des écrits** (35 min, 25 pts) : deux textes informatifs ou argumentatifs. **Production écrite** (45 min, 25 pts) : exprimer votre opinion par écrit sur un sujet donné (environ 160 mots). **Production orale** (15 min de préparation + 15 min, 25 pts) : tirer un sujet au sort, préparer un exposé et dialoguer avec l'examinateur.",
      },
      {
        title: "Les connecteurs qui rapportent des points",
        content:
          "À l'écrit comme à l'oral, structurez votre opinion : « Tout d'abord... / Ensuite... / Enfin... » · « D'une part... d'autre part... » · « En effet... / Par exemple... » · « Cependant... / Néanmoins... » · « Pour conclure, je pense que... ». Ces mots organisent votre pensée et prouvent votre niveau B1.",
      },
      {
        title: "La production orale : méthode en 3 temps",
        content:
          "1. **Présentez le sujet** : « Le sujet traite de... » 2. **Développez** : deux arguments illustrés d'exemples (« Premièrement... Par exemple... Deuxièmement... »). 3. **Concluez** : « Pour terminer, je dirais que... ». Pendant les 15 minutes de préparation, notez vos deux arguments et un exemple pour chacun : c'est votre plan de secours.",
      },
    ],
    practice: [
      {
        question: "Quelle est la durée de préparation avant la production orale du DELF B1 ?",
        options: ["5 minutes", "15 minutes", "30 minutes"],
        correct: 1,
        explanation:
          "Vous disposez de 15 minutes de préparation pour organiser votre exposé avant les 15 minutes d'épreuve.",
      },
      {
        question: "Combien de mots environ demande la production écrite du DELF B1 ?",
        options: ["80 mots", "160 mots", "300 mots"],
        correct: 1,
        explanation:
          "La production écrite du B1 demande environ 160 mots : une lettre, un courriel ou un texte d'opinion.",
      },
      {
        question: "Quel connecteur logique marque une opposition ?",
        options: ["En effet", "Cependant", "De plus"],
        correct: 1,
        explanation:
          "« Cependant » (et « néanmoins », « toutefois ») marque l'opposition. « En effet » justifie, « de plus » ajoute.",
      },
      {
        question: "Pourquoi le DELF B1 est-il souvent demandé pour les études en France ?",
        options: [
          "C'est le niveau minimum pour suivre des cours en français",
          "C'est obligatoire pour voyager",
          "Il n'est demandé nulle part",
        ],
        correct: 0,
        explanation:
          "Le B1 est généralement le niveau minimum requis par les universités françaises et pour certaines démarches (nationalité, emploi).",
      },
    ],
  },
  {
    id: "dalf-c1",
    slug: "dalf-c1",
    level: "C1",
    title: "DALF C1 : l'examen de référence",
    description:
      "Le DALF C1 certifie une maîtrise autonome et avancée du français, exigée par les universités françaises et recherchée par les employeurs. Examen d'environ 4 h, note minimale 50/100.",
    sections: [
      {
        title: "Structure de l'examen",
        content:
          "**Compréhension de l'oral** (40 min, 25 pts) : un monologue long (environ 8 minutes) écouté deux fois, avec questions. **Compréhension des écrits** (50 min, 25 pts) : un texte littéraire ou informatif d'environ 1500 à 2000 mots. **Production écrite** (2 h 30, 25 pts) : la synthèse de documents (environ 250 mots) suivie d'un essai argumenté (environ 250 mots), à partir des mêmes documents. **Production orale** (30 min de préparation + 20 min, 25 pts) : exposé à partir d'un texte court, suivi d'un débat avec le jury.",
      },
      {
        title: "La synthèse : l'épreuve décisive",
        content:
          "La synthèse croise les idées de trois ou quatre documents en un texte organisé et **objectif** (sans votre opinion). Méthode : relevez les idées de chaque document, confrontez convergences et divergences, reformulez tout avec vos mots. Comptez environ 1 h 15 sur les 2 h 30. La réussite au DALF C1 se joue souvent sur cette épreuve.",
      },
      {
        title: "L'essai argumenté",
        content:
          "Après la synthèse, donnez cette fois **votre opinion** : introduction (contexte + problématique + annonce du plan), deux ou trois parties argumentées avec exemples, conclusion avec ouverture. Les registres variés (concession : « certes... toutefois », exemple : « ainsi », conséquence : « dès lors ») font toute la différence.",
      },
      {
        title: "L'oral : exposer puis débattre",
        content:
          "Exposez clairement votre point de vue à partir du texte (2 à 3 minutes), puis défendez-le face aux questions du jury : acceptez la discussion, concédez un point si besoin (« Je reconnais que... ») et réaffirmez votre position (« Toutefois, je maintiens que... »). Le jury évalue votre capacité à **dialoguer**, pas à réciter.",
      },
    ],
    practice: [
      {
        question: "Quelle est la durée totale de la production écrite du DALF C1 ?",
        options: ["45 minutes", "1 heure", "2 h 30"],
        correct: 2,
        explanation:
          "La production écrite du DALF C1 dure 2 h 30 : synthèse de documents (environ 1 h 15) puis essai argumenté (environ 1 h 15).",
      },
      {
        question: "La synthèse de documents du DALF C1 doit-elle contenir votre opinion personnelle ?",
        options: [
          "Oui, c'est essentiel",
          "Non, elle est strictement objective",
          "Seulement dans la conclusion",
        ],
        correct: 1,
        explanation:
          "La synthèse est objective : elle croise les idées des documents sans avis personnel. Votre opinion est réservée à l'essai qui suit.",
      },
      {
        question: "Combien de minutes dure l'épreuve de compréhension de l'oral au DALF C1 ?",
        options: ["20 minutes", "40 minutes", "1 heure"],
        correct: 1,
        explanation:
          "La compréhension de l'oral dure environ 40 minutes : un monologue long d'environ 8 minutes, écouté deux fois.",
      },
      {
        question: "Que fait l'exposant à l'oral du DALF C1 après avoir présenté son texte ?",
        options: [
          "Il conclut et part",
          "Il débat avec le jury en défendant son point de vue",
          "Il récite le texte par cœur",
        ],
        correct: 1,
        explanation:
          "L'oral du DALF C1 se termine par un débat : le jury pose des questions et l'exposant défend et nuance son point de vue.",
      },
      {
        question: "Quelle note sur 100 faut-il obtenir pour réussir le DALF C1 ?",
        options: ["50/100", "60/100", "70/100"],
        correct: 0,
        explanation:
          "Comme tous les diplômes DELF/DALF, le seuil de réussite est 50/100, avec au moins 5/25 par épreuve.",
      },
    ],
  },
  {
    id: "tcf-canada",
    slug: "tcf-canada",
    level: "B2",
    title: "TCF Canada : Immigration et Citoyenneté",
    description:
      "Le TCF Canada est conçu spécifiquement pour les dossiers d'immigration vers le Canada ou l'obtention de la citoyenneté. Il évalue les quatre compétences avec un barème de points précis.",
    sections: [
      {
        title: "Structure du TCF Canada",
        content:
          "Le TCF Canada est composé de 4 épreuves obligatoires : **Compréhension orale** (35 min, 39 questions), **Compréhension écrite** (60 min, 39 questions), **Production écrite** (60 min, 3 tâches) et **Production orale** (12 min, 3 tâches). Contrairement au DELF, c'est un test de positionnement : votre score détermine votre niveau (de A1 à C2).",
      },
      {
        title: "Les Niveaux de Compétence Linguistique Canadiens (NCLC)",
        content:
          "Pour l'immigration (Entrée Express), le score est converti en NCLC. Le niveau **NCLC 7** (équivalent B2) est souvent le seuil critique pour obtenir un maximum de points. Maîtriser le TCF Canada demande une grande rapidité, surtout pour les épreuves de compréhension où le temps est limité.",
      },
      {
        title: "Conseils spécifiques Canada",
        content:
          "Pour la production écrite, la tâche 1 est souvent un message amical, la tâche 2 un récit d'expérience et la tâche 3 une comparaison de points de vue. **Soyez direct et efficace.** À l'oral, la tâche 2 est une simulation d'interaction (ex: poser des questions sur une annonce) : montrez votre capacité à obtenir des informations de manière polie et structurée.",
      },
    ],
    practice: [
      {
        question: "Combien de tâches comporte l'épreuve de production orale du TCF Canada ?",
        options: ["1 tâche", "2 tâches", "3 tâches"],
        correct: 2,
        explanation:
          "L'épreuve orale comporte 3 tâches : entretien sans préparation, exercice d'interaction et expression d'un point de vue.",
      },
      {
        question: "Quelle est la durée de l'épreuve de compréhension écrite du TCF Canada ?",
        options: ["30 minutes", "45 minutes", "60 minutes"],
        correct: 2,
        explanation:
          "L'épreuve de compréhension écrite dure 60 minutes pour 39 questions.",
      },
      {
        question: "À quel niveau CECRL correspond généralement le seuil NCLC 7 pour l'immigration ?",
        options: ["B1", "B2", "C1"],
        correct: 1,
        explanation:
          "Le niveau NCLC 7 correspond au niveau B2. C'est le niveau souvent requis pour les programmes d'immigration économique.",
      },
      {
        question: "Le TCF Canada est-il un diplôme valable à vie comme le DELF ?",
        options: ["Oui", "Non, il est valable 2 ans", "Seulement au Québec"],
        correct: 1,
        explanation:
          "Le TCF est un test, pas un diplôme. Son attestation est valable 2 ans.",
      },
    ],
  },
];

export const funFacts: string[] = [
  "Le français compte environ 321 millions de locuteurs dans le monde : la 5ᵉ langue la plus parlée.",
  "D'ici 2050, on estime que plus de 700 millions de personnes parleront français, porté par l'Afrique.",
  "Le français est langue officielle dans 29 pays sur 5 continents.",
  "Le mot le plus long du français courant : « intergouvernementalisations » (25 lettres).",
  "Il existe 17 temps et modes en français... mais 4 suffisent pour 90 % des conversations.",
];
