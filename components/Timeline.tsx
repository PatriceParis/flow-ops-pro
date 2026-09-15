
import React from 'react';

// Custom Isometric 3D Icons with improved readability and contrast
const FoundationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 filter drop-shadow-md">
    <g transform="translate(32, 34)">
      {/* Blueprint Grid Base */}
      <path d="M0 -16 L24 -4 L0 8 L-24 -4 Z" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2 1" />
      {/* Central Foundation Block (Simplified) */}
      <g transform="translate(0, -4)">
        <path d="M-10 0 L0 5 L10 0 L0 -5 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
        <path d="M-10 0 L-10 4 L0 9 L0 5 Z" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1" />
        <path d="M0 5 L0 9 L10 4 L10 0 Z" fill="#2563eb" stroke="#3b82f6" strokeWidth="1" />
      </g>
    </g>
  </svg>
);

const ConstructionIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 filter drop-shadow-md">
    <g transform="translate(32, 34)">
      {/* Base Plane */}
      <path d="M0 -14 L22 -3 L0 8 L-22 -3 Z" fill="#f5f3ff" opacity="0.5" />
      
      {/* Rising Building 1 */}
      <g transform="translate(-8, -6)">
        <path d="M0 0 L8 4 L8 14 L0 10 Z" fill="#a78bfa" /> {/* Left */}
        <path d="M8 4 L16 0 L16 10 L8 14 Z" fill="#7c3aed" /> {/* Right */}
        <path d="M0 0 L8 -4 L16 0 L8 4 Z" fill="#ddd6fe" /> {/* Top */}
      </g>
      
      {/* Rising Building 2 (Small) */}
      <g transform="translate(4, 0)">
        <path d="M0 0 L5 2.5 L5 6 L0 3.5 Z" fill="#c4b5fd" />
        <path d="M5 2.5 L10 0 L10 3.5 L5 6 Z" fill="#8b5cf6" />
        <path d="M0 0 L5 -2.5 L10 0 L5 2.5 Z" fill="#ede9fe" />
      </g>
    </g>
  </svg>
);

const FullCityIcon = () => (
  <svg viewBox="0 0 64 64" className="w-14 h-14 filter drop-shadow-md">
    <g transform="translate(32, 34)">
      {/* Tall Main Building */}
      <g transform="translate(-4, -14)">
        <path d="M0 0 L8 4 L8 24 L0 20 Z" fill="#10b981" /> {/* Left */}
        <path d="M8 4 L16 0 L16 20 L8 24 Z" fill="#059669" /> {/* Right */}
        <path d="M0 0 L8 -4 L16 0 L8 4 Z" fill="#d1fae5" /> {/* Top */}
        {/* Simplified Windows */}
        <path d="M3 5 L5 6 M3 10 L5 11 M3 15 L5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </g>
      
      {/* Side Building Left */}
      <g transform="translate(-14, -2)">
        <path d="M0 0 L6 3 L6 10 L0 7 Z" fill="#34d399" />
        <path d="M6 3 L12 0 L12 7 L6 10 Z" fill="#047857" />
        <path d="M0 0 L6 -3 L12 0 L6 3 Z" fill="#a7f3d0" />
      </g>
      
      {/* Side Building Right */}
      <g transform="translate(8, 2)">
        <path d="M0 0 L5 2.5 L5 7 L0 4.5 Z" fill="#10b981" />
        <path d="M5 2.5 L10 0 L10 4.5 L5 7 Z" fill="#065f46" />
        <path d="M0 0 L5 -2.5 L10 0 L5 2.5 Z" fill="#ecfdf5" />
      </g>
    </g>
  </svg>
);

const Timeline: React.FC = () => {
  const steps = [
    {
      title: "Construction & Fondations",
      desc: "On arrête de deviner. On structure le marché adressable en tiering (TAM), on nettoie le CRM, on définit les cibles et audiences précises et on configure la stack technique.",
      tags: ["Setup technique", "Sourcing"],
      borderColor: "border-blue-500",
      icon: <FoundationIcon />
    },
    {
      title: "Exécution & Itérations",
      desc: "Lancement simultanée Paid, outreach & nurturing. Collecte de la données et itérations.",
      tags: ["Outbound", "Publicité payante", "Signaux"],
      borderColor: "border-purple-500",
      icon: <ConstructionIcon />
    },
    {
      title: "Scale & Optimisations",
      desc: "On double la mise sur ce qui fonctionne. On coupe ce qui ne marche pas. On aligne les équipes Sales pour qu'elles traitent les leads entrants de manière optimale.",
      tags: ["Pipeline Review", "Playbook Final"],
      borderColor: "border-emerald-500",
      icon: <FullCityIcon />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900">Une approche méthodologique et structurée</h2>
          <p className="text-slate-500 mt-2">Une roadmap claire de l'identification des comptes à la génération de conversions</p>
        </div>
        
        <div className="relative border-l-2 border-slate-200 ml-8 md:ml-16 space-y-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-12 md:pl-24 group">
              {/* Enhanced Larger 3D Icon Marker */}
              <div className={`
                absolute -left-[41px] -top-4 
                w-20 h-20 rounded-[2rem] bg-white 
                border border-slate-100 shadow-xl shadow-slate-200/50 
                flex items-center justify-center 
                group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500
                z-10 overflow-hidden
              `}>
                <div className="relative z-10">
                  {step.icon}
                </div>
                {/* Subtle internal gradient based on step color */}
                <div className={`absolute inset-0 opacity-[0.03] bg-current ${step.borderColor.replace('border-', 'bg-')}`}></div>
              </div>
              
              <div className="pt-2">
                <h4 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-slate-800">{step.title}</h4>
                <p className="text-slate-500 mt-3 leading-relaxed font-medium">{step.desc}</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {step.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-white border border-slate-200 text-[11px] rounded-lg text-slate-500 font-bold uppercase tracking-wider shadow-sm transition-all group-hover:border-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
