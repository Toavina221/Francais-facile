/**
 * FrançaisFacile+ — Contenu pédagogique Niveau A1 (Débutant)
 * Précision grammaticale validée, ton professoral et bienveillant.
 */
import type { LessonData } from "./types";

export const lessonsA1: LessonData[] = [
  {
    lesson: {
      id: "a1-1",
      slug: "les-articles-definis-indefinis",
      level: "A1",
      title: "Les articles définis et indéfinis",
      objective:
        "Savoir choisir entre « le, la, les » et « un, une, des » devant un nom.",
      duration: "10 min",
      blocks: [
        {
          type: "text",
          content:
            "En français, **tout nom est presque toujours accompagné d'un article**. C'est l'une des premières choses à maîtriser : l'article nous renseigne sur le **genre** (masculin ou féminin) et le **nombre** (singulier ou pluriel) du nom.",
        },
        {
          type: "text",
          content:
            "Il existe deux familles d'articles. Les **articles indéfinis** présentent quelque chose de manière générale, comme si on le découvrait pour la première fois. Les **articles définis** désignent quelque chose de précis, de déjà connu.",
        },
        {
          type: "rule",
          title: "La règle essentielle",
          content:
            "**Un / Une / Des** = on ne sait pas exactement lequel (c'est n'importe quel objet de cette catégorie). **Le / La / Les** = on sait exactement de quoi on parle.",
        },
        {
          type: "example",
          title: "Comparez les deux phrases",
          content:
            "« J'ai acheté **un** livre. » (on ne sait pas lequel, c'est un livre parmi d'autres) — « **Le** livre est sur la table. » (le livre précis dont nous parlons).",
        },
        {
          type: "text",
          content:
            "Attention au pluriel : au pluriel, les deux familles se rejoignent en apparence mais pas en sens. « **Des** livres » = plusieurs livres, peu importe lesquels. « **Les** livres » = les livres précis dont il est question.",
        },
        {
          type: "tip",
          title: "Un piège à éviter",
          content:
            "En français, le genre d'un objet n'est pas logique : **une** table (féminin) mais **un** bureau (masculin). Apprenez toujours le nom **avec** son article : ce n'est pas « table », c'est « une table ». C'est l'habitude des bons apprenants.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Choisir le bon article",
        description: "Complétez chaque phrase avec l'article qui convient.",
        exercises: [
          {
            type: "fill",
            sentence: "C'est {{1}} livre très intéressant.",
            answers: ["un"],
            hint: "On parle d'un livre en général.",
            explanation:
              "On utilise « un » car on présente un livre de manière générale, sans préciser lequel.",
          },
          {
            type: "fill",
            sentence: "{{1}} table est dans la cuisine.",
            answers: ["La"],
            hint: "Il s'agit de la table précise de la cuisine.",
            explanation:
              "On utilise « La » car on parle de la table précise située dans la cuisine.",
          },
          {
            type: "fill",
            sentence: "J'ai vu {{1}} chat noir dans le jardin.",
            answers: ["un"],
            explanation:
              "« Un » : on présente un chat parmi d'autres, on ne l'a jamais vu avant.",
          },
          {
            type: "fill",
            sentence: "{{1}} enfants jouent dans la cour.",
            answers: ["Les"],
            hint: "Ce sont les enfants précis de l'école.",
            explanation:
              "« Les » : on parle des enfants précis de la cour, pas d'enfants en général.",
          },
        ],
      },
      {
        title: "Exercice 2 — Associer le genre",
        description: "Reliez chaque nom à son article correct.",
        exercises: [
          {
            type: "match",
            instruction: "Associez chaque nom à son article.",
            pairs: [
              { left: "café", right: "un" },
              { left: "maison", right: "une" },
              { left: "école", right: "une" },
              { left: "ordinateur", right: "un" },
            ],
            explanation:
              "« Café » et « ordinateur » sont masculins ; « maison » et « école » sont féminins. Apprenez-les avec leur article !",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quel article utilise-t-on devant « maison » ?",
        options: ["un", "une", "le"],
        correct: 1,
        explanation:
          "« Maison » est un nom féminin, donc on dit « une maison » au singulier indéfini, ou « la maison » au défini.",
      },
      {
        question: "« J'ai mangé ___ pomme. » Quel article manque ?",
        options: ["le", "des", "une"],
        correct: 2,
        explanation:
          "On présente une pomme en général : il faut l'article indéfini féminin « une ».",
      },
      {
        question: "Quel est le pluriel de « un livre » ?",
        options: ["les livre", "des livres", "un livres"],
        correct: 1,
        explanation:
          "Le pluriel de « un » est « des », et le nom prend un « s » : « des livres ».",
      },
      {
        question: "Quand utilise-t-on « le, la, les » ?",
        options: [
          "Pour présenter quelque chose de nouveau",
          "Pour désigner quelque chose de précis et connu",
          "Uniquement au pluriel",
        ],
        correct: 1,
        explanation:
          "Les articles définis « le, la, les » désignent des éléments précis, déjà identifiés.",
      },
      {
        question: "« ___ étudiants sont dans la classe. » (on parle de tous les étudiants du cours)",
        options: ["Un", "Des", "Les"],
        correct: 2,
        explanation:
          "On parle des étudiants précis du cours : article défini pluriel « Les ».",
      },
    ],
  },
  {
    lesson: {
      id: "a1-2",
      slug: "le-present-des-verbes-er",
      level: "A1",
      title: "Le présent : les verbes en -er",
      objective:
        "Conjuguer au présent les verbes du 1er groupe (parler, manger, travailler...).",
      duration: "12 min",
      blocks: [
        {
          type: "text",
          content:
            "Le présent de l'indicatif sert à exprimer une **action qui se déroule maintenant**, une habitude ou une vérité générale. C'est le temps le plus utilisé en français, et heureusement : les verbes les plus réguliers y suivent un modèle simple.",
        },
        {
          type: "text",
          content:
            "Les verbes en **-er** (comme *parler*, *travailler*, *manger*) forment le **1er groupe**, le plus grand de la langue française : plus de 90 % des verbes ! Ils suivent tous la même mécanique.",
        },
        {
          type: "rule",
          title: "La mécanique de conjugaison",
          content:
            "1. Prenez l'**infinitif** (parler). 2. Retirez la terminaison **-er** pour obtenir le **radical** (parl-). 3. Ajoutez les terminaisons : **-e, -es, -e, -ons, -ez, -ent**.",
        },
        {
          type: "example",
          title: "Le verbe « parler » conjugué",
          content:
            "je parl**e** · tu parl**es** · il/elle parl**e** · nous parl**ons** · vous parl**ez** · ils/elles parl**ent**. Remarque : le « -ent » de « ils parlent » est **muet** : il se prononce comme « je parle » !",
        },
        {
          type: "text",
          content:
            "Le verbe *manger* a une petite particularité : à « nous », il devient « nous mang**e**ons » (on garde le « e » pour que le « g » se prononce [ʒ]). Sans ce « e », « mangons » se prononcerait [mɑ̃gɔ̃].",
        },
        {
          type: "tip",
          title: "L'astuce du professeur",
          content:
            "Apprenez d'abord « je, tu, il » (les trois formes au singulier se prononcent souvent pareil), puis « nous » et « vous », et enfin « ils ». Parlez à voix haute : la prononciation est le meilleur mémoire de la conjugaison.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer au présent",
        description: "Conjuguez le verbe entre parenthèses au présent.",
        exercises: [
          {
            type: "fill",
            sentence: "Je {{1}} français avec mes amis. (parler)",
            answers: ["parle"],
            explanation:
              "Première personne du singulier : radical « parl- » + « -e » → « je parle ».",
          },
          {
            type: "fill",
            sentence: "Nous {{1}} à Paris. (habiter)",
            answers: ["habitons"],
            explanation:
              "« Nous » prend la terminaison « -ons » : « nous habitons ».",
          },
          {
            type: "fill",
            sentence: "Vous {{1}} bien le français ! (parler)",
            answers: ["parlez"],
            explanation:
              "« Vous » prend la terminaison « -ez » : « vous parlez ».",
          },
          {
            type: "fill",
            sentence: "Ils {{1}} au restaurant le dimanche. (manger)",
            answers: ["mangent"],
            explanation:
              "« Ils » prend la terminaison « -ent » (muette) : « ils mangent ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Remettre la phrase en ordre",
        description: "Réordonnez les mots pour former une phrase correcte.",
        exercises: [
          {
            type: "order",
            words: ["parlons", "français", "Nous", "le"],
            correct: ["Nous", "parlons", "le", "français"],
            explanation:
              "La structure française est Sujet + Verbe + Complément : « Nous parlons le français ».",
          },
          {
            type: "order",
            words: ["mange", "Marie", "une", "pomme"],
            correct: ["Marie", "mange", "une", "pomme"],
            explanation:
              "Sujet (Marie) + verbe (mange) + complément (une pomme).",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "« Tu ___ anglais. » (étudier) Quelle est la bonne forme ?",
        options: ["étudie", "étudies", "étudiez"],
        correct: 1,
        explanation:
          "Avec « tu », la terminaison est « -es » : « tu étudies ».",
      },
      {
        question: "Quelle terminaison utilise-t-on avec « nous » ?",
        options: ["-e", "-ons", "-ez"],
        correct: 1,
        explanation:
          "« Nous » se conjugue avec « -ons » : « nous parlons », « nous mangeons ».",
      },
      {
        question: "Comment se prononce « ils parlent » ?",
        options: [
          "comme « ils parlent » avec le T final prononcé",
          "comme « je parle »",
          "comme « ils parlons »",
        ],
        correct: 1,
        explanation:
          "Le « -ent » de la 3ᵉ personne du pluriel est toujours muet : « ils parlent » se prononce exactement comme « je parle ».",
      },
      {
        question: "Pourquoi écrit-on « nous mangeons » et non « nous mangons » ?",
        options: [
          "C'est une faute d'orthographe d'écrire « mangons »",
          "Le « e » garde la prononciation douce [ʒ] du « g »",
          "Pour faire joli",
        ],
        correct: 1,
        explanation:
          "Le « e » maintient la prononciation [mɑ̃ʒɔ̃]. Sans lui, le « g » devant « o » se prononcerait dur : [mɑ̃gɔ̃].",
      },
      {
        question: "Quel est le radical du verbe « travailler » ?",
        options: ["travaill-", "travailler-", "travail-"],
        correct: 0,
        explanation:
          "On retire la terminaison « -er » de l'infinitif : « travaill- ».",
      },
    ],
  },
  {
    lesson: {
      id: "a1-3",
      slug: "se-presenter",
      level: "A1",
      title: "Se présenter : je suis, j'ai, j'habite",
      objective:
        "Savoir se présenter : dire son nom, son âge, sa nationalité et son lieu de vie.",
      duration: "10 min",
      blocks: [
        {
          type: "text",
          content:
            "Se présenter est la toute première conversation en français. Elle repose sur **trois verbes essentiels** : *être* (je suis), *avoir* (j'ai) et *habiter* (j'habite). Ces verbes reviennent dans presque toutes les conversations.",
        },
        {
          type: "rule",
          title: "Les trois phrases de base",
          content:
            "**Je m'appelle...** (mon nom) — **J'ai ... ans** (mon âge, avec « avoir », jamais « être » !) — **J'habite à...** (ma ville, avec « à » devant les villes).",
        },
        {
          type: "text",
          content:
            "Attention à un piège classique : en français, l'âge s'exprime avec **avoir**, pas avec être. On ne dit jamais « je suis 25 ans » mais « **j'ai 25 ans** ». La même logique vaut pour « j'ai faim », « j'ai soif », « j'ai peur ».",
        },
        {
          type: "example",
          title: "Un exemple complet",
          content:
            "« Bonjour ! Je m'appelle Amina. J'ai 24 ans. Je suis algérienne. J'habite à Alger et je travaille dans un hôpital. Enchantée ! »",
        },
        {
          type: "text",
          content:
            "Pour les nationalités, l'adjectif s'accorde : un homme dit « je suis **marocain** », une femme dit « je suis **marocaine** ». Le « e » final marque le féminin.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Préparez votre présentation par écrit, puis dites-la à voix haute chaque matin pendant une semaine. L'oral devient naturel quand la phrase est déjà « habitée ».",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Compléter sa présentation",
        description: "Choisissez le bon verbe pour compléter chaque phrase.",
        exercises: [
          {
            type: "fill",
            sentence: "Je {{1}} 30 ans. (avoir)",
            answers: ["ai"],
            explanation:
              "En français, l'âge s'exprime avec « avoir » : « j'ai 30 ans ».",
          },
          {
            type: "fill",
            sentence: "Je {{1}} à Dakar. (habiter)",
            answers: ["habite"],
            hint: "Verbe du 1er groupe, 1ʳᵉ personne du singulier.",
            explanation:
              "« Habiter » est un verbe en -er : « j'habite ».",
          },
          {
            type: "fill",
            sentence: "Je {{1}} professeur. (être)",
            answers: ["suis"],
            explanation:
              "Le verbe être : « je suis ».",
          },
          {
            type: "fill",
            sentence: "Je m'{{1}} Karim. (appeler)",
            answers: ["appelle"],
            explanation:
              "Verbe pronominal « s'appeler » : « je m'appelle ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Masculin ou féminin ?",
        description: "Choisissez la bonne forme de l'adjectif de nationalité.",
        exercises: [
          {
            type: "fill",
            sentence: "Je suis camerounais. → (une femme) Je suis {{1}}.",
            answers: ["camerounaise"],
            hint: "Le féminin prend souvent un « e ».",
            explanation:
              "Au féminin, l'adjectif de nationalité prend un « e » : « camerounaise ».",
          },
          {
            type: "fill",
            sentence: "Je suis français. → (une femme) Je suis {{1}}.",
            answers: ["française"],
            explanation:
              "« Français » devient « française » au féminin, avec une cédille : « ç ».",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Comment dit-on son âge en français ?",
        options: ["Je suis 20 ans.", "J'ai 20 ans.", "Je fais 20 ans."],
        correct: 1,
        explanation:
          "L'âge s'exprime toujours avec « avoir » : « j'ai 20 ans ». Ne dites jamais « je suis 20 ans ».",
      },
      {
        question: "Quelle préposition utilise-t-on devant une ville ?",
        options: ["Je habite en Paris.", "J'habite à Paris.", "J'habite dans Paris."],
        correct: 1,
        explanation:
          "Devant une ville, on utilise « à » : « j'habite à Paris ». « En » est réservé aux pays féminins (en France, en Italie).",
      },
      {
        question: "« Je suis ___ » (une femme, du Sénégal). Quelle est la bonne réponse ?",
        options: ["sénégalais", "sénégalaise", "sénégalaise? non"],
        correct: 1,
        explanation:
          "Au féminin, l'adjectif prend un « e » : « sénégalaise ».",
      },
      {
        question: "Quel verbe manque : « Je m'___ Léa » ?",
        options: ["ai", "suis", "appelle"],
        correct: 2,
        explanation:
          "Pour dire son nom : « je m'appelle ». C'est le verbe pronominal « s'appeler ».",
      },
      {
        question: "Que signifie « Enchanté(e) » à la fin d'une présentation ?",
        options: [
          "Au revoir !",
          "Je suis content(e) de vous rencontrer",
          "Je ne comprends pas",
        ],
        correct: 1,
        explanation:
          "« Enchanté(e) » est la formule de politesse qui clôture une présentation : « ravi(e) de vous rencontrer ».",
      },
    ],
  },
  {
    lesson: {
      id: "a1-4",
      slug: "les-pronoms-sujets-et-la-negation",
      level: "A1",
      title: "Les pronoms sujets et la négation",
      objective:
        "Utiliser tous les pronoms sujets (je, tu, il, elle, nous, vous, ils, elles) et négater une phrase avec « ne... pas ».",
      duration: "12 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **pronom sujet** remplace la personne ou la chose qui fait l'action. En français, il est **obligatoire** devant le verbe, même si la langue du départ ne l'exige pas. Sans pronom, la phrase n'est pas française.",
        },
        {
          type: "rule",
          title: "Les huit pronoms sujets",
          content:
            "**Je, tu, il, elle** (singulier) — **nous, vous, ils, elles** (pluriel). « Il » remplace un masculin, « elle » un féminin ; « ils » un groupe masculin ou mixte, « elles » un groupe uniquement féminin.",
        },
        {
          type: "example",
          title: "Comparez",
          content:
            "« **Il** parle français. » (un homme) — « **Elle** parle français. » (une femme) — « **Ils** parlent français. » (un groupe avec au moins un homme) — « **Elles** parlent français. » (un groupe de femmes uniquement).",
        },
        {
          type: "text",
          content:
            "Pour dire le contraire, on encadre le verbe avec **« ne... pas »**. Le « ne » se place avant le verbe, le « pas » après. À l'écrit, on n'omet jamais les deux parties.",
        },
        {
          type: "rule",
          title: "La structure de la négation",
          content:
            "Sujet + **ne** + verbe + **pas** + reste de la phrase. Avec une voyelle, « ne » devient « n' » : « je **n'**aime pas ». Avec « avoir », on dit « je **n'ai pas** ».",
        },
        {
          type: "example",
          title: "Affirmation et négation",
          content:
            "« Je parle français. » → « Je **ne** parle **pas** français. » — « Elle a un frère. » → « Elle **n'**a **pas** de frère. » (attention : « un » devient « de » à la négation !).",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "La transformation « un/une/des → de » à la négation est l'un des premiers pièges du français. Répétez : « J'ai un stylo → je n'ai pas **de** stylo ». C'est une règle, pas une exception.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Choisir le bon pronom",
        description: "Complétez chaque phrase avec le pronom sujet qui convient.",
        exercises: [
          {
            type: "fill",
            sentence: "{{1}} parle français. (elle, une femme)",
            answers: ["Elle"],
            explanation:
              "On parle d'une femme : le pronom est « elle ».",
          },
          {
            type: "fill",
            sentence: "{{1}} mangeons à la cantine. (nous)",
            answers: ["Nous"],
            hint: "Le verbe est « mangeons » : terminaison de « nous ».",
            explanation:
              "La terminaison « -ons » indique que le sujet est « nous ».",
          },
          {
            type: "fill",
            sentence: "{{1}} sont professeurs. (un homme et une femme)",
            answers: ["Ils"],
            hint: "Le groupe est mixte.",
            explanation:
              "Un groupe mixte (au moins un homme) prend « ils ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Négater les phrases",
        description: "Transformez chaque phrase affirmative en phrase négative.",
        exercises: [
          {
            type: "fill",
            sentence: "Je parle espagnol. → Je {{1}} parle {{2}} espagnol.",
            answers: ["ne", "pas"],
            explanation:
              "Négation classique : « ne » avant le verbe, « pas » après.",
          },
          {
            type: "fill",
            sentence: "Il a une voiture. → Il {{1}} a {{2}} {{3}} voiture.",
            answers: ["n'", "pas", "de"],
            hint: "Attention : « un/une » devient « de » à la négation !",
            explanation:
              "À la négation, l'article indéfini « une » devient « de », et « ne » devient « n' » devant la voyelle.",
          },
        ],
      },
      {
        title: "Exercice 3 — Remettre en ordre",
        description: "Réordonnez les mots pour former une phrase négative correcte.",
        exercises: [
          {
            type: "order",
            words: ["pas", "parle", "Je", "japonais", "ne"],
            correct: ["Je", "ne", "parle", "pas", "japonais"],
            explanation:
              "Structure négative : sujet + ne + verbe + pas + complément.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quel pronom sujet utilise-t-on pour un groupe mixte (hommes et femmes) ?",
        options: ["elles", "ils", "nous"],
        correct: 1,
        explanation:
          "« Ils » s'utilise pour tout groupe contenant au moins un masculin.",
      },
      {
        question: "Où se place « ne... pas » dans la phrase « Je comprends » ?",
        options: [
          "Je pas ne comprends",
          "Je ne comprends pas",
          "Ne je comprends pas",
        ],
        correct: 1,
        explanation:
          "« Ne » se place avant le verbe, « pas » après : « Je ne comprends pas ».",
      },
      {
        question: "« J'ai un stylo. » À la négation, on dit :",
        options: [
          "Je n'ai pas un stylo",
          "Je n'ai pas de stylo",
          "Je n'ai pas des stylo",
        ],
        correct: 1,
        explanation:
          "L'article indéfini devient « de » à la négation : « je n'ai pas de stylo ».",
      },
      {
        question: "Comment écrit-on « je aime » correctement ?",
        options: ["je n'aime pas", "je aime", "j'aime"],
        correct: 2,
        explanation:
          "« Je » s'élide en « j' » devant une voyelle : « j'aime ».",
      },
      {
        question: "Quel pronom complète : « ___ jouons au football » ?",
        options: ["Ils", "Elles", "Nous"],
        correct: 2,
        explanation:
          "La terminaison « -ons » indique le sujet « nous ».",
      },
    ],
  },
  {
    lesson: {
      id: "a1-5",
      slug: "le-futur-proche",
      level: "A1",
      title: "Le futur proche : je vais + infinitif",
      objective:
        "Exprimer un projet ou une action imminente avec la construction « aller + infinitif ».",
      duration: "10 min",
      blocks: [
        {
          type: "text",
          content:
            "Le **futur proche** exprime une action qui va se dérouler **bientôt** : un projet, une intention, quelque chose de certain. C'est la construction de futur la plus simple du français : il suffit de connaître le verbe *aller* au présent.",
        },
        {
          type: "rule",
          title: "La construction",
          content:
            "**Sujet + verbe « aller » conjugué au présent + infinitif du verbe.** Exemples : je **vais** manger · tu **vas** partir · nous **allons** voyager.",
        },
        {
          type: "example",
          title: "Conjugaison du verbe « aller » au présent",
          content:
            "je **vais** · tu **vas** · il/elle **va** · nous **allons** · vous **allez** · ils/elles **vont**. Attention aux accents : « vais » et « vas » n'en ont pas, mais « allez » en a un !",
        },
        {
          type: "example",
          title: "Des phrases complètes",
          content:
            "« Ce soir, je **vais regarder** un film. » — « Demain, nous **allons visiter** le musée. » — « Dans une heure, le train **va partir**. »",
        },
        {
          type: "text",
          content:
            "Le futur proche se distingue du présent : il ajoute toujours une notion de **temps à venir**, souvent accompagnée d'un repère temporel (demain, ce soir, tout de suite, dans une semaine).",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Ne traduisez pas littéralement depuis votre langue ! En français, le futur proche de la première personne est « je **vais** faire », jamais « je va aller faire ». Un seul « aller » suffit.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Conjuguer « aller » et choisir l'infinitif",
        description: "Complétez chaque phrase au futur proche.",
        exercises: [
          {
            type: "fill",
            sentence: "Demain, je {{1}} (aller) {{2}} (manger) au restaurant.",
            answers: ["vais", "manger"],
            explanation:
              "« Je » → « vais » ; le deuxième verbe reste à l'infinitif : « manger ».",
          },
          {
            type: "fill",
            sentence: "Nous {{1}} (aller) {{2}} (voyager) en France cet été.",
            answers: ["allons", "voyager"],
            explanation:
              "« Nous » → « allons », suivi de l'infinitif « voyager ».",
          },
          {
            type: "fill",
            sentence: "Elle {{1}} (aller) {{2}} (téléphoner) à sa mère.",
            answers: ["va", "téléphoner"],
            explanation:
              "« Elle » → « va », suivi de l'infinitif « téléphoner ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Remettre en ordre",
        description: "Réordonnez les mots pour former une phrase au futur proche.",
        exercises: [
          {
            type: "order",
            words: ["regarder", "aller", "Ce soir", "je", "un match", "vais"],
            correct: ["Ce soir", "je", "vais", "regarder", "un match"],
            explanation:
              "Repère temporel + sujet + « vais » + infinitif + complément.",
          },
          {
            type: "order",
            words: ["partir", "vont", "ils", "demain", "à", "Paris"],
            correct: ["ils", "vont", "partir", "à", "Paris", "demain"],
            explanation:
              "Sujet + « vont » + infinitif + lieu + temps.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Quelle est la construction du futur proche ?",
        options: [
          "aller + infinitif",
          "avoir + participe passé",
          "être + adjectif",
        ],
        correct: 0,
        explanation:
          "Le futur proche = verbe « aller » conjugué + infinitif.",
      },
      {
        question: "« Nous ___ finir nos devoirs. » Quelle forme manque ?",
        options: ["vont", "allons", "vas"],
        correct: 1,
        explanation:
          "« Nous » se conjugue « allons » : « nous allons finir ».",
      },
      {
        question: "Comment dit-on « je vais manger » si on oublie tout le reste ?",
        options: ["je vais manger", "je vas manger", "je va manger"],
        correct: 0,
        explanation:
          "« Je » → « vais » (jamais « vas » ni « va » qui sont pour « tu » et « il »).",
      },
      {
        question: "Quand utilise-t-on le futur proche ?",
        options: [
          "Pour un souvenir du passé",
          "Pour une action qui va se passer bientôt",
          "Pour une habitude ancienne",
        ],
        correct: 1,
        explanation:
          "Le futur proche exprime une action imminente, un projet proche.",
      },
      {
        question: "« Ils ___ arriver dans dix minutes. »",
        options: ["va", "allons", "vont"],
        correct: 2,
        explanation:
          "« Ils » → « vont » : « ils vont arriver ».",
      },
    ],
  },
  {
    lesson: {
      id: "a1-6",
      slug: "vocabulaire-la-famille-et-les-nombres",
      level: "A1",
      title: "Vocabulaire : la famille et les nombres de 0 à 100",
      objective:
        "Parler de sa famille et utiliser les nombres de 0 à 100 dans la vie quotidienne.",
      duration: "12 min",
      blocks: [
        {
          type: "text",
          content:
            "Parler de sa famille est l'une des premières conversations de la vie quotidienne. Le vocabulaire familial est régulier : le féminin se forme souvent en ajoutant un « e » (frère → sœur est l'exception).",
        },
        {
          type: "rule",
          title: "Le vocabulaire essentiel",
          content:
            "**la mère / le père** · **la sœur / le frère** · **le fils / la fille** · **la grand-mère / le grand-père** · **l'oncle / la tante** · **le cousin / la cousine** · **le mari / la femme**. « Mon » s'utilise devant un nom masculin, « ma » devant un féminin, « mes » au pluriel.",
        },
        {
          type: "example",
          title: "Dans une phrase",
          content:
            "« J'ai **une sœur** et **deux frères**. **Ma** mère s'appelle Fatima et **mon** père s'appelle Karim. **Mes** grands-parents habitent à Lyon. »",
        },
        {
          type: "text",
          content:
            "Les nombres suivent. De 0 à 16, chaque nombre a sa forme propre (zéro, un, deux... seize). De 17 à 69, on combine : **vingt-sept**, **trente-quatre**, **cinquante-huit**. De 70 à 99, le français est original : **soixante-dix** (60+10), **quatre-vingts** (4×20), **quatre-vingt-dix-neuf** (4×20+19).",
        },
        {
          type: "example",
          title: "Les nombres clés",
          content:
            "20 = **vingt** · 27 = **vingt-sept** · 50 = **cinquante** · 70 = **soixante-dix** · 80 = **quatre-vingts** · 99 = **quatre-vingt-dix-neuf** · 100 = **cent**.",
        },
        {
          type: "tip",
          title: "Le conseil du professeur",
          content:
            "Apprenez les nombres par groupes de cinq (0-5, 5-10...). Dites votre numéro de téléphone à voix haute chaque jour : c'est l'exercice qui fixe les nombres le plus vite.",
        },
      ],
    },
    exercises: [
      {
        title: "Exercice 1 — Compléter avec le bon mot de famille",
        description: "Choisissez le mot de famille qui convient.",
        exercises: [
          {
            type: "fill",
            sentence: "La fille de mes parents est ma {{1}}.",
            answers: ["sœur"],
            hint: "C'est la fille des mêmes parents que moi.",
            explanation:
              "La fille de mes parents = « ma sœur ».",
          },
          {
            type: "fill",
            sentence: "Le mari de ma mère est mon {{1}}.",
            answers: ["père"],
            explanation:
              "Le mari de ma mère = « mon père ».",
          },
          {
            type: "fill",
            sentence: "La mère de ma mère est ma {{1}}.",
            answers: ["grand-mère"],
            explanation:
              "La mère de ma mère (ou de mon père) = « ma grand-mère ».",
          },
        ],
      },
      {
        title: "Exercice 2 — Écrire les nombres en lettres",
        description: "Complétez avec le nombre écrit en lettres.",
        exercises: [
          {
            type: "fill",
            sentence: "J'ai {{1}} ans. (45)",
            answers: ["quarante-cinq"],
            hint: "40 + 5, avec un trait d'union.",
            explanation:
              "45 = quarante (40) + cinq (5) : « quarante-cinq ».",
          },
          {
            type: "fill",
            sentence: "Il y a {{1}} élèves dans la classe. (21)",
            answers: ["vingt et un"],
            hint: "20 + 1 : ici, c'est « et ».",
            explanation:
              "21 = « vingt et un » (avec « et », comme 31, 41, 51, 61, 71).",
          },
        ],
      },
      {
        title: "Exercice 3 — Associer",
        description: "Reliez chaque personne à sa définition.",
        exercises: [
          {
            type: "match",
            instruction: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "le frère", right: "le fils des mêmes parents" },
              { left: "la tante", right: "la sœur de la mère ou du père" },
              { left: "le cousin", right: "le fils de l'oncle ou de la tante" },
              { left: "le mari", right: "l'homme avec qui on est marié" },
            ],
            explanation:
              "Chaque mot de famille désigne un lien précis. Le vocabulaire familial est l'un des premiers trésors à emmagasiner.",
          },
        ],
      },
    ],
    quiz: [
      {
        question: "Comment dit-on « 70 » en français ?",
        options: ["septante", "soixante-dix", "soixante-et-dix"],
        correct: 1,
        explanation:
          "70 = « soixante-dix » (60 + 10). « Septante » existe en Belgique et en Suisse mais pas en France.",
      },
      {
        question: "« La mère de mon père » est :",
        options: ["ma tante", "ma grand-mère", "ma cousine"],
        correct: 1,
        explanation:
          "La mère d'un parent est une grand-mère.",
      },
      {
        question: "Quel mot s'utilise devant « mère » : « ___ mère » ?",
        options: ["mon", "ma", "mes"],
        correct: 1,
        explanation:
          "« Mère » est féminin singulier : « ma mère ».",
      },
      {
        question: "Comment écrit-on 80 ?",
        options: ["quatre-vingt", "quatre-vingts", "quatre-vingt-dix"],
        correct: 1,
        explanation:
          "80 = « quatre-vingts » (4 × 20), avec un « s » à « vingt » car il est multiplié et non suivi d'un autre nombre.",
      },
      {
        question: "« Le fils de mes parents » est :",
        options: ["mon frère", "mon oncle", "mon cousin"],
        correct: 0,
        explanation:
          "Le fils des mêmes parents que moi est « mon frère ».",
      },
    ],
  },
];
