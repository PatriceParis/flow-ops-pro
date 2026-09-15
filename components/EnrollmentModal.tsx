
import React, { useState, useEffect } from 'react';
import { X, Send, Loader2, CheckCircle, Linkedin, Building, User, AlertCircle, ExternalLink } from 'lucide-react';
import ReactDOM from 'react-dom';

const NOTIFICATION_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/945218/uwpeqb2/'; 

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    linkedinUrl: '',
    company: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const projectId = 'abx-website-ea3d7';
    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/enrollments?key=${process.env.API_KEY}`;
    
    const firestorePayload = {
      fields: {
        firstName: { stringValue: formData.firstName },
        lastName: { stringValue: formData.lastName },
        linkedinUrl: { stringValue: formData.linkedinUrl },
        company: { stringValue: formData.company },
        createdAt: { timestampValue: new Date().toISOString() }
      }
    };

    try {
      const firestoreRes = await fetch(firestoreUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(firestorePayload)
      });

      if (!firestoreRes.ok) {
        if (firestoreRes.status === 403) {
          throw new Error("ERREUR CRITIQUE : Vos règles de sécurité Firestore ont expiré. Allez dans Firebase Console > Firestore > Rules et autorisez 'create' sur la collection 'enrollments'.");
        }
        const errorJson = await firestoreRes.json().catch(() => ({}));
        const detailedError = errorJson.error ? 
          `${errorJson.error.status}: ${errorJson.error.message}` : 
          `Erreur HTTP ${firestoreRes.status}`;
        throw new Error(detailedError);
      }

      if (NOTIFICATION_WEBHOOK_URL) {
        fetch(NOTIFICATION_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: 'Training Enrollment',
            date: new Date().toLocaleString('fr-FR')
          })
        }).catch(err => console.warn('Notification Webhook bloquée ou échouée:', err));
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ firstName: '', lastName: '', linkedinUrl: '', company: '' });
      }, 3000);

    } catch (err: any) {
      console.error('Submission failed:', err);
      setErrorMessage(err.message || 'Une erreur est survenue lors de l\'envoi.');
      setStatus('error');
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-modal border border-slate-100">
        {status === 'success' ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inscription Validée !</h3>
            <p className="text-slate-500">Merci ! Votre demande a bien été enregistrée.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-6 border-b border-slate-50">
              <div className="flex items-center">
                <img src="/flow-ops-logo.png" alt="Flow Ops" className="h-6 w-auto" />
                <div className="mx-3 w-px h-4 bg-slate-200"></div>
                <h3 className="font-bold text-slate-600 text-[10px] leading-tight max-w-[220px]">
                  Soyez informé en avant première et obtenez un coupon de réduction
                </h3>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Prénom</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      required
                      disabled={status === 'loading'}
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
                      placeholder="Jean"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nom</label>
                  <input 
                    required
                    disabled={status === 'loading'}
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">URL Profil LinkedIn</label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    required
                    disabled={status === 'loading'}
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={e => setFormData({...formData, linkedinUrl: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Société</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    required
                    disabled={status === 'loading'}
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
                    placeholder="Nom de l'entreprise"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="btn-glow w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl mt-4 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Envoi
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 rounded-xl border border-red-100 flex flex-col gap-2 items-start animate-in fade-in slide-in-from-top-1">
                  <div className="flex gap-2 items-center text-red-600 font-bold text-[10px] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Erreur de configuration
                  </div>
                  <p className="text-[11px] text-red-500 leading-relaxed font-medium">
                    {errorMessage}
                  </p>
                  {errorMessage?.includes('Firestore') && (
                    <a 
                      href="https://console.firebase.google.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold text-red-700 hover:underline mt-1"
                    >
                      Aller à la console Firebase <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default EnrollmentModal;
