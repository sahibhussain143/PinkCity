// src/pages/PrivacyPolicy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    
    <div className=" bg-gray-300">
    <div className="max-w-7xl mx-auto px-6 py-12 pt-24 text-gray-700">
      <h1 className="text-4xl font-bold mb-8 text-pink-500">Privacy Policy</h1>

      <p className="mb-6">
        This Privacy Policy explains how <strong>Toure and Travels Pink City</strong> collects, uses, and protects your information when you visit our website or use our services. By using our site, you agree to the terms below.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. What We Collect</h2>
        <p>
          We may collect personal details such as your name, email, contact number, and travel preferences when you fill
          out forms, make a booking, or communicate with us. We also collect anonymous data like browser type and pages visited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use It</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To confirm bookings and send trip details</li>
          <li>To improve our website and services</li>
          <li>To send promotional offers (only if you opt-in)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Data Sharing</h2>
        <p>
          We don’t sell your data. We only share necessary information with trusted travel partners (hotels, guides, etc.)
          and payment processors to complete your bookings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Your Choices</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You can update or delete your data by contacting us.</li>
          <li>You can unsubscribe from our emails at any time.</li>
          <li>You can control cookies through your browser settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Security</h2>
        <p>
          We use industry-standard methods to protect your data. However, no system is 100% secure. Please use strong passwords and avoid sharing personal info over unsecured networks.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Policy Updates</h2>
        <p>
          We may update this policy occasionally. Any changes will be posted here with a new effective date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about your privacy, please email us at: <br />
          <a href="/privacy@pinkcitytours.com" className="text-pink-500 hover:underline">
            privacy@pinkcitytours.com
          </a>
        </p>
      </section>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
