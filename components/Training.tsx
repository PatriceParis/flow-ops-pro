
import React from 'react';
import { GraduationCap, ArrowRight, Zap, Database, Mail } from 'lucide-react';

interface TrainingProps {
  onOpenEnroll: () => void;
}

const Training: React.FC<TrainingProps> = ({ onOpenEnroll }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden flex flex-col lg:flex-row items-stretch">
          
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              < GraduationCap className="w-4 h-4" />
              Formation Exclusive
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Besoin de monter en compétence <br />
              <span className="text-indigo-600">en interne ?</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Idéal pour un Responsable Marketing ou un Growth Manager, rejoignez une formation 100% actionnable intégrant 
              <strong> Clay</strong> pour comprendre les bases d'un système de prospection automatisé, les outils clé et la mise en œuvre pas à pas de 2 "quick wins" concrets - 
              <strong> 5h de vidéos</strong> - <strong>10 modules</strong> - Accès immédiat en ligne.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-sm font-medium">
                <Database className="w-4 h-4 text-blue-500" /> Focus Clay
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-sm font-medium">
                <Zap className="w-4 h-4 text-orange-500" /> Automation GTM
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-sm font-medium">
                <Mail className="w-4 h-4 text-purple-500" /> Smart Outreach
              </div>
            </div>
            
            <div className="flex flex-col gap-3 items-start">
              <button 
                onClick={onOpenEnroll}
                className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl w-fit"
              >
                Je souhaite être informé du lancement
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] ml-1">
                OBTENEZ UN COUPON EXCLUSIF
              </span>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-slate-900 relative p-12 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-20 footer-pattern"></div>
             <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center transform -rotate-3 transition-transform duration-500">
                    <span className="text-blue-400 text-3xl font-bold mb-1">01</span>
                    <span className="text-white text-xs font-medium uppercase tracking-widest">Sourcing Data</span>
                </div>
                <div className="aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center transform translate-y-8 rotate-3 transition-transform duration-500">
                    <span className="text-indigo-400 text-3xl font-bold mb-1">02</span>
                    <span className="text-white text-xs font-medium uppercase tracking-widest">Enrichissement</span>
                </div>
                <div className="aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center transform -translate-y-4 rotate-2 transition-transform duration-500">
                    <span className="text-purple-400 text-3xl font-bold mb-1">03</span>
                    <span className="text-white text-xs font-medium uppercase tracking-widest">Engagement</span>
                </div>
                <div className="aspect-square bg-indigo-600/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl flex flex-col items-center justify-center p-6 text-center transform translate-y-4 -rotate-6 transition-transform duration-500">
                    <span className="text-white text-3xl font-bold mb-1">POC</span>
                    <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Opérationnel</span>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Training;
