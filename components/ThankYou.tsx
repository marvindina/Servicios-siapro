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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">¡Gracias por tu solicitud!</h1>
        <p className="text-lg text-gray-600 mb-8">Hemos recibido tus datos correctamente. Si deseas agilizar el proceso, agenda una llamada de 30 minutos con un experto ahora mismo.</p>
        
        {/* Calendly Inline Widget */}
        <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: '320px', height: '700px' }}></div>
        
        <div className="mt-8">
            <button 
                onClick={onBack}
                className="text-brand-green font-semibold hover:underline"
            >
                Volver al inicio
            </button>
        </div>
      </div>
    </div>
  );
};