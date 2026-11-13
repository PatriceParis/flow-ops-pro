export type Locale = 'fr' | 'en';

// Rich sentences are split into parts instead of carrying markup, so the
// dictionary stays plain data and translators never touch JSX.
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
  offers: {
    title: string;
    introBefore: string;
    introHighlight: string;
    introAfter: string;
    deliverables: string[];
    cta: string;
    sideTitle: string;
    sideBody: string;
    sideCta: string;
    sideMailSubject: string;
  };
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
    title: 'Flow Ops | Système ABX & GTM Engineering B2B',
    description:
      "Freelance GTM Engineer. Je construis en 3 mois un système ABX autonome qui identifie vos comptes cibles, détecte leurs signaux d'achat et déclenche les bonnes conversations. +10 systèmes déployés en B2B.",
    ogLocale: 'fr_FR',
  },
  nav: { cta: 'Discutons de vos enjeux', switchTo: 'EN', switchLabel: 'Switch to English' },
  hero: {
    badge: 'Engager les bons prospects au bon moment en 2026',
    titleLine1: 'Transformez votre prospection B2B en',
    titleAccent: 'infrastructure automatisée.',
    subtitleBefore:
      "L'Account Based Marketing (ABM) et la prospection de masse sont limitées. On construit en 3 mois un ",
    subtitleHighlight: 'système autonome et scalable',
    subtitleAfter: " de génération d'opportunités B2B.",
    scrollAria: 'Défiler vers la méthode',
    proofAlready: 'Déjà',
    proofCount: '+10',
    proofSystems: 'systèmes',
    proofDeployed: 'déployés',
    sectors: ['Cybersec', 'SaaS B2B', 'Industrie', 'Deeptech'],
    proofNote: 'Missions confidentielles opérées en direct ou via des collectifs.',
    testimonialsLabel: 'Ils en parlent',
    blockedTitle: 'Témoignage LinkedIn',
    blockedBody:
      "L'affichage de cette publication dépose des traceurs LinkedIn. Il requiert votre accord.",
    blockedAllow: 'Autoriser et afficher',
    blockedView: 'Voir sur LinkedIn',
  },
  method: {
    eyebrow:
      'Ne chassez plus aveuglément des leads. Orchestrez les interactions avec vos comptes clés et engagez les.',
    titleLine1: 'Le volume ne fonctionne plus.',
    titleAccent: 'Le contexte est roi.',
    oldTitle: 'Les limites du modèle traditionnel',
    oldBody:
      'Dilution du message marketing, travail en silos entre Marketing et Sales, et concentration sur des métriques de vanité (clics, vues) plutôt que sur le pipeline réel.',
    newTitle: 'La vision Account Based Experience (ABX)',
    newBody:
      "Une infrastructure personnalisée et scalable. Identifier les comptes prioritaires avant les Sales, générer des signaux d'intérêt exploitables basés sur des données réelles.",
    step1: '1. Sourcing, enrichissement et détection de signaux',
    step2: '2. Conversations LinkedIn et email',
    step2Badge: 'AUTO',
    step3: '3. Activation Sales',
    step3Badge: 'Conversion',
  },
  pillars: {
    titleBefore: 'Une approche',
    titleAccent: 'complémentaire',
    subtitleBefore: 'Un système performant ne repose pas sur un levier isolé, mais sur ',
    subtitleHighlight: "l'assemblage simultané",
    subtitleAfter: ' de 4 piliers.',
    items: [
      {
        name: 'Outbound',
        description: 'Prospection ultra-personnalisée et adaptée au tiering de vos comptes.',
      },
      {
        name: 'Paid (Ads)',
        description:
          'Campagnes Notoriété et Lead Gen via LinkedIn Ads pour éduquer et convertir.',
      },
      {
        name: 'Data & Signaux',
        description:
          "Identification des comptes à forte intention d'achat et ciblage au bon timing.",
      },
      {
        name: 'Contenus',
        description:
          "Création d'autorité et éducation du marché pour réduire vos cycles de vente.",
      },
    ],
    outcomeMeetings: 'RDV qualifiés',
    outcomeProcess: 'Processus interne Sales',
    outcomeFinal: 'De la conversation au deal',
  },
  offers: {
    title: 'Mise en place',
    introBefore:
      "Nous fonctionnons sur la base d'un forfait mensuel. Au début de notre collaboration, nous demandons un engagement sur les ",
    introHighlight: 'trois premiers mois',
    introAfter:
      ". C'est le délai nécessaire pour structurer les fondations, lancer les campagnes et valider les premiers signaux. Après cette période, nous pouvons continuer pour une période totale de 6 mois ou transférer en interne les compétences.",
    deliverables: [
      'Cartographie complète du TAM',
      'Setup de la stack technique',
      "Détection de signaux d'intention",
      'Documentation complète',
      'Pilotage campagnes Ads & Outreach',
      'Reporting hebdo & itérations',
    ],
    cta: 'Démarrer le partenariat',
    sideTitle: 'Missions Ponctuelles',
    sideBody:
      'Audit de stack technique, publicités payantes seules, stratégie GTM ou sourcing de données. Nous répondons à la carte à vos besoins de missions.',
    sideCta: 'Demander un devis',
    sideMailSubject: 'Demande de devis - Mission ponctuelle',
  },
  stack: {
    eyebrow: 'Des outils innovants et automatisés',
    title: 'La Stack Technique ABX',
    subtitle:
      'Les meilleurs outils du marché, orchestrés pour transformer vos données en revenus prédictibles.',
    tools: [
      {
        title: 'Data & Ciblage',
        tag: 'Pharow, Sales Nav, Scraping sur-mesure',
        desc: "Construction de listes de comptes ultra-ciblées. On ne vise plus tout le marché, mais les bons comptes.",
      },
      {
        title: 'Orchestration',
        tag: 'Clay, Claude Code',
        desc: 'Orchestrateur du système. Enrichissement, scoring et détection de signaux avec +100 intégrations.',
      },
      {
        title: 'Automatisation',
        tag: 'Zapier, lemlist, Clay',
        desc: "Connexion instantanée entre les outils et exécution des séquences d'engagement multicanal.",
      },
      {
        title: 'Custom Signals',
        tag: 'Snitcher, BuiltWith...',
        desc: 'Déanonymisation du trafic, identification de technologies Web etc.',
      },
    ],
  },
  timeline: {
    title: 'Une approche méthodologique et structurée',
    subtitle:
      "Une roadmap claire de l'identification des comptes à la génération de conversions",
    steps: [
      {
        title: 'Construction & Fondations',
        desc: "On arrête de deviner. On structure le marché adressable en tiering (TAM), on nettoie le CRM, on définit les cibles et audiences précises et on configure la stack technique.",
        tags: ['Setup technique', 'Sourcing'],
      },
      {
        title: 'Exécution & Itérations',
        desc: 'Lancement simultanée Paid, outreach & nurturing. Collecte de la données et itérations.',
        tags: ['Outbound', 'Publicité payante', 'Signaux'],
      },
      {
        title: 'Scale & Optimisations',
        desc: "On double la mise sur ce qui fonctionne. On coupe ce qui ne marche pas. On aligne les équipes Sales pour qu'elles traitent les leads entrants de manière optimale.",
        tags: ['Pipeline Review', 'Playbook Final'],
      },
    ],
  },
  faq: {
    readMore: 'Approfondir',
    title: 'Questions Fréquentes',
    subtitle: "Tout ce qu'il faut savoir sur l'ABX et le GTM Engineering",
    items: [
      {
        q: "Qu'est-ce que l'ABX (Account Based Experience) ?",
        a: "L'ABX est une approche go-to-market B2B qui coordonne marketing et sales autour d'un nombre restreint de comptes cibles, en s'appuyant sur leurs signaux de comportement réels plutôt que sur des campagnes diffusées à l'aveugle.\n\nConcrètement, un système ABX identifie les comptes qui correspondent à votre profil client idéal, détecte le moment où ils manifestent une intention d'achat (visite du site, changement d'organisation, recrutement, adoption d'une technologie), puis déclenche le canal approprié — publicité, contenu, outreach ou appel d'un commercial.\n\nLa différence avec la prospection de masse tient à l'ordre des opérations : le signal précède le message, au lieu que le message soit envoyé en espérant produire un signal.",
      },
      {
        q: "Quelle est la différence entre ABX et ABM ?",
        a: "L'ABM (Account Based Marketing) pousse des campagnes personnalisées vers une liste de comptes définie à l'avance, souvent sans coordination avec les équipes sales.\n\nL'ABX observe les comportements réels, capte des signaux, puis active le bon canal — marketing ou sales — au bon moment.\n\nEn pratique : l'ABM est une campagne, l'ABX est un système. L'ABM se planifie par trimestre ; l'ABX réagit en continu. L'ABM appartient au marketing ; l'ABX est partagé entre marketing et sales, avec une définition commune de ce qui constitue un compte prêt à être contacté.",
      },
      {
        q: "Qu'est-ce que le GTM Engineering ?",
        a: "Le GTM Engineering (Go-To-Market Engineering) consiste à traiter l'acquisition B2B comme un système technique plutôt que comme une suite de tâches manuelles.\n\nUn GTM Engineer connecte les sources de données, les outils d'enrichissement, le CRM et les canaux d'activation en un flux unique et documenté : la donnée entre, elle est enrichie et scorée, les signaux sont détectés, et les actions se déclenchent automatiquement.\n\nC'est un rôle hybride entre growth marketing, sales ops et automatisation. Il se distingue d'un SDR, qui exécute la prospection, et d'une agence, qui opère des campagnes : le GTM Engineer construit l'infrastructure qui rend les deux plus efficaces.",
      },
      {
        q: 'Que déploie-t-on concrètement dans un système ABX ?',
        a: "Un système complet et coordonné autour de 4 piliers :\n\n• Data : ciblage, enrichissement, détection de signaux d'intention\n• Contenus : lead magnets, landing pages, vidéos\n• Paid : campagnes LinkedIn Ads et Google, retargeting\n• Outreach : séquences multicanal pilotées par les signaux\n\nLe tout orchestré avec Clay, lemlist, Zapier et les outils de votre stack existante. La livraison inclut la cartographie du marché adressable (TAM), la configuration technique, la documentation complète et le pilotage des campagnes.",
      },
      {
        q: "À quel type d'entreprises s'adresse l'ABX ?",
        a: "Ces offres sont conçues pour des entreprises B2B avec un panier moyen supérieur à 2 000 € et une offre déjà validée (Product Market Fit).\n\nL'ABX suppose un cycle de vente suffisamment long et une valeur contrat suffisamment élevée pour justifier un ciblage compte par compte. En dessous de ce seuil, une approche volume reste plus rentable.\n\nSi vous cherchez encore votre marché ou venez de lever des fonds, l'approche est ajustée et des offres spécifiques sont proposées. Les interlocuteurs sont généralement des Head of Sales, CMO ou fondateurs.",
      },
      {
        q: 'Combien de temps faut-il pour déployer un système ABX ?',
        a: "Trois mois pour les fondations, six mois pour un système pleinement autonome.\n\nLes trois premiers mois couvrent la structuration du marché adressable, le nettoyage du CRM, la configuration de la stack, le lancement des premières campagnes et la validation des premiers signaux. C'est la durée minimale pour disposer de données exploitables plutôt que d'intuitions.\n\nLes trois mois suivants servent à amplifier ce qui fonctionne, couper ce qui ne fonctionne pas, et transférer les compétences en interne afin que l'équipe opère le système sans dépendance externe.",
      },
      {
        q: 'Quels outils composent la stack technique ABX ?',
        a: "Quatre familles d'outils :\n\n• Data et ciblage : Pharow, LinkedIn Sales Navigator, scraping sur-mesure\n• Orchestration : Clay et Claude Code, pour l'enrichissement, le scoring et la détection de signaux\n• Automatisation : Zapier, lemlist, Clay, pour l'exécution des séquences multicanal\n• Signaux personnalisés : Snitcher pour la déanonymisation du trafic, BuiltWith pour la détection de technologies\n\nLa stack s'adapte à l'existant : l'objectif est d'orchestrer vos outils actuels, pas de tout remplacer.",
      },
      {
        q: 'Combien coûte une mission ABX ?',
        a: "Le modèle est un forfait mensuel, avec un engagement sur les trois premiers mois — délai nécessaire pour structurer les fondations et produire des résultats mesurables.\n\nLe montant dépend du périmètre : nombre de comptes à couvrir, canaux activés, complexité de la stack existante et volume de données à traiter.\n\nDes missions ponctuelles sont également possibles : audit de stack, campagnes payantes seules, stratégie go-to-market ou sourcing de données. Un devis est établi après un premier échange sur vos enjeux.",
      },
      {
        q: "Quelle différence avec une agence growth ou un SDR externalisé ?",
        a: "Une agence opère des campagnes pour vous ; un SDR externalisé exécute des volumes d'appels et d'emails. Dans les deux cas, l'expertise repart avec le prestataire à la fin du contrat.\n\nUn système ABX laisse une infrastructure documentée : la cartographie du marché, la stack configurée, les séquences, les règles de scoring et les playbooks restent votre propriété.\n\nL'objectif explicite est le transfert de compétences — à l'issue de la mission, votre équipe opère le système. C'est un investissement en capital, pas une location de main-d'œuvre.",
      },
      {
        q: "Comment mesure-t-on la performance d'un système ABX ?",
        a: "Sur le pipeline généré, pas sur les métriques de vanité.\n\nLes indicateurs suivis sont le nombre de comptes cibles engagés, le taux de conversion signal → conversation, le nombre de rendez-vous qualifiés, le pipeline créé et le coût d'acquisition par compte.\n\nLes clics, impressions et taux d'ouverture servent au diagnostic interne mais ne constituent pas des objectifs. Le reporting est hebdomadaire et chaque itération est justifiée par la donnée collectée.",
      },
    ],
  },
  footer: {
    tagline:
      "Transformez votre prospection B2B en infrastructure automatisée et générez des conversations avec vos prospects avec le bon message au bon moment avec en vous appuyant sur la méthodologie ABX. Basé en France, opérant globalement.",
    addressLabel: 'Siège social',
    rights: '© 2026 Flow Ops. Tous droits réservés.',
    privacy: 'Politique de Confidentialité',
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
    title: 'Flow Ops | B2B ABX Systems & GTM Engineering',
    description:
      'Freelance GTM Engineer. I build autonomous ABX systems in 3 months that identify your target accounts, detect their buying signals and trigger the right conversations. 10+ systems deployed in B2B.',
    ogLocale: 'en_GB',
  },
  nav: { cta: "Let's discuss your challenges", switchTo: 'FR', switchLabel: 'Passer en français' },
  hero: {
    badge: 'Reaching the right prospects at the right moment in 2026',
    titleLine1: 'Turn your B2B prospecting into',
    titleAccent: 'automated infrastructure.',
    subtitleBefore:
      'Account Based Marketing (ABM) and mass prospecting have hit their limits. In 3 months we build an ',
    subtitleHighlight: 'autonomous, scalable system',
    subtitleAfter: ' for generating B2B opportunities.',
    scrollAria: 'Scroll to the method',
    proofAlready: 'Already',
    proofCount: '10+',
    proofSystems: 'systems',
    proofDeployed: 'deployed',
    sectors: ['Cybersecurity', 'B2B SaaS', 'Industrial', 'Deeptech'],
    proofNote: 'Confidential engagements, run directly or through collectives.',
    testimonialsLabel: 'What clients say',
    blockedTitle: 'LinkedIn testimonial',
    blockedBody:
      'Displaying this post sets LinkedIn tracking cookies. It requires your consent.',
    blockedAllow: 'Allow and display',
    blockedView: 'View on LinkedIn',
  },
  method: {
    eyebrow:
      'Stop chasing leads blindly. Orchestrate every interaction with your key accounts and engage them.',
    titleLine1: 'Volume no longer works.',
    titleAccent: 'Context is king.',
    oldTitle: 'Where the traditional model breaks down',
    oldBody:
      'A diluted marketing message, Marketing and Sales working in silos, and a focus on vanity metrics — clicks, views — rather than real pipeline.',
    newTitle: 'The Account Based Experience (ABX) approach',
    newBody:
      'Tailored, scalable infrastructure. Identify priority accounts before Sales does, and generate actionable intent signals grounded in real data.',
    step1: '1. Sourcing, enrichment and signal detection',
    step2: '2. LinkedIn and email conversations',
    step2Badge: 'AUTO',
    step3: '3. Sales activation',
    step3Badge: 'Conversion',
  },
  pillars: {
    titleBefore: 'A',
    titleAccent: 'complementary',
    subtitleBefore: 'A system performs not because of one isolated lever, but because of the ',
    subtitleHighlight: 'simultaneous assembly',
    subtitleAfter: ' of 4 pillars.',
    items: [
      {
        name: 'Outbound',
        description: 'Deeply personalised prospecting, tiered to match your account priorities.',
      },
      {
        name: 'Paid (Ads)',
        description:
          'Awareness and lead-gen campaigns on LinkedIn Ads, to educate and convert.',
      },
      {
        name: 'Data & Signals',
        description:
          'Spotting accounts with high purchase intent and reaching them at the right moment.',
      },
      {
        name: 'Content',
        description:
          'Building authority and educating the market to shorten your sales cycles.',
      },
    ],
    outcomeMeetings: 'Qualified meetings',
    outcomeProcess: 'Internal sales process',
    outcomeFinal: 'From conversation to deal',
  },
  offers: {
    title: 'How we work together',
    introBefore:
      'We work on a monthly retainer. At the start of the engagement we ask for a commitment over the ',
    introHighlight: 'first three months',
    introAfter:
      '. That is the time needed to lay the foundations, launch the campaigns and validate the first signals. After that period we can continue for a total of 6 months, or transfer the capability to your team.',
    deliverables: [
      'Full TAM mapping',
      'Technical stack setup',
      'Intent signal detection',
      'Complete documentation',
      'Ads & outreach campaign management',
      'Weekly reporting & iteration',
    ],
    cta: 'Start the partnership',
    sideTitle: 'One-off engagements',
    sideBody:
      'Technical stack audit, paid advertising alone, go-to-market strategy or data sourcing. We scope each engagement to what you actually need.',
    sideCta: 'Request a quote',
    sideMailSubject: 'Quote request - One-off engagement',
  },
  stack: {
    eyebrow: 'Modern, automated tooling',
    title: 'The ABX technical stack',
    subtitle:
      'The best tools on the market, orchestrated to turn your data into predictable revenue.',
    tools: [
      {
        title: 'Data & Targeting',
        tag: 'Pharow, Sales Nav, custom scraping',
        desc: 'Building tightly targeted account lists. You stop addressing the whole market and focus on the right accounts.',
      },
      {
        title: 'Orchestration',
        tag: 'Clay, Claude Code',
        desc: 'The system orchestrator. Enrichment, scoring and signal detection across 100+ integrations.',
      },
      {
        title: 'Automation',
        tag: 'Zapier, lemlist, Clay',
        desc: 'Instant connection between tools and execution of multichannel engagement sequences.',
      },
      {
        title: 'Custom Signals',
        tag: 'Snitcher, BuiltWith...',
        desc: 'Traffic de-anonymisation, web technology detection and more.',
      },
    ],
  },
  timeline: {
    title: 'A methodical, structured approach',
    subtitle: 'A clear roadmap from account identification through to conversion',
    steps: [
      {
        title: 'Foundations & build',
        desc: 'No more guesswork. We tier the addressable market (TAM), clean up the CRM, define precise targets and audiences, and configure the technical stack.',
        tags: ['Technical setup', 'Sourcing'],
      },
      {
        title: 'Execution & iteration',
        desc: 'Paid, outreach and nurturing launch together. Data is collected and the system iterates on it.',
        tags: ['Outbound', 'Paid advertising', 'Signals'],
      },
      {
        title: 'Scale & optimisation',
        desc: 'We double down on what works and cut what does not. Sales teams are aligned so inbound leads are handled the right way.',
        tags: ['Pipeline review', 'Final playbook'],
      },
    ],
  },
  faq: {
    readMore: 'Read further',
    title: 'Frequently asked questions',
    subtitle: 'What you need to know about ABX and GTM Engineering',
    items: [
      {
        q: 'What is ABX (Account Based Experience)?',
        a: 'ABX is a B2B go-to-market approach that coordinates marketing and sales around a small set of target accounts, driven by those accounts’ real behavioural signals rather than campaigns broadcast blindly.\n\nIn practice, an ABX system identifies the accounts matching your ideal customer profile, detects the moment they show purchase intent — a site visit, an organisational change, a new hire, a technology adoption — and then triggers the appropriate channel: advertising, content, outreach or a call from a sales rep.\n\nWhat separates it from mass prospecting is the order of operations: the signal comes before the message, instead of the message being sent in the hope of producing a signal.',
      },
      {
        q: 'What is the difference between ABX and ABM?',
        a: 'ABM (Account Based Marketing) pushes personalised campaigns towards a list of accounts defined in advance, often without coordination with the sales team.\n\nABX observes real behaviour, captures signals, then activates the right channel — marketing or sales — at the right moment.\n\nPut simply: ABM is a campaign, ABX is a system. ABM is planned by quarter; ABX reacts continuously. ABM belongs to marketing; ABX is shared between marketing and sales, with a common definition of what makes an account ready to be contacted.',
      },
      {
        q: 'What is GTM Engineering?',
        a: 'GTM Engineering (Go-To-Market Engineering) means treating B2B acquisition as a technical system rather than a series of manual tasks.\n\nA GTM Engineer connects data sources, enrichment tools, the CRM and activation channels into a single documented flow: data comes in, gets enriched and scored, signals are detected, and actions fire automatically.\n\nIt is a hybrid role spanning growth marketing, sales ops and automation. It differs from an SDR, who executes prospecting, and from an agency, which runs campaigns: the GTM Engineer builds the infrastructure that makes both more effective.',
      },
      {
        q: 'What does an ABX system actually include?',
        a: 'A complete, coordinated system built on 4 pillars:\n\n• Data: targeting, enrichment, intent signal detection\n• Content: lead magnets, landing pages, video\n• Paid: LinkedIn Ads and Google campaigns, retargeting\n• Outreach: multichannel sequences driven by signals\n\nAll orchestrated with Clay, lemlist, Zapier and the tools already in your stack. Delivery includes addressable market (TAM) mapping, technical configuration, full documentation and campaign management.',
      },
      {
        q: 'What kind of companies is ABX for?',
        a: 'These engagements are designed for B2B companies with an average contract value above €2,000 and an offer that has already found product-market fit.\n\nABX assumes a sales cycle long enough and a contract value high enough to justify account-by-account targeting. Below that threshold, a volume approach remains more cost-effective.\n\nIf you are still searching for your market or have just raised funding, the approach is adjusted and specific engagements are available. The people we work with are typically Heads of Sales, CMOs or founders.',
      },
      {
        q: 'How long does it take to deploy an ABX system?',
        a: 'Three months for the foundations, six months for a fully autonomous system.\n\nThe first three months cover structuring the addressable market, cleaning the CRM, configuring the stack, launching the first campaigns and validating the first signals. That is the minimum needed to work from real data rather than assumptions.\n\nThe following three months are spent amplifying what works, cutting what does not, and transferring the capability in-house so your team can run the system without outside dependency.',
      },
      {
        q: 'Which tools make up the ABX stack?',
        a: 'Four families of tools:\n\n• Data and targeting: Pharow, LinkedIn Sales Navigator, custom scraping\n• Orchestration: Clay and Claude Code, for enrichment, scoring and signal detection\n• Automation: Zapier, lemlist, Clay, to execute multichannel sequences\n• Custom signals: Snitcher for traffic de-anonymisation, BuiltWith for technology detection\n\nThe stack adapts to what you already have: the goal is to orchestrate your current tools, not replace all of them.',
      },
      {
        q: 'How much does an ABX engagement cost?',
        a: 'The model is a monthly retainer, with a commitment over the first three months — the time needed to lay the foundations and produce measurable results.\n\nThe amount depends on scope: how many accounts to cover, which channels are activated, how complex the existing stack is, and the volume of data to process.\n\nOne-off engagements are also possible: stack audit, paid campaigns alone, go-to-market strategy or data sourcing. A quote follows an initial conversation about your situation.',
      },
      {
        q: 'How is this different from a growth agency or an outsourced SDR?',
        a: 'An agency runs campaigns for you; an outsourced SDR executes call and email volume. In both cases the expertise leaves with the provider when the contract ends.\n\nAn ABX system leaves documented infrastructure behind: the market mapping, the configured stack, the sequences, the scoring rules and the playbooks remain yours.\n\nCapability transfer is an explicit goal — by the end of the engagement your team runs the system. It is a capital investment, not a labour rental.',
      },
      {
        q: 'How is ABX performance measured?',
        a: 'On pipeline generated, not on vanity metrics.\n\nThe indicators tracked are the number of target accounts engaged, the signal-to-conversation conversion rate, the number of qualified meetings, pipeline created, and cost of acquisition per account.\n\nClicks, impressions and open rates serve internal diagnostics but are not goals in themselves. Reporting is weekly, and every iteration is justified by the data collected.',
      },
    ],
  },
  footer: {
    tagline:
      'Turn your B2B prospecting into automated infrastructure and start conversations with your prospects — the right message at the right moment, built on the ABX methodology. Based in France, operating globally.',
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
