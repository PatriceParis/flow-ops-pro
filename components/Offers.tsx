
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface OffersProps {
  onOpenZcal: () => void;
}

const Offers: React.FC<OffersProps> = ({ onOpenZcal }) => {
  return (
    <section id="offres" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mise en place</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Card */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] animate-pulse z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[80px] z-0"></div>
            
            <div className="relative z-10 flex-grow">
              <div className="mb-10">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Nous fonctionnons sur la base d'un forfait mensuel. Au début de notre collaboration, nous demandons un engagement sur les <span className="text-slate-900 font-bold">trois premiers mois</span>. C'est le délai nécessaire pour structurer les fondations, lancer les campagnes et valider les premiers signaux. Après cette période, nous pouvons continuer pour une période totale de 6 mois ou transférer en interne les compétences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <ul className="space-y-4">
                  {["Cartographie complète du TAM", "Setup de la stack technique", "Détection de signaux d'intention"].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {["Documentation complète", "Pilotage campagnes Ads & Outreach", "Reporting hebdo & itérations"].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 font-semibold">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <button 
                  onClick={onOpenZcal}
                  className="btn-glow w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  Démarrer le partenariat
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Option */}
          <div className="flex flex-col h-full">
            <div className="bg-slate-100/50 rounded-[2rem] p-8 border border-slate-200 flex flex-col h-full">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Missions Ponctuelles</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    Audit de stack technique, publicités payantes seules, stratégie GTM ou sourcing de données. Nous répondons à la carte à vos besoins de missions.
                  </p>
                </div>
                
                <button 
                  onClick={onOpenZcal}
                  className="text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
