import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0f0f0f] text-white sticky top-0 z-40 border-b border-[#ff7a00]/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff9a1f] hover:text-[#ffb144] transition-colors duration-300">
           Grill Park
        </div>
        <div className="hidden md:flex space-x-1 lg:space-x-2">
          <a
            href="#about"
            className="px-3 py-2 rounded-lg hover:bg-[#ff7a00]/10 hover:text-[#ff9a1f] transition-all duration-300 text-sm lg:text-base"
          >
            About
          </a>
          <a
            href="#services"
            className="px-3 py-2 rounded-lg hover:bg-[#ff7a00]/10 hover:text-[#ff9a1f] transition-all duration-300 text-sm lg:text-base"
          >
            Services
          </a>
          <a
            href="#menu"
            className="px-3 py-2 rounded-lg hover:bg-[#ff7a00]/10 hover:text-[#ff9a1f] transition-all duration-300 text-sm lg:text-base"
          >
            Menu
          </a>
          <a
            href="#reviews"
            className="px-3 py-2 rounded-lg hover:bg-[#ff7a00]/10 hover:text-[#ff9a1f] transition-all duration-300 text-sm lg:text-base"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="px-3 py-2 rounded-lg hover:bg-[#ff7a00]/10 hover:text-[#ff9a1f] transition-all duration-300 text-sm lg:text-base"
          >
            Contact
          </a>
        </div>
        <div className="flex space-x-2 md:space-x-3">
          <a
            href="tel:08111078630"
            className="bg-gradient-to-r from-[#ff7a00] to-[#ff9a1f] hover:from-[#ff9a1f] hover:to-[#ffb144] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-[0_0_15px_rgba(255,122,0,0.4)]"
          >
            📞 Call Now
          </a>
          <button
            type="button"
            className="bg-transparent border-2 border-[#ff7a00] hover:bg-[#ff7a00] hover:text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300"
            onClick={() => {
              // Open WhatsApp or reservation form
              window.location.href = 'https://wa.me/918111078630?text=Hi%20Grill%20Park%2C%20I%20would%20like%20to%20make%20a%20reservation.';
            }}
          >
            🛎️ Reserve
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
