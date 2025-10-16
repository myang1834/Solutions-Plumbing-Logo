import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              About Solutions Plumbing
            </h2>
            <p className="text-gray-700 mb-6">
              Solutions Plumbing is a trusted provider of comprehensive
              plumbing, gas fitting, and heating services. With years of
              experience in the industry, our team of licensed professionals is
              dedicated to delivering top-quality workmanship and exceptional
              customer service.
            </p>
            <p className="text-gray-700 mb-8">
              Whether you need emergency repairs, routine maintenance, or
              installation services, we have the expertise and equipment to
              handle projects of any size. We take pride in our attention to
              detail and commitment to using only the highest quality materials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">24/7 Emergency Service</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Free Estimates</span>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Professional plumber at work" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>;
}