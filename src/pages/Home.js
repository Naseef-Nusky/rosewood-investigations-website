import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/hero.jpg)' }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rosewood <span className="text-cyan-400">Investigations</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Professional investigative services you can trust. 
            <br />
            Confidential, thorough, and results-driven.
          </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                   <Link 
                     to="/contact" 
                     className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                   >
                     Contact Us Now
                   </Link>
                   <Link 
                     to="/about" 
                     className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                   >
                     Learn More
                   </Link>
                 </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-cyan-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional Investigation Services with Unmatched Precision
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With decades of combined experience, our team delivers comprehensive investigation solutions tailored to your specific needs. We combine traditional investigative methods with cutting-edge technology to ensure thorough and accurate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Surveillance</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art surveillance techniques with modern technology for discreet and effective monitoring
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Confidentiality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolute discretion and privacy protection ensuring your case remains completely confidential
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 availability with quick response times to address urgent investigation needs
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precision Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed reporting with actionable insights and comprehensive evidence gathering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-cyan-600">Featured Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular investigation services designed to help you find answers and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Individual Investigations */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: 'url(/individual.jpg)' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Individual Investigations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our team of highly skilled detectives is proficient in various investigations, ranging from online dating inquiries to missing person and matrimonial cases.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Fraud Investigation */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: 'url(/fraud.jpg)' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fraud Investigation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The prevalence of online fraud in the UK results in significant financial losses amounting to billions of pounds annually. If you have been affected by online fraud, contact us without delay for immediate assistance.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Missing Persons */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: 'url(/missing.jpg)' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Missing Persons
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  In the UK, a person is reported missing every 90 seconds. With the expertise of our professionals, we can aid you in tracing individuals both within the country and internationally.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;

