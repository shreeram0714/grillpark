import React from 'react';

const items = [
  { name: 'Chicken Grill Platter', price: '₹250', popular: true },
  { name: 'Mutton Chops Special', price: '₹350', popular: true },
  { name: 'Veg Skewers Assorted', price: '₹200', popular: false },
  { name: 'Seafood Platter Deluxe', price: '₹400', popular: false },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-[#161616] text-white section">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Menu Highlights</h2>
          <p className="text-gray-400">Our absolute best grill selections at their finest</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="group menu-item-card bg-gradient-to-br from-[#1c1c1c] to-[#161616] p-5 md:p-6 rounded-xl cursor-pointer relative overflow-hidden hover:scale-105 transition duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a00]/0 via-[#ff9a1f]/5 to-[#ff7a00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff9a1f] transition-colors duration-300 mb-2">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#ff7a00] to-[#ff9a1f] text-white rounded-full">
                      Popular Choice
                    </span>
                  )}
                </div>
                <span className="text-2xl md:text-3xl font-bold text-[#ff9a1f] ml-4 group-hover:scale-110 transition-transform duration-300">
                  {item.price}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff7a00] to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
