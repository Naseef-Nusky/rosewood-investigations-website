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
            Specialist in private, corporate and legal investigations.
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Introducing Rosewood Investigations –<span className="text-cyan-600"> Your Private Investigator in areas of Great Britain and worldwide</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Trusted private and corporate investigations across areas of Great Britain and worldwide.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-cyan-600 text-2xl mb-3">🕵️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Experts In Investigation</h3>
                <p className="text-gray-700 leading-relaxed">Operating across areas of Great Britain and worldwide with investigators supporting private and corporate cases locally and internationally.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-cyan-600 text-2xl mb-3">🔐</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted & Discreet</h3>
                <p className="text-gray-700 leading-relaxed">When challenges arise, our trusted team works with complete discretion to uncover the truth and provide the answers you need.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-cyan-600 text-2xl mb-3">⚖️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Committed To Standards</h3>
                <p className="text-gray-700 leading-relaxed">High success rate and strict ethical practice, delivering confident, expert advice to clients across the UK.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="text-cyan-600 text-2xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-700 leading-relaxed">From personal matters and fraud to thorough background checks—local expertise across areas of Great Britain with worldwide reach.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Expertise Section - removed per request */}

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
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
                  Personal Investigation
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us As <span className="text-cyan-600">Your Private Investigator</span></h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">We combine uncompromising confidentiality, deep local knowledge, and national reach to deliver clear, actionable answers—ethically and efficiently.</p>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-left md:text-center">
              <p>Rosewood Investigations is one of the top private investigators across areas of Great Britain and worldwide, and there are several reasons why. Our commitment to professionalism, ethics, and confidentiality is unparalleled and we handle every case with these values in mind. We understand that your trust is crucial and we take great care in safeguarding your information.</p>
              <p>Our extensive knowledge of private investigations across areas of Great Britain gives us a competitive edge in local service, and we also serve clients internationally. We have a deep understanding of both national and international landscapes, nuances, and unique challenges, which enables us to navigate the terrain efficiently and effectively.</p>
              <p>By choosing Rosewood Investigations, you are selecting a dedicated private detective and investigator operating across areas of Great Britain and worldwide to uncover the truth, regardless of how elusive it may seem. We aim to provide you with the answers you seek, ensuring that you have the information necessary to make informed decisions and regain control of your life.</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;

