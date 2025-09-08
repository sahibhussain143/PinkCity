import { image } from "framer-motion/client";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const MostLoveCycleRide = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d"
          alt="Cycling Race"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Where Passion Meets the Pedal
          </h1>
          <p className="text-pink-400 text-xl md:text-2xl">
            India’s Most Loved Cycling Race
          </p>
          <button className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition">
                       <a href="/tourplacesgellary">  Start Your Journey
</a> 
          </button>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">The Journey</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="border-l-4 border-pink-500 pl-6">
            <h3 className="text-2xl font-semibold">2010 – The Beginning</h3>
            <p>Started with 120 riders through Jaipur’s forts and alleys.</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-6">
            <h3 className="text-2xl font-semibold">2015 – Going National</h3>
            <p>Over 2,000 participants from 12 states joined the challenge.</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-6">
            <h3 className="text-2xl font-semibold">2024 – Global Recognition</h3>
            <p>Now a UCI-approved event drawing riders from 18+ countries.</p>
          </div>
        </div>
      </section>

      {/* Route Map */}
      {/* <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-8 text-pink-500">Race Route</h2>
        <p className="mb-6 max-w-xl mx-auto">
          From city streets to mountain passes, experience the stunning diversity of Rajasthan.
        </p>
        <img
          src="https://worldexpeditions.com/trip-images-cropped/2880/2880-1-userimage6-500x500.jpg"
          alt="Cycling route map"
          className="mx-auto rounded-lg shadow-lg"
        />
      </section> */}

      {/* Testimonials */}
      <section className="bg-gray-800 py-16 px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-pink-500">Rider Stories</h2>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Anjali Verma",
                            quote:
                                "The crowds, the climbs, the energy—I’ve never felt so alive!",
                            location: "Jaipur",
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4YwkQng4EPvZtZDOEJb2CMETfFGCXcP81w&s',
                            instalink: 'https://www.instagram.com/anjali_verma_official',
                            fblink: 'https://www.facebook.com/anjali.verma.official'
                        },
                        {
                            name: "Sachin Rao",
                            quote:
                                "A magical route and even more magical people. See you next year!",
                            location: "Haryana",
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmoyqq7WW92dAWJtmvduGyZucer_m03u0eQ&s',
                            instalink: 'https://www.instagram.com/sachin_rao_official',
                            fblink: 'https://www.facebook.com/sachin.rao.official'
                        },
                        {
                            name: "Rajeev Patil",
                            quote:
                                "Every kilometer I pedal funds a child’s school meal. That’s why I ride.",
                            location: "Pune",
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7x7u940gcE9rZO9kqrSWZDEGY_7-2ssHus73EGRVWbuczmSJScsdSU17VnQU1sGnFNk&usqp=CAU',
                            instalink: 'https://www.instagram.com/rajeev_patil_official',
                            fblink: 'https://www.facebook.com/rajeev.patil.official'

                        },
                    ].map((rider, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 duration-300 relative">
                            {/* Rider Image */}
                            <img
                                src={rider.image}
                                alt={rider.name}
                                className="w-16 h-16 rounded-full object-cover border-4 border-pink-500 absolute -top-8 left-1/2 transform -translate-x-1/2 hover:-rotate-90 duration-300 hover:border-red-700 "
                            />

                            <blockquote className="italic text-white/80 mt-10 mb-4 ">
                                “{rider.quote}”
                            </blockquote>
                            <p className="text-pink-400 font-semibold">{rider.name}</p>
                            <p className="text-sm text-white/60 mb-4">{rider.location}</p>

                            {/* Social Icons Container */}
                            <div className="flex justify-center space-x-4">
                                <a href={rider.instalink} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors duration-300">
                                    <FaInstagram className="text-2xl hover:scale-150 duration-300 hover:rotate-180 hover:text-pink-800" />
                                </a>
                                <a href={rider.fblink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
                                    <FaFacebook className="text-2xl hover:scale-150 duration-300 hover:rotate-90 hover:text-blue-800" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

      {/* Medal and Jersey */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-pink-500">Medal & Jersey Showcase</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="https://image.made-in-china.com/202f0j00AizBhCaRCUkN/Customized-General-Metal-Bicycle-Medal-Riding-Activity-Road-Race-Mountain-Bike-Competition-Gold-Silver-and-Bronze-Souvenirs.webp"
            alt="Race medal"
            className="w-48 h-48 object-contain hover:scale-110  hover:rounded-sm duration-1000"
          />
          <img
            src="https://i.ebayimg.com/images/g/HoUAAOSwVD5lQ0nL/s-l400.jpg"
            alt="Race jersey"
            className="w-48 h-48 object-contain  hover:scale-110 hover:rounded-sm duration-1000"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4 ">Ready to Ride?</h2>
        <p className="text-lg mb-6">
          Join thousands of passionate cyclists on the most iconic ride in India.
        </p>
        <button className="px-8 py-3 bg-white text-pink-500 font-bold  hover:scale-110 duration-300 rounded-full hover:bg-orange-100 transition">
          <a href="/TripInquiry "> Register Now</a>
        </button>
      </section>



    </div>
  );
};

export default MostLoveCycleRide;

