import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl py-3 shadow-2xl' 
        : 'bg-white/90 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="logo group flex items-center">
          <img 
            src="/logo.png" 
            alt="Rosewood Investigations Logo" 
            className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/' 
                ? 'text-cyan-600' 
                : 'text-gray-800 hover:text-cyan-600'
            }`}
          >
            HOME
          </Link>
          <Link 
            to="/services" 
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/services' 
                ? 'text-cyan-600' 
                : 'text-gray-800 hover:text-cyan-600'
            }`}
          >
            OUR SERVICES
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/about' 
                ? 'text-cyan-600' 
                : 'text-gray-800 hover:text-cyan-600'
            }`}
          >
            ABOUT
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition-colors duration-300 ${
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
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`block font-medium transition-colors duration-300 py-2 ${
                location.pathname === '/' 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              onClick={closeMobileMenu}
              className={`block font-medium transition-colors duration-300 py-2 ${
                location.pathname === '/services' 
                  ? 'text-cyan-600' 
                  : 'text-gray-800 hover:text-cyan-600'
              }`}
            >
              OUR SERVICES
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`block font-medium transition-colors duration-300 py-2 ${
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
              className={`block font-medium transition-colors duration-300 py-2 ${
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
