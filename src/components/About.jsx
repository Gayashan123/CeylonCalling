import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import RestaurantInterior from '../assets/About.jpg';
import DeliciousFood from '../assets/Mission.jpg';
import DiningExperience from '../assets/vision.jpg';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container px-4 py-12 mx-auto bg-blue-50" id="about">
      {/* Header Section */}
      <div
        className="w-full px-8 py-10 mt-5 transition-all duration-300 ease-out transform rounded-lg shadow-xl cursor-pointer bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 hover:scale-105 hover:shadow-2xl hover:bg-blue-600"
      >
        <h1 className="text-3xl text-center font-bold text-white">About Us</h1>
        <p className="mt-2 text-lg text-center text-gray-200">
           Discover our passion for authentic flavors, warm hospitality, and unforgettable dining experiences.
        </p>
      </div>

      {/* About Sections */}
      <div className="flex flex-col justify-center gap-8 mt-12 md:flex-row">
        {/* Our Mission */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="mb-4 text-2xl font-semibold text-orange-600">Our Mission</h2>
          <img
            src={DeliciousFood}
            className="object-cover w-full h-48 mb-4 rounded-lg"
            alt="Our Mission"
          />
          <p className="text-center text-gray-700">
            To serve delicious, freshly prepared dishes that bring people together and create lasting memories.
          </p>
        </div>

        {/* Our Vision */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="mb-4 text-2xl font-semibold text-orange-600">Our Vision</h2>
          <img
            src={DiningExperience}
            className="object-cover w-full h-48 mb-4 rounded-lg"
            alt="Our Vision"
          />
          <p className="text-center text-gray-700">
            To become the go-to destination for food lovers seeking quality, authenticity, and warm ambiance.
          </p>
        </div>

        {/* Our Story */}
        <div
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="mb-4 text-2xl font-semibold text-orange-600">Our Story</h2>
          <img
            src={RestaurantInterior}
            className="object-cover w-full h-48 mb-4 rounded-lg"
            alt="Our Story"
          />
          <p className="text-center text-gray-700">
            Born from a love of cooking and culture, we bring traditional recipes to life with a modern twist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
 