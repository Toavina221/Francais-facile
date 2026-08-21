/**
 * FrançaisFacile+ — Dictionnaire des faux amis et erreurs fréquentes
 * Classé par langue maternelle de l'apprenant.
 */

export type NativeLang = "anglais" | "arabe" | "espagnol" | "allemand" | "turc" | "chinois" | "portugais" | "vietnamien" | "italien";

export interface FauxAmi {
  /** Le mot ou la structure qui trompe */
  trap: string;
  /** Ce qu'on croit qu'il signifie */
  belief: string;
  /** La réalité en français */
  reality: string;
  /** Exemple correct */
  example: string;
}

export interface ErrorEntry {
  error: string;
  correction: string;
  explanation: string;
}

export interface LangSection {
  lang: NativeLang;
  label: string;
  intro: string;
  fauxAmis: FauxAmi[];
  errors: ErrorEntry[];
}

export const fauxAmisData: LangSection[] = [
  {
    lang: "anglais",
    label: "Anglais",
    intro: "L'anglais et le français partagent un vocabulaire commun issu du latin et du normand : c'est une chance, mais aussi un piège. Beaucoup de mots se ressemblent mais ne signifient pas la même chose.",
    fauxAmis: [
      {
        trap: "actuellement",
        belief: "Actually (= en fait)",
        reality: "En réalité, « actuellement » signifie « en ce moment, now ». Pour « en fait », on dit « en fait » ou « actually » n'existe pas.",
        example: "« Je suis actuellement en France. » = I am currently in France.",
      },
      {
        trap: "attendre",
        belief: "To attend (= assister à)",
        reality: "« Attendre » = to wait. Pour « assister à un cours », on dit « assister à ».",
        example: "« J'attends le bus. » = I'm waiting for the bus.",
      },
      {
        trap: "demande",
        belief: "Demand (= exige)",
        reality: "« Demande » = request, not accusation. Le verbe « demander » = to ask.",
        example: "« Je demande de l'aide. » = I'm asking for help.",
      },
      {
        trap: "librairie",
        belief: "Library (= bibliothèque)",
        reality: "« Librairie » = bookshop. La « bibliothèque » = library.",
        example: "« J'emprunte ce livre à la bibliothèque. » = I borrow this book from the library.",
      },
      {
        trap: "monnaie",
        belief: "Money (= argent)",
        reality: "« Monnaie » = small change. L'« argent » = money.",
        example: "« Avez-vous de la monnaie ? » = Do you have change?",
      },
      {
        trap: "blessé",
        belief: "Blessed (= béni)",
        reality: "« Blessé » = injured. « Béni » = blessed.",
        example: "« Il est blessé à la jambe. » = He is injured in the leg.",
      },
      {
        trap: "coin",
        belief: "Coin (= pièce de monnaie)",
        reality: "« Coin » = corner. La pièce de monnaie = « pièce ».",
        example: "« Rendez-vous au coin de la rue. » = Meet at the corner of the street.",
      },
    ],
    errors: [
      {
        error: "I am agree / Je suis d'accord",
        correction: "Je suis d'accord (mais le verbe est « être d'accord », jamais « je suis agree »)",
        explanation: "En anglais on dit « I agree » (verbe). En français, la formule figée est « être d'accord » : « je suis d'accord ».",
      },
      {
        error: "Je suis ici depuis 3 ans (avec présent)",
        correction: "Correct en français ! Mais attention : en anglais on utilise le present perfect (« I have been here for 3 years »).",
        explanation: "Le français garde le présent avec « depuis » pour une action qui continue : « Je vis ici depuis 3 ans. »",
      },
      {
        error: "Il a 25 ans = He is 25 years old",
        correction: "« Il a 25 ans » (avec AVOIR, jamais être)",
        explanation: "L'âge se dit avec « avoir » en français, alors que l'anglais utilise « to be ».",
      },
    ],
  },
  {
    lang: "arabe",
    label: "Arabe",
    intro: "Le français et l'arabe ont des structures très différentes : l'ordre des mots, le verbe être et les temps se comportent autrement. Voici les points qui méritent votre attention.",
    fauxAmis: [
      {
        trap: "le lycée",
        belief: "Parfois confondu avec l'université",
        reality: "« Le lycée » = le secondaire (15–18 ans). L'université = « l'université » ou « la fac » (familier).",
        example: "« Elle est au lycée. » = She is in high school.",
      },
      {
        trap: "en fait / en fin",
        belief: "Confusion avec la traduction de « في الواقع »",
        reality: "« En fait » = in fact. « Enfin » = finally. Deux mots très proches mais différents.",
        example: "« En fait, je préfère rester. » = In fact, I prefer to stay.",
      },
      {
        trap: "jamais",
        belief: "Utilisé parfois comme « toujours » par calque",
        reality: "« Jamais » = never (négation). « Toujours » = always. Ne les inversez pas !",
        example: "« Je ne mange jamais de porc. » = I never eat pork.",
      },
    ],
    errors: [
      {
        error: "Omission du verbe être au présent : « Je content »",
        correction: "« Je suis content. »",
        explanation: "En arabe, la phrase nominale n'a pas de copule au présent. En français, le verbe « être » est toujours obligatoire : « je suis », « il est ».",
      },
      {
        error: "Ordre des mots : « Je mange pomme »",
        correction: "« Je mange une pomme. »",
        explanation: "Le français exige un article devant le nom : « une, un, le, la, des ». Sans article, la phrase est incomplète.",
      },
      {
        error: "Féminin des adjectifs : « Elle est content »",
        correction: "« Elle est contente. »",
        explanation: "En français, l'adjectif s'accorde avec le sujet : on ajoute « -e » au féminin.",
      },
      {
        error: "Pas de pluriel régulier : « les voiture »",
        correction: "« Les voitures. »",
        explanation: "Le pluriel se marque presque toujours par « -s » à l'écrit : « les voitures, les tables ».",
      },
      {
        error: "Temps du passé confondu : « Hier je vais au marché »",
        correction: "« Hier, je suis allé(e) au marché. »",
        explanation: "Le présent ne peut pas raconter le passé. Utilisez le passé composé pour les actions terminées.",
      },
    ],
  },
  {
    lang: "espagnol",
    label: "Espagnol",
    intro: "L'espagnol et le français sont deux langues latines sœurs : elles se ressemblent beaucoup, ce qui rend les faux amis encore plus traîtres.",
    fauxAmis: [
      {
        trap: "embarazada",
        belief: "Embarrassée (= gênée)",
        reality: "« Embarazada » signifie « enceinte » ! Pour « gêné », on dit « embarrassé » en français.",
        example: "« Elle est enceinte. » = She is pregnant.",
      },
      {
        trap: "constipé",
        belief: "Con un resfriado (= enrhumé)",
        reality: "« Constipé » = suffering from constipation. Pour « enrhumé », on dit « enrhumé » ou « j'ai un rhume ».",
        example: "« J'ai un rhume. » = I have a cold.",
      },
      {
        trap: "salir",
        belief: "Salir (= sortir)",
        reality: "« Salir » en français = to dirty (salir). Pour « sortir », on dit « sortir ».",
        example: "« Je sors ce soir. » = I'm going out tonight.",
      },
      {
        trap: "exquis",
        belief: "Exquisito est similaire, mais attention à « exquis » dans d'autres contextes",
        reality: "Les deux existent et signifient « délicieux », mais « exquis » est très soutenu. Dans la vie courante, dites « délicieux ».",
        example: "« Ce gâteau est délicieux. »",
      },
      {
        trap: "devenir",
        belief: "Devenir (= devenir) est correct, mais « devenir » ≠ « volver »",
        reality: "« Devenir » = to become. Attention : ne traduisez pas « volver » (revenir) par « devenir ».",
        example: "« Il veut devenir médecin. » = He wants to become a doctor.",
      },
    ],
    errors: [
      {
        error: "« Je suis 25 ans » (calque de « tengo 25 años »)",
        correction: "« J'ai 25 ans. »",
        explanation: "Comme en anglais, l'âge se dit avec « avoir » : « j'ai », jamais « je suis ».",
      },
      {
        error: "« Il fait chaud » traduit par « Il est chaud »",
        correction: "« Il fait chaud. » / « Il est chaud » = il est sexy !",
        explanation: "La météo utilise « faire » : il fait chaud, il fait froid. « Il est chaud » a un tout autre sens.",
      },
      {
        error: "« Je suis d'accord avec » suivi de l'infinitif",
        correction: "« Je suis d'accord pour + infinitif » ou « d'accord avec + nom »",
        explanation: "La préposition change selon ce qui suit : « d'accord pour venir », « d'accord avec toi ».",
      },
      {
        error: "Omission du sujet : « Es importante »",
        correction: "« C'est important. » / « Il est important de... »",
        explanation: "Le français exige un sujet exprimé : « c'est », « il », « elle »...",
      },
    ],
  },
  {
    lang: "allemand",
    label: "Allemand",
    intro: "Les germanophones rencontrent des difficultés spécifiques : la place du verbe, les articles de genre et les temps composés fonctionnent différemment en français.",
    fauxAmis: [
      {
        trap: "gift",
        belief: "Gift (= cadeau en allemand)",
        reality: "« Gift » en français = poison ! Le cadeau = « cadeau ».",
        example: "« Je t'offre un cadeau. » = I give you a gift.",
      },
      {
        trap: "rat",
        belief: "Rat (= conseil en allemand)",
        reality: "« Rat » = l'animal (mouse's cousin). Le conseil = « conseil ».",
        example: "« Donne-moi un conseil. » = Give me advice.",
      },
      {
        trap: "fast",
        belief: "Fast (= vite en allemand)",
        reality: "« Fast » en français = almost. Vite = « vite » ou « rapidement ».",
        example: "« Il a presque fini. » = He has almost finished.",
      },
      {
        trap: "bald",
        belief: "Bald (= bientôt en allemand)",
        reality: "« Bald » = chauve ! Bientôt = « bientôt ».",
        example: "« Il revient bientôt. » = He is coming back soon.",
      },
    ],
    errors: [
      {
        error: "Verbe en fin de phrase (calque de la subordonnée allemande)",
        correction: "Le verbe suit immédiatement le sujet en français : « Je pense qu'il viendra demain. »",
        explanation: "En français, l'ordre est toujours Sujet-Verbe-Complément. Le verbe ne migre jamais en fin de phrase.",
      },
      {
        error: "Confusion des genres : « la livre » (das Buch)",
        correction: "« Le livre » (masculin) · « la table » (féminin) · « le problème » (masculin)",
        explanation: "Le genre français ne correspond pas au genre allemand. Apprenez toujours l'article avec le nom.",
      },
      {
        error: "« J'ai fait le devoir »",
        correction: "« J'ai fait mes devoirs. »",
        explanation: "On dit « faire ses devoirs » au pluriel, avec le possessif.",
      },
      {
        error: "Pas de « ne » dans la négation : « Je sais pas »",
        correction: "« Je ne sais pas. »",
        explanation: "À l'écrit et à l'oral formel, la négation complète exige « ne ... pas » autour du verbe.",
      },
    ],
  },
  {
    lang: "turc",
    label: "Turc",
    intro: "Le turc et le français appartiennent à des familles très différentes : l'ordre des mots et l'absence de genre grammatical rendent certains réflexes turcs trompeurs en français.",
    fauxAmis: [
      {
        trap: "hastane / hôpital",
        belief: "Ressemblance trompeuse avec « hostie » ou confusion « clinique »",
        reality: "En turc, « hastane » = hôpital. En français, « hôpital » et « clinique » désignent des lieux différents : l'hôpital est public, la clinique est souvent privée.",
        example: "« Il est à l'hôpital. » = He is at the hospital.",
      },
      {
        trap: "ekmek / épicerie",
        belief: "« Ekmek » (pain en turc) fait penser à « épicerie »",
        reality: "« Ekmek » = pain. La boulangerie = « boulangerie ». L'épicerie = « épicerie ».",
        example: "« J'achète du pain à la boulangerie. »",
      },
    ],
    errors: [
      {
        error: "Ordre des mots SOV (calque du turc) : « Je le livre lis »",
        correction: "« Je lis le livre. »",
        explanation: "Le turc place le verbe en fin de phrase. En français, l'ordre est toujours Sujet-Verbe-Complément.",
      },
      {
        error: "Absence de genre : « la problème »",
        correction: "« Le problème » (masculin).",
        explanation: "Le turc n'a pas de genre grammatical. En français, chaque nom est masculin ou féminin : apprenez toujours l'article avec le nom.",
      },
      {
        error: "« Je suis médecin » traduit sans article",
        correction: "Correct ! Mais après « c'est », l'article revient : « C'est un médecin. »",
        explanation: "Après « être » avec un pronom sujet, pas d'article (« je suis médecin »). Après « c'est », l'article est obligatoire.",
      },
      {
        error: "Mélange des voyelles nasales : « an / en / on »",
        correction: "« Dans », « dans l'enfant », « on mange » se prononcent chacun différemment.",
        explanation: "Le turc n'a pas de voyelles nasales. Entraînez l'écoute : « un » (nasal), « une » (oral) sont très proches à l'oreille.",
      },
    ],
  },
  {
    lang: "chinois",
    label: "Chinois",
    intro: "Le chinois et le français n'ont presque rien en commun : pas de conjugaison, pas de pluriel, pas de genre. Les erreurs viennent surtout des structures absentes de la langue maternelle.",
    fauxAmis: [
      {
        trap: "便宜 piányi / bon marché",
        belief: "« 便宜 » ressemble à « piéger » ou « piquer »",
        reality: "« 便宜 » = bon marché. Attention : le français « piquer » n'a aucun lien. « Bon marché » est invariable : « des prix bon marché ».",
        example: "« Ce livre est bon marché. » = This book is cheap.",
      },
      {
        trap: "老板 / patron",
        belief: "« 老板 » se traduit parfois par « chef »",
        reality: "« 老板 » = le patron/la patronne. « Chef » = le cuisinier en chef ou le supérieur hiérarchique.",
        example: "« Mon patron est très sympathique. »",
      },
    ],
    errors: [
      {
        error: "Verbe sans conjugaison : « Hier je mange au restaurant »",
        correction: "« Hier, j'ai mangé au restaurant. »",
        explanation: "Le chinois marque le temps par des particules. En français, le verbe change de forme : passé composé, imparfait, futur...",
      },
      {
        error: "Pas d'articles : « Je vais à école »",
        correction: "« Je vais à l'école. »",
        explanation: "Le chinois n'a pas d'articles. En français, « le, la, les, un, une » sont presque toujours obligatoires devant le nom.",
      },
      {
        error: "Pas de pluriel : « trois ami »",
        correction: "« Trois amis. »",
        explanation: "Après un nombre supérieur à un, le nom prend « -s » : « trois amis, deux livres ».",
      },
      {
        error: "Place des compléments de temps en fin de phrase : « Je mange aujourd'hui » (acceptable, mais calque : « Je aujourd'hui mange »)",
        correction: "« Aujourd'hui, je mange au restaurant. »",
        explanation: "En français, les compléments de temps se placent en début ou en fin de phrase, jamais entre le sujet et le verbe.",
      },
      {
        error: "Confusion « il / elle » à l'oral",
        correction: "À l'écrit, « il » (masculin) et « elle » (féminin) s'écrivent différemment, même si la prononciation est identique.",
        explanation: "Le chinois distingue « 他 » et « 她 » à l'écrit. En français, c'est l'inverse : identiques à l'oral, distincts à l'écrit.",
      },
    ],
  },
  {
    lang: "portugais",
    label: "Portugais",
    intro: "Le portugais et le français sont cousins latins : les ressemblances aident beaucoup, mais les faux amis sont nombreux et subtils.",
    fauxAmis: [
      {
        trap: "burro",
        belief: "Beurre",
        reality: "« Burro » en portugais = beurre, mais « burro » en français = âne ! Le beurre = « beurre ».",
        example: "« J'ajoute du beurre. » = I add butter.",
      },
      {
        trap: "esquisquer / esquimau",
        belief: "« Esquisse » semble proche de « esquiço » (croquis)",
        reality: "Les deux existent et se ressemblent vraiment : « esquisse » = croquis. Ici pas de piège, mais attention à « esquiver » = to dodge.",
        example: "« Il fait une esquisse du paysage. »",
      },
      {
        trap: "puxar / pousser",
        belief: "« Puxar » ressemble à « pousser »",
        reality: "« Puxar » = tirer ! Pousser = « pousser ». Sur les portes françaises : « tirer » ≠ « pousser ».",
        example: "« Tirez la porte pour ouvrir. » = Pull the door to open.",
      },
      {
        trap: "oficina",
        belief: "Office (bureau)",
        reality: "« Oficina » = atelier/garage. Le bureau = « bureau ».",
        example: "« Je travaille au bureau. » = I work at the office.",
      },
    ],
    errors: [
      {
        error: "« J'ai 25 ans » oublié : « Eu tenho 25 anos » calqué en « Je suis 25 ans »",
        correction: "« J'ai 25 ans. »",
        explanation: "Comme en espagnol, l'âge se dit avec « avoir » en français.",
      },
      {
        error: "« Il fait chaud » traduit par « Il est chaud »",
        correction: "« Il fait chaud. »",
        explanation: "La météo utilise le verbe « faire » : il fait beau, il fait froid, il fait chaud.",
      },
      {
        error: "« Je suis d'accord » avec « com » : « Je suis d'accord avec venir »",
        correction: "« Je suis d'accord pour venir. »",
        explanation: "« D'accord avec + personne », « d'accord pour + infinitif ».",
      },
    ],
  },
  {
    lang: "vietnamien",
    label: "Vietnamien",
    intro: "Le vietnamien n'a ni conjugaison, ni article, ni pluriel marqué : les difficultés en français viennent surtout de ces catégories inexistantes dans la langue maternelle.",
    fauxAmis: [
      {
        trap: "học / hoche",
        belief: "« Học » (étudier) fait penser au français « hoche »",
        reality: "« Học » = étudier/apprendre. « Hocher » = to nod (hocher la tête). Aucun lien !",
        example: "« J'étudie le français. » = I study French.",
      },
      {
        trap: "thư viện / libre",
        belief: "Confusion entre « bibliothèque » et « librairie »",
        reality: "« Thư viện » = bibliothèque (on y emprunte). « Librairie » = bookstore (on y achète).",
        example: "« J'emprunte ce livre à la bibliothèque. »",
      },
    ],
    errors: [
      {
        error: "Pas d'article : « Je vais à marché »",
        correction: "« Je vais au marché. »",
        explanation: "Le vietnamien n'a pas d'articles. En français : « au marché, à la banque, à l'école ».",
      },
      {
        error: "Verbe invariable : « Hier je mange »",
        correction: "« Hier, j'ai mangé. »",
        explanation: "Le vietnamien utilise des marqueurs de temps. En français, le verbe se conjugue : passé composé, imparfait...",
      },
      {
        error: "Tons et accents : confusion é/è/ê",
        correction: "« école » (é fermé), « mère » (è ouvert), « fête » (ê) sont trois sons différents.",
        explanation: "Le vietnamien a 6 tons ; le français a des accents qui changent le son des voyelles. Entraînez votre oreille sur les trois « e ».",
      },
      {
        error: "Pronoms de politesse manquants : tutoiement systématique",
        correction: "Utilisez « vous » avec les inconnus, les aînés et dans les situations formelles.",
        explanation: "Le vietnamien a un système de pronoms très riche (anh, chị, cô, chú...). En français, la distinction clé est « tu » / « vous ».",
      },
    ],
  },
  {
    lang: "italien",
    label: "Italien",
    intro: "L'italien et le français sont des langues sœurs : attention aux mots presque identiques qui ne signifient pas la même chose.",
    fauxAmis: [
      {
        trap: "salire",
        belief: "Salir (= salir en italien)",
        reality: "« Salir » en français = rendre sale (to dirty). Monter = « monter ». L'italien « salire » = monter.",
        example: "« Je monte les escaliers. » = I go up the stairs.",
      },
      {
        trap: "caldo",
        belief: "Chaud",
        reality: "« Caldo » = chaud en italien, mais le français dit « il fait chaud » pour la météo, jamais « il est chaud » (sens osé !).",
        example: "« Il fait très chaud aujourd'hui. »",
      },
      {
        trap: "burro",
        belief: "Beurre (identique au portugais)",
        reality: "« Burro » en italien = beurre, mais en français « burro » n'existe pas : on dit « beurre ».",
        example: "« Donne-moi du beurre, s'il te plaît. »",
      },
      {
        trap: "assistere",
        belief: "Assister (= aider)",
        reality: "« Assistere » en italien = assister/aider, mais en français « assister à » = to attend. Aider = « aider ».",
        example: "« J'assiste au cours. » = I attend the class. « J'aide mon frère. » = I help my brother.",
      },
    ],
    errors: [
      {
        error: "« Je suis 30 ans » (calque de « ho 30 anni »)",
        correction: "« J'ai 30 ans. »",
        explanation: "L'âge se dit toujours avec « avoir » en français.",
      },
      {
        error: "« Il est chaud » pour la météo",
        correction: "« Il fait chaud. »",
        explanation: "La météo utilise « faire » : il fait beau, il fait froid, il fait chaud.",
      },
      {
        error: "« Je suis d'accord avec venir »",
        correction: "« Je suis d'accord pour venir. »",
        explanation: "« D'accord avec + personne », « d'accord pour + infinitif ».",
      },
      {
        error: "Suffixes diminutifs en « -ino » calqués : « un petit morceau » dit « un morcino »",
        correction: "« Un petit morceau. »",
        explanation: "Le français n'utilise pas de suffixes diminutifs comme l'italien : on ajoute « petit », « petite » devant le nom.",
      },
    ],
  },
];

export const nativeLangs: NativeLang[] = ["anglais", "arabe", "espagnol", "allemand", "turc", "chinois", "portugais", "vietnamien", "italien"];
