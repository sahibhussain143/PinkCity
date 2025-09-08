import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// ---------------- Data ----------------
const events = [
    {
        id: 1,
        title: "Hawa Mahal",
        location: "Jaipur",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cx2ZVR4lfVdJEbftEyRDRRXmtdbzHTbxzw&s",
            "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/13636b6b74e482cc84d93527beb9ff3110d387722c7f2cd2e428868a91d46dcb.jpg",
            "https://media.istockphoto.com/id/2202348156/photo/woman-looking-at-hawa-mahal-in-jaipur-india-from-balcony.jpg?s=612x612&w=0&k=20&c=HNh8nAqm5qJuI9DYj3-bWqJ0kjA-l7zoxid9k_U4vTc=",
            // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRablfM5vZ_cBlDoErRyPnF93RziM9bS6O8Og&s",
            // "https://thumbs.dreamstime.com/b/india-rajasthan-jaipur-pink-city-hawa-mahal-palace-winds-people-photographing-smartphones-360430736.jpg",
        ],
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhB_h3dfRT-tnRqAo4pqkprqbILyyy-FknQ&s",
        profileName: "Rakshinda Sharma",
        profileLocation: "Jaipur",
        rating: "4.6",
        description: "An avid traveler who loves exploring historical monuments and capturing their beauty.",
    },
    {
        id: 2,
        title: "Jantar Mantar",
        location: "Jaipur",
        images: [
            "https://media.istockphoto.com/id/531303920/photo/astronomical-instrument-at-jantar-mantar-observatory.jpg?s=612x612&w=0&k=20&c=UCk8Ib1j7VYgz2d4J56hNU5lVvDmrraUskv2I53_veY=",
            "https://www.shutterstock.com/image-photo/jaipur-india-february-16-2016-260nw-2474347597.jpg",
            "https://i.pinimg.com/736x/c6/b5/05/c6b505c1484a7376fb9811334eab9288.jpg",
            "https://www.theindia.co.in/blog/wp-content/uploads/2023/12/Jantar-Mantar-Jaipur.jpg",
            "https://static2.tripoto.com/media/filter/tst/img/1891611/TripDocument/1615119200_img_20210214_152120.jpg",
        ],
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkLJ1LRtJZMMIHoc4E4A5g8TX-ZYvud_lj9RKlIZLGnE7JUWa_FDd-GJPRqr0y6_-Q7E&usqp=CAU",
        profileName: "Priyanshi Sharma",
        profileLocation: "Jaipur",
        rating: "3.9",
        description: "Enjoys cultural sites and learning about ancient astronomy.",
    },
    {
        id: 3,
        title: "Amer fort",
        location: "Jaipur",
        images: [
            "https://www.shutterstock.com/image-photo/amber-fort-maota-lake-sunset-600nw-1333357256.jpg",
            "https://i.pinimg.com/736x/f0/28/21/f02821280fb7a4e9d10dcbfc33894cdb.jpg",
        ],
        profileImage: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/386119a3179a86d52d9b6ca8e60c73600672b78b1017e51af23c30a26034ff1c.jpeg",
        profileName: "Chehak Jain",
        profileLocation: "Delhi",
        rating: "4.8",
        description: "A history enthusiast with a passion for royal architecture.",
    },
    {
        id: 4,
        title: "Birla Mandir",
        location: "Jaipur",
        images: [
            "https://media.istockphoto.com/id/469793612/photo/birla-mandir-jaipur.webp?a=1&b=1&s=612x612&w=0&k=20&c=-PRzCZ2iB2X_pk9t3G7WaQZRpEZK84otz6KRzo1ssi4=",
            "https://media.istockphoto.com/id/2223107480/photo/birla-mandir-jaipur-lakshmi-narayan-temple-is-a-hindu-temple-located-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=INfqaUoCOCW-JEo8UwwaAGxgiYasBskXsv3B_-KQbCU=",
            "https://media.istockphoto.com/id/1287047140/photo/birla-mandir-hindu-temple-in-jaipur-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=qpnqLOkKbcKLsq-zxRzSBNV12xr2Lt6ysCftJw_LYnE=",
            "https://media.istockphoto.com/id/1149428115/photo/birla-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=17iK-UfvNrcG4j4bGNGSg7FO3h8hJv9KCx7rce5T3SU=",
            "https://media.istockphoto.com/id/1469214048/photo/birla-mandir-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ncMzYtYIvze5E8MTQDPc9EDtIONwtvJGaPn2xr2fY-Y=",
        ],
        profileImage: "https://viagenseoutrashistorias.com.br/wp-content/uploads/2020/01/amber-fort-jaipur-942x529.jpg",
        profileName: "Manisha Rani",
        profileLocation: "Mumbai",
        rating: "3.7",
        description: "Finds peace and tranquility in visiting beautiful temples.",
    },
    {
        id: 5,
        title: "Blue City",
        location: "Jodhpur",
        images: [
            "https://rishikeshdaytour.com/blog/wp-content/uploads/2024/09/Sunrise-in-Rajasthan-Blue-city-of-Jodhpur.jpg",
            "https://i.ytimg.com/vi/C3YdsEiVN_k/hqdefault.jpg",
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/7e/f0.jpg",
            "https://mrsbackpackersdiary.wordpress.com/wp-content/uploads/2015/08/jodhpur-city.jpg?w=1000",
            "https://www.pelago.com/img/products/IN-India/jodhpur-blue-city-heritage-walk-with-licensed-guide/3e3e499d-e98f-4cfd-961f-91be22665b18_jodhpur-blue-city-heritage-walk-with-licensed-guide.jpg",
        ],
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO4__oEbLGuv0hSs_lbg7rqYMUFZFmPe8iqfFkRhJKADoi2RESoXhKEo8nhPdYA3Z8Vg&usqp=CAU",
        profileName: "Ishika Gupta",
        profileLocation: "Jodhpur",
        rating: "5.0",
        description: "Loves exploring vibrant cities and their unique architecture.",
    },
    {
        id: 6,
        title: "Mehrangarh Fort",
        location: "Jodhpur",
        images: [
            "https://www.holidify.com/images/cmsuploads/compressed/Mehrangarh-fort-jodhpur_20170829143734.jpg",
            "https://www.rajasthan.gov.in/Static/Tourism/mehrangarh-fort-jodhpur.jpeg",
            "https://www.rajasthantourplanner.com/wp-content/uploads/2020/07/Mehrangarh-Fort-of-Jodhpur-1.jpg",
        ],
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe82jftMPH_7MXcViHkls_Pk0XTqZJg8RRzvsUD2awMaO1qGepPCZxflKj8v-DLwrXTKU&usqp=CAU",
        profileName: "Tanisha Jain",
        profileLocation: "Jaipur",
        rating: "4.4",
        description: "A keen photographer who enjoys capturing majestic forts and palaces.",
    },
];

