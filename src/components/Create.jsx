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
      className="relative inset-0 z-50 flex items-center justify-center min-h-screen bg-black/85"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-md mx-4 sm:mx-6 md:mx-0 p-6 sm:p-8 bg-black rounded-lg shadow-xl border border-white/10 transition-all duration-500 ease-in-out">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
          onClick={closeLogin}
          aria-label="Close modal"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full">
          <h2 className="mb-6 text-3xl font-semibold text-teal-400 text-center">
            Create Account
          </h2>
          <form onSubmit={createAccount} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-white mb-1">
                User Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-base font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="mobile"
                name="email"
                autoComplete="email"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-base font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="new-password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              Create Account
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              type="button"
              className="text-teal-400 hover:underline"
              onClick={login}
              tabIndex={0}
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;