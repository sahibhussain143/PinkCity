import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const experts = [
  {
    id: '1',
    title: "Mukesh Kumar",
    role: "Lead Tour Guide",
    image: "https://lirp.cdn-website.com/9670a293/dms3rep/multi/opt/Paris+Nice+race+2022-1920w.jpg",
    bio: "With over 10 years of experience, Mukesh leads mountain tours with passion and safety in mind. He has a deep knowledge of all the local trails and is a certified first responder.",
    details: "Mukesh specializes in high-altitude cycling and has guided more than 500 successful tours. His expertise includes route planning, bike maintenance, and team safety.",
        price:"₹9849"

  },
  {
    id: '2',
    title: "Sachin Rao",
    role: "Road Bike Specialist",
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:125,l:0,cw:2400,ch:1350,q:80,w:2400/wbXnzi3vY8LoZav8FsVfzC.jpg",
    bio: "Sachin knows every turn and climb of the region. He'll help you push your limits.",
    details: "A former professional cyclist, Sachin is an expert in road cycling techniques, endurance training, and performance nutrition. He leads our advanced tours and coaching sessions.",
        price:"₹8449"

  },
  {
    id: '3',
    title: "Lena Patel",
    role: "Adventure Planner",
    image: "https://dqh479dn9vg99.cloudfront.net/wp-content/uploads/sites/9/2023/03/Emma_IWD_riding-scaled.jpg",
    bio: "Lena crafts unforgettable multi-day cycling experiences tailored to all skill levels.",
    details: "Lena is a certified adventure guide and logistics expert. She handles all aspects of tour planning, from accommodation and meals to support vehicle coordination and emergency planning.",
    price:"₹5449"

  }
];

const Experts = () => {
  // State to manage the visibility of the modal and which expert is selected
  const [product, setproduct] = useState(null);

  // Function to open the modal and set the selected expert
  const openModal = (expert) => {
    setproduct(expert);
  };

  // Function to close the modal
  const closeModal = () => {
    setproduct(null);
  };
const navigate =useNavigate()
const BookExpertRide = (product) => {
      navigate('/tripinquiry', { state: { product } });


}

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-4">Meet Our Experts</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our passionate team of guides and planners are here to make your cycling tour unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <motion.div
              key={expert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full cursor-pointer"
              onClick={() => openModal(expert)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={expert.image}
                alt={expert.title}
                className="w-full h-64 object-cover hover:scale-110 duration-300"
              />
              <div className="p-6 text-left flex-grow">
                <h3 className="text-xl font-semibold text-pink-500">{expert.title}</h3>
                <p className="text-sm font-bold text-gray-600">{expert.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{expert.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Pop-up */}
      <AnimatePresence>
        {product && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative overflow-hidden"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white p-1 rounded-full text-black hover:text-white hover:bg-black duration-200 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-pink-600">{product.title}</h3>
                                <h3 className="text-xl font-bold text-pink-600"><span className="text-gray-900"> Price: </span> {product.price}</h3>

                <p className="text-lg font-semibold text-gray-700 mt-1">{product.role}</p>
                <p className="text-gray-600 mt-4 text-base leading-relaxed">{product.details}</p>
                <button onClick={() => BookExpertRide(product)}
                    className="mt-6 w-full py-3 px-6 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700 transition">
                  Book a Ride With {product.title }
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experts;