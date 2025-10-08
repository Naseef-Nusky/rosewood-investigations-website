import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // desktop dropdown
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // mobile submenu
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl py-3 shadow-2xl' 
        : 'bg-white/90 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="logo group flex items-center">
          <img 
            src="/logo.png" 
            alt="Rosewood Investigations Logo" 
            className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-8 items-center whitespace-nowrap">
          <Link 
            to="/" 
            className={`font-medium transition-colors duration-300 inline-flex items-center h-10 ${
              location.pathname === '/' 
                ? 'text-cyan-600' 
                : 'text-gray-800 hover:text-cyan-600'
            }`}
          >
            HOME
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              to="/services" 
              className={`font-medium transition-colors duration-300 inline-flex items-center gap-1 h-10 whitespace-nowrap ${
                location.pathname.startsWith('/services') 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
            >
              OUR SERVICES
              <span className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>▾</span>
            </Link>
            {isServicesOpen && (
              <div className="absolute left-0 top-full w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                <Link to="/services/personal-investigation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsServicesOpen(false)}>Personal Investigation</Link>
                <Link to="/services/covert-surveillance" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsServicesOpen(false)}>Covert Surveillance</Link>
                <Link to="/services/fraud-investigation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsServicesOpen(false)}>Fraud Investigation</Link>
                <Link to="/services/missing-persons" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsServicesOpen(false)}>Missing Persons</Link>
                <Link to="/services/background-checking" className="block px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsServicesOpen(false)}>Background Checking</Link>
              </div>
            )}
          </div>
          <Link 
            to="/about" 
            className={`font-medium transition-colors duration-300 inline-flex items-center h-10 ${
              location.pathname === '/about' 
                ? 'text-cyan-600' 
                : 'text-gray-800 hover:text-cyan-600'
            }`}
          >
            ABOUT
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition-colors duration-300 inline-flex items-center h-10 ${
              location.pathname === '/contact' 
                ? 'text-cyan-600' 
                : 'text-gray-800 hover:text-cyan-600'
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4 text-left">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`block font-medium transition-colors duration-300 py-2 text-left ${
                location.pathname === '/' 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
            >
              HOME
            </Link>
            {/* Mobile Services with submenu */}
            <button 
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={`w-full text-left block font-medium transition-colors duration-300 py-2 ${
                location.pathname.startsWith('/services') 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
              aria-expanded={isMobileServicesOpen}
            >
              <span className="inline-flex items-center gap-2">OUR SERVICES <span className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}>▾</span></span>
            </button>
            {isMobileServicesOpen && (
              <div className="pl-4 space-y-2 pb-2 text-left">
                <Link to="/services" onClick={closeMobileMenu} className="block text-left text-gray-700 hover:text-cyan-600 py-1">All Services</Link>
                <Link to="/services/personal-investigation" onClick={closeMobileMenu} className="block text-left text-gray-700 hover:text-cyan-600 py-1">Personal Investigation</Link>
                <Link to="/services/covert-surveillance" onClick={closeMobileMenu} className="block text-left text-gray-700 hover:text-cyan-600 py-1">Covert Surveillance</Link>
                <Link to="/services/fraud-investigation" onClick={closeMobileMenu} className="block text-left text-gray-700 hover:text-cyan-600 py-1">Fraud Investigation</Link>
                <Link to="/services/missing-persons" onClick={closeMobileMenu} className="block text-left text-gray-700 hover:text-cyan-600 py-1">Missing Persons</Link>
                <Link to="/services/background-checking" onClick={closeMobileMenu} className="block text-left text-gray-700 hover:text-cyan-600 py-1">Background Checking</Link>
              </div>
            )}
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`block font-medium transition-colors duration-300 py-2 text-left ${
                location.pathname === '/about' 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`block font-medium transition-colors duration-300 py-2 text-left ${
                location.pathname === '/contact' 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
