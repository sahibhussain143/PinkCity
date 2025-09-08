


import React, { useState, useEffect } from 'react';
import { FaL, FaLocationDot, FaMapLocation } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

// --- Mock Data ---
const tourGuides = [
  {
    id: 1,
    name: 'Aaliya Khan',
    title: 'Jaipur Rajasthan',
    bio: 'An expert guide with a deep love for Rajasthan\'s rich history. Aaliya specializes in cultural walking tours of Jaipur\'s majestic forts and vibrant bazaars.',
    image: 'https://i.pinimg.com/736x/0f/1a/fc/0f1afc2974aeb713e66978f95fb3f39c.jpg',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop',
    duration: '7 Days, 6 Nights',
    price: '₹1,200 per person',
    joined: 'Oct 2, 2023',
    locations: ['Jaipur', 'Udaipur', 'Mandawa (Shekhawati)', 'Jaisalmer'],
    rating: 4.9,
    location:'Jaipur',
  },
  {
    id: 2,
    name: 'Nikhil Sharma',
    title: 'Jodhpur Rajasthan',
    bio: 'Nikhil is an experienced guide who knows every corner of the "Blue City." He leads immersive tours focusing on Jodhpur\'s architecture and local life.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Umaid_bhawan.jpg/330px-Umaid_bhawan.jpg',
    profileImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2670&auto=format&fit=crop',
    duration: '5 Days, 4 Nights',
    price: '₹1,600 per person',
    joined: 'Jun 2, 2024',
    locations: ['Jaipur', 'Bikaner', 'Ajmer', 'Jodhpur'],
    rating: 4.7,
        location:'Jodhpur',

  },
  {
    id: 3,
    name: 'Monika Rathore',
    title: 'Udaipur Rajasthan',
    bio: 'Monika offers luxury boat tours on Lake Pichola and historical tours of Udaipur\'s magnificent palaces. Her passion for the city shines through every story she tells.',
    image: 'https://assets.architecturaldigest.in/photos/63a848708df6b9fdb924d677/16:9/w_2560%2Cc_limit/Untitled%2520design%2520(5).png',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcERdN9-v3rs7s5rYX3PdbWYoRcz1U4Rodw&s',
    duration: '8 Days, 7 Nights',
    price: '₹1,980 per person',
    joined: 'Apr 2, 2022',
    locations: ['Udaipur', 'Jaipur', 'Pushkar', 'Mount Abu'],
    rating: 5.0,
   location:'Udaipur',

  },
  {
    id: 4,
    name: 'Sachin Saini',
    title: 'Sisodia Rani Garden Jaipur',
    bio: 'A specialist in historical gardens and architecture, Sachin provides serene tours of Jaipur\'s Sisodia Rani Garden and other hidden green spaces.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3azbvHj-FF1x50QFXWNNDpMhr-e7tBSf2w&s',
    profileImage: 'https://e1.pxfuel.com/desktop-wallpaper/431/667/desktop-wallpaper-handsome-boy-for-fb-indian-boy-pic-thumbnail.jpg',
    duration: '3 Days, 2 Nights',
    price: '₹1,100 per person',
    joined: 'Jan 2, 2025',
    locations: ['Jaipur', 'Delhi', 'Agra'],
    rating: 4.8,
        location:' Jaipur',

  },
];

