import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ShopForm = ({ onClose }) => {
  const [shopData, setShopData] = useState({
    name: "",
    activeTime: "",
    description: "",
    categories: "",
    location: "",
    photo: null,
    priceRange: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setShopData({
      ...shopData,
      [name]: name === "photo" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shop Data Submitted:", shopData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-2 sm:px-4">
      <div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100
           box-border"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition"
          aria-label="Close Form"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-900 mb-5 sm:mb-6 tracking-tight">
          Create Your Shop
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Shop Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Shop Name
            </label>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Enter your shop name"
              className="w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-base"
              required
            />
          </div>

          {/* Active Time & Price Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Active Time
              </label>
              <input
                name="activeTime"
                onChange={handleChange}
                placeholder="8AM - 10PM"
                className="w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <input
                name="priceRange"
                onChange={handleChange}
                placeholder="Rs.100 - Rs.1500"
                className="w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              rows={3}
              placeholder="Brief description"
              className="w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              name="location"
              onChange={handleChange}
              placeholder="Colombo, Kandy..."
              className="w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-base"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-md hover:from-purple-600 hover:to-purple-800 transition text-base sm:text-lg"
            >
              Save Shop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopForm;
