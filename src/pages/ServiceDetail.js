import React from 'react';
import { useParams, Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Personal Investigation',
    slug: 'personal-investigation',
    img: '/individual.jpg',
    summary:
      'Our team of highly skilled detectives handles online dating inquiries, matrimonial cases, and missing person matters with complete discretion.',
    details: [
      'Background checks, activity verification, and lifestyle analysis.',
      'Discreet surveillance with actionable photo/video evidence.',
      'Clear reporting and guidance on next steps.',
    ],
  },
  {
    id: 2,
    title: 'Covert Surveillance',
    slug: 'covert-surveillance',
    img: '/covert.jpg',
    summary:
      'Discreet, professional surveillance operations using modern techniques and equipment for personal and corporate cases.',
    details: [
      'Static and mobile surveillance tailored to your case.',
      'Time-stamped photo/video evidence collection.',
      'Experienced mixed-gender teams for optimal coverage.',
    ],
  },
  {
    id: 3,
    title: 'Fraud Investigation',
    slug: 'fraud-investigation',
    img: '/fraud.jpg',
    summary:
      'Comprehensive fraud detection and investigation for individuals and businesses with rapid response and thorough reporting.',
    details: [
      'Digital footprint analysis and evidence preservation.',
      'Financial tracing and asset checks where lawful.',
      'Coordination with authorities when appropriate.',
    ],
  },
  {
    id: 4,
    title: 'Missing Persons',
    slug: 'missing-persons',
    img: '/missing.jpg',
    summary:
      'Professional missing person tracing within the UK and internationally using advanced search methods and networks.',
    details: [
      'Open-source intelligence and field inquiries.',
      'Network checks and discreet contact strategies.',
      'Regular updates and sensitivity to family needs.',
    ],
  },
  {
    id: 5,
    title: 'Background Checking',
    slug: 'background-checking',
    img: '/background.jpg',
    summary:
      'Detailed background checks for employment, partnerships, and relationships to support informed decisions.',
    details: [
      'Identity, address, employment, and education verifications.',
      'Adverse media and social presence review.',
      'Clear, structured reporting with key findings.',
    ],
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-24 pb-20 container mx-auto px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you are looking for doesn\'t exist.</p>
          <Link to="/services" className="text-cyan-600 font-semibold hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-600">{service.summary}</p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section>
        <div
          className="w-full h-72 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.img})` }}
        />
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What\'s Included</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              {service.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                Enquire Now
              </Link>
              <Link
                to="/services"
                className="border border-gray-300 hover:border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;


