import React from 'react';
import { Menu, Phone, MessageCircle, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { SIAPRO_LOGO_URL, SIAPRO_LOGO_WHITE_URL, LOGO_DOCUWARE, LOGO_VALIDATEDID, LOGO_MONDAY } from '../constants';

interface LayoutProps {
  onOpenWhatsApp: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<LayoutProps> = ({ onOpenWhatsApp, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img src={SIAPRO_LOGO_URL} alt="SIAPRO Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          {/* Desktop Nav & CTA (Right) */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8">
                <button onClick={() => handleNavClick('servicios')} className="text-brand-dark/70 hover:text-brand-green font-bold transition-colors text-sm uppercase tracking-widest">Servicios</button>
                <button onClick={() => handleNavClick('casos')} className="text-brand-dark/70 hover:text-brand-green font-bold transition-colors text-sm uppercase tracking-widest">Casos</button>
                <button onClick={() => handleNavClick('proceso')} className="text-brand-dark/70 hover:text-brand-green font-bold transition-colors text-sm uppercase tracking-widest">Proceso</button>
                <button onClick={() => handleNavClick('partners')} className="text-brand-dark/70 hover:text-brand-green font-bold transition-colors text-sm uppercase tracking-widest">Partners</button>
            </nav>

            <div className="h-8 w-px bg-gray-200"></div>

            <button 
              onClick={onOpenWhatsApp}
              className="bg-brand-green text-white px-8 py-3.5 rounded-xl font-bold hover:bg-brand-hover transition-all flex items-center gap-3 whitespace-nowrap shadow-lg shadow-brand-green/10 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark hover:text-brand-green p-2 focus:outline-none transition-colors"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full z-50 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-8 py-10 space-y-6">
            <button onClick={() => handleNavClick('servicios')} className="block w-full text-left text-xl font-black text-brand-dark hover:text-brand-green">Servicios</button>
            <button onClick={() => handleNavClick('casos')} className="block w-full text-left text-xl font-black text-brand-dark hover:text-brand-green">Casos de Uso</button>
            <button onClick={() => handleNavClick('proceso')} className="block w-full text-left text-xl font-black text-brand-dark hover:text-brand-green">Proceso</button>
            <button onClick={() => handleNavClick('partners')} className="block w-full text-left text-xl font-black text-brand-dark hover:text-brand-green">Partners</button>
            <div className="pt-6 border-t border-gray-100">
                <button 
                    onClick={onOpenWhatsApp}
                    className="w-full bg-brand-green text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-green/20"
                >
                    Contactar Consultor
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC<{ onOpenWhatsApp: () => void }> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-20 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          
          <div className="md:col-span-5 space-y-10">
            <img 
              src={SIAPRO_LOGO_WHITE_URL} 
              alt="SIAPRO Logo Footer" 
              className="h-12 w-auto object-contain brightness-0 invert" 
            />
            <p className="text-gray-400 text-xl leading-relaxed max-w-sm">
              Transformación digital estratégica para empresas que buscan control absoluto y escalabilidad operativa.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-brand-green transition-all transform hover:scale-125"><Facebook size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-brand-green transition-all transform hover:scale-125"><Instagram size={28} /></a>
              <a href="#" className="text-gray-600 hover:text-brand-green transition-all transform hover:scale-125"><Linkedin size={28} /></a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-6">Nuestra Sede</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin size={24} className="flex-shrink-0 text-brand-green mt-1" />
                <span className="text-lg leading-snug">Ciudad Juárez, Chihuahua. <br/><span className="text-gray-600 text-sm font-bold uppercase tracking-widest">Servicio Nacional</span></span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone size={24} className="text-brand-green" />
                <span className="text-lg font-medium">55 1234 5678</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <MessageCircle size={24} className="text-brand-green" />
                <button onClick={onOpenWhatsApp} className="hover:text-brand-green transition-colors text-lg font-bold underline underline-offset-8">WhatsApp Directo</button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-10">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-6">Ecosistema</h3>
            <div className="flex flex-wrap gap-10 items-center">
                <img src={LOGO_DOCUWARE} alt="DocuWare Partner" className="h-10 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all cursor-pointer" />
                <img src={LOGO_VALIDATEDID} alt="Validated ID Partner" className="h-12 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-all cursor-pointer" />
            </div>
            <div className="pt-8">
                <button 
                    onClick={onOpenWhatsApp}
                    className="w-full bg-brand-green text-white py-5 rounded-2xl font-black text-xl hover:bg-brand-hover transition-all shadow-2xl shadow-brand-green/10"
                >
                    Diagnóstico Gratuito
                </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-gray-600 font-medium tracking-wide">&copy; {new Date().getFullYear()} SIAPRO. Consultoría en Procesos.</p>
          <div className="flex gap-10">
               <a href="#" className="text-gray-600 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors">Privacidad</a>
               <a href="#" className="text-gray-600 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const StickyCTA: React.FC<{ onOpenWhatsApp: () => void }> = ({ onOpenWhatsApp }) => {
  return (
    <div className="fixed bottom-10 right-10 z-40 group">
        <button 
          onClick={onOpenWhatsApp}
          className="bg-[#25D366] text-white p-5 rounded-3xl font-black hover:bg-[#20bd5a] transition-all flex items-center gap-4 shadow-[0_20px_50px_-10px_rgba(37,211,102,0.7)] transform hover:-translate-y-2 active:scale-95"
        >
          <div className="bg-white/20 p-2 rounded-xl">
            <MessageCircle size={32} fill="white" className="text-transparent" />
          </div>
          <span className="pr-3 hidden lg:block text-lg">¿Hablar con un experto?</span>
        </button>
    </div>
  );
};