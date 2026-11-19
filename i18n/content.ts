export type Locale = 'fr' | 'en';

// Rich sentences are split into parts instead of carrying markup, so the
// dictionary stays plain data and translators never touch JSX.
//
// Voice (French): the vocabulary of the manager who sells, not of the growth
// team. "Qui appeler", "la raison de l'appel", "le score" — never TAM, stack,
// infrastructure or tool names in what addresses the buyer. No trade-show
// framing (many clients do not exhibit), and the high-end offer is called
// "ABM en masse", never ABX. French typography
// throughout:   before : ; ! ? and inside « », typographic apostrophes, no
// em or en dash used as sentence punctuation.
export interface Content {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: { cta: string; switchTo: string; switchLabel: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    subtitleBefore: string;
    subtitleHighlight: string;
    subtitleAfter: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaNote: string;
    scrollAria: string;
    proofAlready: string;
    proofCount: string;
    proofSystems: string;
    proofDeployed: string;
    sectors: string[];
    proofNote: string;
    testimonialsLabel: string;
    blockedTitle: string;
    blockedBody: string;
    blockedAllow: string;
    blockedView: string;
  };
  /** Prefilled email that requests the free list: no form, so no data stored. */
  freeList: { mailSubject: string; mailBody: string };
  method: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    oldTitle: string;
    oldBody: string;
    newTitle: string;
    newBody: string;
    step1: string;
    step2: string;
    step2Badge: string;
    step3: string;
    step3Badge: string;
  };
  sample: {
    eyebrow: string;
    title: string;
    subtitle: string;
    context: string;
    labelScore: string;
    labelSignals: string;
    labelReason: string;
    labelOpener: string;
    rows: { company: string; score: number; signals: string[]; reason: string; opener: string }[];
    footnote: string;
    scoringTitle: string;
    scoringParts: { name: string; body: string }[];
    scoringRule: string;
  };
  offers: {
    title: string;
    subtitle: string;
    /** Exactly three, in order: free list, monthly subscription, full engagement. */
    tiers: {
      name: string;
      price: string;
      priceNote: string;
      body: string;
      points: string[];
      cta: string;
    }[];
    compare: string;
    oneOff: string;
    oneOffCta: string;
    oneOffMailSubject: string;
    quoteMailSubject: string;
  };
  pillars: {
    titleBefore: string;
    titleAccent: string;
    subtitleBefore: string;
    subtitleHighlight: string;
    subtitleAfter: string;
    items: { name: string; description: string }[];
    outcomeMeetings: string;
    outcomeProcess: string;
    outcomeFinal: string;
  };
  /** "Where the signals come from" — the section that says this is a service. */
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tools: { title: string; tag: string; desc: string }[];
  };
  timeline: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string; tags: string[] }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
    readMore: string;
  };
  footer: {
    tagline: string;
    addressLabel: string;
    rights: string;
    privacy: string;
    cookies: string;
  };
  cookies: {
    title: string;
    body: string;
    refuse: string;
    accept: string;
    more: string;
  };
  privacyNotice: string | null;
}

