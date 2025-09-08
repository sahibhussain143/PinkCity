import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaSearch,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaUser,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { events as allEvents } from '../Pages/Home/AllPlaces';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
};

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // 👇 New state to track if the search input is focused on mobile
  const [searchFocused, setSearchFocused] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedSearch = search.trim().toLowerCase();
      
      if (!trimmedSearch) {
        onSearch(null);
        return;
      }

      const filteredResults = allEvents.filter(event =>
        event.title.toLowerCase().includes(trimmedSearch) ||
        event.description.toLowerCase().includes(trimmedSearch) ||
        event.category.toLowerCase().includes(trimmedSearch)
      );
      
      onSearch(filteredResults);
    }, 500); 

    return () => clearTimeout(timer);
  }, [search, onSearch]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const navLinks = [
    { to: '/', label: 'Home'  },
    { to: '/about', label: 'About' },
    { to: '/packages', label: 'Packages' },
    { to: '/testmonials', label: 'Testmonials' },
    { to: '/cycling', label: 'Cycling Tour' },
    { to: '/gellary', label: 'Gellary' },
    { to: '/confirmbooking', label: 'Bookings' },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/10 shadow-lg backdrop-blur-2xl' : 'bg-white/40 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 👇 Logo and name are visible on mobile, so they are not hidden */}
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-1 text-gray-800 hover:text-pink-600 transition-colors"
          >
            <img
              src="/images/pinkcity-icon.png"
              alt="Pink City Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold hidden xl:inline-block text-pink-600">
              Pink City
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${isActive
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Search..."
                className="pl-3 pr-8 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent w-40 lg:w-52 transition-all"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch />
              </div>
            </div>
            <NavLink
              to="/Login"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium hover:from-pink-600 hover:to-pink-700 transition-colors shadow-sm"
            >
              <FaUser className="text-xs" />
              <span>Login</span>
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200 shadow-inner">
              <div className="relative mb-2">
                <input
                  type="text"
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Search..."
                  className="block w-full pl-3 pr-8 py-2 border bg-transparent border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  // 👇 Add these event handlers
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <FaSearch />
                </div>
              </div>
              {/* 👇 Conditionally render the links based on searchFocused state */}
              {!searchFocused && (
                <>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${isActive
                          ? 'bg-pink-50 text-pink-600'
                          : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-base font-medium hover:from-pink-600 hover:to-pink-700"
                  >
                    <FaSignInAlt />
                    <span>Login / Register</span>
                  </NavLink>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;