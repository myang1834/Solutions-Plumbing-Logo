import React, { useEffect, useState, useRef } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" aria-label="Solutions Plumbing Home">
              <img src="/SolutionsPlumbingTransparentBG.png" alt="Solutions Plumbing Logo" className="h-20 w-auto" width="225" height="80" />
            </a>
          </div>
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-blue-800 hover:text-red-600 px-3 py-2 font-medium">
              Home
            </a>
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleServicesDropdown} className="text-blue-800 hover:text-red-600 px-3 py-2 font-medium flex items-center">
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {servicesDropdownOpen && <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="/plumbing-services" className="block px-4 py-2 text-blue-800 hover:bg-gray-100 hover:text-red-600" onClick={() => setServicesDropdownOpen(false)}>
                    Plumbing
                  </a>
                  <a href="/gas-fitting-services" className="block px-4 py-2 text-blue-800 hover:bg-gray-100 hover:text-red-600" onClick={() => setServicesDropdownOpen(false)}>
                    Gas Fitting
                  </a>
                  <a href="/heating-services" className="block px-4 py-2 text-blue-800 hover:bg-gray-100 hover:text-red-600" onClick={() => setServicesDropdownOpen(false)}>
                    Heating
                  </a>
                </div>}
            </div>
            <a href="/#about" className="text-blue-800 hover:text-red-600 px-3 py-2 font-medium">
              About
            </a>
            <a href="/#contact" className="text-blue-800 hover:text-red-600 px-3 py-2 font-medium">
              Contact
            </a>
            <a href="/#testimonials" className="text-blue-800 hover:text-red-600 px-3 py-2 font-medium">
              Testimonials
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-800 hover:text-red-600">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="/" className="block px-3 py-2 text-blue-800 hover:text-red-600 font-medium" onClick={toggleMenu}>
              Home
            </a>
            {/* Mobile Services Dropdown */}
            <div>
              <button onClick={toggleServicesDropdown} className="flex items-center justify-between w-full px-3 py-2 text-blue-800 hover:text-red-600 font-medium">
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {servicesDropdownOpen && <div className="pl-6 space-y-1">
                  <a href="/plumbing-services" className="block px-3 py-2 text-blue-800 hover:text-red-600" onClick={toggleMenu}>
                    Plumbing
                  </a>
                  <a href="/gas-fitting-services" className="block px-3 py-2 text-blue-800 hover:text-red-600" onClick={toggleMenu}>
                    Gas Fitting
                  </a>
                  <a href="/heating-services" className="block px-3 py-2 text-blue-800 hover:text-red-600" onClick={toggleMenu}>
                    Heating
                  </a>
                </div>}
            </div>
            <a href="/#about" className="block px-3 py-2 text-blue-800 hover:text-red-600 font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="/#contact" className="block px-3 py-2 text-blue-800 hover:text-red-600 font-medium" onClick={toggleMenu}>
              Contact
            </a>
            <a href="/#testimonials" className="block px-3 py-2 text-blue-800 hover:text-red-600 font-medium" onClick={toggleMenu}>
              Testimonials
            </a>
          </div>
        </div>}
    </header>;
}