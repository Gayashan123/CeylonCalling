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

        <div className="w-full p-8 md:w-96">
          <h2 className="mb-6 text-3xl font-semibold text-teal-700">
            Create Account
          </h2>
          <form onSubmit={createAccount}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-l font-medium text-white">
                User Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="text-white w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-l font-medium text-white">
                Email
              </label>
              <input
                type="text"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="01*********"
                className="text-white w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-l font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="text-white w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-teal-600 hover:underline"
              onClick={login}
            >
              Already have an account? Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
