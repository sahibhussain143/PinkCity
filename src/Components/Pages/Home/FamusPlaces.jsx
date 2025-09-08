

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';


const items = [
    {
        id: 1,
        title: "Bikaner, the Desert Jewel",
        description: "When one thinks of forts and palaces it is Rajasthan that comes to mind.",
        rating: "4.9",
        image: "https://tourmyindiablog.weebly.com/uploads/9/9/2/3/99233092/baroda-laxmi-vilas-palace_orig.jpg",
    },
    {
        id: 2,
        title: "City palace in udaipur, rajasthan, india",
        description: "Enjoy fresh air and stunning views from the peaks.",
        rating: "4.7",
        image: "https://cdn.create.vista.com/api/media/medium/218353808/stock-photo-city-palace-udaipur-rajasthan-india?token=",
    },
    {
        id: 3,
        title: "Udaipur City Palace",
        description: "Panorama of famous romantic luxury Rajasthan indian tourist landmark - Udaipur City Palace in the evening - panoramic view. Udaipur.",
        rating: "4.9",
        image: "https://cdn.create.vista.com/api/media/medium/107056646/stock-photo-udaipur-city-palace-in-the-evening-panoramic-view-udaipur-indi?token=",
    },
    {
        id: 4,
        title: "Jaipur, the Pink City",
        description: "Jaipur is one of those vintage cities that come alive on a black-and-white film",
        rating: "4.3",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742162446740",
    },
    {
        id: 5,
        title: "Jaisalmer, the Golden City",
        description: "Jaipur, a bustling modern metropolis, is one of the three points of the Golden Triangle",
        rating: "4.1",
        image: "https://www.jaisalkot.com/wp-content/uploads/2020/03/JAISALMER.jpg",
    },
    {
        id: 6,
        title: "City Palace Jaipur",
        description: "The capital and the largest city of the state of Rajasthan, Jaipur is the first planned city of the country and was built in the eighteenth century by Sawai Jai Singh.",
        rating: "4.9",
        image: "https://www.cleartrip.com/collections/wp-content/uploads/2018/07/City-Palace-Jaipur-495x330.jpg",
    },
    {
        id: 7,
        title: "Mandawa (Shekhawati), the Open-Air Museum",
        description: "Begin your tour at the City Palace, situated at the heart of the vibrant pink city of Jaipur. The impressive grounds of this royal complex house the imperial residence, as well as the more modern museum.",
        rating: "4.7",
        image: "https://assets.zeezest.com/blogs/PROD_16_1672913963830.png",
    },
    {
        id: 8,
        title: "CITY PALACE",
        description: "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur.",
        rating: "4.9",
        image: "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/103.jpg",
    },
];

const itemVariants = {
    left: {
        hidden: { opacity: 0, x: -50 },
        visible: (i = 0) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: i * 0.2,
            },
        }),
    },
    up: {
        hidden: { opacity: 0, y: 50 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                delay: i * 0.1,
            },
        }),
    },
    down: {
        hidden: { opacity: 0, y: -50 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: 'easeOut',
                delay: i * 0.1,
            },
        }),
    },
};

const FamusPlaces = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s delay
        return () => clearTimeout(timer);
    }, []);

    const SkeletonCard = () => (
        <div className="animate-pulse bg-white rounded shadow p-4">

            <div className="h-48 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="p-4  max-w-[1440px] mx-auto">
                <h1 className="text-center p-4 font-bold text-3xl md:text-4xl">Best Tour Destinations</h1>
                <p className="text-center px-4 max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
                    We have come up with specially curated tours, allowing you to explore some of the most fascinating destinations in India. Choose one now from the trending tours and enjoy with your loved ones.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {loading
                        ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
                        : items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="relative group rounded overflow-hidden shadow hover:shadow-md hover:-mt-4 duration-300 bg-white"
                                variants={itemVariants.left}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                <div className="relative">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full hover:scale-105 duration-200 h-48 object-cover"
                                        variants={itemVariants.up}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index}
                                    />
                                    <div className="absolute top-2 right-2 flex items-center bg-white px-2 py-[2px] rounded-2xl font-semibold text-sm shadow">
                                        <FaStar className="text-yellow-400 mr-1" />
                                        {item.rating}
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                                        <button className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-xl shadow hover:bg-pink-600">
                                            <a href="/packages">View Package</a>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <motion.h3
                                        className="text-lg font-semibold text-pink-500 mb-1"
                                        variants={itemVariants.left}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index}
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-sm text-gray-600 line-clamp-3"
                                        variants={itemVariants.down}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index}
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default FamusPlaces;
