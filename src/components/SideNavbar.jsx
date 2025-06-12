import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaCog,
  FaBell,
  FaHeart,
  FaClock,
  FaFilter,
  FaLocationArrow,
} from "react-icons/fa";
import FavoritesModal from "./AddCart";

import { Link } from 'react-scroll';
import ContactModal from "./ContactModel"; // <-- Import it here

function Navbar() {
  const navigate = useNavigate();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showContact, setShowContact] = useState(false); // <-- New state

  const favoriteRestaurants = [
    { name: "Upali's by Nawaloka" },
    { name: "Chooti Restaurant" },
    { name: "The Curry Leaf" },
  ];

  return (
    <>
      <aside className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white shadow-xl rounded-2xl px-6 py-4 flex justify-between items-center z-50 border border-gray-200">
        <div className="flex justify-between items-center w-full gap-6">
          <FaHome
            onClick={() => navigate("/")}
            className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer"
          />
          <FaHeart
            onClick={() => setShowFavorites(true)}
            className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer"
          />
          <Link
  to="filter"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80} // Optional: Adjust if you have fixed headers
  className="cursor-pointer hover:text-purple-600 transition"
>
  <FaFilter className="text-xl sm:text-2xl text-gray-500" />
</Link>

          <FaLocationArrow
            onClick={() => setShowContact(true)}
            className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer"
          />
          <FaCog
            className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer"
          />
        </div>
      </aside>

      {/* Favorite Modal */}
      {showFavorites && (
        <FavoritesModal
          favorites={favoriteRestaurants}
          onClose={() => setShowFavorites(false)}
        />
      )}

      {/* Contact Modal */}
      {showContact && (
        <ContactModal onClose={() => setShowContact(false)} />
      )}
    </>
  );
}

export default Navbar;
