import React, { useState } from "react";
import Navigation from "./Navigation";
import ximage from "../assets/Hero.jpg";
import { FaCompass, FaPhoneAlt } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll"; // ✅ Important import

function Header() {
  const [appoin, setAppoin] = useState(false);

  const openAppoin = () => {
    setAppoin(true);
  };

  const closeAppoinmen = () => {
    setAppoin(false);
  };

  return (
    <div
      className="border-b-2 border-black  relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${ximage})` }}
      id="header"
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Navigation */}
      <Navigation />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center text-white animate-fadeIn">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl drop-shadow-lg">
          <Typewriter
            options={{
              strings: ["Discover the Best Places to Eat"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-lg italic text-teal-200 md:text-2xl max-w-2xl">
          Find your favorite food spots around the city with just a few clicks.
          Explore a variety of cuisines and hidden gems near you.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          {/* Discover Button */}
          <button
            className="px-6 py-3  shadow-yellow-200 font-semibold text-white transition-all transform bg-teal-500 rounded-xl shadow-md hover:bg-teal-400 hover:shadow-xl hover:scale-105"
            onClick={openAppoin}
          >
            <div className="flex items-center gap-3 ">
              <FaCompass className="text-xl" />
              Discover
            </div>
          </button>

          {/* Contact Me Button with scroll */}
          <Link to="contact" smooth={true} duration={500} spy={true}>
            <button
              className="px-6 py-3 font-semibold text-black outline-2 outline-black shadow-amber-300 transition-all transform bg-white rounded-xl shadow-lg hover:bg-red hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl" />
                Contact-Us
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
