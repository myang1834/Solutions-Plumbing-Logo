import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
export function App() {
  return <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Navbar />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
      </div>
    </HelmetProvider>;
}