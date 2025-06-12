import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCog,
  FaBell,
  FaHeart,
  FaClock,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <aside className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-white shadow-xl rounded-2xl px-6 py-4 flex justify-between items-center z-50 border border-gray-200">
      {/* Icons Group */}
      <div className="flex justify-between items-center w-full gap-6">
        <FaHome
          onClick={goToHome}
          className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer"
        />
        <FaBell className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer" />
        <FaHeart className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer" />
        <FaClock className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer" />
        <FaCog className="text-xl sm:text-2xl text-gray-500 hover:text-purple-600 transition cursor-pointer" />
      </div>
    </aside>
  );
}

export default Navbar;
