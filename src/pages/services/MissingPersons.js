import React from 'react';
import { Link } from 'react-router-dom';

const MissingPersons = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/missing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Missing Persons Investigator
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Compassionate and effective assistance
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Every year, countless individuals go missing, leaving behind worried families and friends. The process of locating a missing person can be complex and emotionally taxing. This is where professional missing persons and private investigators come into play.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A missing persons investigator, such as <span className="font-semibold">Rosewood Investigations</span>, possesses the skills, knowledge, and resources necessary to uncover the truth, including: finding the missing persons’ possible location, tracing birth parents, and bringing closure to those affected by disappearances.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Rosewood Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            When it comes to missing person investigations, Rosewood Investigations is the trusted name in the field. Operating across areas of Great Britain and worldwide, we have a highly experienced team of private investigators with a proven track record of successfully resolving missing persons investigations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Rosewood Investigations, we understand the emotional toll that missing person cases can take on family members, and our team is dedicated to providing compassionate and effective assistance, and a straightforward approach.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our private investigators are equipped with cutting-edge technology and employ ethical and legal investigative methods to find missing persons. We also work closely with law enforcement officials, when necessary, to ensure the best possible outcome for our clients.
          </p>
        </div>

        {/* Services Offered */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Missing Persons Investigator Services</h2>
          <p className="text-gray-700 leading-relaxed">
            At Rosewood Investigations, our private detectives extend beyond simply locating and tracing missing people, birth parents, families, and individuals. We offer clients a comprehensive range of assistance, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li><span className="font-semibold">Locating Missing Individuals:</span> Our primary focus is on finding missing persons, regardless of the circumstances surrounding their disappearance.</li>
            <li><span className="font-semibold">Finding Witnesses or Persons of Interest:</span> We can track down potential witnesses or persons of interest who may have information related to the case.</li>
            <li><span className="font-semibold">Investigating Cold Cases:</span> Our experts excel at revisiting unsolved cases, applying fresh perspectives, and utilising advanced investigative techniques to potentially uncover new leads.</li>
            <li><span className="font-semibold">Providing Expert Testimony in Court:</span> Our highly experienced private investigators are qualified to provide expert testimony in court, bolstering legal efforts to bring those responsible to justice.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Our investigations are thorough, professional, and conducted with absolute sensitivity to the unique circumstances of each case to assure confidentiality.</p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold"
          >
            Contact Us Today
          </Link>
        </div>

        {/* Related Services */}
        <RelatedServices currentSlug="missing-persons" />
      </div>
    </section>
  );
};

export default MissingPersons;

// Local related services section
const RelatedServices = ({ currentSlug }) => {
  const services = [
    { 
      title: 'Personal Investigation', 
      slug: 'personal-investigation', 
      img: '/individual.jpg',
      desc: 'Confidential investigations tailored to your needs, from relationship matters to lifestyle verification.'
    },
    { 
      title: 'Fraud Investigation', 
      slug: 'fraud-investigation', 
      img: '/fraud.jpg',
      desc: 'Comprehensive fraud detection and evidence gathering with rapid response, digital forensics, and detailed reporting.'
    },
    { 
      title: 'Covert Surveillance', 
      slug: 'covert-surveillance', 
      img: '/covert.jpg',
      desc: 'Discreet operations with modern techniques to capture reliable photo/video evidence for personal or corporate cases.'
    },
    { 
      title: 'Background Checking', 
      slug: 'background-checking', 
      img: '/background.jpg',
      desc: 'Thorough checks for employment, partnerships, and relationships with clear, actionable reports.'
    },
    { 
      title: 'Missing Persons', 
      slug: 'missing-persons', 
      img: '/missing.jpg',
      desc: 'Professional tracing services to locate missing people with sensitivity and discretion.'
    },
  ];

  const candidates = services.filter(s => s.slug !== currentSlug);
  const randomThree = [...candidates].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <section className="pt-6">
      <div className="border-t border-gray-200 pt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">You May Also Be Interested In</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomThree.map(service => (
            <div key={service.slug} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
              <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${service.img})` }} />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{service.desc}</p>
                <Link to={`/services/${service.slug}`} className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


