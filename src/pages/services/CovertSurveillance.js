import React from 'react';
import { Link } from 'react-router-dom';

const CovertSurveillance = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/covert.jpg')",
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
            Covert Investigations & Surveillance
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Discreet surveillance
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Rosewood Investigations stands as a beacon of trust, integrity and expertise in the world of covert investigations. Our team of seasoned professionals, known as “Covert Investigations Specialists,” excels in the art and practice of uncovering hidden truths in a discreet and meticulous manner. We understand that sometimes the most sensitive matters require a delicate touch, and that’s where we come in.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Covert investigations play a vital role in a multitude of contexts, from corporate security issues and legal proceedings to personal matters and criminal investigations. The ability to operate discreetly can make all the difference in uncovering critical information, protecting assets, and preserving reputations. Our services are invaluable to clients seeking to make informed decisions, mitigate risks, and bring clarity to complex situations.
          </p>
        </div>

        {/* What Are Covert Investigations? */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What Are Covert Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            Covert investigations, in essence, involve the discreet collection of information, data, or evidence without the subject’s knowledge. This approach allows us to observe, record, and analyse activities without the risk of alerting the target.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Rosewood Investigations specialises in a variety of covert investigation types, including corporate espionage prevention, infidelity investigations, and much more. Whether it’s a corporation safeguarding its trade secrets or an individual seeking answers in a personal matter, our covert investigation expertise is a powerful tool in the pursuit of truth.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Rosewood Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            At Rosewood Investigations, we boast a team of highly qualified and experienced professionals who are dedicated to delivering results. Our investigators hold certifications, undergo a course of rigorous training, and maintain industry affiliations to stay at the forefront of investigative techniques. With a track record of successful case studies and notable projects, we have consistently demonstrated our ability to unravel complex mysteries.
          </p>
        </div>

        {/* Our Process */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Process</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Initial Consultation</h3>
            <p className="text-gray-700 leading-relaxed">
              We begin our service with a thorough consultation, during which we listen attentively to your needs, concerns, and objectives. This stage is vital in tailoring our services to your specific service requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Investigation Phase</h3>
            <p className="text-gray-700 leading-relaxed">
              Our team swings into action, employing cutting-edge technology, intelligence and techniques to gather information discreetly. We leave no stone unturned in our pursuit of the truth.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Reporting and Documentation</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide you with detailed reports and documentation that encapsulate our findings. Transparency, integrity and accuracy are paramount in our reporting process.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Client Communication</h3>
            <p className="text-gray-700 leading-relaxed">
              Throughout the course of the investigation, we maintain open lines of communication with the company and our clients. You’ll stay informed and engaged every step of the way.
            </p>
          </div>
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
        <RelatedServices currentSlug="covert-surveillance" />
      </div>
    </section>
  );
};

export default CovertSurveillance;

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
      title: 'Covert Surveillance', 
      slug: 'covert-surveillance', 
      img: '/covert.jpg',
      desc: 'Discreet operations with modern techniques to capture reliable photo/video evidence for personal or corporate cases.'
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


