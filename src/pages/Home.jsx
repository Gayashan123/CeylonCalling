import { useEffect, useState } from "react";
import Navigation from "../components/NavigationPage";
import { FaFilter } from "react-icons/fa";
import RestaurantCard from "../components/RestaurentCard";
import SideNavbar from "../components/SideNavbar";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 0px 8px rgba(0,0,0,0.15)",
};

const buttonTap = {
  scale: 0.95,
};

function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedType, setSelectedType] = useState("restaurants");
  const [maxPrice, setMaxPrice] = useState("");
  const [meals, setMeals] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        const allMeals = data.meals || [];
        const uniqueCategories = [
          ...new Set(allMeals.map((meal) => meal.strCategory)),
        ];
        setCategories(uniqueCategories);
        setMeals(allMeals);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
      });
  }, []);

  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleFilterClick = () =>
    console.log("Filter Applied:", selectedType, maxPrice);
  const onCategoryFilter = (category) => setFilteredCategory(category);

  const displayedMeals = filteredCategory
    ? meals.filter((meal) => meal.strCategory === filteredCategory)
    : meals;

  return (
    <motion.div
      className="min-h-screen gap-2 bg-gradient-to-b from-gray-100 to-white font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navigation />

      {/* Type Selection - Premium Apple-Style UI */}
      <motion.div
        className="mx-4 mt-35 p-6 rounded-3xl bg-white/60 backdrop-blur-lg shadow-xl border border-white/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">
          Select Type
        </h3>
        <div className="flex flex-wrap gap-4">
          {["restaurants", "small-food-shops", "hotels"].map((type) => (
            <motion.label
              key={type}
              className={`relative cursor-pointer px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
              ${
                selectedType === type
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={() => setSelectedType(type)}
              htmlFor={type}
            >
              <input
                type="radio"
                id={type}
                name="type"
                value={type}
                checked={selectedType === type}
                onChange={handleTypeChange}
                className="hidden"
              />
              {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        className="mx-4 mt-6 p-5 bg-white rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Filter by Category & Price
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <motion.button
            onClick={handleFilterClick}
            className="w-full sm:w-auto flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition"
            whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter className="mr-2" />
            Apply
          </motion.button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onCategoryFilter(cat)}
              className="text-sm px-4 py-1.5 bg-gray-800 text-white rounded-full hover:bg-black transition-all"
              whileHover={buttonHover}
              whileTap={buttonTap}
              animate={{
                backgroundColor:
                  filteredCategory === cat ? "#000000" : "#1f2937",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="mx-4 mt-10 flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-xl font-bold text-gray-800">Nearby Restaurants</h1>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black">
          <option>Recommended</option>
          <option>Best</option>
          <option>Top</option>
        </select>
      </motion.div>

      {/* Restaurant Cards */}
      <div className="mt-8 px-4 space-y-5">
        <AnimatePresence>
          {displayedMeals.map((meal, i) => (
            <motion.div
              key={meal.idMeal}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              <RestaurantCard meal={meal} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Side Navbar */}
      <SideNavbar />
    </motion.div>
  );
}

export default Home;
