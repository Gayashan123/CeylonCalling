import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh", scale: 0.8 },
  visible: {
    opacity: 1,
    y: "0",
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    scale: 0.8,
    transition: { ease: "easeInOut" },
  },
};

const ShopForm = ({ onClose }) => {
  const [shopData, setShopData] = useState({
    name: "",
    activeTime: "",
    description: "",
    location: "",
    photo: null,
    priceRange: "",
    shopType: "",
    contact: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setShopData({
      ...shopData,
      [name]: name === "photo" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData();
    Object.entries(shopData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch("http://localhost:5000/api/shops", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create shop.");
      }

      setSuccessMessage("Shop created successfully!");
      setShopData({
        name: "",
        activeTime: "",
        description: "",
        location: "",
        photo: null,
        priceRange: "",
        shopType: "",
        contact: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 1500);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-1 sm:px-3"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-2 sm:p-4 md:p-6 border border-gray-100 box-border overflow-y-auto max-h-[90vh] sm:max-h-[80vh]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition"
            aria-label="Close Form"
          >
            <FaTimes size={18} />
          </button>

          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-900 mb-4 sm:mb-5 tracking-tight">
            Create Your Shop
          </h2>

          {successMessage && (
            <div className="mb-3 text-green-700 bg-green-100 border border-green-300 rounded px-3 py-2 text-center text-sm">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-3 text-red-700 bg-red-100 border border-red-300 rounded px-3 py-2 text-center text-sm">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Shop Name */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Shop Name
              </label>
              <input
                name="name"
                value={shopData.name}
                onChange={handleChange}
                placeholder="Enter your shop name"
                className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
                required
              />
            </div>

            {/* Active Time & Price Range */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Active Time
                </label>
                <input
                  name="activeTime"
                  value={shopData.activeTime}
                  onChange={handleChange}
                  placeholder="8AM - 10PM"
                  className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <input
                  name="priceRange"
                  value={shopData.priceRange}
                  onChange={handleChange}
                  placeholder="Rs.100 - Rs.1500"
                  className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                TP : No
              </label>
              <input
                name="contact"
                value={shopData.contact}
                onChange={handleChange}
                placeholder="+94*******"
                required
                className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
              />
            </div>

            {/* Shop Type */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Shop Type
              </label>
              <select
                name="shopType"
                value={shopData.shopType}
                onChange={handleChange}
                required
                className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
              >
                <option value="">Select shop type</option>
                <option value="restaurant">Restaurant</option>
                <option value="small_food_shop">Small Food Shop</option>
                <option value="hotel">Hotel</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={shopData.description}
                onChange={handleChange}
                rows={2}
                placeholder="Brief description"
                className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                name="location"
                value={shopData.location}
                onChange={handleChange}
                placeholder="Colombo, Kandy..."
                className="w-full px-2 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-xs sm:text-sm"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full text-gray-600 file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-md hover:from-purple-600 hover:to-purple-800 transition text-sm sm:text-base"
              >
                Save Shop
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShopForm;
