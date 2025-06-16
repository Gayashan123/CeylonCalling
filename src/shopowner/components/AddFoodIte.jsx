import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh", scale: 0.8 },
  visible: { opacity: 1, y: "0", scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  exit: { opacity: 0, y: "100vh", scale: 0.8, transition: { ease: "easeInOut" } }
};

const AddFoodItem = ({ onClose }) => {
  const fileInputRef = useRef();

  const [food, setFood] = React.useState({
    name: "",
    category: "",
    price: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture") {
      setFood({ ...food, [name]: files[0] });
    } else {
      setFood({ ...food, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(food);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-2"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="relative w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition"
          >
            <FaTimes size={20} />
          </button>
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Add New Food Item</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              onChange={handleChange}
              placeholder="Food Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition bg-gray-50"
              autoComplete="off"
              required
            />
            <input
              name="category"
              onChange={handleChange}
              placeholder="Food Category"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition bg-gray-50"
              autoComplete="off"
              required
            />
            <input
              name="price"
              onChange={handleChange}
              placeholder="Price (e.g. Rs.450)"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition bg-gray-50"
              autoComplete="off"
              required
              type="number"
              min="0"
              inputMode="numeric"
            />
            <div>
              <label
                htmlFor="picture"
                className="block mb-1 text-gray-700 font-medium"
              >
                Food Picture
              </label>
              <input
                ref={fileInputRef}
                type="file"
                name="picture"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold shadow-md hover:from-purple-600 hover:to-purple-800 transition text-lg"
            >
              Add Food
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddFoodItem;
