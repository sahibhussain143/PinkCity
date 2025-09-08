import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function CycleTamplate() {
 


  return (
    <>
      <div>
        <section>
          <div className="container mx-auto px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center pb-24 justify-between">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <img
                src="https://www.shutterstock.com/image-photo/male-cyclist-riding-road-bicycle-600nw-2133504485.jpg"
                alt="Loading..."
                className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain animate-upDown"
                loading="lazy"
              />
            </div>

            <div className="flex-1 text-center md:text-left max-w-2xl pt-4 md:pt-10 pr-0 md:pr-12 pb-6 md:pb-8">
              <p className="font-semibold text-orange-600 text-xs sm:text-sm mb-3">
                ⚡ NEW VAPING POD KITS
              </p>
              <h1 className="font-['Orbitron'] font-semibold text-2xl sm:text-3xl md:text-5xl leading-tight mb-5 text-gray-900">
                The ultimate in portability
              </h1>

              <p className="font-['Poppins'] text-gray-700 text-xs sm:text-sm md:text-lg mb-8">
                Our vape shop offers not just a variety of vaping products, but also top-notch operational support.
              </p>
              <a
                href="/shop"
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-blue-700 text-white font-bold rounded-full hover:scale-105 duration-300 shadow-[0_4px_15px_rgba(255,69,0,0.3)]"
              >
                Shop now
              </a>
            </div>
          </div>

          {/* Ratings Section */}
         
        </section>
      </div>
    </>
  );
}

export default CycleTamplate;
