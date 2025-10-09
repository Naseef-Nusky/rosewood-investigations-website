import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 mb-20 md:mb-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 text-left">
            <div className="mb-4 flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Rosewood Investigations Logo" 
                className="h-12 w-auto"
              />
            </div>
             <p className="text-gray-600 mb-4 leading-relaxed text-left">
              UK's top-rated private detective agency specializing in corporate investigations, 
              covert surveillance, and discreet investigative services. We provide professional, 
              confidential solutions for all your investigation needs.
            </p>
            <div className="flex items-center space-x-4 text-left">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="font-semibold">0740 7612 398</span>
              </div>
              <div className="flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                 <span className="text-sm text-gray-600">AVAILABLE 24/7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-teal-600 text-left">Our Services</h3>
            <ul className="space-y-2 text-gray-700 text-left">
              <li className="hover:text-teal-600 transition-colors duration-300 cursor-pointer text-left">Corporate Investigation</li>
              <li className="hover:text-teal-600 transition-colors duration-300 cursor-pointer text-left">Covert Surveillance</li>
              <li className="hover:text-teal-600 transition-colors duration-300 cursor-pointer text-left">Spouse Investigation</li>
              <li className="hover:text-teal-600 transition-colors duration-300 cursor-pointer text-left">Background Checks</li>
              <li className="hover:text-teal-600 transition-colors duration-300 cursor-pointer text-left">Asset Tracing</li>
              <li className="hover:text-teal-600 transition-colors duration-300 cursor-pointer text-left">Fraud Investigation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-teal-600 text-left">Quick Links</h3>
            <div className="space-y-3 text-gray-700 text-left">
              <div>
                <Link to="/contact" className="hover:text-teal-600 transition-colors">Contact</Link>
              </div>
              <div>
                <Link to="/privacy-policy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
              </div>
              <div>
                <Link to="/terms-and-conditions" className="hover:text-teal-600 transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 text-left">© Copyright 2025 | All Rights Reserved</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <Link to="/contact" className="hover:text-teal-600">Contact</Link>
            <span className="text-gray-300">|</span>
            <Link to="/privacy-policy" className="hover:text-teal-600">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms-and-conditions" className="hover:text-teal-600">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
