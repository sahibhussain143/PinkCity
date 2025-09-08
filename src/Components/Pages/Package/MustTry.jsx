import React from 'react'
import { Plane, Mountain, Utensils, Castle, Camera, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';


function MustTry() {
       const experiences = [
        {
            icon: <Castle className="h-10 w-10 text-pink-500" />,
            title: "Forts & Palaces",
            description: "Explore the rich history and grand architecture of Rajasthan's royal forts and palaces."
        },
        {
            icon: <Utensils className="h-10 w-10 text-pink-500" />,
            title: "Local Cuisine",
            description: "Savor the authentic and spicy flavors of Rajasthani dishes like Dal Baati Churma and Laal Maas."
        },
        {
            icon: <Mountain className="h-10 w-10 text-pink-500" />,
            title: "Desert Safaris",
            description: "Embark on an unforgettable desert adventure with camel and jeep safaris in the Thar Desert."
        },
        {
            icon: <Camera className="h-10 w-10 text-pink-500" />,
            title: "Cultural Festivals",
            description: "Immerse yourself in the vibrant colors and traditions of local festivals and folk dances."
        }
    ];
  return (
      <section id="experiences" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-4">
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
                            <h3 className="text-xl font-bold text-pink-500 mb-2">{exp.title}</h3>
                            <p className="text-gray-600 text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>  )
}

export default MustTry;