const second = [
    {
        id: 7,
        title: "Osian Temples ",
        location: "Jodhpur",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Osian_Temple.jpg/1280px-Osian_Temple.jpg",
            "https://www.rajasthan.gov.in/Static/Tourism/osian.jpeg",
            "https://i0.wp.com/rajasthantrip.co/wp-content/uploads/2021/01/osian.jpg?fit=1920%2C1080&ssl=1",
        ],
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06n30f-VIqQfvdgW1jDUXPI9_BupDSyLaaYiD65uC2oRGyGqWIVab9x32Dn2yO7ydjsI&usqp=CAU",
        profileName: "Monika Gupta",
        profileLocation: "Rajasthan",
        rating: "4.1",
        description: "Interested in ancient Indian architecture and religious sites.",
    },
    {
        id: 8,
        title: "Umaid Bhawan Palace ",
        location: "Jodhpur",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUvEV4qKn_lxckDDd01lspzo2a9djhy4ZqQ&s",
            "https://i0.wp.com/rajasthantrip.co/wp-content/uploads/2021/01/Umaid-Bhawan-Palace-Jodhpur.jpg?fit=1920%2C1080&ssl=1",
            "https://upload.wikimedia.org/wikipedia/commons/a/aa/Umaid_Bhawan_Palace%2C_Jodhpur.jpg",
        ],
        profileImage: "https://www.kalitravel.net/blog/wp-content/uploads/jaipur-hawa-mahal-wind-palace.jpg",
        profileName: "Riya Agarwal",
        profileLocation: "Jaipur",
        rating: "4.9",
        description: "Enjoys luxury travel and experiencing royal heritage.",
    },
    {
        id: 9,
        title: "City palace",
        location: "Udaipur",
        images: [
            "https://udaipurtaxiservice.com/wp-content/uploads/2023/10/Udaipur-City-Palace.jpg",
            "https://udaipurtaxiwala.in/wp-content/uploads/2023/10/City-Palace-Udaipur.jpg",
            "https://udaipurtaxiservice.com/wp-content/uploads/2023/10/City-Palace-Museum.jpg",
        ],
        profileImage: "https://www.bizevdeyokuz.com/wp-content/uploads/jaipur-hindistan-duygu.jpg",
        profileName: "Priya Singh",
        profileLocation: "Jaipur",
        rating: "3.8",
        description: "Admires grand palaces and beautiful waterfronts.",
    },
    {
        id: 10,
        title: "Lake Pichola",
        location: "Udaipur",
        images: [
            "https://www.holidify.com/images/cmsuploads/compressed/Udaipur_Lake_Pichola_20180419142416_20180419142443.jpg",
            "https://www.tourism-of-india.com/blog/wp-content/uploads/2022/07/Lake-Pichola-Udaipur-7.jpg",
            "https://www.tourism-of-india.com/blog/wp-content/uploads/2022/07/Lake-Pichola-Udaipur-8.jpg",
        ],
        profileImage: "https://miviajealaindia.com/wp-content/uploads/2025/03/isabel-gil-en-jaipur.png.webp",
        profileName: "Khushi Ramola",
        profileLocation: "Jaipur",
        rating: "4.9",
        description: "Loves serene lake views and boat rides.",
    },
];

