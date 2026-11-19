// Fictional data for the cockpit demo. Companies are described, never named, so
// no real company can be mistaken for a client or a prospect. Every score is the
// sum of its parts below, so the breakdown shown on screen always adds up.

export type Status = 'a_appeler' | 'appelee' | 'conversation' | 'rdv';

export interface Signal {
  label: string;
  /** Days since the signal was observed. */
  days: number;
  /** Points it still carries today, after ageing. */
  points: number;
  /** Points it carried the day it was observed. */
  initial: number;
}

export interface Account {
  company: string;
  segment: string;
  contact: string;
  fit: number;
  fitWhy: string;
  signals: Signal[];
  reason: string;
  opener: string;
  status: Status;
  rep: string;
  isNew: boolean;
}

export const CLIENT = {
  label: 'Éditeur d’un logiciel de maintenance industrielle',
  size: '85 salariés, trois commerciaux',
  week: 'Semaine du lundi 23 novembre 2026',
  updated: 'Mise à jour lundi 23 novembre, 7 h',
  threshold: 60,
};

export const scoreOf = (a: Account) => a.fit + a.signals.reduce((s, x) => s + x.points, 0);

export const STATUS_LABEL: Record<Status, string> = {
  a_appeler: 'À appeler',
  appelee: 'Appelée, sans suite',
  conversation: 'Conversation',
  rdv: 'Rendez-vous pris',
};

export const ACCOUNTS: Account[] = [
  {
    company: 'Fabricant d’emballages plastiques, 320 salariés, Ain',
    segment: 'Plasturgie',
    contact: 'Directeur technique',
    fit: 34,
    fitWhy: 'Plasturgie, 250 à 499 salariés, trois sites : comme vos cinq meilleurs clients',
    signals: [
      { label: 'Trois visites de votre page tarifs', days: 2, points: 19, initial: 20 },
      { label: 'Recrute un responsable maintenance', days: 6, points: 15, initial: 18 },
      { label: 'Nouveau directeur d’usine', days: 24, points: 8, initial: 18 },
    ],
    reason: 'Il cherche un responsable maintenance et quelqu’un a regardé vos tarifs trois fois cette semaine.',
    opener: 'J’ai vu que vous recrutez un responsable maintenance : est-ce que le suivi des interventions fait partie de son périmètre ?',
    status: 'rdv',
    rep: 'Claire',
    isNew: true,
  },
  {
    company: 'Laiterie coopérative, 210 salariés, Manche',
    segment: 'Agroalimentaire',
    contact: 'Responsable maintenance',
    fit: 31,
    fitWhy: 'Agroalimentaire, 100 à 249 salariés, production en continu',
    signals: [
      { label: 'Annonce l’ouverture d’une nouvelle ligne', days: 5, points: 17, initial: 20 },
      { label: 'Ancien lead de votre CRM revenu sur le site', days: 3, points: 14, initial: 15 },
      { label: 'Participe au salon de la maintenance de Lyon', days: 11, points: 9, initial: 12 },
    ],
    reason: 'Une nouvelle ligne démarre au printemps, et ce contact de 2024 est revenu sur votre site lundi.',
    opener: 'Vous ouvrez une nouvelle ligne au printemps : comment comptez-vous planifier sa maintenance préventive dès le démarrage ?',
    status: 'conversation',
    rep: 'Julien',
    isNew: false,
  },
  {
    company: 'Fonderie d’aluminium, 140 salariés, Vosges',
    segment: 'Métallurgie',
    contact: 'Directeur général',
    fit: 32,
    fitWhy: 'Métallurgie, 100 à 249 salariés, un site',
    signals: [
      { label: 'Nouveau directeur général', days: 9, points: 17, initial: 20 },
      { label: 'Visite de votre étude de cas fonderie', days: 4, points: 13, initial: 14 },
    ],
    reason: 'Un nouveau directeur général arrive, et l’entreprise a lu votre étude de cas sur une autre fonderie.',
    opener: 'Félicitations pour votre prise de poste : la maintenance fait-elle partie des chantiers de vos cent premiers jours ?',
    status: 'a_appeler',
    rep: 'Claire',
    isNew: true,
  },
  {
    company: 'Fabricant de principes actifs, 260 salariés, Isère',
    segment: 'Chimie et pharmacie',
    contact: 'Responsable méthodes',
    fit: 34,
    fitWhy: 'Pharmacie, exigences de traçabilité, 250 à 499 salariés',
    signals: [
      { label: 'Recrute deux techniciens de maintenance', days: 8, points: 15, initial: 18 },
      { label: 'Commente un post sur l’audit qualité', days: 3, points: 12, initial: 12 },
    ],
    reason: 'Deux postes de techniciens ouverts, et le responsable méthodes s’intéresse à la préparation des audits.',
    opener: 'Vous renforcez l’équipe maintenance : comment gardez-vous la trace des interventions pour vos audits ?',
    status: 'appelee',
    rep: 'Julien',
    isNew: true,
  },
  {
    company: 'Usineur de pièces aéronautiques, 180 salariés, Haute-Garonne',
    segment: 'Métallurgie',
    contact: 'Directeur de production',
    fit: 32,
    fitWhy: 'Usinage de précision, 100 à 249 salariés, parc machines important',
    signals: [
      { label: 'Visite de votre page démonstration', days: 1, points: 17, initial: 17 },
      { label: 'Annonce un agrandissement de l’atelier', days: 19, points: 12, initial: 20 },
    ],
    reason: 'L’atelier s’agrandit, et quelqu’un a ouvert votre page de démonstration hier.',
    opener: 'Avec l’agrandissement de l’atelier, comment suivez-vous l’état des nouvelles machines ?',
    status: 'a_appeler',
    rep: 'Claire',
    isNew: true,
  },
  {
    company: 'Biscuiterie industrielle, 150 salariés, Loire-Atlantique',
    segment: 'Agroalimentaire',
    contact: 'Responsable maintenance',
    fit: 34,
    fitWhy: 'Agroalimentaire, 100 à 249 salariés',
    signals: [
      { label: 'Recrute un responsable maintenance', days: 12, points: 14, initial: 18 },
      { label: 'Deux visites de votre page tarifs', days: 6, points: 14, initial: 15 },
    ],
    reason: 'Le poste de responsable maintenance est ouvert depuis douze jours et vos tarifs ont été consultés deux fois.',
    opener: 'Le futur responsable maintenance trouvera-t-il un historique des interventions en arrivant ?',
    status: 'conversation',
    rep: 'Julien',
    isNew: false,
  },
  {
    company: 'Fabricant de profilés en PVC, 95 salariés, Nord',
    segment: 'Plasturgie',
    contact: 'Dirigeant',
    fit: 33,
    fitWhy: 'Plasturgie, 50 à 99 salariés, dirigeant impliqué dans les achats',
    signals: [
      { label: 'Ancien lead de votre CRM revenu sur le site', days: 2, points: 15, initial: 15 },
      { label: 'Visite de votre page tarifs', days: 4, points: 12, initial: 13 },
      { label: 'Participe au salon de la plasturgie', days: 15, points: 7, initial: 12 },
    ],
    reason: 'Ce dirigeant avait demandé une démonstration en 2025 sans suite ; il est revenu sur votre site mardi et a regardé vos tarifs.',
    opener: 'Nous avions échangé l’an dernier sur la maintenance de vos extrudeuses : où en êtes-vous aujourd’hui ?',
    status: 'a_appeler',
    rep: 'Claire',
    isNew: false,
  },
  {
    company: 'Malterie, 120 salariés, Marne',
    segment: 'Agroalimentaire',
    contact: 'Directeur d’usine',
    fit: 32,
    fitWhy: 'Agroalimentaire, 100 à 249 salariés, production saisonnière',
    signals: [
      { label: 'Nouveau directeur d’usine', days: 14, points: 15, initial: 18 },
      { label: 'Visite de votre page sur l’arrêt technique', days: 5, points: 13, initial: 14 },
    ],
    reason: 'Le nouveau directeur d’usine prépare l’arrêt technique de l’été et a lu votre page sur le sujet.',
    opener: 'Vous préparez l’arrêt technique de l’été : comment planifiez-vous les interventions des sous-traitants ?',
    status: 'a_appeler',
    rep: 'Julien',
    isNew: true,
  },
];

