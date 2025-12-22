import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { WEBHOOK_MAIN_FORM, SERVICES } from '../constants';
import { UTMParams } from '../types';

interface ContactFormProps {
  selectedService?: string;
  utms: UTMParams;
  onSuccess: () => void;
}

const COUNTRY_CODES = [
  { code: '+52', label: 'MX (+52)' },
  { code: '+1', label: 'US/CA (+1)' },
  { code: '+34', label: 'ES (+34)' },
  { code: '+54', label: 'AR (+54)' },
  { code: '+57', label: 'CO (+57)' },
  { code: '+56', label: 'CL (+56)' },
  { code: '+51', label: 'PE (+51)' },
];

export const ContactForm: React.FC<ContactFormProps> = ({ selectedService, utms, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    countryCode: '+52',
    serviceInterest: '',
    processes: [] as string[],
    timeline: 'inmediato'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        serviceInterest: selectedService
      }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
        const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleProcessChange = (process: string) => {
      setFormData(prev => {
          const current = prev.processes;
          if (current.includes(process)) {
              return { ...prev, processes: current.filter(p => p !== process) };
          } else {
              return { ...prev, processes: [...current, process] };
          }
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullPhone = `${formData.countryCode}${formData.phone}`;

    const payload = {
        userData: {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: fullPhone,
            whatsapp_number: fullPhone
        },
        projectDetails: {
            serviceInterest: formData.serviceInterest,
            processes: formData.processes,
            timeline: formData.timeline
        },
        marketingData: {
            ...utms
        },
        meta: {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            source: 'Main Contact Form'
        }
    };

    try {
        await fetch(WEBHOOK_MAIN_FORM, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors'
        });
        onSuccess();
    } catch (error) {
        console.error("Submission error", error);
        onSuccess();
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-brand-green/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-brand-dark py-10 px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Solicita una propuesta personalizada</h2>
            <p className="text-gray-300">Cuéntanos sobre tus retos y te ayudaremos a resolverlos.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-brand-dark">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-bold text-brand-dark">Empresa</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50"
                  placeholder="Nombre de tu negocio"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-brand-dark">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-brand-dark">WhatsApp</label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-1/3 px-3 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50 text-sm font-semibold"
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50"
                    placeholder="10 dígitos"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
                <p className="font-bold text-brand-dark text-xl">Detalles del proyecto</p>
                
                <div className="space-y-3">
                    <label htmlFor="serviceInterest" className="block text-sm font-bold text-gray-700">¿Qué servicio te interesa?</label>
                    <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${formData.serviceInterest ? 'border-brand-green ring-2 ring-brand-green/10 bg-brand-light font-bold text-brand-dark' : 'border-gray-200 bg-gray-50'}`}
                    >
                        <option value="">Selecciona una opción</option>
                        {SERVICES.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Ambos">Me interesan ambos</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="block text-sm font-bold text-gray-700">¿Qué proceso buscas automatizar? (Selecciona varios)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['CxC y CxP', 'Recursos Humanos', 'Ventas', 'Autorizaciones', 'Otro'].map((proc) => (
                            <label key={proc} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.processes.includes(proc) ? 'border-brand-green bg-brand-green/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                                <input 
                                    type="checkbox" 
                                    checked={formData.processes.includes(proc)}
                                    onChange={() => handleProcessChange(proc)}
                                    className="w-5 h-5 text-brand-green rounded focus:ring-brand-green border-gray-300"
                                />
                                <span className="text-gray-700 font-medium">{proc}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-700">Plazo de implementación</label>
                    <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-gray-50"
                    >
                        <option value="inmediato">Inmediato</option>
                        <option value="1-3meses">1 - 3 meses</option>
                        <option value="3-6meses">3 - 6 meses</option>
                    </select>
                </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-green text-white font-bold text-xl py-4 rounded-xl hover:bg-brand-hover transition-colors shadow-xl shadow-brand-green/20 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95 duration-200"
            >
              {isSubmitting ? 'Enviando...' : (
                  <>
                    Quiero mi propuesta <Send size={20} />
                  </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};