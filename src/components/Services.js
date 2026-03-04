import React from 'react';

const servicesData = [
  { title: 'All You Can Eat', desc: 'Enjoy unlimited portions of your favorite grills and dishes.' },
  { title: 'Private Dining', desc: 'Exclusive rooms for a personalized and memorable dining experience.' },
  { title: 'Kids Menu', desc: 'Delicious and nutritious, kid-friendly grill meals.' },
  { title: 'Halal Certified', desc: 'All our meats are authentic Halal certified and ethically sourced.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0f0f0f] text-white section">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience dining excellence with our curated selection of premium services</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.title}
              className="service-card group relative bg-gradient-to-br from-[#1c1c1c] to-[#161616] "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a00]/0 to-[#ff9a1f]/0 group-hover:from-[#ff7a00]/10 group-hover:to-[#ff9a1f]/10 rounded-lg transition-all duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff7a00] to-[#ff9a1f] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">★</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#ff9a1f] transition-colors duration-300">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff7a00] to-[#ff9a1f] w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
