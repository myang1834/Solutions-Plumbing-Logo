import React from 'react';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { AboutSection } from './AboutSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ContactSection } from './ContactSection';
export function HomePage() {
  return <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>;
}