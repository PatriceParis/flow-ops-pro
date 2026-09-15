
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ReactDOM from 'react-dom';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[85vh] animate-modal border border-slate-100">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <img src="/flow-ops-logo.png" alt="Flow Ops" className="h-6 w-auto" />
            <h2 className="text-lg font-bold text-slate-900">Politique de confidentialité</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8 sm:p-12 prose prose-slate max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <p className="text-sm">
              Cette politique de confidentialité décrit la manière dont <strong>Flow Ops</strong> (le « Site »), exploité par un entrepreneur individuel basé en France, collecte et utilise les données personnelles de ses visiteurs et clients. Elle a pour but de répondre aux obligations légales prévues par le Règlement général sur la protection des données (RGPD) et la loi Informatique et Libertés. La politique est applicable à toutes les pages et services accessibles via <strong>flow-ops.pro</strong>
            </p>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Responsable du traitement</h3>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-bold text-slate-900 w-1/3">Nom et statut</td>
                      <td className="py-2">Patrice Tord</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-bold text-slate-900">Adresse postale</td>
                      <td className="py-2">59, rue de Ponthieu, Bureau 326, 75008 Paris</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-bold text-slate-900">Coordonnées</td>
                      <td className="py-2">contact@flow-ops.pro</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-bold text-slate-900">Numéro SIRET</td>
                      <td className="py-2">81927317800023</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-slate-900 align-top">Délégué à la protection des données (DPO)</td>
                      <td className="py-2">Le caractère de l’entreprise ne nécessite pas la désignation d’un DPO. Pour toute question liée à la protection des données, vous pouvez contacter le responsable du traitement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs italic">Conformément aux obligations légales, l’identité de l’hébergeur du Site est indiquée dans les mentions légales. Le Site est hébergé sur Google Cloud Platform (voir § 6 ci-dessous).</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Données collectées et finalités</h3>
              <h4 className="font-bold text-slate-800 mb-2">2.1 Données fournies volontairement par les utilisateurs</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Formulaire de contact / demande d’information :</strong> les champs collectés comprennent le nom, le prénom, la société, l’adresse e-mail, le numéro de téléphone et le contenu du message. Ces informations sont nécessaires pour répondre à votre demande, établir des devis ou préparer des formations.</li>
                <li><strong>Prise de rendez-vous via zCal :</strong> lors de la réservation d’un créneau, zCal collecte votre nom, votre adresse e-mail et le créneau sélectionné afin d’organiser l’appel ou la visio-conférence. Cette collecte est gérée par zCal (voir § 6 ci-dessous).</li>
                <li><strong>Inscription à une formation ou demande d’alertes :</strong> lorsque vous vous inscrivez pour être informé du lancement d’une formation, nous collectons votre adresse e-mail et vos éventuelles préférences pour vous envoyer des informations pertinentes.</li>
              </ul>

              <h4 className="font-bold text-slate-800 mt-6 mb-2">2.2 Données collectées automatiquement</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Données d’usage et d’appareil :</strong> lors de la navigation, le Site enregistre automatiquement certaines informations (adresses IP, identifiants d’appareil, type de navigateur, pages visitées, temps de connexion) via des outils d’analyse comme Google Analytics. Ces données ne permettent pas de vous identifier directement mais servent à des fins statistiques et d’amélioration du Site.</li>
                <li><strong>Cookies et traceurs :</strong> des cookies de mesure d’audience et de fonctionnement sont déposés sur votre terminal pour faciliter la navigation et mesurer la fréquentation (cf. § 7). Certains cookies nécessitent votre consentement préalable.</li>
              </ul>

              <h4 className="font-bold text-slate-800 mt-6 mb-2">2.3 Finalités et bases légales</h4>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-2 font-bold text-slate-900">Finalité du traitement</th>
                      <th className="pb-2 font-bold text-slate-900">Données concernées</th>
                      <th className="pb-2 font-bold text-slate-900">Base légale (art. 6 RGPD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3">Répondre à une demande envoyée via le formulaire et assurer le suivi commercial</td>
                      <td className="py-3">Nom, prénom, société, e-mail, téléphone, message</td>
                      <td className="py-3">Exécution de mesures précontractuelles (art. 6 §1 b RGPD)</td>
                    </tr>
                    <tr>
                      <td className="py-3">Gérer les rendez-vous et organiser des sessions d’échange via zCal</td>
                      <td className="py-3">Nom, e-mail, date et horaire de rendez-vous</td>
                      <td className="py-3">Exécution de mesures précontractuelles (art. 6 §1 b RGPD)</td>
                    </tr>
                    <tr>
                      <td className="py-3">Informer des formations et envoyer des communications (inscription à une alerte)</td>
                      <td className="py-3">Adresse e-mail, préférence de formation</td>
                      <td className="py-3">Consentement (art. 6 §1 a RGPD) : vous pouvez retirer votre consentement à tout moment</td>
                    </tr>
                    <tr>
                      <td className="py-3">Mesurer l’audience, analyser la performance du Site et optimiser l’expérience utilisateur</td>
                      <td className="py-3">Adresse IP, pages visitées, type d’appareil, cookies</td>
                      <td className="py-3">Intérêt légitime (art. 6 §1 f RGPD) consistant à développer et améliorer les services ; votre consentement est requis pour les cookies nécessitant un accord</td>
                    </tr>
                    <tr>
                      <td className="py-3">Respecter les obligations légales et comptables (facturation, TVA)</td>
                      <td className="py-3">Nom, coordonnées, données de facturation</td>
                      <td className="py-3">Obligation légale (art. 6 §1 c RGPD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Durée de conservation</h3>
              <p className="text-sm mb-3">Les données sont conservées pendant une durée limitée, proportionnelle à la finalité du traitement :</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Données de contact et de rendez-vous :</strong> conservées trois (3) ans à compter du dernier échange avec vous. Au-delà, elles sont supprimées ou anonymisées.</li>
                <li><strong>Données de facturation :</strong> conservées dix (10) ans pour respecter les obligations fiscales et comptables.</li>
                <li><strong>Données relatives aux cookies de mesure d’audience :</strong> la durée de conservation maximale des cookies d’Analytics est de 14 mois, conformément aux recommandations de la CNIL.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Destinataires des données</h3>
              <p className="text-sm mb-4">Les informations collectées sont exclusivement utilisées par le responsable du traitement et par ses prestataires strictement habilités :</p>
              <ol className="list-decimal pl-5 space-y-4 text-sm">
                <li><strong>Google Cloud Platform – hébergement et infrastructure :</strong> Google agit en tant que sous-traitant et traite vos données sur des serveurs sécurisés. Le RGPD impose des obligations spécifiques aux responsables de traitement et aux sous-traitants : les clients sont considérés comme contrôleurs de données tandis que Google est un sous-traitant. Les données restent sous le contrôle du client.</li>
                <li><strong>Firebase (Google) – base de données pour la gestion des formulaires :</strong> en utilisant Firebase, Google agit comme un sous-traitant et traite les données personnelles au nom du client. En cas de transferts de données hors de l’Espace Économique Européen (EEE), Google applique des clauses contractuelles types approuvées par la Commission européenne.</li>
                <li><strong>zCal – outil de prise de rendez-vous :</strong> zCal reçoit les données que vous saisissez pour fixer un rendez-vous (nom, e-mail, horaire) et les utilise pour gérer le calendrier. Les traitements réalisés par zCal sont décrits dans sa propre politique de confidentialité ; zCal s’appuie notamment sur les principes de consentement et d’intérêt légitime pour l’utilisation de vos données.</li>
                <li><strong>Google Analytics ou un outil équivalent – mesure d’audience :</strong> cet outil dépose des cookies pour analyser la fréquentation. Vous pouvez accepter ou refuser ces traceurs via le bandeau de consentement.</li>
              </ol>
              <p className="mt-4 text-sm">Les données ne sont ni vendues ni louées à des tiers. Elles peuvent toutefois être transmises aux autorités compétentes en cas d’obligation légale ou pour l’exercice de droits en justice.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. Transferts internationaux</h3>
              <p className="text-sm">Certaines données peuvent être traitées en dehors de l’EEE du fait de l’utilisation de services fournis par Google (Google Cloud, Firebase) ou zCal. Google précise qu’à la suite de l’invalidation du bouclier de protection des données UE–États-Unis, il s’appuie sur les clauses contractuelles types (SCC) validées par la Commission européenne pour encadrer les transferts de données. Ces clauses assurent un niveau de protection équivalent à celui garanti par l’UE. ZCal indique également se conformer aux obligations en matière de protection des données et s’appuie sur des bases légales telles que le consentement et l’intérêt légitime.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">6. Vos droits</h3>
              <p className="text-sm mb-3">Conformément à la législation sur la protection des données, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Droit d’accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
                <li><strong>Droit d’effacement (droit à l’oubli) :</strong> obtenir l’effacement de vos données lorsque cela est possible (hors obligations légales de conservation).</li>
                <li><strong>Droit d’opposition :</strong> vous pouvez vous opposer à tout moment au traitement de vos données réalisé à des fins de prospection ou fondé sur l’intérêt légitime.</li>
                <li><strong>Droit à la limitation du traitement :</strong> demander la suspension temporaire du traitement de vos données.</li>
                <li><strong>Droit à la portabilité :</strong> recevoir les données que vous avez fournies dans un format structuré, couramment utilisé et lisible par machine, et les transmettre à un autre responsable du traitement.</li>
                <li><strong>Droit de retirer votre consentement :</strong> pour les traitements fondés sur votre consentement (inscription à une formation, cookies), vous pouvez le retirer à tout moment.</li>
              </ul>
              <p className="mt-4 text-sm">Pour exercer ces droits, adressez votre demande à <strong>contact@flow-ops.pro</strong> en justifiant de votre identité. Vous avez également la possibilité d’introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL) si vous estimez que vos droits ne sont pas respectés.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">7. Cookies et traceurs</h3>
              <p className="text-sm mb-3">Un bandeau d’information s’affiche lors de votre première visite pour recueillir votre consentement à l’enregistrement de certains cookies. Plusieurs catégories de cookies peuvent être utilisées :</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Cookies techniques et nécessaires :</strong> indispensables au bon fonctionnement du Site (navigation sécurisée, choix de langue). Ils ne nécessitent pas de consentement.</li>
                <li><strong>Cookies de mesure d’audience (Analytics) :</strong> utilisés pour analyser la fréquentation et améliorer le Site. Ces traceurs ne sont déposés qu’avec votre accord. La CNIL recommande d’informer clairement l’internaute des finalités de ces cookies et d’obtenir un consentement spécifique.</li>
                <li><strong>Cookies de tiers :</strong> lorsque des contenus externes (par exemple des vidéos ou boutons de partage) sont intégrés, ces services tiers peuvent déposer des traceurs soumis à votre consentement.</li>
              </ul>
              <p className="mt-4 text-sm">Vous pouvez paramétrer les cookies à tout moment via le bandeau ou votre navigateur. Le refus des cookies de mesure d’audience n’a pas d’impact sur la navigation.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4">8. Sécurité</h3>
              <p className="text-sm">Le Site utilise le protocole HTTPS et des mesures techniques (chiffrement, sauvegardes régulières) pour assurer la confidentialité et l’intégrité des données. Les accès sont protégés par des mécanismes d’authentification. Les sous-traitants (Google Cloud, Firebase, zCal) certifient respecter des normes internationales de sécurité (notamment ISO 27001, 27017 et 27018 pour Google Firebase).</p>
            </section>

            <section className="pb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">9. Mise à jour de la politique</h3>
              <p className="text-sm">La présente politique est susceptible d’être modifiée pour refléter les évolutions légales ou technologiques. La version en vigueur est celle publiée sur le Site à la date de consultation. Les utilisateurs seront informés des changements significatifs (par exemple via un bandeau ou une notification). <strong>Dernière mise à jour : 19 janvier 2026.</strong></p>
            </section>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PrivacyModal;
