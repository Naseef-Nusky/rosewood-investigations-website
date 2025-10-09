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

      {/* Introducing Section (replaces Expertise) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Centered heading to match previous design */}
          <div className="text-center mb-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Introducing Rosewood Investigations – <span className="text-cyan-600">Your Private Investigator in all areas of Great Britain and worldwide</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Experts in private and corporate investigations with local expertise and nationwide reach across all areas of Great Britain and worldwide.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Copy */}
            <div className="text-left">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl md:text-2xl text-gray-900/90">
                  Based locally with a dedicated worldwide team, we support complex cases across all areas of Great Britain and worldwide with absolute discretion and a proven approach.
                </p>
                <p>
                  Life is full of mysteries, secrets and unanswered questions. Sometimes, a curious mind is not enough to uncover the truth. That’s where Rosewood Investigations comes in – trusted private investigators who provide clear answers when they matter most.
                </p>
                <p>
                  Our team delivers truth with confidence and care, adhering to strict ethical standards while keeping your objectives and legal boundaries at the centre of every action.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-cyan-600 mt-1">✓</span><span><strong>Local insight, national scale</strong> – deep knowledge with coverage across all areas of Great Britain and worldwide.</span></li>
                  <li className="flex items-start gap-3"><span className="text-cyan-600 mt-1">✓</span><span><strong>Discreet and compliant</strong> – lawful methods, documented evidence and strict confidentiality.</span></li>
                  <li className="flex items-start gap-3"><span className="text-cyan-600 mt-1">✓</span><span><strong>Versatile expertise</strong> – personal matters, corporate cases, fraud, and thorough background checks.</span></li>
                </ul>
              </div>
            </div>
            {/* Image collage redesigned to two images */}
            <div className="relative md:pl-8">
              {/* Tall hero image */}
              <img src="/1.jpg" alt="Investigation planning" className="w-full h-[460px] md:h-[520px] object-cover rounded-[28px] shadow-2xl ring-1 ring-black/10" />
              {/* Overlapping smaller image (hidden on mobile) */}
              <img src="/2.jpg" alt="Surveillance in action" className="hidden md:block absolute -right-2 -bottom-10 w-2/3 h-56 md:h-64 object-cover rounded-2xl shadow-xl ring-1 ring-black/5 md:rotate-1" />
            </div>
          </div>
        </div>
      </section>

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
              <p>Rosewood Investigations is one of the top private investigators covering all areas of Great Britain and worldwide, and there are several reasons why. Our commitment to professionalism, ethics, and confidentiality is unparalleled and we handle every case with these values in mind. We understand that your trust is crucial and we take great care in safeguarding your information.</p>
              <p>Our extensive knowledge of private investigations covering all areas of Great Britain gives us a competitive edge in local service, and we also serve clients internationally. We have a deep understanding of both national and international landscapes, nuances, and unique challenges, which enables us to navigate the terrain efficiently and effectively.</p>
              <p>By choosing Rosewood Investigations, you are selecting a dedicated private detective and investigator covering all areas of Great Britain and worldwide to uncover the truth, regardless of how elusive it may seem. We aim to provide you with the answers you seek, ensuring that you have the information necessary to make informed decisions and regain control of your life.</p>
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

