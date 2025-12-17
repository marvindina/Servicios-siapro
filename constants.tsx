import React from 'react';
import { ServiceItem, UseCase, Step, Testimonial } from './types';
import { 
  FileText, 
  Cpu, 
  PenTool, 
  Users, 
  CreditCard, 
  Briefcase, 
  ShieldCheck,
  CheckCircle,
  Zap,
  Layout,
  BookOpen,
  Clock,
  Search,
  Lock
} from 'lucide-react';

export const COMPANY_PHONE = "55 1234 5678";
export const WHATSAPP_NUMBER = "5215512345678";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Main Logo URLs
export const SIAPRO_LOGO_URL = "https://impresiones.siapromx.com/assets/logo.png";
export const SIAPRO_LOGO_WHITE_URL = "https://impresiones.siapromx.com/assets/logo.png";

// Partner Logo URLs
export const LOGO_DOCUWARE = "https://www.docuware.com/sites/default/files/docuware_logo_pos_rgb_0.png";
export const LOGO_VALIDATEDID = "https://www.validatedid.com/hubfs/logos/ValidatedID_Logo_RGB.png";
export const LOGO_MONDAY = "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png";

// Webhooks
export const WEBHOOK_MAIN_FORM = "https://hooks.zapier.com/hooks/catch/23995305/ufmcyhg/";
export const WEBHOOK_WHATSAPP_FORM = "https://hooks.zapier.com/hooks/catch/23995305/ufmchy7/";

// Calendly
export const CALENDLY_URL = "https://calendly.com/siapromx/30min";

export const SERVICES: ServiceItem[] = [
  {
    id: 'digitalizacion',
    title: 'Digitalización & Automatización',
    description: 'Haz que tus documentos, aprobaciones y tareas fluyan solos. Olvídate del papel y del trabajo repetitivo.',
    bullets: [
      'Procesos más rápidos',
      'Menos errores',
      'Documentos organizados',
      'Flujos automáticos',
      'Capacitación incluida'
    ],
    partners: ['DocuWare', 'Monday.com'],
    ctaText: 'Más sobre automatización',
    icon: <Cpu className="w-10 h-10 text-brand-green" />
  },
  {
    id: 'firma',
    title: 'Firma Electrónica Avanzada',
    description: 'Contratos, autorizaciones y documentos internos firmados desde cualquier dispositivo y con validez legal.',
    bullets: [
      'Firma avanzada',
      'Flujo inmediato',
      'Seguro y legal',
      'Ideal para RH, ventas y dirección',
      'Plataforma incluida'
    ],
    partners: ['Validated ID'],
    ctaText: 'Activar firma electrónica',
    icon: <PenTool className="w-10 h-10 text-brand-green" />
  }
];

export const SUCCESS_STORY = {
  title: "Compras 100% digitales en JMAS (Cd. Juárez)",
  challenge: "Un proceso de compras en papel podía tardar más de 4 semanas en avanzar y hasta 8 días solo en conseguir firmas.",
  solution: "Implementamos un flujo de compras digital con DocuWare Cloud, automatizando el registro de requerimientos, la creación de expedientes, el control de cotizaciones, notificaciones, aprobaciones y firma digital con validez legal (integración con VidSigner).",
  results: [
    {
      label: "Aprobaciones",
      value: "Máx. 48 hrs",
      desc: "Antes tardaban semanas.",
      icon: <Clock className="w-6 h-6 text-brand-green" />
    },
    {
      label: "Envío a Proveedores",
      value: "1–2 días",
      desc: "Mismo día en urgencias.",
      icon: <Zap className="w-6 h-6 text-brand-green" />
    },
    {
      label: "Auditorías",
      value: "< 2 horas",
      desc: "Antes tardaban 2 semanas.",
      icon: <Search className="w-6 h-6 text-brand-green" />
    },
    {
      label: "Control",
      value: "Trazabilidad",
      desc: "Resguardo obligatorio.",
      icon: <Lock className="w-6 h-6 text-brand-green" />
    }
  ],
  imageUrl: "https://blob.udgtv.com/images/uploads/2021/07/siapa-medios-focus-0-0-608-342.jpg"
};

export const USE_CASES: UseCase[] = [
  {
    title: 'Cuentas por Cobrar y Pagar',
    description: 'Aprobaciones automáticas, digitalización de facturas y procesos más ágiles.',
    icon: <CreditCard className="w-8 h-8 text-brand-green" />
  },
  {
    title: 'Recursos Humanos',
    description: 'Contratos, firmas, expedientes y documentos sin papel.',
    icon: <Users className="w-8 h-8 text-brand-green" />
  },
  {
    title: 'Ventas',
    description: 'Cotizaciones y contratos aprobados al instante.',
    icon: <Briefcase className="w-8 h-8 text-brand-green" />
  },
  {
    title: 'Autorizaciones Internas',
    description: 'Flujos claros, decisiones rápidas y documentación ordenada.',
    icon: <ShieldCheck className="w-8 h-8 text-brand-green" />
  }
];

export const WHY_US_BULLETS = [
  'Implementación guiada por expertos',
  'Integración con sistemas actuales',
  'Capacitación para tu equipo',
  'Soporte continuo',
  'Adaptación a tu proceso real'
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Analizamos tu proceso actual',
    description: 'Identificamos cuellos de botella y oportunidades de mejora.'
  },
  {
    number: 2,
    title: 'Diseñamos tu flujo digital',
    description: 'Automatizaciones, accesos y estructura documental.'
  },
  {
    number: 3,
    title: 'Activamos firma electrónica',
    description: 'Documentos firmados con validez legal en segundos.'
  },
  {
    number: 4,
    title: 'Tu empresa opera sola',
    description: 'Más velocidad, menos errores, más productividad.'
  }
];

export const PARTNERS_DATA = [
  { 
    name: 'DocuWare', 
    desc: 'Automatización y gestión documental',
    logoUrl: LOGO_DOCUWARE
  },
  { 
    name: 'Validated ID', 
    desc: 'Firma electrónica avanzada',
    logoUrl: LOGO_VALIDATEDID
  },
  { 
    name: 'Monday.com', 
    desc: 'Organización visual y flujos simples',
    logoUrl: LOGO_MONDAY
  }
];
