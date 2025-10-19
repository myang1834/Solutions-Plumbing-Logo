import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, PhoneIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <img src="/SolutionsPlumbingTransparentBG.png" alt="Solutions Plumbing Logo" className="relative h-16 w-auto" />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all plumbing, gas fitting, and heating
              solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-red-500">
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Gas Fitting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Heating
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Commercial Plumbing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-3">
              <PhoneIcon className="h-5 w-5 mr-2 text-red-500" />
              <span>555-123-4567</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Available 24/7 for emergency plumbing services.
            </p>
            <a href="/#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
              Request Service
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} Solutions Plumbing. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>{' '}
            |
            <a href="#" className="hover:text-white ml-2">
              Terms of Service
            </a>
          </p>
          <div className="mt-4 text-white">
            <p className="text-xl font-medium">Made by Pagoda</p>
            <p className="text-sm">
              <a href="https://www.getpagoda.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                W W W . G E T P A G O D A . C O M
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
}