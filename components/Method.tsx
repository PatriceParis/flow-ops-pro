import React from 'react';
import { X, Check, Radar, ThumbsUp, MessageSquare } from 'lucide-react';

const Method: React.FC = () => {
  return (
    <section id="methode" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-base md:text-lg uppercase mb-3 inline-block max-w-4xl leading-relaxed">
            Ne chassez plus aveuglément des leads. Orchestrez les interactions avec vos comptes clés et engagez les.
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
              Le volume ne fonctionne plus. <br /><span className="text-blue-600">Le contexte est roi.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Les limites du modèle traditionnel</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Dilution du message marketing, travail en silos entre Marketing et Sales, et concentration sur des métriques de vanité (clics, vues) plutôt que sur le pipeline réel.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">La vision Account Based Experience (ABX)</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Une infrastructure personnalisée et scalable. Identifier les comptes prioritaires avant les Sales, générer des signaux d'intérêt exploitables basés sur des données réelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-white p-1 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[1.3rem] h-full relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100 group-hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <Radar className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700">1. Sourcing, enrichissement et détection de signaux</span>
                  </div>
                </div>
                
                <div className="w-0.5 h-6 bg-slate-200 mx-auto group-hover:bg-blue-200 transition-colors"></div>
                
                <div className="flex items-center justify-between p-5 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100 group-hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-50 rounded-lg text-blue-600">
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700">2. Conversations LinkedIn et email</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-600 px-2 py-1 rounded-md">AUTO</span>
                </div>
                
                <div className="w-0.5 h-6 bg-slate-200 mx-auto group-hover:bg-green-200 transition-colors"></div>
                
                <div className="flex items-center justify-between p-5 bg-slate-900 text-white rounded-xl shadow-lg shadow-slate-900/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/10 rounded-lg text-green-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">3. Activation Sales</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-300 px-2 py-1 rounded-md">Conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;