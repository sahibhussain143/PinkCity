import React, { useEffect, useState } from 'react';
import Loading from '../../Layout/Loading';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// New PackageDetailsModal Component
const PackageDetailsModal = ({ packageData, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the opening animation
    setTimeout(() => setIsOpen(true), 10);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Wait for the closing animation to finish before unmounting
    setTimeout(() => onClose(), 300);
  };

  if (!packageData) return null;

  const whatsappMessage = encodeURIComponent(`Hello, I'm interested in the travel package for ${packageData.title}. Could you provide more details?`);
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;



  useEffect(() => {
    // Set a timeout to trigger the opening animation
    setTimeout(() => setIsOpen(true), 10);
  }, []);


const navigate=useNavigate();
  const PackageHandler=()=>{
    navigate("/packages")




  }
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity  duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClose}
    >
      <div
        className={`fixed inset-y-0 left-0 w-full max-w-lg bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        onClick={(e) => e.stopPropagation()} // Prevents the modal from closing when clicking inside
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 className="text-2xl font-bold text-pink-700 px-12">Traveler Details</h2>
            <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>

          <div className="mt-4 flex-grow overflow-y-auto">
            <img
              src={packageData.image}
              alt={packageData.title}
              className="w-full h-64  rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{packageData.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-semibold text-pink-500">{packageData.name}</span> • {packageData.p}
            </p>
            <p className="text-gray-700 leading-relaxed">{packageData.description}</p>
            <div className=" py-8  justify-center items-center text-center">

              <button onClick={PackageHandler}
                className='bg-pink-500 p-2 m-4  w-[300px] rounded-xl font-bold text-xl'>View Package</button>
            </div>


          </div>

          <div className="mt-6 flex flex-col items-center">
            <h4 className="font-semibold mb-2">Connect with us:</h4>
            <div className="flex space-x-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                <FaWhatsapp className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                <FaInstagram className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <FaFacebook className="w-8 h-8" />
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const LandingPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);



  useEffect(() => {
    setTimeout(() => {
      setItems([
        { id: 1, name: "Aman Kumawat", title: "Bikaner, the Desert Jewel", p: "Bikaner Vacation • May 2021", description: "When one thinks of forts and palaces it is Rajasthan that comes to mind.", image: "https://www.shutterstock.com/image-photo/business-portrait-confident-businessman-entrepreneur-600nw-2480068229.jpg" },
        { id: 2, name: "Rahul Kumar", title: "City palace in udaipur, rajasthan, india", p: "Udaipur Vacation • May 2022", description: "Enjoy fresh air and stunning views from the peaks.", image: "https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=" },
        { id: 3, name: "Arjun Kumawat", title: "Udaipur City Palace", p: "Udaipur • May 2023", description: "Panorama of famous romantic luxury Rajasthan Indian tourist landmark - Udaipur City Palace in the evening - panoramic view. Udaipur.", image: "https://media.istockphoto.com/id/1443627298/photo/half-length-portrait-of-successful-male-boss-dressed-in-elegant-suit-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=eHSZdO4IeOi5luzCi4BqitGDz5IZNuJsiD0tJz3NT4w=" },
        { id: 4, name: "Sachin Yadav", title: "Jaipur, the Pink City", p: "Jaipur • May 2024", description: "Jaipur is one of those vintage cities that come alive on a black-and-white film", image: "https://static.vecteezy.com/system/resources/previews/011/565/377/non_2x/vertical-shot-of-business-person-uses-digital-tablet-for-online-communication-and-work-uses-free-internet-at-office-has-positive-expression-dressed-in-formal-black-suit-people-and-occupation-free-photo.JPG" },
        { id: 5, name: "Nikhil Rathore", title: "Jaisalmer, the Golden City", p: "Jaisalmer • May 2024", description: "Jaipur, a bustling modern metropolis, is one of the three points of the Golden Triangle", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIKs0N3p__H2jURIyL04W03bGC5PvORIBVjSq-QYKQrUbAynbOjjbzEAm9dc2yemgEOY&usqp=CAU" },
        { id: 6, name: "Amit Kumawat", title: "City Palace Jaipur", p: "Jaipur • May 2024", description: "The capital and the largest city of the state of Rajasthan, Jaipur is the first planned city of the country and was built in the eighteenth century by Sawai Jai Singh.", image: "https://img.freepik.com/premium-photo/happy-young-business-man-portrait-modern-meeting-office-indoors_530697-13220.jpg" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleViewPackageClick = (packageData) => {
    setSelectedPackage(packageData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };


  return (
    <div className='bg-pink-300 bg-[url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-jplenio-1103970.jpg&fm=jpg")] bg-cover'>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/public/background video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rajasthan</h1>
          <p className="text-lg md:text-xl mb-6">Explore the world with us – adventure awaits.</p>
          <button
           className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white font-semibold transition">
          <a href="/TripInquiry">
            Get Started
            </a> 
          </button>
        </div>
      </div>

      <div className="p-4 max-w-7xl mx-auto pb-12">
        <h1 className="text-center font-bold text-pink-700 text-3xl mb-4">Traveler Testimonials</h1>
        <p className="text-center mb-10 max-w-3xl mx-auto text-black font-semibold">
          Hear from our customers about their unforgettable experiences.
        </p>

        {loading ? (
          <div className="text-center py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 flex flex-col justify-between backdrop-blur-3xl bg-white bg-opacity-30 shadow-xl animate-pulse"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    <div>
                      <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="mb-4 space-y-2">
                    <div className="h-4 w-40 bg-gray-300 rounded"></div>
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                  <div className="mt-auto">
                    <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-lg p-6 hover:shadow-3xl hover:scale-105 duration-300 flex flex-col justify-between backdrop-blur-3xl bg-white bg-opacity-30 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-semibold text-pink-500 text-sm">{item.name}</h2>
                    <p className="text-black text-xs">{item.p}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-pink-700 mb-1">{item.title}</h3>
                  <p className="text-black text-sm">{item.description}</p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleViewPackageClick(item)}
                    className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200 text-sm"
                  >
                    View Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && <PackageDetailsModal packageData={selectedPackage} onClose={handleCloseModal} />}
    </div>
  );
};

export default LandingPage;