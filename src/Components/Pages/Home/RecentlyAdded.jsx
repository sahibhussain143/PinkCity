import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";

function RecentlyAdded() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const activeEvents = storedEvents.filter((event) => event.isActive);
    setEvents(activeEvents);
  }, []);

  const handleBookNow = (event) => {
    localStorage.setItem("currentBooking", JSON.stringify(event));
    navigate("/bookingform"); // Make sure this route points to BookingForm
  };

  if (events.length === 0) {
    return <p className="text-center mt-6 text-gray-500">No events added yet.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Recently Added Events
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {event.image && event.image[0] && (
              <img
                src={event.image[0]}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-pink-500 flex justify-between">
                <span>{event.title}</span>
                <span className="flex">
                  <FaLocationArrow className="m-1 text-sm" />
                  <a
                    href={event.locationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm flex"
                  >
                    View Map
                  </a>
                </span>
              </h3>
              <p className="text-gray-600 mb-2 flex-1 text-sm">{event.description}</p>
              <p className="text-gray-800 font-medium mb-1">
                Price: <span className="text-pink-600">₹{event.price}</span>
              </p>
              <p className="text-gray-500 text-sm flex">
                <FaLocationDot className="mr-1" /> {event.location}
              </p>
              <p className="text-gray-400 text-xs mt-2">Added on: {event.date}</p>
            </div>
            <button
              className="bg-pink-500 hover:bg-pink-700 p-2"
              onClick={() => handleBookNow(event)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyAdded;
