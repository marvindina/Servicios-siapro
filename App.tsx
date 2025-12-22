import React, { useState, useEffect } from 'react';
import { Header, Footer, StickyCTA } from './components/Layout';
import { Hero, UseCasesSection, WhyUs, HowItWorks, SuccessStorySection, PartnersSection } from './components/Sections';
import { ServicesSection } from './components/ServicesSection';
import { ContactForm } from './components/ContactForm';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ThankYou } from './components/ThankYou';
import { WhatsAppRedirect } from './components/WhatsAppRedirect';
import { UTMParams } from './types';

function App() {
  const [view, setView] = useState<'landing' | 'thank-you' | 'wa-thank-you'>('landing');
  const [selectedService, setSelectedService] = useState<string>('');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [utms, setUtms] = useState<UTMParams>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    utm_id: '',
    utm_adset: '',
    utm_placement: ''
  });

  // 1. Capture UTMs and marketing params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        utm_id: params.get('utm_id') || '',
        utm_adset: params.get('utm_adset') || params.get('adset') || '',
        utm_placement: params.get('utm_placement') || params.get('placement') || ''
    });
  }, []);

  // 2. Navigation Handlers
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMainCta = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3. Render Views
  if (view === 'wa-thank-you') {
      return <WhatsAppRedirect />;
  }

  if (view === 'thank-you') {
      return <ThankYou onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white">
      <Header 
        onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)} 
        onNavigate={handleNavigate}
      />
      
      <main>
        <Hero 
            onMainCta={handleMainCta} 
            onSecCta={() => setIsWhatsAppModalOpen(true)}
        />
        <ServicesSection onSelectService={handleServiceSelect} />
        <UseCasesSection onCta={handleMainCta} />
        <HowItWorks onCta={handleMainCta} />
        <SuccessStorySection onCta={handleMainCta} />
        <WhyUs />
        <PartnersSection />
        <ContactForm 
            selectedService={selectedService} 
            utms={utms}
            onSuccess={() => setView('thank-you')}
        />
      </main>

      <Footer onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)} />
      <StickyCTA onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)} />

      <WhatsAppModal 
        isOpen={isWhatsAppModalOpen} 
        onClose={() => setIsWhatsAppModalOpen(false)}
        utms={utms}
        onSuccess={() => setView('wa-thank-you')}
      />
    </div>
  );
}

export default App;