export type Locale = 'fr' | 'en';

// Rich sentences are split into parts instead of carrying markup, so the
// dictionary stays plain data and translators never touch JSX.
//
// Voice (French): the vocabulary of the manager who sells, not of the growth
// team. "Qui appeler", "la raison de l'appel", "vos salons" — never TAM, stack,
// infrastructure or tool names in what addresses the buyer. French typography
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
    labelSignal: string;
    labelReason: string;
    labelOpener: string;
    rows: { company: string; signal: string; reason: string; opener: string }[];
    footnote: string;
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
    badge: 'Conseil en prospection B2B, par Patrice Tord',
    titleLine1: 'Chaque lundi, les entreprises à appeler.',
    titleAccent: 'Et la raison de l’appel.',
    subtitleBefore: 'Votre fichier de salon dit qui existe. Flow Ops vous dit ',
    subtitleHighlight: 'qui bouge maintenant',
    subtitleAfter:
      ' : 10 à 20 entreprises de votre marché par semaine, chacune avec un signal daté et une phrase d’ouverture pour vos commerciaux.',
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
    eyebrow: 'Un flux régulier toute l’année, au lieu de deux pics autour des salons',
    titleLine1: 'Votre fichier dit qui existe.',
    titleAccent: 'La liste dit qui bouge.',
    oldTitle: 'Le fichier de salon et le carnet d’adresses',
    oldBody:
      'Deux pics d’activité par an, des commerciaux qui prospectent à l’aveugle le reste du temps, et un CRM que personne n’a envie d’ouvrir.',
    newTitle: 'Un signal daté pour chaque appel',
    newBody:
      'Une entreprise qui recrute un commercial, change de dirigeant ou vient d’être reprise a une raison d’écouter cette semaine. Votre commercial sait pourquoi il appelle et par quelle phrase commencer.',
    step1: '1. Votre marché, relevé dans les registres publics',
    step2: '2. Les signaux de la semaine, datés et vérifiés',
    step2Badge: 'Chaque semaine',
    step3: '3. La liste, par email',
    step3Badge: 'Lundi',
  },
  sample: {
    eyebrow: 'Exemple',
    title: 'Ce que votre commercial reçoit le lundi',
    subtitle: 'Pour chaque entreprise : le signal, la raison de l’appel et une phrase pour commencer.',
    context:
      'Exemple fictif, pour un fabricant de machines d’emballage qui vend aux industriels de l’agroalimentaire.',
    labelSignal: 'Signal',
    labelReason: 'Raison de l’appel',
    labelOpener: 'Phrase d’ouverture',
    rows: [
      {
        company: 'Laiterie, 140 salariés, Ille-et-Vilaine',
        signal: 'Changement de président publié le 3 novembre',
        reason: 'Un nouveau dirigeant revoit les investissements dans ses premiers mois.',
        opener:
          '« J’ai vu que la direction venait de changer. Le renouvellement de vos lignes d’emballage fait-il partie des sujets ouverts ? »',
      },
      {
        company: 'Biscuiterie, 85 salariés, Loire-Atlantique',
        signal: 'Recrute un responsable de production depuis le 28 octobre',
        reason: 'Un poste de production ouvert annonce souvent une montée en cadence.',
        opener:
          '« Vous recrutez un responsable de production : est-ce pour une nouvelle ligne ? »',
      },
      {
        company: 'Conserverie, 210 salariés, Finistère',
        signal: 'Transfert du siège vers un nouveau site, annonce du 12 novembre',
        reason: 'Un nouveau site s’équipe, et le cahier des charges s’écrit maintenant.',
        opener:
          '« Félicitations pour le nouveau site. Qui pilote le choix des équipements de conditionnement ? »',
      },
    ],
    footnote:
      'Dans votre liste, chaque ligne porte le nom de l’entreprise, la source du signal et le contact à appeler.',
  },
  offers: {
    title: 'Les offres',
    subtitle:
      'Une première liste gratuite pour juger sur pièces, puis un abonnement sans engagement. La mission complète répond aux marchés de grands comptes.',
    tiers: [
      {
        name: 'La première liste',
        price: 'Gratuite',
        priceNote: 'par email, sans rendez-vous',
        body: '20 entreprises de votre marché qui montrent un signal daté ce mois-ci, avec la raison d’appeler chacune.',
        points: [
          'Une phrase d’ouverture par entreprise',
          'Vos clients et prospects connus séparés des entreprises nouvelles, si vous joignez un export de votre CRM',
          'Une revue de 30 minutes avec votre commercial, si vous le souhaitez',
        ],
        cta: 'Recevoir ma liste',
      },
      {
        name: 'Qui appeler lundi',
        price: '1 200 € HT',
        priceNote: 'par mois, outils compris',
        body: 'Chaque lundi, 10 à 20 entreprises à appeler, avec la raison de l’appel et une phrase d’ouverture.',
        points: [
          'Par email, avec un fichier prêt à importer dans votre CRM',
          'Sans frais de mise en place, sans engagement, résiliable chaque mois',
          'Une heure par mois sur les appels passés et les rendez-vous obtenus',
          'Un seul client par marché concurrent',
        ],
        cta: 'Discutons de vos enjeux',
      },
      {
        name: 'Mission ABX',
        price: 'Sur devis',
        priceNote: 'trois mois d’engagement',
        body: 'Pour les marchés de grands comptes : la liste, plus la publicité LinkedIn sur vos comptes cibles, les séquences de prospection et les contenus.',
        points: [
          'Marché listé et classé par priorité',
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
    quoteMailSubject: 'Demande de devis - Mission ABX',
  },
  pillars: {
    titleBefore: 'La mission ABX :',
    titleAccent: 'quatre canaux coordonnés',
    subtitleBefore:
      'Quand vos comptes cibles sont peu nombreux et très sollicités, la liste ne suffit pas. La mission y ajoute la publicité, les contenus et les séquences, ',
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
        name: 'Signaux',
        description: 'Les comptes qui bougent, repérés chaque semaine.',
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
        title: 'Tri et rédaction',
        tag: 'Claude, connecteurs API',
        desc: 'Chaque signal est rapproché de votre marché, noté, puis traduit en raison d’appel et en phrase d’ouverture.',
      },
      {
        title: 'Recrutements',
        tag: 'Pages carrières, sites d’emploi',
        desc: 'Une entreprise qui ouvre un poste investit. L’offre d’emploi dit où.',
      },
      {
        title: 'Vos propres données',
        tag: 'Export CRM, fichier de salon',
        desc: 'La liste distingue les entreprises nouvelles de vos clients et prospects qui montrent un signal.',
      },
    ],
  },
  timeline: {
    title: 'Déroulé d’une mission ABX',
    subtitle: 'Trois mois, de la liste de vos comptes aux premiers rendez-vous',
    steps: [
      {
        title: 'Fondations',
        desc: 'Votre marché est listé et classé par priorité, le CRM nettoyé, les signaux à suivre choisis avec vos commerciaux.',
        tags: ['Marché listé', 'Signaux choisis'],
      },
      {
        title: 'Lancement',
        desc: 'Publicité, séquences et contenus partent ensemble. Chaque semaine, les résultats décident de ce qui continue.',
        tags: ['Prospection', 'Publicité LinkedIn', 'Signaux'],
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
        q: 'Que fait Flow Ops ?',
        a: 'Flow Ops est l’activité de conseil en prospection B2B de Patrice Tord. Ce n’est ni un logiciel ni une plateforme d’automatisation : c’est une prestation.\n\nChaque lundi, vos commerciaux reçoivent par email la liste des 10 à 20 entreprises de votre marché à appeler cette semaine, avec pour chacune un signal daté, la raison de l’appel et une phrase d’ouverture. Flow Ops exploite les outils qui produisent cette liste. Vous n’installez rien.',
      },
      {
        q: 'Qu’est-ce que « Qui appeler lundi » ?',
        a: 'C’est l’abonnement de Flow Ops. Chaque lundi, vous recevez 10 à 20 entreprises de votre marché qui montrent un signal daté (un recrutement commercial, un changement de dirigeant, une reprise), la raison d’appeler chacune et une phrase d’ouverture. La liste arrive par email, avec un fichier prêt à importer dans votre CRM. Une heure par mois sert à revoir les appels passés et les rendez-vous obtenus.\n\nAvant de vous abonner, vous recevez gratuitement une première liste de 20 entreprises, pour juger sur pièces.',
      },
      {
        q: 'Combien coûte « Qui appeler lundi » ?',
        a: '1 200 € HT par mois, outils compris, sans frais de mise en place et sans engagement : l’abonnement se résilie à la fin de chaque mois. La première liste de 20 entreprises est gratuite.\n\nPour comparaison, un SDR externalisé coûte de 3 000 à 8 000 € par mois, le plus souvent avec six mois d’engagement. La mission ABX complète, avec publicité LinkedIn et séquences de prospection, fait l’objet d’un devis.',
      },
      {
        q: 'Quels signaux sont suivis ?',
        a: 'Des faits datés et vérifiables, tirés de sources publiques : les changements de dirigeant, les reprises et les transferts de siège publiés au BODACC et au registre des entreprises, et les recrutements relevés sur les pages carrières et les sites d’emploi.\n\nLes signaux retenus dépendent de votre marché. Un signal n’entre dans la liste que s’il peut être daté et vérifié.',
      },
      {
        q: 'J’ai déjà mon fichier de salon. Qu’apporte la liste ?',
        a: 'Un fichier de salon dit quelles entreprises existent. La liste dit lesquelles bougent cette semaine, et pourquoi les appeler maintenant. Elle arrive chaque lundi, au lieu de deux pics d’activité par an autour des salons.\n\nSi vous transmettez votre fichier ou un export de votre CRM, la liste sépare les entreprises nouvelles des clients et prospects que vous connaissez déjà et qui montrent un signal, avec le contact à rappeler.',
      },
      {
        q: 'Quelle différence avec un SDR externalisé ou une agence de prospection ?',
        a: 'Un SDR externalisé passe des appels à votre place, une agence envoie des messages en volume. Flow Ops ne remplace pas vos commerciaux : il leur dit qui appeler et leur donne la raison de l’appel. La relation avec le prospect reste chez vous.\n\nL’abonnement est sans engagement et coûte moins qu’un SDR externalisé. Il suppose en revanche qu’au moins une personne chez vous appelle la liste.',
      },
      {
        q: 'À quelles entreprises l’offre s’adresse-t-elle ?',
        a: 'Aux entreprises B2B françaises de 50 à 249 salariés, en particulier les éditeurs de logiciels et les fabricants d’équipements, qui vendent un produit à plus de 15 000 € ou sous contrat pluriannuel, sur un cycle de plusieurs mois, avec au moins deux personnes qui vendent.\n\nL’offre ne convient pas si votre panier est inférieur à 5 000 €, ou si personne chez vous ne peut appeler la liste.',
      },
      {
        q: 'Faut-il installer un outil ou changer de CRM ?',
        a: 'Non. La liste arrive par email, avec un fichier Excel prêt à importer dans le CRM ou l’ERP que vous utilisez déjà. Les outils de relevé et de notation sont exploités par Flow Ops et compris dans l’abonnement.\n\nL’écriture directe dans votre CRM est possible. Elle se chiffre à part, selon l’outil.',
      },
      {
        q: 'Qu’est-ce que la mission ABX ?',
        a: 'C’est l’offre complète, pour les marchés de grands comptes peu nombreux et très sollicités. À la liste hebdomadaire s’ajoutent la publicité LinkedIn sur vos comptes cibles, les séquences de prospection et les contenus, coordonnés entre marketing et commerciaux.\n\nLa mission pose les fondations en trois mois, puis se prolonge ou se transfère à votre équipe, documentation comprise. L’ABX (Account Based Experience) se distingue de l’ABM par l’ordre des opérations : le signal précède le message.',
      },
      {
        q: 'Qu’est-ce que le GTM Engineering ?',
        a: 'Le GTM Engineering consiste à traiter la prospection B2B comme un système documenté plutôt que comme une suite de tâches manuelles : les données du marché sont relevées, les signaux détectés et les actions commerciales déclenchées selon des règles écrites.\n\nC’est la méthode de travail de Flow Ops. Ce que vous achetez, c’est le résultat : la liste du lundi.',
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
    badge: 'B2B prospecting consultancy, by Patrice Tord',
    titleLine1: 'Every Monday, the companies to call.',
    titleAccent: 'And the reason for the call.',
    subtitleBefore: 'Your trade-show list says who exists. Flow Ops tells you ',
    subtitleHighlight: 'who is moving right now',
    subtitleAfter:
      ': 10 to 20 companies in your market each week, each with a dated signal and an opening line for your sales team.',
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
    eyebrow: 'A steady flow all year, instead of two peaks around trade shows',
    titleLine1: 'Your list says who exists.',
    titleAccent: 'Ours says who is moving.',
    oldTitle: 'The trade-show list and the address book',
    oldBody:
      'Two bursts of activity a year, sales reps prospecting blind the rest of the time, and a CRM nobody wants to open.',
    newTitle: 'A dated signal behind every call',
    newBody:
      'A company that is hiring a sales rep, changing its chief executive or has just been acquired has a reason to listen this week. Your rep knows why they are calling and how to open.',
    step1: '1. Your market, drawn from public registers',
    step2: '2. This week’s signals, dated and verified',
    step2Badge: 'Every week',
    step3: '3. The list, by email',
    step3Badge: 'Monday',
  },
  sample: {
    eyebrow: 'Example',
    title: 'What your sales rep receives on Monday',
    subtitle: 'For each company: the signal, the reason for the call and a line to open with.',
    context:
      'Fictional example, for a packaging-machinery manufacturer selling to food producers.',
    labelSignal: 'Signal',
    labelReason: 'Reason for the call',
    labelOpener: 'Opening line',
    rows: [
      {
        company: 'Dairy, 140 employees, Brittany',
        signal: 'Change of chairman published on 3 November',
        reason: 'A new chief executive reviews capital spending in their first months.',
        opener:
          '“I saw that the leadership has just changed. Is renewing your packaging lines one of the open topics?”',
      },
      {
        company: 'Biscuit maker, 85 employees, Loire-Atlantique',
        signal: 'Hiring a production manager since 28 October',
        reason: 'An open production role often signals a ramp-up in output.',
        opener: '“You are hiring a production manager: is that for a new line?”',
      },
      {
        company: 'Cannery, 210 employees, Finistère',
        signal: 'Head office moving to a new site, notice of 12 November',
        reason: 'A new site gets equipped, and the specification is being written now.',
        opener:
          '“Congratulations on the new site. Who is leading the choice of packaging equipment?”',
      },
    ],
    footnote:
      'In your list, each line carries the company name, the source of the signal and the contact to call.',
  },
  offers: {
    title: 'The offers',
    subtitle:
      'A first list, free, so you can judge for yourself, then a subscription with no commitment. The full engagement is for key-account markets.',
    tiers: [
      {
        name: 'The first list',
        price: 'Free',
        priceNote: 'by email, no meeting required',
        body: '20 companies in your market showing a dated signal this month, with the reason to call each one.',
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
        body: 'Every Monday, 10 to 20 companies to call, with the reason for the call and an opening line.',
        points: [
          'By email, with a file ready to import into your CRM',
          'No setup fee, no commitment, cancel at the end of any month',
          'One hour a month on calls made and meetings booked',
          'One client only per competing market',
        ],
        cta: "Let's discuss your challenges",
      },
      {
        name: 'ABX engagement',
        price: 'On quotation',
        priceNote: 'three-month commitment',
        body: 'For key-account markets: the list, plus LinkedIn advertising to your target accounts, prospecting sequences and content.',
        points: [
          'Market listed and ranked by priority',
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
    quoteMailSubject: 'Quote request - ABX engagement',
  },
  pillars: {
    titleBefore: 'The ABX engagement:',
    titleAccent: 'four coordinated channels',
    subtitleBefore:
      'When your target accounts are few and heavily solicited, the list is not enough. The engagement adds advertising, content and sequences, ',
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
        name: 'Signals',
        description: 'The accounts that are moving, spotted every week.',
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
        title: 'Sorting and writing',
        tag: 'Claude, API connectors',
        desc: 'Each signal is matched to your market, scored, then turned into a reason to call and an opening line.',
      },
      {
        title: 'Hiring',
        tag: 'Careers pages, job boards',
        desc: 'A company opening a role is investing. The job advert says where.',
      },
      {
        title: 'Your own data',
        tag: 'CRM export, trade-show list',
        desc: 'The list separates new companies from your customers and prospects showing a signal.',
      },
    ],
  },
  timeline: {
    title: 'How an ABX engagement unfolds',
    subtitle: 'Three months, from your account list to the first meetings',
    steps: [
      {
        title: 'Foundations',
        desc: 'Your market is listed and ranked by priority, the CRM cleaned up, and the signals to track chosen with your sales team.',
        tags: ['Market listed', 'Signals chosen'],
      },
      {
        title: 'Launch',
        desc: 'Advertising, sequences and content start together. Each week, results decide what continues.',
        tags: ['Prospecting', 'LinkedIn advertising', 'Signals'],
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
        a: 'Flow Ops is the B2B prospecting consultancy of Patrice Tord. It is neither software nor an automation platform: it is a service.\n\nEvery Monday, your sales team receives by email the list of 10 to 20 companies in your market to call that week, each with a dated signal, the reason for the call and an opening line. Flow Ops runs the tools that produce the list. You install nothing.',
      },
      {
        q: 'What is “Who to call on Monday”?',
        a: 'It is the Flow Ops subscription. Every Monday you receive 10 to 20 companies in your market showing a dated signal (a sales hire, a change of chief executive, an acquisition), the reason to call each one and an opening line. The list arrives by email, with a file ready to import into your CRM. One hour a month is spent reviewing the calls made and the meetings booked.\n\nBefore subscribing, you receive a first list of 20 companies free of charge, so you can judge for yourself.',
      },
      {
        q: 'How much does “Who to call on Monday” cost?',
        a: '€1,200 excluding VAT per month, tools included, with no setup fee and no commitment: the subscription can be cancelled at the end of any month. The first list of 20 companies is free.\n\nFor comparison, an outsourced SDR costs €3,000 to €8,000 a month, usually with a six-month commitment. The full ABX engagement, with LinkedIn advertising and prospecting sequences, is quoted separately.',
      },
      {
        q: 'Which signals are tracked?',
        a: 'Dated, verifiable facts drawn from public sources: changes of chief executive, acquisitions and head-office moves published in the BODACC and the French company register, and hiring picked up from careers pages and job boards.\n\nThe signals used depend on your market. A signal only enters the list if it can be dated and verified.',
      },
      {
        q: 'I already have my trade-show list. What does this add?',
        a: 'A trade-show list tells you which companies exist. This list tells you which ones are moving this week, and why to call them now. It arrives every Monday, instead of two bursts of activity a year around trade shows.\n\nIf you share your file or a CRM export, the list separates new companies from the customers and prospects you already know that are showing a signal, with the contact to call back.',
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
        q: 'What is the ABX engagement?',
        a: 'It is the full offer, for markets made of a few heavily solicited key accounts. On top of the weekly list come LinkedIn advertising to your target accounts, prospecting sequences and content, coordinated between marketing and sales.\n\nThe engagement lays the foundations in three months, then continues or is handed over to your team, documentation included. ABX (Account Based Experience) differs from ABM in the order of operations: the signal comes before the message.',
      },
      {
        q: 'What is GTM Engineering?',
        a: 'GTM Engineering means treating B2B prospecting as a documented system rather than a series of manual tasks: market data is collected, signals are detected and sales actions are triggered according to written rules.\n\nIt is how Flow Ops works. What you buy is the result: the Monday list.',
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