export const fr: Content = {
  meta: {
    title: 'Flow Ops | Conseil en prospection B2B : qui appeler lundi',
    description:
      'Conseil en prospection B2B pour éditeurs de logiciels et fabricants d’équipements. Chaque lundi, 10 à 20 entreprises à appeler, avec la raison de l’appel.',
    ogLocale: 'fr_FR',
  },
  nav: { cta: 'Discutons de vos enjeux', switchTo: 'EN', switchLabel: 'Switch to English' },
  hero: {
    badge: 'Engager les bons prospects au bon moment',
    titleLine1: 'Chaque lundi, les entreprises à appeler.',
    titleAccent: 'Et la raison de l’appel.',
    subtitleBefore: 'Flow Ops croise plusieurs signaux pour repérer les entreprises de votre marché ',
    subtitleHighlight: 'prêtes à vous écouter',
    subtitleAfter:
      '\u00a0: 10 à 20 par semaine, classées par score, chacune avec une phrase d’ouverture pour vos commerciaux.',
    ctaPrimary: 'Recevoir 20 entreprises de mon marché',
    ctaSecondary: 'Prendre rendez-vous',
    ctaNote: 'Première liste gratuite, envoyée par email, sans rendez-vous.',
    scrollAria: 'Défiler vers la méthode',
    proofAlready: 'Déjà',
    proofCount: '+10',
    proofSystems: 'systèmes',
    proofDeployed: 'de prospection déployés',
    sectors: ['Cybersécurité', 'Éditeurs de logiciels', 'Fabricants d’équipements', 'Deeptech'],
    proofNote: 'Missions confidentielles opérées en direct ou via des collectifs.',
    testimonialsLabel: 'Ils en parlent',
    blockedTitle: 'Témoignage LinkedIn',
    blockedBody:
      'L’affichage de cette publication dépose des traceurs LinkedIn. Il requiert votre accord.',
    blockedAllow: 'Autoriser et afficher',
    blockedView: 'Voir sur LinkedIn',
  },
  freeList: {
    mailSubject: 'Ma liste de 20 entreprises',
    mailBody:
      'Bonjour Patrice,\n\nJe souhaite recevoir la liste de 20 entreprises de mon marché.\n\nAdresse de notre site : \nType de clients que nous visons : \n',
  },
  method: {
    eyebrow: 'Un flux régulier d’entreprises à appeler, toute l’année',
    titleLine1: 'Un fichier dit qui existe.',
    titleAccent: 'Le score dit qui appeler.',
    oldTitle: 'Le fichier de prospection habituel',
    oldBody:
      'Une liste figée, sans ordre de priorité. Vos commerciaux appellent à l’aveugle, et le CRM se remplit d’entreprises que personne ne rappelle.',
    newTitle: 'Plusieurs signaux, un seul score',
    newBody:
      'Un recrutement seul ne dit pas grand-chose. Un recrutement, un nouveau dirigeant et deux visites sur votre site dans la même quinzaine, si. Chaque entreprise reçoit un score qui additionne ces signaux, et la liste du lundi commence par les mieux notées.',
    step1: '1. Votre marché, entreprise par entreprise',
    step2: '2. Les signaux de la semaine, croisés et notés',
    step2Badge: 'Score',
    step3: '3. Les mieux notées, par email',
    step3Badge: 'Lundi',
  },
  sample: {
    eyebrow: 'Exemple',
    title: 'Ce que votre commercial reçoit le lundi',
    subtitle:
      'Pour chaque entreprise\u00a0: son score, les signaux qui l’expliquent, la raison de l’appel et une phrase pour commencer.',
    context:
      'Exemple fictif, pour un fabricant de machines d’emballage qui vend aux industriels de l’agroalimentaire.',
    labelScore: 'Score',
    labelSignals: 'Signaux',
    labelReason: 'Raison de l’appel',
    labelOpener: 'Phrase d’ouverture',
    rows: [
      {
        company: 'Laiterie, 140 salariés, Ille-et-Vilaine',
        score: 86,
        signals: [
          'Changement de président publié le 3 novembre',
          'Recrute un responsable de production',
          'Deux visites sur votre page produit cette semaine',
        ],
        reason:
          'Nouvelle direction, production qui monte et intérêt pour vos machines\u00a0: un projet est ouvert.',
        opener:
          '«\u00a0J’ai vu que la direction venait de changer. Le renouvellement de vos lignes d’emballage fait-il partie des sujets ouverts\u00a0?\u00a0»',
      },
      {
        company: 'Biscuiterie, 85 salariés, Loire-Atlantique',
        score: 71,
        signals: [
          'Transfert du siège vers un nouveau site',
          'Recrute un responsable de production depuis le 28 octobre',
        ],
        reason: 'Un nouveau site et un poste de production ouvert annoncent une ligne à équiper.',
        opener:
          '«\u00a0Félicitations pour le nouveau site. Qui pilote le choix des équipements de conditionnement\u00a0?\u00a0»',
      },
      {
        company: 'Conserverie, 210 salariés, Finistère',
        score: 64,
        signals: ['Reprise par un nouvel actionnaire en octobre', 'Une visite sur votre site'],
        reason: 'Une reprise s’accompagne souvent d’un plan d’investissement dans l’année.',
        opener:
          '«\u00a0Avec l’arrivée du nouvel actionnaire, un plan d’investissement est-il prévu sur le conditionnement\u00a0?\u00a0»',
      },
    ],
    footnote:
      'Dans votre liste, chaque ligne porte le nom de l’entreprise, la source de chaque signal et le contact à appeler.',
    scoringTitle: 'Comment le score se calcule',
    scoringParts: [
      {
        name: 'Ce que l’entreprise est',
        body: 'Secteur, taille, région. Plus elle ressemble à vos meilleurs clients, plus elle part de haut.',
      },
      {
        name: 'Ce qu’elle fait en ce moment',
        body: 'Un recrutement, un changement de dirigeant, une visite de votre site. Chaque signal ajoute des points.',
      },
      {
        name: 'Depuis quand',
        body: 'Un signal de la semaine pèse plus qu’un signal d’il y a trois mois.',
      },
    ],
    scoringRule:
      'Les entreprises les mieux notées ouvrent la liste du lundi. La grille de points vous est remise\u00a0: vous savez pourquoi une entreprise est en tête.',
  },
  offers: {
    title: 'Les offres',
    subtitle:
      'Une première liste gratuite pour juger sur pièces, puis un abonnement sans engagement. L’ABM en masse le complète quand il faut aussi la publicité et les séquences.',
    tiers: [
      {
        name: 'La première liste',
        price: 'Gratuite',
        priceNote: 'par email, sans rendez-vous',
        body: '20 entreprises de votre marché classées par score, avec les signaux relevés et la raison d’appeler chacune.',
        points: [
          'Une phrase d’ouverture par entreprise',
          'Vos clients et prospects connus séparés des entreprises nouvelles, si vous joignez un export de votre CRM',
          'Une revue de 30 minutes avec votre commercial, si vous le souhaitez',
        ],
        cta: 'Recevoir ma liste',
      },
      {
        name: 'Qui appeler lundi',
        price: '1\u00a0200\u00a0€ HT',
        priceNote: 'par mois, outils compris',
        body: 'Chaque lundi, les 10 à 20 entreprises les mieux notées de votre marché, avec la raison de l’appel et une phrase d’ouverture.',
        points: [
          'Par email, avec un fichier prêt à importer dans votre CRM',
          'Sans frais de mise en place, sans engagement, résiliable chaque mois',
          'Une heure par mois sur les appels passés et les rendez-vous obtenus',
          'Un seul client par marché concurrent',
        ],
        cta: 'Discutons de vos enjeux',
      },
      {
        name: 'ABM en masse',
        price: 'Sur devis',
        priceNote: 'trois mois d’engagement',
        body: 'En complément de la liste\u00a0: la publicité LinkedIn sur vos comptes les mieux notés, les séquences de prospection et les contenus.',
        points: [
          'Plusieurs centaines de comptes suivis et classés par score',
          'Publicité et séquences pilotées chaque semaine',
          'Documentation complète et transfert à votre équipe',
        ],
        cta: 'Demander un devis',
      },
    ],
    compare:
      'Pour comparaison, un SDR externalisé coûte de 3 000 à 8 000 € par mois, le plus souvent avec six mois d’engagement.',
    oneOff:
      'Des missions ponctuelles sont possibles : audit de vos outils de prospection, campagnes LinkedIn Ads, constitution d’un fichier de comptes.',
    oneOffCta: 'Écrire à Patrice',
    oneOffMailSubject: 'Demande de devis - Mission ponctuelle',
    quoteMailSubject: 'Demande de devis - ABM en masse',
  },
  pillars: {
    titleBefore: 'L’ABM en masse\u00a0:',
    titleAccent: 'quatre canaux coordonnés',
    subtitleBefore:
      'L’ABM classique soigne quelques dizaines de comptes à la main. Ici, le score décide pour plusieurs centaines\u00a0: quel compte, quel canal, quel moment. Publicité, contenus et séquences sont ',
    subtitleHighlight: 'menés ensemble',
    subtitleAfter: '.',
    items: [
      {
        name: 'Prospection',
        description: 'Des messages écrits pour chaque compte, envoyés quand le signal tombe.',
      },
      {
        name: 'Publicité',
        description: 'Sur LinkedIn, vos comptes cibles voient votre nom avant le premier appel.',
      },
      {
        name: 'Score',
        description: 'Les signaux de chaque compte, croisés et notés chaque semaine.',
      },
      {
        name: 'Contenus',
        description: 'Des guides et des pages qui répondent aux questions de vos acheteurs.',
      },
    ],
    outcomeMeetings: 'Rendez-vous qualifiés',
    outcomeProcess: 'Suivi par vos commerciaux',
    outcomeFinal: 'De la conversation à la signature',
  },
  stack: {
    eyebrow: 'Une prestation, pas un logiciel',
    title: 'D’où viennent les signaux',
    subtitle: 'Flow Ops exploite les relevés et les outils. Vous recevez la liste.',
    tools: [
      {
        title: 'Registres publics',
        tag: 'BODACC, registre des entreprises',
        desc: 'Changements de dirigeant, reprises, transferts de siège : des faits datés, que votre commercial peut citer.',
      },
      {
        title: 'Score et rédaction',
        tag: 'Claude, connecteurs API',
        desc: 'Les signaux de chaque entreprise sont croisés et notés, puis traduits en raison d’appel et en phrase d’ouverture.',
      },
      {
        title: 'Recrutements',
        tag: 'Pages carrières, sites d’emploi',
        desc: 'Une entreprise qui ouvre un poste investit. L’offre d’emploi dit où.',
      },
      {
        title: 'Vos propres données',
        tag: 'Export CRM, visites de votre site',
        desc: 'Vos clients et prospects connus sont reconnus dans la liste, et une visite sur votre site ajoute des points.',
      },
    ],
  },
  timeline: {
    title: 'Déroulé d’une mission d’ABM en masse',
    subtitle: 'Trois mois, de la liste de vos comptes aux premiers rendez-vous',
    steps: [
      {
        title: 'Fondations',
        desc: 'Votre marché est listé, le CRM nettoyé, les signaux à suivre et la grille de points choisis avec vos commerciaux.',
        tags: ['Marché listé', 'Grille de score'],
      },
      {
        title: 'Lancement',
        desc: 'Publicité, séquences et contenus partent ensemble. Chaque semaine, les résultats décident de ce qui continue.',
        tags: ['Prospection', 'Publicité LinkedIn', 'Score'],
      },
      {
        title: 'Transfert',
        desc: 'Ce qui produit des rendez-vous est renforcé, le reste est arrêté. Votre équipe reprend la main, documentation à l’appui.',
        tags: ['Revue du pipeline', 'Documentation'],
      },
    ],
  },
  faq: {
    readMore: 'Approfondir',
    title: 'Questions fréquentes',
    subtitle: 'Ce que fait Flow Ops, pour qui, et à quel prix',
    items: [
      {
        q: 'Que fait Flow Ops\u00a0?',
        a: 'Flow Ops est l’activité de conseil en prospection B2B de Patrice Tord. Ce n’est ni un logiciel ni une plateforme d’automatisation\u00a0: c’est une prestation.\n\nChaque lundi, vos commerciaux reçoivent par email les 10 à 20 entreprises de votre marché à appeler cette semaine, classées par score, avec pour chacune les signaux relevés, la raison de l’appel et une phrase d’ouverture. Flow Ops exploite les outils qui produisent cette liste. Vous n’installez rien.',
      },
      {
        q: 'Qu’est-ce que «\u00a0Qui appeler lundi\u00a0»\u00a0?',
        a: 'C’est l’abonnement de Flow Ops. Chaque lundi, vous recevez les 10 à 20 entreprises les mieux notées de votre marché, avec les signaux qui expliquent leur score, la raison d’appeler chacune et une phrase d’ouverture. La liste arrive par email, avec un fichier prêt à importer dans votre CRM. Une heure par mois sert à revoir les appels passés et les rendez-vous obtenus.\n\nSi vous transmettez un export de votre CRM, la liste distingue les entreprises nouvelles de celles que vous connaissez déjà. Avant de vous abonner, vous recevez gratuitement une première liste de 20 entreprises, pour juger sur pièces.',
      },
      {
        q: 'Comment le score est-il calculé\u00a0?',
        a: 'Le score additionne trois choses. Ce que l’entreprise est\u00a0: son secteur, sa taille, sa région, comparés à vos meilleurs clients. Ce qu’elle fait en ce moment\u00a0: un recrutement, un changement de dirigeant, une visite de votre site, chaque signal ajoutant des points. Et depuis quand\u00a0: un signal de la semaine pèse plus qu’un signal d’il y a trois mois.\n\nUn signal isolé ne suffit pas à faire monter une entreprise. C’est leur combinaison qui la place en tête de liste. La grille de points vous est remise\u00a0: vous savez pourquoi une entreprise est à appeler.',
      },
      {
        q: 'Quels signaux sont suivis\u00a0?',
        a: 'Des faits vérifiables, tirés de sources publiques et de vos propres données\u00a0: les changements de dirigeant, les reprises et les transferts de siège publiés au BODACC et au registre des entreprises, les recrutements relevés sur les pages carrières et les sites d’emploi, et les visites sur votre site.\n\nLes signaux retenus et leur poids dépendent de votre marché. Un signal n’entre dans le score que s’il peut être daté et vérifié.',
      },
      {
        q: 'Combien coûte «\u00a0Qui appeler lundi\u00a0»\u00a0?',
        a: '1\u00a0200\u00a0€ HT par mois, outils compris, sans frais de mise en place et sans engagement\u00a0: l’abonnement se résilie à la fin de chaque mois. La première liste de 20 entreprises est gratuite.\n\nPour comparaison, un SDR externalisé coûte de 3\u00a0000 à 8\u00a0000\u00a0€ par mois, le plus souvent avec six mois d’engagement. L’ABM en masse, avec publicité LinkedIn et séquences de prospection, fait l’objet d’un devis.',
      },
      {
        q: 'Quelle différence avec un SDR externalisé ou une agence de prospection\u00a0?',
        a: 'Un SDR externalisé passe des appels à votre place, une agence envoie des messages en volume. Flow Ops ne remplace pas vos commerciaux\u00a0: il leur dit qui appeler et leur donne la raison de l’appel. La relation avec le prospect reste chez vous.\n\nL’abonnement est sans engagement et coûte moins qu’un SDR externalisé. Il suppose en revanche qu’au moins une personne chez vous appelle la liste.',
      },
      {
        q: 'À quelles entreprises l’offre s’adresse-t-elle\u00a0?',
        a: 'Aux entreprises B2B françaises de 50 à 249 salariés, en particulier les éditeurs de logiciels et les fabricants d’équipements, qui vendent un produit à plus de 15\u00a0000\u00a0€ ou sous contrat pluriannuel, sur un cycle de plusieurs mois, avec au moins deux personnes qui vendent.\n\nL’offre ne convient pas si votre panier est inférieur à 5\u00a0000\u00a0€, ou si personne chez vous ne peut appeler la liste.',
      },
      {
        q: 'Faut-il installer un outil ou changer de CRM\u00a0?',
        a: 'Non. La liste arrive par email, avec un fichier Excel prêt à importer dans le CRM ou l’ERP que vous utilisez déjà. Les outils de relevé et de score sont exploités par Flow Ops et compris dans l’abonnement.\n\nL’écriture directe dans votre CRM est possible. Elle se chiffre à part, selon l’outil.',
      },
      {
        q: 'Qu’est-ce que l’ABM en masse\u00a0?',
        a: 'L’ABM (Account Based Marketing) classique concentre l’effort marketing et commercial sur quelques dizaines de comptes, traités à la main. L’ABM en masse applique la même logique à plusieurs centaines de comptes\u00a0: le score de chaque entreprise décide du canal, publicité LinkedIn, séquence de prospection ou appel, et du moment.\n\nC’est l’offre complète de Flow Ops, en complément de la liste du lundi. Elle pose les fondations en trois mois, puis se prolonge ou se transfère à votre équipe, documentation comprise.',
      },
      {
        q: 'Qu’est-ce que le GTM Engineering\u00a0?',
        a: 'Le GTM Engineering consiste à traiter la prospection B2B comme un système documenté plutôt que comme une suite de tâches manuelles\u00a0: les données du marché sont relevées, les signaux croisés et notés, et les actions commerciales déclenchées selon des règles écrites.\n\nC’est la méthode de travail de Flow Ops. Ce que vous achetez, c’est le résultat\u00a0: la liste du lundi.',
      },
    ],
  },
  footer: {
    tagline:
      'Conseil en prospection B2B pour les éditeurs de logiciels et les fabricants d’équipements. Chaque lundi, les entreprises à appeler et la raison de l’appel.',
    addressLabel: 'Siège social',
    rights: '© 2026 Flow Ops. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    cookies: 'Gérer les traceurs',
  },
  cookies: {
    title: 'Votre choix sur les traceurs',
    body: "Nous utilisons des traceurs pour analyser l'usage du site (PostHog, hébergé dans l'Union européenne). Cela inclut l'enregistrement anonyme des sessions de navigation, afin de comprendre où les visiteurs décrochent. Nous chargeons également les témoignages publiés sur LinkedIn. Sans votre accord, aucun traceur n'est déposé, aucune session n'est enregistrée et les témoignages restent masqués. Vous pouvez changer d'avis à tout moment depuis le pied de page.",
    refuse: 'Tout refuser',
    accept: 'Tout accepter',
    more: 'En savoir plus sur les données collectées',
  },
  privacyNotice: null,
};

