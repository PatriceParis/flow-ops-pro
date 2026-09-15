import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenZcal: () => void;
}

const TESTIMONIALS = [
  { urn: 'urn:li:share:7479934699021369347', title: 'Témoignage client — mission ABX Valala' },
  { urn: 'urn:li:activity:7498774828095574016', title: 'Témoignage client — stack acquisition Jamespot' },
  { urn: 'urn:li:share:7488171336314486784', title: 'Témoignage client — CyberVadis' },
];

const Hero: React.FC<HeroProps> = ({ onOpenZcal }) => {
  // Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to fix TypeScript namespace error in browser environment
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const performScroll = () => {
    const element = document.getElementById('methode');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => {
    // Start a timer for auto-scroll after 1 second of hover
    scrollTimerRef.current = setTimeout(() => {
      performScroll();
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    performScroll();
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] -z-10"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-800 text-base font-normal mb-8 hover:border-blue-200 hover:shadow-md transition-all cursor-default">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Engager les bons prospects au bon moment en 2026
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
          Transformez votre prospection B2B en<br />
          <span className="gradient-text">infrastructure automatisée.</span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
          L'Account Based Marketing (ABM) et la prospection de masse
sont limitées. On construit en 3 mois un <span className="text-slate-900 font-medium">système autonome et scalable</span> de génération d'opportunités B2B.
        </p>
        
        {/* Interactive "Electric Charge" Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <a 
            href="#methode" 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group flex flex-col items-center gap-3 transition-all duration-500"
            aria-label="Scroll down to explore the method"
          >
            <div className="relative w-10 h-16 border-2 border-slate-200 rounded-full flex flex-col items-center justify-center gap-0.5 transition-all duration-500 group-hover:border-indigo-400/30 group-hover:bg-indigo-50/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
              {/* Electric charge arrows */}
              <ChevronDown className="w-5 h-5 text-slate-300 -mb-2 transition-all duration-300 delay-0 group-hover:text-blue-400 group-hover:translate-y-1" />
              <ChevronDown className="w-5 h-5 text-slate-300 -mb-2 transition-all duration-300 delay-150 group-hover:text-indigo-500 group-hover:translate-y-1" />
              <ChevronDown className="w-5 h-5 text-slate-200 transition-all duration-300 delay-300 group-hover:text-purple-600 group-hover:translate-y-1" />
              
              {/* Hover Glow Pulse */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-transparent via-indigo-500/5 to-indigo-500/10 pointer-events-none"></div>
            </div>
          </a>
        </div>
        
        {/* Harmonized Social Proof Block - STATIC VERSION */}
        <div className="mt-20 max-w-4xl mx-auto px-4">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-200/50 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 shadow-sm">
            
            <div className="flex flex-col items-center md:items-start shrink-0">
              <div className="text-3xl md:text-4xl font-bold tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-medium text-2xl md:text-3xl">Déjà</span>
                <span className="text-slate-700">+7</span>
                <span className="text-slate-400 font-medium text-2xl md:text-3xl">systèmes</span>
              </div>
              <span className="text-xl md:text-2xl font-medium text-slate-400 -mt-1">déployés</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-200/60"></div>

            <div className="flex flex-col items-center md:items-start flex-1">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {["Cybersec", "SaaS B2B", "Industrie", "Deeptech"].map((sector) => (
                  <span key={sector} className="text-[10px] font-bold text-slate-400 bg-white/50 px-2.5 py-1 rounded-lg border border-slate-100 uppercase tracking-wider">
                    {sector}
                  </span>
                ))}
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-slate-400 italic max-w-sm text-center md:text-left font-medium">
                Missions confidentielles opérées en direct ou via des collectifs.
              </p>
            </div>

          </div>
        </div>

        {/* Témoignages clients — posts LinkedIn */}
        <div className="mt-14 max-w-6xl mx-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
            Ils en parlent
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <iframe
                key={t.urn}
                src={`https://www.linkedin.com/embed/feed/update/${t.urn}`}
                title={t.title}
                loading="lazy"
                allowFullScreen
                className="w-full h-[560px] rounded-2xl border border-slate-200 bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;