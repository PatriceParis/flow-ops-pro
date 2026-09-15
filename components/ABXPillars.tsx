import React from 'react';
import { Mail, Megaphone, FileText, Database, Calendar, Users, CheckCircle } from 'lucide-react';

const ABXPillars: React.FC = () => {
  const pillars = [
    {
      id: 1,
      name: 'Outbound',
      icon: <Mail className="w-4 h-4" />,
      description: 'Prospection ultra-personnalisée et adaptée au tiering de vos comptes.',
      // Utilisation de classes responsive pour le positionnement
      containerClasses: 'top-0 left-0 items-start text-left pl-6 pt-6 pr-10 md:pl-16 md:pt-16 md:pr-24 justify-start'
    },
    {
      id: 2,
      name: 'Paid (Ads)',
      icon: <Megaphone className="w-4 h-4" />,
      description: 'Campagnes Notoriété et Lead Gen via LinkedIn Ads pour éduquer et convertir.',
      containerClasses: 'top-0 right-0 items-end text-right pr-6 pt-6 pl-10 md:pr-16 md:pt-16 md:pl-24 justify-start'
    },
    {
      id: 3,
      name: 'Data & Signaux',
      icon: <Database className="w-4 h-4" />,
      description: 'Identification des comptes à forte intention d\'achat et ciblage au bon timing.',
      containerClasses: 'bottom-0 left-0 items-start text-left pl-6 pb-6 pr-10 md:pl-16 md:pb-16 md:pr-24 justify-end'
    },
    {
      id: 4,
      name: 'Contenus',
      icon: <FileText className="w-4 h-4" />,
      description: 'Création d\'autorité et éducation du marché pour réduire vos cycles de vente.',
      containerClasses: 'bottom-0 right-0 items-end text-right pr-6 pb-6 pl-10 md:pr-16 md:pb-16 md:pl-24 justify-end'
    }
  ];

  return (
    <section id="piliers" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-indigo-50/40 rounded-full blur-[60px] md:blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
            Une approche <span className="gradient-text">complémentaire</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed">
            Un système performant ne repose pas sur un levier isolé, mais sur <span className="text-slate-900">l'assemblage simultané</span> de 4 piliers.
          </p>
        </div>

        {/* Puzzle Blocks */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative w-full max-w-[500px] md:max-w-[620px] aspect-square">
            
            {/* SVG Puzzle Shapes */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_10px_30px_rgba(15,23,42,0.02)] md:drop-shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
              {/* TL Piece */}
              <path d="M10,10 h90 v30 a10,10 0 0 1 0,20 v40 h-40 a10,10 0 0 0 -20,0 h-30 z" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="0.5" />
              {/* TR Piece */}
              <path d="M100,10 h90 v90 h-30 a10,10 0 0 1 -20,0 h-40 v-40 a10,10 0 0 0 0,-20 v-30 z" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.5" />
              {/* BL Piece */}
              <path d="M10,100 h30 a10,10 0 0 1 20,0 h40 v40 a10,10 0 0 0 0,20 v30 h-90 z" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.5" />
              {/* BR Piece */}
              <path d="M100,100 h40 a10,10 0 0 0 20,0 h30 v90 h-90 v-30 a10,10 0 0 1 0,-20 v-40 z" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="0.5" />
              
              <g fill="none" stroke="#e2e8f0" strokeWidth="0.4" className="opacity-40">
                 <path d="M100,10 v30 a10,10 0 0 1 0,20 v40" />
                 <path d="M100,100 v40 a10,10 0 0 1 0,20 v30" />
                 <path d="M10,100 h30 a10,10 0 0 1 20,0 h40" />
                 <path d="M100,100 h40 a10,10 0 0 0 20,0 h30" />
              </g>
            </svg>

            {/* Content Layer */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                {pillars.map((p) => (
                  <div key={p.id} className={`flex flex-col h-full absolute w-1/2 h-1/2 ${p.containerClasses}`}>
                    <div className="bg-white p-1.5 md:p-2.5 rounded-lg md:rounded-xl w-fit mb-2 md:mb-5 shadow-sm border border-slate-100 flex items-center justify-center">
                      {React.cloneElement(p.icon as React.ReactElement<any>, { className: "w-3 h-3 md:w-4 md:h-4 text-indigo-500" })}
                    </div>
                    <h3 className="text-slate-900 font-bold text-sm md:text-xl mb-1 md:mb-3 tracking-tight whitespace-nowrap">{p.name}</h3>
                    <p className="text-slate-500 text-[8px] sm:text-[10px] md:text-xs leading-tight md:leading-relaxed max-w-[130px] md:max-w-[180px] font-normal">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Center intersection detail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5 bg-white border border-slate-200 rotate-45 z-40"></div>
          </div>
        </div>

        {/* Streamlined Convergence with Flow Animation */}
        <div className="flex flex-col items-center">
          {/* Pulsing Start Point */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping"></div>
            <div className="w-2.5 h-2.5 bg-indigo-100 border border-indigo-300 rounded-full relative z-10"></div>
          </div>

          <div className="w-px h-12 md:h-16 relative overflow-hidden">
            <svg className="h-full w-px" viewBox="0 0 1 100" fill="none" preserveAspectRatio="none">
              <path 
                d="M0.5 0 L 0.5 100" 
                stroke="#6366f1" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                className="animate-flow opacity-30" 
              />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-3 md:gap-4 w-full max-w-[360px] pt-2">
            {/* Outcomes */}
            <div className="w-full px-5 md:px-6 py-4 md:py-5 bg-white rounded-xl border border-slate-100 shadow-[0_4px_12px_rgba(15,23,42,0.02)] flex items-center gap-4 md:gap-5 group transition-colors hover:border-indigo-100">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
                <Calendar className="w-4 md:w-4.5 h-4 md:h-4.5" />
              </div>
              <span className="text-sm md:text-base font-bold text-slate-700">RDV qualifiés</span>
            </div>

            <div className="w-full px-5 md:px-6 py-4 md:py-5 bg-white rounded-xl border border-slate-100 shadow-[0_4px_12px_rgba(15,23,42,0.02)] flex items-center gap-4 md:gap-5 group transition-colors hover:border-indigo-100">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                <Users className="w-4 md:w-4.5 h-4 md:h-4.5" />
              </div>
              <span className="text-sm md:text-base font-bold text-slate-700">Processus interne Sales</span>
            </div>

            <div className="h-8 md:h-10 w-px relative mt-1">
               <div className="absolute inset-0 w-px bg-slate-100"></div>
               <div className="absolute inset-0 w-px bg-indigo-500 animate-flow opacity-20" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #6366f1, transparent)', backgroundSize: '1px 10px' }}></div>
            </div>

            <div className="w-full px-6 md:px-8 py-5 md:py-6 bg-slate-900 rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center gap-4 md:gap-5 transition-all hover:bg-black hover:-translate-y-0.5 active:scale-[0.98]">
              <div className="p-1.5 md:p-2 bg-emerald-500/10 rounded-full">
                <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
              </div>
              <span className="font-bold text-white text-xs md:text-sm tracking-[0.1em] md:tracking-[0.15em] uppercase">De la conversation au deal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABXPillars;