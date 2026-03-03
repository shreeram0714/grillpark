import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0f0f0f] text-white sticky top-0 z-40 border-b border-[#ff7a00]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg sm:text-2xl font-bold text-orange-500">Grill Park</div>
        <div className="hidden md:flex space-x-3 lg:space-x-6">
          <a href="#about" className="text-sm lg:text-base hover:text-orange-500 transition">
            About
          </a>
          <a href="#services" className="text-sm lg:text-base hover:text-orange-500 transition">
            Services
          </a>
          <a href="#menu" className="text-sm lg:text-base hover:text-orange-500 transition">
            Menu
          </a>
          <a href="#reviews" className="text-sm lg:text-base hover:text-orange-500 transition">
            Reviews
          </a>
          <a href="#contact" className="text-sm lg:text-base hover:text-orange-500 transition">
            Contact
          </a>
        </div>
        <div className="flex space-x-2">
          <a
            href="tel:08111078630"
            className="bg-orange-500 px-2 sm:px-4 py-2 rounded text-xs sm:text-sm hover:bg-orange-600 transition">
            Call Now
          </a>
          <button
            type="button"
            className="bg-transparent border border-orange-500 px-4 py-2 rounded hover:bg-orange-500"
            onClick={() => {
              // replace with actual ordering link or functionality
              window.location.href = '/order';
            }}
          >
            Order Online
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
