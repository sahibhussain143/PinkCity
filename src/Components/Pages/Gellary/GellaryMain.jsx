// src/Components/Pages/AllPlaces.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ---------------- Data ----------------
const events = [
  {
    id: 1,
    title: "Hawa Mahal",
    location: "Jaipur",
    images: [
      "https://assets.vogue.in/photos/5ce41ea8b803113d138f5cd2/16:9/w_1920,h_1080,c_limit/Jaipur-Travel-Shopping-Restaurants.jpg",
       "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/13636b6b74e482cc84d93527beb9ff3110d387722c7f2cd2e428868a91d46dcb.jpg",
       "https://media.istockphoto.com/id/2202348156/photo/woman-looking-at-hawa-mahal-in-jaipur-india-from-balcony.jpg?s=612x612&w=0&k=20&c=HNh8nAqm5qJuI9DYj3-bWqJ0kjA-l7zoxid9k_U4vTc=",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRablfM5vZ_cBlDoErRyPnF93RziM9bS6O8Og&s",

    ],
  },


    {
    id: 2,
    title: "Jantar Mantar",
    location: "Jaipur",
    images: [
      "https://media.istockphoto.com/id/531303920/photo/astronomical-instrument-at-jantar-mantar-observatory.jpg?s=612x612&w=0&k=20&c=UCk8Ib1j7VYgz2d4J56hNU5lVvDmrraUskv2I53_veY=",
       "https://www.shutterstock.com/image-photo/jaipur-india-february-16-2016-260nw-2474347597.jpg",
      "https://i.pinimg.com/736x/c6/b5/05/c6b505c1484a7376fb9811334eab9288.jpg",
      
    ],
  },
      {
    id: 3,
    title: "Amer fort",
    location: "Jaipur",
    images: [
          "https://www.shutterstock.com/image-photo/amber-fort-maota-lake-sunset-600nw-1333357256.jpg",
          "https://i.pinimg.com/736x/f0/28/21/f02821280fb7a4e9d10dcbfc33894cdb.jpg",
          "https://www.india.com/wp-content/uploads/2018/08/Amer-Fort-photo-1.jpg",
          "https://www.walkwithajay.com/wp-content/uploads/2024/12/20241026_103455.jpg",
    ],
  },
      {
    id: 4,
    title: "birla mandir",
    location: "Jaipur",
    images: [
      "https://media.istockphoto.com/id/469793612/photo/birla-mandir-jaipur.webp?a=1&b=1&s=612x612&w=0&k=20&c=-PRzCZ2iB2X_pk9t3G7WaQZRpEZK84otz6KRzo1ssi4=",
      "https://media.istockphoto.com/id/2223107480/photo/birla-mandir-jaipur-lakshmi-narayan-temple-is-a-hindu-temple-located-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=INfqaUoCOCW-JEo8UwwaAGxgiYasBskXsv3B_-KQbCU=",
      "https://media.istockphoto.com/id/1287047140/photo/birla-mandir-hindu-temple-in-jaipur-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=qpnqLOkKbcKLsq-zxRzSBNV12xr2Lt6ysCftJw_LYnE=",
      "https://media.istockphoto.com/id/1149428115/photo/birla-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=17iK-UfvNrcG4j4bGNGSg7FO3h8hJv9KCx7rce5T3SU=",
      "https://media.istockphoto.com/id/1469214048/photo/birla-mandir-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ncMzYtYIvze5E8MTQDPc9EDtIONwtvJGaPn2xr2fY-Y=",
    ],
  },
      {
    id:5,
    title: "Blue City",
    location: "Jodhpur",
    images: [
      "https://rishikeshdaytour.com/blog/wp-content/uploads/2024/09/Sunrise-in-Rajasthan-Blue-city-of-Jodhpur.jpg",
      "https://i.ytimg.com/vi/C3YdsEiVN_k/hqdefault.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/7e/f0.jpg",
      " https://mrsbackpackersdiary.wordpress.com/wp-content/uploads/2015/08/jodhpur-city.jpg?w=1000",
     
      "https://www.pelago.com/img/products/IN-India/jodhpur-blue-city-heritage-walk-with-licensed-guide/3e3e499d-e98f-4cfd-961f-91be22665b18_jodhpur-blue-city-heritage-walk-with-licensed-guide.jpg                 "
    ],
  },
      {
    id: 6,
    title: "Mehrangarh Fort",
    location: "Jodhpur",
    images: [
      "",
      "",
      "",
      "",
      "",
    ],
  },
      {
    id: 7,
    title: "Osian Temples ",
    location: "Jodhpur",
    images: [
      "",
      "",
      "",
      "",
      "",
    ],
  },
   
  
      {
    id: 8,
    title: "Umaid Bhawan Palace ",
    location: "Jodhpur",
    images: [
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    id: 9,
    title: "City palace",
    location: "Udaipur",
    images: [
      "https://www.shutterstock.com/image-photo/amber-fort-maota-lake-sunset-600nw-1333357256.jpg",
      
               "",
               "",
               "",
               "",
    ],
  },
  {
    id: 10,
    title: "Lake Pichola",
    location: "Udaipur",
    images: [
               "",
               "",
               "",
               "",
               "",
    ],
  },
  {
    id: 11,
    title: "Fateh Sagar Lake",
    location: "Udaipur",
    images: [
               "",
               "",
               "",
               "",
               "",
    ],
  },
  {
    id: 12,
    title: "Jag mandir",
    location: "Udaipur",
    images: [
               "",
               "",
               "",
               "",
               "",
    ],
  },

  {
    id: 13,
    title: "Mandawa Fort",
    location: "Mandawa",
    images: [
              "",
               "",
               "",
               "",
               "",
    ],
  },
  {
    id: 14,
    title: "Havelis of Mandawa",
    location: "Mandawa",
    images: [
                   "",
               "",
               "",
               "",
               "",
    ],
  },
  {
    id: 15,
    title: "Chokhani Double Haveli",
    location: "Mandawa",
    images: [
               "",
               "",
               "",
               "",
               "",
    ],
  },
  {
    id: 16,
    title: "Gulab Rai Haveli",
    location: "Mandawa",
    images: [
      "https://media2.thrillophilia.com/images/photos/000/356/271/original/1601474848_shutterstock_1053573509.jpg?w=753&h=450&dpr=1.5",
      "https://mandawa.org.uk/wp-content/uploads/2019/09/gulab-rai-haveli.jpg",
      "https://cdn.getyourguide.com/img/tour/e7a57a070f6e1f0e.jpeg/145.jpg",
    ],
  },
];
// ---------------- Component ----------------
const AllPlaces = () => {
  const [category, setCategory] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter events by selected category
  const filteredEvents =
    category === "All" ? events : events.filter((e) => e.location === category);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % relatedImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? relatedImages.length - 1 : prev - 1
    );
  };

  const handleImageClick = (event) => {
    setRelatedImages(event.images);
    setSelectedImage(event.images[0]);
    setCurrentImageIndex(0);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
    setRelatedImages([]);
    setCurrentImageIndex(0);
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["All", "Jaipur", "Jodhpur", "Udaipur", "Mandawa"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border transition ${
              category === cat
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => {
              setCategory(cat);
              handleClosePopup(); // Close popup when switching category
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEvents.map((event, i) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
            onClick={() => handleImageClick(event)}
          >
            <img
              src={event.images[0]} // Use the first image from the array for the thumbnail
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
              <h3 className="text-white font-bold text-lg">{event.title}</h3>
              <p className="text-white text-sm">{event.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full bg-white/20 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col lg:flex-row">
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:rotate-[360deg] duration-700 hover:bg-red-700 z-10"
              >
                <FaTimes size={20} />
              </button>

              <div className="flex-1 p-4 flex items-center justify-center overflow-hidden relative">
                <img
                  src={relatedImages[currentImageIndex]}
                  alt="Full view"
                  className="max-h-full w-auto object-contain rounded-lg shadow-md"
                />

                {/* Navigation arrows for the popup image */}
              
              </div>

              <div className="lg:w-1/4 p-4 bg-white/20 backdrop-blur-xl flex-shrink-0 lg:flex-grow-0 overflow-y-auto">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
                  More Images
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {relatedImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full cursor-pointer overflow-hidden duration-300  shadow-sm border-2 border-transparent transition-all hover:border-pink-500"
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover hover:scale-110 duration-300 "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AllPlaces;
