
import React from 'react';
import { Database, BrainCircuit, Workflow, Eye } from 'lucide-react';

const Stack: React.FC = () => {
  const tools = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Ciblage",
      tag: "Pharow, Sales Nav, Scraping sur-mesure",
      desc: "Construction de listes de comptes ultra-ciblées. On ne vise plus tout le marché, mais les bons comptes.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-200"
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Orchestration",
      tag: "Clay, Claude Code",
      desc: "Orchestrateur du système. Enrichissement, scoring et détection de signaux avec +100 intégrations.",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
      shadow: "shadow-indigo-200"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automatisation",
      tag: "Zapier, lemlist, Clay",
      desc: "Connexion instantanée entre les outils et exécution des séquences d'engagement multicanal.",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      shadow: "shadow-orange-200"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Custom Signals",
      tag: "Snitcher, BuiltWith...",
      desc: "Déanonymisation du trafic, identification de technologies Web etc.",
      color: "green",
      gradient: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-200"
    }
  ];

  return (
    <section id="stack" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -left-40 top-40 w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-indigo-50 rounded-full blur-[120px] opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">Des outils innovants et automatisés</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">La Stack Technique ABX</h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Les meilleurs outils du marché, orchestrés pour transformer vos données en revenus prédictibles.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 text-center flex flex-col items-center hover:-translate-y-2"
            >
              {/* Enhanced Icon Container */}
              <div className="relative mb-8">
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`}></div>
                
                <div className={`
                  relative w-20 h-20 rounded-2xl flex items-center justify-center 
                  bg-slate-50 text-slate-400
                  group-hover:bg-gradient-to-br group-hover:${tool.gradient} group-hover:text-white 
                  group-hover:scale-110
                  transition-all duration-500 ease-out shadow-lg ${tool.shadow}
                `}>
                  {tool.icon}
                  
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                </div>
              </div>

              <h3 className="font-bold text-slate-900 mb-3 text-xl group-hover:text-blue-600 transition-colors">
                {tool.title}
              </h3>
              
              <div className="min-h-[2.75rem] flex items-center mb-5">
                <div className="px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-bold tracking-wide uppercase text-slate-400 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                  {tool.tag}
                </div>
              </div>
              
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
