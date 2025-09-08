import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaArrowDown } from "react-icons/fa"; // Import FaTimes and FaArrowDown

const exploreOptions = [
  {
    id: 1,
    title: "Mountain Trails",
    description: "Conquer rugged terrains and explore high-altitude trails with expert guides. This is a longer description to demonstrate the scroll functionality. It will ensure that the popup content exceeds the viewport height on most devices, making the scrollbar and the scroll arrow visible. This tour is perfect for experienced riders seeking a challenge and breathtaking views of the rugged mountain landscapes.",
    image: "https://media.istockphoto.com/id/531024681/photo/biker-riding-on-a-mountain-trail.jpg?s=612x612&w=0&k=20&c=5qKs63LJU_lZwqMFQ9kiQdQueg-rz9GCBkuI-qzFNEw=",
  },
  {
    id: 2,
    title: "Coastal Rides",
    description: "Relax and ride along scenic coastal routes with waves at your side. Enjoy the fresh sea breeze and stunning sunsets on this leisurely tour. It's an ideal choice for families and casual cyclists who want a relaxing and picturesque experience away from the city hustle.",
    image: "https://www.shutterstock.com/image-photo/lima-peru-apr-22-2023-260nw-2618315175.jpg",
  },
  {
    id: 3,
    title: "City Tours",
    description: "Discover the charm of urban cycling through cultural landmarks and hidden alleys. This tour takes you through the heart of the city, exploring historical sites and modern urban art. It is a fantastic way to immerse yourself in the local culture and see the city from a different perspective.",
    image: "https://www.pelago.com/img/products/IN-India/i-bike-inside-jaipur/a3968c6e-5402-4126-b2bd-874733a56061_i-bike-inside-jaipur-medium.jpg",
  },
  {
    id: 4,
    title: "Desert Adventures",
    description: "Pedal across golden dunes and ancient paths under vast skies. This adventurous tour is designed for thrill-seekers who want to experience the serene yet challenging beauty of the desert. The landscape is unique and offers an unforgettable cycling experience.",
    image: "https://www.velouk.net/wp-content/uploads/2025/02/Tom-Pidcock-GC-winner-WEB.jpg",
  },
];

const ExploreCycling = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedOption(null);
    setShowConfirmation(false);
  };

  const navigat = useNavigate();
  const handleEnquiry = () => {
    navigat("/TripInquiry");
  };

  const otherOptions = exploreOptions.filter(
    (option) => option.id !== selectedOption?.id
  );

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pink-500 mb-4">Explore Cycling-Tour</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find your perfect ride — from mountain climbs to coastal cruises. Discover cycling like never before.
          </p>
        </div>

        {/* Explore Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exploreOptions.map((option) => (
            <div
              key={option.id}
              className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
              onClick={() => handleItemClick(option)}
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-48 object-cover hover:scale-110 duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-pink-500 mb-2">{option.title}</h3>
                          <p className="text-gray-600 text-xs">{option.description.substring(0, 60)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Details Popup */}
      {showPopup && selectedOption && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full p-6 relative my-8 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10"
            >
              <FaTimes />
            </button>
            
            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto pr-4">
              {/* Main content */}
              <div className="text-center pb-8 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-pink-500 mb-2">{selectedOption.title}</h2>
                <img
                  src={selectedOption.image}
                  alt={selectedOption.title}
                  className="w-full h-64 object-cover rounded-lg my-4"
                />
                <p className="text-gray-700 text-base mb-6">{selectedOption.description}</p>
                <button
                  className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors"
                  onClick={handleEnquiry}
                >
                  Enquiry Now
                </button>
              </div>

              {/* Other Items Section */}
              {otherOptions.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Other Tours</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherOptions.map((option) => (
                      <div
                        key={option.id}
                        className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
                        onClick={() => handleItemClick(option)}
                      >
                        <img
                          src={option.image}
                          alt={option.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="text-lg font-semibold text-pink-500 mb-1">{option.title}</h4>
                          <p className="text-gray-600 text-xs">{option.description.substring(0, 50)}...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
                <FaArrowDown className="text-gray-500" size={24} />
            </div>

          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative text-center">
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold"
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-bold text-green-600 mb-4">Enquiry Sent! 🎉</h2>
            <p className="text-gray-700 text-lg mb-6">
              Thank you for your interest. We have received your enquiry and will get back to you shortly.
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreCycling;