import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { PlumbingServicesPage } from './components/PlumbingServicesPage';
import { GasFittingServicesPage } from './components/GasFittingServicesPage';
import { HeatingServicesPage } from './components/HeatingServicesPage';

export function App() {
  return <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plumbing-services" element={<PlumbingServicesPage />} />
            <Route path="/gas-fitting-services" element={<GasFittingServicesPage />} />
            <Route path="/heating-services" element={<HeatingServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>;
}