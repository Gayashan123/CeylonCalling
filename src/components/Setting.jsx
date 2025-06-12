// SettingsModal.jsx
import { useState } from "react";
import { FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Setting({ onClose }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Settings</h2>

        {/* 1. Profile Settings */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">👤 Profile</h3>
          <input type="text" placeholder="Name" className="inputStyle" />
          <input type="email" placeholder="Email" className="inputStyle" />
          <input type="tel" placeholder="Phone" className="inputStyle" />
          <input type="password" placeholder="Change Password" className="inputStyle" />
        </section>

        {/* 2. Preferences */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">🍽️ Preferences</h3>
          <select className="inputStyle">
            <option>Vegan</option>
            <option>Spicy</option>
            <option>Desserts</option>
          </select>
          <select
            className="inputStyle"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Sinhala</option>
          </select>
          <select className="inputStyle">
            <option>12 Hour Format</option>
            <option>24 Hour Format</option>
          </select>
          <input type="text" placeholder="Default City or Location" className="inputStyle" />
        </section>

        {/* 3. Notifications */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">🔔 Notifications</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> New nearby restaurants
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Promotions / Offers
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Updates from saved restaurants
            </label>
          </div>
        </section>

        {/* 4. Theme */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">🎨 Theme</h3>
          <button
            className="flex items-center gap-2 inputStyle cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
          <select className="inputStyle mt-2">
            <option value="teal">Teal</option>
            <option value="purple">Purple</option>
            <option value="blue">Blue</option>
          </select>
        </section>

        {/* 5. Security */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">🛡️ Security</h3>
          <label className="flex items-center gap-2 mb-2">
            <input type="checkbox" /> Enable 2FA
          </label>
          <button className="text-red-500 text-sm hover:underline">
            👀 Show recent logins
          </button>
          <button className="text-red-500 text-sm hover:underline ml-4">
            🚪 Logout from all devices
          </button>
        </section>

        {/* 6. Saved Data */}
        <section className="mb-2">
          <h3 className="text-lg font-semibold mb-2">🧾 Saved Data</h3>
          <button className="text-sm text-blue-600 hover:underline mr-4">Clear Favorites</button>
          <button className="text-sm text-blue-600 hover:underline mr-4">Clear Search History</button>
          <button className="text-sm text-blue-600 hover:underline">Clear Recently Viewed</button>
        </section>
      </div>
    </div>
  );
}

export default Setting;

// Add this to global CSS or tailwind.config
// .inputStyle => you can add this to tailwind config as utility class too
