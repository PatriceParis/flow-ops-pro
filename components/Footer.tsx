
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20"></div>
      <div className="absolute inset-0 footer-pattern opacity-[0.05]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <img 
                src="/flow-ops-logo.png" 
                alt="Flow Ops" 
                className="h-9 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Transformez votre prospection B2B en infrastructure automatisée et générez des conversations avec vos prospects avec le bon message au bon moment avec en vous appuyant sur la méthodologie ABX. Basé en France, opérant globalement.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/patrice-tord/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:patrice@flow-ops.pro" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-xs text-center text-slate-600 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <span>© 2026 Flow Ops. Tous droits réservés.</span>
          <div className="flex gap-6">
            <button 
              onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }}
              className="hover:text-slate-400 transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              Politique de Confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
