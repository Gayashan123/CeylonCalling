import {
  FaHome,
  FaCog,
  FaBell,
  FaHeart,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";

function SideNavbar() {
  return (
    <aside
      className="
        fixed bottom-0 left-0 right-0 lg:fixed lg:top-0 lg:left-0
        bg-white shadow-md rounded-s
        flex justify-between items-center px-6 py-5
        lg:flex-col   lg:h-screen lg:w-20 lg:p-4
        z-50
      "
    >
      {/* Top Icons */}
      <div className="flex lg:flex-col items-center space-x-6 lg:space-x-0 lg:space-y-6">
        <FaHome className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <FaBell className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <FaHeart className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <FaClock className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
      </div>

     
    </aside>
  );
}

export default SideNavbar;
