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
    testimonialsLabel: string;
    blockedTitle: string;
    blockedBody: string;
    blockedAllow: string;
    blockedView: string;
  };
  method: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    oldTitle: string;
    oldBody: string;
    newTitle: string;
    newBody: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step2Badge: string;
    step3: string;
    step3Desc: string;
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
    rows: { context: string; company: string; score: number; signals: string[]; reason: string; opener: string }[];
    footnote: string;
    scoringTitle: string;
    scoringParts: { name: string; body: string }[];
    scoringRule: string;
  };
  /** Anonymised missions by sector. Only measured facts; a card may have no figure. */
  references: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labelDone: string;
    cases: { sector: string; context: string; figure: string | null; figureLabel: string; done: string; note: string | null }[];
    footnote: string;
    cta: string;
  };
  offers: {
    title: string;
    subtitle: string;
    /** Exactly three, in order: free scoping call, monthly subscription, full engagement. */
    tiers: {
      name: string;
      price: string;
      priceNote: string;
      body: string;
      points: string[];
      cta: string;
    }[];
    /** The calls are made by the client by default; SDRs are an option, quoted separately. */
    sdrOption: string;
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
  /** Examples of signals and the technology behind them: says this is a service. */
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Exactly eight, in the order of the icons in Stack.tsx. */
    signals: { name: string; desc: string }[];
    techTitle: string;
    /** Exactly three: complementary, chosen per client, audited continuously. */
    techPoints: { name: string; body: string }[];
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
    ctaPrimary: 'Réserver 30 minutes de cadrage',
    ctaSecondary: 'Voir un exemple de liste',
    ctaNote: 'Appel gratuit. Le premier mois sert d’essai, sans engagement.',
    scrollAria: 'Défiler vers la méthode',
    proofAlready: 'Déjà',
    proofCount: '+10',
    proofSystems: 'systèmes',
    proofDeployed: 'de prospection déployés',
    sectors: ['Cybersécurité', 'Éditeurs de logiciels', 'Fabricants d’équipements', 'Deeptech'],
    testimonialsLabel: 'Ils en parlent',
    blockedTitle: 'Témoignage LinkedIn',
    blockedBody:
      'L’affichage de cette publication dépose des traceurs LinkedIn. Il requiert votre accord.',
    blockedAllow: 'Autoriser et afficher',
    blockedView: 'Voir sur LinkedIn',
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
    step1: '1. Sourcing, enrichissement et détection de signaux',
    step1Desc: 'Votre marché est listé, complété, puis observé chaque semaine.',
    step2: '2. Conversations LinkedIn et email',
    step2Desc:
      'Chaque signal ajoute des points au score de l’entreprise. Tant que le score est bas, elle reçoit des messages utiles sur LinkedIn et par email, sans appel\u00a0: c’est le nurturing.',
    step2Badge: 'Auto',
    step3: '3. Activation Sales',
    step3Desc:
      'Quand le score franchit le seuil, l’entreprise entre dans la liste du lundi de vos commerciaux, avec la raison de l’appel.',
    step3Badge: 'Conversion',
  },
  sample: {
    eyebrow: 'Exemple',
    title: 'Ce que votre commercial consulte',
    subtitle:
      'Pour chaque entreprise\u00a0: son score, les signaux qui l’expliquent, la raison de l’appel et une phrase pour commencer.',
    context:
      'Trois exemples fictifs, pour trois types de clients.',
    labelScore: 'Score',
    labelSignals: 'Signaux',
    labelReason: 'Raison de l’appel',
    labelOpener: 'Phrase d’ouverture',
    rows: [
      {
        context: 'Pour un éditeur de cybersécurité',
        company: 'Mutuelle santé, 1\u00a0200 salariés, Lyon',
        score: 88,
        signals: [
          'Prise de poste d’un nouveau RSSI en octobre',
          'Recrute deux analystes en sécurité',
          'Trois visites sur votre page tarifs cette semaine',
        ],
        reason:
          'Un RSSI qui arrive revoit ses fournisseurs dans ses premiers mois, et son équipe s’étoffe.',
        opener:
          '«\u00a0Félicitations pour votre prise de poste. Comptez-vous revoir votre dispositif de détection dans les prochains mois\u00a0?\u00a0»',
      },
      {
        context: 'Pour un éditeur de logiciel SaaS',
        company: 'Réseau de franchises, 60 points de vente, Nantes',
        score: 74,
        signals: [
          'Annonce l’ouverture de huit points de vente en 2027',
          'Lead dormant de votre CRM\u00a0: démonstration demandée il y a un an',
        ],
        reason: 'Un réseau qui s’étend doit équiper ses nouveaux sites, et il vous connaît déjà.',
        opener:
          '«\u00a0Nous avions échangé l’an dernier. Avec vos huit ouvertures, le planning des équipes revient-il sur la table\u00a0?\u00a0»',
      },
      {
        context: 'Pour un fabricant de machines d’emballage',
        company: 'Laiterie, 140 salariés, Ille-et-Vilaine',
        score: 67,
        signals: [
          'Visites répétées sur vos pages stratégiques\u00a0: tarifs et demande de démonstration',
          'Participe à un événement professionnel le mois prochain',
        ],
        reason:
          'Un intérêt marqué pour vos machines, et une occasion de se rencontrer dans un mois.',
        opener:
          '«\u00a0Je vois que vous participez au congrès de la filière le mois prochain. Pouvons-nous y prévoir vingt minutes sur vos lignes d’emballage\u00a0?\u00a0»',
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
        body: 'Une prise de poste, un recrutement, une visite de vos pages stratégiques. Chaque signal ajoute des points.',
      },
      {
        name: 'Depuis quand',
        body: 'Un signal de la semaine pèse plus qu’un signal d’il y a trois mois.',
      },
    ],
    scoringRule:
      'Les entreprises les mieux notées ouvrent la liste du lundi. La grille de points vous est remise\u00a0: vous savez pourquoi une entreprise est en tête.',
  },
  references: {
    eyebrow: 'Références',
    title: 'Des missions menées dans votre secteur',
    subtitle:
      'Quelques exemples anonymisés, avec les seuls chiffres mesurés pendant la mission. Les références détaillées sont communiquées sur demande, avec l’accord des clients concernés.',
    labelDone: 'Ce qui a été mis en place',
    cases: [
      {
        sector: 'Cybersécurité',
        context: 'Éditeur SaaS de cybersécurité, équipe commerciale sur plusieurs pays',
        figure: '4 mois',
        figureLabel: 'pour remplacer une qualification des comptes faite à la main',
        done: 'Les comptes sont complétés et qualifiés automatiquement, puis remis aux commerciaux dans leur CRM. Publicité LinkedIn sur trois marchés.',
        note: 'Sur LinkedIn, 3 % de clics sur les posts des dirigeants, contre 0,4 % sur les visuels classiques.',
      },
      {
        sector: 'Éditeur de logiciels',
        context: 'Jeune éditeur SaaS, trois fondateurs',
        figure: '9',
        figureLabel: 'premiers rendez-vous en quatre mois',
        done: 'Comptes classés par score, séquences LinkedIn et email, publicité ciblée sur les comptes prioritaires.',
        note: 'Sept rendez-vous venus de LinkedIn, deux de la publicité.',
      },
      {
        sector: 'Services aux entreprises',
        context: 'Prestataire de services informatiques pour les PME, équipe de SDR',
        figure: '46',
        figureLabel: 'affaires ouvertes sur les entreprises des listes',
        done: 'Chaque semaine, des listes d’entreprises classées par score et les recrutements repérés, transmis aux SDR qui appellent.',
        note: 'Trois affaires déjà gagnées au moment du bilan.',
      },
      {
        sector: 'Industrie',
        context: 'Fabricant d’équipements professionnels, commerciaux terrain',
        figure: null,
        figureLabel: 'Plan de comptes et séquences pour une équipe terrain',
        done: 'Comptes prioritaires choisis avec la direction, séquences LinkedIn et email, messages adaptés à chaque type de site.',
        note: null,
      },
    ],
    footnote: 'Missions menées par Patrice Tord. Les chiffres sont ceux relevés pendant chaque mission.',
    cta: 'Demander une référence détaillée',
  },
  offers: {
    title: 'Les offres',
    subtitle:
      'Un appel de cadrage gratuit, puis un abonnement sans engagement dont le premier mois sert d’essai. L’ABM en masse le complète quand il faut aussi la publicité et les séquences.',
    tiers: [
      {
        name: 'L’appel de cadrage',
        price: 'Gratuit',
        priceNote: '30 minutes, sans engagement',
        body: 'Votre marché, vos meilleurs clients et la façon dont vos commerciaux prospectent\u00a0: de quoi vérifier que la liste du lundi vous sera utile.',
        points: [
          'Les signaux à suivre pour votre marché, choisis avec vous',
          'Une première liste de 20 entreprises après l’appel, si vous joignez un export de votre CRM',
          'Si l’offre ne vous convient pas, vous le savez en 30 minutes',
        ],
        cta: 'Réserver l’appel',
      },
      {
        name: 'Qui appeler lundi',
        price: '1\u00a0400\u00a0€ HT',
        priceNote: 'par mois, outils compris',
        body: 'Chaque lundi, les 10 à 20 entreprises les mieux notées de votre marché, avec la raison de l’appel et une phrase d’ouverture.',
        points: [
          'Le premier mois sert d’essai\u00a0: quatre listes, et trois chiffres relus chaque semaine avec vous, les entreprises appelées, les conversations et les rendez-vous',
          'Par email, avec un fichier prêt à importer dans votre CRM',
          'Deux séquences de nurturing, sur LinkedIn et par email, pour les entreprises pas encore prêtes',
          'Sans frais de mise en place, sans engagement, résiliable chaque mois',
          'Ensuite, une heure par mois sur les appels passés et les rendez-vous obtenus',
          'Un marché suivi, et un seul client par marché concurrent',
        ],
        cta: 'Discutons de vos enjeux',
      },
      {
        name: 'ABM en masse',
        price: 'Sur devis',
        priceNote: 'trois mois d’engagement',
        body: 'En complément de la liste\u00a0: la publicité LinkedIn sur vos comptes les mieux notés, des séquences sur mesure et les contenus.',
        points: [
          'Plusieurs centaines de comptes suivis et classés par score',
          'Publicité et séquences pilotées chaque semaine',
          'Documentation complète et transfert à votre équipe',
        ],
        cta: 'Demander un devis',
      },
    ],
    sdrOption:
      'Personne chez vous pour appeler la liste\u00a0? En option et sur devis, une équipe de SDR passe les appels pour vous.',
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
    title: 'Exemples de signaux suivis',
    subtitle:
      'Aucun ne suffit seul. Ils sont choisis selon votre marché, puis combinés dans le score.',
    signals: [
      {
        name: 'Visite de votre site',
        desc: 'Une entreprise cible consulte vos pages stratégiques\u00a0: tarifs, démonstration, cas clients.',
      },
      {
        name: 'Recrutement',
        desc: 'Un poste ouvert dit où l’entreprise investit, et avec quelle urgence.',
      },
      {
        name: 'Prise de poste',
        desc: 'Un nouveau décideur revoit ses fournisseurs dans ses premiers mois.',
      },
      {
        name: 'Leads dormants du CRM',
        desc: 'Un ancien contact ou une affaire perdue redonne signe de vie.',
      },
      {
        name: 'Annonce d’ouverture',
        desc: 'Nouveau site, nouvelle agence, nouveau pays\u00a0: des besoins à équiper.',
      },
      {
        name: 'Participation à un événement',
        desc: 'L’entreprise expose ou intervient\u00a0: une raison de prendre contact, et une date.',
      },
      {
        name: 'Engagement LinkedIn',
        desc: 'Un décideur commente ou partage un contenu sur votre sujet.',
      },
      {
        name: 'Changement de direction',
        desc: 'Une reprise ou un nouveau dirigeant rouvre les décisions d’investissement.',
      },
    ],
    techTitle: 'Les technologies derrière les signaux',
    techPoints: [
      {
        name: 'Des technologies complémentaires',
        body: 'Aucun outil ne capte tous les signaux. Flow Ops en combine plusieurs\u00a0: identification des visiteurs, veille des recrutements et des nominations, enrichissement de données, IA pour croiser les signaux et rédiger.',
      },
      {
        name: 'Choisies selon vos signaux',
        body: 'Les signaux utiles à un éditeur de cybersécurité ne sont pas ceux d’un fabricant de machines. Le choix des technologies suit les signaux retenus pour votre marché.',
      },
      {
        name: 'Auditées en continu',
        body: 'De nouvelles technologies sont testées régulièrement et intégrées quand elles font mieux. Vous en bénéficiez sans rien changer de votre côté.',
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
        a: 'C’est l’abonnement de Flow Ops. Chaque lundi, vous recevez les 10 à 20 entreprises les mieux notées de votre marché, avec les signaux qui expliquent leur score, la raison d’appeler chacune et une phrase d’ouverture. La liste arrive par email, avec un fichier prêt à importer dans votre CRM. L’abonnement comprend aussi deux séquences de nurturing, sur LinkedIn et par email, pour les entreprises dont le score n’est pas encore assez haut. Une heure par mois sert à revoir les appels passés et les rendez-vous obtenus.\n\nSi vous transmettez un export de votre CRM, la liste distingue les entreprises nouvelles de celles que vous connaissez déjà. Tout commence par un appel de cadrage gratuit de 30 minutes. Le premier mois sert d’essai\u00a0: quatre listes, et trois chiffres relus chaque semaine avec vous, les entreprises appelées, les conversations et les rendez-vous.',
      },
      {
        q: 'Comment le score est-il calculé\u00a0?',
        a: 'Le score additionne trois choses. Ce que l’entreprise est\u00a0: son secteur, sa taille, sa région, comparés à vos meilleurs clients. Ce qu’elle fait en ce moment\u00a0: un recrutement, un changement de dirigeant, une visite de votre site, chaque signal ajoutant des points. Et depuis quand\u00a0: un signal de la semaine pèse plus qu’un signal d’il y a trois mois.\n\nUn signal isolé ne suffit pas à faire monter une entreprise. C’est leur combinaison qui la place en tête de liste. La grille de points vous est remise\u00a0: vous savez pourquoi une entreprise est à appeler.',
      },
      {
        q: 'Quels signaux sont suivis\u00a0?',
        a: 'Ils dépendent de votre marché. Parmi les plus courants\u00a0: les visites sur vos pages stratégiques, les recrutements, les prises de poste, les changements de direction, les annonces d’ouverture, la participation à un événement, les leads dormants de votre CRM et l’engagement sur LinkedIn.\n\nChaque signal demande sa technologie. Flow Ops en combine plusieurs, choisies selon les signaux retenus pour vous, et en teste régulièrement de nouvelles. Un signal n’entre dans le score que s’il peut être daté et vérifié.',
      },
      {
        q: 'Combien coûte «\u00a0Qui appeler lundi\u00a0»\u00a0?',
        a: '1\u00a0400\u00a0€ HT par mois, outils et deux séquences de nurturing compris, sans frais de mise en place et sans engagement\u00a0: l’abonnement se résilie à la fin de chaque mois. L’appel de cadrage est gratuit et le premier mois sert d’essai\u00a0: vous arrêtez à la fin du mois si les chiffres ne suivent pas.\n\nSi personne chez vous ne peut appeler la liste, une équipe de SDR peut le faire en option, sur devis. L’ABM en masse, avec publicité LinkedIn, séquences sur mesure et contenus, fait l’objet d’un devis.',
      },
      {
        q: 'Quelle différence avec un SDR externalisé ou une agence de prospection\u00a0?',
        a: 'Un SDR externalisé passe des appels à votre place, une agence envoie des messages en volume. Flow Ops commence par dire qui appeler et pourquoi\u00a0: la liste, le score, la raison de l’appel. Le plus souvent, ce sont vos commerciaux qui appellent, et la relation avec le prospect reste chez vous.\n\nSi personne chez vous ne peut appeler la liste, une équipe de SDR peut le faire en option, sur devis. L’abonnement, lui, reste sans engagement.',
      },
      {
        q: 'À quelles entreprises l’offre s’adresse-t-elle\u00a0?',
        a: 'Aux entreprises B2B françaises de 10 à 249 salariés, en particulier les éditeurs de logiciels, les éditeurs de cybersécurité et les fabricants d’équipements, qui vendent un produit à plus de 15\u00a0000\u00a0€ ou sous contrat pluriannuel, sur un cycle de plusieurs mois. Le plus souvent, le dirigeant y vend lui-même avec un ou deux commerciaux, ou une personne s’occupe déjà du marketing sans le temps de suivre les signaux.\n\nL’offre ne convient pas si votre panier est inférieur à 5\u00a0000\u00a0€.',
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
    ctaPrimary: 'Book a 30-minute scoping call',
    ctaSecondary: 'See a sample list',
    ctaNote: 'The call is free. The first month is a trial, with no commitment.',
    scrollAria: 'Scroll to the method',
    proofAlready: 'Already',
    proofCount: '10+',
    proofSystems: 'prospecting',
    proofDeployed: 'systems deployed',
    sectors: ['Cybersecurity', 'Software vendors', 'Equipment manufacturers', 'Deeptech'],
    testimonialsLabel: 'What clients say',
    blockedTitle: 'LinkedIn testimonial',
    blockedBody:
      'Displaying this post sets LinkedIn tracking cookies. It requires your consent.',
    blockedAllow: 'Allow and display',
    blockedView: 'View on LinkedIn',
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
    step1: '1. Sourcing, enrichment and signal detection',
    step1Desc: 'Your market is listed, completed, then watched every week.',
    step2: '2. LinkedIn and email conversations',
    step2Desc:
      'Each signal adds points to the company’s score. While the score is low, it receives useful messages on LinkedIn and by email, with no call: that is nurturing.',
    step2Badge: 'Auto',
    step3: '3. Sales activation',
    step3Desc:
      'When the score crosses the threshold, the company enters your sales team’s Monday list, with the reason for the call.',
    step3Badge: 'Conversion',
  },
  sample: {
    eyebrow: 'Example',
    title: 'What your sales rep looks at',
    subtitle:
      'For each company: its score, the signals behind it, the reason for the call and a line to open with.',
    context:
      'Three fictional examples, for three kinds of client.',
    labelScore: 'Score',
    labelSignals: 'Signals',
    labelReason: 'Reason for the call',
    labelOpener: 'Opening line',
    rows: [
      {
        context: 'For a cybersecurity vendor',
        company: 'Health insurer, 1,200 employees, Lyon',
        score: 88,
        signals: [
          'New CISO took up the post in October',
          'Hiring two security analysts',
          'Three visits to your pricing page this week',
        ],
        reason:
          'An incoming CISO reviews suppliers in the first months, and the team is growing.',
        opener:
          '“Congratulations on your new role. Do you plan to review your detection setup in the coming months?”',
      },
      {
        context: 'For a SaaS software vendor',
        company: 'Franchise network, 60 outlets, Nantes',
        score: 74,
        signals: [
          'Announced eight new outlets for 2027',
          'Dormant lead in your CRM: demo requested a year ago',
        ],
        reason: 'A growing network has new sites to equip, and it already knows you.',
        opener:
          '“We spoke last year. With eight openings ahead, is staff scheduling back on the table?”',
      },
      {
        context: 'For a packaging-machinery manufacturer',
        company: 'Dairy, 140 employees, Brittany',
        score: 67,
        signals: [
          'Repeated visits to your strategic pages: pricing and demo request',
          'Attending a trade event next month',
        ],
        reason: 'Clear interest in your machines, and a chance to meet in a month.',
        opener:
          '“I see you are attending the industry congress next month. Could we set aside twenty minutes there on your packaging lines?”',
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
        body: 'A new decision-maker, a hire, a visit to your strategic pages. Each signal adds points.',
      },
      {
        name: 'How recently',
        body: 'A signal from this week weighs more than one from three months ago.',
      },
    ],
    scoringRule:
      'The highest-scoring companies open the Monday list. You receive the points grid: you know why a company is at the top.',
  },
  references: {
    eyebrow: 'References',
    title: 'Engagements in your sector',
    subtitle:
      'A few anonymised examples, with only the figures measured during the engagement. Detailed references are shared on request, with the clients’ agreement.',
    labelDone: 'What was put in place',
    cases: [
      {
        sector: 'Cybersecurity',
        context: 'Cybersecurity SaaS vendor, sales team across several countries',
        figure: '4 months',
        figureLabel: 'to replace account qualification done by hand',
        done: 'Accounts are completed and qualified automatically, then handed to the sales team in their CRM. LinkedIn advertising in three markets.',
        note: 'On LinkedIn, a 3% click rate on executives’ posts, against 0.4% on standard visuals.',
      },
      {
        sector: 'Software vendor',
        context: 'Young SaaS vendor, three founders',
        figure: '9',
        figureLabel: 'first meetings in four months',
        done: 'Accounts ranked by score, LinkedIn and email sequences, advertising aimed at the priority accounts.',
        note: 'Seven meetings came from LinkedIn, two from advertising.',
      },
      {
        sector: 'Business services',
        context: 'IT services provider for SMEs, SDR team',
        figure: '46',
        figureLabel: 'deals opened with companies from the lists',
        done: 'Every week, lists of companies ranked by score and the hiring spotted, passed to the SDRs who call.',
        note: 'Three deals already won at the time of the review.',
      },
      {
        sector: 'Manufacturing',
        context: 'Manufacturer of professional equipment, field sales team',
        figure: null,
        figureLabel: 'Account plan and sequences for a field team',
        done: 'Priority accounts chosen with management, LinkedIn and email sequences, messages adapted to each type of site.',
        note: null,
      },
    ],
    footnote: 'Engagements led by Patrice Tord. Figures are those recorded during each engagement.',
    cta: 'Ask for a detailed reference',
  },
  offers: {
    title: 'The offers',
    subtitle:
      'A free scoping call, then a subscription with no commitment whose first month is a trial. ABM at scale complements it when advertising and sequences are needed too.',
    tiers: [
      {
        name: 'The scoping call',
        price: 'Free',
        priceNote: '30 minutes, no commitment',
        body: 'Your market, your best customers and how your sales team prospects today: enough to check that the Monday list will be useful to you.',
        points: [
          'The signals to track for your market, chosen with you',
          'A first list of 20 companies after the call, if you attach a CRM export',
          'If the offer is not a fit, you know within 30 minutes',
        ],
        cta: 'Book the call',
      },
      {
        name: 'Who to call on Monday',
        price: '€1,400 excl. VAT',
        priceNote: 'per month, tools included',
        body: 'Every Monday, the 10 to 20 highest-scoring companies in your market, with the reason for the call and an opening line.',
        points: [
          'The first month is a trial: four lists, and three figures reviewed with you every week, companies called, conversations and meetings',
          'By email, with a file ready to import into your CRM',
          'Two nurturing sequences, on LinkedIn and by email, for the companies not yet ready',
          'No setup fee, no commitment, cancel at the end of any month',
          'After that, one hour a month on calls made and meetings booked',
          'One market tracked, and one client only per competing market',
        ],
        cta: "Let's discuss your challenges",
      },
      {
        name: 'ABM at scale',
        price: 'On quotation',
        priceNote: 'three-month commitment',
        body: 'On top of the list: LinkedIn advertising to your highest-scoring accounts, bespoke sequences and content.',
        points: [
          'Several hundred accounts tracked and ranked by score',
          'Advertising and sequences managed every week',
          'Complete documentation and handover to your team',
        ],
        cta: 'Request a quote',
      },
    ],
    sdrOption:
      'Nobody on your side to call the list? As an option, quoted separately, a team of SDRs makes the calls for you.',
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
    title: 'Examples of signals we track',
    subtitle:
      'None is enough on its own. They are chosen for your market, then combined in the score.',
    signals: [
      {
        name: 'Visit to your website',
        desc: 'A target company views your strategic pages: pricing, demo, case studies.',
      },
      {
        name: 'Hiring',
        desc: 'An open role says where the company is investing, and how urgently.',
      },
      {
        name: 'New decision-maker',
        desc: 'Someone new in the role reviews suppliers in the first months.',
      },
      {
        name: 'Dormant CRM leads',
        desc: 'A past contact or a lost deal shows signs of life again.',
      },
      {
        name: 'Opening announced',
        desc: 'A new site, a new branch, a new country: needs to equip.',
      },
      {
        name: 'Event participation',
        desc: 'The company is exhibiting or speaking: a reason to get in touch, and a date.',
      },
      {
        name: 'LinkedIn engagement',
        desc: 'A decision-maker comments on or shares content about your topic.',
      },
      {
        name: 'Change of leadership',
        desc: 'An acquisition or a new chief executive reopens investment decisions.',
      },
    ],
    techTitle: 'The technology behind the signals',
    techPoints: [
      {
        name: 'Complementary technologies',
        body: 'No single tool captures every signal. Flow Ops combines several: visitor identification, monitoring of hires and appointments, data enrichment, AI to cross-check signals and write.',
      },
      {
        name: 'Chosen for your signals',
        body: 'The signals that matter to a cybersecurity vendor are not those of a machinery manufacturer. The choice of technology follows the signals selected for your market.',
      },
      {
        name: 'Audited continuously',
        body: 'New technologies are tested regularly and adopted when they do better. You benefit without changing anything on your side.',
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
        a: 'It is the Flow Ops subscription. Every Monday you receive the 10 to 20 highest-scoring companies in your market, with the signals behind their score, the reason to call each one and an opening line. The list arrives by email, with a file ready to import into your CRM. The subscription also includes two nurturing sequences, on LinkedIn and by email, for the companies whose score is not yet high enough. One hour a month is spent reviewing the calls made and the meetings booked.\n\nIf you share a CRM export, the list separates new companies from those you already know. It starts with a free 30-minute scoping call. The first month is a trial: four lists, and three figures reviewed with you every week, companies called, conversations and meetings.',
      },
      {
        q: 'How is the score calculated?',
        a: 'The score adds up three things. What the company is: its sector, size and region, compared with your best customers. What it is doing right now: a hire, a change of chief executive, a visit to your site, each signal adding points. And how recently: a signal from this week weighs more than one from three months ago.\n\nA single signal is not enough to move a company up. It is the combination that puts it at the top of the list. You receive the points grid: you know why a company is worth calling.',
      },
      {
        q: 'Which signals are tracked?',
        a: 'They depend on your market. Among the most common: visits to your strategic pages, hiring, new decision-makers, changes of leadership, announced openings, event participation, dormant leads in your CRM and LinkedIn engagement.\n\nEach signal needs its own technology. Flow Ops combines several, chosen for the signals selected for you, and regularly tests new ones. A signal only counts towards the score if it can be dated and verified.',
      },
      {
        q: 'How much does “Who to call on Monday” cost?',
        a: '€1,400 excluding VAT per month, tools and two nurturing sequences included, with no setup fee and no commitment: the subscription can be cancelled at the end of any month. The scoping call is free and the first month is a trial: you stop at the end of the month if the figures do not follow.\n\nIf nobody on your side can call the list, a team of SDRs can do it as an option, quoted separately. ABM at scale, with LinkedIn advertising, bespoke sequences and content, is quoted separately.',
      },
      {
        q: 'How is this different from an outsourced SDR or a prospecting agency?',
        a: 'An outsourced SDR makes calls on your behalf; an agency sends messages in volume. Flow Ops starts by telling you who to call and why: the list, the score, the reason for the call. Most often your own sales team makes the calls, and the relationship with the prospect stays with you.\n\nIf nobody on your side can call the list, a team of SDRs can do it as an option, quoted separately. The subscription itself carries no commitment.',
      },
      {
        q: 'Which companies is the offer for?',
        a: 'French B2B companies with 10 to 249 employees, software vendors, cybersecurity vendors and equipment manufacturers in particular, selling a product above €15,000 or under multi-year contract, over a cycle of several months. Most often the chief executive sells in person with one or two sales reps, or one person already handles marketing without the time to track signals.\n\nThe offer is not a fit if your average deal is below €5,000.',
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
