import React, { useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

export const WhatsAppRedirect: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
        window.location.href = WHATSAPP_LINK;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2FA94B] mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Abriendo WhatsApp...</h2>
            <p className="text-gray-600">Por favor espera un momento.</p>
        </div>
    </div>
  );
};