const GuiderProfileModal = ({ guiderData, onClose, onSelectOtherGuide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10);
  }, [guiderData]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose(), 300);
  };

  const handleBookTour = () => {
    // ✅ Store all guide data for booking page
    localStorage.setItem('currentBooking', JSON.stringify({
      title: guiderData.title,
      image: guiderData.image,
      price: guiderData.price,
      duration: guiderData.duration,
      description: guiderData.bio,
      name: guiderData.name,
      profileImage: guiderData.profileImage,
      joined: guiderData.joined,
      rating: guiderData.rating,
      locations: guiderData.locations,
            location: guiderData.location,

    }));
    navigate('/bookingform');
  };

  if (!guiderData) return null;

  const otherGuides = tourGuides.filter(g => g.id !== guiderData.id);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`fixed inset-0 overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-b-3xl shadow-xl max-w-5xl mx-auto w-full relative p-6 pt-16">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>

          {/* Main content */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col md:w-1/2">
              <img src={guiderData.image} alt={guiderData.title} className="w-full h-64 rounded-xl mb-4 object-cover shadow-lg hover:scale-110 duration-300 overflow-hidden " />
              <div className="text-left mt-4">
                <h3 className="text-3xl font-bold mb-2 text-pink-500">{guiderData.title}</h3>
                   <p className="text-gray-600 text-sm flex line-clamp-2"><FaLocationDot className='flex m-1'/> {guiderData.location}</p>
                <p className="text-gray-600 leading-relaxed">{guiderData.bio}</p>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 mt-4 md:mt-0">
              <div className="flex items-center gap-4 border-b pb-4 mb-4">
                <img src={guiderData.profileImage} alt={guiderData.name} className="w-16 h-16 rounded-full object-cover border-4 border-pink-500 hover:rotate-45 duration-300  hover:border-red-500" />
                <div>
                  <h4 className="font-bold text-xl text-pink-500">{guiderData.name}</h4>
                  <p className="text-sm text-gray-600">Joined: {guiderData.joined}</p>
                  <p className="text-sm text-gray-600">Rating: {guiderData.rating} ⭐</p>
                </div>
              </div>

              <div className="mt-8 text-left">
                <h4 className="text-xl font-bold mb-2 text-pink-500">About this Tour</h4>
                <p className="text-gray-700 leading-relaxed">
                  This tour provides an unforgettable journey through Rajasthan. Travel with <b className='text-pink-500'>{guiderData.name}</b> and enjoy every moment.
                </p>
                <div className="mt-6 flex flex-col space-y-2">
                  <p className="text-lg font-semibold text-pink-500">Duration: <span className="font-normal text-gray-700 ">{guiderData.duration}</span></p>
                  <p className="text-lg font-semibold text-pink-500">Price: <span className="font-normal text-gray-700">{guiderData.price}</span></p>
                  <p className="text-lg font-semibold text-pink-500">Locations: <span className="font-normal text-gray-700">{guiderData.locations.join(', ')}</span></p>
                </div>
                <button
                  onClick={handleBookTour}
                  className="mt-8 w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-700  duration-500   "
                >
                  Book a tour with {guiderData.name}
                </button>
              </div>
            </div>
          </div>

          <hr className="my-10" />

          {/* Other Guides */}
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Other Guides You Might Like</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherGuides.map(guide => (
              <div
                key={guide.id}
                onClick={() => onSelectOtherGuide(guide)}
                className="group cursor-pointer bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="flex flex-col items-center p-6">
                  <img className="h-20 w-20 rounded-full object-cover border-2 hover:scale-125 hover:-rotate-[360deg] duration-700 hover:boreder-pink-900 border-pink-500" src={guide.profileImage} alt={guide.name} />
                  <h3 className="mt-4 text-lg font-bold text-pink-500 group-hover:text-pink-700">{guide.name}</h3>
                  <p className="text-sm text-gray-600">{guide.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuider, setSelectedGuider] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  const handleCardClick = (guider) => {
    setSelectedGuider(guider);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGuider(null);
  };

  const handleSelectOtherGuide = (guider) => {
    setSelectedGuider(guider);
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <div className="p-4 pt-24 max-w-7xl mx-auto pb-24">
        <h2 className="text-center font-semibold text-pink-500 ">Expert Travel Guides</h2>
        <h1 className="text-center font-bold text-4xl mb-4 text-pink-500">Discover Your Next Adventure</h1>
        <p className="text-center mb-10 max-w-3xl mx-auto text-gray-700">
          Immerse yourself in our collection of handcrafted travel guides written by locals and seasoned explorers.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-pink-600 p-4">Featured Guides</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tourGuides.map((guide) => (
            <div
              key={guide.id}
              className="group cursor-pointer transform transition duration-300 bg-white border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105"
            >
                          <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover transform transition duration-200 group-hover:scale-110" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 text-pink-500 group-hover:text-pink-500">{guide.title}</h3>
                                <p className="text-gray-600 text-sm flex line-clamp-2"> 
                                <FaLocationDot className='m-1'/>
                                 {guide.location}
                                 
                                 
                                 </p>

                <p className="text-gray-600 text-sm line-clamp-2">{guide.bio}</p>

                <hr className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={guide.profileImage} alt={guide.name} className="w-12 h-12 rounded-full hover:scale-125 hover:rotate-[360deg] object-cover duration-1000 border-2 hover:border-pink-900 border-pink-500" />
                    <div>
                      <h4 className="font-bold text-md text-pink-500">{guide.name}</h4>
                      <p className="text-xs text-gray-500">Rating: {guide.rating} ⭐</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCardClick(guide)}
                    className="transform transition duration-200 text-sm font-semibold text-pink-500 hover:text-pink-700 hover:scale-105 flex items-center gap-1"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <GuiderProfileModal guiderData={selectedGuider} onClose={handleCloseModal} onSelectOtherGuide={handleSelectOtherGuide} />}
    </div>
  );
};

export default App;
