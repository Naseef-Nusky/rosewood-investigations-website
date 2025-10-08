import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Personal Investigation',
      desc:
        'Our team of highly skilled detectives is proficient in various investigations, ranging from online dating inquiries to missing person and matrimonial cases. You can rely on their expertise to assist you effectively.',
      img: '/individual.jpg',
      cta: 'Enquire Now',
    },
    {
      id: 2,
      title: 'Covert Surveillance',
      desc:
        'Our team of skilled detectives, both female and male, will provide you with essential photo and video evidence relevant to your case.',
      img: '/covert.jpg',
      cta: 'Enquire Now',
    },
    {
      id: 3,
      title: 'Fraud Investigation',
      desc:
        'The prevalence of online fraud in the UK results in significant financial losses amounting to billions of pounds annually. If you have been affected by online fraud, contact us without delay for immediate assistance.',
      img: '/fraud.jpg',
      cta: 'Enquire Now',
    },
    {
      id: 4,
      title: 'Missing Persons',
      desc:
        'In the UK, a person is reported missing every 90 seconds. With the expertise of our professionals, we can aid you in tracing individuals both within the country and internationally.',
      img: '/missing.jpg',
      cta: 'Enquire Now',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We Help Individuals & Businesses Just Like You. Take control of your narrative today. 
            With our unwavering commitment to your cause and our unparalleled expertise, you're never alone in your search for answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;