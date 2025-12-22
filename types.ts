import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  partners: string[];
  ctaText: string;
  icon: React.ReactNode;
}

export interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
}

export interface UTMParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  utm_id: string;
  utm_adset: string;
  utm_placement: string;
}