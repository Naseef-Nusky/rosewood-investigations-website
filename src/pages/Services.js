import React from 'react';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Personal Investigation",
      desc: "Personal investigation services including background checks, surveillance, and relationship investigations with complete confidentiality.",
      img: "/individual.jpg",
      cta: "Learn More"
    },
    {
      id: 2,
      title: "Fraud Investigation",
      desc: "Comprehensive fraud detection and investigation services for both personal and corporate cases with detailed reporting.",
      img: "/fraud.jpg",
      cta: "Get Started"
    },
    {
      id: 3,
      title: "Missing Persons",
      desc: "Professional missing person investigations with local and international reach, utilizing advanced search techniques.",
      img: "/missing.jpg",
      cta: "Find Out More"
    },
    {
      id: 4,
      title: "Covert Surveillance",
      desc: "Discreet surveillance operations for various purposes including business investigations and personal matters.",
      img: "/covert.jpg",
      cta: "Contact Us"
    },
    {
      id: 5,
      title: "Background Checking",
      desc: "Comprehensive background checks for employees, business partnerships, and relationships. We provide detailed reports with all vital information you need to make informed decisions.",
      img: "/background.jpg",
      cta: "Read More"
    }
  ];

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-cyan-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional investigation services tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div
                  className="w-full h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.img})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                         <p className="text-gray-600 text-sm leading-relaxed">
                           {service.desc}
                         </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

   
    </div>
  );
};

export default Services;
