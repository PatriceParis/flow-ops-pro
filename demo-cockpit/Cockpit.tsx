import React, { useState } from 'react';
import {
  ListChecks,
  PieChart,
  CalendarCheck,
  Send,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  RefreshCw,
  Info,
} from 'lucide-react';
import {
  ACCOUNTS,
  CLIENT,
  MARKET,
  NURTURING,
  STATUS_LABEL,
  TRIAL,
  scoreOf,
  type Account,
  type Status,
} from './data';

type View = 'liste' | 'marche' | 'essai' | 'nurturing';

const NAV: { id: View; label: string; icon: React.ElementType }[] = [
  { id: 'liste', label: 'La liste du lundi', icon: ListChecks },
  { id: 'marche', label: 'Votre marché', icon: PieChart },
  { id: 'essai', label: 'Le mois d’essai', icon: CalendarCheck },
  { id: 'nurturing', label: 'Nurturing', icon: Send },
];

// Literal class names only: Tailwind is compiled at build time from source text.
const STATUS_CLASS: Record<Status, string> = {
  a_appeler: 'bg-blue-50 text-blue-700 border-blue-200',
  appelee: 'bg-slate-100 text-slate-600 border-slate-200',
  conversation: 'bg-amber-50 text-amber-700 border-amber-200',
  rdv: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const fmt = (n: number) => n.toLocaleString('fr-FR');
const pct = (a: number, b: number) => Math.round((a / b) * 100);

const Bar: React.FC<{ value: number; max: number; tone?: 'blue' | 'slate' }> = ({ value, max, tone = 'blue' }) => (
  <span className="block h-1.5 rounded-full bg-slate-100 overflow-hidden">
    <span
      className={`block h-full rounded-full ${tone === 'blue' ? 'bg-gradient-to-r from-blue-600 to-cyan-400' : 'bg-slate-400'}`}
      style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
    />
  </span>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl border border-slate-200 ${className}`}>{children}</div>
);

const Kpi: React.FC<{ label: string; value: string; note?: string; dark?: boolean }> = ({ label, value, note, dark }) => (
  <div className={`rounded-2xl p-5 border ${dark ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-200'}`}>
    <p className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-400'}`}>{label}</p>
    <p className={`mt-2 text-3xl font-bold tracking-tight tabular-nums ${dark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
    {note && <p className={`mt-1 text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{note}</p>}
  </div>
);

const Header: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-6">
    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h1>
    <p className="mt-1 text-slate-500">{subtitle}</p>
  </div>
);

/* ---------- La liste du lundi ---------- */

const AccountRow: React.FC<{ a: Account; rank: number }> = ({ a, rank }) => {
  const [open, setOpen] = useState(rank === 1);
  const score = scoreOf(a);
  return (
    <li className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left px-5 py-4 grid grid-cols-[2.5rem_minmax(0,1fr)_auto] md:grid-cols-[2.5rem_minmax(0,1fr)_9rem_10rem_1.5rem] gap-x-4 gap-y-2 items-center hover:bg-slate-50 transition-colors"
      >
        <span className="text-2xl font-bold text-slate-900 tabular-nums">{score}</span>
        <span className="min-w-0">
          <span className="block font-semibold text-slate-900 leading-snug md:truncate">{a.company}</span>
          <span className="block text-xs text-slate-500 mt-0.5 md:truncate">
            {a.contact} · {a.signals.length} signaux{a.isNew ? ' · nouvelle pour l’équipe' : ''}
          </span>
        </span>
        <span className="hidden md:block">
          <Bar value={score} max={100} />
        </span>
        <span className={`justify-self-end md:justify-self-start text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_CLASS[a.status]}`}>
          {STATUS_LABEL[a.status]}
        </span>
        <ChevronDown className={`hidden md:block w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="px-5 pb-6 grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-3">Comment ce score se calcule</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-slate-700">
                  <span className="font-semibold text-slate-900">Ce qu’elle est.</span> {a.fitWhy}
                </span>
                <span className="font-bold tabular-nums text-slate-900">{a.fit}</span>
              </li>
              {a.signals.map((s, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <span className="text-slate-700">
                    <span className="font-semibold text-slate-900">{s.label}</span>, il y a {s.days}{' '}jour{s.days > 1 ? 's' : ''}
                    {s.points < s.initial && (
                      <span className="text-slate-400"> (valait {s.initial}, perd de la valeur avec le temps)</span>
                    )}
                  </span>
                  <span className="font-bold tabular-nums text-slate-900">+{s.points}</span>
                </li>
              ))}
              <li className="flex justify-between gap-4 pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-900">Score</span>
                <span className="font-bold tabular-nums text-slate-900">{score}</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">La raison de l’appel</p>
              <p className="text-slate-700 leading-relaxed">{a.reason}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Phrase d’ouverture</p>
              <p className="text-slate-700 leading-relaxed italic">{a.opener}</p>
            </div>
            <p className="text-xs text-slate-500">
              Attribuée à {a.rep}. Le statut vient de votre CRM, où {a.rep} note l’appel.
            </p>
          </div>
        </div>
      )}
    </li>
  );
};

const ListeView: React.FC = () => {
  const sorted = [...ACCOUNTS].sort((x, y) => scoreOf(y) - scoreOf(x));
  const count = (s: Status) => ACCOUNTS.filter((a) => a.status === s).length;
  return (
    <>
      <Header
        title="La liste du lundi"
        subtitle={`${CLIENT.week}. ${ACCOUNTS.length} entreprises dont le score dépasse ${CLIENT.threshold}, classées par score.`}
      />
      <div className="flex flex-wrap gap-2 mb-5">
        {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
          <span key={s} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${STATUS_CLASS[s]}`}>
            {STATUS_LABEL[s]}{' '}: {count(s)}
          </span>
        ))}
      </div>
      <Card className="overflow-hidden">
        <ol>
          {sorted.map((a, i) => (
            <AccountRow key={a.company} a={a} rank={i + 1} />
          ))}
        </ol>
      </Card>
      <p className="mt-4 text-sm text-slate-500 max-w-3xl leading-relaxed">
        Un signal seul ne suffit pas à faire entrer une entreprise dans la liste : c’est leur combinaison qui la fait
        monter, et chaque signal perd de sa valeur avec le temps. Ouvrez une ligne pour voir le détail de son score.
      </p>
    </>
  );
};

