import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
};

const sections = [
  {
    title: 'About Us',
    text: `Welcome to Aslan Adventures, your gateway to unforgettable travel experiences. We are a passionate team of explorers, adventure enthusiasts, and travel experts dedicated to crafting unique and personalized journeys that connect you with the world in an authentic and meaningful way. Whether you're seeking an adrenaline rush in the great outdoors, a serene escape into nature, or a cultural immersion in vibrant cities, Aslan Adventures is here to make your travel dreams come true.`,
  },
  {
    title: 'Who We Are',
    text: `At Aslan Adventures, we believe that travel is more than just visiting new places—it's about discovering new perspectives, creating lasting memories, and embarking on a journey that reflects your personal interests and passions. With years of experience in curating bespoke travel experiences, our goal is to make your adventure as unique as you are.

Our expert team of travel planners has carefully crafted a wide range of tour packages to suit every type of traveler. From thrilling treks in the mountains to leisurely explorations of exotic cultures, we specialize in offering tailored itineraries that are designed around your needs and preferences. Whether you're an adrenaline junkie, a history buff, or a nature lover, we've got something special in store for you.`,
  },
  {
    title: 'Our Philosophy',
    text: `At Aslan Adventures, we believe that travel is more than just visiting new places—it's about discovering new perspectives, creating lasting memories, and embarking on a journey that reflects your personal interests and passions. With years of experience in curating bespoke travel experiences, our goal is to make your adventure as unique as you are.`,
  },
  {
    title: 'Our Services',
    text: `Tailored Travel Packages: Our expertly crafted travel packages cater to a wide range of interests—from cultural tours and luxury escapes to wildlife safaris and adrenaline-filled adventures.

Exclusive Destinations: We focus on destinations that provide a true sense of adventure and exploration, like Rajasthan, Goa, and Kerala.

Transport & Accommodation: We offer everything from budget-friendly options to luxurious stays, ensuring your comfort and convenience.

Expert Travel Planning: From destinations to bookings, our travel experts guide you every step of the way.`,
  },
  {
    title: 'Why Choose Us?',
    list: [
      'Personalized Attention: We create journeys tailored to your unique interests.',
      'Expert Knowledge: Years of experience to make your trip enriching and enjoyable.',
      'End-to-End Service: From planning to accommodations, we handle it all.',
      'Authentic Experiences: Experience real culture, history, and landscapes.',
    ],
  },
  {
    title: 'Our Vision',
    text: `Our vision is to be your trusted partner in discovering the world’s wonders. Whether you’re traveling for relaxation, adventure, or cultural exploration, we aim to make every journey an extraordinary one. At Aslan Adventures, we are committed to delivering unparalleled service, exceptional itineraries, and memories that last a lifetime.`,
  },
];

const directions = ['left', 'right', 'up', 'down']; // cycle through these

function AboutWeb() {
  return (
    <div className="flex max-w-8xl justify-center max-auto pt-24 px-4 sm:px-6 lg:px-8 bg-blue-100 ">
      <div className=" space-y-12 md:space-y-16 lg:space-y-20">
        {sections.map((section, index) => {
          const direction = directions[index % directions.length];
          return (
            <motion.div
              key={index}
              variants={variants[direction]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`w-full max-w-4xl mx-auto ${index % 2 !== 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}
            >
              <h1 className="text-2xl sm:text-3xl font-semibold p-2 mb-2 sm:mb-4 text-center md:text-left">
                {section.title}
              </h1>
              {section.text && (
                <p className="p-2 whitespace-pre-line text-base sm:text-lg leading-relaxed text-center md:text-left">
                  {section.text}
                </p>
              )}
              {section.list && (
                <ul className="list-disc list-inside p-2 space-y-2 text-base sm:text-lg text-center md:text-left">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutWeb;