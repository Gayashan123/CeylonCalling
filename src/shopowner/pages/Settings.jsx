import React from 'react';
import { FaUserCircle, FaLock, FaBell, FaPalette, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from "../../shopowner/components/SideNavbar";
import shopownerImage from "../../assets/shopowner.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

function Settings() {
  const settingsOptions = [
    {
      icon: <FaUserCircle className="text-3xl text-blue-600" />,
      title: "Profile",
      description: "Update your personal information",
      ringColor: "focus:ring-blue-500",
    },
    {
      icon: <FaLock className="text-3xl text-purple-600" />,
      title: "Change Password",
      description: "Update your password regularly",
      ringColor: "focus:ring-purple-500",
    },
    {
      icon: <FaBell className="text-3xl text-yellow-500" />,
      title: "Notifications",
      description: "Manage notification preferences",
      ringColor: "focus:ring-yellow-400",
    },
    {
      icon: <FaPalette className="text-3xl text-pink-500" />,
      title: "Theme",
      description: "Switch between light and dark mode",
      ringColor: "focus:ring-pink-500",
    },
    {
      icon: <FaSignOutAlt className="text-3xl text-red-600" />,
      title: "Logout",
      description: "Sign out of your account",
      ringColor: "focus:ring-red-500",
      isLogout: true,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <img
        src={shopownerImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
      />

      <motion.div
        className="w-full max-w-3xl bg-white bg-opacity-90 rounded-xl shadow-xl p-10 backdrop-blur-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-extrabold mb-10 text-gray-900 text-center">Settings</h2>

        <div className="space-y-6">
          {settingsOptions.map(({ icon, title, description, ringColor, isLogout }, index) => (
            <motion.button
              key={title}
              type="button"
              custom={index}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className={`w-full flex items-center gap-6 p-5 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 ${ringColor} ${
                isLogout ? 'hover:bg-red-50' : ''
              }`}
            >
              {icon}
              <div className="text-left">
                <p className={`text-lg font-semibold ${isLogout ? 'text-red-600' : 'text-gray-800'}`}>{title}</p>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <Navbar />
    </div>
  );
}

export default Settings;
