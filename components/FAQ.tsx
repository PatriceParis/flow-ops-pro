
import React from 'react';

const FAQ: React.FC = () => {
  const questions = [
    {
      q: "Quelle est la différence entre ABX et ABM ?",
      a: "L’ABM pousse des campagnes personnalisées sur une liste de comptes, souvent sans coordination avec les sales.\n\nL’ABX observe les comportements réels, capte des signaux, puis active le bon canal (marketing ou sales) au bon moment.\n\n→ Plus dynamique, orchestré, itératif, et aligné marketing + sales."
    },
    {
      q: "Que déploie-t-on concrètement en ABX ?",
      a: "Un système complet et coordonné autour de 4 piliers :\n\n• Data : ciblage, enrichissement, signaux\n• Contenus : lead magnets, landing pages, vidéos\n• Paid : campagnes LinkedIn/Google, retargeting\n• Outreach : séquences multicanal pilotées par signaux\n\n→ Le tout orchestré avec Clay, Lemlist, Zapier & co."
    },
    {
      q: "A quel type de sociétés s'adresse ces offres ?",
      a: "Ces offres sont conçues pour des sociétés B2B avec un panier moyen > 2000€ et une offre déjà validée (Product Market Fit). Si vous cherchez encore votre marché ou venez de lever des fonds, l'approche est ajustée. Nous proposons des offres spécifiques.\n\nNous travaillons aussi bien avec des Head of Sales que des CMO."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Questions Fréquentes</h2>
        
        <div className="space-y-6">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
              <h4 className="font-bold text-slate-900 text-lg">{item.q}</h4>
              <p className="text-slate-500 mt-3 leading-relaxed whitespace-pre-line">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
