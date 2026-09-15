
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenZcal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenZcal }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/flow-ops-logo.png" 
                alt="Flow Ops" 
                className="h-8 w-auto block"
              />
              <div className="absolute -inset-2 bg-blue-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          
          <button 
            onClick={onOpenZcal}
            className="btn-glow px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl transition-all hover:bg-slate-800 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Discutons de vos enjeux
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
