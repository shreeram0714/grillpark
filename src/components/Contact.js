import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#161616] text-white section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us & Location</h2>
          <p className="text-gray-400">Visit us or get in touch today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#161616] p-8 rounded-xl border border-[#ff7a00]/20 hover:border-[#ff7a00]/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#ff9a1f]">📍 Address</h3>
              <p className="text-gray-300 leading-relaxed">
                Mission street, Kangayam Rd, Kombai Thottam, Tiruppur
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#161616] p-8 rounded-xl border border-[#ff7a00]/20 hover:border-[#ff7a00]/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#ff9a1f]">📞 Phone</h3>
              <a
                href="tel:08111078630"
                className="text-lg font-semibold text-[#ff9a1f] hover:text-[#ffb144] transition-colors duration-300"
              >
                +91 8111 078 630
              </a>
              <p className="text-gray-400 text-sm mt-2">Available 24/7 for reservations</p>
            </div>

            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#161616] p-8 rounded-xl border border-[#ff7a00]/20 hover:border-[#ff7a00]/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#ff9a1f]">💬 WhatsApp</h3>
              <a
                href="https://wa.me/918111078630?text=Hi%20Grill%20Park%2C%20I%20would%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#ff9a1f] hover:text-[#ffb144] transition-colors duration-300"
              >
                Chat with us
              </a>
              <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="map-container rounded-xl overflow-hidden shadow-2xl border-2 border-[#ff7a00]/20 hover:border-[#ff7a00]/50 transition-all duration-300 h-full min-h-96">
            <iframe
              title="Grill Park Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1475878435157!2d77.34567890000001!3d11.109056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9f94d1234567:0xabcdef1234567!2sGrill%20Park%20Restaurant!5e0!3m2!1sen!2sin!4v1234567890123"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 lg:h-full"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/918111078630?text=Hi%20Grill%20Park%2C%20I%20would%20like%20to%20make%20a%20reservation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#ff7a00] to-[#ff9a1f] hover:from-[#ff9a1f] hover:to-[#ffb144] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(255,122,0,0.4)]"
          >
            Reserve Your Table Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
