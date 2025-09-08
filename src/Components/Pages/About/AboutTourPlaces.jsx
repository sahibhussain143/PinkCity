import React, { useState, useEffect } from "react";

// The SkeletonCard component
const SkeletonCard = () => (
  <div className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center animate-pulse text-center">
    <div className="flex w-full items-center">
      <div className="w-16 h-16 p-2 bg-gray-300 rounded-full"></div>
      <div className="pl-2 w-full">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
    <div className="h-4 bg-gray-300 rounded w-full mt-4"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
  </div>
);

// The main AboutTourPlaces component
const AboutTourPlaces = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating a network request with a delay
  useEffect(() => {
    const fetchProducts = () => {
      // This is the data you'd get from a real API call
      const fetchedData = [
        {
          id: 1,
          title: "TOUR BOOKING",
          description:
            "Jaipur Tour Travels have multiple Package of different different places on good price & with good client setisfication. Client feedback is also good for Jaipur Tour Travels.",
          image: "https://www.svgrepo.com/show/365395/flag-thin.svg",
        },
        {
          id: 2,
          title: "HOTEL BOOKING",
          description:
            "Jaipur Tour Travels have multiple type with multiple hotles on good price & with good client setisfication. Client feedback is also good for Jaipur Tour Travels.",
          image: "https://www.svgrepo.com/show/493014/reservation-computer.svg",
        },
        {
          id: 3,
          title: "EVENTS BOOKING",
          description:
            "Jaipur Tour Travels have multiple Events of different different places on good price & with good client setisfication. Client feedback is also good for Jaipur Tour Travels.",
          image:
            "https://img.freepik.com/free-vector/game-crash-icon-logo-design_474888-2394.jpg",
        },
        {
          id: 4,
          title: "SIGHT SEEING BOOKING",
          description:
            "Advanced vape mod with high wattage for enhanced performance",
          image: "https://www.svgrepo.com/show/31948/open-umbrella.svg",
        },
        {
          id: 5,
          title: "CAR RENTAL",
          description:
            "Jaipur Tour Travels provide Car Rental Service also for different different Places on good price. Jaipur Tour Travles have Cars, Tempo Travel facility.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrY2mHrypC0lFKxrA7I14WslEM4IKqEfFPMr1KmItHUm38E_x8-PDgahok2CWkyoxNZA&usqp=CAU",
        },
        {
          id: 6,
          title: "GROUP TOUR",
          description:
            "Jaipur Tour Travels provide facility of Group Tours also for different different places with vechical facility and safity also of customers.",
          image: "https://i.pinimg.com/736x/a8/be/92/a8be92d8bcd3dbbcc171aa15b17c83a8.jpg",
        },
      ];

      setTimeout(() => {
        setProducts(fetchedData);
        setLoading(false);
      }, 2000); // This delay simulates a slow network response
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        {loading ? (
          // Renders the skeleton cards while loading is true
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          // Renders the actual content once loading is false
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-2xl text-center"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 p-2 bg-pink-500 rounded-full hover:rotate-[360deg] duration-700 hover:bg-black/40"
                />
                <h3 className="text-2xl text-pink-500 font-semibold pl-2">
                  {product.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-2 mt-4">{product.description}</p>
            </div>
          ))
        )}
      </div>


      

      
    </div>
  );
};

export default AboutTourPlaces;