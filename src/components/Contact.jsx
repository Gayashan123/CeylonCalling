import React from 'react';
import Con from '../assets/Contact.jpg';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

function Contact() {
  const contactDetails = [
    {
      icon: <FiPhoneCall className="text-4xl text-orange-600" />,
      label: 'Call Us',
      value: '+94 75 206 9762'
    },
    {
      icon: <HiOutlineMail className="text-4xl text-orange-600" />,
      label: 'Email',
      value: 'reservations@restaurant.com'
    },
    
  ];

  return (
    <div className="container py-10 mx-auto bg-blue-50 text-center" id="contact">
      {/* Header Section */}
      <div className="w-full px-8 py-10 mt-5 rounded-lg shadow-xl bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600">
        <h1 className="text-4xl font-extrabold text-white uppercase">Reserve Your Table or Reach Out</h1>
        <p className="mt-4 text-lg text-white">
          Whether it’s a question, reservation, or feedback – we’d love to hear from you. Let’s connect and serve you better!
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-5 mt-5 rounded-lg shadow-md bg-gray-50">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
          >
            {item.icon}
            <p className="mt-4 text-lg text-gray-700">{item.label}</p>
            <p className="text-gray-500">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center justify-between gap-12 mt-10 sm:flex-row">
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <img
            src={Con}
            alt="Contact"
            className="object-cover w-full h-96 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full max-w-md p-6 bg-white rounded-lg shadow-lg sm:w-1/2 transition duration-300 transform hover:scale-105 hover:shadow-xl">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Get in Touch</h3>
          <p className="mb-6 text-gray-600">
            We value your feedback and bookings. Fill out this form, and we’ll get in touch shortly.
          </p>

          <div className="flex flex-col mb-4">
            <label className="block mb-2 text-lg text-gray-600">Your Name:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block mb-2 text-lg text-gray-600">Your Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block mb-2 text-lg text-gray-600">Your Message:</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

         <button className="flex items-center justify-center gap-2 w-full py-3 font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-700 transition duration-300">
  <span>Submit</span>
  <FiSend className="text-xl" />
</button>

        </div>
      </div>
    </div>
  );
}

export default Contact;
