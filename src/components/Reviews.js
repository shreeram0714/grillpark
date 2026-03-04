import React from 'react';

const reviewsData = [
  { name: 'Priya.S', rating: 5, comment: 'Amazing food and service! Ambiance is perfectly done.' },
  { name: 'Arun Kumar', rating: 4, comment: 'Great ambiance, excellent grilled items, will visit again.' },
  { name: 'Mohammed Irfan', rating: 5, comment: 'Best grill experience in town, highly recommended!' },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-24 bg-[#0f0f0f] text-white section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="text-5xl text-[#ff9a1f]">★</span>
              <div>
                <p className="text-2xl md:text-3xl font-bold">4.7 Rating</p>
                <p className="text-sm md:text-base text-gray-400">from 4,000+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviewsData.map((r, idx) => (
            <div
              key={idx}
              className="review-card group"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-[#ff9a1f] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-base md:text-lg text-white mb-2">{r.name}</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
