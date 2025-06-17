import React, { useState, useEffect } from "react";
import { FaEdit, FaSearch } from "react-icons/fa";
import Navigation from "../../shopowner/components/SideNavbar";
import { motion } from "framer-motion";

// Helper for shop and food images
const getDisplayImage = (photo) => {
  if (!photo) return "https://via.placeholder.com/600x300?text=No+Image";
  if (photo.startsWith("http://") || photo.startsWith("https://")) return photo;
  if (photo.startsWith("/uploads")) return photo;
  if (photo.startsWith("uploads")) return "/" + photo;
  return photo;
};

function MyShop() {
  const [shop, setShop] = useState(null);
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const foodsPerPage = 6;

  // Fetch all data in parallel
  useEffect(() => {
    setLoading(true);
    setError("");
    Promise.all([
      fetch("/api/shops").then((res) => res.json()),
      fetch("/api/categories").then((res) => res.json()),
      fetch("/api/food").then((res) => res.json()),
    ])
      .then(([shopsData, categoriesData, foodsData]) => {
        setShop(Array.isArray(shopsData) ? shopsData[0] : shopsData);
        setCategories(categoriesData);
        setFoods(foodsData);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load data. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading shop data...
      </div>
    );
  }
  if (error || !shop) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error || "No shop data found."}
      </div>
    );
  }

  const allCategoryNames = Array.from(new Set(categories.map((c) => c.name)));
  const filteredFoods = foods.filter((food) => {
    return (
      (selectedCategory === "All" || food.category === selectedCategory) &&
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);
  const totalPages = Math.ceil(filteredFoods.length / foodsPerPage);

  const handleEdit = (foodId) => {
    alert(`Edit item with ID: ${foodId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-5 md:p-8 lg:p-10 font-sans min-h-screen bg-gray-50">
      {/* Shop Profile */}
      <motion.section
        className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.img
            src={getDisplayImage(shop.photo)}
            alt="Shop"
            className="rounded-lg w-full md:w-2/3 max-h-[220px] sm:max-h-[250px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="text-center md:text-left mt-5 md:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{shop.name}</h1>
            <p className="text-gray-600 mt-2 text-base md:text-lg">📞 {shop.contact}</p>
            <button className="mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          </div>
        </div>
      </motion.section>

      <hr className="my-8 border-t-2 border-gray-200" />

      {/* Search Bar */}
      <section>
        <div className="flex justify-center mb-5">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search food..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          <button
            onClick={() => { setSelectedCategory("All"); setCurrentPage(1); }}
            className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-base transition ${
              selectedCategory === "All"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
            }`}
          >
            All
          </button>
          {allCategoryNames.map((catName) => (
            <button
              key={catName}
              onClick={() => {
                setSelectedCategory(catName);
                setCurrentPage(1);
              }}
              className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-base transition ${
                selectedCategory === catName
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
              }`}
            >
              {catName}
            </button>
          ))}
        </div>
      </section>

      <hr className="my-8 border-t-2 border-gray-200" />

      {/* Food Cards */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {currentFoods.map((food, index) => (
            <motion.div
              key={food._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition flex flex-col"
            >
              <img
                src={getDisplayImage(food.picture)}
                alt={food.name}
                className="rounded-md mb-3 w-full h-36 sm:h-40 object-cover"
              />
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{food.name}</h2>
              <p className="text-gray-500 text-xs sm:text-sm">{food.category}</p>
              <p className="text-purple-600 font-bold text-lg sm:text-xl mt-2">
                ${parseFloat(food.price).toFixed(2)}
              </p>
              <button
                className="mt-3 flex items-center text-xs sm:text-sm text-purple-700 hover:underline"
                onClick={() => handleEdit(food._id)}
              >
                <FaEdit className="mr-1" /> Edit
              </button>
            </motion.div>
          ))}
          {currentFoods.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No items found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mb-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded transition text-xs sm:text-base ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "bg-white border border-gray-300 hover:bg-purple-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>

      <hr className="my-8 border-t-2 border-gray-200" />

      {/* Reviews Section */}
      <motion.section
        className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">
          Customer Reviews
        </h3>
        <div className="space-y-6">
          {Array.isArray(shop.reviews) && shop.reviews.length > 0 ? (
            shop.reviews.map((review) => (
              <div
                key={review._id || review.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-100 pb-6 last:border-b-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center text-base sm:text-lg font-bold shadow">
                  {review.name?.[0] || "?"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">{review.name}</span>
                    <span className="text-yellow-500 text-base sm:text-lg">
                      {"★".repeat(review.rating || 0)}
                      {"☆".repeat(5 - (review.rating || 0))}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 text-xs sm:text-base">{review.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No reviews yet.</p>
          )}
        </div>
      </motion.section>

      {/* Navigation with Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Navigation />
      </motion.div>
    </div>
  );
}

export default MyShop;
