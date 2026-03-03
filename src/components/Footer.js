import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-4 sm:py-6 border-t border-[#ff7a00]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Grill Park. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
