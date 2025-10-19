import React from 'react';
import { CheckCircleIcon, WrenchIcon, FlameIcon, HomeIcon, ShieldIcon, ZapIcon } from 'lucide-react';

export function HeatingServicesPage() {
  const services = [
    {
      icon: FlameIcon,
      title: "Boiler Installation & Repair",
      description: "Professional installation and repair of residential and commercial boilers with expert maintenance services.",
      image: "/water heater.jpg",
      features: [
        "New boiler installation",
        "Boiler repair and maintenance",
        "High-efficiency boiler upgrades",
        "Emergency boiler repairs"
      ],
      benefits: "Professional boiler services to ensure reliable heating and optimal energy efficiency for your property."
    },
    {
      icon: HomeIcon,
      title: "Baseboard & Radiator Heat Installation",
      description: "Expert installation and maintenance of baseboard heaters and radiator systems for efficient home heating.",
      image: "/radiator.jpg",
      features: [
        "Baseboard heater installation",
        "Radiator system installation",
        "Heat distribution optimization",
        "System maintenance and repair"
      ],
      benefits: "Efficient heating solutions with professional installation and maintenance of baseboard and radiator systems."
    },
    {
      icon: WrenchIcon,
      title: "Water Heater Replacement & Repair",
      description: "Complete water heater services including installation, replacement, and repair of all types of water heaters.",
      image: "/water heater replacement.jpg",
      features: [
        "Tank and tankless water heater installation",
        "Water heater replacement services",
        "Emergency water heater repairs",
        "Energy-efficient upgrades"
      ],
      benefits: "Reliable hot water solutions with professional water heater installation, replacement, and repair services."
    },
    {
      icon: ShieldIcon,
      title: "Gas Heating System Maintenance",
      description: "Comprehensive maintenance and repair services for gas heating systems to ensure optimal performance and safety.",
      image: "/gas heating system.png",
      features: [
        "Annual heating system tune-ups",
        "Gas furnace maintenance",
        "Heating system inspections",
        "Performance optimization"
      ],
      benefits: "Professional gas heating system maintenance to ensure safety, efficiency, and reliable performance year-round."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Heating Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert heating solutions for residential and commercial properties. 
              Keep your property warm and comfortable with our certified heating professionals.
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
              Our Heating Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive heating services with over 15 years of experience. 
              Our licensed and certified heating technicians prioritize safety and efficiency.
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
              Why Choose Solutions Plumbing for Heating?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional heating services with unmatched safety and quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Fully licensed and certified heating technicians with extensive training and experience.</p>
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
              <p className="text-gray-600">No-obligation free estimates for all heating projects and repairs.</p>
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
            Contact us today for a free estimate on your heating project. 
            We're here to help with all your heating system needs.
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

