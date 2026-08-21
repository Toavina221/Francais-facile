/**
 * FrançaisFacile+ — Contenu pédagogique Niveau B1 (Intermédiaire)
 * Précision grammaticale validée, ton professoral et bienveillant.
 */
import type { LessonData } from "./types";

export const lessonsB1: LessonData[] = [
  {
    lesson: {
      id: "b1-1",
      slug: "conditionnel-present",
      level: "B1",
      title: "Le conditionnel présent : politesse, conseil et hypothèse",
      objective:
        "Exprimer la politesse, donner un conseil et imaginer des situations hypothétiques.",
      duration: "15 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **conditionnel présent** est le mode de la **nuance** : il adoucit, suggère, imagine. C'est lui qui rend le français poli (« Pourrais-je... ? »), qui donne un bon conseil sans imposer (« Tu devrais... ») et qui ouvre la porte des mondes imaginaires (« Si j'avais un million... »).",
        },
        {
          type: "rule",
          title: "La formation du conditionnel",
          content:
            "**Conditionnel = futur simple du verbe + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).** Exemple avec « parler » : je parler**ais**, tu parler**ais**, il parler**ait**, nous parler**ions**, vous parler**iez**, ils parler**aient**.",
        },
        {
          type: "text",
          content:
            "Pour les verbes irréguliers, on garde le même radical qu'au futur : avoir → j'**aurais**, être → je **serais**, faire → je **ferais**, aller → j'**irais**, pouvoir → je **pourrais**, vouloir → je **voudrais**, devoir → je **devrais**, voir → je **verrais**. Ces formes reviennent sans cesse, apprenez-les par cœur.",
        },
        {
          type: "rule",
          title: "Les trois usages principaux",
          content:
            "1. **La politesse** : « Pourriez-vous m'aider ? » (plus doux que « Pouvez-vous »). 2. **Le conseil** : « Tu devrais te reposer. » 3. **L'hypothèse** avec « si » + imparfait : « Si j'avais le temps, je voyagerais. » — Attention : on ne dit jamais « si j'aurais », c'est « si j'avais » !",
        },
        {
          type: "example",
          title: "Dans la vraie vie",
          content:
            "Au restaurant : « Je **voudrais** le plat du jour, s'il vous plaît. » — Chez le médecin : « Vous **devriez** boire plus d'eau. » — Entre amis : « Si nous habitions au bord de la mer, nous nagerions tous les jours ! »",
        },
        {
          type: "tip",
          title: "Le piège à éviter absolument",
          content:
              "« Si j'**aurais** » est la faute la plus répandue en français. Après « si » (hypothèse), on met l'**imparfait**, jamais le conditionnel : « Si j'**avais** de l'argent, j'**achèterais** une maison. » Retenez : « les si n'aiment pas les rais » !",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer au conditionnel",
        description: "Mettez le verbe au conditionnel présent.",
        exercises: [
          {
            type: "fill",
            sentence: "{{1}}-vous m'aider, s'il vous plaît ? (pouvoir)",
            answers: ["Pourriez"],
            explanation:
              "Politesse au conditionnel : radical « pourr- » + « -iez » → « pourriez-vous ».",
          },
          {
            type: "fill",
            sentence: "Tu devrais {{1}} moins de sucre. (manger)",
            answers: ["manger"],
            hint: "Que faire après « devrait » ?",
            explanation:
              "Après « devrait » (conditionnel de devoir), on met l'infinitif : « devrais manger ».",
          },
          {
            type: "fill",
            sentence: "Si je gagnais au loto, j'{{1}} le tour du monde. (faire)",
            answers: ["ferais"],
            hint: "Radical irrégulier du futur de « faire ».",
            explanation:
              "« Faire » au conditionnel : « je ferais » (jamais « je ferai » qui est le futur).",
          },
        ],
      },
      {
        title: "Exercice 2 — Si + imparfait, conditionnel",
        description: "Complétez les phrases hypothétiques.",
        exercises: [
          {
            type: "fill",
            sentence: "Si j'{{1}} (avoir) le temps, je {{2}} (lire) plus.",
            answers: ["avais", "lirais"],
            explanation:
              "La phrase hypothétique classique : « si » + imparfait (« avais ») → conditionnel dans l'autre proposition (« lirais »).",
          },
          {
            type: "fill",
            sentence: "Si nous {{1}} (être) en vacances, nous {{2}} (dormir) tard.",
            answers: ["étions", "dormirions"],
            explanation:
              "« Être » à l'imparfait : « étions » ; « dormir » au conditionnel : « dormirions ».",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle est la forme correcte pour demander poliment ?",
        options: ["Je veux un café.", "Je voudrais un café, s'il vous plaît.", "Je voulais un café."],
        correct: 1,
        explanation:
          "Le conditionnel adoucit la demande : « je voudrais » est la forme polie par excellence.",
      },
      {
        question: "« Si j'___ riche, j'aiderais tout le monde. » (être)",
        options: ["serais", "étais", "suis"],
        correct: 1,
        explanation:
          "Après « si » d'hypothèse, on met l'imparfait : « si j'étais ». Le conditionnel se trouve dans l'autre proposition.",
      },
      {
        question: "Quelle phrase est correcte ?",
        options: [
          "Si j'aurais su, je ne serais pas venu.",
          "Si j'avais su, je ne serais pas venu.",
          "Si j'ai su, je ne suis pas venu.",
        ],
        correct: 1,
        explanation:
          "Jamais « si + conditionnel ». Ici c'est une hypothèse sur le passé : « si » + plus-que-parfait (« avais su ») → conditionnel passé (« serais venu »).",
      },
      {
        question: "Quel est le conditionnel de « pouvoir » à la 1ʳᵉ personne du singulier ?",
        options: ["je pourrais", "je pourrai", "je pouvrais"],
        correct: 0,
        explanation:
          "« Je pourrais » (conditionnel, avec deux r). « Je pourrai » (un seul r) est le futur !",
      },
      {
        question: "Donner un conseil en français se fait avec :",
        options: ["l'impératif seulement", "« tu devrais » + infinitif", "le passé composé"],
        correct: 1,
        explanation:
          "Le conseil doux utilise « tu devrais » (conditionnel de devoir) suivi de l'infinitif : « Tu devrais te reposer ».",
      },
    ],
  },
  {
    lesson: {
      id: "b1-2",
      slug: "pronoms-relatifs-qui-que",
      level: "B1",
      title: "Les pronoms relatifs « qui », « que », « où », « dont »",
      objective:
        "Relier deux phrases avec le bon pronom relatif.",
      duration: "15 min",
      blocks: [
        {
          type: "text",
          content:
            "Les pronoms relatifs servent à **relier deux phrases en une seule**, pour éviter les répétitions et fluidifier le discours. Ce sont de petits mots puissants : *qui*, *que*, *où*, *dont*. Les maîtriser, c'est passer du français scolaire au français naturel.",
        },
        {
          type: "rule",
          title: "La règle des quatre",
          content:
            "**QUI** remplace le **sujet** (il/elle/ils/elles font l'action). **QUE** remplace le **complément d'objet direct** (l'objet de l'action). **OÙ** remplace un **lieu ou un moment**. **DONT** remplace un complément introduit par **« de »**.",
        },
        {
          type: "example",
          title: "Regardez la transformation",
          content:
            "Deux phrases : « J'ai un ami. Il habite à Lyon. » → « J'ai un ami **qui** habite à Lyon. » (qui = sujet). — « J'ai acheté un livre. J'adore ce livre. » → « J'ai acheté un livre **que** j'adore. » (que = objet).",
        },
        {
          type: "example",
          title: "Où et dont en action",
          content:
            "« C'est la ville **où** je suis né. » (lieu). « Voici le livre **dont** je t'ai parlé. » (parler **de** quelque chose). « C'est le professeur **dont** je t'ai parlé. » (parler **de** quelqu'un).",
        },
        {
          type: "tip",
          title: "L'astuce du professeur",
          content:
            "Pour choisir entre « qui » et « que », regardez ce qui suit : si un **verbe** vient juste après, c'est « qui » (sujet) ; si un **sujet** (je, tu, il, nous...) vient après, c'est « que » (objet). « Le film **qui** m'a plu » (verbe) / « le film **que** j'ai vu » (sujet « j' »).",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Choisir le bon pronom",
        description: "Complétez avec « qui », « que », « où » ou « dont ».",
        exercises: [
          {
            type: "fill",
            sentence: "C'est la femme {{1}} travaille avec moi.",
            answers: ["qui"],
            explanation:
              "« Qui » remplace le sujet : la femme fait l'action de travailler.",
          },
          {
            type: "fill",
            sentence: "Le cadeau {{1}} tu m'as offert me plaît beaucoup.",
            answers: ["que"],
            hint: "Un sujet suit le blanc : « tu ».",
            explanation:
              "« Que » remplace l'objet : c'est le cadeau que tu as offert (tu offres quelque chose).",
          },
          {
            type: "fill",
            sentence: "Voici le restaurant {{1}} nous avons dîné hier.",
            answers: ["où"],
            explanation:
              "Un lieu → « où » : « le restaurant où nous avons dîné ».",
          },
          {
            type: "fill",
            sentence: "C'est l'histoire {{1}} je t'ai parlée... non, {{1}} je t'ai racontée ? → C'est l'histoire {{1}} je t'ai parlée est fausse. (parler de)",
            answers: ["dont"],
            explanation:
              "On parle **de** l'histoire → « dont » : « l'histoire dont je t'ai parlé ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Relier deux phrases",
        description: "Fusionnez les deux phrases avec le pronom relatif qui convient.",
        exercises: [
          {
            type: "fill",
            sentence: "« J'ai un chien. Le chien aboie beaucoup. » → J'ai un chien {{1}} aboie beaucoup.",
            answers: ["qui"],
            explanation:
              "Le chien est sujet de « aboie » : on utilise « qui ».",
          },
          {
            type: "fill",
            sentence: "« Je cherche mes clés. J'ai perdu les clés. » → Je cherche les clés {{1}} j'ai perdues.",
            answers: ["que"],
            hint: "Les clés sont l'objet de « perdre ».",
            explanation:
              "Les clés sont l'objet direct de « perdre » : « que ». (Accord du participe : « perdues ».)",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "« Le professeur ___ parle est très patient. » Quel pronom manque ?",
        options: ["que", "qui", "dont"],
        correct: 1,
        explanation:
          "Le professeur est le sujet de « parle » : on utilise « qui ».",
      },
      {
        question: "Quelle phrase est correcte ?",
        options: [
          "La maison que j'habite est grande.",
          "La maison qui j'habite est grande.",
          "La maison où j'habite est grande.",
        ],
        correct: 2,
        explanation:
          "On habite **dans** un lieu → « où » : « la maison où j'habite ». (« Dans laquelle » serait aussi correct, plus formel.)",
      },
      {
        question: "« Voici l'homme ___ je t'ai parlé. » Quel pronom manque ?",
        options: ["que", "qui", "dont"],
        correct: 2,
        explanation:
          "On parle **de** quelqu'un → « dont » : « l'homme dont je t'ai parlé ».",
      },
      {
        question: "Que remplace le pronom « que » dans une phrase relative ?",
        options: [
          "Le sujet",
          "Le complément d'objet direct",
          "Un lieu",
        ],
        correct: 1,
        explanation:
          "« Que » remplace l'objet direct : « le livre que je lis » (= je lis le livre).",
      },
      {
        question: "« Le film ___ m'a fait pleurer était magnifique. »",
        options: ["qui", "que", "dont"],
        correct: 0,
        explanation:
          "Le film est sujet de « m'a fait pleurer » → « qui ».",
      },
    ],
  },
  {
    lesson: {
      id: "b1-3",
      slug: "le-discours-rapporte",
      level: "B1",
      title: "Le discours rapporté : raconter les paroles de quelqu'un",
      objective:
        "Transformer un discours direct en discours indirect, avec la concordance des temps.",
      duration: "15 min",
      blocks: [
        {
          type: "text",
          content:
            "Quand on raconte ce que quelqu'un a dit, on a deux choix : rapporter les paroles exactes (**discours direct**, avec guillemets) ou les intégrer à sa propre phrase (**discours indirect**). Le discours indirect demande trois transformations : le pronom, le temps et les repères de temps.",
        },
        {
          type: "rule",
          title: "La transformation de base",
          content:
            "Direct : Paul dit : « **Je suis** malade. » — Indirect : Paul dit **qu'**il **est** malade. On retire les guillemets, on ajoute « que », et on change les pronoms pour qu'ils correspondent à la nouvelle perspective.",
        },
        {
          type: "rule",
          title: "Quand le verbe introducteur est au passé",
          content:
            "Si le verbe qui introduit est au **passé** (il a dit, elle racontait), les temps reculent d'un cran : présent → **imparfait** ; passé composé → **plus-que-parfait** ; futur → **conditionnel présent**. « Il a dit : « Je **viendrai**. » » → « Il a dit qu'il **viendrait**. »",
        },
        {
          type: "example",
          title: "Les repères de temps changent aussi",
          content:
            "« aujourd'hui » → **ce jour-là** · « demain » → **le lendemain** · « hier » → **la veille** · « ici » → **là**. « Elle a dit : « Je pars **demain**. » » → « Elle a dit qu'elle partait **le lendemain**. »",
        },
        {
          type: "text",
          content:
            "Les questions suivent des règles propres. Une question avec inversion devient « **si** » : « Viens-tu ? » → « Il m'a demandé **si** je venais. » Une question avec mot interrogatif garde ce mot : « Où vas-tu ? » → « Elle m'a demandé **où** j'allais. »",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Entraînez-vous avec les dialogues : lisez une bande dessinée à voix haute au discours direct, puis racontez-la à un ami au discours indirect. C'est le meilleur exercice pour automatiser les transformations.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Transformer au discours indirect (verbe au présent)",
        description:
          "Transformez chaque phrase au discours indirect. Le verbe introducteur est au présent : les temps ne changent pas.",
        exercises: [
          {
            type: "fill",
            sentence:
              "Marie dit : « J'aime le chocolat. » → Marie dit qu'{{1}} le chocolat.",
            answers: ["elle aime"],
            explanation:
              "Verbe introducteur au présent : « j'aime » devient « elle aime », temps inchangé.",
          },
          {
            type: "fill",
            sentence:
              "Pierre dit : « Nous sommes prêts. » → Pierre dit qu'{{1}} prêts.",
            answers: ["ils sont"],
            hint: "« Nous » (Pierre et d'autres hommes) devient « ils ».",
            explanation:
              "« Nous » devient « ils » ; « sommes » devient « sont ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Concordance des temps (introducteur au passé)",
        description:
          "Transformez au discours indirect avec un verbe introducteur au passé : le temps recule d'un cran.",
        exercises: [
          {
            type: "fill",
            sentence:
              "Il a dit : « Je suis fatigué. » → Il a dit qu'{{1}} fatigué.",
            answers: ["il était"],
            hint: "Présent → imparfait.",
            explanation:
              "Introducteur au passé : le présent du discours direct devient imparfait : « il était ».",
          },
          {
            type: "fill",
            sentence:
              "Elle a dit : « Je viendrai demain. » → Elle a dit qu'{{1}} le lendemain.",
            answers: ["elle viendrait"],
            hint: "Futur → conditionnel présent.",
            explanation:
              "Futur → conditionnel : « je viendrai » devient « elle viendrait » ; « demain » devient « le lendemain ».",
          },
        ],
      },
      {
        title: "Exercice 3 — Les questions rapportées",
        description: "Transformez chaque question en question rapportée.",
        exercises: [
          {
            type: "fill",
            sentence:
              "Il m'a demandé : « Tu parles français ? » → Il m'a demandé {{1}} français.",
            answers: ["si je parlais"],
            hint: "Question oui/non → « si » + imparfait.",
            explanation:
              "Une question fermée introduite au passé devient « si » + imparfait.",
          },
          {
            type: "fill",
            sentence:
              "Elle m'a demandé : « Où habites-tu ? » → Elle m'a demandé {{1}}.",
            answers: ["où j'habitais"],
            explanation:
              "Le mot interrogatif « où » est conservé, et le présent devient imparfait.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Direct : « Je suis content. » (il a dit) → Indirect :",
        options: [
          "Il a dit qu'il est content",
          "Il a dit qu'il était content",
          "Il a dit qu'il serait content",
        ],
        correct: 1,
        explanation:
          "Introducteur au passé : le présent du discours direct recule à l'imparfait.",
      },
      {
        question:
          "Que devient « demain » au discours indirect avec un introducteur au passé ?",
        options: ["aujourd'hui", "le lendemain", "la veille"],
        correct: 1,
        explanation:
          "« Demain » → « le lendemain » ; « hier » → « la veille ».",
      },
      {
        question: "« Il m'a demandé : « Tu viens ? » » → Indirect :",
        options: [
          "Il m'a demandé que je venais",
          "Il m'a demandé si je venais",
          "Il m'a demandé est-ce que je viens",
        ],
        correct: 1,
        explanation:
          "Une question fermée (oui/non) rapportée devient « si » + imparfait.",
      },
      {
        question:
          "Quand le verbe introducteur est au présent, que fait-on des temps ?",
        options: [
          "On les recule d'un cran",
          "On ne les change pas",
          "On les met au futur",
        ],
        correct: 1,
        explanation:
          "Avec un introducteur au présent, seul le pronom change ; les temps restent identiques.",
      },
      {
        question:
          "Direct : « Nous partirons la semaine prochaine. » (elle a annoncé) → Indirect :",
        options: [
          "Elle a annoncé qu'ils partiront",
          "Elle a annoncé qu'ils partiraient la semaine suivante",
          "Elle a annoncé qu'ils partaient la semaine prochaine",
        ],
        correct: 1,
        explanation:
          "Futur → conditionnel (« partiraient ») et « la semaine prochaine » → « la semaine suivante ».",
      },
    ],
  },
  {
    lesson: {
      id: "b1-4",
      slug: "vocabulaire-le-travail-et-letude",
      level: "B1",
      title: "Vocabulaire : le travail et les études",
      objective:
        "Parler de son métier, de sa formation et de son parcours professionnel en français.",
      duration: "12 min",
      blocks: [
        {
          type: "text",
          content:
            "Parler de son travail est incontournable : entretien d'embauche, conversation entre collègues, formulaire administratif. Ce vocabulaire se construit autour de quelques verbes et noms essentiels.",
        },
        {
          type: "rule",
          title: "Les verbes du monde professionnel",
          content:
            "**travailler** · **étudier** · **postuler** (à un emploi) · **embaucher / recruter** · **démissionner** · **partir en retraite** · **gagner** (un salaire) · **demander** une augmentation. Le féminin des métiers suit la règle générale : professeur → professeure, ingénieur → ingénieure.",
        },
        {
          type: "example",
          title: "Se présenter professionnellement",
          content:
            "« Je suis **comptable** dans une entreprise internationale. J'**ai obtenu** mon master à Lyon en 2019, puis j'**ai postulé** à plusieurs offres avant de trouver ce poste. Je **gère** la comptabilité de trois filiales. »",
        },
        {
          type: "rule",
          title: "Exprimer son parcours",
          content:
            "**J'ai fait mes études à...** · **J'ai un diplôme en...** · **Je suis en stage / en alternance** · **Je cherche un emploi / un poste de...** · **Je viens d'être embauché(e)** · **Je compte démissionner pour...** Le passé composé domine pour le parcours ; le présent pour la situation actuelle.",
        },
        {
          type: "example",
          title: "L'entretien d'embauche",
          content:
            "« Pourquoi voulez-vous ce poste ? » — « Parce que j'**aimerais** développer mes compétences en management, et votre entreprise **propose** justement des formations. » — Remarquez le conditionnel « j'aimerais » : poli et motivé à la fois.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Préparez une présentation de votre parcours de 45 secondes (études → premières expériences → poste actuel → objectif). C'est l'exercice n°1 avant tout entretien en français.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Compléter avec le bon verbe",
        description: "Choisissez le verbe professionnel qui convient.",
        exercises: [
          {
            type: "fill",
            sentence:
              "Après cinq ans dans cette entreprise, elle a décidé de {{1}}.",
            answers: ["démissionner"],
            hint: "Quitter volontairement son emploi.",
            explanation: "« Démissionner » = quitter volontairement son travail.",
          },
          {
            type: "fill",
            sentence:
              "Il a {{1}} pour le poste de responsable marketing.",
            answers: ["postulé"],
            explanation: "« Postuler » = faire une demande pour un emploi.",
          },
          {
            type: "fill",
            sentence:
              "L'entreprise a {{1}} trois nouveaux ingénieurs ce mois-ci.",
            answers: ["embauché"],
            hint: "Synonyme de « recruter ».",
            explanation:
              "« Embaucher » = engager quelqu'un dans l'entreprise.",
          },
        ],
      },
      {
        title: "Exercice 2 — Remettre le parcours en ordre",
        description:
          "Réordonnez les mots pour former une phrase de parcours professionnel.",
        exercises: [
          {
            type: "order",
            words: ["J'ai", "obtenu", "mon", "master", "à", "Lyon"],
            correct: ["J'ai", "obtenu", "mon", "master", "à", "Lyon"],
            explanation:
              "Sujet + verbe (passé composé) + diplôme + lieu : « J'ai obtenu mon master à Lyon ».",
          },
        ],
      },
      {
        title: "Exercice 3 — Associer",
        description: "Reliez chaque situation à l'expression qui convient.",
        exercises: [
          {
            type: "match",
            instruction: "Associez chaque situation à son expression.",
            pairs: [
              {
                left: "quitter son travail volontairement",
                right: "démissionner",
              },
              {
                left: "faire une demande pour un emploi",
                right: "postuler",
              },
              {
                left: "apprendre un métier tout en travaillant",
                right: "être en alternance",
              },
              {
                left: "rester sans emploi après un licenciement",
                right: "être au chômage",
              },
            ],
            explanation:
              "Chaque expression du monde du travail décrit une situation précise : apprenez-les par paires.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Comment dit-on « to apply for a job » en français ?",
        options: ["démissionner", "postuler", "embaucher"],
        correct: 1,
        explanation: "« Postuler » = faire une candidature pour un emploi.",
      },
      {
        question: "« Je suis en alternance » signifie :",
        options: [
          "Je cherche du travail",
          "J'alterne cours et travail en entreprise",
          "Je travaille à temps partiel",
        ],
        correct: 1,
        explanation:
          "L'alternance = un système qui mêle formation en école et travail en entreprise.",
      },
      {
        question: "Le féminin de « ingénieur » est :",
        options: ["ingénieure", "ingénieusse", "ingénieure"],
        correct: 0,
        explanation:
          "Les métiers en « -eur » prennent un « e » au féminin : « ingénieure ».",
      },
      {
        question: "Quel temps utilise-t-on surtout pour raconter son parcours ?",
        options: ["Le futur simple", "Le passé composé", "Le subjonctif"],
        correct: 1,
        explanation:
          "Le passé composé raconte les étapes accomplies : « j'ai obtenu », « j'ai travaillé ».",
      },
      {
        question: "« Je compte démissionner pour... » exprime :",
        options: [
          "Un projet ou une intention",
          "Une certitude du passé",
          "Une obligation",
        ],
        correct: 0,
        explanation:
          "« Compter + infinitif » exprime une intention ferme : un projet pour l'avenir.",
      },
    ],
  },
];
