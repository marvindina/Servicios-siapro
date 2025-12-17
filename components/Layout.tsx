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
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
                <button onClick={() => handleNavClick('servicios')} className="text-brand-text hover:text-brand-green font-semibold transition-colors text-sm uppercase tracking-wider">Servicios</button>
                <button onClick={() => handleNavClick('casos')} className="text-brand-text hover:text-brand-green font-semibold transition-colors text-sm uppercase tracking-wider">Casos de Uso</button>
                <button onClick={() => handleNavClick('proceso')} className="text-brand-text hover:text-brand-green font-semibold transition-colors text-sm uppercase tracking-wider">Proceso</button>
                <button onClick={() => handleNavClick('partners')} className="text-brand-text hover:text-brand-green font-semibold transition-colors text-sm uppercase tracking-wider">Partners</button>
            </nav>

            <div className="h-8 w-px bg-gray-200"></div>

            <button 
              onClick={onOpenWhatsApp}
              className="bg-brand-green text-white px-7 py-3 rounded-xl font-bold hover:bg-brand-hover transition-colors flex items-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-dark hover:text-brand-green p-2 focus:outline-none"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full z-50 shadow-2xl">
          <div className="px-6 py-8 space-y-4">
            <button onClick={() => handleNavClick('servicios')} className="block w-full text-left p-3 text-lg font-bold text-brand-dark hover:text-brand-green rounded-lg">Servicios</button>
            <button onClick={() => handleNavClick('casos')} className="block w-full text-left p-3 text-lg font-bold text-brand-dark hover:text-brand-green rounded-lg">Casos de Uso</button>
            <button onClick={() => handleNavClick('proceso')} className="block w-full text-left p-3 text-lg font-bold text-brand-dark hover:text-brand-green rounded-lg">Proceso</button>
            <button onClick={() => handleNavClick('partners')} className="block w-full text-left p-3 text-lg font-bold text-brand-dark hover:text-brand-green rounded-lg">Partners</button>
            <div className="pt-4">
                <button 
                    onClick={onOpenWhatsApp}
                    className="w-full bg-brand-green text-white p-4 rounded-xl font-bold text-center"
                >
                    Contactar por WhatsApp
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
    <footer className="bg-brand-dark text-white pt-20 pb-24 md:pb-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-5 space-y-8">
            <img 
              src={SIAPRO_LOGO_WHITE_URL} 
              alt="SIAPRO Logo Footer" 
              className="h-12 w-auto object-contain brightness-0 invert" 
            />
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Consultoría especializada en la transformación digital de procesos críticos para empresas que buscan escala y control.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-brand-green transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-green transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-500 hover:text-brand-green transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Nuestra Sede</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin size={22} className="flex-shrink-0 text-brand-green" />
                <span className="text-sm">Ciudad Juárez, Chihuahua. <br/>Servicio a nivel nacional.</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone size={22} className="text-brand-green" />
                <span className="text-sm">55 1234 5678</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <MessageCircle size={22} className="text-brand-green" />
                <button onClick={onOpenWhatsApp} className="hover:text-brand-green transition-colors text-sm underline underline-offset-4">Iniciar Chat WhatsApp</button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Certificaciones</h3>
            <div className="flex flex-wrap gap-8 items-center pt-2">
                <img src={LOGO_DOCUWARE} alt="DocuWare Platinum Partner" className="h-8 w-auto brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
                <img src={LOGO_VALIDATEDID} alt="Validated ID Certified" className="h-10 w-auto brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" />
            </div>
            <div className="pt-6">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">¿Listo para empezar?</p>
                <button 
                    onClick={onOpenWhatsApp}
                    className="w-full bg-brand-green text-white py-4 rounded-xl font-bold hover:bg-brand-hover transition-all"
                >
                    Hablar con un consultor
                </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SIAPRO. Todos los derechos reservados.</p>
          <div className="flex gap-8">
               <a href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-wider">Aviso de Privacidad</a>
               <a href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-wider">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const StickyCTA: React.FC<{ onOpenWhatsApp: () => void }> = ({ onOpenWhatsApp }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={onOpenWhatsApp}
          className="bg-[#25D366] text-white p-4 rounded-2xl font-bold hover:bg-[#20bd5a] transition-all flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] group transform hover:-translate-y-1"
        >
          <div className="bg-white/20 p-1.5 rounded-lg">
            <MessageCircle size={24} fill="white" className="text-transparent" />
          </div>
          <span className="pr-2 hidden sm:block">¿Necesitas ayuda inmediata?</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
    </div>
  );
};
