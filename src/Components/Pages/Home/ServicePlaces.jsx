import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: ' Albert Hall Museum',
    description: 'The Albert Hall Museum in Jaipur, also known as the Government Central Museum, is the oldest museum in Rajasthan. Built in the late 19th century, it stands as a testament to the regions rich cultural heritage and artistic expressions.',
    price: 'Rs19.99',
    location: "Jaipur Rajasthan",
    locationurl: "",

    Havelis:
      "Located on the banks of Lake Pichola, this museum is a restored 18th-century mansion showcasing traditional Rajasthani culture. Highlights include ornate balconies, courtyards, paintings, costumes, jewelry, and puppets. Cultural performances, including folk dance and music, are also featured.  ",
    Shekhawati:
      "  Lavishly decorated palace rooms with mirror work, frescoes, miniature paintings, and displays of silverware, weapons, and royal costumes.",
    ArtGallery:
      "Many museums, including the Government Museum Udaipur, feature the intricate and detailed miniature paintings of the Mewar School, depicting royal life, religious narratives, and mythological tales. ",
    Historical:
      " The City Palace Museum and Fateh Prakash Palace showcase the lavish lifestyles of the Mewar Maharanas through artifacts, paintings, and architectural splendor. ",
    Themes:
      " Showcases art and culture of the Mewar region, focusing on miniature paintings ",
    Relevance: "highlights how institutions like the Bharatiya Lok Kala Mandal actively foster traditional folk arts ",
    
   headingHavelis:"Havelis :",
     headingShekhawati:"Shekhawati :",
     headingArtGallery:"Gallery :",
     headingHistorical:"History :",
     headingThemes:"Themes :",
     headingRelevance:"Relevance :",


    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/albert-hall-jaipur-rajasthan-2-attr-hero?qlt=82&ts=1742161239064',
  },
  {
    id: 2,
    title: 'Mehrangarh Fort Museum',
    description: 'This museum acts as a repository of the Rathore dynasts rich artistic, cultural, and historical legacy of Marwar. It is well-maintained and provides insights into the regions royal traditions and craftsmanship.',
    price: 'Rs29.99',
    location: "Jodhpur Rajasthan",
    locationurl: "",

    Havelis:
      "The havelis are the main attraction, with their walls adorned with vibrant paintings that tell stories of the past. ",
    Shekhawati:
      "Mandawa is part of the Shekhawati region, known for its unique architecture and art, particularly its fresco paintings. ",
    ArtGallery:
      "Shekhawati, including Mandawa, is often referred to as the world's largest open-air art gallery due to the density and scale of the painted havelis. ",
    Historical:
      "Mandawa flourished as a trading post on the Silk Road, attracting wealthy merchants who built these impressive homes. ",
    Themes:
      "The paintings in the havelis range from depictions of gods and goddesses, to scenes from the Ramayana and Mahabharata, to glimpses of the merchant's lives and even influences from European culture. ",
    Relevance: " has become a popular destination for weddings, film shoots, and other events, further highlighting its cultural significance. ",
   

headingHavelis:"Havelis :",
     headingShekhawati:"Shekhawati :",
     headingArtGallery:"Gallery :",
     headingHistorical:"History :",
     headingThemes:"Themes :",
     headingRelevance:"Relevance :",

    image: 'https://jodhpurtourism.in/images/places-to-visit/headers/umaid-bhawan-palace-museum-jodhpur-entry-fee-timings-holidays-reviews-header.jpg',
  },
  {
    id: 3,
    title: 'City Palace Museum',
    description: 'Housed within the majestic City Palace, it showcases artifacts, paintings, and memorabilia of the Mewar dynasty.',
    price: 'Rs39.99',
    location: "Udaipur Rajasthan",
    locationurl: "",

    Havelis:
      "Located on the banks of Lake Pichola, this museum is a restored 18th-century mansion showcasing traditional Rajasthani culture. Highlights include ornate balconies, courtyards, paintings, costumes, jewelry, and puppets. Cultural performances, including folk dance and music, are also featured.  ",
    Shekhawati:
      "  Lavishly decorated palace rooms with mirror work, frescoes, miniature paintings, and displays of silverware, weapons, and royal costumes.",
    ArtGallery:
      "Many museums, including the Government Museum Udaipur, feature the intricate and detailed miniature paintings of the Mewar School, depicting royal life, religious narratives, and mythological tales. ",
    Historical:
      " The City Palace Museum and Fateh Prakash Palace showcase the lavish lifestyles of the Mewar Maharanas through artifacts, paintings, and architectural splendor. ",
    Themes:
      "  art and culture of the Mewar region, focusing on miniature paintings ",
    Relevance: "highlights how institutions like the Bharatiya Lok Kala Mandal actively foster traditional folk arts ",
     
 headingHavelis:"Havelis :",
     headingShekhawati:"Shekhawati :",
     headingArtGallery:"Gallery :",
     headingHistorical:"History :",
     headingThemes:"Themes :",
     headingRelevance:"Relevance :",
      

    image: 'https://media2.thrillophilia.com/images/photos/000/115/725/original/1514367673_shutterstock_289362869.jpg?width=975&height=600',
  },
  {
    id: 4,
    title: 'The Thalia Haveli Museum',
    description: 'Mandawa, a charming town in the Shekhawati region of Rajasthan, is often referred to as the "Open-Air Art Gallery" due to its incredible wealth of frescoed Havelis and painted mansions.',
    price: 'Rs49.99',
    location: "Mandawa Rajasthan",
    locationurl: "",
    
    Havelis:
      "The havelis are the main attraction, with their walls adorned with vibrant paintings that tell stories of the past. ",
    Shekhawati:
      "Mandawa is part of the Shekhawati region, known for its unique architecture and art, particularly its fresco paintings. ",
    ArtGallery:
      "Shekhawati, including Mandawa, is often referred to as the world's largest open-air art gallery due to the density and scale of the painted havelis. ",
    Historical:
      "Mandawa flourished as a trading post on the Silk Road, attracting wealthy merchants who built these impressive homes. ",
    Themes:
      "The paintings in the havelis range from depictions of gods and goddesses, to scenes from the Ramayana and Mahabharata, to glimpses of the merchant's lives and even influences from European culture. ",
    Relevance: " has become a popular destination for weddings, film shoots, and other events, further highlighting its cultural significance. ",

    headingHavelis:"Havelis :",
     headingShekhawati:"Shekhawati :",
     headingArtGallery:"Gallery :",
     headingHistorical:"History :",
     headingThemes:"Themes :",
     headingRelevance:"Relevance :",

    image: 'https://travelingerelax.com/wp-content/uploads/2024/01/haveli-1.jpg',
  },
];




const ServicePlaces = () => {
  const navigate = useNavigate();

  const handleExplore = (product) => {
    navigate("/TripInquiry", { state: { product } });
  };

  return (
    <div className="bg-gradient-to-r from-violet-200 to-red-200 ">
    <div className="container mx-auto px-4 py-   ">
      <h1 className="text-center pb-4 text-3xl font-bold text-pink-500">Best Tour Places</h1>
      <p className="text-center pb-6">
        These tours are well-suited for all, irrespective of different age groups and varied interests.
        So, choose one now from the trending tours of India and have fun in the company of your dear ones.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-md hover:-mt-4 duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover hover:scale-105 duration-200"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-pink-500">{product.title}</h3>
              <div className="flex justify-between">

                <p className="text-gray-600 text-sm mb-4 justify-between">{product.location}</p>
                <span className='text-pink-500 text-sm mb-4'>
                  <a href={product.locationurl} className=' cursor-pointer flex'><FaLocationDot className='my-1 text-sm' />
                  View Map
                  </a>
                </span>
              </div>

              <div className="text-xl text-pink-500 font-bold mb-4">{product.price}</div>

              <button
                onClick={() => handleExplore(product)}
                className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ServicePlaces;
