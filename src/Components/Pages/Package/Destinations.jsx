import React from 'react'


function Destinations() {
       const destinations = [
        {
            name: "Jaipur",
            description: "The Pink City, known for its majestic palaces and historic forts like Amer Fort and Hawa Mahal.",
            image: "https://experiencemyindia.com/wp-content/uploads/2024/09/jaipur-1200x628.jpg",
            link: "#"
        },
        {
            name: "Udaipur",
            description: "The City of Lakes, famous for its romantic setting, Lake Pichola, and the opulent City Palace.",
            image: "https://s3.india.com/wp-content/uploads/2024/04/Feature-Image_-Udaipur.jpg",
            link: "#"
        },
        {
            name: "Jodhpur",
            description: "The Blue City, with its stunning Mehrangarh Fort and the vibrant blue houses of the old town.",
            image: "https://media1.thrillophilia.com/filestore/0ch6uvur3nfspag8lsejte43aogy_8631398960_d96d4d73bc_o.jpg",
            link: "#"
        },
        {
            name: "Jaisalmer",
            description: "The Golden City, a desert jewel with the magnificent Jaisalmer Fort and thrilling camel safaris.",
            image: "https://www.campinginjaisalmer.com/assets/img/exclusive/014.jpg",
            link: "#"
        }
    ];

  return (
       <section id="destinations" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-4">
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
                                <h3 className="text-xl font-bold text-pink-500 mb-2">{dest.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{dest.description}</p>
                                <a
                                    href={dest.link}
                                    className="text-pink-500 font-semibold hover:text-pink-600 transition-colors"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>  )
}

export default Destinations