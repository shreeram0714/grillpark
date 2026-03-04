import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] to-[#ffb144]">Grill Park</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 text-gray-200">
            Tiruppur's Favourite Destination for Authentic Grill
          </p>
          <div className="flex items-center justify-center gap-2 mb-8 md:mb-12 flex-wrap">
            <span className="text-4xl md:text-5xl text-[#ff9a1f]">★</span>
            <span className="text-xl md:text-2xl font-bold text-white">4.7 Rating</span>
            <span className="text-sm md:text-base text-gray-300">• 4,000+ Reviews</span>
            <span className="text-sm md:text-base text-gray-300">• ₹200–400</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="#menu"
              className="bg-gradient-to-r from-[#ff7a00] to-[#ff9a1f] hover:from-[#ff9a1f] hover:to-[#ffb144] px-8 py-3 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(255,122,0,0.4)]"
            >
              🍖 See Menu
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-[#ff7a00] hover:bg-[#ff7a00] hover:text-black px-8 py-3 rounded-lg text-base sm:text-lg font-bold transition-all duration-300"
            >
              📅 Book a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
