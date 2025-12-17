
import React from 'react';
import { STEPS, USE_CASES, WHY_US_BULLETS, PARTNERS_DATA, SUCCESS_STORY } from '../constants';
// Added Zap to imports
import { Check, Star, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  onMainCta: () => void;
  onSecCta: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onMainCta, onSecCta }) => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-44 overflow-hidden bg-white">
      {/* Background with slight pattern/gradient instead of overwhelming image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-brand-light/30 to-white"></div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-dark/5 rounded-full blur-[100px] z-0"></div>
      
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
                
                <div className="flex flex-wrap gap-4 mb-10 text-sm md:text-base font-semibold text-brand-dark/90">
                    {['Digitalización Documental', 'Automatización de Procesos', 'Firma Electrónica Avanzada'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={onMainCta}
                        className="px-8 py-4 bg-brand-green text-white rounded-lg font-bold text-lg hover:bg-brand-hover transition-all shadow-lg shadow-brand-green/20 hover:translate-y-[-2px]"
                    >
                        Quiero una propuesta
                    </button>
                    
                    <button 
                        onClick={onSecCta}
                        className="px-8 py-4 bg-white text-brand-dark border-2 border-gray-200 rounded-lg font-bold text-lg hover:border-brand-green hover:text-brand-green transition-all"
                    >
                        Hablar con un asesor
                    </button>
                </div>
            </div>

            <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                        alt="Oficina Moderna SIAPRO" 
                        className="w-full h-auto"
                    />
                </div>
                {/* Accent elements to break the "pure text" feel */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden sm:block">
                    <div className="flex items-center gap-4">
                        <div className="bg-brand-green/10 p-3 rounded-xl">
                            <Zap className="text-brand-green w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Eficiencia</p>
                            <p className="text-xl font-black text-brand-dark">+85%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-20 flex flex-col sm:flex-row sm:items-center gap-8 text-gray-400 text-sm font-semibold uppercase tracking-wider border-t border-gray-100 pt-10">
            <span>Partners Globales:</span>
            <div className="flex flex-wrap gap-10 items-center opacity-60 hover:opacity-100 transition-opacity">
                <img src={PARTNERS_DATA[0].logoUrl} alt="DocuWare" className="h-6 w-auto" />
                <img src={PARTNERS_DATA[1].logoUrl} alt="Validated ID" className="h-8 w-auto" />
                <img src={PARTNERS_DATA[2].logoUrl} alt="Monday.com" className="h-6 w-auto" />
            </div>
        </div>
      </div>
    </section>
  );
};

export const UseCasesSection: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Soluciones hechas para procesos reales
          </h2>
          <p className="text-lg text-gray-600">
            Optimizamos cada departamento de tu organización con tecnología que realmente se usa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-start group hover:-translate-y-1">
              <div className="bg-brand-light p-3 rounded-xl mb-6 text-brand-green group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SuccessStorySection: React.FC<{ onCta: () => void }> = ({ onCta }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                <Star size={14} className="fill-current" /> Caso de éxito destacado
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark">{SUCCESS_STORY.title}</h2>
        </div>

        <div className="bg-brand-dark rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Content Side */}
                <div className="lg:col-span-7 p-8 md:p-16 lg:p-20 text-white flex flex-col justify-center">
                    <div className="space-y-10 mb-12">
                        <div className="relative pl-6 border-l-4 border-brand-green">
                            <p className="text-brand-green font-black text-xs uppercase tracking-[0.2em] mb-3">El Reto</p>
                            <p className="text-xl text-gray-200 leading-relaxed font-medium">{SUCCESS_STORY.challenge}</p>
                        </div>
                        <div className="relative pl-6 border-l-4 border-brand-green/40">
                            <p className="text-brand-green/80 font-black text-xs uppercase tracking-[0.2em] mb-3">La Solución (SIAPRO)</p>
                            <p className="text-lg text-gray-400 leading-relaxed">{SUCCESS_STORY.solution}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {SUCCESS_STORY.results.map((res, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-brand-green font-black text-2xl">{res.value}</span>
                                <span className="text-white text-xs font-bold uppercase tracking-wider">{res.label}</span>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={onCta}
                        className="bg-brand-green hover:bg-brand-hover text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 self-start shadow-xl shadow-brand-green/30"
                    >
                        Quiero digitalizar mis procesos
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Image Side - Fixed Overlap */}
                <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden">
                    <img 
                        src={SUCCESS_STORY.imageUrl} 
                        alt="Caso de éxito JMAS Juarez" 
                        className="absolute inset-0 w-full h-full object-cover lg:object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                    />
                    {/* Dark overlay for mobile transition */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-brand-dark via-transparent to-transparent opacity-60"></div>
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover shadow-2xl" alt="Consulting" />
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-48 w-full object-cover shadow-2xl" alt="Data" />
                    </div>
                    <div className="space-y-4 pt-12">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-48 w-full object-cover shadow-2xl" alt="Team" />
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover shadow-2xl" alt="Implementation" />
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/10 rounded-full"></div>
            </div>

            <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                La tecnología es importante... <br/>
                <span className="text-brand-green">pero la implementación lo es todo.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                    No solo vendemos licencias. Acompañamos a tu equipo desde el análisis hasta la puesta en marcha para asegurar el éxito del proyecto.
                </p>
                <div className="space-y-6">
                    {WHY_US_BULLETS.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Check size={14} className="text-brand-green" strokeWidth={3} />
                            </div>
                            <span className="text-xl font-medium text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export const HowItWorks: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Así modernizamos tu operación
          </h2>
          <p className="text-gray-600 text-lg">Un camino claro hacia la transformación digital sin fricciones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative p-10 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
              <div className="text-6xl font-black text-gray-100 absolute top-6 right-6 select-none group-hover:text-brand-green/20 transition-colors">
                0{step.number}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 mt-8 relative z-10">{step.title}</h3>
              <p className="text-gray-600 text-base relative z-10 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PartnersSection: React.FC = () => {
    return (
        <section id="partners" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Tecnología que impulsa tu operación</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Nos integramos con las mejores soluciones del mercado para transformar tus procesos.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {PARTNERS_DATA.map((partner, i) => (
                        <div key={i} className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-6 border border-gray-100 hover:border-brand-green/30 transition-all group hover:shadow-xl">
                             <div className="h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-full object-contain" />
                             </div>
                            <p className="text-sm font-bold text-brand-green uppercase tracking-widest">{partner.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
