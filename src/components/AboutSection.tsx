import React, { lazy } from 'react';
import { CheckCircleIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Melrose Plumber | Trusted Plumbing Services in Greater Boston
            </h2>
            <p className="text-gray-700 mb-6">
              Solutions Plumbing is Melrose's premier plumbing contractor, specializing in
              emergency plumbing, gas fitting, and heating services. With years of
              experience serving Greater Boston, Malden, and all of Massachusetts, our licensed plumbers provide
              top-quality workmanship and exceptional customer service throughout the region.
            </p>
            <p className="text-gray-700 mb-8">
              From emergency plumbing repairs in Melrose to new construction plumbing in Boston, we provide comprehensive plumbing services, routine maintenance, and
              installation services. Our expert plumbers have the skills and equipment to
              handle projects of any size. We take pride in our attention to
              detail and commitment to using only the highest quality materials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">24/7 Emergency Service</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">Free Estimates</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/plumbing.jpg" alt="Professional plumber working on pipes" className="w-full h-auto rounded-lg" loading="lazy" width="600" height="400" />
          </div>
        </div>
      </div>
    </section>;
}