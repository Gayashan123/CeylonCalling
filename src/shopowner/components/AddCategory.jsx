import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-50px", scale: 0.9 },
  visible: { opacity: 1, y: "0", scale: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
  exit: { opacity: 0, y: "50px", scale: 0.9, transition: { ease: "easeInOut" } }
};

const AddCategory = ({ onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName.trim());
      setCategoryName("");
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4 sm:px-6"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-6 max-w-md w-full"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              autoFocus
            />
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Add
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddCategory;
