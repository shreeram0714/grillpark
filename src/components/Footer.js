import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-8 sm:py-12 border-t border-[#ff7a00]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-xs sm:text-sm text-white font-semibold mb-2">
            &copy; {new Date().getFullYear()} Grill Park. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 italic">
            Demo Concept Website – Created for presentation purposes.
          </p>
        </div>
        <div className="border-t border-gray-700 pt-4 mt-4">
          <p className="text-xs text-gray-600 text-center">
            📍 Mission street, Kangayam Rd, Kombi Thottam, Tiruppur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
