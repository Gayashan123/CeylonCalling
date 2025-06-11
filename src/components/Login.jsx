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
  className="fixed inset-0 z-50 flex items-center justify-center"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
>

      <div className="sm:mr-5 sm:ml:5 relative w-full max-w-md p-6 transition-all duration-500 ease-in-out transform bg-black rounded-lg shadow-lg shadow-white outline-1 outline-white">
        {/* Close Button */}
        <button
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-800"
          onClick={closeLogin}
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

        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-600">Ceylon Calling</h1>
          <p className="mt-2 text-2xl text-white">{text}</p>
        </div>

        {/* Login or Create Form */}
        {!isCreating ? (
          <div className="mt-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Welcome !
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-l font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="mobile"
                  placeholder="01*********"
                  className="text-white w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-l font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="text-white w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-sm text-white">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-teal-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-300"
              >
                Login
              </button>
            </form>

            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-teal-600 hover:underline"
                onClick={createAcc}
              >
                Create Account
              </a>
            </div>
          </div>
        ) : (
          <Create login={login} />
        )}
      </div>
    </div>
  );
};

export default Login;
