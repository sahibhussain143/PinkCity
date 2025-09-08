import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TourCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderInterval = useRef(null);

  const categories = [
    { id: "all", name: "Explore All" },
    { id: "heritage", name: "Heritage" },
    { id: "nature", name: "Nature" },
    { id: "adventure", name: "Adventure" },
    { id: "spiritual", name: "Spiritual" },
    { id: "culinary", name: "Culinary" },
  ];

  const tours = [
    // Heritage Tours
    {
      id: 1,
      title: "Jaipur Heritage Walk",
      category: "heritage",
      price: "₹1499",
      description:
        "Explore Jaipur’s royal past with guided visits to forts, palaces, and local bazaars.",
      image:
        "https://letourdeindia.com/wp-content/uploads/2017/08/Picsart_25-01-19_14-29-08-787-scaled.jpg",
    },
    {
      id: 2,
      title: "Jodhpur Fort Explorer",
      category: "heritage",
      price: "₹1299",
      description:
        "A deep dive into the majestic Mehrangarh Fort and old blue city lanes.",
      image:
        "https://www.maharanacab.com/wp-content/uploads/2019/01/cycle-tour.jpg",
    },

    // Nature Tours
    {
      id: 3,
      title: "Udaipur Lake Retreat",
      category: "nature",
      price: "₹1799",
      description:
        "Relax with a scenic boat ride and countryside visit in the City of Lakes.",
      image:
        "https://s3.india.com/wp-content/uploads/2025/06/Bike-Routes-udaipur.jpg?impolicy=Medium_Widthonly&w=350&h=263",
    },
    {
      id: 4,
      title: "Mount Abu Hill Escape",
      category: "nature",
      price: "₹1599",
      description:
        "Trek to viewpoints, temples, and lush landscapes in Rajasthan’s only hill station.",
      image: "https://ep1.pinkbike.org/p4pb20058678/p4pb20058678.jpg",
    },

    // Adventure Tours
    {
      id: 5,
      title: "Thar Desert Camel Safari",
      category: "adventure",
      price: "₹2499",
      description:
        "Ride across sand dunes and camp under stars in the magical Thar Desert.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/028/058/295/small_2x/cyclist-riding-down-the-road-free-photo.jpg",
    },
    {
      id: 6,
      title: "Bikaner Off-Road Experience",
      category: "adventure",
      price: "₹2199",
      description:
        "Off-roading thrill mixed with cultural pit stops across desert terrain.",
      image:
        "https://images.ctfassets.net/uyc32o2uod42/864a08a1-cb52-4510-aa50-6887ba71ee2b/92d7bc5f9272a73ce009932e1adf8244/Instaund-La-Prima-Racing-Factor-Bikes-9-1024x533.jpg",
    },

    // Spiritual Tours
    {
      id: 7,
      title: "Pushkar Pilgrimage Trail",
      category: "spiritual",
      price: "₹999",
      description:
        "Visit sacred temples, the holy lake, and take part in spiritual rituals.",
      image:
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2024/08/Pushkar-to-Ajmer-Cycling-Tour.jpg?resize=975%2C600&ssl=1",
    },
    {
      id: 8,
      title: "Ajmer Sharif Dargah Visit",
      category: "spiritual",
      price: "₹1199",
      description:
        "Experience the peace and devotion at one of India’s most visited shrines.",
      image: "https://cdn.tourradar.com/s3/tour/750x400/1847_eab6c881.jpg",
    },
  ];

  const filteredTours =
    activeCategory === "all"
      ? tours
      : tours.filter((tour) => tour.category === activeCategory);

  const stopAutoSlide = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
      sliderInterval.current = null;
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
    stopAutoSlide();

    if (filteredTours.length > 1) {
      sliderInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === filteredTours.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => stopAutoSlide();
  }, [activeCategory, filteredTours.length]);

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prev) =>
      prev === filteredTours.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTours.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen pt-24">
      {/* Header */}
      <div className="text-center text-white mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-pink-500">
          Explore Rajasthan's Signature Tours 🏜️
        </h2>
        <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-300">
          Dive into the rich heritage, spiritual vibes, thrilling adventures, and
          natural beauty of Rajasthan with our specially curated tours.
        </p>
      </div>
      <hr className="w-2/3 mx-auto my-8 border-gray-700" />
      <div className="max-w-7xl mx-auto p-4 md:p-10 flex flex-col md:flex-row bg-black/20 rounded-xl shadow-2xl">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0 md:mr-6 space-x-3 md:space-x-0 md:space-y-3 pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-pink-600 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="relative w-full overflow-hidden rounded-xl shadow-xl">
          {filteredTours.length > 0 ? (
            <>
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <img
                  src={filteredTours[currentIndex].image}
                  alt={filteredTours[currentIndex].title}
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-all duration-300 hover:blur-xs"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 md:p-8 text-white rounded-b-xl">
                  <h3 className="text-md sm:text-lg md:text-xl font-bold">
                    {filteredTours[currentIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base line-clamp-3 mt-1 text-gray-300">
                    {filteredTours[currentIndex].description}
                  </p>
                  <p className="text-sm sm:text-md md:text-lg text-white font-bold mt-2">
                    {filteredTours[currentIndex].price}
                  </p>
                </div>
              </div>

              {/* Controls */}
              {filteredTours.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full shadow-lg hover:bg-white/50 transition duration-200"
                    aria-label="Previous Slide"
                  >
                    <FaChevronLeft className="text-lg" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full shadow-lg hover:bg-white/50 transition duration-200"
                    aria-label="Next Slide"
                  >
                    <FaChevronRight className="text-lg" />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[300px] text-gray-400 text-lg md:text-xl">
              No tours found for this category. Please check back later!
            </div>
          )}
        </div>
      </div>
      {/* Centered Footer Paragraph */}
      <div className="flex justify-center items-center ">
        <p className="max-w-7xl mx-auto text-center px-4 text-gray-400">
          🏜️ <strong> Rajasthan's Signature Tours</strong>  – <span className="text-pink-500 font-bold text-xl">A Cultural Cycling Journey </span>  Through
          Royal India Rajasthan, the land of kings, offers a breathtaking blend
          of majestic forts, timeless deserts, vibrant festivals, and rich
          cultural heritage. A cycling tour through this iconic region isn't
          just a physical journey—it's a passage through centuries of royal
          legacy, architectural wonders, and timeless village traditions.
        </p>
      </div>
    </div>
  );
};

export default TourCategories;