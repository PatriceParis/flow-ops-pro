import React, { useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Linkedin, ExternalLink } from 'lucide-react';
import { setConsent, useConsent } from '../consent';
import { useContent } from '../i18n';

interface HeroProps {
  onOpenZcal: () => void;
}

const TESTIMONIAL_URNS = [
  'urn:li:share:7479934699021369347',
  'urn:li:activity:7498774828095574016',
  'urn:li:share:7488171336314486784',
];

const Hero: React.FC<HeroProps> = ({ onOpenZcal }) => {
  const consent = useConsent();
  const c = useContent();

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-800 text-base font-normal mb-8 hover:border-blue-200 hover:shadow-md transition-colors cursor-default">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          {c.hero.badge}
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
          {c.hero.titleLine1}<br />
          <span className="text-blue-700">{c.hero.titleAccent}</span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
          {c.hero.subtitleBefore}
          <span className="text-slate-900 font-medium">{c.hero.subtitleHighlight}</span>
          {c.hero.subtitleAfter}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenZcal}
            className="w-full sm:w-auto px-7 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-xl flex items-center justify-center gap-2"
          >
            {c.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#exemple"
            className="w-full sm:w-auto px-7 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors text-center"
          >
            {c.hero.ctaSecondary}
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">{c.hero.ctaNote}</p>

        {/* Interactive "Electric Charge" Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <a 
            href="#methode" 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group flex flex-col items-center gap-3 transition-colors duration-500"
            aria-label={c.hero.scrollAria}
          >
            <div className="relative w-10 h-16 border-2 border-slate-200 rounded-full flex flex-col items-center justify-center gap-0.5 transition-colors duration-500 group-hover:border-slate-300">
              {/* Electric charge arrows */}
              <ChevronDown className="w-5 h-5 text-slate-300 -mb-2 transition-colors duration-300 delay-0 group-hover:text-slate-500 group-hover:translate-y-1" />
              <ChevronDown className="w-5 h-5 text-slate-300 -mb-2 transition-colors duration-300 delay-150 group-hover:text-slate-500 group-hover:translate-y-1" />
              <ChevronDown className="w-5 h-5 text-slate-200 transition-colors duration-300 delay-300 group-hover:text-slate-500 group-hover:translate-y-1" />
              
              {/* Hover Glow Pulse */}
            </div>
          </a>
        </div>
        
        {/* Harmonized Social Proof Block - STATIC VERSION */}
        <div className="mt-20 max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200/50 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 shadow-sm">
            
            <div className="flex flex-col items-center md:items-start shrink-0">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight flex items-baseline gap-2">
                <span className="text-slate-400 font-medium text-2xl md:text-3xl">{c.hero.proofAlready}</span>
                <span className="text-slate-700">{c.hero.proofCount}</span>
                <span className="text-slate-400 font-medium text-2xl md:text-3xl">{c.hero.proofSystems}</span>
              </div>
              <span className="text-xl md:text-2xl font-medium text-slate-400 -mt-1">{c.hero.proofDeployed}</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-200/60"></div>

            <div className="flex flex-col items-center md:items-start flex-1">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {c.hero.sectors.map((sector) => (
                  <span key={sector} className="text-xs font-semibold text-slate-400 bg-white/50 px-2.5 py-1 rounded-lg border border-slate-100">
                    {sector}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Témoignages clients — posts LinkedIn */}
        <div className="mt-14 max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 mb-6">
            {c.hero.testimonialsLabel}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIAL_URNS.map((urn, idx) =>
              consent === 'granted' ? (
                <iframe
                  key={urn}
                  src={`https://www.linkedin.com/embed/feed/update/${urn}`}
                  title={`${c.hero.blockedTitle} ${idx + 1}`}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-[560px] rounded-2xl border border-slate-200 bg-white"
                />
              ) : (
                <div
                  key={urn}
                  className="w-full h-[560px] rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 mb-5">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">{c.hero.blockedTitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
                    {c.hero.blockedBody}
                  </p>
                  <button
                    onClick={() => setConsent('granted')}
                    className="mt-6 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    {c.hero.blockedAllow}
                  </button>
                  <a
                    href={`https://www.linkedin.com/feed/update/${urn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-semibold text-slate-400 hover:text-slate-600 flex items-center gap-1.5 transition-colors"
                  >
                    {c.hero.blockedView} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;