
import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className=' bg-gray-300'>
    <div className="max-w-7xl pt-24 mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">
        Terms and Conditions
      </h1>

      <p className="mb-4">
        Welcome to <strong>Toure and Travels Pink City</strong>. By using our website or booking any travel services
        through our platform, you agree to be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Booking and Payment</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>All bookings are subject to availability and confirmation.</li>
        <li>Prices are subject to change without prior notice.</li>
        <li>Full payment or a specified deposit is required to confirm your booking.</li>
        <li>We accept major credit/debit cards, UPI, and net banking.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cancellations and Refunds</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Cancellations must be made in writing or through our cancellation form.</li>
        <li>Refunds (if applicable) will be processed based on our cancellation policy.</li>
        <li>Non-refundable services (e.g., entry tickets, last-minute bookings) are not eligible for refunds.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Responsibilities</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>We are not responsible for delays, cancellations, or changes due to natural disasters, weather, or political events.</li>
        <li>You are responsible for having valid documents (ID, passport, visa, etc.).</li>
        <li>Travel insurance is recommended and should be purchased by the traveler.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to Terms</h2>
      <p className="mb-4">
        Toure and Travels Pink City reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Information</h2>
      <p>
        For questions or concerns about these Terms, please contact us at: <br />
        <span className="text-pink-600"> <a href="/as"> support@pinkcitytours.com</a> </span>
      </p>
    </div>
    </div>
  );
};

export default TermsAndCondition;