export const en: Content = {
  meta: {
    title: 'Flow Ops | B2B prospecting consultancy: who to call on Monday',
    description:
      'B2B prospecting consultancy for software vendors and equipment manufacturers. Every Monday, 10 to 20 companies to call, each with the reason for the call.',
    ogLocale: 'en_GB',
  },
  nav: { cta: "Let's discuss your challenges", switchTo: 'FR', switchLabel: 'Passer en français' },
  hero: {
    badge: 'Engaging the right prospects at the right moment',
    titleLine1: 'Every Monday, the companies to call.',
    titleAccent: 'And the reason for the call.',
    subtitleBefore: 'Flow Ops cross-checks several signals to spot the companies in your market ',
    subtitleHighlight: 'ready to listen',
    subtitleAfter:
      ': 10 to 20 a week, ranked by score, each with an opening line for your sales team.',
    ctaPrimary: 'Get 20 companies from my market',
    ctaSecondary: 'Book a call',
    ctaNote: 'First list free, sent by email, no meeting required.',
    scrollAria: 'Scroll to the method',
    proofAlready: 'Already',
    proofCount: '10+',
    proofSystems: 'prospecting',
    proofDeployed: 'systems deployed',
    sectors: ['Cybersecurity', 'Software vendors', 'Equipment manufacturers', 'Deeptech'],
    proofNote: 'Confidential engagements, run directly or through collectives.',
    testimonialsLabel: 'What clients say',
    blockedTitle: 'LinkedIn testimonial',
    blockedBody:
      'Displaying this post sets LinkedIn tracking cookies. It requires your consent.',
    blockedAllow: 'Allow and display',
    blockedView: 'View on LinkedIn',
  },
  freeList: {
    mailSubject: 'My list of 20 companies',
    mailBody:
      'Hello Patrice,\n\nI would like to receive the list of 20 companies from my market.\n\nOur website: \nThe kind of customers we target: \n',
  },
  method: {
    eyebrow: 'A steady flow of companies to call, all year round',
    titleLine1: 'A list says who exists.',
    titleAccent: 'The score says who to call.',
    oldTitle: 'The usual prospecting list',
    oldBody:
      'A static list with no order of priority. Your sales reps call blind, and the CRM fills up with companies nobody calls back.',
    newTitle: 'Several signals, one score',
    newBody:
      'A single job advert says little. A job advert, a new chief executive and two visits to your site in the same fortnight say a lot. Each company gets a score that adds these signals up, and the Monday list starts with the highest.',
    step1: '1. Your market, company by company',
    step2: '2. This week’s signals, cross-checked and scored',
    step2Badge: 'Score',
    step3: '3. The highest scores, by email',
    step3Badge: 'Monday',
  },
  sample: {
    eyebrow: 'Example',
    title: 'What your sales rep receives on Monday',
    subtitle:
      'For each company: its score, the signals behind it, the reason for the call and a line to open with.',
    context:
      'Fictional example, for a packaging-machinery manufacturer selling to food producers.',
    labelScore: 'Score',
    labelSignals: 'Signals',
    labelReason: 'Reason for the call',
    labelOpener: 'Opening line',
    rows: [
      {
        company: 'Dairy, 140 employees, Brittany',
        score: 86,
        signals: [
          'Change of chairman published on 3 November',
          'Hiring a production manager',
          'Two visits to your product page this week',
        ],
        reason:
          'New leadership, rising output and interest in your machines: a project is open.',
        opener:
          '“I saw that the leadership has just changed. Is renewing your packaging lines one of the open topics?”',
      },
      {
        company: 'Biscuit maker, 85 employees, Loire-Atlantique',
        score: 71,
        signals: [
          'Head office moving to a new site',
          'Hiring a production manager since 28 October',
        ],
        reason: 'A new site and an open production role point to a line that needs equipping.',
        opener:
          '“Congratulations on the new site. Who is leading the choice of packaging equipment?”',
      },
      {
        company: 'Cannery, 210 employees, Finistère',
        score: 64,
        signals: ['Acquired by a new shareholder in October', 'One visit to your site'],
        reason: 'An acquisition often comes with an investment plan within the year.',
        opener:
          '“With the new shareholder on board, is an investment plan expected on packaging?”',
      },
    ],
    footnote:
      'In your list, each line carries the company name, the source of every signal and the contact to call.',
    scoringTitle: 'How the score is calculated',
    scoringParts: [
      {
        name: 'What the company is',
        body: 'Sector, size, region. The closer it is to your best customers, the higher it starts.',
      },
      {
        name: 'What it is doing right now',
        body: 'A hire, a change of chief executive, a visit to your site. Each signal adds points.',
      },
      {
        name: 'How recently',
        body: 'A signal from this week weighs more than one from three months ago.',
      },
    ],
    scoringRule:
      'The highest-scoring companies open the Monday list. You receive the points grid: you know why a company is at the top.',
  },
  offers: {
    title: 'The offers',
    subtitle:
      'A first list, free, so you can judge for yourself, then a subscription with no commitment. ABM at scale complements it when advertising and sequences are needed too.',
    tiers: [
      {
        name: 'The first list',
        price: 'Free',
        priceNote: 'by email, no meeting required',
        body: '20 companies in your market ranked by score, with the signals found and the reason to call each one.',
        points: [
          'An opening line for each company',
          'Your known customers and prospects separated from new companies, if you attach a CRM export',
          'A 30-minute review with your sales rep, if you want one',
        ],
        cta: 'Get my list',
      },
      {
        name: 'Who to call on Monday',
        price: '€1,200 excl. VAT',
        priceNote: 'per month, tools included',
        body: 'Every Monday, the 10 to 20 highest-scoring companies in your market, with the reason for the call and an opening line.',
        points: [
          'By email, with a file ready to import into your CRM',
          'No setup fee, no commitment, cancel at the end of any month',
          'One hour a month on calls made and meetings booked',
          'One client only per competing market',
        ],
        cta: "Let's discuss your challenges",
      },
      {
        name: 'ABM at scale',
        price: 'On quotation',
        priceNote: 'three-month commitment',
        body: 'On top of the list: LinkedIn advertising to your highest-scoring accounts, prospecting sequences and content.',
        points: [
          'Several hundred accounts tracked and ranked by score',
          'Advertising and sequences managed every week',
          'Complete documentation and handover to your team',
        ],
        cta: 'Request a quote',
      },
    ],
    compare:
      'For comparison, an outsourced SDR costs €3,000 to €8,000 a month, usually with a six-month commitment.',
    oneOff:
      'One-off engagements are also possible: an audit of your prospecting tools, LinkedIn Ads campaigns, building an account list.',
    oneOffCta: 'Write to Patrice',
    oneOffMailSubject: 'Quote request - One-off engagement',
    quoteMailSubject: 'Quote request - ABM at scale',
  },
  pillars: {
    titleBefore: 'ABM at scale:',
    titleAccent: 'four coordinated channels',
    subtitleBefore:
      'Classic ABM tends a few dozen accounts by hand. Here the score decides for several hundred: which account, which channel, which moment. Advertising, content and sequences are ',
    subtitleHighlight: 'run together',
    subtitleAfter: '.',
    items: [
      {
        name: 'Prospecting',
        description: 'Messages written for each account, sent when the signal appears.',
      },
      {
        name: 'Advertising',
        description: 'On LinkedIn, your target accounts see your name before the first call.',
      },
      {
        name: 'Score',
        description: 'Each account’s signals, cross-checked and scored every week.',
      },
      {
        name: 'Content',
        description: 'Guides and pages that answer your buyers’ questions.',
      },
    ],
    outcomeMeetings: 'Qualified meetings',
    outcomeProcess: 'Follow-up by your sales team',
    outcomeFinal: 'From conversation to signature',
  },
  stack: {
    eyebrow: 'A service, not software',
    title: 'Where the signals come from',
    subtitle: 'Flow Ops runs the data collection and the tools. You receive the list.',
    tools: [
      {
        title: 'Public registers',
        tag: 'BODACC, company register',
        desc: 'Changes of chief executive, acquisitions, head-office moves: dated facts your rep can quote.',
      },
      {
        title: 'Scoring and writing',
        tag: 'Claude, API connectors',
        desc: 'Each company’s signals are cross-checked and scored, then turned into a reason to call and an opening line.',
      },
      {
        title: 'Hiring',
        tag: 'Careers pages, job boards',
        desc: 'A company opening a role is investing. The job advert says where.',
      },
      {
        title: 'Your own data',
        tag: 'CRM export, visits to your site',
        desc: 'Your known customers and prospects are recognised in the list, and a visit to your site adds points.',
      },
    ],
  },
  timeline: {
    title: 'How an ABM-at-scale engagement unfolds',
    subtitle: 'Three months, from your account list to the first meetings',
    steps: [
      {
        title: 'Foundations',
        desc: 'Your market is listed, the CRM cleaned up, and the signals to track and the points grid chosen with your sales team.',
        tags: ['Market listed', 'Scoring grid'],
      },
      {
        title: 'Launch',
        desc: 'Advertising, sequences and content start together. Each week, results decide what continues.',
        tags: ['Prospecting', 'LinkedIn advertising', 'Score'],
      },
      {
        title: 'Handover',
        desc: 'What produces meetings is reinforced, the rest is stopped. Your team takes over, with documentation to hand.',
        tags: ['Pipeline review', 'Documentation'],
      },
    ],
  },
  faq: {
    readMore: 'Read further',
    title: 'Frequently asked questions',
    subtitle: 'What Flow Ops does, for whom, and at what price',
    items: [
      {
        q: 'What does Flow Ops do?',
        a: 'Flow Ops is the B2B prospecting consultancy of Patrice Tord. It is neither software nor an automation platform: it is a service.\n\nEvery Monday, your sales team receives by email the 10 to 20 companies in your market to call that week, ranked by score, each with the signals found, the reason for the call and an opening line. Flow Ops runs the tools that produce the list. You install nothing.',
      },
      {
        q: 'What is “Who to call on Monday”?',
        a: 'It is the Flow Ops subscription. Every Monday you receive the 10 to 20 highest-scoring companies in your market, with the signals behind their score, the reason to call each one and an opening line. The list arrives by email, with a file ready to import into your CRM. One hour a month is spent reviewing the calls made and the meetings booked.\n\nIf you share a CRM export, the list separates new companies from those you already know. Before subscribing, you receive a first list of 20 companies free of charge, so you can judge for yourself.',
      },
      {
        q: 'How is the score calculated?',
        a: 'The score adds up three things. What the company is: its sector, size and region, compared with your best customers. What it is doing right now: a hire, a change of chief executive, a visit to your site, each signal adding points. And how recently: a signal from this week weighs more than one from three months ago.\n\nA single signal is not enough to move a company up. It is the combination that puts it at the top of the list. You receive the points grid: you know why a company is worth calling.',
      },
      {
        q: 'Which signals are tracked?',
        a: 'Verifiable facts, drawn from public sources and from your own data: changes of chief executive, acquisitions and head-office moves published in the BODACC and the French company register, hiring picked up from careers pages and job boards, and visits to your website.\n\nThe signals used and their weight depend on your market. A signal only counts towards the score if it can be dated and verified.',
      },
      {
        q: 'How much does “Who to call on Monday” cost?',
        a: '€1,200 excluding VAT per month, tools included, with no setup fee and no commitment: the subscription can be cancelled at the end of any month. The first list of 20 companies is free.\n\nFor comparison, an outsourced SDR costs €3,000 to €8,000 a month, usually with a six-month commitment. ABM at scale, with LinkedIn advertising and prospecting sequences, is quoted separately.',
      },
      {
        q: 'How is this different from an outsourced SDR or a prospecting agency?',
        a: 'An outsourced SDR makes calls on your behalf; an agency sends messages in volume. Flow Ops does not replace your sales team: it tells them who to call and gives them the reason for the call. The relationship with the prospect stays with you.\n\nThe subscription carries no commitment and costs less than an outsourced SDR. It does assume that at least one person on your side calls the list.',
      },
      {
        q: 'Which companies is the offer for?',
        a: 'French B2B companies with 50 to 249 employees, software vendors and equipment manufacturers in particular, selling a product above €15,000 or under multi-year contract, over a cycle of several months, with at least two people who sell.\n\nThe offer is not a fit if your average deal is below €5,000, or if nobody on your side can call the list.',
      },
      {
        q: 'Do we need to install a tool or change CRM?',
        a: 'No. The list arrives by email, with an Excel file ready to import into the CRM or ERP you already use. The collection and scoring tools are run by Flow Ops and included in the subscription.\n\nWriting directly into your CRM is possible. It is quoted separately, depending on the tool.',
      },
      {
        q: 'What is ABM at scale?',
        a: 'Classic ABM (Account Based Marketing) concentrates marketing and sales effort on a few dozen accounts, handled by hand. ABM at scale applies the same logic to several hundred accounts: each company’s score decides the channel, LinkedIn advertising, a prospecting sequence or a call, and the moment.\n\nIt is the full Flow Ops offer, on top of the Monday list. It lays the foundations in three months, then continues or is handed over to your team, documentation included.',
      },
      {
        q: 'What is GTM Engineering?',
        a: 'GTM Engineering means treating B2B prospecting as a documented system rather than a series of manual tasks: market data is collected, signals are cross-checked and scored, and sales actions are triggered according to written rules.\n\nIt is how Flow Ops works. What you buy is the result: the Monday list.',
      },
    ],
  },
  footer: {
    tagline:
      'B2B prospecting consultancy for software vendors and equipment manufacturers. Every Monday, the companies to call and the reason for the call.',
    addressLabel: 'Registered office',
    rights: '© 2026 Flow Ops. All rights reserved.',
    privacy: 'Privacy Policy',
    cookies: 'Manage tracking',
  },
  cookies: {
    title: 'Your tracking preferences',
    body: 'We use tracking to analyse how the site is used (PostHog, hosted in the European Union). This includes anonymous recording of browsing sessions, to understand where visitors drop off. We also load testimonials published on LinkedIn. Without your consent no tracking is set, no session is recorded and the testimonials stay hidden. You can change your mind at any time from the footer.',
    refuse: 'Reject all',
    accept: 'Accept all',
    more: 'Learn more about the data collected',
  },
  privacyNotice:
    'This privacy policy is published in French, the authoritative version for Flow Ops as a French-registered business. An English summary is available on request at patrice@flow-ops.pro.',
};

export const dictionaries: Record<Locale, Content> = { fr, en };
