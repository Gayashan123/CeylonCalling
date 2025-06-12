import { useEffect, useState } from "react";
import Navigation from "../components/NavigationPage";
import { FaFilter } from "react-icons/fa";
import RestaurantCard from "../components/RestaurentCard";
import SideNavbar from "../components/SideNavbar";
import { Element } from "react-scroll";


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
    <div className="min-h-screen gap-2  bg-gradient-to-b from-gray-100 to-white font-sans">
      <Navigation />
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-500 rounded" />
      {/* Type Selection - Premium Apple-Style UI */}
      <div className="mx-4 shadow-green-200 mt-35 p-6 rounded-3xl bg-white/60 backdrop-blur-lg shadow-md border border-white/40">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 tracking-tight">
          Select Type
        </h3>
        <div className="flex flex-wrap gap-4">
          {["restaurants", "small-food-shops", "hotels"].map((type) => (
            <label
              key={type}
              className={`relative cursor-pointer px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
        ${
          selectedType === type
            ? "bg-black text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
        }`}
            >
              <input
                type="radio"
                name="type"
                value={type}
                checked={selectedType === type}
                onChange={handleTypeChange}
                className="hidden"
              />
              {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </label>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <Element name="filter">
      <div className="mx-4 mt-6 p-5 bg-white rounded-2xl shadow-green-200 shadow-md">
    <h3 className="text-lg font-medium text-gray-700 mb-4">
      Filter by Category & Price
    </h3>

        <div className="flex flex-col sm:flex-row gap-4" >
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
          <button
            onClick={handleFilterClick}
            className="w-full sm:w-auto flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition"
          >
            <FaFilter className="mr-2" />
            Apply
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryFilter(cat)}
              className="text-sm px-4 py-1.5 bg-gray-800 text-white rounded-full hover:bg-black transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      </Element>

      {/* Header Section */}
      <div className="mx-4 mt-10 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Nearby Restaurants</h1>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black">
          <option>Recommended</option>
          <option>Best</option>
          <option>Top</option>
        </select>
      </div>

      {/* Restaurant Cards */}
      <div className="mt-8 px-4 space-y-5">
        {displayedMeals.map((meal) => (
          <RestaurantCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {/* Side Navbar */}
      <SideNavbar />
      
    </div>
  );
}

export default Home;
