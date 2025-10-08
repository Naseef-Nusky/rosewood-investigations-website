import React from 'react';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              About <span className="text-cyan-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your trusted private investigation agency offering professional detective services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Investigation Services
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Rosewood Investigations is a trusted private investigation agency offering a wide range of professional detective services to meet your needs. Whether you're looking for a private investigator near me, need help with a phone investigation, or require private surveillance, our team of experienced local private investigators is ready to assist. Whatever the case we can help.
                </p>
                
                <p>
                  We specialize in a variety of cases, including financial investigations, electronic harassment, and corporate investigations. Our detectives in London are equipped with the latest technology and techniques to handle even the most complex situations.
                </p>
                
                <p>
                  Looking for a private detective or a digital private investigator? At Rosewood Investigations, we offer tailored solutions for everything from missing person cases to fraud investigations, and more.
                </p>
                
                <p>
                  Whether you're in need of a legal investigator, personal investigator, or online private investigators, we're here to help. Our team understands the importance of confidentiality, so you can trust us to handle your case with the utmost professionalism.
                </p>
                
                <p className="font-semibold text-gray-900">
                  Rosewood we have the expertise to handle even the most complex situations. We are dedicated to providing you with reliable and 100% confidential private investigation services.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/about.png" 
                  alt="About Rosewood Investigations" 
                  className="rounded-xl shadow-2xl max-w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      

      {/* Call to Action */}
      <CallToAction />

    </div>
  );
};

export default About;
