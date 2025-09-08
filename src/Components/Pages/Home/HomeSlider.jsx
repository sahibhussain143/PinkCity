import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/albert-hall-museum-jaipur-rajasthan-4-attr-hero?qlt=82&ts=1742196164604",
    alt: "JAipur",
    title: "Jaipur",
    description:
      "Albert Hall Museum, established 1887 in Jaipur’s Ram Niwas Garden, is Rajasthan’s oldest museum.",
  },
  {
    image:
      "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Ffe.jpg%2Ffe-1723635911987.jpg&w=2048&q=75",
    alt: "Jaisalmer",
    title: "Jaisalmer ",
    description:
      "Jaisalmer, popularly called the Golden City of India, is a magical",
  },
  {
    image: "https://www.easeindiatrip.com/blog/wp-content/uploads/2025/03/Maharashtra-Mandwa-Parasailing-Above-the-Sea.jpg",
    alt: "Mandwa",
    title: "  Mandwa",
    description:
      "Located just a ferry ride away from Mumbai, Mandwa is a charming coastal village that offers a perfect blend of relaxation, adventure,",
  },
  {
    image:
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/04/the-lake-palace-udaipur.jpg",
    alt: "Lake Palace",
    title: "Udaipur ",
    description:
      "This tour is perfect for anyone who wants to see all Udaipur’s highlights in a single day.",
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative max-w-full h-screen overflow-hidden bg-black/90">
      {/* Slider Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ opacity: 0, scale: 1.1, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -50 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Gradient overlay only on desktop */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content (Desktop Only) */}
      <motion.div
        className="hidden md:block absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center max-w-xl px-4 sm:px-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="backdrop-blur-xs bg-black/50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            {slides[currentSlide].description}
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-80 transition text-white rounded-full font-semibold text-lg shadow-md">
            Explore Now
          </button>
        </div>
      </motion.div>

      {/* Titles List (Desktop Only) */}
      <div className="hidden md:flex absolute top-1/2 left-6 -translate-y-1/2 z-20 flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`text-left px-3 py-2 rounded-lg transition-all duration-300 ${
              index === currentSlide
                ? "text-pink-400 font-bold border-l-4 border-pink-500 bg-black/40 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