export const MARKET = {
  total: 2140,
  target: 784,
  worked: 163,
  meetings: 5,
  bySize: [
    { label: '50 à 99 salariés', target: 312, worked: 54 },
    { label: '100 à 249 salariés', target: 287, worked: 71 },
    { label: '250 à 499 salariés', target: 185, worked: 38 },
  ],
  bySector: [
    { label: 'Agroalimentaire', target: 214, worked: 52 },
    { label: 'Métallurgie', target: 176, worked: 39 },
    { label: 'Plasturgie', target: 158, worked: 33 },
    { label: 'Chimie', target: 121, worked: 22 },
    { label: 'Pharmacie', target: 115, worked: 17 },
  ],
};

export const TRIAL = [
  { week: 'Semaine 1', list: 15, called: 9, conversations: 2, meetings: 1, newForTeam: 10 },
  { week: 'Semaine 2', list: 16, called: 12, conversations: 3, meetings: 1, newForTeam: 9 },
  { week: 'Semaine 3', list: 14, called: 11, conversations: 4, meetings: 2, newForTeam: 10 },
  { week: 'Semaine 4', list: 15, called: 12, conversations: 3, meetings: 1, newForTeam: 9 },
];

export const NURTURING = {
  linkedin: 64,
  email: 55,
  promoted: 9,
  rows: [
    { company: 'Fabricant de vannes industrielles, 230 salariés, Rhône', sequence: 'LinkedIn', step: '2 sur 4', score: 54, delta: 7, next: 'Mardi' },
    { company: 'Conserverie de poisson, 110 salariés, Finistère', sequence: 'Email', step: '3 sur 4', score: 51, delta: 4, next: 'Jeudi' },
    { company: 'Fabricant de mobilier de bureau, 190 salariés, Vendée', sequence: 'LinkedIn', step: '1 sur 4', score: 47, delta: 0, next: 'Lundi' },
    { company: 'Traitement de surface, 75 salariés, Doubs', sequence: 'Email', step: '2 sur 4', score: 45, delta: 9, next: 'Mercredi' },
    { company: 'Fabricant de cosmétiques, 160 salariés, Loiret', sequence: 'LinkedIn', step: '4 sur 4', score: 42, delta: -3, next: 'Fin de séquence' },
    { company: 'Cartonnerie, 130 salariés, Gironde', sequence: 'Email', step: '1 sur 4', score: 38, delta: 2, next: 'Vendredi' },
  ],
};
