import React from 'react';

const reviewsData = [
  { name: 'John Doe', rating: 5, comment: 'Amazing food and service!' },
  { name: 'Jane Smith', rating: 4, comment: 'Great ambiance, will visit again.' },
  { name: 'Ali Khan', rating: 5, comment: 'Best grill in town.' },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-[#0f0f0f] text-white section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Customer Reviews</h2>
        <p className="text-sm sm:text-base mb-4">Rating: 4.7 (396 reviews)</p>
        <div className="space-y-6">
          {reviewsData.map((r, idx) => (
            <div key={idx} className="bg-[#1c1c1c] p-4 sm:p-6 rounded-lg">
              <div className="font-semibold text-sm sm:text-base">{r.name}</div>
              <div className="text-yellow-400 text-sm sm:text-base">{'★'.repeat(r.rating)}</div>
              <p className="text-xs sm:text-sm">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
