/**
 * FrançaisFacile+ — Contenu pédagogique Niveaux B2+ et C1 (Avancé / Expert)
 * Précision grammaticale validée, ton professoral et bienveillant.
 */
import type { LessonData } from "./types";

export const lessonsC1: LessonData[] = [
  {
    lesson: {
      id: "c1-1",
      slug: "registre-soutenu",
      level: "B2+",
      title: "Le registre soutenu : parler comme un natif cultivé",
      objective:
        "Élever votre registre de langue : constructions soutenues, inversion du sujet, expressions littéraires.",
      duration: "20 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **registre soutenu** est la langue de la presse de qualité, des discours et de la littérature. Le passer, c'est montrer que vous **maîtrisez** le français — pas seulement que vous le connaissez. La bonne nouvelle : les mécanismes sont limités en nombre.",
        },
        {
          type: "rule",
          title: "L'inversion du sujet interrogatif",
          content:
            "Au registre soutenu, la question s'inverse : « **Que pensez-vous** de cette mesure ? » (au lieu de « Qu'est-ce que vous pensez de... »). Au passé composé : « **A-t-il** terminé son rapport ? » Le « t » euphonique apparaît entre le verbe et « il/elle » quand le verbe se termine par une voyelle.",
        },
        {
          type: "example",
          title: "Vocabulaire soutenu courant",
          content:
            "« **Toutefois** » (mais), « **en outre** » (de plus), « **néanmoins** » (cependant), « **demeurer** » (rester), « **recourir à** » (utiliser), « **s'avérer** » (se révéler), « **souhaiter** » (vouloir), « **dès lors** » (donc). Une phrase courante devient élégante : « Il faut utiliser ce moyen » → « Il **convient de recourir à** ce moyen ».",
        },
        {
          type: "rule",
          title: "Le conditionnel passé 2e forme et le subjonctif imparfait",
          content:
            "Très littéraire : « **Eût-il su**, il serait venu » (= s'il avait su) · « **Fût-elle** restée, tout aurait changé » (= si elle était restée). Vous les rencontrerez en lecture ; les utiliser à l'écrit est un marqueur fort d'un très bon niveau.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Dosez le registre : à l'oral quotidien, le soutenu excessif paraît affecté. Réservez ces formes pour l'**écrit formel** (lettre, dissertation, rapport) et l'oral protocolaire. L'aisance, c'est savoir **choisir** son registre.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Réécrire au registre soutenu",
        description: "Transformez la phrase courante en phrase soutenue.",
        exercises: [
          {
            type: "order",
            words: ["recourir", "Il", "ce", "convient", "moyen.", "de", "à"],
            correct: ["Il", "convient", "de", "recourir", "à", "ce", "moyen."],
            hint: "« Il faut utiliser ce moyen » → « il convient de recourir à... »",
            explanation:
              "« Il convient de » (il faut) + « recourir à » (utiliser) élève le registre de la phrase.",
          },
          {
            type: "order",
            words: ["advenait", "Il", "que", "?", "se", "demandait", "s'il", "cela"],
            correct: ["Il", "se", "demandait", "s'il", "advenait", "que", "cela", "?"],
            hint: "Forme indirecte : pas d'inversion dans une question rapportée.",
            explanation:
              "Phrase correcte : « Il se demandait s'il advenait que cela arrive » — on garde la forme indirecte, plus naturelle au registre soutenu que l'inversion.",
          },
        ],
      },
      {
        title: "Exercice 2 — Le « t » euphonique",
        description: "Complétez la question inversée avec la bonne forme.",
        exercises: [
          {
            type: "fill",
            sentence: "{{1}}-il terminé son discours ? (avoir)",
            answers: ["a"],
            hint: "Le verbe se termine par une voyelle, « il » suit.",
            explanation:
              "« A » finit par une voyelle : on ajoute le « t » euphonique — « A-t-il terminé son discours ? »",
          },
          {
            type: "fill",
            sentence: "{{1}}-t-il raison ? (avoir, au présent)",
            answers: ["a"],
            explanation:
              "Même mécanisme : « A-t-il raison ? » Le « t » n'est pas du verbe, il relie seulement.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle forme est du registre soutenu ?",
        options: [
          "Qu'est-ce que tu en penses ?",
          "Que pensez-vous de cette mesure ?",
          "T'en penses quoi ?",
        ],
        correct: 1,
        explanation:
          "L'inversion du sujet (« Que pensez-vous ») est la marque du registre soutenu. La première est courante, la troisième familière.",
      },
      {
        question: "Comment dit-on « mais » au registre soutenu ?",
        options: ["Toutefois", "Alors", "Donc"],
        correct: 0,
        explanation:
          "« Toutefois » (= mais, cependant) est soutenu. « Alors » et « donc » sont courants.",
      },
      {
        question: "Quelle phrase contient le « t » euphonique correct ?",
        options: [
          "At-il fini ?",
          "A-t-il fini ?",
          "A til fini ?",
        ],
        correct: 1,
        explanation:
          "Le « t » euphonique s'encadre de traits d'union : « A-t-il fini ? » Il ne fait pas partie du verbe.",
      },
      {
        question: "« S'avérer » signifie :",
        options: ["Se tromper", "Se révéler", "S'arrêter"],
        correct: 1,
        explanation:
          "« S'avérer » = se révéler, se montrer vrai : « Cette hypothèse s'est avérée exacte. »",
      },
    ],
  },
  {
    lesson: {
      id: "c1-2",
      slug: "discours-argumente",
      level: "B2+",
      title: "L'argumentation structurée : convaincre par écrit",
      objective:
        "Construire un texte argumentatif solide : thèse, connecteurs d'articulation, concessions et réfutations.",
      duration: "20 min",
      blocks: [
        {
          type: "text",
          content:
            "Au niveau B2+ et C1, on attend de vous la capacité à **tenir un raisonnement** : défendre une position, nuancer, concéder, réfuter. C'est le cœur du DALF C1 (production écrite) et de la vie universitaire française. Voici les outils.",
        },
        {
          type: "rule",
          title: "L'articulation du texte",
          content:
            "**Introduction** : contexte → problématique → annonce du plan. **Développement** : chaque paragraphe = un argument + un exemple. **Conclusion** : synthèse + ouverture. Les connecteurs structurent tout : « Dans un premier temps », « Par ailleurs », « En revanche », « Il convient de souligner que ».",
        },
        {
          type: "example",
          title: "La concession et la réfutation",
          content:
            "« **Certes**, les réseaux sociaux dispersent l'attention ; **toutefois**, ils demeurent un formidable outil de mobilisation citoyenne. » La concession (« certes », « il est vrai que ») montre que vous voyez les deux côtés ; la réfutation (« toutefois », « néanmoins ») rétablit votre thèse. C'est la signature d'un esprit mature.",
        },
        {
          type: "rule",
          title: "Les verbes d'opinion nuancés",
          content:
            "Au lieu de « je pense » répété : « **j'estime que** », « **je soutiens que** », « **il me semble que** », « **force est de constater que** », « **tout porte à croire que** ». À l'inverse, pour rapporter l'opinion adverse : « ses détracteurs objectent que », « les critiques soulignent que ».",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Lisez un éditorial de presse par semaine (Le Monde, Courrier international) et relevez **trois connecteurs** et **deux tournures** que vous ne connaissiez pas. En six semaines, votre écrit argumenté sera méconnaissable.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Associer connecteurs et fonctions",
        description: "Reliez chaque connecteur à sa fonction dans l'argumentation.",
        exercises: [
          {
            type: "match",
            instruction: "Associez chaque connecteur à sa fonction.",
            pairs: [
              { left: "Certes", right: "Concession" },
              { left: "Par ailleurs", right: "Addition" },
              { left: "En revanche", right: "Opposition" },
              { left: "Dès lors", right: "Conséquence" },
            ],
            explanation:
              "« Certes » concède un point à l'adversaire ; « par ailleurs » ajoute un argument ; « en revanche » oppose ; « dès lors » introduit la conséquence logique.",
          },
        ],
      },
      {
        title: "Exercice 2 — Compléter l'articulation",
        description: "Complétez le paragraphe argumentatif avec le bon connecteur.",
        exercises: [
          {
            type: "fill",
            sentence: "{{1}}, le télétravail favorise l'autonomie des salariés ; {{2}}, il peut isoler ceux qui en ont besoin le plus.",
            answers: ["certes", "en revanche"],
            hint: "Première proposition : concession. Deuxième : opposition.",
            explanation:
              "« Certes » ouvre la concession, « en revanche » introduit l'opposant : la structure concession-réfutation classique.",
          },
          {
            type: "fill",
            sentence: "La fracture numérique s'aggrave. {{1}}, les politiques publiques doivent s'adapter.",
            answers: ["dès lors", "par conséquent", "de ce fait"],
            explanation:
              "« Dès lors » (ou « par conséquent ») marque la conséquence : l'aggravation appelle l'action publique.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle structure caractérise une bonne introduction argumentative ?",
        options: [
          "Exemple → exemple → opinion",
          "Contexte → problématique → annonce du plan",
          "Conclusion d'abord, pour surprendre",
        ],
        correct: 1,
        explanation:
          "L'introduction française classique : poser le contexte, formuler la problématique, annoncer le plan. La clarté prime sur la surprise.",
      },
      {
        question: "Dans « Certes X ; toutefois Y », que représente Y ?",
        options: [
          "La concession",
          "La thèse rétablie après concession",
          "Un exemple",
        ],
        correct: 1,
        explanation:
          "« Certes » concède (X), « toutefois » rétablit la thèse de l'auteur (Y). C'est la concession-réfutation.",
      },
      {
        question: "Comment remplacer élégamment « je pense que » à l'écrit ?",
        options: [
          "Je crois que",
          "J'estime que",
          "Moi, je dis que",
        ],
        correct: 1,
        explanation:
          "« J'estime que » (ou « je soutiens que ») élève le registre. « Je crois que » reste courant ; « moi, je dis que » est familier.",
      },
      {
        question: "Quel connecteur exprime l'addition d'un argument ?",
        options: ["En revanche", "Par ailleurs", "Certes"],
        correct: 1,
        explanation:
          "« Par ailleurs » ajoute un argument du même camp. « En revanche » oppose, « certes » concède.",
      },
    ],
  },
  {
    lesson: {
      id: "c1-3",
      slug: "nuances-lexicales",
      level: "C1",
      title: "Les nuances lexicales : le vocabulaire de précision",
      objective:
        "Distinguer les synonymes proches (peur/crainte/angoisse, dire/affirmer/prétendre) et choisir le mot exact.",
      duration: "18 min",
      blocks: [
        {
          type: "text",
          content:
            "La différence entre un bon français et un français **excellent**, c'est la précision lexicale. Deux mots presque synonymes ne sont jamais tout à fait interchangeables : chacun porte une nuance d'intensité, de registre ou de contexte.",
        },
        {
          type: "rule",
          title: "La gradation des synonymes",
          content:
            "**Dire** (neutre) → **affirmer** (avec force) → **prétendre** (sans preuve, parfois douteux) → **soutenir** (avec arguments) → **alléguer** (juridique, douteux). Même logique : **vouloir** → **souhaiter** → **aspirer à** · **peur** → **crainte** → **appréhension** → **angoisse** · **grand** → **vaste** (espace) → **immense**.",
        },
        {
          type: "example",
          title: "Collocations : les mots qui vont ensemble",
          content:
            "Certains mots s'attirent : on « **prend** une décision », on « **porte** un jugement », on « **lève** une hypothèse » mais on « **formule** une hypothèse » (les deux existent, sens différents), on « **mène** une enquête » et on « **dépose** une plainte ». Apprendre les collocations vaut mieux qu'apprendre des mots isolés.",
        },
        {
          type: "rule",
          title: "Les registres à ne pas mélanger",
          content:
            "« **Bouffer** » (familier) ≠ « manger » ≠ « se restaurer » (soutenu). « **Un mec** » ≠ « un homme » ≠ « un individu ». Dans un écrit formel, un seul mot familier peut décrédibiliser tout le texte. Vérifiez toujours le registre de vos nouveaux mots dans le dictionnaire.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Quand vous apprenez un mot nouveau, notez toujours **deux informations avec lui** : son registre (familier / courant / soutenu) et un exemple de phrase. Un mot sans contexte est un mot perdu.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Choisir le mot exact",
        description: "Complétez avec le mot qui convient le mieux au registre.",
        exercises: [
          {
            type: "fill",
            sentence: "L'avocat a {{1}} que son client était innocent. (affirmer / bouffer / prétendre, registre soutenu avec force)",
            answers: ["affirmé"],
            hint: "Le registre est soutenu (un avocat, un tribunal), avec force de conviction.",
            explanation:
              "« Affirmer » : dire avec force et certitude, registre soutenu. « Prétendre » laisserait un doute ; « bouffer » est hors sujet.",
          },
          {
            type: "fill",
            sentence: "Une vague d'{{1}} l'envahit avant l'examen. (peur / angoisse / crainte, la plus intense)",
            answers: ["angoisse"],
            explanation:
              "« Angoisse » est la plus intense des trois : une anxiété profonde et oppressante, typique avant un examen important.",
          },
        ],
      },
      {
        title: "Exercice 2 — Les collocations",
        description: "Reliez chaque verbe au complément qui l'accompagne naturellement.",
        exercises: [
          {
            type: "match",
            instruction: "Associez chaque verbe à son complément naturel.",
            pairs: [
              { left: "Prendre", right: "une décision" },
              { left: "Mener", right: "une enquête" },
              { left: "Déposer", right: "une plainte" },
              { left: "Porter", right: "un jugement" },
            ],
            explanation:
              "Ce sont les collocations fixes du français : on prend une décision, on mène une enquête, on dépose une plainte, on porte un jugement.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quel mot introduit un doute sur la véracité ?",
        options: ["Affirmer", "Prétendre", "Soutenir"],
        correct: 1,
        explanation:
          "« Prétendre » = dire sans (suffisamment de) preuves, parfois faussement : « Il prétend être médecin. » « Affirmer » et « soutenir » marquent la conviction.",
      },
      {
        question: "Quelle est la gradation correcte de l'intensité ?",
        options: [
          "Angoisse → crainte → peur",
          "Peur → crainte → angoisse",
          "Crainte → angoisse → peur",
        ],
        correct: 1,
        explanation:
          "La gradation croissante : peur (émotion de base) → crainte (inquiétude durable) → angoisse (état oppressant profond).",
      },
      {
        question: "On dit « ___ une décision » :",
        options: ["Mener", "Prendre", "Déposer"],
        correct: 1,
        explanation:
          "La collocation fixe est « prendre une décision ». « Mener » s'applique à une enquête, « déposer » à une plainte.",
      },
      {
        question: "Dans un rapport formel, quel mot choisir pour « manger » ?",
        options: ["Bouffer", "Se restaurer", "Bouloter"],
        correct: 1,
        explanation:
          "« Se restaurer » est le registre soutenu. « Bouffer » et « bouloter » sont familiers, à proscrire à l'écrit formel.",
      },
    ],
  },
  {
    lesson: {
      id: "c1-4",
      slug: "synthese-de-documents",
      level: "C1",
      title: "La synthèse de documents : l'exercice roi du DALF C1",
      objective:
        "Maîtriser la synthèse écrite : croiser plusieurs sources, reformuler sans citer, produire un texte organisé de 250 mots.",
      duration: "22 min",
      blocks: [
        {
          type: "text",
          content:
            "La **synthèse de documents** est l'épreuve la plus distinctive du DALF C1 : à partir de trois ou quatre textes sur un thème, produire un texte organisé d'environ **250 mots** qui croise les idées — sans donner votre avis. C'est un exercice de lecture, de tri et de reformulation.",
        },
        {
          type: "rule",
          title: "La méthode en quatre temps",
          content:
            "1. **Lire** tous les documents en relevant les idées de chacun (notez : doc. 1 = ..., doc. 2 = ...). 2. **Confronter** : regroupez les idées communes, opposez les idées divergentes — c'est le plan. 3. **Reformuler** chaque idée avec vos mots (interdiction de copier). 4. **Rédiger** : introduction (thème + problématique), développement en deux ou trois parties, conclusion de synthèse. Comptez 1h30 à l'examen.",
        },
        {
          type: "example",
          title: "Exemple de confrontation",
          content:
            "Si le doc. 1 et le doc. 3 soutiennent que le télétravail améliore la qualité de vie, tandis que le doc. 2 souligne l'isolement professionnel, votre plan croise : I. Les bénéfices du télétravail (docs 1 et 3) ; II. Les limites et risques (doc. 2). Vous ne juxtaposez pas les documents : vous les **faites dialoguer**.",
        },
        {
          type: "rule",
          title: "Les verbes de reformulation",
          content:
            "« L'auteur **souligne** que... », « Le premier document **met en évidence**... », « Le troisième texte **nuance** ce propos en rappelant... », « Ces deux sources **convergent** vers l'idée que... ». Utilisez un verbe différent à chaque reprise pour éviter la répétition mécanique de « dit ».",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Le piège classique : donner votre opinion. La synthèse est **objective** — votre avis n'a sa place nulle part. Gardez votre opinion pour la seconde épreuve (l'essai argumenté). Entraînez-vous avec deux documents seulement au début : la synthèse à quatre sources viendra naturellement.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Identifier les idées communes",
        description: "À partir de trois opinions fictives, regroupez les idées communes.",
        exercises: [
          {
            type: "match",
            instruction:
              "Associez chaque idée à la(les) source(s) qui la défend(ent).",
            pairs: [
              { left: "Le télétravail augmente l'autonomie", right: "Source A et C" },
              { left: "Le télétravail isole les salariés", right: "Source B" },
              { left: "Le télétravail réduit les déplacements", right: "Source A" },
              { left: "Le télétravail exige une forte discipline", right: "Source C" },
            ],
            explanation:
              "La confrontation des sources révèle les convergences (autonomie : A et C) et les divergences (isolement : seule B). C'est le squelette du plan.",
          },
        ],
      },
      {
        title: "Exercice 2 — Reformuler sans citer",
        description: "Choisissez la reformulation fidèle (sans copier les mots).",
        exercises: [
          {
            type: "fill",
            sentence:
              "Phrase source : « Les réseaux sociaux accentuent la polarisation des débats publics. » Reformulation correcte : « Les plateformes numériques {{1}} les clivages dans les discussions publiques. »",
            answers: ["renforcent", "accentuent", "amplifient", "intensifient", "durcissent", "aggravent", "exacerbent"],
            hint: "Trouvez un synonyme de « accentuer » qui convient au registre.",
            explanation:
              "« Renforcent », « amplifient », « exacerbent »... : reformuler, c'est garder le sens en changeant le vocabulaire et la structure.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle est la longueur attendue d'une synthèse au DALF C1 ?",
        options: ["100 mots", "250 mots", "500 mots"],
        correct: 1,
        explanation:
          "Environ 250 mots : assez pour croiser les idées, assez court pour exiger la concision. Dépasser largement coûte des points.",
      },
      {
        question: "La synthèse de documents doit-elle contenir votre opinion ?",
        options: [
          "Oui, c'est son intérêt",
          "Non, elle est objective",
          "Uniquement dans la conclusion",
        ],
        correct: 1,
        explanation:
          "La synthèse est strictement objective : elle croise les documents sans jugement personnel. Votre opinion est réservée à l'essai.",
      },
      {
        question: "Quelle est la première étape de la méthode ?",
        options: [
          "Rédiger directement",
          "Lire et relever les idées de chaque document",
          "Choisir un titre accrocheur",
        ],
        correct: 1,
        explanation:
          "D'abord lire tous les documents en relevant les idées de chacun : sans ce relevé, impossible de confronter et de planifier.",
      },
      {
        question: "« Ces deux sources convergent vers l'idée que... » exprime :",
        options: ["Une opposition", "Une idée commune aux deux sources", "Un doute"],
        correct: 1,
        explanation:
          "« Converger » = aller dans le même sens : les deux sources défendent la même idée. C'est le verbe clé de la confrontation.",
      },
    ],
  },
];
