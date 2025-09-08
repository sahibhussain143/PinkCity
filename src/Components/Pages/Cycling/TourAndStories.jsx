import React, { useState } from "react";

const blogPosts = [
    {
        id: 1,
        category: "Tour Leader Stories",
        date: "Jan 18 2025",
        title: "Being a Female Tour Guide In Rajasthan",
        description:
            "I often encountered with the questions by people or friends who think that why I am a guide, why I lead tours in Rajasthan with its rich culture and vibrant colors…..",
        fullContent:
            "Being a female tour guide in Rajasthan has been a fascinating journey. Rajasthan's rich culture, colorful traditions, and warm people make every day an adventure. From navigating the bustling markets to leading cultural tours in the deserts, every experience has taught me resilience and pride. Despite some challenges, the rewards are incredible. Here I share my story and insights from my years guiding in this vibrant state.",
        imgSrc:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/079c332a-f582-4926-8a57-ccc5f23f485e.png",
    },
    {
        id: 2,
        category: "Destination India",
        date: "March 25 2024",
        title: "Beyond the Golden Triangle of India - Explore Rajasthan",
        description:
            "India is one of the most aspired countries to be visited for many travelers around the world, who seek for exotic places and all things new and Rajasthan is a jewel of it…..",
        fullContent:
            "The Golden Triangle of India – Delhi, Agra, and Jaipur – attracts millions, but Rajasthan offers a deeper, richer experience. From majestic forts and palaces to vibrant festivals and remote villages, Rajasthan reveals the true heart of Indian culture. This article dives into hidden gems and unforgettable experiences beyond the well-trodden tourist paths.",
        imgSrc:
            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53397abc-28e3-4940-9850-b27d0be103e0.png",
    },
    {
        id: 3,
        category: "Rajasthan Cycle Tours",
        date: "December 13 2023",
        title: "Rajasthan’s First Cycling Tour Family",
        description:
            "Thousands of days ago when nobody dared to think the unthinkable about riding a cycle in the pink city of Rajasthan….",
        fullContent:
            "Cycling through Rajasthan has never been more exciting! Our family’s journey as the first to organize cycling tours in the pink city showcases the adventurous spirit of Rajasthan. We share stories of challenges on dusty roads, encounters with locals, and the beauty of exploring heritage sites on two wheels.",
        imgSrc:
            "https://letourdeindia.com/wp-content/uploads/2023/08/IMG-20240206-WA0003-1140x530.jpg",
    },
];

export default function TourAndStories() {
    const [selectedPost, setSelectedPost] = useState(null);

    if (selectedPost) {
        // Show full detail view
        const otherPosts = blogPosts.filter((post) => post.id !== selectedPost.id);

        return (
            <div className="min-h-screen  py-16 px-8  lg:px-24 max-w-7xl mt-12 mx-auto">
                <button
                    onClick={() => setSelectedPost(null)}
                    className="mb-8 text-pink-500 font-semibold hover:text-pink-800 transition-colors"
                >
                    ← Back to all stories
                </button>

                <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                        src={selectedPost.imgSrc}
                        alt={selectedPost.title}
                        className="w-full max-h-96 object-cover rounded-t-2xl"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be902359-0e82-4db8-af92-fe0887df9e97.png";
                        }}
                    />
                    <div className="p-10">
                        <span className="inline-block bg-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-lg mb-3">
                            {selectedPost.category}
                        </span>
                        <time
                            dateTime={selectedPost.date}
                            className="block mb-6 text-gray-500 text-sm"
                        >
                            {selectedPost.date}
                        </time>
                        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
                            {selectedPost.title}
                        </h1>
                        <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                            {selectedPost.fullContent}
                        </p>
                    </div>
                </article>

                {/* Other posts suggestions */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Other Stories You May Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {otherPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.imgSrc}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be902359-0e82-4db8-af92-fe0887df9e97.png";
                                        }}
                                    />
                                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <time
                                        dateTime={post.date}
                                        className="block mb-2 text-gray-500 text-sm"
                                    >
                                        {post.date}
                                    </time>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-pink-600 cursor-pointer">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    // Show blog posts grid (list)
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 py-16 px-8 lg:px-24">
            {/* Hero Section */}
            <section
                className="max-w-7xl mx-auto mb-16 text-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "1rem",
                    padding: "5rem 2rem",
                    color: "#fff",
                    textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
                }}
            >
                <h1 className="text-5xl font-extrabold mb-4">Explore <span className="text-pink-500 font-bold"> Tours & Stories</span> from Rajasthan</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Dive into the vibrant culture, mesmerizing landscapes, and inspiring stories from the <strong>   heart of Rajasthan</strong>.
                </p>
            </section>

            {/* Blog Posts Grid */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-400 flex flex-col"
                    >
                        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                            <img
                                src={post.imgSrc}
                                alt={`Image representing ${post.category} in Rajasthan`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be902359-0e82-4db8-af92-fe0887df9e97.png";
                                }}
                            />
                            <span className="absolute top-2 left-5 bg-pink-600 text-white text-sm font-semibold px-4 py-1 rounded-lg shadow-lg whitespace-nowrap">
                                {post.category}
                            </span>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <time dateTime={post.date} className="text-gray-400 text-sm mb-3 tracking-wide">
                                {post.date}
                            </time>
                            <h3 className="text-xl font-bold mb-4 text-pink-500 cursor-pointer transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-700 flex-grow leading-relaxed mb-6">{post.description}</p>
                            <button
                                onClick={() => setSelectedPost(post)}
                                className="self-start inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors duration-300"
                            >
                                Read More
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}
