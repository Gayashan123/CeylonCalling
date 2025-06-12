import React, { useState } from "react";

const Create = ({ login, closeLogin }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = (event) => {
    event.preventDefault();
    console.log("Creating account with", name, mobile, password);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-labelledby="create-account-title"
    >
      <div className="relative w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl shadow-gray-900/30 ring-1 ring-gray-300">
        {/* Close Button */}
        <button
          onClick={closeLogin}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="create-account-title"
          className="mb-8 text-3xl font-semibold text-gray-900"
        >
          Create Account
        </h2>

        <form onSubmit={createAccount} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email or Mobile
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="example@email.com or 07XXXXXXXX"
              className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={login}
            className="font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Create;
