import React from 'react';

function LandingAboutPage() {
  return (
    <>
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
            src="/PinkCityAboutbg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Welcome to Our About Us Page
            </h1>
            <p className="text-white text-base sm:text-lg md:text-2xl max-w-2xl mb-8 drop-shadow-md">
              Jaipur Tour Travles is the best tour travel leading company.
            </p>
            <a
              href="/ge"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Explore Now
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-700">
              Hi! Welcome to Jaipur Tour Travels
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              Jaipur Tour Travels - Best Tour Company in Rajasthan
            </h3>
            <p className="mb-4 text-gray-700">
              Incredible Holiday Experiences to Celebrate Life, with this motto Travel enthusiasts Mr. Imran Khan started Jaipur Tour Travles a decade ago.
            </p>
            <p className="mb-4 text-gray-700">
              Lao Tzu once said, "A journey of a thousand miles begins with a single step." That single step was the day when Jaipur Tour Cab Service was established...
            </p>
            <p className="mb-4 text-gray-700">
              We are a company and destination management experts that offers all-inclusive tours to India and abroad...
            </p>
            <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-md shadow hover:bg-pink-700 transition">
              Call Us: +91 222 222 2222
            </button>
          </div>

          {/* Image Content */}
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
              src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Hawa-Mahal.jpg"
              alt="Hawa Mahal"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingAboutPage;



