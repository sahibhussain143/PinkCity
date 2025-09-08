import React from "react";

// --- Icon Components (replaces react-icons) ---
const FaCheckCircle = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path>
    </svg>
);

const FaTimes = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
    </svg>
);

const FaTag = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M497.941 225.941L286.059 14.059A48.003 48.003 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48.003 48.003 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l184.118-184.118c18.745-18.744 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z"></path>
    </svg>
);

const FaExclamationTriangle = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-60.035-39.993-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.982 12.654z"></path>
    </svg>
);


// --- Skeleton Components ---

// Skeleton for Mobile Card View
const BookingCardSkeleton = () => (
    <div className="space-y-4 animate-pulse">
        {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="h-5 bg-gray-300 rounded w-3/5 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
                <div className="mt-4 flex justify-end">
                    <div className="h-8 bg-gray-300 rounded w-20"></div>
                </div>
            </div>
        ))}
    </div>
);


// Skeleton Component for the Desktop Table View
const BookingTableSkeleton = () => (
    <div className="overflow-x-auto animate-pulse">
        <table className="min-w-full border border-gray-300">
            <thead className="bg-pink-500 text-white">
                <tr>
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

// --- Modal Components ---

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
                        Delete
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
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative p-6 max-h-[500px] mt-24 overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <FaTimes className="text-2xl" />
                </button>
                <h3 className="text-2xl font-bold mb-4 text-center text-pink-500">Booking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img src={booking.image} alt={booking.title} className="rounded-lg mb-2" />
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
                            <strong className="text-black/80">Payment Status:</strong> Confirmed ({booking.paymentMode}) 
                                        <img src="/images/successpayment.png" alt="" className="w-4 h-4 m-1" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---
export default function Bookings() {
    const [bookings, setBookings] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [selectedBooking, setSelectedBooking] = React.useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = React.useState(false);
    const [bookingToRemoveId, setBookingToRemoveId] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState(""); // State for the search query

    React.useEffect(() => {
        // Simulate a network delay for the skeleton to be visible
        const timer = setTimeout(() => {
            const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
            setBookings(storedBookings);
            setIsLoading(false);
        }, 1500); // 1.5 second delay

        return () => clearTimeout(timer);
    }, []);

    const handleConfirmDelete = () => {
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




    const handleCancelDelete = () => {
        setShowConfirmationModal(false);
        setBookingToRemoveId(null);
    };

    const handleBookingClick = (booking) => {
        setSelectedBooking(booking);
    };

    const handleCloseDetails = () => {
        setSelectedBooking(null);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter bookings based on the search query
    const filteredBookings = bookings.filter(booking =>
        booking.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className=" max-w-7xl mx-auto p-4 md:p-6 mt-10 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className=" flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-pink-500">
                    My Bookings
                </h2>
                <input
                    type="search"
                    placeholder="Search Locations"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="py-2 border-pink-500 border w-full max-w-xs h-10 px-4 outline-none rounded-xl focus:ring-2 focus:ring-pink-300"
                />
            </div>

            {/* --- Conditional Rendering Logic --- */}
            {isLoading ? (
                <>
                    <div className="md:hidden">
                        <BookingCardSkeleton />
                    </div>
                    <div className="hidden md:block">
                        <BookingTableSkeleton />
                    </div>
                </>
            ) : filteredBookings.length > 0 ? (
                <>
                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                        {filteredBookings.map((booking) => (
                            <div key={booking.bookingId} className="bg-white p-4 rounded-lg shadow border border-gray-200" onClick={() => handleBookingClick(booking)}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg text-pink-600">{booking.title}</h3>
                                        <p className="text-sm text-gray-600">{booking.location}</p>
                                    </div>
                                    <div className="font-bold text-lg text-pink-600 whitespace-nowrap">
                                        {booking.finalPrice || booking.price}
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div>
                                    <p className="text-sm"><strong>Check-in:</strong> {booking.CheckInDate}</p>
                                    <p className="text-sm"><strong>Check-out:</strong> {booking.CheckOutDate}</p>
                                    <p className="text-sm"><strong>Guest:</strong> {booking.fullName}</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex items-center text-sm capitalize">
                                        {booking.paymentMode}
                                        <img src="/images/successpayment.png" alt="" className="w-4 h-4 m-1" />

                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveClick(booking.bookingId);
                                        }}
                                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead className="bg-pink-500 text-white">
                                <tr>
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
                                {filteredBookings.map((booking) => (
                                    <tr
                                        key={booking.bookingId}
                                        className="cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleBookingClick(booking)}
                                    >
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
                                                {booking.paymentMode}


                                                <img src="/images/successpayment.png" alt="" className="w-4 h-4 m-1" />
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
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="text-center py-16 text-gray-500">
                    <h3 className="text-2xl font-semibold text-pink-600">
                        {bookings.length > 0 ? "No locations found." : "No bookings yet."}
                    </h3>
                    <p className="mt-2">
                        {bookings.length > 0 ? `Your search for "${searchQuery}" did not match any bookings.` : "When you book a trip, you'll see your details here."}
                    </p>
                </div>
            )}

            <BookingDetailsModal booking={selectedBooking} onClose={handleCloseDetails} />

            {showConfirmationModal && (
                <ConfirmationModal
                    message="Are you sure you want to delete this booking? This action cannot be undone."
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
}

