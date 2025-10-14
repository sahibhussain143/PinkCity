import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  const openWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with actual phone number
    const message = "Hello! I'm interested in knowing more about Pink City!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-700 hover:scale-125 duration-700 hover:rotate-[360deg] text-white p-4 rounded-full shadow-xl transition"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </button>
    </div>
  );
};

export default FloatingButtons;
