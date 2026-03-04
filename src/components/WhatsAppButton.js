import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '918111078630'; // Indian format: 91 + 8111078630
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Grill%20Park%2C%20I%20would%20like%20to%20make%20a%20reservation.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
