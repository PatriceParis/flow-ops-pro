import type { Locale } from './content';

export type Slug = 'abx-vs-abm' | 'gtm-engineering';

export const SLUGS: Slug[] = ['abx-vs-abm', 'gtm-engineering'];

export interface ArticleSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  standfirst: string;
  /** Lifted verbatim into the page and into the JSON-LD as the short answer. */
  keyAnswer: string;
  sections: ArticleSection[];
  table?: { head: string[]; rows: string[][] };
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  backHome: string;
  updated: string;
}

const fr: Record<Slug, Article> = {
  'abx-vs-abm': {
    metaTitle: 'ABX vs ABM : quelle différence concrète ? | Flow Ops',
    metaDescription:
      "ABM pousse des campagnes vers une liste de comptes figée. ABX réagit aux signaux réels et déclenche le bon canal au bon moment. Comparaison détaillée, et quand choisir l'un ou l'autre.",
    eyebrow: 'Account Based Experience',
    h1: 'ABX vs ABM : quelle différence concrète ?',
    standfirst:
      "Les deux approches ciblent des comptes plutôt que des leads. Ce qui les sépare n'est pas le ciblage, c'est l'ordre des opérations — et c'est cet ordre qui décide si votre pipeline se remplit ou pas.",
    keyAnswer:
      "L'ABM pousse des campagnes personnalisées vers une liste de comptes définie à l'avance. L'ABX observe d'abord les comportements réels, capte des signaux d'intention, puis active le canal approprié — marketing ou sales — au moment où le compte manifeste cet intérêt. L'ABM est une campagne planifiée par trimestre ; l'ABX est un système qui réagit en continu.",
    sections: [
      {
        h2: "Le problème que l'ABM ne résout pas",
        paragraphs: [
          "L'Account Based Marketing a corrigé une erreur réelle : arroser un marché entier pour n'intéresser que 2 % de ses contacts. En concentrant l'effort sur une liste de comptes à forte valeur, l'ABM a amélioré la pertinence du message et le retour sur investissement.",
          "Mais il a conservé un défaut structurel : la liste est figée au lancement de la campagne, et le message part que le compte soit prêt ou non. Un compte entre dans la séquence parce qu'il correspond au profil, pas parce qu'il a montré le moindre intérêt. Le marketing exécute sa campagne, les sales travaillent leur propre liste, et personne ne sait si les deux parlent au même interlocuteur la même semaine.",
          "Résultat courant : des campagnes jugées sur les clics et les impressions, pendant que le pipeline réel stagne.",
        ],
      },
      {
        h2: "Ce que l'ABX change",
        paragraphs: [
          "L'Account Based Experience inverse la séquence. Le signal précède le message, au lieu que le message soit envoyé en espérant produire un signal.",
          'Concrètement, un système ABX surveille en continu les comportements qui trahissent une intention : visite répétée du site, changement de direction, recrutement sur un poste clé, adoption d\'une technologie complémentaire, engagement sur un contenu précis. Quand un compte franchit un seuil, le système déclenche le canal adapté — une publicité de notoriété si le compte est froid, une séquence outbound s\'il est tiède, une alerte au commercial s\'il est chaud.',
        ],
        bullets: [
          "Le ciblage n'est pas une liste, c'est une règle qui se réévalue en permanence",
          'Le timing vient du compte, pas du calendrier marketing',
          "Marketing et sales partagent une définition unique du compte prêt à être contacté",
          'Les canaux sont séquencés entre eux au lieu de fonctionner en parallèle',
        ],
      },
      {
        h2: 'Comparaison point par point',
        paragraphs: [],
      },
      {
        h2: 'Quand rester en ABM',
        paragraphs: [
          "L'ABX n'est pas une amélioration universelle. Il suppose une infrastructure de données et une discipline opérationnelle qui ne se justifient pas partout.",
          "Rester en ABM classique est plus rationnel si votre marché adressable tient en quelques dizaines de comptes connus nommément, si votre cycle de vente se compte en semaines, ou si votre valeur contrat ne dépasse pas quelques centaines d'euros. Dans ces cas, le coût de construction du système dépasse le gain de précision.",
          "L'ABX devient rentable quand le marché est trop large pour être couvert à la main, le cycle assez long pour que le timing compte, et la valeur contrat assez élevée pour qu'un rendez-vous manqué coûte cher.",
        ],
      },
      {
        h2: 'Ce que coûte le passage',
        paragraphs: [
          "Le passage à l'ABX est un chantier d'infrastructure, pas un changement de campagne. Il demande de structurer le marché adressable en tiers, de nettoyer le CRM, de connecter les sources de signaux, de définir les règles de scoring et de documenter les séquences déclenchées.",
          "Dans les missions que j'opère, ces fondations prennent trois mois — le temps nécessaire pour disposer de données exploitables plutôt que d'intuitions. Les trois mois suivants servent à amplifier ce qui fonctionne et à transférer le système en interne.",
        ],
      },
    ],
    table: {
      head: ['', 'ABM', 'ABX'],
      rows: [
        ['Nature', 'Une campagne', 'Un système'],
        ['Liste de comptes', "Figée au lancement", 'Réévaluée en continu'],
        ['Déclencheur', 'Le calendrier marketing', "Le signal d'intention du compte"],
        ['Rythme', 'Planifié par trimestre', 'Réactif, en continu'],
        ['Propriété', 'Le marketing', 'Marketing et sales, conjointement'],
        ['Canaux', 'Activés en parallèle', 'Séquencés selon la maturité du compte'],
        ['Mesure', 'Clics, impressions, MQL', 'Pipeline créé, coût par compte engagé'],
        ['Prérequis', 'Une liste et un budget média', 'Données, stack connectée, règles de scoring'],
      ],
    },
    ctaTitle: 'Votre marché mérite mieux qu’une liste figée',
    ctaBody:
      "Si vous opérez déjà en ABM et que le pipeline ne suit pas, le problème est rarement le message — c'est le moment où il part. Parlons de vos comptes et de ce que vos données disent déjà.",
    ctaButton: 'Discutons de vos enjeux',
    backHome: 'Découvrir le système ABX',
    updated: '13 novembre 2026',
  },
  'gtm-engineering': {
    metaTitle: "Qu'est-ce que le GTM Engineering ? | Flow Ops",
    metaDescription:
      "Le GTM Engineering traite l'acquisition B2B comme un système technique : données connectées, signaux détectés, actions déclenchées automatiquement. Rôle, périmètre, stack et différence avec une agence ou un SDR.",
    eyebrow: 'Go-To-Market Engineering',
    h1: "Qu'est-ce que le GTM Engineering ?",
    standfirst:
      "Un rôle hybride entre growth marketing, sales ops et automatisation, apparu parce que les équipes B2B ont cessé de pouvoir exécuter à la main ce que leurs outils savent désormais faire tourner seuls.",
    keyAnswer:
      "Le GTM Engineering consiste à traiter l'acquisition B2B comme un système technique plutôt que comme une suite de tâches manuelles. Un GTM Engineer connecte les sources de données, les outils d'enrichissement, le CRM et les canaux d'activation en un flux unique et documenté : la donnée entre, elle est enrichie et scorée, les signaux sont détectés, et les actions se déclenchent automatiquement.",
    sections: [
      {
        h2: "D'où vient ce rôle",
        paragraphs: [
          "Pendant quinze ans, la prospection B2B a été un problème de volume : plus de contacts, plus d'emails, plus d'appels. Ce modèle a cessé de fonctionner pour deux raisons simultanées — les boîtes de réception se sont saturées, et les outils d'enrichissement et d'automatisation sont devenus assez puissants pour que la contrainte se déplace.",
          "La contrainte n'est plus la capacité d'exécution, c'est la capacité d'orchestration. Savoir quel compte contacter, à quel moment et par quel canal demande désormais de faire dialoguer une dizaine d'outils. C'est un travail d'ingénierie, et c'est précisément ce que recouvre le GTM Engineering.",
        ],
      },
      {
        h2: 'Ce que fait concrètement un GTM Engineer',
        paragraphs: [
          "Il construit le flux qui relie la donnée brute à l'action commerciale, et il le documente pour que l'équipe puisse l'opérer sans lui.",
        ],
        bullets: [
          'Cartographier le marché adressable et le structurer en tiers de priorité',
          "Connecter les sources de données et les outils d'enrichissement au CRM",
          "Définir les signaux d'intention qui comptent, et les règles de scoring associées",
          'Automatiser les séquences multicanal déclenchées par ces signaux',
          "Instrumenter la mesure pour que chaque itération s'appuie sur de la donnée",
          "Documenter l'ensemble et transférer la compétence en interne",
        ],
      },
      {
        h2: 'La différence avec une agence ou un SDR externalisé',
        paragraphs: [
          "Une agence opère des campagnes pour vous. Un SDR externalisé exécute un volume d'appels et d'emails. Dans les deux cas, le travail est une prestation d'exécution : l'expertise repart avec le prestataire à la fin du contrat, et il faut recommencer.",
          "Un GTM Engineer construit l'infrastructure qui rend ces deux métiers plus efficaces. Ce qui reste après la mission n'est pas un rapport, c'est un système : la cartographie du marché, la stack configurée, les séquences, les règles de scoring et les playbooks — votre propriété.",
          "La distinction est économique autant qu'opérationnelle. Une agence est une dépense récurrente ; un système est un investissement en capital, qui continue de produire quand la mission s'arrête.",
        ],
      },
      {
        h2: 'La stack type',
        paragraphs: [
          "Il n'y a pas de stack canonique, et c'est volontaire : l'objectif est d'orchestrer les outils que vous avez déjà, pas de tout remplacer. Quatre familles reviennent néanmoins systématiquement.",
        ],
        bullets: [
          'Données et ciblage — Pharow, LinkedIn Sales Navigator, scraping sur-mesure',
          "Orchestration — Clay et Claude Code, pour l'enrichissement, le scoring et la détection de signaux",
          "Automatisation — Zapier, lemlist, Clay, pour l'exécution des séquences multicanal",
          'Signaux personnalisés — Snitcher pour la déanonymisation du trafic, BuiltWith pour la détection de technologies',
        ],
      },
      {
        h2: 'Quand faire appel à un GTM Engineer',
        paragraphs: [
          "Le signal le plus fiable est un écart : vos outils produisent de la donnée que personne n'exploite, ou vos commerciaux passent plus de temps à chercher qui appeler qu'à appeler.",
          "Les autres déclencheurs classiques sont un CRM devenu inexploitable, des campagnes payantes qui tournent sans être reliées au pipeline, une transition d'équipe à couvrir, ou un marché adressable trop large pour être travaillé à la main.",
          "Le prérequis reste le même que pour l'ABX : une offre déjà validée et un panier moyen supérieur à 2 000 €. En dessous, une approche volume reste plus rentable.",
        ],
      },
    ],
    ctaTitle: 'Vos outils produisent déjà la donnée',
    ctaBody:
      "La plupart des équipes B2B disposent de bien plus de signaux qu'elles n'en exploitent. Un premier échange suffit généralement à identifier ce qui dort dans votre stack actuelle.",
    ctaButton: 'Discutons de vos enjeux',
    backHome: 'Voir le système ABX complet',
    updated: '13 novembre 2026',
  },
};

// Populated by i18n/pages.en.ts to keep each language in its own file.
import { en } from './pages.en';

export const articles: Record<Locale, Record<Slug, Article>> = { fr, en };
