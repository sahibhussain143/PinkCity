import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimes, FaTag, FaExclamationTriangle } from 'react-icons/fa';

// Skeleton Component for the Table
const BookingTableSkeleton = () => (
    <div className="overflow-x-auto animate-pulse">
        <table className="min-w-full border border-gray-300">
            <thead className="bg-pink-500 text-white">
                <tr>
                    <th className="p-2 border">Place Image</th>
                    <th className="p-2 border">Place Name</th>
                    <th className="p-2 border">Location</th>
                    <th className="p-2 border">Booking Price</th>
                    <th className="p-2 border">Customer Details</th>
                    <th className="p-2 border">Check In</th>
                    <th className="p-2 border">Check Out</th>
                    <th className="p-2 border">Payment Method</th>
                    <th className="p-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                {/* Skeleton rows */}
                {[...Array(3)].map((_, index) => (
                    <tr key={index}>
                        <td className="border p-2">
                            <div className="h-[100px] w-[100px] bg-gray-300 rounded"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </td>
                        <td className="border p-2 space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        </td>
                        <td className="border p-2">
                            <div className="h-8 bg-gray-300 rounded w-20"></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Confirmation Modal Component
const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-sm w-full relative p-6 text-center">
                <FaExclamationTriangle className="text-yellow-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
                <p className="text-gray-600 mb-6">{message}</p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400 font-semibold"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 font-semibold"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

// Booking Details Modal Component
const BookingDetailsModal = ({ booking, onClose }) => {
    if (!booking) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            {/* Added max-h-[90vh] and overflow-y-auto to make the modal scrollable */}
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative p-6 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <FaTimes className="text-2xl" />
                </button>
                <h3 className="text-2xl font-bold mb-4 text-center text-pink-500">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img
                            src={booking.image}
                            alt={booking.title}
                            className="w-full h-auto rounded-lg mb-4 object-cover"
                        />
                        <h4 className="text-xl font-bold text-pink-500">{booking.title}</h4>
                        <p className="text-gray-600">{booking.location}</p>
                    </div>
                    <div className="space-y-2">
                        <p><strong className=" text-black/80">Booking ID:</strong> {booking.bookingId}</p>
                        <p><strong className=" text-black/80">Check In:</strong> {booking.CheckInDate}</p>
                        <p><strong className=" text-black/80">Check Out:</strong> {booking.CheckOutDate}</p>
                        <hr />
                        <h5 className="font-bold mt-4 ">Customer Details</h5>
                        <p><strong className="text-black/80">Name:</strong> {booking.fullName}</p>
                        <p><strong className="text-black/80">Email:</strong> {booking.email}</p>
                        <p><strong className="text-black/80">Phone:</strong> {booking.phone}</p>
                        <p><strong className="text-black/80">Members:</strong> {booking.member}</p>
                        <hr />

                        <h5 className="font-bold mt-4">Payment & Pricing</h5>
                        {booking.appliedOffer && (
                            <div className="flex items-center text-green-600">
                                <FaTag className="mr-2" />
                                <p><strong>Offer Applied:</strong> {booking.appliedOffer}</p>
                            </div>
                        )}
                        <p>
                            <strong className="text-black/80">Original Price:</strong> <span className={booking.appliedOffer ? "line-through text-gray-500" : ""}>{booking.price}</span>
                        </p>
                        {booking.appliedOffer && (
                            <p>
                                <strong className="text-black/80">Final Price:</strong> <span className="font-bold text-lg text-pink-600">{booking.finalPrice}</span>
                            </p>
                        )}
                        <p className="flex items-center">
                            <strong className="text-black/80">Payment Status:</strong> Confirmed ({booking.paymentMode})             <FaCheckCircle className="text-green-500 ml-2" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Main Component
export default function ConfirmBooking() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Added loading state
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [bookingToRemoveId, setBookingToRemoveId] = useState(null);

    useEffect(() => {
        // Simulate a network delay for the skeleton to be visible
        const timer = setTimeout(() => {
            const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
            setBookings(storedBookings);
            setIsLoading(false); // Set loading to false after data is fetched
        }, 1500); // 1.5 second delay

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    const handleConfirmRemove = () => {
        if (bookingToRemoveId) {
            const updatedBookings = bookings.filter((booking) => booking.bookingId !== bookingToRemoveId);
            setBookings(updatedBookings);
            localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        }
        setShowConfirmationModal(false);
        setBookingToRemoveId(null);
    };

    const handleRemoveClick = (bookingId) => {
        setBookingToRemoveId(bookingId);
        setShowConfirmationModal(true);
    };

    const handleCancelRemove = () => {
        setShowConfirmationModal(false);
        setBookingToRemoveId(null);
    };

    const handleBookingClick = (booking) => {
        setSelectedBooking(booking);
    };

    const handleCloseDetails = () => {
        setSelectedBooking(null);
    };

    return (
        <div className="max-w-9xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">
                Your Confirmed Bookings
            </h2>
            {/* Conditional Rendering Logic */}
            {isLoading ? (
                // Show skeleton if loading
                <BookingTableSkeleton />
            ) : bookings.length > 0 ? (
                // Show table if data is available
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-pink-500 text-white">
                            <tr>
                                <th className="p-2 border">Place Image</th>
                                <th className="p-2 border">Place Name</th>
                                <th className="p-2 border">Location</th>
                                <th className="p-2 border">Booking Price</th>
                                <th className="p-2 border">Customer Details</th>
                                <th className="p-2 border">Check In</th>
                                <th className="p-2 border">Check Out</th>
                                <th className="p-2 border">Payment Method</th>
                                <th className="p-2 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr
                                    key={booking.bookingId}
                                    className="cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleBookingClick(booking)}
                                >
                                    <td className="border p-2">
                                        <img
                                            src={booking.image}
                                            alt={booking.title}
                                            className="w-[100px] h-[100px] object-cover rounded"
                                        />
                                    </td>
                                    <td className="border p-2">{booking.title}</td>
                                    <td className="border p-2">{booking.location}</td>
                                    <td className="border p-2 font-bold text-pink-600">
                                        {booking.finalPrice || booking.price}
                                    </td>
                                    <td className="border p-2 text-sm">
                                        <p><strong>Name:</strong> {booking.fullName}</p>
                                        <p><strong>Email:</strong> {booking.email}</p>
                                        <p><strong>Phone:</strong> {booking.phone}</p>
                                        <p><strong>Members:</strong> {booking.member}</p>
                                    </td>
                                    <td className="border p-2">{booking.CheckInDate}</td>
                                    <td className="border p-2">{booking.CheckOutDate}</td>
                                    <td className="border p-2">
                                        <div className="flex items-center justify-center text-xl capitalize">
                                            {booking.paymentMode} <FaCheckCircle className="text-green-500 ml-2" />
                                        </div>
                                    </td>
                                    <td className="border p-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveClick(booking.bookingId);
                                            }}
                                            className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                // Show "No bookings" message if no data is available
                <div className="text-center text-2xl mt-24 text-red-600 font-semibold">
                    No bookings yet.
                    {/* <button
                        onClick={() => navigate(-1)}
                        className="mt-4 block mx-auto bg-pink-500 text-white py-1 px-8 rounded hover:bg-pink-700"
                    >
                        Back 
                    </button> */}
                </div>
            )}

            <div className="mt-4">
                <button
                    onClick={() => navigate("/")}
                    className="w-full p-4 bg-pink-500 text-white py-2 rounded hover:bg-pink-700"
                >
                    Back To Home
                </button>

                
            </div>

            <BookingDetailsModal booking={selectedBooking} onClose={handleCloseDetails} />

            {showConfirmationModal && (
                <ConfirmationModal
                    message="Are you sure you want to remove this booking? This action cannot be undone."
                    onConfirm={handleConfirmRemove}
                    onCancel={handleCancelRemove}
                />
            )}
        </div>
    );
}