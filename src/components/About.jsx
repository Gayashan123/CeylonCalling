import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import RestaurantInterior from "../assets/About.jpg";
import DeliciousFood from "../assets/Mission.jpg";
import DiningExperience from "../assets/vision.jpg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="bg-neutral-100 py-16 px-6 md:px-12">
      {/* Header */}
      <div
        className="mb-12 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-800 tracking-tight">
          About Us
        </h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
          Learn more about our purpose, goals, and story that inspires everything we do.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Mission */}
        <div
          className="bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl overflow-hidden p-6 flex flex-col items-center transition-transform hover:scale-[1.03]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-medium text-teal-700 mb-4">Our Mission</h2>
          <img
            src={DeliciousFood}
            alt="Mission"
            className="w-full h-44 object-cover rounded-xl mb-4"
          />
          <p className="text-center text-neutral-600">
            To serve delicious, freshly prepared dishes that bring people together and create lasting memories.
          </p>
        </div>

        {/* Vision */}
        <div
          className="bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl overflow-hidden p-6 flex flex-col items-center transition-transform hover:scale-[1.03]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-medium text-teal-700 mb-4">Our Vision</h2>
          <img
            src={DiningExperience}
            alt="Vision"
            className="w-full h-44 object-cover rounded-xl mb-4"
          />
          <p className="text-center text-neutral-600">
            To become the go-to destination for food lovers seeking quality, authenticity, and warm ambiance.
          </p>
        </div>

        {/* Story */}
        <div
          className="bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl overflow-hidden p-6 flex flex-col items-center transition-transform hover:scale-[1.03]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="text-2xl font-medium text-teal-700 mb-4">Our Story</h2>
          <img
            src={RestaurantInterior}
            alt="Story"
            className="w-full h-44 object-cover rounded-xl mb-4"
          />
          <p className="text-center text-neutral-600">
            Born from a love of cooking and culture, we bring traditional recipes to life with a modern twist.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
