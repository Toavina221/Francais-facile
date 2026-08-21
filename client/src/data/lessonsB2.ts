/**
 * FrançaisFacile+ — Contenu pédagogique Niveau B2 (Avancé)
 * Précision grammaticale validée, ton professoral et bienveillant.
 */
import type { LessonData } from "./types";

export const lessonsB2: LessonData[] = [
  {
    lesson: {
      id: "b2-1",
      slug: "subjonctif-present",
      level: "B2",
      title: "Le subjonctif présent : le mode du doute et du sentiment",
      objective:
        "Utiliser le subjonctif après les expressions de volonté, de sentiment, de doute et de nécessité.",
      duration: "18 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **subjonctif** est le mode du **subjectif** : il exprime ce qui n'est pas encore réel — un souhait, une obligation, une émotion, un doute. Après le « que » de certaines expressions, il prend le relais de l'indicatif. C'est un niveau avancé, mais sa logique est belle et régulière.",
        },
        {
          type: "rule",
          title: "La formation du subjonctif",
          content:
            "1. Prenez « ils » au présent de l'indicatif et retirez « -ent » : radical du subjonctif (ils parlent → parl- ; ils finissent → finiss- ; ils peuvent → puiss-). 2. Ajoutez : **-e, -es, -e, -ions, -iez, -ent**. Exemple : que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent.",
        },
        {
          type: "text",
          content:
            "Les irréguliers essentiels : **être** → que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient · **avoir** → que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient · **faire** → que je fasse · **aller** → que j'aille · **pouvoir** → que je puisse · **savoir** → que je sache · **prendre** → que je prenne.",
        },
        {
          type: "rule",
          title: "Quand utiliser le subjonctif ?",
          content:
            "• **Volonté** : « Je veux que tu **viennes**. » · **Sentiment** : « Je suis content qu'il **soit** là. » · **Nécessité** : « Il faut que je **parte**. » · **Doute** : « Je ne pense pas qu'elle **sache** la vérité. » (mais certitude → indicatif : « Je pense qu'elle **sait** »).",
        },
        {
          type: "example",
          title: "Expressions qui déclenchent le subjonctif",
          content:
            "Il faut que... · Il est important que... · Je souhaite que... · Je crains que... · Bien que (= malgré le fait que) · Pour que / afin que (but) · Jusqu'à ce que · Avant que. Ces expressions sont vos signaux : elles annoncent toujours le subjonctif.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Ne cherchez pas à traduire le subjonctif dans votre langue maternelle : cherchez plutôt le **déclencheur**. Apprenez une liste de 10 expressions (« il faut que », « je veux que », « bien que »...) et le subjonctif deviendra un réflexe naturel.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Mettre au subjonctif",
        description: "Conjuguez le verbe au subjonctif présent.",
        exercises: [
          {
            type: "fill",
            sentence: "Il faut que tu {{1}} à l'heure. (être)",
            answers: ["sois"],
            explanation:
              "« Être » au subjonctif : que je sois, que tu sois, qu'il soit...",
          },
          {
            type: "fill",
            sentence: "Je veux qu'elle {{1}} la vérité. (savoir)",
            answers: ["sache"],
            explanation:
              "« Savoir » au subjonctif : « qu'elle sache » (irrégulier).",
          },
          {
            type: "fill",
            sentence: "Bien qu'il {{1}} tard, nous continuons. (être)",
            answers: ["soit"],
            explanation:
              "« Bien que » exige le subjonctif : « bien qu'il soit tard ».",
          },
          {
            type: "fill",
            sentence: "Il est important que nous {{1}} ensemble. (travailler)",
            answers: ["travaillions"],
            explanation:
              "Subjonctif de « travailler » à « nous » : « travaillions » (attention au double l).",
          },
        ],
      },
      {
        title: "Exercice 2 — Subjonctif ou indicatif ?",
        description: "Choisissez le bon mode selon le sens de la phrase.",
        exercises: [
          {
            type: "fill",
            sentence: "Je pense qu'il {{1}} (venir) demain. (certitude)",
            answers: ["viendra"],
            hint: "« Je pense que » à la forme affirmative exprime une certitude.",
            explanation:
              "« Je pense que » (affirmatif) exprime une opinion sûre → indicatif/futur : « viendra ». (Mais « Je ne pense pas qu'il vienne » → subjonctif.)",
          },
          {
            type: "fill",
            sentence: "Je doute qu'il {{1}} (pouvoir) finir à temps.",
            answers: ["puisse"],
            explanation:
              "Le doute déclenche le subjonctif : « puisse » (subjonctif de pouvoir).",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle phrase déclenche le subjonctif ?",
        options: [
          "Je sais qu'il est là.",
          "Il faut que tu sois prudent.",
          "Il est certain qu'elle viendra.",
        ],
        correct: 1,
        explanation:
          "« Il faut que » exprime la nécessité et exige le subjonctif : « que tu sois ».",
      },
      {
        question: "« Que je sois » est le subjonctif de quel verbe ?",
        options: ["avoir", "être", "savoir"],
        correct: 1,
        explanation:
          "« Être » au subjonctif : je sois, tu sois, il soit, nous soyons, vous soyez, ils soient.",
      },
      {
        question: "« Bien qu'il ___ malade, il travaille. » (être)",
        options: ["est", "soit", "sera"],
        correct: 1,
        explanation:
          "« Bien que » (= malgré le fait que) exige toujours le subjonctif : « bien qu'il soit ».",
      },
      {
        question: "Quelle forme est le subjonctif de « pouvoir » à « je » ?",
        options: ["je peux", "je pourrai", "je puisse"],
        correct: 2,
        explanation:
          "« Pouvoir » au subjonctif : que je puisse, que tu puisses, qu'il puisse.",
      },
      {
        question: "Comment se forme le radical du subjonctif pour la plupart des verbes ?",
        options: [
          "À partir de l'infinitif",
          "À partir de « ils » au présent, sans « -ent »",
          "À partir du participe passé",
        ],
        correct: 1,
        explanation:
          "On part de « ils » au présent (ils parlent) et on retire « -ent » : radical « parl- », puis terminaisons -e, -es, -e, -ions, -iez, -ent.",
      },
    ],
  },
  {
    lesson: {
      id: "b2-2",
      slug: "le-subjonctif-passe",
      level: "B2",
      title: "Le subjonctif passé",
      objective:
        "Exprimer un fait antérieur dans une subordonnée au subjonctif, et distinguer subjonctif présent et passé selon le temps de l'action.",
      duration: "14 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **subjonctif passé** exprime une action **terminée** dans une subordonnée qui dépend d'une expression déclenchant le subjonctif. C'est l'outil du français soutenu : il relie le présent de la personne qui parle à un événement déjà accompli.",
        },
        {
          type: "rule",
          title: "La formation",
          content:
            "**Subjonctif passé = auxiliaire (avoir ou être) au subjonctif présent + participe passé.** Exemple : « Il faut que j'**aie fini** » · « Je suis heureuse qu'il **soit venu** » · « Bien que nous **ayons perdu**, nous gardons espoir. »",
        },
        {
          type: "text",
          content:
            "Le choix entre subjonctif présent et passé dépend du **temps de l'action** dans la subordonnée : si l'action est **simultanée ou postérieure** au moment où l'on parle, on utilise le subjonctif présent ; si elle est **antérieure** (déjà accomplie), on utilise le subjonctif passé.",
        },
        {
          type: "example",
          title: "Présent ou passé ?",
          content:
            "« Je ne crois pas qu'il **comprenne** » (action simultanée : en ce moment) — « Je ne crois pas qu'il **ait compris** » (action antérieure : c'est déjà fait) — « Il est important que nous **partions** » (à venir) — « Il est important que nous **soyons partis** avant midi » (antérieur à un moment donné).",
        },
        {
          type: "example",
          title: "Après « bien que » et « quoique »",
          content:
            "« **Bien qu'**il **ait beaucoup plu**, le match a été maintenu. » — « **Quoique** tu **aies dit**, je ne change pas d'avis. » — Le fait est réel et passé, mais la concession exige le subjonctif passé.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Tout repose sur les auxiliaires au subjonctif présent. Apprenez ces douze formes par cœur : **que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient** — **que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient**. Avec elles, le subjonctif passé devient mécanique.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer au subjonctif passé",
        description: "Complétez avec le verbe au subjonctif passé.",
        exercises: [
          {
            type: "fill",
            sentence: "Je suis ravi que tu {{1}} à la fête. (venir)",
            answers: ["sois venu"],
            hint: "Verbe de mouvement → auxiliaire « être » au subjonctif.",
            explanation:
              "« Venir » se conjugue avec « être » : « que tu sois venu(e) ».",
          },
          {
            type: "fill",
            sentence:
              "Bien qu'il {{1}} toute la nuit, il a réussi. (travailler)",
            answers: ["ait travaillé"],
            explanation:
              "« Travailler » se conjugue avec « avoir » : « qu'il ait travaillé ».",
          },
          {
            type: "fill",
            sentence:
              "Il est impossible que nous {{1}} avant demain. (finir)",
            answers: ["ayons fini"],
            explanation:
              "« Finir » avec « avoir » au subjonctif : « que nous ayons fini ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Subjonctif présent ou passé ?",
        description:
          "Choisissez la forme qui convient selon le temps de l'action.",
        exercises: [
          {
            type: "fill",
            sentence:
              "Je doute qu'il {{1}} déjà la vérité. (dire, action accomplie)",
            answers: ["ait dit"],
            explanation:
              "Action accomplie → subjonctif passé : « qu'il ait dit ».",
          },
          {
            type: "fill",
            sentence:
              "Je doute qu'il {{1}} la vérité. (dire, en général)",
            answers: ["dise"],
            hint: "Action simultanée, pas encore accomplie.",
            explanation:
              "Action simultanée ou générale → subjonctif présent : « qu'il dise ».",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Comment forme-t-on le subjonctif passé ?",
        options: [
          "Auxiliaire au subjonctif présent + participe passé",
          "Infinitif + participe passé",
          "Auxiliaire à l'imparfait + participe passé",
        ],
        correct: 0,
        explanation:
          "Subjonctif passé = auxiliaire au subjonctif présent (aie, sois...) + participe passé.",
      },
      {
        question: "« Je suis content que tu ___ mon message. » (recevoir, action accomplie)",
        options: ["reçoives", "aies reçu", "sois reçu"],
        correct: 1,
        explanation:
          "« Recevoir » se conjugue avec « avoir » : « que tu aies reçu ».",
      },
      {
        question: "Quand utilise-t-on le subjonctif passé plutôt que le présent ?",
        options: [
          "Pour une action future",
          "Pour une action antérieure au moment où l'on parle",
          "Pour une habitude",
        ],
        correct: 1,
        explanation:
          "Le subjonctif passé exprime une action déjà accomplie au moment du propos principal.",
      },
      {
        question:
          "« Bien que ___ (pleuvoir, passé) tout le week-end, nous sommes sortis. »",
        options: ["il ait plu", "il a plu", "il pleuve"],
        correct: 0,
        explanation:
          "Après « bien que », subjonctif passé pour un fait antérieur : « qu'il ait plu ».",
      },
      {
        question: "Quelle est la forme correcte de « avoir » au subjonctif, 2ᵉ personne du pluriel ?",
        options: ["que vous ayez", "que vous avez", "que vous auriez"],
        correct: 0,
        explanation:
          "« Avoir » au subjonctif présent : « que vous ayez ».",
      },
    ],
  },
  {
    lesson: {
      id: "b2-3",
      slug: "les-connecteurs-logiques-pour-argumenter",
      level: "B2",
      title: "Les connecteurs logiques : structurer un argument",
      objective:
        "Organiser une argumentation écrite et orale avec des connecteurs variés et précis.",
      duration: "13 min",
      blocks: [
        {
          type: "text",
          content:
            "Au niveau B2, la qualité d'un texte se mesure à sa **structure**. Les connecteurs logiques sont les charnières de votre raisonnement : ils annoncent l'ordre, marquent l'opposition, introduisent la conséquence ou la concession. Un texte sans connecteurs est une liste ; un texte bien connecté est une démonstration.",
        },
        {
          type: "rule",
          title: "Annoncer, ordonner, conclure",
          content:
            "Pour structurer : **d'abord / premièrement** · **ensuite / par ailleurs** · **en outre / de plus** · **enfin / en conclusion**. Pour conclure : **en somme** · **tout compte fait** · **en définitive**.",
        },
        {
          type: "rule",
          title: "Opposer et concéder",
          content:
            "L'opposition : **pourtant** · **cependant** · **toutefois** · **néanmoins** · **en revanche**. La concession : **certes... mais** · **bien que + subjonctif** · **même si + indicatif** · **quoique**. Nuance fine : « malgré » et « en dépit de » s'utilisent avec un nom ou un infinitif : « malgré **la pluie** ».",
        },
        {
          type: "rule",
          title: "Causer et conclure",
          content:
            "La cause : **car** · **puisque** · **étant donné que** · **du fait de**. La conséquence : **donc** · **par conséquent** · **ainsi** · **c'est pourquoi** · **de sorte que**. Attention à la ponctuation : « par conséquent » et « en effet » s'encadrent souvent de virgules.",
        },
        {
          type: "example",
          title: "Un paragraphe argumenté modèle",
          content:
            "« **Certes**, le télétravail présente des avantages évidents. **Cependant**, il présente aussi des risques d'isolement. **En outre**, la frontière entre vie professionnelle et vie privée devient floue. **C'est pourquoi** de nombreuses entreprises adoptent aujourd'hui un modèle hybride. **En définitive**, l'équilibre reste à inventer. »",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Ne multipliez pas les connecteurs : deux ou trois par paragraphe suffisent. L'excès alourdit le texte. Choisissez chaque connecteur selon le lien réel entre vos idées, jamais par automatisme.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Choisir le connecteur d'opposition",
        description: "Complétez avec « pourtant », « en revanche » ou « néanmoins ».",
        exercises: [
          {
            type: "fill",
            sentence:
              "Il a beaucoup étudié ; {{1}}, il a échoué à l'examen.",
            answers: ["pourtant"],
            explanation:
              "« Pourtant » marque l'opposition forte entre l'effort et l'échec.",
          },
          {
            type: "fill",
            sentence:
              "Le nord de la France est froid ; {{1}}, le sud est très ensoleillé.",
            answers: ["en revanche"],
            explanation:
              "« En revanche » oppose deux faits de même nature (deux climats).",
          },
        ],
      },
      {
        title: "Exercice 2 — Choisir le connecteur de conséquence",
        description: "Complétez avec « par conséquent », « c'est pourquoi » ou « ainsi ».",
        exercises: [
          {
            type: "fill",
            sentence:
              "Les prix ont augmenté de 20 %. {{1}}, la consommation a baissé.",
            answers: ["Par conséquent"],
            explanation:
              "Conséquence logique directe : « par conséquent ».",
          },
          {
            type: "fill",
            sentence:
              "Elle parle quatre langues ; {{1}}, elle a obtenu ce poste rapidement.",
            answers: ["c'est pourquoi"],
            explanation:
              "« C'est pourquoi » explique le résultat par la cause précédente.",
          },
        ],
      },
      {
        title: "Exercice 3 — Remettre le paragraphe en ordre",
        description:
          "Réordonnez les phrases pour former un paragraphe argumenté cohérent.",
        exercises: [
          {
            type: "order",
            words: [
              "En définitive",
              "il faut rester prudent",
              "d'abord",
              "les résultats sont encourageants",
              "Certes",
              "l'équilibre reste à trouver",
              "Enfin",
              "certains effets restent incertains",
            ],
            correct: [
              "Certes",
              "les résultats sont encourageants",
              "d'abord",
              "certains effets restent incertains",
              "Enfin",
              "il faut rester prudent",
              "En définitive",
              "l'équilibre reste à trouver",
            ],
            explanation:
              "Concession (Certes) → nuances (d'abord, Enfin) → conclusion (En définitive).",
          },
        ],
      },
    ],
    quiz: [
      {
        question:
          "Quel connecteur introduit une concession suivie d'une contre-argumentation ?",
        options: ["donc", "certes", "enfin"],
        correct: 1,
        explanation:
          "« Certes » concède un point avant de le nuancer : « Certes... mais... ».",
      },
      {
        question: "Quelle est la construction correcte de « malgré » ?",
        options: [
          "malgré + verbe conjugué",
          "malgré + nom ou infinitif",
          "malgré + que + indicatif",
        ],
        correct: 1,
        explanation:
          "« Malgré » s'utilise avec un nom ou un infinitif : « malgré la pluie ».",
      },
      {
        question: "Quel connecteur marque une conséquence ?",
        options: ["cependant", "par conséquent", "en outre"],
        correct: 1,
        explanation:
          "« Par conséquent » introduit la conséquence logique d'un fait.",
      },
      {
        question:
          "Pour commencer un second argument dans un même sens, on utilise :",
        options: ["en revanche", "d'abord", "en outre"],
        correct: 2,
        explanation:
          "« En outre » (ou « de plus ») ajoute un argument dans le même sens.",
      },
      {
        question: "Quelle phrase conclut correctement un paragraphe ?",
        options: [
          "En définitive, le bilan est positif.",
          "D'abord, le bilan est positif.",
          "Cependant, le bilan est positif.",
        ],
        correct: 0,
        explanation:
          "« En définitive » conclut un raisonnement ; « d'abord » ouvre, « cependant » oppose.",
      },
    ],
  },
  {
    lesson: {
      id: "b2-4",
      slug: "les-registres-de-langue-et-le-style-soutenu",
      level: "B2",
      title: "Les registres de langue : du courant au soutenu",
      objective:
        "Adapter son français au contexte (familier, courant, soutenu) et enrichir son expression.",
      duration: "13 min",
      blocks: [
        {
          type: "text",
          content:
            "Le français possède plusieurs **registres de langue**. Choisir le bon registre est une compétence de niveau B2 : on ne parle pas à un ami comme on écrit une lettre de motivation. Le registre **courant** est celui de la vie quotidienne ; le registre **soutenu** est celui de l'écrit formel, des discours et des examens comme le DELF B2 ou C1 ; le registre **familier** est réservé aux proches.",
        },
        {
          type: "rule",
          title: "Les substitutions courantes",
          content:
            "**boulot → travail** · **gamins → enfants** · **fric → argent** · **bagnole → voiture** · **bouffer → manger**. À l'inverse, pour élever le niveau : « obtenir » remplace « avoir » (un poste), « demeurer » remplace « rester », « solliciter » remplace « demander », « néanmoins » remplace « mais ».",
        },
        {
          type: "example",
          title: "La même idée dans deux registres",
          content:
            "Familier : « Je cherche un **boulot** parce que je n'ai plus de **fric**. » — Soutenu : « Je **recherche un emploi** car je manque de **ressources financières**. » — Le registre soutenu précise et élève ; le familier abrège et relâche.",
        },
        {
          type: "text",
          content:
            "La **négation familière** omet le « ne » : « je sais pas », « c'est pas grave ». À l'écrit et à l'oral formel, le « ne » est **obligatoire**. De même, la question familière joue de l'intonation (« Tu viens ? »), la question courante utilise « est-ce que » ou l'inversion, et la question soutenue privilégie l'inversion : « Viendriez-vous ? »",
        },
        {
          type: "rule",
          title: "Les registres en résumé",
          content:
            "**Familier** : « ne » omis, vocabulaire relâché, questions par intonation — entre amis. **Courant** : « ne » maintenu, vocabulaire standard — vie quotidienne, travail. **Soutenu** : inversion dans les questions, connecteurs riches, vocabulaire précis — écrit formel, examens, discours.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Pour le DELF B2 et la vie professionnelle, entraînez-vous à reformuler : prenez une phrase familière et élevez-la au registre soutenu. « C'est pas grave » → « Cela n'a guère d'importance ». « Il veut pas venir » → « Il ne souhaite pas se joindre à nous ». Cinq minutes d'exercice par jour transforment votre expression.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Du familier au courant",
        description: "Remplacez le mot familier par son équivalent courant.",
        exercises: [
          {
            type: "fill",
            sentence: "Je cherche un {{1}} pour cet été. (boulot)",
            answers: ["travail"],
            explanation: "« Boulot » (familier) → « travail » (courant).",
          },
          {
            type: "fill",
            sentence: "Les {{1}} jouent dans le jardin. (gamins)",
            answers: ["enfants"],
            explanation: "« Gamins » (familier) → « enfants » (courant).",
          },
        ],
      },
      {
        title: "Exercice 2 — Du courant au soutenu",
        description: "Élevez la phrase au registre soutenu en remplaçant le verbe.",
        exercises: [
          {
            type: "fill",
            sentence: "Je {{1}} votre aide. (demander, registre soutenu)",
            answers: ["sollicite"],
            explanation: "« Solliciter » est le verbe soutenu pour « demander ».",
          },
          {
            type: "fill",
            sentence:
              "Il {{1}} à Paris depuis dix ans. (habiter, registre soutenu)",
            answers: ["réside"],
            hint: "Synonyme soutenu d'« habiter ».",
            explanation: "« Résider » est le verbe soutenu : « il réside à Paris ».",
          },
        ],
      },
      {
        title: "Exercice 3 — Associer les registres",
        description: "Reliez chaque expression à son registre de langue.",
        exercises: [
          {
            type: "match",
            instruction: "Associez chaque expression à son registre de langue.",
            pairs: [
              { left: "C'est pas grave", right: "familier" },
              { left: "Ce n'est pas grave", right: "courant" },
              { left: "Cela n'a guère d'importance", right: "soutenu" },
              { left: "Viendriez-vous nous rejoindre ?", right: "soutenu" },
            ],
            explanation:
              "La même idée s'exprime différemment selon le registre : le « ne », le vocabulaire et la structure de la question changent.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Dans quel contexte le registre soutenu est-il indispensable ?",
        options: [
          "Une conversation entre amis",
          "Un courriel professionnel ou un examen",
          "Un message rapide sur téléphone",
        ],
        correct: 1,
        explanation:
          "L'écrit formel (lettres, courriels professionnels, examens) exige le registre soutenu.",
      },
      {
        question: "« Bagnole » au registre courant signifie :",
        options: ["maison", "voiture", "bureau"],
        correct: 1,
        explanation: "« Bagnole » (familier) → « voiture » (courant).",
      },
      {
        question: "Quelle forme de question est soutenue ?",
        options: [
          "Tu viens avec nous ?",
          "Est-ce que tu viens avec nous ?",
          "Viendriez-vous avec nous ?",
        ],
        correct: 2,
        explanation:
          "L'inversion du sujet (« Viendriez-vous ») et le vouvoiement marquent le registre soutenu.",
      },
      {
        question: "À l'écrit formel, que fait-on du « ne » de la négation ?",
        options: [
          "On l'omet systématiquement",
          "On le maintient obligatoirement",
          "C'est au choix du lecteur",
        ],
        correct: 1,
        explanation:
          "À l'écrit et à l'oral formel, le « ne » est obligatoire : « je ne sais pas ».",
      },
      {
        question: "Quel verbe soutenu remplace « rester » ?",
        options: ["demeurer", "squatter", "traîner"],
        correct: 0,
        explanation: "« Demeurer » est le synonyme soutenu de « rester ».",
      },
    ],
  },
];
