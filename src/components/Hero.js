import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Grill Park</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2">Authentic Grill Experience in Tiruppur</p>
        <p className="text-xs sm:text-sm md:text-base mb-6">
          Rating: <span className="text-yellow-400 font-semibold">4.7 ★</span> • Price: <span className="font-semibold">₹200–400</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 w-full sm:w-auto">
          <a href="#menu" className="bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-lg font-semibold hover:bg-orange-600 transition text-center">
            See Menu
          </a>
          <a href="#contact" className="bg-transparent border border-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-lg font-semibold hover:bg-orange-500 transition text-center">
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
