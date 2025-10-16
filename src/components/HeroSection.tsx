import React from 'react';
import { PhoneIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Plumbing Solutions For Your Home
            </h1>
            <p className="text-xl mb-8">
              Reliable, efficient, and quality plumbing, gas, and heating
              services for residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center">
                Request Service
              </a>
              <a href="tel:555-123-4567" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-lg text-center">
                <PhoneIcon className="mr-2 h-5 w-5" />
                555-123-4567
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white opacity-85 blur-lg rounded-full"></div>
              <img src="/SolutionsPlumbingTransparentBG.png" alt="Solutions Plumbing" className="relative max-h-72 w-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
      clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
    }}></div>
    </section>;
}