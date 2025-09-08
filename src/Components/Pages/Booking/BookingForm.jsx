import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Skeleton UI component
const SkeletonBookingForm = () => (
    <div className="relative w-full max-w-6xl p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-md animate-pulse">
        {/* Left Column Skeleton */}
        <div className="space-y-4">
            <div className="h-8 bg-gray-400 rounded w-3/4 mx-auto md:mx-0"></div>
            <div className="h-72 bg-gray-400 rounded-lg"></div>
            <div className="h-4 bg-gray-400 rounded w-full"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            <div className="h-4 bg-gray-400 rounded w-full"></div>
        </div>

        {/* Right Column Skeleton */}
        <div className="space-y-4">
            <div className="h-8 bg-gray-400 rounded w-2/3 mx-auto"></div>
            <div className="h-10 bg-gray-400 rounded"></div>
            <div className="h-10 bg-gray-400 rounded"></div>
            <div className="h-10 bg-gray-400 rounded"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-10 bg-gray-400 rounded"></div>
                <div className="h-10 bg-gray-400 rounded"></div>
            </div>
            <div className="h-10 bg-gray-400 rounded"></div>
            <div className="h-24 bg-gray-400 rounded"></div>
            <div className="h-12 bg-gray-400 rounded"></div>
        </div>
    </div>
);

const BookingForm = () => {
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        CheckInDate: '',
        CheckOutDate: '',
        member: 1,
        notes: '',
    });

    useEffect(() => {
        const storedEvent = JSON.parse(localStorage.getItem('currentBooking'));
        if (storedEvent) {
            // Simulate a network delay for the skeleton to be visible
            setTimeout(() => {
                setEventDetails(storedEvent);
                setIsLoading(false);
            }, 1000); // 1-second delay
        } else {
            setIsLoading(false);
            navigate(-1);
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBooking = {
            ...eventDetails,
            ...formData,
            bookingId: Date.now(),
        };
        localStorage.setItem('bookingFormData', JSON.stringify(newBooking));
        navigate('/paymentmode');
    };

    const handleClose = () => {
        navigate(-1);
    };

    if (isLoading) {
        return (
            <div className="relative min-h-screen bg-gray-800 flex items-center justify-center p-4 md:p-8">
                <SkeletonBookingForm />
            </div>
        );
    }
    
    // Determine the image source based on whether eventDetails.image is an array or a string
    const imageSrc = Array.isArray(eventDetails.image) ? eventDetails.image[0] : eventDetails.image;

    // Your existing code to render the full form
    return (
        <div className="relative min-h-screen bg-gray-800 flex items-center justify-center p-4 md:p-8">
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-20"
                aria-label="Close"
            >
                &times;
            </button>

            {/* Content Container */}
            <div className="w-full max-w-6xl p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-md">
                {/* Left Column: Product Details */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-pink-500 mb-4">
                        {eventDetails.title}
                    </h3>
                    <img
                        src={imageSrc}
                        alt={eventDetails.title}
                        className="w-full max-h-72 object-cover rounded-lg mx-auto md:mx-0"
                    />
                    <p className="text-white/80 font-semibold leading-relaxed">
                        {eventDetails.description}
                    </p>
                    <div className="mt-4 text-md font-semibold text-white">
                        <p className='text-white/80'>
                            <span className="font-bold text-pink-600 text-xl">Price:</span> {eventDetails.price}
                        </p>
                        <p>
                            <span className="font-bold text-pink-600 text-xl">Duration:</span> {eventDetails.duration}
                        </p>
                        <p className="mt-2 text-sm text-white ">
                            <span className='font-bold text-pink-600 text-xl '>Booking for:</span> {formData.member} {formData.member > 1 ? 'members' : 'member'}.
                        </p>
                    </div>
                </div>

                {/* Right Column: Booking Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">
                        Fill The Right Details
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block mb-1 font-medium text-white">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-1 font-medium text-white">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                                placeholder="+1234567890"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="CheckInDate" className="block mb-1 font-medium text-white">Check In</label>
                                <input
                                    type="date"
                                    id="CheckInDate"
                                    name="CheckInDate"
                                    required
                                    value={formData.CheckInDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md cursor-pointer focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="CheckOutDate" className="block mb-1 font-medium text-white">Check Out</label>
                                <input
                                    type="date"
                                    id="CheckOutDate"
                                    name="CheckOutDate"
                                    required
                                    value={formData.CheckOutDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md pointer-events-auto focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="member" className="block mb-1 font-medium text-white">Members</label>
                            <input
                                type="number"
                                id="member"
                                name="member"
                                min="1"
                                value={formData.member}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="notes" className="block mb-1 font-medium text-white">Additional Notes</label>
                            <textarea
                                id="notes"
                                name="notes"
                                rows="4"
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:border-pink-500 focus:ring-pink-500 focus:outline-none"
                                placeholder="Any special requests or questions..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition font-semibold"
                        >
                            Submit Booking Details
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;