import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const EventsTicketing = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [relatedImages, setRelatedImages] = useState([]);
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');

    const handleImageClick = (event) => {
        // Limit the related images to the first 5
        const imagesToDisplay = event.image.slice(0, 5);
        setSelectedImage(imagesToDisplay[0]);
        setRelatedImages(imagesToDisplay);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedImage(null);
        setRelatedImages([]);
    };

    const categories = [
        { id: 'all', name: 'All Events' },
        { id: 'festivals', name: 'Festivals' },
        { id: 'shows', name: 'Cultural Shows' },
        { id: 'exhibitions', name: 'Exhibitions' },
        { id: 'workshops', name: 'Workshops' }
    ];

    const events = [
        {
            id: 1,
            title: "Jaipur Literature Festival",
            date: "Jan 18-22, 2024",
            location: "Diggi Palace, Jaipur",
            category: 'festivals',
            price: "₹499 - ₹2999",
             image: [
                "https://assets.telegraphindia.com/telegraph/71a335fc-10dc-4573-941c-1b14129d9f05.jpg",   
                "https://images.livemint.com/img/2023/01/27/original/JLF_at_Diggi_Getty_Images_1674791320340.jpg",   
                "https://c.ndtvimg.com/2024-02/96g1kgqo_jaisalmer_625x300_01_February_24.jpg",                           
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/Spotlight-JLF-_2022__1__1200x768.jpeg?size=1200:675",   
                
            ],
            organizer: "Teamwork Arts",
            description: "The world's largest free literary festival featuring Nobel laureates, Booker Prize winners and emerging writers from over 35 countries.",
            ticketsLeft: "Limited tickets available",
            partnerBadge: true
        },
        {
            id: 2,
            title: "Jodhpur RIFF",
            date: "Oct 26-30, 2023",
            location: "Mehrangarh Fort, Jodhpur",
            category: 'festivals',
            price: "₹899 - ₹4999",
            image: [
                "https://images.moneycontrol.com/static-mcnews/2023/10/RIFF1-1-770x433.jpg?impolicy=website&width=770&height=431",
                "https://www.noblehousetours.com/wp-content/uploads/2021/11/History-Of-Jodhpur-RIFF-FESTIVAL.png",
                "https://assets.cntraveller.in/photos/60ba13f7ee63ec1fe6ee88ee/master/pass/Jodhpur-RIFF-1366x768.jpg",
                "https://jodhpurriff.org/wp-content/uploads/2023/09/Jodhpur-Riff-Gallery-04.jpg",
                "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/jodhpur-riff-063112154-16x9.jpg?VersionId=MGHNkhOfDqoKp5NXBUjc38CMHCHhVIrE&size=690%3A388"
            ],
            organizer: "Mehrangarh Museum Trust",
            description: "Rajasthan International Folk Festival celebrating the region's rich musical heritage under the full moon at Mehrangarh Fort.",
            ticketsLeft: "Early bird discounts",
            partnerBadge: true
        },
        {
            id: 3,
            title: "Udaipur World Music Festival",
            date: "Feb 9-11, 2024",
            location: "City Palace, Udaipur",
            category: 'festivals',
            price: "₹1299 - ₹8999",
            image: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqI1nneyXAWsOXM2xGkRDpbd4Nj-hiRjXtNg&s",
                "https://www.mehrangarh.org/wp-content/uploads/2018/12/fort-sunset.jpg",
                "https://www.mehrangarh.org/wp-content/uploads/2020/05/home-page-left-1.jpg",
                "https://www.vedatya.ac.in/wp-content/uploads/2022/02/nomad-bikers-H8UAcRybyQs-unsplash-scaled.jpg",
                "https://www.mehrangarh.org/wp-content/uploads/2020/05/museum-shop.jpg"
            ],
            organizer: "Seher",
            description: "Three days of global music against the breathtaking backdrop of Lake Pichola and City Palace.",
            ticketsLeft: "20% group discount",
            partnerBadge: true
        },
        {
            id: 4,
            title: "Puppet Show & Folk Dance",
            date: "Daily at 7:00 PM",
            location: "Jawahar Kala Kendra, Jaipur",
            category: 'shows',
            price: "₹299 - ₹799",
            image: [
                "https://www.shutterstock.com/shutterstock/videos/1094418983/thumb/1.jpg?ip=x480",
                "https://upload.wikimedia.org/wikipedia/commons/d/d1/India_Mandawa_marionetas_01_ni.JPG",
                "https://i.ytimg.com/vi/Y3CobyglhrY/hqdefault.jpg",
                "https://www.welcomerajasthan.com/rajast62.jpg",
                "https://www.jaipurtaxiservices.com/blogtour/rajasthan-s-puppet-show-and-folk-entertainment-a-delight-for-kids.webp"
            ],
            organizer: "Rajasthan Tourism",
            description: "Authentic Rajasthani Kathputli (puppet) show followed by traditional Ghoomar and Kalbeliya dances.",
            ticketsLeft: "Open seating",
            partnerBadge: true
        },
        {
            id: 5,
            title: "Miniature Painting Exhibition",
            date: "Nov 15 - Dec 15, 2023",
            location: "City Palace Museum, Udaipur",
            category: 'exhibitions',
            price: "₹120 - ₹150",
            image: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjToXH5cG-DBG2PqE7NqJyiFATrIup3X2DZg&s",
                "https://sarmaya.in/exhibition/one-tradition-many-lives-the-indian-miniature/2021.16.1%20Untitled%2C%20Rajasthani%20Miniature%2C%20Mewar%20School%2C%20Opaque%20pigments%20on%20paper%20c.%20early%2019th%20century%20%C2%A9%20Sarmaya%20Arts%20Foundation%20.jpg",
                "https://sarmaya.in/exhibition/one-tradition-many-lives-the-indian-miniature/NATHDWAR.jpg",
                "https://sarmaya.in/exhibition/one-tradition-many-lives-the-indian-miniature/2020.6.1%20Maharaja%20Bhim%20Singh%20%20in%20procession%20on%20horseback%2C%20accompanied%20by%20attendants%20on%20foot%20Udaipur%2C%20%20Rajasthani%20Miniature%2C%20Mewar%20School%2C%20Opaque%20pigments%20on%20paper%20c.%20early%2019th%20century%20%C2%A9%20Sarmaya%20Arts%20Foundation-2.jpg",
                "https://images.livemint.com/img/2023/09/20/original/Mahabharata_1695221995584.jpg"
            ],
            organizer: "Maharana of Mewar Charitable Foundation",
            description: "Rare collection of Mewar miniature paintings from 16th-19th centuries, including newly restored works.",
            ticketsLeft: "Free for students",
            partnerBadge: true
        },
        {
            id: 6,
            title: "Anokhi Museum",
            date: "Every Saturday, 10:00 AM",
            location: "Jaipur",
            category: 'workshops',
            price: "₹1500 per person",
            image: [
                "https://www.eternalmewar.in/uploads/Mmcfbanner/banner_mmcf.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-tDzN2lfMBEpeIudjeJGqsicoswZe_-hDQ&s",
                "https://www.eurasiareview.com/wp-content/uploads/2025/02/a-148-800x445.jpg",
                "https://images.livemint.com/img/2022/11/24/original/udaipur_1669261363539.jpg",
                "https://citypalacemuseum.org/img/exhibition/PRO06513.jpg"
            ],
            organizer: "Anokhi Foundation",
            description: "Hands-on workshop teaching traditional Sanganeri block printing techniques. Take home your creation!",
            ticketsLeft: "Max 8 participants",
            partnerBadge: true
        },
    ];
    const filteredEvents = activeCategory === 'all'
        ? events
        : events.filter(event => event.category === activeCategory);

    const handleBookNow = (event) => {
        localStorage.setItem("currentBooking", JSON.stringify(event));
        navigate("/bookingform");
    };

    return (
        <>
            <section className="container mx-auto py-16 cursor-pointer">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Rajasthan Cultural Experiences
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Book tickets for authentic festivals, shows and workshops across Rajasthan
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
                    <div className="flex space-x-3 mx-auto">
                        {categories.map(category => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === category.id ? 'bg-pink-600 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-200 hover:border-pink-300'}`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredEvents.map(event => (
                        <motion.div
                            key={event.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <div className="relative">
                                <img
                                    src={event.image[0]}
                                    alt={event.title}
                                    className="w-full h-48 object-cover cursor-pointer" // Add object-cover for same size
                                    loading="lazy"
                                    onClick={() => handleImageClick(event)}
                                />
                                {event.partnerBadge && (
                                    <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        Verified Partner
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-white font-bold text-lg">{event.title}</h3>
                                    <p className="text-white/90 text-sm">{event.date}</p>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center text-gray-500 mb-3">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm">{event.location}</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium text-pink-500">{event.price}</span>
                                    <span className="text-xs bg-gray-100 text-pink-500 px-2 py-1 rounded-full">
                                        {event.ticketsLeft}
                                    </span>
                                </div>

                                <motion.button
                                    onClick={() => handleBookNow(event)}
                                    className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {isPopupOpen && (
                    <div className="fixed inset-0  flex items-center backdrop-blur-xl bg-white/20 justify-center z-50 p-4 mt-12">
                        <div className="relative max-w-4xl w-full backdrop-blur-lg bg-white/20 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col lg:flex-row">
                            <button
                                onClick={handleClosePopup}
                                className="absolute top-2 right-2 text-white bg-gray-800 duration-700 rounded-full p-2 hover:bg-red-700 z-10"
                            >
                                <FaTimes size={20} className=' hover:rotate-[360deg] duration-700 ' />
                            </button>

                            <div className="flex-1 p-4 flex items-center justify-center overflow-hidden">
                                <img src={selectedImage} alt="Full view" className="max-h-full w-auto object-contain rounded-lg shadow-md" />
                            </div>

                            <div className="lg:w-1/4 p-4 backdrop-blur-lg bg-white/20 flex-shrink-0 lg:flex-grow-0 overflow-y-auto ">
                                <h4 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">View More Images!</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 xs:grid-cols-3 md:grid-cols-4 xl-grid-cols-2  lg:grid-cols-1 gap-1">
                                    {relatedImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className="w-full cursor-pointer overflow-hidden rounded-md shadow-sm border-2 border-transparent transition-all hover:border-pink-500"
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-24 object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default EventsTicketing;