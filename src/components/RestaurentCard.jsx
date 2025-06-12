import {
  FaHeart,
  FaMapMarkerAlt,
  FaUtensils,
  FaPhoneAlt,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";

function RestaurantCard({ meal }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden w-full max-w-4xl mx-auto mt-6 border border-gray-100">
      {/* Image */}
      <div className="md:w-1/3 w-full h-64 md:h-auto">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
        {/* Title and Info */}
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 mb-3">{meal.strMeal}</h2>

          {/* Open Hours */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <FaClock className="mr-2 text-purple-400" />
            9 AM - 10 PM
          </div>

          {/* Phone */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <FaPhoneAlt className="mr-2 text-green-400" />
            +94 77 123 4567
          </div>

          {/* Description */}
          <div className="flex items-start text-sm text-gray-500 mt-3 leading-relaxed">
            <FaInfoCircle className="mt-1 mr-2 text-blue-400" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap mt-4 gap-2">
            {[meal.strCategory, "Local", "Veg Friendly"].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
            <FaHeart className="text-red-400" /> Favourite
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
            <FaMapMarkerAlt className="text-green-400" /> Directions
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
            <FaUtensils className="text-blue-400" /> View Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
