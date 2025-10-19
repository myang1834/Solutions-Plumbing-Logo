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
            <p className="text-2xl mb-8">
              Licensed plumber serving Melrose, Boston, Malden, and Greater Boston area. 
              Expert plumbing, gas fitting, and heating services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center" aria-label="Request plumbing service">
                Request Service
              </a>
              <a href="tel:555-123-4567" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-lg text-center" aria-label="Call our plumbing service">
                <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                555-123-4567
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-tr from-white/10 to-blue-100/20 rounded-full blur-2xl"></div>
              </div>
              {/* Subtle geometric pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
              {/* Main white circle */}
              <div className="absolute inset-0 bg-white rounded-full opacity-90" aria-hidden="true"></div>
              <img src="/SolutionsPlumbingTransparentBG.png" alt="Solutions Plumbing Logo" className="relative max-h-96 w-auto drop-shadow-lg" loading="eager" width="400" height="300" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
      clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
    }} aria-hidden="true"></div>
    </section>;
}