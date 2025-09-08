import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const tours = [
    {
        title: "Pink City Sunrise Ride",
        image: "https://ik.imagekit.io/08ltcz2tbnu/store/Jaipur/1665032648479.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665067068309",
        description: "Experience Jaipur’s majestic sunrise while cycling through historic forts and vibrant streets.",
        details: "Start your day with a magical cycling tour as the sun rises over Jaipur. This route takes you through the Old City, past Amer Fort, and provides a unique perspective of the city's waking moments. It's a low-difficulty ride perfect for all ages and skill levels.",
    },
    {
        title: "Nahargarh Fort Adventure",
        image: "https://media.tacdn.com/media/photo-m/1280/2c/91/9c/df/caption.jpg",
        description: "Challenge yourself with an uphill ride to Nahargarh Fort and enjoy panoramic views of the city.",
        details: "For the more adventurous rider, this tour involves a challenging ascent to the top of Nahargarh Fort. Your reward is a breathtaking 360-degree view of Jaipur. The descent is thrilling and the experience is unforgettable. This tour is recommended for riders with intermediate to advanced fitness levels.",
    },
    {
        title: "Rural Village Exploration",
        image: "https://res.cloudinary.com/enchanting/q_80,f_auto,c_lfill,x_w_mul_0.44,y_h_mul_0.41,g_xy_center,w_360,h_270/exodus-web/2022/07/Cycling-in-Mongolia.jpg",
        description: "Ride into the countryside and witness authentic Rajasthani culture and village life.",
        details: "Escape the city and pedal through serene landscapes and local villages. This tour offers a glimpse into rural Rajasthani life, allowing you to interact with locals and learn about their traditions. The terrain is mostly flat, making it a relaxed and cultural experience for everyone.",
    },
];

export default function MaestroCycle() {

     const navigate=useNavigate();
    const EnquiryHandler =()=>{
     navigate("/TripInquiry")
    }
    // State to manage the pop-up modal
    const [selectedTour, setSelectedTour] = useState(null);

    // Function to open the modal
    const openModal = (tour) => {
        setSelectedTour(tour);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedTour(null);
    };

    return (
        <div className="bg-white text-gray-800 mt-4">
            {/* Hero Section */}
            <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/cyclists-out-racing-along-country-600nw-1425367382.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Jaipur Cycling Tours</h1>
                    <p className="text-xl text-white max-w-xl text-center">Discover the Pink City on two wheels – adventure, culture, and unforgettable views await!</p>
                </div>
            </div>

            {/* Tour Cards */}
            <section className="py-16 px-6 lg:px-20 bg-gray-50">
                <h2 className="text-3xl font-semibold text-center mb-12 text-pink-500">Our Popular Tours</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            onClick={() => openModal(tour)}
                        >
                            <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover hover:scale-110 duration-300 ease-in-out" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-pink-500 mb-2">{tour.title}</h3>
                          <p className="text-gray-600 text-xs">{tour.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal Pop-up from Bottom */}
            <AnimatePresence>
                {selectedTour && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal} // Close modal on overlay click
                    >
                        <motion.div
                            className="bg-white rounded-t-xl shadow-2xl max-w-2xl w-full relative"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-64 object-cover rounded-t-xl" />
                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-pink-600">{selectedTour.title}</h3>
                                <p className="text-gray-600 mt-2 text-base leading-relaxed">{selectedTour.details}</p>
                                <button
                                
                                onClick={EnquiryHandler}
                                className="mt-6 w-full py-3 px-6 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700 transition">
                                    Enquiry
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}