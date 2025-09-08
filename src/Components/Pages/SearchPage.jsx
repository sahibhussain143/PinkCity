import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

// Component for displaying images in a modal
const ImageModal = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-3xl w-full max-h-[80vh] bg-white rounded-lg overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          &times;
        </button>
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full h-auto object-contain max-h-[70vh]"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const SearchPage = ({ filteredEvents }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const handleBookNow = (event) => {
    localStorage.setItem("currentBooking", JSON.stringify(event));
    navigate("/bookingform");
  };

  const handleImageClick = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
  };

  if (filteredEvents === null || filteredEvents === undefined) {
    return (
      <section className="w-full max-w-7xl mx-auto py-16 cursor-pointer px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            🔍 Search Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please enter a search query.
          </p>
        </div>
      </section>
    );
  }

  if (filteredEvents.length === 0) {
    return (
      <section className="w-full max-w-7xl mx-auto py-16 cursor-pointer px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            🔍 Search Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No results found. Please try a different search.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto py-16 cursor-pointer px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          🔍 Search Results
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We found {filteredEvents.length}{" "}
          {filteredEvents.length === 1 ? "result" : "results"} matching your
          search.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEvents.map((event, i) => (
          <motion.div
            key={event.id}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
          >
            <div className="relative">
              <img
                src={Array.isArray(event.image) ? event.image[0] : event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-xl cursor-pointer"
                loading="lazy"
                onClick={() => Array.isArray(event.image) ? handleImageClick(event.image) : null}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-t-xl">
                <h3 className="text-white font-bold text-lg">{event.title}</h3>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center text-gray-500 mb-3">
                <span className="mr-2 text-sm text-gray-700 font-bold">
                  {event.location}
                </span>
                <a
                  href={event.locationUrl}
                  className="p-2 flex text-pink-600 font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLocationArrow className="mt-1 text-pink-600 mr-1 text-sm" />
                  view map
                </a>
              </div>
              <p className="text-sm text-gray-500 flex-grow">
                {event.description}
              </p>
              <span className="text-pink-600 font-semibold pt-2">
                Price: {event.price}
              </span>
            </div>
            <button
              onClick={() => handleBookNow(event)}
              className="mt-auto w-full p-2 bg-pink-500 text-white hover:bg-pink-700 font-semibold rounded-b-xl"
            >
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
      {isModalOpen && <ImageModal images={modalImages} onClose={handleCloseModal} />}
    </section>
  );
};

export default SearchPage;