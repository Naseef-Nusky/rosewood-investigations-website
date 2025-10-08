import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Contact <span className="text-cyan-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our professional investigation team
            </p>
          </div>
        </div>
      </section>

             {/* Contact Information Section */}
             <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/location.jpg)' }}>
               <div className="absolute inset-0 bg-black/50"></div>
               <div className="container mx-auto px-4 md:px-8 relative z-10">
                 <div className="max-w-4xl mx-auto">
                   <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-lg">
                     <div className="space-y-8">
                       {/* Address */}
                       <div className="text-center">
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">📍 Visit Us</h3>
                         <div className="text-gray-600 space-y-2">
                           <div className="font-bold text-gray-900 text-xl">ROSEWOOD INVESTIGATIONS</div>
                           <div className="text-lg leading-relaxed">
                             Units, A-J Austen house,<br />
                             Station view,<br />
                             Guildford, GU1 4AR
                           </div>
                         </div>
                       </div>

                       {/* Email */}
                       <div className="text-center">
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">📧 Email Us</h3>
                         <div className="text-gray-600">
                           <a 
                             href="mailto:private@rosewoodinvestigations.com" 
                             className="text-cyan-600 hover:text-cyan-700 font-medium text-lg transition-colors duration-300 break-all"
                           >
                             private@rosewoodinvestigations.com
                           </a>
                         </div>
                       </div>

                       {/* Phone */}
                       <div className="text-center">
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">📞 Call Us</h3>
                         <div className="text-gray-600">
                           <a 
                             href="tel:07407612398" 
                             className="text-cyan-600 hover:text-cyan-700 font-bold text-2xl transition-colors duration-300"
                           >
                             0740 7612 398
                           </a>
                           <div className="mt-2 text-lg text-gray-500">Available 24/7</div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>

      {/* Contact Form Section */}
      <ContactSection />

    </div>
  );
};

export default Contact;