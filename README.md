# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

PINKCITY/
│
├── public/
│   └── images/
│       └── icons/
│       └── favicon.svg
│   └── robots.txt
│   └── index.html
│
├── src/
│   ├── assets/                         # Static assets (images, videos, fonts)
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/                     # Reusable UI elements
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Carousel.jsx
│   │   │
│   │   ├── layout/                     # Shared layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Layout.jsx             # Main layout wrapper
│   │   │
│   │   ├── home/                       # Homepage sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TopPlaces.jsx
│   │   │   ├── EventsSlider.jsx
│   │   │   └── Testimonials.jsx
│   │   │
│   │   └── admin/                      # Admin panel UI
│   │       ├── DashboardHeader.jsx
│   │       ├── PlaceForm.jsx
│   │       ├── EventForm.jsx
│   │       └── AdminSidebar.jsx
│
│   ├── pages/
│   │   ├── client/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Explore.jsx
│   │   │   ├── Places.jsx
│   │   │   ├── PlaceDetails.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Hotels.jsx
│   │   │   ├── Food.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ManagePlaces.jsx
│   │   │   ├── ManageEvents.jsx
│   │   │   └── AdminLogin.jsx
│   │   │
│   │   └── NotFound.jsx
│
│   ├── routes/
│   │   ├── AppRouter.jsx              # All app routes
│   │   ├── ClientRoutes.jsx           # Public routes
│   │   └── AdminRoutes.jsx            # Protected admin routes
│
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── useLocalStorage.js
│
│   ├── utils/
│   │   ├── api.js
│   │   ├── constants.js
│   │   ├── format.js
│   │   └── validators.js
│
│   ├── services/                      # API calls
│   │   ├── authService.js
│   │   ├── placesService.js
│   │   └── eventsService.js
│
│   ├── styles/
│   │   ├── tailwind.css               # Tailwind entry
│   │   ├── globals.css
│   │   └── animations.css
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .eslintrc.cjs
├── .prettierrc
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── README.md
└── .gitignore


import { useState, useEffect } from 'react';
import { FiChevronRight, FiSearch, FiCalendar, FiMapPin } from 'react-icons/fi';

const ModernHeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isExploring, setIsExploring] = useState(false);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1565953522043-baea26b83b7e',
      title: 'Palaces That Whisper',
      subtitle: 'Private after-hours access to heritage sites'
    },
    {
      url: 'https://images.unsplash.com/photo-1585506942812-72b683d7d7e3',
      title: 'Artisan Encounters',
      subtitle: 'Hands-on workshops with master craftspeople'
    },
    {
      url: 'https://images.unsplash.com/photo-1575408264798-b50b252663e6',
      title: 'Festival Immersion',
      subtitle: 'Participate in living traditions'
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url(${img.url})`,
              backgroundPosition: 'center 30%'
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-amber-900/70 to-amber-900/90"></div>

      {/* Floating Jaipur Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "url('/jaipur-pattern.svg')",
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Headline */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="inline-block bg-gradient-to-r from-amber-300 to-white bg-clip-text text-transparent">
                {heroImages[currentImage].title}
              </span>
            </h1>
          </div>

          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto mb-8">
            {heroImages[currentImage].subtitle}
          </p>

          {/* Interactive Search Card */}
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-1 max-w-2xl mx-auto transition-all duration-500 ${isExploring ? 'scale-105' : 'scale-100'}`}>
            <div className="flex flex-col md:flex-row bg-white/5 border border-white/20 rounded-xl overflow-hidden">
              <div className="flex items-center flex-1 p-4">
                <FiSearch className="text-amber-300 mr-3 text-xl" />
                <input 
                  type="text" 
                  placeholder="What experience calls to you?" 
                  className="w-full bg-transparent outline-none placeholder-amber-200 text-white"
                  onFocus={() => setIsExploring(true)}
                  onBlur={() => setIsExploring(false)}
                />
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 transition-colors flex items-center justify-center">
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Experience Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Heritage Walks', 'Textile Workshops', 'Culinary Journeys', 'Festival Access'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 hover:border-white/20 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentImage === index ? 'bg-amber-400 w-6' : 'bg-white/40'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-amber-300 mt-2 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-amber-400/20 blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-16 w-12 h-12 rounded-full bg-amber-300/15 blur-xl animate-float-delay"></div>
      <div className="absolute bottom-1/4 left-20 w-10 h-10 rounded-full bg-white/10 blur-xl animate-float"></div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ModernHeroSection;