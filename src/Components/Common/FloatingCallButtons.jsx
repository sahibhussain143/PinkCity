// src/Components/Common/FloatingCallButtons.jsx
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const FloatingCallButtons = () => {
  const callNow = () => {
    const phoneNumber = '1234567890'; // Replace with your actual number
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999] -mt-24">
      <button
  onClick={callNow}
  className="
    bg-blue-500 
    hover:bg-blue-700
    text-white
    p-4
    rounded-full
    shadow-xl
    transition
    animate-fullfloat
  "
  title="Call Now"
  aria-label="Call Now"
>
  <FaPhone size={22} />
</button>

    </div>
  );
};

export default FloatingCallButtons;
