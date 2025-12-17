import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { WEBHOOK_WHATSAPP_FORM } from '../constants';
import { UTMParams } from '../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  utms: UTMParams;
  onSuccess: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, utms, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // For phone, only allow numbers and max 10 chars
    if (name === 'phone') {
        const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
        alert("Por favor ingresa un número válido de 10 dígitos");
        return;
    }

    setIsSubmitting(true);

    const payload = {
        ...formData,
        full_phone: `+52${formData.phone}`,
        ...utms,
        timestamp: new Date().toISOString(),
        source: 'WhatsApp Modal Popup'
    };

    try {
        await fetch(WEBHOOK_WHATSAPP_FORM, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors'
        });
        onSuccess();
    } catch (error) {
        console.error("WhatsApp Form Error", error);
        onSuccess(); // Redirect anyway
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-[modalSlideUp_0.3s_ease-out]">
        
        {/* Header */}
        <div className="bg-brand-green p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex justify-center mb-2">
             <MessageCircle size={40} />
          </div>
          <h3 className="text-2xl font-bold">Cotizar por WhatsApp</h3>
          <p className="text-white/90 text-sm mt-1">Ingresa tus datos para iniciar el chat con un asesor.</p>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none" 
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Correo</label>
            <input 
              type="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none" 
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp (10 dígitos)</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-bold">
                +52
              </span>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-r-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none" 
                placeholder="5512345678" 
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Solo números, sin espacios.</p>
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting} 
            className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-hover transition-colors shadow-lg flex justify-center items-center gap-2 mt-2 disabled:opacity-70"
          >
            {isSubmitting ? 'Procesando...' : (
                <>
                 Iniciar Chat <ArrowRight size={16} />
                </>
            )}
          </button>
        </form>
      </div>
      
      <style>{`
        @keyframes modalSlideUp {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};