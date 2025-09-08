import React from 'react';

const CyclingLoader = () => {
  return (
    <>
      {/* Embedded CSS for the animation */}
      <style>{`
        .cycling-animation {
          position: relative;
          width: 80px;
          height: 40px;
          overflow: hidden;
        }

        .cyclist {
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          bottom: 0;
          left: -20px;
          animation: ride 2s linear infinite;
        }

        .cyclist::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          bottom: 10px;
          left: 5px;
        }

        @keyframes ride {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
      `}</style>

      {/* Main loading page container */}
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Cycling Animation */}
          <div className="cycling-animation">
            <div className="cyclist"></div>
          </div>

          {/* Text */}
          <div className="text-white text-xl font-semibold tracking-wide animate-pulse">
            Your journey is loading...
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CyclingLoader;