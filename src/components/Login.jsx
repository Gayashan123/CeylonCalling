import React, { useState, useEffect } from "react";
import Create from "./Create";

const Login = ({ closeLogin }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [text, setText] = useState("Log In");

  useEffect(() => {
    setText(isCreating ? "Create Account" : "Log In");
  }, [isCreating]);

  const createAcc = (e) => {
    e.preventDefault();
    setIsCreating(true);
  };

  const login = () => {
    setIsCreating(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-labelledby="login-title"
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

        <div className="text-center mb-8">
          <h1
            id="login-title"
            className="text-4xl font-semibold text-gray-900"
          >
            Ceylon Calling
          </h1>
          <p className="mt-2 text-xl text-gray-600">{text}</p>
        </div>

        {/* Login or Create Form */}
        {!isCreating ? (
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">Welcome!</h2>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="mobile"
                  placeholder="you@example.com"
                  className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 focus:ring-blue-500" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              >
                Log In
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={createAcc}
                className="font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
              >
                Create Account
              </button>
            </p>
          </div>
        ) : (
          <Create login={login} />
        )}
      </div>
    </div>
  );
};

export default Login;
