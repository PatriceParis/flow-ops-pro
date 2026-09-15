
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from '@google/genai';

const LogoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6">
    <defs>
      <linearGradient id="aiLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
    </defs>
    <path 
      d="M20 20 C40 10, 80 15, 85 45 C85 60, 60 55, 40 55 L40 55 C35 55, 30 55, 25 55 M20 40 C35 40, 70 40, 80 40 M20 80 C20 60, 30 20, 40 20" 
      stroke="url(#aiLogoGradient)" 
      strokeWidth="12" 
      strokeLinecap="round" 
      fill="none" 
    />
  </svg>
);

const LogoTrigger = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6 relative z-10">
    <defs>
      <linearGradient id="triggerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
    </defs>
    <path 
      d="M20 20 C40 10, 80 15, 85 45 C85 60, 60 55, 40 55 L40 55 C35 55, 30 55, 25 55 M20 40 C35 40, 70 40, 80 40 M20 80 C20 60, 30 20, 40 20" 
      stroke="url(#triggerLogoGradient)" 
      strokeWidth="12" 
      strokeLinecap="round" 
      fill="none" 
    />
  </svg>
);

const GTMAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([
    { role: 'ai', content: 'Bonjour ! Je suis l\'assistant Flow Ops. Comment puis-je vous aider à optimiser votre pipeline et vos flux GTM aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialisation persistante du chat pour garder le contexte
  const chatInstance = useMemo(() => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Tu es l'assistant IA de "Flow Ops", un service freelance de Head of Growth spécialisé en ABX (Account Based Experience) et GTM Engineering. 
        Tes réponses doivent être professionnelles, expertes en marketing B2B, et basées sur ces services :
        - Starter ABX (3 mois) : TAM, Prospection Linkedin, Sales Activation.
        - The Revenue Engine (6 mois) : Enrichissement Clay, Deep Data, Stratégie de contenu, Paid.
        - Sur mesure : Audit stack, coaching, sourcing.
        Réponds en français de manière concise (max 3-4 phrases par réponse) et utilise parfois des métaphores liées au "flux" (flow) ou aux "opérations" (ops) pour rester dans le branding.`,
      },
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatInstance.sendMessage({ message: userMsg });
      const aiText = result.text || "Désolé, je n'ai pas pu traiter votre demande.";
      setMessages(prev => [...prev, { role: 'ai', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "Une erreur est survenue lors de la communication avec l'IA." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <LogoTrigger />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px] animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <LogoIcon />
              </div>
              <div>
                <h4 className="font-bold text-sm">Flow Ops Assistant</h4>
                <p className="text-[10px] text-slate-400">Expert ABX & GTM</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez une question..."
                className="flex-grow px-3 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GTMAssistant;
