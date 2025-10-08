import React from 'react';
import { Link } from 'react-router-dom';

const BackgroundChecking = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/background.jpg')",
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
            Background Checking Services
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Make confident, informed decisions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            In today’s world, background checks have become increasingly important. These services have a significant impact on various aspects of life including employment and tenant screening, personal relationships, social media screening, and business partnerships.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">Rosewood Investigations</span>, we understand the significance of making informed decisions. That’s why we offer professional background-checking services. Our goal is to provide you with comprehensive information about the benefits and types of background checks available. We aim to demonstrate why Rosewood Investigations is the ideal choice for all your investigative needs, by delivering accurate and reliable results that can help you make informed decisions.
          </p>
        </div>

        {/* What Are Background Checking Services? */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What Are Background Checking Services?</h2>
          <p className="text-gray-700 leading-relaxed">
            Background-checking services are essential tools used to gather comprehensive information about an individual’s history, character, and qualifications. These services are conducted meticulously to provide a clear and accurate picture of the subject.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A typical background check can include details such as identity verification, criminal record checks, employment background checks, education credentials, credit reports, and more. These checks are commonly used in various industries and scenarios, such as pre-employment screening, tenant selection, due diligence for business transactions, and even personal relationships.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Benefits of Background Checking Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Professional background-checking services offer numerous benefits in a wide range of scenarios. These services serve as a crucial risk mitigation tool, providing individuals and businesses with the necessary information to make informed decisions. By revealing hidden information and potential red flags, background checks help prevent costly errors and ensure safety and security.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For instance, employers can do compliant background checks to avoid hiring individuals with a criminal record or a history of fraud, while landlords can make well-informed decisions about potential tenants. Statistics consistently demonstrate that conducting thorough background checks leads to reduced risks and increased trust in various situations.
          </p>
        </div>

        {/* Types */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Types of Background Checks</h2>
          <p className="text-gray-700 leading-relaxed">
            Background checks serve various purposes and come in different forms, each designed to cater to specific needs. The most commonly used types include criminal background checks, employment verification, education verification, and credit checks.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li><span className="font-semibold">Criminal Background Checks</span></li>
            <li><span className="font-semibold">Employment & Education Verification</span></li>
            <li><span className="font-semibold">Credit Background Checks</span></li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Rosewood Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            At Rosewood Investigations, we pride ourselves on our team’s years of experience and expertise in conducting thorough background checks. Our commitment to upholding the highest standards of professionalism, ethics, privacy, and confidentiality is unwavering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By utilising cutting-edge technologies, and background-checking software, we can provide our clients with accurate results, giving them the confidence to make informed decisions. Whether you are a business owner, landlord, or an individual seeking answers about criminal activity, Rosewood Investigations is your reliable and trusted partner in the world of background-checking services.
          </p>
        </div>

        {/* Our Process */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Process of Conducting Background Checks</h2>
          <p className="text-gray-700 leading-relaxed">
            We take pride in our meticulous and thorough background-checking process. Our step-by-step approach is designed to be efficient and transparent, ensuring that any potential risks are identified accurately and promptly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work closely with our clients to understand their unique requirements and tailor our investigations accordingly while adhering to the highest legal standards. From criminal history to employment verification and beyond, we leave no stone unturned in our quest for the most comprehensive and reliable results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Throughout the process, we provide clear and timely updates to our clients, so they can make informed decisions. With Rosewood Investigations, you can have complete confidence that you are getting the most comprehensive and trustworthy background screening available.
          </p>
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
        <RelatedServices currentSlug="background-checking" />
      </div>
    </section>
  );
};

export default BackgroundChecking;

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
      title: 'Covert Surveillance', 
      slug: 'covert-surveillance', 
      img: '/covert.jpg',
      desc: 'Discreet operations with modern techniques to capture reliable photo/video evidence for personal or corporate cases.'
    },
    { 
      title: 'Missing Persons', 
      slug: 'missing-persons', 
      img: '/missing.jpg',
      desc: 'Professional tracing services within the UK and internationally using advanced search methods and local networks.'
    },
    { 
      title: 'Fraud Investigation', 
      slug: 'fraud-investigation', 
      img: '/fraud.jpg',
      desc: 'Comprehensive fraud detection and evidence gathering with rapid response, digital forensics, and detailed reporting.'
    },
    { 
      title: 'Background Checking', 
      slug: 'background-checking', 
      img: '/background.jpg',
      desc: 'Thorough checks for employment, partnerships, and relationships with clear, actionable reports.'
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


