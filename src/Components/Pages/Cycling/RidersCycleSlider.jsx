import React, { useState } from "react";

const slides = [
  {
    id: 1,
    titleMain: "Desert Majesty Ride",
    titleSecondary: "Thar Adventure",
    name: "Thar Desert Expedition",
    location: "Rajasthan, India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDT_6vJhUdKx9jlcD25zs2_paukEfdDEGUuA&s",
    description:
      "Cycle across the golden dunes of the Thar Desert, passing ancient forts, villages, and camel caravans. Ideal for adventure seekers looking to explore Rajasthan's dry heartland.",
  },
  {
    id: 2,
    titleMain: "Royal Heritage Route",
    titleSecondary: "Cultural Capitals",
    name: "Palace Pedal Tour",
    location: "Udaipur – Jodhpur – Jaipur",
    image: "https://vl-prod-static.b-cdn.net/system/images/000/293/889/d1fec2e1fad56855d0d384374e881291/original/LTF_4459.jpg?1554860280",
    description:
      "A culturally rich tour taking you through Udaipur, Jodhpur, and Jaipur. Discover palaces, local markets, and historical wonders — all from your saddle.",
  },
  {
    id: 3,
    titleMain: "Aravalli Hills Challenge",
    titleSecondary: "Mountain Escape",
    name: "Ridge Rider Expedition",
    location: "Aravalli Range, Rajasthan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNyH96RCIhMK1Huf5e3QkYetcL0FNuUaYvw&s",
    description:
      "Climb through the rugged Aravalli ranges with scenic views, wildlife sightings, and cool early morning rides through hidden mountain passes.",
  },
];

const RidersCycleSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const handleKeyNavigation = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      setCurrent(idx);
    }
  };

  const fallbackImage =
    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e86b12f-6332-47ce-a81e-f670f489bbd4.png";

  return (
    <div className="relative w-full bg-gray-900 py-10 pt-48 pb-48 ">
      <div className="h-[520px] flex items-center justify-center relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-6 ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
            aria-hidden={index !== current}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-pink-500">
                {slide.titleMain}
                <span className="block text-white/20">{slide.titleSecondary}</span>
              </h2>
              <div className="mt-4 text-base md:text-lg">
                <p className="font-bold t">{slide.name}</p>
                <p className="uppercase tracking-wide text-sm mb-3">{slide.location}</p>
                <p className="mb-6">{slide.description}</p>
                <button
                  aria-label={`Play video for ${slide.name}`}
                  className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition mx-auto md:mx-0"
                  onClick={() => alert("Play video for " + slide.name)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="5 3 19 12 5 21" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center max-w-md ">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-[400px] h-[400px] object-cover rounded-xl shadow-lg hover:scale-110 duration-300"
                onError={(e) => (e.currentTarget.src = fallbackImage)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="text-orange-500 hover:text-orange-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              onKeyDown={(e) => handleKeyNavigation(e, idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === current ? "bg-white" : "bg-gray-500"
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="text-orange-500 hover:text-orange-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RidersCycleSlider;
