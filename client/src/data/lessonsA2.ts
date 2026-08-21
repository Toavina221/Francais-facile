/**
 * FrançaisFacile+ — Contenu pédagogique Niveau A2 (Élémentaire)
 * Précision grammaticale validée, ton professoral et bienveillant.
 */
import type { LessonData } from "./types";

export const lessonsA2: LessonData[] = [
  {
    lesson: {
      id: "a2-1",
      slug: "passe-compose-etre-avoir",
      level: "A2",
      title: "Le passé composé avec « avoir » et « être »",
      objective:
        "Former le passé composé et choisir le bon auxiliaire.",
      duration: "15 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **passé composé** est le temps du récit et de la conversation au passé : il exprime une action **terminée** dans le passé. C'est LE temps du passé le plus utilisé à l'oral — bien plus que l'imparfait ou le passé simple.",
        },
        {
          type: "rule",
          title: "La formule du passé composé",
          content:
            "**Passé composé = auxiliaire au présent (avoir ou être) + participe passé du verbe.** Exemple : j'ai mangé, elle est partie.",
        },
        {
          type: "text",
          content:
            "La grande majorité des verbes se conjuguent avec **avoir** (manger → j'ai mangé ; parler → tu as parlé). Seuls quelques verbes utilisent **être** : les verbes de **mouvement et de changement d'état** (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, tomber, rester, devenir...) et **tous les verbes pronominaux** (se lever, s'habiller).",
        },
        {
          type: "rule",
          title: "L'accord avec « être »",
          content:
            "Avec l'auxiliaire **être**, le participe passé **s'accorde avec le sujet** : « elle est allé**e** », « ils sont parti**s** », « elles sont arrivé**es** ». Avec **avoir**, pas d'accord avec le sujet : « elle a mangé » (jamais « mangée » dans ce cas).",
        },
        {
          type: "example",
          title: "Formes irrégulières utiles",
          content:
            "faire → fait · prendre → pris · voir → vu · mettre → mis · lire → lu · écrire → écrit · boire → bu · dire → dit. Ces participes passés sont irréguliers mais très fréquents : apprenez-les par cœur, ils reviennent partout.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Pour ne plus hésiter entre « avoir » et « être », posez-vous la question : le sujet **change-t-il de lieu ou d'état** ? Oui → « être ». Sinon → « avoir ». Et n'oubliez jamais l'accord avec « être » !",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer au passé composé",
        description: "Mettez le verbe au passé composé.",
        exercises: [
          {
            type: "fill",
            sentence: "Hier, j'{{1}} une pizza délicieuse. (manger)",
            answers: ["ai mangé"],
            explanation:
              "« Manger » se conjugue avec « avoir » : « j'ai mangé ».",
          },
          {
            type: "fill",
            sentence: "Elle {{1}} en France l'année dernière. (aller)",
            answers: ["est allée"],
            hint: "Verbe de mouvement : auxiliaire être + accord.",
            explanation:
              "« Aller » se conjugue avec « être » et le participe s'accorde avec « elle » : « est allée ».",
          },
          {
            type: "fill",
            sentence: "Nous {{1}} un film très intéressant. (voir)",
            answers: ["avons vu"],
            explanation:
              "« Voir » a un participe passé irrégulier : « vu ». Avec « avoir » : « nous avons vu ».",
          },
          {
            type: "fill",
            sentence: "Ils {{1}} du train à 9 heures. (descendre)",
            answers: ["sont descendus"],
            hint: "Verbe de mouvement avec être : attention à l'accord.",
            explanation:
              "« Descendre » (mouvement) se conjugue avec « être » et s'accorde avec « ils » : « sont descendus ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Avoir ou être ?",
        description: "Choisissez le bon auxiliaire.",
        exercises: [
          {
            type: "fill",
            sentence: "Marie est {{1}} tôt ce matin. (partir)",
            answers: ["partie"],
            explanation:
              "« Partir » utilise « être » ; accord avec Marie : « partie ».",
          },
          {
            type: "fill",
            sentence: "Tu as {{1}} tes devoirs ? (finir)",
            answers: ["fini"],
            explanation:
              "« Finir » utilise « avoir » : pas d'accord, « fini ».",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "« Elle ___ au cinéma hier. » (aller) Quelle est la forme correcte ?",
        options: ["a allé", "est allée", "est allé"],
        correct: 1,
        explanation:
          "« Aller » se conjugue avec « être » et le participe passé s'accorde avec « elle » : « est allée ».",
      },
      {
        question: "Quel auxiliaire utilise le verbe « prendre » ?",
        options: ["être", "avoir", "faire"],
        correct: 1,
        explanation:
          "« Prendre » n'est pas un verbe de mouvement : il se conjugue avec « avoir » → « j'ai pris ».",
      },
      {
        question: "« Ils sont ___ » (arriver). Quelle est la bonne écriture ?",
        options: ["arrivé", "arrivés", "arrivée"],
        correct: 1,
        explanation:
          "Avec « être », le participe s'accorde avec le sujet pluriel masculin : « arrivés ».",
      },
      {
        question: "Quel est le participe passé de « voir » ?",
        options: ["voiré", "vu", "vois"],
        correct: 1,
        explanation:
          "Participe passé irrégulier : « vu » → « j'ai vu ».",
      },
      {
        question: "Dans quel cas le participe passé s'accorde-t-il avec le sujet ?",
        options: [
          "Toujours",
          "Jamais",
          "Avec l'auxiliaire être",
        ],
        correct: 2,
        explanation:
          "L'accord avec le sujet se fait avec l'auxiliaire « être » (et avec « avoir » seulement quand le COD est placé avant).",
      },
    ],
  },
  {
    lesson: {
      id: "a2-2",
      slug: "imparfait",
      level: "A2",
      title: "L'imparfait : décrire le passé",
      objective:
        "Conjuguer à l'imparfait et comprendre la différence avec le passé composé.",
      duration: "12 min",
      blocks: [
        {
          type: "text",
          content:
            "Si le passé composé raconte des **événements précis**, l'imparfait, lui, **dépeint le décor** : habitudes passées, descriptions, actions en cours, sentiments. Dans un récit, l'imparfait est la toile de fond, le passé composé est l'action qui avance.",
        },
        {
          type: "rule",
          title: "La formation de l'imparfait",
          content:
            "1. Prenez le verbe à « nous » au présent et retirez « -ons » pour obtenir le **radical de l'imparfait** (nous parlons → parl- ; nous finissons → finiss-). 2. Ajoutez : **-ais, -ais, -ait, -ions, -iez, -aient**.",
        },
        {
          type: "example",
          title: "« Finir » à l'imparfait",
          content:
            "je finissais · tu finissais · il finissait · nous finissions · vous finissiez · ils finissaient. Remarquez le double « s » conservé depuis « nous finissons ».",
        },
        {
          type: "text",
          content:
            "Seul le verbe **être** est irrégulier : son radical est « ét- » → j'**étais**, tu **étais**, il **était**, nous **étions**, vous **étiez**, ils **étaient**.",
        },
        {
          type: "rule",
          title: "Quand utiliser l'imparfait ?",
          content:
            "• Une habitude dans le passé : « Quand j'étais enfant, je **jouais** au foot. » • Une description : « Il **faisait** beau, le ciel **était** bleu. » • Une action en cours interrompue : « Je **dormais** quand le téléphone **a sonné**. » (imparfait + passé composé).",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Retenez cette image : l'imparfait est la **photo** (le décor qui dure), le passé composé est le **clic** (l'événement qui se produit). Dans vos récits, alternez les deux pour raconter comme un natif.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer à l'imparfait",
        description: "Mettez le verbe à l'imparfait.",
        exercises: [
          {
            type: "fill",
            sentence: "Quand j'étais petit, je {{1}} beaucoup. (manger)",
            answers: ["mangeais"],
            explanation:
              "Radical « mang- » + « -ais » : habitude passée → « je mangeais ».",
          },
          {
            type: "fill",
            sentence: "Il {{1}} beau tous les jours. (faire)",
            answers: ["faisait"],
            explanation:
              "« Faire » à l'imparfait : « il faisait ». Description du passé.",
          },
          {
            type: "fill",
            sentence: "Nous {{1}} fatigués après le travail. (être)",
            answers: ["étions"],
            explanation:
              "« Être » est irrégulier : radical « ét- » → « nous étions ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Imparfait ou passé composé ?",
        description: "Choisissez le bon temps pour compléter le récit.",
        exercises: [
          {
            type: "fill",
            sentence: "Je {{1}} (dormir) quand soudain le téléphone {{2}} (sonner).",
            answers: ["dormais", "a sonné"],
            hint: "Action en cours + événement qui interrompt.",
            explanation:
              "L'action en cours est à l'imparfait (« je dormais »), l'événement soudain au passé composé (« a sonné »).",
          },
          {
            type: "fill",
            sentence: "Chaque dimanche, nous {{1}} chez grand-mère. (aller)",
            answers: ["allions"],
            hint: "Une habitude répétée.",
            explanation:
              "Une habitude du passé demande l'imparfait : « nous allions ».",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quel est le radical de l'imparfait de « parler » ?",
        options: ["parl-", "parler-", "parlons-"],
        correct: 0,
        explanation:
          "On prend le « nous » du présent (« nous parlons ») et on retire « -ons » : radical « parl- ».",
      },
      {
        question: "Quelle terminaison correspond à « il/elle » à l'imparfait ?",
        options: ["-ait", "-aient", "-ais"],
        correct: 0,
        explanation:
          "« Il/elle » prend « -ait » : « il parlait ». « -aient » est pour « ils/elles », « -ais » pour « je/tu ».",
      },
      {
        question: "Quel verbe est irrégulier à l'imparfait ?",
        options: ["manger", "finir", "être"],
        correct: 2,
        explanation:
          "« Être » est le seul verbe irrégulier à l'imparfait : j'étais, tu étais, il était...",
      },
      {
        question: "« Quand j'étais enfant, je ___ au tennis. » (jouer)",
        options: ["ai joué", "jouais", "jouerai"],
        correct: 1,
        explanation:
          "Une habitude de l'enfance : imparfait → « je jouais ».",
      },
      {
        question: "Quelle phrase décrit une action en cours interrompue par un événement ?",
        options: [
          "J'ai fini mes devoirs à 18 h.",
          "Je lisais quand ma mère est entrée.",
          "Il pleut depuis ce matin.",
        ],
        correct: 1,
        explanation:
          "« Je lisais » (imparfait, action en cours) + « est entrée » (passé composé, événement soudain) : le duo classique du récit.",
      },
    ],
  },
  {
    lesson: {
      id: "a2-3",
      slug: "le-futur-simple",
      level: "A2",
      title: "Le futur simple",
      objective:
        "Conjuguer les verbes réguliers et irréguliers au futur simple et l'utiliser pour parler de projets et de prédictions.",
      duration: "13 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **futur simple** exprime un projet, une promesse ou une prédiction sur l'avenir, souvent plus lointain ou plus formel que le futur proche. Sa beauté : le radical et les terminaisons sont presque toujours les mêmes.",
        },
        {
          type: "rule",
          title: "La formation",
          content:
            "**Infinitif complet + terminaisons : -ai, -as, -a, -ons, -ez, -ont.** Exemple : « parler » → je parler**ai**, tu parler**as**, il parler**a**, nous parler**ons**, vous parler**ez**, ils parler**ont**.",
        },
        {
          type: "text",
          content:
            "Certains verbes courants changent de radical mais gardent les mêmes terminaisons. Mieux vaut les apprendre par cœur : **être → je serai** · **avoir → j'aurai** · **aller → j'irai** · **faire → je ferai** · **voir → je verrai** · **venir → je viendrai** · **pouvoir → je pourrai** · **vouloir → je voudrai**.",
        },
        {
          type: "example",
          title: "Des projets pour demain",
          content:
            "« L'année prochaine, je **serai** ingénieur. » — « Nous **aurons** une maison au bord de la mer. » — « Vous **verrez**, tout va s'arranger. »",
        },
        {
          type: "tip",
          title: "Ne pas confondre",
          content:
            "« Je **serai** » (futur, sans accent) ≠ « je **serais** » (conditionnel, avec « s » à la fin). Le futur dit ce qui va se produire ; le conditionnel dit ce qui se produirait si...",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer au futur simple",
        description: "Conjuguez le verbe entre parenthèses au futur simple.",
        exercises: [
          {
            type: "fill",
            sentence: "Demain, il {{1}} (manger) chez sa grand-mère.",
            answers: ["mangera"],
            explanation:
              "Infinitif « manger » + « -a » pour « il » : « il mangera ».",
          },
          {
            type: "fill",
            sentence: "Nous {{1}} (être) à Paris la semaine prochaine.",
            answers: ["serons"],
            hint: "Verbe irrégulier !",
            explanation:
              "« Être » est irrégulier : « nous serons ».",
          },
          {
            type: "fill",
            sentence: "Vous {{1}} (voir) que c'est une bonne idée.",
            answers: ["verrez"],
            explanation:
              "« Voir » double le « r » au futur : « vous verrez ».",
          },
          {
            type: "fill",
            sentence: "Ils {{1}} (avoir) vingt ans dans deux ans.",
            answers: ["auront"],
            explanation:
              "« Avoir » → radical « aur- » : « ils auront ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Remettre en ordre",
        description: "Réordonnez les mots pour former une phrase au futur.",
        exercises: [
          {
            type: "order",
            words: ["ferai", "mes", "Demain", "je", "devoirs", "mes"],
            correct: ["Demain", "je", "ferai", "mes", "devoirs"],
            explanation:
              "Repère temporel + sujet + verbe au futur + complément.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle est la terminaison de « nous » au futur simple ?",
        options: ["-ons", "-erons", "-erons ou -irons selon le verbe"],
        correct: 0,
        explanation:
          "« Nous » prend toujours « -ons » : « nous parlerons », « nous finirons ».",
      },
      {
        question: "« Je ___ médecin plus tard. » (être)",
        options: ["serai", "serais", "suis"],
        correct: 0,
        explanation:
          "« Être » au futur : « je serai » (sans « s » final, qui serait le conditionnel).",
      },
      {
        question: "Comment forme-t-on le futur simple d'un verbe régulier ?",
        options: [
          "Radical + -ai, -as, -a, -ons, -ez, -ont",
          "Verbe aller + infinitif",
          "Auxiliaire + participe passé",
        ],
        correct: 0,
        explanation:
          "Infinitif complet + terminaisons du futur (-ai, -as, -a, -ons, -ez, -ont).",
      },
      {
        question: "« Voir » au futur, 1ʳᵉ personne du singulier :",
        options: ["je verai", "je verrai", "je verra"],
        correct: 1,
        explanation:
          "« Voir » double le « r » : « je verrai ».",
      },
      {
        question: "Quelle phrase est au futur simple ?",
        options: [
          "Je vais voyager demain",
          "Je voyagerai l'été prochain",
          "Je voyage souvent",
        ],
        correct: 1,
        explanation:
          "« Voyagerai » est la forme du futur simple ; la première est au futur proche, la troisième au présent.",
      },
    ],
  },
  {
    lesson: {
      id: "a2-4",
      slug: "les-pronoms-cod-coi",
      level: "A2",
      title: "Les pronoms COD et COI : le, la, les, lui, leur",
      objective:
        "Remplacer un complément d'objet direct (COD) ou indirect (COI) par le pronom qui convient.",
      duration: "15 min",
      blocks: [
        {
          type: "text",
          content:
            "Pour parler sans répéter, le français utilise des **pronoms compléments**. Le choix dépend d'une seule question : le verbe se construit-il **directement** avec l'objet (« manger quelque chose ») ou **avec « à »** (« parler à quelqu'un ») ?",
        },
        {
          type: "rule",
          title: "Les pronoms COD (objet direct, sans « à »)",
          content:
            "**me (m') / te (t') / le (l') / la (l') / nous / vous / les.** Exemples : « Je regarde **le film** → je **le** regarde. » « Elle achète **des pommes** → elle **les** achète. »",
        },
        {
          type: "rule",
          title: "Les pronoms COI (objet indirect, avec « à »)",
          content:
            "**me (m') / te (t') / lui / nous / vous / leur.** Attention : « lui » et « leur » remplacent une personne (ou un animal) introduite par « à ». Exemples : « Je parle **à Paul** → je **lui** parle. » « Nous téléphonons **aux enfants** → nous **leur** téléphonons. »",
        },
        {
          type: "example",
          title: "Comparez les deux séries",
          content:
            "COD : « Je mange **la pomme** → je **la** mange. » (direct) — COI : « J'offre un cadeau **à Marie** → je **lui** offre un cadeau. » (avec « à »). Le verbe décide tout !",
        },
        {
          type: "text",
          content:
            "Le pronom se place **avant le verbe**. Dans une phrase négative, le « ne... pas » l'encadre : « Je **ne** **le** **pas** mange » est faux — la bonne forme est « Je **ne le** mange **pas** ».",
        },
        {
          type: "tip",
          title: "Le piège de « lui »",
          content:
            "« Lui » est le seul pronom qui sert pour un homme **et** une femme : « je lui parle » = je parle à Paul OU à Sophie. C'est normal : le pronom remplace « à + personne », le genre n'entre pas en jeu.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Remplacer par un pronom COD",
        description: "Remplacez le complément en gras par le pronom COD qui convient.",
        exercises: [
          {
            type: "fill",
            sentence: "Je mange la pomme. → Je {{1}} mange.",
            answers: ["la"],
            hint: "« La pomme » est féminin singulier.",
            explanation:
              "Complément direct féminin singulier → « la » : « je la mange ».",
          },
          {
            type: "fill",
            sentence: "Tu regardes les photos ? → Tu {{1}} regardes ?",
            answers: ["les"],
            explanation:
              "Complément direct pluriel → « les » : « tu les regardes ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Remplacer par un pronom COI",
        description: "Remplacez le complément introduit par « à » par le bon pronom.",
        exercises: [
          {
            type: "fill",
            sentence: "Je parle à Marie. → Je {{1}} parle.",
            answers: ["lui"],
            explanation:
              "« À + personne » au singulier → « lui » : « je lui parle ».",
          },
          {
            type: "fill",
            sentence: "Nous écrivons aux professeurs. → Nous {{1}} écrivons.",
            answers: ["leur"],
            explanation:
              "« À + personnes » au pluriel → « leur » : « nous leur écrivons ».",
          },
        ],
      },
      {
        title: "Exercice 3 — COD ou COI ?",
        description: "Associez chaque verbe au type de pronom qu'il appelle.",
        exercises: [
          {
            type: "match",
            instruction: "Associez le verbe au pronom correct pour le complément.",
            pairs: [
              { left: "manger (le gâteau)", right: "le" },
              { left: "parler (à Sophie)", right: "lui" },
              { left: "acheter (des livres)", right: "les" },
              { left: "téléphoner (aux parents)", right: "leur" },
            ],
            explanation:
              "« Manger » et « acheter » sont directs (COD : le, les) ; « parler à » et « téléphoner à » sont indirects (COI : lui, leur).",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "« Je regarde la télé. » Avec un pronom :",
        options: ["Je lui regarde", "Je la regarde", "Je les regarde"],
        correct: 1,
        explanation:
          "« La télé » est féminin singulier, complément direct → « je la regarde ».",
      },
      {
        question: "« J'écris à ma sœur. » Avec un pronom :",
        options: ["Je l'écris", "Je lui écris", "Je leur écris"],
        correct: 1,
        explanation:
          "« À + personne » singulier → « lui » : « je lui écris ».",
      },
      {
        question: "Où se place le pronom complément ?",
        options: [
          "Après le verbe",
          "Avant le verbe",
          "Au début de la phrase",
        ],
        correct: 1,
        explanation:
          "Le pronom complément se place toujours avant le verbe : « je le mange », « je lui parle ».",
      },
      {
        question: "Quelle est la différence entre « le » et « lui » ?",
        options: [
          "« le » est COD, « lui » est COI (remplace « à + personne »)",
          "« le » est masculin, « lui » est féminin",
          "Aucune différence",
        ],
        correct: 0,
        explanation:
          "« Le » remplace un complément direct ; « lui » remplace « à + une personne ».",
      },
      {
        question: "« Nous parlons aux enfants. » Avec un pronom :",
        options: ["Nous leur parlons", "Nous les parlons", "Nous lui parlons"],
        correct: 0,
        explanation:
          "« À + personnes » pluriel → « leur » : « nous leur parlons ».",
      },
    ],
  },
  {
    lesson: {
      id: "a2-5",
      slug: "le-comparatif-et-le-superlatif",
      level: "A2",
      title: "Le comparatif et le superlatif",
      objective:
        "Comparer deux éléments (plus/moins/aussi... que) et exprimer le degré extrême (le plus/le moins).",
      duration: "12 min",
      blocks: [
        {
          type: "text",
          content:
            "Comparer est un réflexe quotidien : ce café est meilleur, cette ville est plus grande, ce livre est aussi intéressant que l'autre. Le français a un système simple en trois formules.",
        },
        {
          type: "rule",
          title: "Le comparatif",
          content:
            "**plus... que** (supériorité) · **moins... que** (infériorité) · **aussi... que** (égalité). On encadre l'adjectif (ou l'adverbe) entre la formule et « que » : « Paris est **plus grand que** Lyon ».",
        },
        {
          type: "rule",
          title: "Le superlatif",
          content:
            "**le plus / la plus / les plus** + adjectif (supériorité extrême) · **le moins / la moins / les moins** (infériorité extrême). « Le » s'accorde avec le nom : « C'est **la plus belle** ville du monde ».",
        },
        {
          type: "example",
          title: "Des comparaisons courantes",
          content:
            "« Le TGV est **plus rapide que** la voiture. » — « L'hiver est **moins chaud que** l'été. » — « Ce film est **aussi bon que** le précédent. » — « Le Mont Blanc est **le plus haut** sommet d'Europe occidentale. »",
        },
        {
          type: "text",
          content:
            "Deux irrégularités à connaître par cœur : « bon » → **meilleur** (pas « plus bon » !) et « bien » (adverbe) → **mieux**. Leur contraire : « mauvais » → **pire** (ou « plus mauvais »), « mal » → **plus mal**.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Pour ne jamais se tromper, posez la question : est-ce un adjectif (« bon ») ou un adverbe (« bien ») ? Adjectif → « meilleur » ; adverbe → « mieux ». « Ce gâteau est **meilleur**. » « Elle chante **mieux**. »",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Comparer",
        description: "Complétez avec « plus... que », « moins... que » ou « aussi... que ».",
        exercises: [
          {
            type: "fill",
            sentence: "L'éléphant est {{1}} lourd {{2}} la souris.",
            answers: ["plus", "que"],
            explanation:
              "Supériorité : « plus lourd que ».",
          },
          {
            type: "fill",
            sentence: "Ce livre est {{1}} intéressant {{2}} l'autre.",
            answers: ["aussi", "que"],
            hint: "Les deux livres ont le même intérêt.",
            explanation:
              "Égalité : « aussi intéressant que ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Le superlatif",
        description: "Formez le superlatif avec « le/la/les plus ».",
        exercises: [
          {
            type: "fill",
            sentence: "C'est {{1}} {{2}} film de l'année. (intéressant)",
            answers: ["le", "plus intéressant"],
            explanation:
              "« Film » est masculin singulier : « le plus intéressant ».",
          },
          {
            type: "fill",
            sentence: "Ce sont {{1}} {{2}} vacances de ma vie. (beau)",
            answers: ["les", "plus belles"],
            hint: "« Vacances » est féminin pluriel !",
            explanation:
              "« Vacances » est féminin pluriel : « les plus belles vacances ».",
          },
        ],
      },
      {
        title: "Exercice 3 — Les irrégulariers de « bon » et « bien »",
        description: "Choisissez « meilleur » ou « mieux ».",
        exercises: [
          {
            type: "fill",
            sentence: "Ton français est {{1}} qu'avant.",
            answers: ["meilleur"],
            hint: "« français » est un nom qualifié par un adjectif.",
            explanation:
              "« Bon » (adjectif) → comparatif « meilleur » : « ton français est meilleur ».",
          },
          {
            type: "fill",
            sentence: "Elle explique {{1}} que moi.",
            answers: ["mieux"],
            explanation:
              "« Bien » (adverbe qui modifie « explique ») → « mieux ».",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle formule exprime l'égalité ?",
        options: ["plus... que", "aussi... que", "le plus"],
        correct: 1,
        explanation:
          "« Aussi... que » exprime l'égalité : « aussi grand que ».",
      },
      {
        question: "Comment dit-on correctement le comparatif de « bon » ?",
        options: ["plus bon", "meilleur", "bonnier"],
        correct: 1,
        explanation:
          "« Bon » est irrégulier : son comparatif est « meilleur ».",
      },
      {
        question: "« C'est ___ ville ___ grande de France. » (Paris est hors sujet : Lille vs Marseille)",
        options: [
          "la plus / de",
          "le plus / de",
          "plus / que",
        ],
        correct: 0,
        explanation:
          "Superlatif féminin singulier : « c'est la plus grande ville de France ».",
      },
      {
        question: "Quelle phrase est correcte ?",
        options: [
          "Elle chante plus meilleur",
          "Elle chante mieux que lui",
          "Elle chante plus bien",
        ],
        correct: 1,
        explanation:
          "L'adverbe « bien » devient « mieux » au comparatif : « elle chante mieux que lui ».",
      },
      {
        question: "« Ce café est ___ cher ___ l'autre. » (infériorité)",
        options: ["plus / que", "moins / que", "le moins / de"],
        correct: 1,
        explanation:
          "Infériorité : « moins... que » : « ce café est moins cher que l'autre ».",
      },
    ],
  },
];
