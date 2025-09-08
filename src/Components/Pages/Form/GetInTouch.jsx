import React, { useState } from 'react';
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const variants = {
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } },
};

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Load existing customers from local storage
    const savedCustomers = JSON.parse(localStorage.getItem("registeredCustomers")) || [];
    
    const newCustomer = {
      // Generate a new ID based on the existing customers
      id: savedCustomers.length > 0 ? Math.max(...savedCustomers.map(c => c.id)) + 1 : 1,
      name: formData.name,
      mobile: formData.number,
      email: formData.email,
      city: formData.city || 'Unknown',
      blocked: false,
    };

    // Add the new customer to the list
    const updatedCustomers = [...savedCustomers, newCustomer];

    // Save the updated list back to local storage
    localStorage.setItem("registeredCustomers", JSON.stringify(updatedCustomers));
    
    // Clear the form fields after submission
    setFormData({ name: '', number: '', email: '', city: '', message: '' });
    
    alert('Customer registered successfully!');
    
    // The RegisteredCustomer component will automatically re-render and display the new data
    // because it fetches data from local storage on mount.
  };

  return (
    <div className="pt-24 pb-8">
      <div className="p-12 flex items-center justify-center bg-gray-100">
        <motion.div
          className="flex w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg flex-col lg:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Left Form */}
          <motion.div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-10 lg:mb-0" variants={variants.left}>
            <h2 className="text-2xl text-center text-pink-700 mb-6 font-bold">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <motion.div variants={variants.fadeIn}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="Full Name"
                  required
                />
              </motion.div>
              <motion.div variants={variants.fadeIn}>
                <label>Mobile</label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="Mobile Number"
                  required
                />
              </motion.div>
              <motion.div variants={variants.fadeIn}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="Email"
                  required
                />
              </motion.div>
              <motion.div variants={variants.fadeIn}>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="City"
                />
              </motion.div>
              <motion.div variants={variants.fadeIn}>
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="Message"
                />
              </motion.div>
              <motion.div variants={variants.fadeIn}>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Info */}
          <motion.div className="hidden lg:block w-full lg:w-1/2 pl-0 lg:pl-4" variants={variants.right}>
            <h1 className="text-2xl font-semibold text-pink-500 text-center">Get in Touch</h1>
            <p className="mt-4">
              Connect with us for adventures and tours guidance. Fill out the form, and our team will assist you promptly.
            </p>
            <div className="mt-6">
              <FaPhoneAlt className="inline text-pink-500 mr-2" /> +91 800067579
            </div>
            <div className="mt-2">
              <FaMailBulk className="inline text-pink-500 mr-2" /> info@pinkcityadventures.com
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Registered Customer List - now self-contained */}
    </div>
  );
}