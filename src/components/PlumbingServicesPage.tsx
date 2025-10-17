import React from 'react';
import { CheckCircleIcon, WrenchIcon, DropletsIcon, HomeIcon, HammerIcon, BathIcon, ShieldIcon } from 'lucide-react';

export function PlumbingServicesPage() {
  const services = [
    {
      icon: DropletsIcon,
      title: "Leak Detection & Repair",
      description: "Our advanced leak detection technology helps us quickly identify and repair leaks before they cause extensive damage to your property.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Advanced electronic leak detection equipment",
        "Non-invasive detection methods",
        "Emergency leak repair services"
      ],
      benefits: "Professional leak detection and repair services to protect your property and save on water costs."
    },
    {
      icon: WrenchIcon,
      title: "Fixture Installation",
      description: "Professional installation of all types of plumbing fixtures including faucets, toilets, sinks, and more with warranty protection.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Faucet and sink installation",
        "Toilet installation and replacement",
        "Shower and bathtub fixtures"
      ],
      benefits: "Expert installation and optimal performance of all plumbing fixtures by certified professionals."
    },
    {
      icon: HomeIcon,
      title: "Whole House Repiping",
      description: "Complete repiping services for older homes or properties with outdated plumbing systems using modern, durable materials.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Copper and PEX piping options",
        "Minimal disruption installation",
        "Code compliance guarantee"
      ],
      benefits: "Complete repiping services to improve water quality, pressure, and reliability throughout your home."
    },
    {
      icon: HammerIcon,
      title: "New Construction Plumbing",
      description: "Complete plumbing installation for new construction projects, from rough-in to final connections and testing.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Rough-in plumbing installation",
        "Fixture connections and testing",
        "Code compliance inspection"
      ],
      benefits: "Professional construction plumbing services to complete your project on time and within budget."
    },
    {
      icon: BathIcon,
      title: "Kitchen & Bathroom Remodel Plumbing",
      description: "Specialized plumbing services for kitchen and bathroom renovations, including fixture relocation and new installations.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Fixture relocation services",
        "New plumbing installations",
        "Drain and vent modifications"
      ],
      benefits: "Professional plumbing services to support your kitchen and bathroom renovation projects."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Plumbing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert plumbing solutions for residential and commercial properties. 
              From emergency repairs to complete installations, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-center">
                Get Free Estimate
              </a>
              <a href="tel:555-123-4567" className="inline-block bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg text-center">
                Call Now: 555-123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive plumbing services with over 15 years of experience. 
              Our licensed and insured technicians are equipped with the latest tools and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-medium text-base leading-relaxed">{service.benefits}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solutions Plumbing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional plumbing services with unmatched safety and quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Fully licensed and certified plumbers with extensive training and experience.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Safety is our top priority with comprehensive inspections and code compliance.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Estimates</h3>
              <p className="text-gray-600">No-obligation free estimates for all plumbing projects and repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your plumbing project. 
            We're here to help with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-center">
              Request Free Estimate
            </a>
            <a href="tel:555-123-4567" className="inline-block bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-lg text-center">
              Call: 555-123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