/* ---------- Votre marché ---------- */

const Breakdown: React.FC<{ title: string; rows: { label: string; target: number; worked: number }[] }> = ({ title, rows }) => {
  const max = Math.max(...rows.map((r) => r.target));
  return (
    <Card className="p-6">
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-500 mb-5">Entreprises de votre cible, et part déjà travaillée</p>
      <ul className="space-y-4">
        {rows.map((r) => (
          <li key={r.label}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-slate-700">{r.label}</span>
              <span className="tabular-nums text-slate-500">
                <span className="font-semibold text-slate-900">{r.worked}</span> sur {r.target}
              </span>
            </div>
            <span className="block h-2 rounded-full bg-slate-100 overflow-hidden" style={{ width: `${(r.target / max) * 100}%` }}>
              <span className="block h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${pct(r.worked, r.target)}%` }} />
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const MarcheView: React.FC = () => {
  const steps = [
    { label: 'Votre marché', value: MARKET.total, note: 'entreprises recensées' },
    { label: 'Correspondent à votre cible', value: MARKET.target, note: `${pct(MARKET.target, MARKET.total)} % du marché` },
    { label: 'Déjà travaillées', value: MARKET.worked, note: `${pct(MARKET.worked, MARKET.target)} % de la cible : appelées ou en nurturing` },
    { label: 'Rendez-vous', value: MARKET.meetings, note: 'depuis le début de l’essai' },
  ];
  return (
    <>
      <Header title="Votre marché" subtitle="Toutes les entreprises de votre marché, celles qui correspondent à votre cible, et ce qui a déjà été travaillé." />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {steps.map((s, i) => (
          <Kpi key={s.label} label={s.label} value={fmt(s.value)} note={s.note} dark={i === 3} />
        ))}
      </div>
      <Card className="p-6 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-slate-900">De la cible aux entreprises travaillées</span>
          <span className="text-slate-500 tabular-nums">{MARKET.worked} sur {MARKET.target}</span>
        </div>
        <Bar value={MARKET.worked} max={MARKET.target} />
        <p className="mt-3 text-xs text-slate-500">
          Il reste {fmt(MARKET.target - MARKET.worked)} entreprises de votre cible que personne n’a encore contactées : elles
          entreront dans la liste quand leurs signaux les feront monter.
        </p>
      </Card>
      <div className="grid lg:grid-cols-2 gap-6">
        <Breakdown title="Par taille" rows={MARKET.bySize} />
        <Breakdown title="Par secteur" rows={MARKET.bySector} />
      </div>
    </>
  );
};

/* ---------- Le mois d'essai ---------- */

const EssaiView: React.FC = () => {
  const sum = (k: 'list' | 'called' | 'conversations' | 'meetings' | 'newForTeam') => TRIAL.reduce((s, w) => s + w[k], 0);
  const list = sum('list');
  return (
    <>
      <Header
        title="Le mois d’essai"
        subtitle="Quatre listes, et trois chiffres relus chaque semaine avec vous : entreprises appelées, conversations, rendez-vous."
      />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <Kpi label="Entreprises appelées" value={`${sum('called')}`} note={`sur ${list} proposées en quatre listes`} />
        <Kpi label="Conversations" value={`${sum('conversations')}`} note={`${pct(sum('conversations'), sum('called'))} % des appels`} />
        <Kpi label="Rendez-vous" value={`${sum('meetings')}`} note="pris par vos commerciaux" dark />
        <Kpi label="Nouvelles pour l’équipe" value={`${sum('newForTeam')}`} note={`sur ${list} : absentes de votre CRM`} />
      </div>
      <Card className="overflow-x-auto">
        <table className="w-full text-sm min-w-[560px]">
          <thead>
            <tr className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <th className="px-5 py-3 font-bold">Semaine</th>
              <th className="px-5 py-3 font-bold">Liste</th>
              <th className="px-5 py-3 font-bold">Appelées</th>
              <th className="px-5 py-3 font-bold">Conversations</th>
              <th className="px-5 py-3 font-bold">Rendez-vous</th>
            </tr>
          </thead>
          <tbody>
            {TRIAL.map((w) => (
              <tr key={w.week} className="border-b border-slate-100 last:border-0">
                <td className="px-5 py-4 font-semibold text-slate-900">{w.week}</td>
                <td className="px-5 py-4 tabular-nums text-slate-700">{w.list}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="tabular-nums text-slate-700 w-6">{w.called}</span>
                    <span className="flex-1 max-w-[120px]"><Bar value={w.called} max={w.list} /></span>
                  </div>
                </td>
                <td className="px-5 py-4 tabular-nums text-slate-700">{w.conversations}</td>
                <td className="px-5 py-4 tabular-nums font-semibold text-slate-900">{w.meetings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <p className="mt-4 text-sm text-slate-500 max-w-3xl leading-relaxed">
        Ces chiffres viennent de votre CRM : vos commerciaux y notent leurs appels, cet espace les lit. À la fin du mois,
        vous décidez de continuer ou d’arrêter, sans engagement.
      </p>
    </>
  );
};

/* ---------- Nurturing ---------- */

const Delta: React.FC<{ d: number }> = ({ d }) =>
  d > 0 ? (
    <span className="inline-flex items-center text-emerald-600 text-xs font-semibold"><ArrowUpRight className="w-3.5 h-3.5" />+{d}</span>
  ) : d < 0 ? (
    <span className="inline-flex items-center text-rose-600 text-xs font-semibold"><ArrowDownRight className="w-3.5 h-3.5" />{d}</span>
  ) : (
    <span className="inline-flex items-center text-slate-400 text-xs font-semibold"><Minus className="w-3.5 h-3.5" />0</span>
  );

const NurturingView: React.FC = () => (
  <>
    <Header
      title="Nurturing"
      subtitle={`Les entreprises de votre cible dont le score est encore sous ${CLIENT.threshold} reçoivent deux séquences, sans appel.`}
    />
    <div className="grid sm:grid-cols-3 gap-4 mb-6">
      <Kpi label="Séquence LinkedIn" value={`${NURTURING.linkedin}`} note="entreprises, depuis les comptes de vos commerciaux" />
      <Kpi label="Séquence email" value={`${NURTURING.email}`} note="entreprises" />
      <Kpi label="Passées dans la liste" value={`${NURTURING.promoted}`} note={`ce mois-ci, score au-dessus de ${CLIENT.threshold}`} dark />
    </div>
    <Card className="overflow-x-auto">
      <table className="w-full text-sm min-w-[640px]">
        <thead>
          <tr className="text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
            <th className="px-5 py-3 font-bold">Entreprise</th>
            <th className="px-5 py-3 font-bold">Séquence</th>
            <th className="px-5 py-3 font-bold">Étape</th>
            <th className="px-5 py-3 font-bold">Score</th>
            <th className="px-5 py-3 font-bold">Prochain message</th>
          </tr>
        </thead>
        <tbody>
          {NURTURING.rows.map((r) => (
            <tr key={r.company} className="border-b border-slate-100 last:border-0">
              <td className="px-5 py-4 font-semibold text-slate-900">{r.company}</td>
              <td className="px-5 py-4 text-slate-700">{r.sequence}</td>
              <td className="px-5 py-4 text-slate-700">{r.step}</td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="tabular-nums font-semibold text-slate-900 w-6">{r.score}</span>
                  <span className="w-20"><Bar value={r.score} max={CLIENT.threshold} tone="slate" /></span>
                  <Delta d={r.delta} />
                </div>
              </td>
              <td className="px-5 py-4 text-slate-700">{r.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    <p className="mt-4 text-sm text-slate-500 max-w-3xl leading-relaxed">
      Vous validez chaque message avant son premier envoi. Quand le score d’une entreprise atteint {CLIENT.threshold}, elle
      sort de la séquence et entre dans la liste du lundi.
    </p>
  </>
);

/* ---------- Coquille ---------- */

const Cockpit: React.FC = () => {
  const [view, setView] = useState<View>('liste');
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm px-4 py-2.5 flex items-center justify-center gap-2 text-center">
        <Info className="w-4 h-4 shrink-0" />
        <span>Démonstration : les entreprises, les personnes et les chiffres sont fictifs.</span>
      </div>

      <div className="lg:flex">
        <aside className="lg:w-72 lg:min-h-[calc(100vh-41px)] bg-white border-b lg:border-b-0 lg:border-r border-slate-200 lg:flex lg:flex-col">
          <div className="px-5 pt-5 pb-4 flex items-center gap-3">
            <img src="/flow-ops-logo.png" alt="" className="w-9 h-9 rounded-lg" />
            <div>
              <p className="font-bold text-slate-900 leading-tight">Votre espace de suivi</p>
              <p className="text-xs text-slate-500">Flow Ops</p>
            </div>
          </div>
          <div className="mx-5 mb-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
            <p className="text-sm font-semibold text-slate-900 leading-snug">{CLIENT.label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{CLIENT.size}</p>
          </div>
          <nav className="flex lg:flex-col gap-1 px-3 pb-3 overflow-x-auto">
            {NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setView(id)}
                aria-current={view === id ? 'page' : undefined}
                className={`shrink-0 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  view === id ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:block mt-auto px-5 py-5 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Synchronisé avec votre CRM
            </p>
            <p className="flex items-center gap-2">
              <RefreshCw className="w-3 h-3" /> {CLIENT.updated}
            </p>
          </div>
        </aside>

        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 max-w-6xl">
          {view === 'liste' && <ListeView />}
          {view === 'marche' && <MarcheView />}
          {view === 'essai' && <EssaiView />}
          {view === 'nurturing' && <NurturingView />}
        </main>
      </div>
    </div>
  );
};

export default Cockpit;
