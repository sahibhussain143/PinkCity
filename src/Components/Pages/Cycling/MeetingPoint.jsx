// import React, { useState } from 'react';

// const MeetingPoint = () => {
//   const [meetingPoint, setMeetingPoint] = useState({
//     name: 'Jaipur Elephant Village',
//     address: 'Hathigaon, Jaipur, Rajasthan 302028',
//     coordinates: {
//       lat: 26.9698,
//       lng: 75.8797,
//     },
//     imageUrl: 'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=A6qCUjoNH74nXCkB07RNgK3eIt2mun8PgsLPw9dNkVI='
//   });

//   const handleOpenMap = () => {
//     const mapUrl = `https://www.google.com/maps/place/${meetingPoint.name},+${meetingPoint.address}`;
//     window.open(mapUrl, '_blank');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans relative overflow-hidden">
      
//       <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center md:text-5xl">
//         Your Adventure Starts Here!
//       </h1>
      
//       {/* Main content container with responsive layout */}
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
        
//         {/* Left Section: Image and Overlay */}
//         <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
//           <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center md:text-3xl">
//             This is Meeting Point
//           </h1>
//           <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md mb-4 group">
//             <img 
//               src={meetingPoint.imageUrl} 
//               alt="Hawa Mahal in Jaipur" 
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
//             />
//             {/* Overlay Div */}
//             <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <p className="text-white text-center text-lg font-semibold px-4">
//                 This beautiful meeting point is located in the heart of Jaipur, ready for your tour!
//               </p>
//             </div>
//           </div>
//           <p className="text-gray-600 text-lg text-center md:text-left">
//             Explore the beautiful architecture of Jaipur.
//           </p>
//         </div>

//         {/* Right Section: Meeting Point Details (Map Box) */}
//         <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
//           {/* Animated div */}
//           <div className="bg-blue-50 border-2 rounded-lg p-6 text-center w-full animate-border-pulse">
//             <h2 className="text-2xl font-semibold text-pink-800 mb-2">
//               Click Here!
//             </h2>
//             <p className="text-gray-700 text-md leading-relaxed mb-4">
//               {meetingPoint.address}
//             </p>
            
//             <button
//               onClick={handleOpenMap}
//               className="w-full inline-flex items-center justify-center
//                 px-6 py-3 border border-transparent text-base font-medium
//                 rounded-full text-white bg-pink-600 hover:bg-pink-700
//                 focus:outline-none focus:ring-2 focus:ring-offset-2
//                 focus:ring-pink-500 transition-colors duration-200 shadow-md
//                 transform hover:shadow-lg hover:-translate-y-0.5"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="mr-2 h-5 w-5"
//               >
//                 <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//               Open in Maps
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative divs with animation */}
//       <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2">
//         <div className="w-36 h-36 -ml-[400px] mt-[450px]  bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-opacity-20 shadow-lg rounded-full animate-spinSlow"></div>
//       </div>
//       <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2">
//         <div className="w-36 h-36 ml-[250px] -mt-[250px] bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 bg-opacity-20 shadow-lg rounded-full animate-spinSlow "></div>
//       </div>
      
//     </div>
//   );
// };

// export default MeetingPoint;














import React, { useEffect, useState } from "react";

export default function MeetingPoint() {
  const [meetingPoint, setMeetingPoint] = useState({
    name: 'Jaipur Elephant Village',
    address: 'Hathigaon, Jaipur, Rajasthan 302028',
    coordinates: {
      lat: 26.9698,
      lng: 75.8797,
    },
    imageUrl: 'https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=A6qCUjoNH74nXCkB07RNgK3eIt2mun8PgsLPw9dNkVI='
  });

  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps/place/${meetingPoint.name},+${meetingPoint.address}`;
    window.open(mapUrl, '_blank');
  };

  useEffect(() => {
    const scriptId = "particles-js-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
              },
              size: {
                value: 5,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-64 bg-gray-900  text-white  p-4 font-sans relative overflow-hidden">
      
      {/* Particles.js Background Container */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>

      {/* Tailwind-based Floating Boxes */}
      <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-red-400 opacity-30 animate-floatX z-10"></div>
      <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-blue-400 opacity-30 animate-floatY z-10"></div>
      <div className="absolute bottom-[15%] left-[20%] w-16 h-16 rounded-full bg-white opacity-30 animate-floatXY z-10"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-green-400 opacity-30 animate-floatXY z-10"></div>
       <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-pink-900 opacity-30 animate-floatX z-10"></div>
      <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-gray-700 opacity-30 animate-floatY z-10"></div>
      <div className="absolute bottom-[15%] left-[20%] w-16 h-16 rounded-full bg-yellow-400 opacity-30 animate-floatXY z-10"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-400 opacity-30 animate-floatXY z-10"></div>
       <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-red-400 opacity-30 animate-floatX z-10"></div>
      <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-blue-400 opacity-30 animate-floatY z-10"></div>
      <div className="absolute bottom-[15%] left-[20%] w-16 h-16 rounded-full bg-white opacity-30 animate-floatXY z-10"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-400 opacity-30 animate-floatXY z-10"></div>
      
      {/* Main content container with responsive layout */}
      <div className="-z-1 flex flex-col  md:flex-row w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
        
        {/* Left Section: Image and Overlay */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center md:text-2xl">
             Your Adventure Starts Here!
          </h1>
          <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md mb-4 group">
            <img 
              src={meetingPoint.imageUrl} 
              alt="Hawa Mahal in Jaipur" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            {/* Overlay Div */}
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-lg font-semibold px-4">
                This beautiful meeting point is located in the heart of Jaipur, ready for your tour!
              </p>
            </div>
          </div>
          <p className="text-white text-lg text-center md:text-left">
            Explore the beautiful architecture of Jaipur.
          </p>
        </div>

        {/* Right Section: Meeting Point Details (Map Box) */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center ">
          {/* Animated div */}
          <div className="bg-blue-50 border-2 rounded-lg p-6 text-center w-full animate-border-pulse">
            <h2 className="text-2xl font-semibold text-pink-800 mb-2">
              Meeting Point!
            </h2>
            <p className="text-gray-700 text-md leading-relaxed mb-4">
              {meetingPoint.address}
            </p>
            
            <button
              onClick={handleOpenMap}
              className="w-full inline-flex items-center justify-center
                px-6 py-3 border border-transparent text-base font-medium
                rounded-full text-white bg-pink-600 hover:bg-pink-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-pink-500 transition-colors duration-200 shadow-md
                transform hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}