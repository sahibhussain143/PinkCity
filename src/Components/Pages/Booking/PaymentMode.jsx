import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaTag, FaTimes, FaChevronDown, FaArrowLeft, FaGift, FaExclamationTriangle } from 'react-icons/fa';
import { SiRazorpay } from 'react-icons/si';

// --- Skeleton Loader Component for the Payment Page ---
const PaymentPageSkeleton = () => (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen relative p-4 animate-pulse">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
            {/* Left Side: Price Summary & Payment Options (Skeleton) */}
            <div className="w-full md:w-2/5 bg-pink-500 text-white p-6 md:p-8 md:rounded-l-lg md:rounded-r-none rounded-t-lg flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <div className="bg-pink-300 rounded-full w-12 h-12 mr-4"></div>
                        <div>
                            <div className="h-4 bg-pink-300 rounded w-40 mb-2"></div>
                            <div className="h-3 bg-pink-300 rounded w-28"></div>
                        </div>
                    </div>
                </div>
                <div className="h-3 bg-pink-300 rounded w-3/4 mb-4 md:mb-8"></div>
                <div className="bg-black/20 p-6 rounded-lg flex-grow">
                    <div className="h-4 bg-pink-100 rounded w-24 mb-2"></div>
                    <div className="h-6 bg-pink-100 rounded w-32 mb-6"></div>
                    <div className="h-4 bg-pink-100 rounded w-full mb-2"></div>
                    <div className="h-4 bg-pink-100 rounded w-full"></div>
                </div>
                <div className="space-y-4 mt-8">
                    <div className="p-3 border rounded-lg bg-pink-200 h-16"></div>
                    <div className="p-3 border rounded-lg bg-pink-200 h-16"></div>
                    <div className="p-3 border rounded-lg bg-pink-200 h-16"></div>
                </div>
                <div className="mt-6 h-4 bg-pink-300 rounded w-24"></div>
            </div>

            {/* Right Side: Payment Details Display (Skeleton) */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <div className="flex items-center mb-6">
                    <div className="h-6 bg-gray-300 rounded w-40"></div>
                </div>
                <div className="flex-grow">
                    <div className="h-4 bg-gray-300 rounded w-28 mb-4"></div>
                    <div className="bg-blue-100 border-l-4 border-pink-500 p-4 mb-4 rounded-lg">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-pink-600 rounded-full mr-3"></div>
                            <div className="h-4 bg-gray-300 rounded w-40"></div>
                            <div className="h-4 bg-gray-300 rounded w-16 ml-auto"></div>
                        </div>
                    </div>
                    <div className="h-40 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
);


// --- Reusable Modal Component ---
const Modal = ({ title, message, onClose, onConfirm, showCloseButton = true, confirmText = 'OK' }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full p-6 mx-auto">
                <div className="flex justify-between items-center pb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    {showCloseButton && (
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <FaTimes className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                    <p>{message}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 transition-colors"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Main PaymentPage Component ---
const PaymentPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); // New loading state
    const [selectedMode, setSelectedMode] = useState('upi');
    const [bookingData, setBookingData] = useState(null);
    const [upiId, setUpiId] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [errors, setErrors] = useState({});
    const [showChangePhone, setShowChangePhone] = useState(false);
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [showOffers, setShowOffers] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [finalPrice, setFinalPrice] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '', onConfirm: () => setShowModal(false) });

    const [offersList, setOffersList] = useState([
        { provider: 'UPI', description: 'Up to 10% cashback on UPI payments.', minAmount: '₹500', code: 'UPI10', isApplied: false },
        { provider: 'Amazon Pay', description: 'Get ₹50 back on Amazon Pay.', minAmount: '₹1000', code: 'AMAZON50', isApplied: false },
        { provider: 'Google Pay', description: 'Win a scratch card up to ₹100.', minAmount: '₹750', code: 'GPAY100', isApplied: false },
        { provider: 'Credit Card', description: 'Flat 5% off on all credit cards.', minAmount: '₹2000', code: 'CC5', isApplied: false },
        { provider: 'Debit Card', description: '10% off on first debit card transaction.', minAmount: '₹1500', code: 'DC10', isApplied: false },
        { icon: <FaExclamationTriangle className="text-yellow-500 text-5xl mx-auto mb-4" />}
    ]);

    useEffect(() => {
        // Simulate a network delay for the skeleton to be visible
        const timer = setTimeout(() => {
            try {
                const storedBooking = JSON.parse(localStorage.getItem('bookingFormData'));
                if (storedBooking) {
                    setBookingData(storedBooking);
                    setFinalPrice(storedBooking.price);
                } else {
                    navigate('/gellary');
                }
            } catch (error) {
                console.error("Failed to parse booking data from local storage", error);
                navigate('/gellary');
            } finally {
                setIsLoading(false); // Set loading to false after fetching data
            }
        }, 1500); // 1.5 second delay

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [navigate]);

    const isPaymentModeDisabled = (mode) => {
        if (!selectedOffer) return false;
        let requiredMode;
        if (['UPI', 'Amazon Pay', 'Google Pay'].includes(selectedOffer.provider)) {
            requiredMode = 'upi';
        } else if (['Credit Card', 'Debit Card'].includes(selectedOffer.provider)) {
            requiredMode = 'card';
        }
        return requiredMode && mode !== requiredMode;
    };

    const handleSelect = (mode) => {
        if (isPaymentModeDisabled(mode)) {
            setModalContent({

                title: 'Offer Applied',
                message: `This offer is only valid for ${selectedOffer.provider} payments. Please use that method or remove the offer to select another option.`,
                onConfirm: () => setShowModal(false)
            });
            setShowModal(true);
            return;
        }
        setSelectedMode(mode);
        setErrors({});
        setSelectedBank('');
        if (mode !== 'upi') setUpiId('');
        if (mode !== 'card') {
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
        }
    };

    const handleBankSelect = (bankName) => {
        setSelectedBank(bankName);
    };

    const applyOffer = (offer) => {
        if (!bookingData) {
            setModalContent({
                title: 'Error',
                message: 'Booking data not found. Cannot apply offer.',
                onConfirm: () => setShowModal(false)
            });
            setShowModal(true);
            return;
        }

        setOffersList(offersList.map(o => ({
            ...o,
            isApplied: o.code === offer.code
        })));

        setSelectedOffer(offer);

        let newSelectedMode;
        if (['UPI', 'Amazon Pay', 'Google Pay'].includes(offer.provider)) {
            newSelectedMode = 'upi';
        } else if (['Credit Card', 'Debit Card'].includes(offer.provider)) {
            newSelectedMode = 'card';
        } else {
            newSelectedMode = 'upi';
        }
        setSelectedMode(newSelectedMode);

        const originalPriceValue = parseFloat(bookingData.price.replace('₹', ''));
        let discount = 0;
        if (offer.code === 'UPI10') {
            discount = originalPriceValue * 0.1;
        } else if (offer.code === 'AMAZON50') {
            discount = 50;
        } else if (offer.code === 'CC5') {
            discount = originalPriceValue * 0.05;
        } else if (offer.code === 'DC10') {
            discount = originalPriceValue * 0.1;
        } else if (offer.code === 'GPAY100') {
            discount = 100;
        }

        const newPrice = originalPriceValue - discount;
        setFinalPrice(`₹${newPrice.toFixed(2)}`);
        setShowOffers(false);
        setModalContent({
            title: 'Offer Applied!',
            message: `${offer.description} has been successfully applied.`,
            onConfirm: () => setShowModal(false)
        });
        setShowModal(true);
    };

    const removeOffer = () => {
        setSelectedOffer(null);
        if (bookingData) {
            setFinalPrice(bookingData.price);
        }
        setSelectedMode('upi');
        setOffersList(offersList.map(o => ({ ...o, isApplied: false })));
        setModalContent({
            title: 'Offer Removed',
            message: 'The applied offer has been removed.',
            onConfirm: () => setShowModal(false)
        });
        setShowModal(true);
    };

    const handlePay = () => {
        if (!bookingData) {
            setModalContent({
                title: 'Error',
                message: 'Booking data not found. Please try again.',
                onConfirm: () => setShowModal(false)
            });
            setShowModal(true);
            return;
        }

        let formIsValid = true;
        const newErrors = {};

        if (selectedOffer) {
            let requiredMode;
            if (['UPI', 'Amazon Pay', 'Google Pay'].includes(selectedOffer.provider)) {
                requiredMode = 'upi';
            } else if (['Credit Card', 'Debit Card'].includes(selectedOffer.provider)) {
                requiredMode = 'card';
            }

            if (requiredMode && selectedMode !== requiredMode) {
                formIsValid = false;
                setModalContent({
                    title: 'Payment Method Mismatch',
                    message: `Please use the ${requiredMode.toUpperCase()} payment method to apply this offer.`,
                    onConfirm: () => setShowModal(false)
                });
                setShowModal(true);
                return;
            }
        }

        if (selectedMode === 'upi') {
            if (!upiId || !upiId.includes('@')) {
                formIsValid = false;
                newErrors.upiId = 'Please enter a valid UPI ID (e.g., example@upi)';
                setModalContent({
                    title: 'Invalid UPI ID',
                    message: 'Please enter a valid UPI ID.',
                    onConfirm: () => setShowModal(false)
                });
                setShowModal(true);
            }
        } else if (selectedMode === 'card') {
            if (!cardNumber || !/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
                formIsValid = false;
                newErrors.cardNumber = 'Card number must be 16 digits.';
                setModalContent({
                    title: 'Invalid Card Number',
                    message: 'Please enter a valid 16-digit card number.',
                    onConfirm: () => setShowModal(false)
                });
                setShowModal(true);
            }
            if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
                formIsValid = false;
                newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
                setModalContent({
                    title: 'Invalid Expiry Date',
                    message: 'Please enter a valid expiry date (MM/YY).',
                    onConfirm: () => setShowModal(false)
                });
                setShowModal(true);
            }
            if (!cvv || !/^\d{3,4}$/.test(cvv)) {
                formIsValid = false;
                newErrors.cvv = 'CVV must be 3 or 4 digits.';
                setModalContent({
                    title: 'Invalid CVV',
                    message: 'Please enter a valid 3 or 4 digit CVV.',
                    onConfirm: () => setShowModal(false)
                });
                setShowModal(true);
            }
        } else if (selectedMode === 'netbanking') {
            if (!selectedBank) {
                formIsValid = false;
                setModalContent({
                    title: 'Bank Not Selected',
                    message: 'Please select a bank to proceed with Netbanking.',
                    onConfirm: () => setShowModal(false)
                });
                setShowModal(true);
            }
        }

        setErrors(newErrors);

        if (formIsValid) {
            const finalBooking = {
                ...bookingData,
                paymentMode: selectedMode,
                paymentDetails: {
                    upiId,
                    cardNumber,
                    expiryDate,
                    cvv,
                    netbankingBank: selectedBank
                },
                finalPrice: finalPrice,
                appliedOffer: selectedOffer ? selectedOffer.code : null,
            };

            const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
            existingBookings.push(finalBooking);
            localStorage.setItem('bookings', JSON.stringify(existingBookings));

            const customerName = bookingData.fullName || bookingData.phone || 'customer';
            setModalContent({
                title: 'Booking Successful!',
                message: `Booking successful for ${customerName}! Total paid: ${finalPrice}.`,
                onConfirm: () => {
                    localStorage.removeItem('currentBooking');
                    localStorage.removeItem('bookingFormData');
                    setShowModal(false);
                    navigate('/confirmbooking');
                }
            });
            setShowModal(true);
        }
    };

    const handlePhoneChangeClick = () => {
        setShowChangePhone(!showChangePhone);
        setNewPhoneNumber('');
    };

    const handlePhoneUpdate = () => {
        const phoneRegex = /^\d{10}$/;
        if (phoneRegex.test(newPhoneNumber)) {
            setBookingData({ ...bookingData, phone: newPhoneNumber });
            setShowChangePhone(false);
            setModalContent({
                title: 'Success',
                message: 'Phone number updated successfully!',
                onConfirm: () => setShowModal(false)
            });
            setShowModal(true);
        } else {
            setModalContent({
                title: 'Invalid Phone Number',
                message: 'Please enter a valid 10-digit phone number.',
                onConfirm: () => setShowModal(false)
            });
            setShowModal(true);
        }
    };

    const handleOfferClick = () => {
        setShowOffers(true);
    };

    // --- Conditional Rendering for Skeleton Loader ---
    if (isLoading) {
        return <PaymentPageSkeleton />;
    }

    const bankList = [
        'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'State Bank of India', 'Kotak Mahindra Bank',
    ];

    const renderOffers = () => {
        return offersList.map((offer, index) => {
            const isSelected = selectedOffer && selectedOffer.code === offer.code;
            return (
                <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer border-2 transition-colors duration-200 ${
                        isSelected ? 'bg-pink-100 border-pink-500' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                >
                    <div className="flex items-start">
                        <FaTag className="w-5 h-5 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                        <div className="flex-grow">
                            <p className="font-semibold">{offer.description}</p>
                            <p className="text-sm text-gray-600">
                                Minimum amount: <span className="font-semibold">{offer.minAmount}</span>
                            </p>
                            <div className="bg-gray-100 text-gray-800 text-xs font-mono p-1 rounded-md inline-block mt-2">
                                {offer.code}
                            </div>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                applyOffer(offer);
                            }}
                            disabled={isSelected}
                            className={`ml-4 px-4 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${
                                isSelected ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-pink-600 text-white hover:bg-pink-700'
                            }`}
                        >
                            {isSelected ? 'Applied' : 'Apply'}
                        </button>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen relative p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
                {/* Left Side: Price Summary & Payment Options (Responsive) */}
                <div className="w-full md:w-2/5 bg-pink-500 text-white p-6 md:p-8 md:rounded-l-lg md:rounded-r-none rounded-t-lg flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <div className="bg-white rounded-full p-2 mr-4">
                                <span className="text-pink-600 font-bold text-lg">RBT</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Rajasthan By Tours</h2>
                                <p className="text-sm font-light">Razorpay Trusted Business</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mb-4 md:mb-8">Thank you for booking with us! Your tou...</p>
                    <div className="bg-black/20 p-6 rounded-lg flex-grow">
                        <h3 className="text-sm font-bold text-pink-100 mb-2">Price Summary</h3>
                        <div className="flex items-baseline mb-6">
                            {selectedOffer ? (
                                <>
                                    <p className="text-xl font-bold line-through text-pink-300 mr-2">{bookingData.price}</p>
                                    <p className="text-2xl font-bold">{finalPrice}</p>
                                </>
                            ) : (
                                <p className="text-2xl font-bold">{finalPrice}</p>
                            )}
                        </div>

                        {selectedOffer && (
                            <div className="bg-white text-pink-600 p-2 rounded-lg flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <FaGift className="mr-2" />
                                    <span className="text-sm font-semibold">Offer Applied! ({selectedOffer.code})</span>
                                </div>
                                <FaTimes className="cursor-pointer text-sm" onClick={removeOffer} />
                            </div>
                        )}

                        <div
                            className="flex items-center text-sm font-light mb-2 cursor-pointer"
                            onClick={handlePhoneChangeClick}
                        >
                            <FaPhone className="w-4 h-4 mr-2" />
                            <span className='text-md font-bold'>Using as {bookingData.phone}</span>
                            <FaChevronDown className="w-3 h-3 ml-auto" />
                        </div>

                        {showChangePhone && (
                            <div className="mt-2 p-2 bg-white/20 rounded-lg">
                                <input
                                    type="tel"
                                    placeholder="New 10-digit phone number"
                                    value={newPhoneNumber}
                                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                                    className="w-full px-2 py-1 text-black text-sm rounded-md mb-2"
                                />
                                <button
                                    onClick={handlePhoneUpdate}
                                    className="w-full bg-pink-600 text-white text-xs font-bold py-1 rounded-md hover:bg-pink-700"
                                >
                                    Update
                                </button>
                            </div>
                        )}

                        <div
                            className="flex items-center text-sm font-light cursor-pointer mt-4"
                            onClick={handleOfferClick}
                        >
                            <FaTag className="w-4 h-4 mr-2" />
                            <span>Offers on UPI, Amazon ...</span>
                            <FaChevronDown className="w-3 h-3 ml-auto" />
                        </div>
                    </div>
                    <div className="space-y-4 mt-8">
                        <div
                            onClick={() => handleSelect('upi')}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                                selectedMode === 'upi' ? 'border-pink-600 bg-blue-50 text-black' : 'border-gray-300 text-white'
                            } ${isPaymentModeDisabled('upi') ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">UPI</p>
                                <div className="flex space-x-1">
                                    <div className="w-8 justify-center items-center h-8 bg-gray-500 rounded-full"><img src="https://i.pinimg.com/736x/b1/5d/fc/b15dfc9f11992f147703c4b1ff45ea8a.jpg" alt="" className=' w-8 h-8 object-cover  rounded-full'/></div>
                                </div>
                            </div>
                            <p className="text-xs text-black/50 font-extrabold">5 Offers</p>
                        </div>
                        <div
                            onClick={() => handleSelect('card')}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                                selectedMode === 'card' ? 'border-pink-600 bg-blue-50 text-black' : 'border-gray-300 text-white'
                            } ${isPaymentModeDisabled('card') ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">Cards</p>
                                <div className="flex space-x-1">
                                    <div className="w-6 h-6 ">
                                        <img src="https://cdn-icons-png.flaticon.com/512/4021/4021708.png" alt="" className='h-6 m-1 w-8' />
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-black/50 font-extrabold">3 Offers</p>
                        </div>
                        <div
                            onClick={() => handleSelect('emi')}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                                selectedMode === 'emi' ? 'border-pink-600 bg-blue-50 text-black' : 'border-gray-300 text-white'
                            } ${isPaymentModeDisabled('emi') ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <p className="font-semibold">EMI</p>
                        </div>
                        <div
                            onClick={() => handleSelect('netbanking')}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                                selectedMode === 'netbanking' ? 'border-pink-600 bg-blue-50 text-black' : 'border-gray-300 text-white'
                            } ${isPaymentModeDisabled('netbanking') ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <p className="font-semibold">Netbanking</p>
                        </div>
                        <div
                            onClick={() => handleSelect('cash')}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                                selectedMode === 'cash' ? 'border-pink-600 bg-blue-50 text-black' : 'border-gray-300 text-white'
                            } ${isPaymentModeDisabled('cash') ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <p className="font-semibold">Cash </p>
                        </div>
                    </div>
                    <div className="mt-6 text-xs flex items-center">
                        Secured by
                        <SiRazorpay className="w-16 h-4 ml-2" />
                    </div>
                </div>

                {/* Right Side: Payment Details Display (Responsive) */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                    <div className="flex items-center mb-6">
                        <button className="md:hidden mr-4 p-2 rounded-full bg-gray-200" onClick={() => navigate(-1)}>
                            <FaArrowLeft />
                        </button>
                        <h2 className="text-xl font-bold">Payment Options</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm text-gray-500 mb-4">Available Offers</p>
                        <div className="bg-blue-100 border-l-4 border-pink-500 p-4 mb-4 rounded-lg cursor-pointer" onClick={handleOfferClick}>
                            <div className="flex items-center">
                                <FaTag className="w-6 h-6 text-pink-600 mr-3" />
                                <p className="text-sm font-semibold">Up to 10% cashback on UPI using S...</p>
                                <button className="ml-auto text-pink-600 text-sm font-semibold whitespace-nowrap">+6 View all</button>
                            </div>
                        </div>

                        {selectedMode === 'upi' && (
                            <>
                                <p className="text-sm text-pink-500 font-bold mb-2">UPI QR</p>
                                <div className="border rounded-lg p-4 text-center relative">
                                    <div className="absolute top-2 right-2 text-xs text-gray-500">11:45</div>
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 bg-gray-200">
                                            <img src="https://media.istockphoto.com/id/1347277582/vector/qr-code-sample-for-smartphone-scanning-on-white-background.jpg?s=612x612&w=0&k=20&c=6e6Xqb1Wne79bJsWpyyNuWfkrUgNhXR4_UYj3i_poc0=" alt="Qr Code..." className='h-full w-full' />
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium mb-2">Scan the QR using any UPI App</p>
                                    <div className="flex justify-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full">
                                            <img src="https://static.vecteezy.com/system/resources/previews/049/116/753/non_2x/phonepe-app-icon-transparent-background-free-png.png" alt="phonepay..." />
                                        </div>
                                        <div className="w-8 h-8 bg-gray-200 rounded-full">
                                            <img src="https://static.vecteezy.com/system/resources/previews/049/116/753/non_2x/phonepe-app-icon-transparent-background-free-png.png" alt="gpay..." />
                                        </div>
                                        <div className="w-8 h-8 bg-gray-200 rounded-full">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuosSt_EPyYs8dRa1t1vm81_UsoigLpXvwdw&s" alt="ptm..." />
                                        </div>
                                    </div>
                                    <p className="text-xs text-black/60 font-extrabold mt-2">5 Offers</p>
                                    <div className="mt-4 space-y-2">
                                        <label className="block text-sm font-medium text-left">UPI ID</label>
                                        <input
                                            type="text"
                                            placeholder="example@upi"
                                            value={upiId}
                                            onChange={(e) => setUpiId(e.target.value)}
                                            className="w-full px-4 py-2 border focus:border-pink-600 rounded-md text-black"
                                        />
                                        {errors.upiId && <span className="text-red-500 text-xs">{errors.upiId}</span>}
                                        <button
                                            onClick={handlePay}
                                            className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {selectedMode === 'card' && (
                            <div className="mt-4 space-y-2 border rounded-lg p-4">
                                <h3 className="text-lg font-medium text-black">Credit / Debit Card</h3>
                                <label className="block text-sm font-medium text-black">Card Number</label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                />
                                {errors.cardNumber && <span className="text-red-500 text-xs">{errors.cardNumber}</span>}
                                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-black mt-2">Expiry Date</label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            className="w-full px-4 py-2 border rounded-md text-black"
                                        />
                                        {errors.expiryDate && <span className="text-red-500 text-xs">{errors.expiryDate}</span>}
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-black mt-2">CVV</label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            className="w-full px-4 py-2 border rounded-md text-black"
                                        />
                                        {errors.cvv && <span className="text-red-500 text-xs">{errors.cvv}</span>}
                                    </div>
                                </div>
                                <button
                                    onClick={handlePay}
                                    className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 mt-4"
                                >
                                    Pay Now
                                </button>
                            </div>
                        )}

                        {selectedMode === 'emi' && (
                            <div className="mt-4 border rounded-lg p-4">
                                <h3 className="text-lg font-medium text-black mb-4">EMI Options</h3>
                                <p className="text-sm text-gray-600 mb-4">Select an EMI plan from your bank.</p>
                                <div className="space-y-2">
                                    <p className="text-sm">No Cost EMI is not available. Standard EMI available from participating banks.</p>
                                    <select className="w-full p-2 border rounded-md text-black">
                                        <option value="">Select a Bank</option>
                                        {bankList.map((bank, index) => (
                                            <option key={index} value={bank}>{bank}</option>
                                        ))}
                                    </select>
                                </div>
                                <button onClick={() => {}} className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 mt-4">
                                    Continue to Pay
                                </button>
                            </div>
                        )}

                        {selectedMode === 'netbanking' && (
                            <div className="mt-4 border rounded-lg p-4">
                                <h3 className="text-lg font-medium text-black mb-4">Netbanking</h3>
                                <p className="text-sm text-gray-600 mb-4">Select your bank to pay.</p>
                                <select
                                    className="w-full p-2 border rounded-md text-black"
                                    value={selectedBank}
                                    onChange={(e) => handleBankSelect(e.target.value)}
                                >
                                    <option value="">Select a Bank</option>
                                    {bankList.map((bank, index) => (
                                        <option key={index} value={bank}>{bank}</option>
                                    ))}
                                </select>
                                {errors.selectedBank && <span className="text-red-500 text-xs">{errors.selectedBank}</span>}
                                <button
                                    onClick={handlePay}
                                    className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 mt-4"
                                >
                                    Pay Now
                                </button>
                            </div>
                        )}
                        
                        {selectedMode === 'cash' && (
                            <div className="mt-4 border rounded-lg p-4">
                                <h3 className="text-lg font-medium text-black">Cash on Pickup</h3>
                                <p className="text-sm text-gray-600">Please pay in cash upon arrival. An advance payment might be required for confirmation.</p>
                                <button
                                    onClick={handlePay}
                                    className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 mt-4"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showOffers && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                        <div className="flex justify-between items-center pb-3 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">Available Offers</h3>
                            <button onClick={() => setShowOffers(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <FaTimes className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-4 space-y-4">
                            {renderOffers()}
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <Modal
                    title={modalContent.title}
                    message={modalContent.message}
                    onConfirm={modalContent.onConfirm}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default PaymentPage;