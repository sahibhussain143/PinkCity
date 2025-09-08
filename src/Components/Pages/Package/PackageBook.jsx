import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PackageBook = () => {
  // TourCard component defined inside the main component
  const TourCard = ({ event, handleBookNow, handleImageClick }) => (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl">
      <img
        src={event.image[0]}
        alt={event.title}
        onClick={() => handleImageClick(event)}
        className="w-full h-52 object-cover hover:scale-110 duration-300"
      />
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-pink-600 mb-2">{event.title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-pink-600 ">{event.price}</span>
          <span className="text-sm text-gray-500 ml-2">per person</span>
        </div>
        <p className="text-sm text-gray-700 mb-4 font-medium">{event.duration}</p>
        <ul className="text-sm text-gray-600 mb-6 space-y-1">
          {event.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <span className="flex items-center text-sm text-gray-500 mb-4">
          <FaLocationDot className="m-1" />
          {event.location}
        </span>
        <button
          onClick={() => handleBookNow(event)}
          className=" w-full p-2 bg-pink-500 text-white hover:bg-pink-700 font-semibold rounded-xl"
        >
          Book Now
        </button>
      </div>
    </div>
  );

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

     const handleBookNow = (event) => {
        // Save the entire event object to localStorage
        localStorage.setItem("currentBooking", JSON.stringify(event));
        navigate("/bookingform");
    };
  const handleImageClick = (event) => {
    setSelectedImage(event.image[0]);
    setRelatedImages(event.image);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
    setRelatedImages([]);
  };

  const events = [
    {
      id: "1",
      title: "Udaipur Lake & Palace Tour",
      price: "₹8900",
      duration: "2 Days / 3 Nights",
      image: [
       
        "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
        "https://www.laurewanders.com/wp-content/uploads/2022/05/Famous-Asian-landmarks-22.jpg",
        "https://images.unsplash.com/photo-1575994532957-773da2f83eb1?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMHBhbGFjZSUyMHVkYWlwdXIlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
        "https://www.shrisanwariyatours.com/wp-content/uploads/2021/08/the-sky-sunset-lights-river-home-hd-wallpaper-preview.jpg",
        "https://assets-news.housing.com/news/wp-content/uploads/2022/07/04223747/featured-compressed-1.jpg"
      ],
      features: ["Mandawa, Jodhapur & Jaipur", "Cultural Experience", "Historical Sights"],
      location: "Udaipur"
    },
    {
      id: "2",
      title: "Royal Rajasthan Escape",
      price: "₹10500",
      duration: "5 Days / 4 Nights",
      image: [
        "https://www.rajasthanexpeditions.com/images/golden-triangle-delhi-agra-jaipur-tours.jpg",
        "https://i.ytimg.com/vi/9o57q8KMbPc/sddefault.jpg",
         "https://ignitetravelsolution.com/wp-content/uploads/2025/01/The-Royal-Heritage-of-Rajasthan.jpg",
         "https://static2.tripoto.com/media/filter/tst/img/3442/TripDocument/img_1368.jpg",
         "https://www.holidaymonk.com/wp-content/uploads/2024/09/Royal-Rajasthan-Experience-Tour-Package-1.webp",
      ],
      features: ["Jaisalmer & Jodhpur", "Camel Safari", "Thar Desert Camp"],
      location: "Jodhpur",
    },
    {
      id: "3",
      title: "Golden Triangle Tour",
      price: "₹72000",
      duration: "10 Days / 9 Nights",
      image: [
        "https://www.laurewanders.com/wp-content/uploads/2022/05/Famous-Asian-landmarks-22.jpg",
        "https://www.rajasthanexpeditions.com/images/golden-triangle-delhi-agra-jaipur-tours.jpg",
       "https://thepinkcityholidays.com/wp-content/uploads/2020/11/GOLDEN-TRIANGLE-TOUR-packages.jpg" ,
       "https://assets.simplotel.com/simplotel/image/upload/x_0%2Cy_145%2Cw_4500%2Ch_2532%2Cc_crop%2Cq_80%2Cfl_progressive/w_900%2Ch_506%2Cf_auto%2Cc_fit/neemrana-fort-palace---15th-century-delhi-jaipur-highway/1b._NEEMRANA_TWILIGHT_te3oev",

       
      ],
      features: ["Udaipur, Jodhpur & Jaipur", "Luxury Hotels", "Lake Pichola Boating"],
      location: "Jaipur",
    },
    {
      id: "4",
      title: "Heritage Forts & Palaces",
      price: "₹15000",
      duration: "7 Days / 6 Nights",
      image: [
        "https://majestictajtours.com/wp-content/uploads/2023/09/Golden-triangle-tour.jpg",
        "https://www.rajasthanexpeditions.com/images/golden-triangle-delhi-agra-jaipur-tours.jpg",
        "https://majestictajtours.com/wp-content/uploads/2023/09/Golden-triangle-tour.jpg",
        "https://assets.simplotel.com/simplotel/image/upload/x_0%2Cy_145%2Cw_4500%2Ch_2532%2Cc_crop%2Cq_80%2Cfl_progressive/w_900%2Ch_506%2Cf_auto%2Cc_fit/neemrana-fort-palace---15th-century-delhi-jaipur-highway/1b._NEEMRANA_TWILIGHT_te3oev",
        "https://whc.unesco.org/uploads/thumbs/site_0247_0007-1200-630-20221003103314.jpg",
       
      ],
      features: ["Mandawa, Jodhapur & Jaipur", "Cultural Experience", "Historical Sights"],
      location: "Jaipur",
    },
    {
      id: "5",
      title: "Desert Explorer",
      price: "₹18500",
      duration: "5 Days / 4 Nights",
      image: [
        "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=",
        "https://www.gokitetours.com/wp-content/uploads/2024/12/10-Best-Things-To-Do-In-Rajasthan-For-An-Amazing-Desert-Vacation.webp",
       "https://cdn.kimkim.com/files/a/content_articles/featured_photos/071da82f6895b78e597e9cb5ae4aa9dd810fb7df/big-9ba233e5fd732b7019539597f6247416.jpg",
       "https://indiathrills.com/wp-content/uploads/2020/07/Camel-Safari-In-Rajasthan-1280.jpg",
       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/c6/09/6d/sand-dunes.jpg?h=500&s=1&w=500",
      ],
      features: ["Jaisalmer & Jodhpur", "Camel Safari", "Thar Desert Camp"],
      location: "Jaisalmer",
    },
    {
      id: "6",
      title: "Royal Rajasthan",
      price: "₹22000",
      duration: "10 Days / 9 Nights",
      image: [
        "https://royalcaravan.com/wp-content/uploads/2024/01/discover-rajasthan-tour.jpg",
        "https://www.laurewanders.com/wp-content/uploads/2022/05/Famous-Asian-landmarks-22.jpg",
        "https://majestictajtours.com/wp-content/uploads/2023/09/Golden-triangle-tour.jpg",
        "https://www.shikhar.com/blog/wp-content/uploads/2019/02/Mehrangarh-Fort.jpg",
        "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/KR_CityPalace.jpg",
        
      ],
      features: ["Udaipur, Jodhpur & Jaipur", "Luxury Hotels", "Lake Pichola Boating"],
      location: "Rajasthan",
    },
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-200">
      <section className="w-full max-w-7xl -mt-16 mx-auto py-16 cursor-pointer px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center text-gray-500 text-xl py-16">
            <div className="text-center mb-12 space-y-4">
              <div className="mx-auto bg-gray-300 rounded-lg h-12 w-3/4 animate-pulse"></div>
              <div className="mx-auto bg-gray-300 rounded-lg h-6 w-1/2 animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array(6).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col h-full animate-pulse"
                >
                  <div className="bg-gray-300 rounded-t-xl h-48 w-full" />
                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-1/2" />
                    <div className="h-12 bg-gray-300 rounded w-full" />
                    <div className="h-5 bg-gray-300 rounded w-1/3" />
                  </div>
                  <div className="mt-auto">
                    <div className="h-10 bg-gray-300 rounded-b-xl w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="min-h-screen font-sans text-gray-800">
            <main className="container mx-auto px-4 md:px-8 py-16">
              <section id="tours" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 relative">
                  <span className="relative z-10 text-pink-700">Our Popular Packages</span>
                  <br />
                  <div className="inline-block cursor-not-allowed bg-pink-600 hover:bg-pink-700 text-white px-5 py-1 rounded-full font-semibold text-sm mb-2 shadow-md">
                    Recently Added
                  </div>
                  <span className="absolute w-20 h-1 bg-yellow-500 rounded-full bottom-[-10px] left-1/2 -translate-x-1/2"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event) => (
                    <TourCard
                      key={event.id}
                      event={event}
                      handleBookNow={handleBookNow}
                      handleImageClick={handleImageClick}
                    />
                  ))}
                </div>
              </section>
            </main>
          </div>
        )}
      </section>

      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-white/30 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col lg:flex-row">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 z-10"
            >
              <FaTimes size={20} />
            </button>
            <div className="flex-1 p-4 flex items-center justify-center overflow-hidden">
              <img src={selectedImage} alt="Full view" className="max-h-full w-auto object-contain rounded-lg shadow-md" />
            </div>
            <div className="lg:w-1/4 p-4 bg-gray-100 flex-shrink-0 lg:flex-grow-0 overflow-y-auto">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">More Images!</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 xs:grid-cols-3 md:grid-cols-4 xl-grid-cols-2  lg:grid-cols-1 gap-1">
                {relatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full cursor-pointer overflow-hidden rounded-md shadow-sm border-2 border-transparent transition-all hover:border-pink-500"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-24 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageBook;