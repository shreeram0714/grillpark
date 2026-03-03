import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#161616] text-white section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-sm sm:text-base mb-2">Mission street, Kangayam Rd, Kombai Thottam, Tiruppur</p>
        <p className="text-sm sm:text-base mb-6">Phone: <a href="tel:08111078630" className="text-orange-400 hover:text-orange-500">08111078630</a></p>
        <div className="mt-8 flex justify-center">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1234567890123!2d77.3456789!3d11.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9f1234567890:0xabcdef1234567890!2sGrill%20Park!5e0!3m2!1sen!2sin!4v1234567890123"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
