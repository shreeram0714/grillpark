import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      {/* Enhanced gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/50 backdrop-blur-sm" />
      
      {/* Additional radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)'
      }} />

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with fade-in animation */}
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a00] via-[#ffb144] to-[#ff7a00] animate-gradient">Grill Park</span>
          </h1>

          {/* Subheading with fade-in animation */}
          <p className={`text-xl sm:text-2xl md:text-3xl mb-10 md:mb-14 text-gray-100 font-semibold transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Tiruppur's Favourite Destination for Authentic Grill
          </p>

          {/* Rating Section with fade-in animation */}
          <div className={`flex items-center justify-center gap-3 md:gap-4 mb-14 md:mb-20 flex-wrap transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-5xl md:text-6xl text-[#ff9a1f] drop-shadow-lg">★</span>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-lg md:text-xl font-medium text-white">4.7 Rating</span>
              <span className="hidden sm:inline text-lg md:text-xl text-gray-300 font-medium">•</span>
              <span className="text-lg md:text-xl text-gray-300 font-medium">4,000+ Google Reviews</span>
              <span className="hidden sm:inline text-lg md:text-xl text-gray-300 font-medium">•</span>
              <span className="text-lg md:text-xl text-gray-300 font-medium">₹200–400</span>
            </div>
          </div>

          {/* CTA Buttons with fade-in animation */}
          <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a
              href="#menu"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#ff7a00] to-[#ff9a1f] hover:from-[#ff9a1f] hover:to-[#ffb144] px-8 md:px-10 py-4 md:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(255,122,0,0.5)] active:scale-95"
            >
              <span className="mr-2">🍖</span> See Menu
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center bg-transparent border-2 border-[#ff7a00] hover:bg-[#ff7a00] hover:text-black px-8 md:px-10 py-4 md:py-4 rounded-lg text-base sm:text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,122,0,0.4)] active:scale-95"
            >
              <span className="mr-2">📅</span> Book a Table
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </a>
          </div>

          {/* Scroll indicator */}
          {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
