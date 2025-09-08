import React from 'react';
import GellaryMain from './GellaryMain.jsx';
import Wave from 'react-wavify';
import { FaChevronDown } from 'react-icons/fa';
import GellarySpacial from './GellarySpacial.jsx';
import GellaryLike from './GellaryLike.jsx';

function Gellary() {
  return (
    <>
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
            src="https://flyextremeworld.com/ImageCart/1787_Rajasthan_top_attractions_tourism%20places.jpg"
            alt="Background"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

          {/* Top Wavy Border */}
      

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Welcome to Our Gallery
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-xl mb-8 drop-shadow-md">
              Explore breathtaking images and moments captured beautifully.
            </p>
            <a href='#allgellary' className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              Explore Now
            </a>
          </div>

          {/* Bottom Wavy Border */}
          <div className="absolute bottom-0 left-0 w-full z-20">
            <Wave
              fill="#aaa"
              paused={false}
              options={{
                height: 30,
                amplitude: 40,
                speed: 0.4,
                points: 10
              }}
            />
          </div>
        </div>
      </div>
      
      {/* GellaryMain is the scroll-to destination */}
      <GellaryMain id="gellary-main" />
      {/* <GellarySpacial/>  */}
      <GellaryLike/>
    </>
  );
}

export default Gellary;