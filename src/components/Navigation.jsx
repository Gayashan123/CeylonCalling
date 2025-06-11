import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Login from './Login';
import Create from './Create';
import Logo from "../assets/Lion.jpg"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iconShow, setIconshow] = useState(true);
  const [lopop, setlopop] = useState(false);
  const [signup, setsignup] = useState(false);

  const menuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIconshow(!iconShow);
  };

  const openLogin = () => {
    setlopop(true);
    setsignup(false);
    setIsMenuOpen(false);
    setIconshow(true);
  };

  const openSignup = () => {
    setsignup(true);
    setlopop(false);
    setIsMenuOpen(false);
    setIconshow(true);
  };

  const closeModals = () => {
    setlopop(false);
    setsignup(false);
  };

  return (
    <div className={`fixed top-0 left-0 z-30 w-full ${lopop || signup ? 'bg-black opacity-[0.73]' : ''}`}>
      <div className='flex items-center justify-between px-6 py-4 mx-auto bg-white  lg:px-20'>
        <div className='flex items-center gap-4'>
           <img src={Logo} alt="Hospital Care Logo" className='h-10 mt-0 bg-yellow-400' />
          <p className='text-xl font-semibold uppercase text-black'>Ceylon Calling</p>
        </div>

        <div className='items-center hidden gap-6 ml-auto lg:flex'>
          <ul className='flex text-black gap-7'>
            {['header', 'about', 'contact', 'services'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-red-500"
                  className='cursor-pointer hover:text-gray-400 capitalize'
                >
                  {section === 'services' ? 'Restaurants' : section}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-4'>
            <button
              className='px-6 py-2 font-semibold text-gray-800 uppercase outline-2 outline-red-400 bg-white rounded-xl hover:bg-gray-200'
              onClick={openLogin}
            >
              Log in
            </button>
            <button
              className='px-6 py-2 font-semibold text-gray-800 uppercase bg-red-300 rounded-xl hover:bg-gray-200'
              onClick={openSignup}
            >
              Sign in
            </button>
          </div>
        </div>

        {iconShow && (
          <div className='flex lg:hidden'>
            <button className='text-black' onClick={menuClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {isMenuOpen && !lopop && !signup && (
        <div className="absolute z-40 w-full px-5 py-5 text-white transition-all duration-500 ease-in-out bg-black opacity-90 rounded-xl lg:hidden">
          <button
            className="absolute text-white top-4 right-4"
            onClick={() => {
              setIsMenuOpen(false);
              setIconshow(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="flex flex-col items-center py-4 uppercase gap-4">
            {['header', 'about', 'contact', 'services'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-red-500"
                  className="cursor-pointer hover:text-gray-400 capitalize"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIconshow(true);
                  }}
                >
                  {section === 'services' ? 'Restaurants' : section}
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex justify-center gap-4 mt-6'>
            <button
              className='px-6 py-2 font-semibold text-gray-800 uppercase bg-white rounded-full hover:bg-gray-200'
              onClick={openSignup}
            >
              Signin
            </button>
            <button
              className='px-6 py-2 font-semibold text-gray-800 uppercase bg-white rounded-full hover:bg-gray-200'
              onClick={openLogin}
            >
              Log in
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {lopop && <Login closeLogin={closeModals} signup={openSignup} />}
      {signup && <Create closeLogin={closeModals} login={openLogin} />}
    </div>
  );
}

export default Navigation;
