import React, { useEffect } from 'react';
import { CALENDLY_URL } from '../constants';

export const ThankYou: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-8">
            <h1 className="text-4xl font-black text-brand-dark mb-6">¡Gracias por registrarte!</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Si deseas acelerar el proceso de tu cotización, agenda libremente abajo una sesión con uno de nuestros expertos en el mejor horario que te acomode.
            </p>
        </div>
        
        {/* Calendly Inline Widget */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: '320px', height: '700px' }}></div>
        </div>
        
        <div className="mt-12">
            <button 
                onClick={onBack}
                className="text-brand-green font-bold text-lg hover:underline underline-offset-8 flex items-center justify-center gap-2 mx-auto transition-all"
            >
                Volver al inicio
            </button>
        </div>
      </div>
    </div>
  );
};
