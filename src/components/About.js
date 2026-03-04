import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#161616] text-white section">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">About Us</h2>
          <div className="bg-gradient-to-r from-[#1c1c1c] to-[#161616] p-8 md:p-12 rounded-xl border border-[#ff7a00]/20 hover:border-[#ff7a00]/40 transition-all duration-300">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Grill Park is a premier restaurant located in Tiruppur, offering a delightful mix of traditional and modern grill cuisine. With years of culinary expertise, we've perfected the art of grilling to bring you unforgettable flavors.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Our mission is to provide an exceptional dining experience with the highest quality ingredients, expert preparation, and warm hospitality. Every dish is crafted with passion and served with pride. Whether you're here for a casual meal or a special celebration, Grill Park is your destination for grill perfection.
            </p>
          </div>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff9a1f] mb-2">4.7★</div>
              <p className="text-gray-400">Google Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff9a1f] mb-2">4000+</div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff9a1f] mb-2">5+</div>
              <p className="text-gray-400">Years in Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
