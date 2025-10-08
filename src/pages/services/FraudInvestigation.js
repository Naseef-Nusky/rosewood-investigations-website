import React from 'react';
import { Link } from 'react-router-dom';

const FraudInvestigation = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/fraud.jpg')",
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
            Fraud Investigation Service
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Expert-led protection against fraud
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fraud investigation services are the vigilant guardians that shield individuals and businesses from the pervasive threat and practice of deception and financial malfeasance. In a world where financial crimes and fraudulent activities can inflict substantial harm, these services play a pivotal role in identifying, preventing, and mitigating fraudulent schemes and conduct.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In today’s complex and interconnected landscape, professional expertise stands as the linchpin of effective fraud investigations. Highly skilled and certified investigators bring to bear a wealth of knowledge and experience, ensuring that the intricate web of fraud is unravelled with precision and integrity. This is where our team of fraud investigators at <span className="font-semibold">Rosewood Investigations</span> can help.
          </p>
        </div>

        {/* What Is Fraud Investigation? */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What Is Fraud Investigation?</h2>
          <p className="text-gray-700 leading-relaxed">
            Fraud is a pervasive threat that can cripple businesses and harm individuals. It encompasses various deceptive activities aimed at financial gain through dishonest means. Fraudulent activities, such as embezzlement, involve bespoke tax avoidance and evasion, identity theft, and cybercrimes, which can lead to substantial financial losses and damage to an organisation’s reputation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fraud investigation services are a critical component in the battle against fraud. These services involve a systematic and thorough examination of digital footprints, witness statements, and other relevant evidence to detect, prevent, and mitigate the risk of fraudulent activities.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Rosewood Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            At Rosewood Investigations, we bring a wealth of experience and expertise to the field of fraud and criminal investigation. Our team comprises certified and highly qualified professionals with a track record of successful investigations across various industries. We leverage cutting-edge technology and advanced tools to perform criminal investigations, uncover fraudulent activities, and safeguard our clients’ interests.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team’s qualifications include certifications in fraud examination, criminal investigation, forensic accounting practice, and digital forensics. These certifications demonstrate our commitment to maintaining the highest standards of excellence in the industry. We stay at the forefront of technological advancements to effectively combat and investigate the ever-evolving landscape of fraud.
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Key Features Of Our Fraud Investigation Service</h2>
          <p className="text-gray-700 leading-relaxed">
            At Rosewood Investigations, our FIS investigation is crafted with a meticulous and comprehensive approach to address the dynamic challenges of fraud detection and prevention. Our suite of services encompasses a range of specialised techniques, ensuring a thorough examination of every facet of fraudulent activities, which include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li><span className="font-semibold">Data Analysis:</span> We employ advanced data analysis techniques to scrutinise financial records and transactions. Our experts meticulously analyse patterns and anomalies, unveiling hidden irregularities that may indicate fraudulent behaviour. This analytical prowess allows us to identify potential risks and vulnerabilities within financial systems.</li>
            <li><span className="font-semibold">Digital Forensics:</span> In the digital age, fraud often leaves a digital footprint. Our skilled investigators leverage cutting-edge digital forensic techniques to examine electronic evidence such as emails, social media interactions, and digital transactions. This enables us to trace the origins of fraudulent activities and gather crucial digital evidence.</li>
            <li><span className="font-semibold">Confidentiality & Legal Compliance:</span> Understanding the sensitivity of fraud investigations, we prioritise confidentiality throughout the process. Our team operates discreetly to protect our client’s sensitive information. Simultaneously, we adhere to the highest standards of legal and ethical compliance, ensuring that our investigations withstand scrutiny in legal proceedings. Maintaining the integrity of the investigative process is paramount to our commitment to justice and fairness.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Our fraud investigation process follows a step-by-step methodology that leaves no stone unturned. From the initial assessment to evidence gathering and analysis, our legal team always conducts a thorough and systematic investigation of suspected cases. This comprehensive approach ensures that all aspects of the fraudulent activity are uncovered, providing our clients with a clear understanding of the situation.
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
        <RelatedServices currentSlug="fraud-investigation" />
      </div>
    </section>
  );
};

export default FraudInvestigation;

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
      title: 'Background Checking', 
      slug: 'background-checking', 
      img: '/background.jpg',
      desc: 'Thorough checks for employment, partnerships, and relationships with clear, actionable reports.'
    },
    { 
      title: 'Fraud Investigation', 
      slug: 'fraud-investigation', 
      img: '/fraud.jpg',
      desc: 'Comprehensive fraud detection and evidence gathering with rapid response, digital forensics, and detailed reporting.'
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