// ---------------- Component ----------------
const GellaryLike = () => {
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);

    // Handlers for Image Popup
    const handleImageClick = (event) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0);
        setIsImagePopupOpen(true);
    };

    const handleCloseImagePopup = () => {
        setIsImagePopupOpen(false);
        setSelectedEvent(null);
        setCurrentImageIndex(0);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedEvent.images.length - 1 : prev - 1
        );
    };

    // Handlers for Profile Popup
    const handleProfileImageClick = (event) => {
        setSelectedProfile(event);
        setIsProfilePopupOpen(true);
    };

    const handleCloseProfilePopup = () => {
        setIsProfilePopupOpen(false);
        setSelectedProfile(null);
    };

    const renderCard = (event) => (
        <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-2xl rounded-2xl bg-white/30 shadow-2xl h-[300px] max-w-[250px] items-center group flex flex-col"
        >
            <div className="relative w-full h-[190px] flex-shrink-0 cursor-pointer">
                <img
                    src={event.profileImage}
                    alt={event.profileName}
                    className="absolute z-10 top-4 hover:rotate-[360deg] duration-700 hover:scale-125 left-4 w-16 h-16 rounded-full object-cover border-2 hover:border-white border-pink-500 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents image popup from opening
                        handleProfileImageClick(event);
                    }}
                />
                <img
                    src={event.images[0]}
                    alt={event.title}
                    onClick={() => handleImageClick(event)}
                    className="w-full h-full rounded-t-2xl object-cover"
                />
            </div>
            <div className="p-3 flex flex-col items-center text-center">
                <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.location}</p>
            </div>
        </motion.div>
    );

    return (
        <div className="bg-gradient-to-r from-pink-500 via-black/50 to-pink-500 min-h-screen">
            <section className="flex flex-col items-center w-full max-w-7xl mx-auto py-12 px-4">
                {/* First Grid Section */}
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
                    {events.map(renderCard)}
                </div>

                {/* Second Grid Section */}
                <div className="grid justify-center text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 items-center max-w-6xl mx-auto py-12 px-4">
                    {second.map(renderCard)}
                </div>

                {/* --- Image Gallery Popup --- */}
                <AnimatePresence>
                    {isImagePopupOpen && selectedEvent && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="relative bg-white/20 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-4xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <button
                                    onClick={handleCloseImagePopup}
                                    className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 duration-700 hover:rotate-[360deg] hover:bg-red-700 z-10"
                                >
                                    <FaTimes size={20} />
                                </button>
                                {/* Main Image and Navigation */}
                                <div className="relative w-full lg:w-3/4 flex-shrink-0">
                                    <img
                                        src={selectedEvent.images[currentImageIndex]}
                                        alt={selectedEvent.title}
                                        className="w-full h-auto object-contain p-8 max-h-[75vh]"
                                    />
                                    {selectedEvent.images.length > 1 && (
                                        <>
                                        
                                        
                                        </>
                                    )}
                                </div>
                                {/* Details and Thumbnails */}
                                <div className="lg:w-1/4 p-4 bg-white/20 b flex-shrink-0 overflow-y-auto">
                                   
                                    <h4 className="text-lg font-semibold mb-3 text-gray-800">
                                        More from this Location
                                    </h4>
                                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                        {selectedEvent.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className={`w-full cursor-pointer overflow-hidden duration-300 shadow-sm rounded-lg border-2 transition-all hover:border-pink-500 ${
                                                    currentImageIndex === index ? "border-pink-500 scale-105" : "border-transparent"
                                                }`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-full h-24 object-cover hover:scale-110 duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- Profile Popup --- */}
                <AnimatePresence>
                    {isProfilePopupOpen && selectedProfile && (
  <motion.div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="relative bg-white/20 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden p-6 max-w-full w-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <button
        onClick={handleCloseProfilePopup}
        className="absolute top-2 right-2 text-white hover:rotate-[360deg] duration-700  bg-gray-800 rounded-full p-2 hover:bg-red-700 z-10"
      >
        <FaTimes size={20} />
      </button>

      {/* Flex row for image + content */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
        {/* Image on left */}
        <img
          src={selectedProfile.profileImage}
          alt={selectedProfile.profileName}
          className="w-48 h-48 rounded-xl object-cover border-4 border-pink-500 hover:border-black duration-700 hover:scale-90 shadow-lg"
        />

        {/* Content on right */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-pink-500 mb-1">
            {selectedProfile.profileName}
          </h3>
          <p className="text-md text-white mb-2">{selectedProfile.profileLocation}</p>
          <p className="text-lg font-semibold text-white flex items-center mb-4">
            {selectedProfile.rating} <FaStar className="text-yellow-500 ml-1" />
          </p>
          {selectedProfile.description && (
            <p className="text-white max-w-64">{selectedProfile.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)}

                </AnimatePresence>
            </section>
        </div>
    );
};

export default GellaryLike;