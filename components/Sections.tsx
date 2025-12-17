import React from 'react';
import { STEPS, USE_CASES, WHY_US_BULLETS, PARTNERS_DATA, SUCCESS_STORY } from '../constants';
import { Check, Star, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  onMainCta: () => void;
  onSecCta: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onMainCta, onSecCta }) => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-44 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-brand-light/20 to-white"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tight mb-8 leading-tight">
                Transforma tus procesos. <br/>
                <span className="text-brand-green">Acelera tu operación.</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-10 max-w-2xl leading-relaxed">
                Digitaliza documentos, automatiza tareas y firma desde cualquier lugar con soluciones empresariales diseñadas para tu negocio.
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-10">
                    {['Digitalización', 'Automatización', 'Firma Electrónica'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm font-semibold text-brand-dark/80">
                            <CheckCircle2 size={18} className="text-brand-green" />
                            {item}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={onMainCta}
                        className="px-8 py-4 bg-brand-green text-white rounded-xl font-bold text-lg hover:bg-brand-hover transition-all shadow-lg shadow-brand-green/20 hover:scale-[1.02]"
                    >
                        Quiero una propuesta
                    </button>
                    
                    <button 
                        onClick={onSecCta}
                        className="px-8 py-4 bg-white text-brand-dark border-2 border-gray-100 rounded-xl font-bold text-lg hover:border-brand-green hover:text-brand-green transition-all"
                    >
                        Hablar con un asesor
                    </button>
                </div>
            </div>

            <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-all duration-700">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                        alt="Digital Operations" 
                        className="w-full h-auto"
                    />
                </div>
                {/* Floating efficiency badge */}
                <div className="absolute -bottom-8 -left-8 bg-brand-dark p-6 rounded-3xl shadow-2xl z-20 border border-white/10 hidden sm:block">
                    <div className="flex items-center gap-4">
                        <div className="bg-brand-green p-3 rounded-2xl">
                            <Zap className="text-white w-6 h-6" fill="white" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Optimización</p>
                            <p className="text-2xl font-black text-white">+90%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const UseCasesSection: React.FC<{ onCta: () => void }> = ({ onCta }) => {
  return (
    <section id="casos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6">
            Impacto Real por Departamento
          </h2>
          <p className="text-xl text-gray-600">
            Tecnología diseñada para resolver los cuellos de botella de tu operación diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {USE_CASES.map((useCase, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group hover:-translate-y-2">
              <div className="bg-brand-light p-4 rounded-2xl mb-8 text-brand-green group-hover:scale-110 transition-transform self-start">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark mb-4">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button 
                onClick={onCta}
                className="bg-brand-green hover:bg-brand-hover text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3 shadow-xl shadow-brand-green/20"
            >
                Cotizar ahora <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export const SuccessStorySection: React.FC<{ onCta: () => void }> = ({ onCta }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark">Uno de nuestros casos de éxito</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-brand-dark rounded-[3.5rem] overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 md:p-16 lg:p-20 text-white flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-10 leading-tight">
                        {SUCCESS_STORY.title}
                    </h3>
                    
                    <div className="space-y-12 mb-12">
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 h-full w-1.5 bg-red-500 rounded-full"></div>
                            <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-3">El Reto</p>
                            <p className="text-xl text-gray-200 leading-relaxed italic">"{SUCCESS_STORY.challenge}"</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-green rounded-full"></div>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-3">La Solución (SIAPRO)</p>
                            <p className="text-lg text-gray-400 leading-relaxed">{SUCCESS_STORY.solution}</p>
                        </div>
                    </div>

                    <button 
                        onClick={onCta}
                        className="bg-brand-green hover:bg-brand-hover text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 self-start shadow-xl shadow-brand-green/30 active:scale-95"
                    >
                        Quiero digitalizar mis procesos
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Info and Image Side */}
                <div className="bg-gray-900/40 border-l border-white/5 flex flex-col">
                    <div className="p-8 md:p-12">
                        <h4 className="text-white text-2xl font-bold mb-8">Resultados Extraordinarios</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {SUCCESS_STORY.results.map((res, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 group hover:border-brand-green/50 transition-all">
                                    <div className="mb-4 group-hover:scale-110 transition-transform">{res.icon}</div>
                                    <div className="text-3xl font-black text-white mb-1 tracking-tight">{res.value}</div>
                                    <div className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2">{res.label}</div>
                                    <p className="text-gray-400 text-xs leading-relaxed">{res.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* The Image Section - Ensuring no overlap and high-quality display */}
                    <div className="mt-auto relative min-h-[350px] w-full overflow-hidden">
                        <img 
                            src={SUCCESS_STORY.imageUrl} 
                            alt="Caso de éxito JMAS Juárez" 
                            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const WhyUs: React.FC = () => {
    return (
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                La tecnología es importante... <br/>
                <span className="text-brand-green">pero la implementación lo es todo.</span>
                </h2>
                <p className="text-gray-400 text-xl mb-12 max-w-xl leading-relaxed">
                    No solo vendemos licencias. Acompañamos a tu equipo desde el análisis hasta la puesta en marcha para asegurar el éxito del proyecto.
                </p>
                <div className="space-y-8">
                    {WHY_US_BULLETS.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-6">
                            <div className="w-10 h-10 rounded-2xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                                <Check size={20} className="text-brand-green" strokeWidth={3} />
                            </div>
                            <span className="text-xl font-bold text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" 
                        className="rounded-[2.5rem] w-full h-64 object-cover shadow-2xl transform -translate-y-6" 
                        alt="Strategy" 
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" 
                        className="rounded-[2.5rem] w-full h-80 object-cover shadow-2xl translate-y-6" 
                        alt="Team Collaboration" 
                    />
                </div>
                {/* Decoration blob */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/5 rounded-[4rem]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export const HowItWorks: React.FC<{ onCta: () => void }> = ({ onCta }) => {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6">
            Así modernizamos tu operación
          </h2>
          <p className="text-gray-500 text-xl">Un camino estructurado hacia la eficiencia digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {STEPS.map((step, index) => (
            <div key={index} className="relative p-12 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 group border-b-4 hover:border-b-brand-green">
              <div className="text-7xl font-black text-gray-100 absolute top-8 right-10 select-none group-hover:text-brand-green/10 transition-colors">
                0{step.number}
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-6 mt-10 relative z-10">{step.title}</h3>
              <p className="text-gray-500 text-base relative z-10 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button 
                onClick={onCta}
                className="bg-brand-green hover:bg-brand-hover text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3 shadow-xl shadow-brand-green/20"
            >
                Cotizar ahora <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-4 uppercase tracking-widest opacity-80">Tecnología Certificada</h2>
                <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Colaboramos con los líderes mundiales en gestión y automatización.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {PARTNERS_DATA.map((partner, i) => (
                        <div key={i} className="bg-white p-12 rounded-[2rem] shadow-sm flex flex-col items-center justify-center gap-8 border border-gray-100 hover:shadow-2xl transition-all group">
                             <div className="h-20 flex items-center justify-center transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
                                <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-full object-contain" />
                             </div>
                            <p className="text-xs font-black text-brand-green uppercase tracking-[0.3em]">{partner.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
