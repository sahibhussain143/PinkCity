import React, { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Your tour data (tours array) remains the same
const tours = [
  {
    id: 1,
    title: 'Jaipur Heritage Ride',
    price: '₹99',
    description: 'Explore the Pink City on two wheels, covering forts, palaces, and old bazaars.',
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a5/a8/e5.jpg',
    rating: '4.8',
    review: '(152 reviews)',
  },
  {
    id: 2,
    title: 'Udaipur Lakeside Loop',
    price: '₹85',
    description: 'A peaceful ride around Udaipur’s scenic lakes and countryside villages.',
    image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=285,height=160/tour_img/d624173dcb8cba92aba98b87c109d09ef2f98cb26a9f818900d0516b619e9857.jpg',
    rating: '4.9',
    review: '(98 reviews)',
  },
  {
    id: 3,
    title: 'Jodhpur Blue Trails',
    price: '₹105',
    description: 'Cycle through the blue alleys of Jodhpur and visit Mehrangarh Fort.',
    image: 'https://pbs.twimg.com/media/FxtMITjagAEqwBc?format=jpg&name=large',
    rating: '4.7',
    review: '(87 reviews)',
  },
  {
    id: 4,
    title: 'Pushkar Desert Ride',
    price: '₹110',
    description: 'An adventurous desert trail ride through dunes and sacred temples of Pushkar.',
    image:
      'https://www.discoveradventure.com/media/image-cache/1cbbf772-aa06-4d8d-8b42-3a4d69a2c3c9/900-0-1-946-587/1478254267-1478254019-cyclists_setting_of_on_rajasthan_challengejpg.jpg',
    rating: '4.6',
    review: '(76 reviews)',
  },
  {
    id: 5,
    title: 'Bikaner Rural Escape',
    price: '₹95',
    description: 'Ride through rural villages and discover traditional Rajasthani life.',
    image: 'https://letourdeindia.com/wp-content/uploads/2017/08/pedaltoheritage.jpg',
    rating: '4.8',
    review: '(63 reviews)',
  },
  {
    id: 6,
    title: 'Jaipur Heritage Ride',
    price: '₹99',
    description: 'Explore the Pink City on two wheels, covering forts, palaces, and old bazaars.',
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a5/a8/e5.jpg',
    rating: '4.8',
    review: '(152 reviews)',
  },
  {
    id: 7,
    title: 'Udaipur Lakeside Loop',
    price: '₹85',
    description: 'A peaceful ride around Udaipur’s scenic lakes and countryside villages.',
    image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=285,height=160/tour_img/d624173dcb8cba92aba98b87c109d09ef2f98cb26a9f818900d0516b619e9857.jpg',
    rating: '4.9',
    review: '(98 reviews)',
  },
  {
    id: 8,
    title: 'Jodhpur Blue Trails',
    price: '₹105',
    description: 'Cycle through the blue alleys of Jodhpur and visit Mehrangarh Fort.',
    image: 'https://pbs.twimg.com/media/FxtMITjagAEqwBc?format=jpg&name=large',
    rating: '4.7',
    review: '(87 reviews)',
  },
  {
    id: 9,
    title: 'Pushkar Desert Ride',
    price: '₹110',
    description: 'An adventurous desert trail ride through dunes and sacred temples of Pushkar.',
    image:
      'https://www.discoveradventure.com/media/image-cache/1cbbf772-aa06-4d8d-8b42-3a4d69a2c3c9/900-0-1-946-587/1478254267-1478254019-cyclists_setting_of_on_rajasthan_challengejpg.jpg',
    rating: '4.6',
    review: '(76 reviews)',
  },
  {
    id: 10,
    title: 'Bikaner Rural Escape',
    price: '₹95',
    description: 'Ride through rural villages and discover traditional Rajasthani life.',
    image: 'https://trackandtrail.in/cdn/shop/files/montra-Mobile.jpg?v=1737739094&width=3840',
    rating: '4.8',
    review: '(63 reviews)',
  },
];

const CycleScrollSlider = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const handleLearnMoreClick = (tour) => {
    setProduct(tour);
  };

  const handleCloseModal = () => {
    setProduct(null);
  };

  const handleBookNowClick = (product) => {
    navigate('/tripinquiry', { state: { product } });
  };

  return (
    <div className='bg-gray-100 py-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-center font-bold text-3xl md:text-4xl mb-2 text-pink-500'>
          Cycling Tours in Rajasthan
        </h1>
        <p className='text-center max-w-3xl mx-auto text-gray-700 text-sm md:text-base mb-8'>
          Discover the vibrant culture, majestic forts, and rural beauty of Rajasthan on our curated
          cycling tours. Whether you're an adventure seeker or a cultural explorer, there's a ride
          for everyone.
        </p>

        <div className='overflow-hidden relative'>
          <motion.div
            className='flex space-x-6'
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...tours, ...tours].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className='min-w-[300px] max-w-[300px] flex-shrink-0 bg-white shadow-2xl rounded hover:shadow-lg transition duration-300'
              >
                <div className='relative'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full p-4 object-cover h-[200px] hover:scale-110 duration-300 rounded-t'
                  />
                  <div className='absolute top-2 right-2 flex items-center bg-white px-2 py-[2px] rounded-2xl font-semibold text-sm shadow'>
                    <FaStar className='text-yellow-400 mr-1' />
                    {item.rating}
                  </div>
                </div>
                <div className='p-4 h-[150px] overflow-hidden'>
                  <h3 className='text-lg font-semibold text-pink-700 mb-1'>{item.title}</h3>
                  <p className='text-sm text-gray-600 line-clamp-3'>{item.description}</p>
                  <br />
                  <p className='text-xl text-pink-500 font-semibold'>{item.price}</p>
                </div>
                <button
                  onClick={() => handleLearnMoreClick(item)}
                  className='px-4 py-2 bg-pink-600 ml-2 text-white rounded-lg hover:bg-pink-700'
                >
                  Learn More
                </button>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modal/Pop-up */}
        {product && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <motion.div
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ duration: 0.3 }}
              className='relative bg-white rounded-lg p-6 max-w-2xl w-full mx-auto shadow-2xl flex flex-col max-h-[90vh]'
            >
              <button
                onClick={handleCloseModal}
                className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
              >
                <FaTimes size={24} />
              </button>
              
              <div className="flex-1 overflow-y-auto pr-2">
                <h2 className='text-2xl font-bold text-pink-600 mb-4'>{product.title}</h2>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-full h-auto rounded-md mb-4'
                />
                <p className='text-gray-700 mb-2'>{product.description}</p>
                <div className='flex items-center mb-2'>
                  <FaStar className='text-yellow-400 mr-1' />
                  <span className='font-semibold'>{product.rating}</span>
                  <span className='text-sm text-gray-500 ml-2'>{product.review}</span>
                </div>
                <p className='text-xl text-pink-500 font-semibold mt-4'>Price: {product.price}</p>
              </div>

              <div className="mt-4 flex-shrink-0">
                <button
                  onClick={() => handleBookNowClick(product)}
                  className='w-full bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 transition duration-300'
                >
                  Participate Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CycleScrollSlider;