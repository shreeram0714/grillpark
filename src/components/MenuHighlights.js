import React from 'react';

const items = [
  { name: 'Chicken Grill', price: '₹250' },
  { name: 'Mutton Chops', price: '₹350' },
  { name: 'Veg Skewers', price: '₹200' },
  { name: 'Seafood Platter', price: '₹400' },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-16 bg-[#161616] text-white section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Menu Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.name} className="bg-[#1c1c1c] p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="font-semibold text-sm sm:text-base">{item.name}</span>
              <span className="text-orange-400 font-bold text-sm sm:text-base">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
