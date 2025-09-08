import React from "react";
import {
  Award,
  Briefcase,
  PlaneTakeoff,
  Headset,
  MapPin,
} from "lucide-react";

// ✅ Tour packages data
const featuredPackages = [
  {
    alt: "Jodhpur Tourism",
    imgSrc:
      "https://www.laurewanders.com/wp-content/uploads/2022/05/Famous-Asian-landmarks-22.jpg",
    rating: "4.8",
    reviews: "3,451 reviews",
    name: "Golden Triangle Tour",
    location: "Jaipur, Rajasthan, India",
  },
  {
    alt: "Golden Triangle Tour",
    imgSrc:
      "https://www.rajasthanexpeditions.com/images/golden-triangle-delhi-agra-jaipur-tours.jpg",
    rating: "4.9",
    reviews: "5,123 reviews",
    name: "Royal Rajasthan Escape",
    location: "Jodhpur, Rajasthan, India",
  },
  {
    alt: "Udaipur Tourism",
    imgSrc:
      "https://i.ytimg.com/vi/9o57q8KMbPc/sddefault.jpg",
    rating: "4.7",
    reviews: "2,890 reviews",
    name: "Udaipur Lake & Palace Tour",
    location: "Udaipur, Rajasthan, India",
  },
];

// ✅ Highlights data
const tourHighlights = [
  {
    icon: <Award className="text-pink-600 h-6 w-6" />,
    title: "Expert Guides",
    description:
      "Our knowledgeable local guides ensure an authentic and enriching experience.",
  },
  {
    icon: <PlaneTakeoff className="text-pink-600 h-6 w-6" />,
    title: "Seamless Travel",
    description:
      "From flights to local transport, we handle all the logistics for a stress-free trip.",
  },
  {
    icon: <Headset className="text-pink-600 h-6 w-6" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you.",
  },
  {
    icon: <Briefcase className="text-pink-600 h-6 w-6" />,
    title: "Customizable Itineraries",
    description:
      "Build your perfect holiday with flexible options tailored to your interests.",
  },
];

function LandingPagePackage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-12 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 pt-24">
          {/* Hero Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <p className="text-sm text-pink-600 font-bold uppercase tracking-widest">
              Plan Your Next Adventure
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight max-w-xl mx-auto md:mx-0">
              Discover <span className="text-pink-600">Unforgettable</span> Tour Packages
            </h1>
            <p className="text-slate-600 max-w-md mx-auto md:mx-0 text-lg">
              Explore meticulously crafted itineraries that promise adventure, relaxation, and cultural immersion.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#packages"
                className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Tours</span>
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl mt-10 md:mt-0 max-w-full">
            <img
              src="https://rajasthanyatra.in/blog/wp-content/uploads/2024/08/Customised-travel-packages-for-Rajasthan.webp"
              alt="A beautiful landscape showing a holiday destination"
              className="object-cover w-full h-[520px] hover:scale-105 transition-transform duration-500"
              onError={(e) =>
              (e.currentTarget.src =
                "https://placehold.co/1024x512/E2E8F0/1E293B?text=Tour+Image")
              }
            />
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-white py-16 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block cursor-not-allowed bg-pink-600 hover:bg-pink-700 text-white px-5 py-1 rounded-full font-semibold text-sm mb-2 shadow-md">
              What We Offer
            </div>
            <p className="mt-2 text-lg text-slate-500">
              Experience the difference with our commitment to quality and service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center space-y-3 border-t-4 border-pink-500"
              >
                <div className="p-3 bg-pink-100 rounded-full inline-block">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-xl text-slate-800">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Packages */}
      <div
        className="bg-slate-50 pt-16 pb-20 px-4 md:px-16 lg:px-24"
        id="packages"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <div className="inline-block cursor-not-allowed bg-pink-600 text-white px-5 py-1 rounded-full font-semibold text-sm mb-2 shadow-md">
              Popular Places           
               </div>
                <p className="mt-2 text-lg text-slate-500">
              Newly added travel packages: Discover your next unforgettable adventure with our latest offerings!
            </p>

          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-not-allowed">
            {featuredPackages.map((tour, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-60 md:h-48 lg:h-56 group">
                  <img
                    src={tour.imgSrc}
                    alt={tour.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 group-hover:rotate-1"
                    onError={(e) =>
                    (e.currentTarget.src =
                      "https://placehold.co/600x400/E2E8F0/1E293B?text=Tour+Image")
                    }
                  />
                  <div className="absolute top-4 left-4 bg-pink-600 px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center space-x-1 shadow-lg">
                    <svg
                      className="w-3 h-3 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.566-.955L10 0l2.944 5.955 6.566.955-4.755 4.635 1.123 6.545z" />
                    </svg>
                    <span>{tour.rating}</span>
                    <span className="ml-2 text-slate-100">|</span>
                    <span className="ml-2 text-xs">{tour.reviews}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-pink-600 leading-snug">
                    {tour.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{tour.location}</p>
                  {/* <p className="mt-auto text-slate-800 text-base font-semibold">
                    Starting from{" "}
                    <span className="text-pink-600 text-2xl">{tour.price}</span>
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPagePackage;
