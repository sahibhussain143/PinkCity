import React from 'react';
import { Plane, Mountain, Utensils, Castle, Camera, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

const PackageMix = () => {
    // Mock data for destinations and experiences
    const destinations = [
        {
            name: "Jaipur",
            description: "The Pink City, known for its majestic palaces and historic forts like Amer Fort and Hawa Mahal.",
            image: "https://images.unsplash.com/photo-1579717751969-906059c258d4?q=80&w=2670&auto=format&fit=crop",
            link: "#"
        },
        {
            name: "Udaipur",
            description: "The City of Lakes, famous for its romantic setting, Lake Pichola, and the opulent City Palace.",
            image: "https://images.unsplash.com/photo-1589417835150-a93144a148a2?q=80&w=2670&auto=format&fit=crop",
            link: "#"
        },
        {
            name: "Jodhpur",
            description: "The Blue City, with its stunning Mehrangarh Fort and the vibrant blue houses of the old town.",
            image: "https://images.unsplash.com/photo-1629813083161-e0e649852261?q=80&w=2670&auto=format&fit=crop",
            link: "#"
        },
        {
            name: "Jaisalmer",
            description: "The Golden City, a desert jewel with the magnificent Jaisalmer Fort and thrilling camel safaris.",
            image: "https://images.unsplash.com/photo-1602715781387-a169b1828859?q=80&w=2670&auto=format&fit=crop",
            link: "#"
        }
    ];

    const experiences = [
        {
            icon: <Castle className="h-10 w-10 text-orange-500" />,
            title: "Forts & Palaces",
            description: "Explore the rich history and grand architecture of Rajasthan's royal forts and palaces."
        },
        {
            icon: <Utensils className="h-10 w-10 text-orange-500" />,
            title: "Local Cuisine",
            description: "Savor the authentic and spicy flavors of Rajasthani dishes like Dal Baati Churma and Laal Maas."
        },
        {
            icon: <Mountain className="h-10 w-10 text-orange-500" />,
            title: "Desert Safaris",
            description: "Embark on an unforgettable desert adventure with camel and jeep safaris in the Thar Desert."
        },
        {
            icon: <Camera className="h-10 w-10 text-orange-500" />,
            title: "Cultural Festivals",
            description: "Immerse yourself in the vibrant colors and traditions of local festivals and folk dances."
        }
    ];

    const Destinations = () => (
        <section id="destinations" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Popular Destinations
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Explore the magnificent cities that define the rich heritage and culture of Rajasthan.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((dest, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{dest.description}</p>
                                <a
                                    href={dest.link}
                                    className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    const Experiences = () => (
        <section id="experiences" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Must-Try Experiences
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Create unforgettable memories with these unique activities in Rajasthan.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:translate-y-2 transition-transform duration-300">
                            <div className="flex justify-center mb-4">
                                {exp.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                            <p className="text-gray-600 text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="font-sans text-gray-800">
            <Destinations />
            <Experiences />
        </div>
    );
};

export default PackageMix;