import React from 'react';
import { DropletIcon, FlameIcon } from 'lucide-react';
export function ServicesSection() {
  return <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solutions Plumbing offers comprehensive plumbing, gas fitting, and
            heating services for residential and commercial properties.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Plumbing Services */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <DropletIcon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">
              Plumbing
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Leak detection & repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Fixture installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Whole house repiping</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>New construction plumbing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Kitchen and bathroom remodel</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a href="#plumbing" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg">
                Learn More
              </a>
            </div>
          </div>
          {/* Gas Fitting Services */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <FlameIcon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">
              Gas Fitting
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Gas line installation & repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Appliance hookups</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Safety inspections</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a href="#gas-fitting" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg">
                Learn More
              </a>
            </div>
          </div>
          {/* Heating Services */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <FlameIcon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">
              Heating
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Boiler installation & repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Baseboard/Radiator heat installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Water heater replacement & repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Gas heating system maintenance</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a href="#heating" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg">
            Request a Service
          </a>
        </div>
      </div>
    </section>;
}