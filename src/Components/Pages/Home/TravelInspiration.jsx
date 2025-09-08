import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Customer Review Pop-up Component
const CustomerReviewPopup = ({ review, onClose, onProfileClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white/10 backdrop-blur-2xl rounded-xl shadow-2xl p-6 w-full max-w-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white-600  bg-gray-600 p-1 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" 
            
            />
          </svg>
        </button>
        <div className="flex items-center mb-4 flex-col sm:flex-row text-center sm:text-left">
          <img
            src={review.profileimage}
            alt={review.name}
            className="w-16 h-16 rounded-full border-4 border-pink-700 hover:border-purple-700 hover:scale-125 duration-700 hover:rotate-[360deg] sm:mr-4 mb-2 sm:mb-0 cursor-pointer"
            onClick={() => onProfileClick(review)}
          />
          <div>
            <h3 className="text-2xl font-bold text-pink-500">{review.name}</h3>
            <p className="text-gray-500 text-sm">{review.location}</p>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-start text-yellow-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'fill-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-100 ml-2">({review.rating} out of 5)</span>
        </div>
        <div className="h-48 overflow-y-auto pr-2 mb-4">
          <p className="text-lg font-semibold text-pink-600 mb-2">My Experience:</p>
          <p className="text-gray-200 leading-relaxed">{review.fullReview}</p>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          <p className='text-gray-100'>Joined: <span className='text-pink-500'>{review.joined} </span> </p>
          <p className='text-gray-100'> Total Trips: {review.totalTrips}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Customer Profile Pop-up Component
const CustomerProfilePopup = ({ profile, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white/60 backdrop-blur-2xl rounded-xl shadow-2xl p-8 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full  transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
            
          </svg>
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={profile.profileimage}
            alt={profile.name}
            className="w-24 h-24 rounded-full border-4 border-pink-500 mb-4 hover:-rotate-45 duration-300 hover:scale-110 hover:border-purple-700"
          />
          <h3 className="text-3xl font-bold text-pink-700">{profile.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{profile.location}</p>

          <div className=" rounded-lg p-4 w-full mb-4">
            <h4 className="font-semibold text-pink-600 mb-2">Traveler Profile:</h4>
            <p className="text-sm text-gray-700">Joined: <span className="font-medium text-pink-500">{profile.joined}</span></p>
            <p className="text-sm text-gray-700">Total Trips: <span className="font-medium">{profile.totalTrips}</span></p>
            <p className="text-sm text-gray-700">Average Rating: <span className="font-medium">{profile.rating} / 5</span></p>
          </div>

          <div className=" rounded-lg p-4 w-full">
            <h4 className="font-semibold text-pink-600 mb-2">Recent Review:</h4>
            <p className=" text-gray-700">"{profile.quote}"</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Image Gallery Pop-up Component
const ImageGalleryPopup = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl z-[101] hover:scale-110 transition-transform"
      >
        &times;
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full max-w-4xl max-h-[85vh]"
      >
        <img
          src={images[currentIndex].image}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-full object-contain rounded-lg shadow-xl"
        />

        {!isFirstImage && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {!isLastImage && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

// Main Component
const TravelInspiration = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isDealHovered, setIsDealHovered] = useState(null);
  const [showReviewPopup, setShowReviewPopup] = useState(null);
  const [showProfilePopup, setShowProfilePopup] = useState(null);
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();
  const OfferBook = () => {
    navigate("/packages");
  };

  // Sample data with added review details
  const customerStories = [
    {
      id: 1,
      name: "Priya & Rohan",
      location: "Udaipur, Rajasthan",
      quote: "The heritage walk through the old city was magical! Our guide knew all the hidden gems.",
      image: "https://indianexpress.com/wp-content/uploads/2021/10/neha-rohan-2.jpg",
      profileimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrZozNP8aI5e2Pw3KuOZ1K8oDR6itWBWY9w&s",
      rating: 5,
      fullReview: "Our trip to Udaipur was truly magical. We booked the heritage package and were not disappointed. Our guide was incredibly knowledgeable and showed us parts of the city we never would have found on our own. The hotel was excellent, and the local cuisine was delicious. We can't wait to book our next trip with you!",
      joined: "July 2023",
      totalTrips: 3,
    },
    {
      id: 2,
      name: "The Patel Family",
      location: "Jaipur, Rajasthan",
      quote: "Our kids loved the puppet show and elephant ride at Amber Fort. Memories to cherish forever!",
      image: "https://resize.indiatv.in/resize/newbucket/400_-/2023/08/sunny-deol-1691114339.webp",
      profileimage: "https://i.pinimg.com/736x/de/c7/34/dec734082cf3d2f2791bf612fc6b7743.jpg",
      rating: 4,
      fullReview: "We had a fantastic family holiday in Jaipur. The itinerary was perfect for our children, with plenty of activities to keep them entertained. The puppet show and the elephant ride were the highlights for them. The accommodation was comfortable and centrally located. The only minor issue was the heat, but that's expected in Rajasthan!",
      joined: "September 2022",
      trips: 5,
    },
    {
      id: 3,
      name: "Aditya",
      location: "Jaisalmer, Rajasthan",
      quote: "Camping under the stars in the Thar desert was an experience I'll never forget. The folk music at night was incredible.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      profileimage: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
      rating: 5,
      fullReview: "As a solo traveler, I wanted a unique and memorable experience, and this trip delivered. Camping in the Thar desert was breathtaking. The folk music, the bonfire, and the clear night sky full of stars were simply unforgettable. I felt completely safe and well-cared for. A perfect escape!",
      joined: "March 2024",
      totalTrips: 1,
    },
    {
      id: 4,
      name: "Meera",
      location: "Pushkar, Rajasthan",
      quote: "The spiritual retreat by Pushkar Lake was exactly what I needed. So peaceful and rejuvenating.",
      image: "https://static.toiimg.com/thumb/msid-107399605,width-400,resizemode-4/107399605.jpg",
      profileimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS27Rqs9Ltp8luqQiRYKjpKJJvnZt_5jjnG3uEezr-tfBGOKzSfrgS-O7eHUn9toc40s&usqp=CAU",
      rating: 4,
      fullReview: "My spiritual retreat to Pushkar was an incredibly peaceful and soul-cleansing experience. The morning aarti by the lake was beautiful. The yoga and meditation sessions were very well-organized. The staff was friendly and attentive. I feel completely rejuvenated and ready to take on the world again.",
      joined: "June 2024",
      totalTrips: 2,
    }
  ];

  const instagramPosts = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwRU-6eDtVjwJ9DlpOVV2TJHxKy2E1bU9SKQ&s", likes: "1.2k" },
    { id: 2, image: "https://shurutech.com/wp-content/uploads/2024/04/blog-jaipur-trip.webp", likes: "845" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHlR3m3LashhOBmQWJ9HRHyZfMzR7KTT4WigAIbwJY3AzdsG8Pvao3qVc4r_IEgeC410&usqp=CAU", likes: "2.1k" },
    { id: 4, image: "https://i.pinimg.com/736x/b6/41/33/b6413325dc561d9b3a82ab2dfd7f9900.jpg", likes: "932" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1JNALYE8D7r6IJp1BMJqmnvO_3XSYRigANDoVgd535cWuB3vCr1iMmyh3pemmBpAezs&usqp=CAU", likes: "1.5k" },
    { id: 6, image: "https://i.pinimg.com/736x/65/fa/79/65fa796e446d80d0e655bca1f8a23673.jpg", likes: "768" },
  ];

  const deals = [
    { id: 1, title: "Early Bird Special", discount: "20% OFF", description: "Book 60 days in advance and save", expiry: "Offer ends in 5 days", bgColor: "bg-amber-100" },
    { id: 2, title: "Diwali Getaway", discount: "15% OFF", description: "Celebrate the festival of lights with us", expiry: "Limited rooms available", bgColor: "bg-purple-100" },
    { id: 3, title: "Weekend Escape", discount: "30% OFF", description: "Last-minute deals for spontaneous travelers", expiry: "Book by Friday", bgColor: "bg-blue-100" },
  ];

  // Auto-rotate stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % customerStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [customerStories.length]);

  const handleOpenReviewPopup = (story) => {
    setShowReviewPopup(story);
  };

  const handleCloseReviewPopup = () => {
    setShowReviewPopup(null);
  };

  const handleOpenProfilePopup = (profile) => {
    setShowReviewPopup(null); // Close the review popup
    setShowProfilePopup(profile);
  };

  const handleCloseProfilePopup = () => {
    setShowProfilePopup(null);
  };

  const handleOpenGalleryPopup = (index) => {
    setCurrentImageIndex(index);
    setShowGalleryPopup(true);
  };

  const handleCloseGalleryPopup = () => {
    setShowGalleryPopup(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % instagramPosts.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + instagramPosts.length) % instagramPosts.length);
  };

  // Improved keyboard navigation for the gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showGalleryPopup) {
        if (e.key === 'ArrowRight') {
          handleNextImage();
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage();
        } else if (e.key === 'Escape') {
          handleCloseGalleryPopup();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showGalleryPopup, handleNextImage, handlePrevImage]);

  return (
    <div className="flex justify-center w-full">
      <div className="w-[90%] max-w-7xl px-4 py-12">
        {/* Section 1: Customer Stories */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-pink-500"
          >
            Top Customer Stories
          </motion.h2>

          <div className="relative h-96 sm:h-[400px]  rounded-xl shadow-lg">
            {customerStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: index > currentStory ? '100%' : index < currentStory ? '-100%' : '0%' }}
                animate={{ opacity: index === currentStory ? 1 : 0, x: '0%' }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex flex-col sm:flex-row ${index === currentStory ? 'z-10' : 'z-0'}`}
              >
                <div className="w-full sm:w-1/2 h-1/2 sm:h-auto">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover hover:brightness-50 duration-300"
                  />
                </div>
                <div className="w-full sm:w-1/2 bg-white p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center flex-col sm:flex-row text-center sm:text-left">
                    <img
                      src={story.profileimage}
                      alt={story.name}
                      className='w-12 h-12 rounded-full border-4 hover:-rotate-45 hover:scale-110 hover:border-purple-700 duration-300 border-pink-700 cursor-pointer mb-2 sm:mb-0 sm:mr-4'
                      onClick={() => handleOpenProfilePopup(story)}
                    />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-pink-500">{story.name}</h3>
                        <p className="text-gray-500 text-sm">{story.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-base sm:text-lg italic mt-4 mb-4 sm:mb-6">"{story.quote}"</blockquote>
                  <button
                    onClick={() => handleOpenReviewPopup(story)}
                    className="text-pink-500 font-semibold hover:underline inline-flex items-center justify-center sm:justify-start"
                  >
                    Read Full Story
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
            <div className=" ">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
              {customerStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full ${index === currentStory ? 'bg-pink-600' : 'bg-black/60'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            </div>
          
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Section 2: Instagram Gallery */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-pink-500"
          >
            Pink City Explore on Instagram
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => handleOpenGalleryPopup(index)}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-48 object-cover "
                />
                <div className="absolute inset-0  bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {post.likes}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/pinkcityexplore/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-600"
            >
              Follow Us on Instagram
            </a>
          </div>
        </section>

        <hr className="my-12 border-gray-300" />

        {/* Section 3: Limited-Time Deals */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-pink-500"
          >
            Limited-Time Deals & Discounts
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setIsDealHovered(deal.id)}
                onHoverEnd={() => setIsDealHovered(null)}
                className={`${deal.bgColor} p-6 rounded-xl shadow-md relative overflow-hidden`}
              >
                <motion.div
                  animate={{
                    scale: isDealHovered === deal.id ? 1.1 : 1,
                    opacity: isDealHovered === deal.id ? 0.8 : 0.6
                  }}
                  className="absolute -right-10 -top-10 w-32 h-32 bg-rose-400 rounded-full"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-3xl font-extrabold text-pink-700 mb-2">{deal.discount}</p>
                  <p className="mb-4">{deal.description}</p>
                  <p className="text-sm text-gray-600">{deal.expiry}</p>
                  <button
                    onClick={OfferBook}
                    className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {showReviewPopup && (
          <CustomerReviewPopup
            review={showReviewPopup}
            onClose={handleCloseReviewPopup}
            onProfileClick={handleOpenProfilePopup}
          />
        )}
        {showProfilePopup && (
          <CustomerProfilePopup
            profile={showProfilePopup}
            onClose={handleCloseProfilePopup}
          />
        )}
        {showGalleryPopup && (
          <ImageGalleryPopup
            images={instagramPosts}
            currentIndex={currentImageIndex}
            onClose={handleCloseGalleryPopup}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelInspiration;