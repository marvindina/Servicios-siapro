import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Map images for visual variety
  const SERVICE_IMAGES = [
    "https://images.unsplash.com/photo-1586762524444-80e0fe900019?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <div className="text-brand-green font-black text-sm uppercase tracking-[0.3em] mb-4">Soluciones Core</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Digitaliza, organiza y automatiza.
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Haz que tus documentos, aprobaciones y tareas fluyan solos. Olvídate del papel y del trabajo repetitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col lg:flex-row group"
            >
              <div className="lg:w-1/3 relative min-h-[250px]">
                <img 
                    src={SERVICE_IMAGES[index]} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-lg text-brand-green z-10">
                    {service.icon}
                </div>
              </div>

              <div className="lg:w-2/3 p-10 md:p-12 flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-extrabold text-brand-dark mb-6 group-hover:text-brand-green transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-4 mb-10">
                    {service.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                <Check size={12} className="text-brand-green" strokeWidth={4} />
                            </div>
                            <span className="text-gray-700 font-bold text-sm tracking-wide">{bullet}</span>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4 items-center">
                        {service.partners.map((p, i) => (
                            <span key={i} className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                                Powered by {p}
                            </span>
                        ))}
                    </div>
                  
                    <button 
                        onClick={() => onSelectService(service.title)}
                        className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold hover:bg-brand-green transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/5"
                    >
                        {service.ctaText}
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
