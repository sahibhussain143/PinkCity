// 



import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export default function TripInquiry() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: product.title || "",
    startDate: "",
    endDate: "",
    travelers: 1,
    tripType: "solo",
    accommodation: "hotel",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (product.title) {
      setFormData((prev) => ({ ...prev, destination: product.location }));
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing enquiries
    const existingEnquiries = JSON.parse(localStorage.getItem("enquiries")) || [];

    // Generate numeric incremental ID
    const nextId = existingEnquiries.length > 0
      ? existingEnquiries[existingEnquiries.length - 1].id + 1
      : 1;

    const enquiryWithId = { ...formData, id: nextId };

    localStorage.setItem("enquiries", JSON.stringify([...existingEnquiries, enquiryWithId]));
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      startDate: "",
      endDate: "",
      travelers: 1,
      tripType: "solo",
      accommodation: "hotel",
      message: "",
    });
    navigate("/gellary");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-700 pt-24 flex items-center justify-center p-6">
      <button
        type="button"
        onClick={handleGoBack}
        className="absolute top-0 right-0 text-white p-4 rounded-lg transition duration-300 font-bold text-3xl"
      >
        <FaXmark />
      </button>

      <div className="bg-gray-900 max-w-9xl pt-24 backdrop-blur-2xl shadow-2xl rounded-2xl p-8 w-full max-w-6xl md:flex md:space-x-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          {product.title && (
            <div className="p-6 backdrop-blur-3xl shadow-xl bg-white/10 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-lg mb-4 shadow-md"
              />
              <h2 className="text-2xl font-bold text-pink-600 mb-2">{product.title}</h2>
              <h2 className="text-xl font-bold text-gray-300 mb-2">{product.location}</h2>
              <p className="text-white leading-relaxed mb-4">{product.description}</p>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 relative">
          <h1 className="text-3xl font-bold text-center mb-6 text-pink-500">
            🗺️ Plan Your Dream Trip
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border bg-transparent text-white rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border bg-transparent text-white rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border bg-transparent text-white rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Preferred Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                readOnly
                className="p-3 border bg-gray-900 text-white rounded-lg w-full cursor-not-allowed focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="p-3 border bg-gray-900 text-white rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-gray-900 text-white w-full focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Number of Travelers</label>
              <input
                type="number"
                name="travelers"
                min="1"
                value={formData.travelers}
                onChange={handleChange}
                className="p-3 border rounded-lg bg-transparent text-white w-full focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your ideal trip..."
                className="p-3 border rounded-lg w-full text-white bg-transparent focus:ring-2 focus:ring-pink-400"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600 transition duration-300 font-bold"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-black/30 backdrop-blur-2xl rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">Success!</h2>
            <p className="text-white mb-6">Your inquiry has been submitted successfully.</p>
            <button
              onClick={handlePopupClose}
              className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition duration-300 font-bold"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
