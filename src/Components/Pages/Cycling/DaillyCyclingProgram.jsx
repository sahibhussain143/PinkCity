import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const DaillyCyclingProgram = () => {
    const [expandedDay, setExpandedDay] = useState(null);

    const days = [
        {
            day: "Day 1",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bDKAzvT-29iHWJXUsJlAiAJ9dZiF2xlEJw&s',
            title: "Arrival in Udaipur & Local Exploration",
            details: "Arrive in the 'City of Lakes', Udaipur. After checking into your hotel, enjoy a short orientation ride around Lake Pichola and the charming old city. Evening cultural show at Bagore Ki Haveli.",
        },
        {
            day: "Day 2",
            image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/be/af/e4.jpg',
            title: "Udaipur to Kumbhalgarh, 55 km",
            details: "Start your ride towards the majestic Kumbhalgarh Fort, cycling through rolling hills and rural villages. The ride is moderately challenging but rewarded with panoramic views. Overnight stay near the fort.",
        },
        {
            day: "Day 3",
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/07/47/caption.jpg?w=1200&h=-1&s=1',
            title: "Kumbhalgarh to Ranakpur, 40 km",
            details: "Descend into the lush forests and valleys en route to Ranakpur. Visit the renowned Jain Temple complex with intricate marble carvings. Enjoy the peaceful countryside setting.",
        },
        {
            day: "Day 4",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW0gjwZpKzqtjGja2b_YJDL09xvNGtxveQw&s',
            title: "Ranakpur to Jodhpur, transfer + short ride",
            details: "Transfer to the outskirts of Jodhpur and enjoy a short 20 km ride into the 'Blue City'. Visit the imposing Mehrangarh Fort and stroll through the old markets.",
        },
        {
            day: "Day 5",
            image: 'https://seawatersports.com/images/activies/slide/cycling-in-rajasthan-cost.jpg',
            title: "Jodhpur to Osian, 60 km",
            details: "Ride through the arid desert landscape to Osian, an ancient town known for its temples and sand dunes. Enjoy a camel ride and desert sunset experience.",
        },
        {
            day: "Day 6",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAWw_-Khpp3o-kwYNbXg7CBBxGT4_SH5xmQ&s',
            title: "Osian to Pushkar, 65 km",
            details: "Cycle through semi-arid terrain and remote villages on the way to Pushkar, a spiritual town surrounding a sacred lake. Visit the Brahma Temple and the ghats.",
        },
        {
            day: "Day 7",
            image: 'https://www.australiancycletours.com.au/croppedimages/Australasia/NSW/Arriving-at-Lake-Jindabyne-779681-1100px.jpg?1611198880',
            title: "Pushkar to Jaipur, transfer + city cycling",
            details: "Transfer partway to Jaipur, followed by a relaxed cycle around Jaipur’s historic sites like the City Palace and Hawa Mahal. Evening free for shopping or optional folk dance show.",
        },
        {
            day: "Day 8",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHQXczUEhQcdAPHWCjofEILIGJte0UnIIwg&s',
            title: "Departure from Jaipur",
            details: "After breakfast, bid farewell to Rajasthan. Airport or station transfers can be arranged. Optional extension to visit Amber Fort or local artisan workshops.",
        },
    ];

    const toggleDetails = (dayIndex) => {
        setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md mt-4 pt-12 ">
            <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Daily Program - Rajasthan Cycle Tour</h2>
            <div className="space-y-4">
                {days.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-lg transition-all duration-300 ease-in-out ${expandedDay === index ? 'bg-gray-100 shadow-xl' : 'bg-white'
                            }`}
                    >
                        <div
                            className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200 "
                            onClick={() => toggleDetails(index)}
                        >
                            <span className={`font-semibold text-lg ${expandedDay === index ? 'text-pink-600' : 'text-black'}`}>
                                {item.day}: {item.title}
                            </span>
                            {expandedDay === index ? (
                                <FaMinus className="text-pink-600 text-xl" />
                            ) : (
                                <FaPlus className="text-gray-500 text-xl" />
                            )}
                        </div>

                        {expandedDay === index && (
                            <div className="p-4 pt-0 border-t border-gray-200 animate-fade-in-down">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full md:w-1/2 h-64 object-cover hover:scale-110 duration-300 rounded"
                                    />
                                    <div className="text-gray-700 md:w-1/2 flex flex-col justify-between">
                                        <p className="mb-4">{item.details}</p>
                                        <button className="mt-4 px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300 self-start md:self-end">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out;
        }
      `}</style>
        </div>
    );
};

export default DaillyCyclingProgram;