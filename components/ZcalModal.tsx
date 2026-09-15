
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ReactDOM from 'react-dom';

interface ZcalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZcalModal: React.FC<ZcalModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    let scriptElement: HTMLScriptElement | null = null;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);

      scriptElement = document.createElement('script');
      scriptElement.src = "https://static.zcal.co/embed/v1/embed.js";
      scriptElement.async = true;
      scriptElement.type = "text/javascript";
      document.body.appendChild(scriptElement);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[90vh] animate-modal border border-white/20">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center">
            <img src="/flow-ops-logo.png" alt="Flow Ops" className="h-7 w-auto" />
            <div className="mx-4 w-px h-6 bg-slate-100 hidden sm:block"></div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content - Zcal Widget */}
        <div className="flex-grow overflow-y-auto bg-slate-50 relative">
          <div className="zcal-inline-widget min-h-[600px] w-full h-full">
            <a href="https://zcal.co/i/itRcoEqx">Echange 30 minutes - ABX - Growth Marketing - Schedule a meeting</a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ZcalModal;
