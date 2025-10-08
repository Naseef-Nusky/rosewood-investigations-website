import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/callToAction.jpg)' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get <span className="text-cyan-400">Started?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our experienced team for a confidential consultation. We're here to help with your investigation needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
