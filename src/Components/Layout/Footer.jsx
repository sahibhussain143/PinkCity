import React, { useState, useEffect } from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const [email, setEmail] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' | 'error'

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setMessage('Please enter a valid email.');
      setMessageType('error');
      return;
    }

    if (subscribedEmails.includes(trimmedEmail)) {
      setMessage('This email is already subscribed.');
      setMessageType('error');
    } else {
      setSubscribedEmails([...subscribedEmails, trimmedEmail]);
      setMessage('Success! Now check your email to confirm your subscription!');
      setMessageType('success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#272727] to-[#313131] text-white pt-12 pb-6 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Brand + Social */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight"> <span className='text-pink-500 font-bold'>Pink City </span> | Explore</h2>
          <p className="text-pink-100">
            Discover the vibrant culture and heritage of Jaipur, the Pink City of India.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-pink-300 transition-colors">
              <FaInstagram className="text-xl hover:scale-150 duration-300 hover:rotate-90 hover:text-pink-700" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-pink-300 transition-colors">
              <FaTwitter className="text-xl hover:scale-150 duration-300 hover:rotate-45  hover:text-blue-600" />
            </a>
            <a
              href="jhguh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-pink-300 transition-colors"
            >
              <FaYoutube className="text-xl hover:scale-150 duration-300 hover:-rotate-45 hover:text-red-700" />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-300 transition-colors hover:ml-2 duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-pink-300 transition-colors  hover:ml-2 duration-500">About</a></li>
            <li><a href="/packages" className="hover:text-pink-300 transition-colors  hover:ml-2 duration-500">Packages</a></li>
            <li><a href="/testmonials" className="hover:text-pink-300 transition-colors  hover:ml-2 duration-500">Testimonials</a></li>
            <li><a href="/cycling" className="hover:text-pink-300 transition-colors  hover:ml-2 duration-500">Cycle Tour</a></li>
                        <li><a href="/gellary" className="hover:text-pink-300 transition-colors  hover:ml-2 duration-500">Gellary</a></li>

                        <li><a href="/booking" className="hover:text-pink-300 transition-colors  hover:ml-2 duration-500">Your Booking </a></li>

          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <p>123 Heritage Lane, Jaipur, Rajasthan 302001</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone />
              <a href="tel:+918875156232" className="hover:text-pink-300 transition-colors">
                +91 8875156232
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope />
              <a
                href="mailto:info@pinkcityexplore.com"
                className="hover:text-pink-300 transition-colors"
              >
support@pinkcitytours.com              </a>
            </div>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-pink-100">Subscribe for travel tips and event updates</p>
          <div className="max-w-md mt-4">
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded font-medium hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!email.trim()}
              >
                Subscribe
              </button>
            </form>

            {message && (
              <div
                className={`mt-4 p-3 rounded text-sm shadow-md transition-all duration-300 ${
                  messageType === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-12 pt-6 border-t border-pink-500 text-center text-pink-200 text-sm"
      >
        <p>© {currentYear} Pink City | Explore. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/privacypolicy" className="hover:text-white text-white transition-colors">Privacy Policy</a>
          <a href="/termsandcondition" className="hover:text-white text-white transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;









