import React from 'react';

const servicesData = [
  { title: 'All You Can Eat', desc: 'Enjoy unlimited portions of your favorite grills.' },
  { title: 'Private Dining', desc: 'Exclusive rooms for a personalized experience.' },
  { title: 'Kids Menu', desc: 'Delicious, kid-friendly meals.' },
  { title: 'Halal', desc: 'All our meats are Halal certified.' },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[#0f0f0f] text-white section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div key={service.title} className="bg-[#1c1c1c] p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
