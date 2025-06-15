import React, { useState } from "react";
import ximage from "../../assets/shopowner.jpg";
import { FaCompass, FaPhoneAlt } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Navbar from "../components/Navigation"
import Sidenav from "../components/SideNavbar"

export default function Shop() {
  const [appoin, setAppoin] = useState(false);
  const openAppoin = () => setAppoin(true);
  const closeAppoinmen = () => setAppoin(false);

  return (
    <div className="w-full overflow-hidden">
<Navbar />
      
      {/* Hero Section */}
      <div
        id="header"
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${ximage})` }}
      >
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-28 md:pt-36 pb-20">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-extrabold text-4xl md:text-6xl leading-tight tracking-tight drop-shadow-lg"
          >
            <Typewriter
              options={{
                strings: ["Welcome Back, Shop Owner!", "Manage Your Business Efficiently"],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-neutral-200 text-lg md:text-xl max-w-2xl italic font-light"
          >
            Gain full control over your daily operations — track sales, organize inventory, and grow customer trust with ease.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={openAppoin}
              className="bg-white text-black px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all hover:bg-gray-100 font-semibold text-base"
            >
              <FaCompass className="inline mr-2" />
              Go to Dashboard
            </button>

            <button
              onClick={() =>
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
              }
              className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all font-semibold text-base"
            >
              <FaPhoneAlt className="inline mr-2" />
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-white text-center py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          About Your Business Hub
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Our system is tailored for shop owners who want simplicity and power. With real-time monitoring, customer insights, and product management tools, running your business has never been this effortless.
        </motion.p>

        <div className="mt-10">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Need Help or Support?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Reach out to our friendly team anytime. We’re here to ensure your business runs smoothly.
        </motion.p>

        <div className="mt-10">
          <Contact />
        </div>
      </section>
      
      <Sidenav />
    </div>
  );
}
