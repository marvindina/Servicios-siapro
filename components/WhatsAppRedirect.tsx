import React, { useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export const WhatsAppRedirect: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
        window.location.href = WHATSAPP_LINK;
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="bg-brand-green/10 p-6 rounded-full animate-pulse">
                        <MessageCircle size={64} className="text-brand-green" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                        <CheckCircle2 size={32} className="text-brand-green" />
                    </div>
                </div>
            </div>
            
            <h2 className="text-3xl font-black text-brand-dark mb-4">¡Excelente elección!</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Estamos conectándote con un asesor experto por WhatsApp. <br/>
                <span className="font-bold text-brand-green">Un par de segundos más...</span>
            </p>

            <div className="flex flex-col items-center gap-6">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-brand-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-3 h-3 bg-brand-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-3 h-3 bg-brand-green rounded-full animate-bounce"></div>
                </div>
                
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Redirigiendo a: 52 656 130 5101
                </p>
            </div>
        </div>

        <div className="mt-10 text-gray-400 text-sm">
            Si no eres redirigido automáticamente, <a href={WHATSAPP_LINK} className="text-brand-green font-bold hover:underline">haz clic aquí</a>.
        </div>
    </div>
  );
};