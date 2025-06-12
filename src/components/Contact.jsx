import Con from '../assets/contact.jpg';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  const contactDetails = [
    {
      icon: <FiPhoneCall className="text-4xl text-teal-600" />,
      label: 'Call Us',
      value: '+94 75 206 9762',
    },
    {
      icon: <HiOutlineMail className="text-4xl text-teal-600" />,
      label: 'Email',
      value: 'reservations@restaurant.com',
    },
  ];

  return (
    <section
      id="contact"
      className="bg-neutral-100 py-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div
        className="mb-14 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-neutral-600 max-w-xl mx-auto">
          We’re here to answer your questions and assist with bookings. Reach out anytime!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
        {contactDetails.map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-[1.03]"
            data-aos="fade-up"
            data-aos-delay={i * 200 + 100}
          >
            {item.icon}
            <h3 className="mt-5 text-xl font-medium text-teal-700">{item.label}</h3>
            <p className="mt-2 text-neutral-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Contact Form + Image */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        {/* Image */}
        <div
          className="flex-1 rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.03]"
          data-aos="fade-right"
        >
          <img
            src={Con}
            alt="Contact"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Form */}
        <form
          className="flex-1 bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-lg max-w-md w-full transition-transform hover:scale-[1.03]"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
            Get in Touch
          </h2>
          <p className="mb-8 text-neutral-600">
            We value your feedback and bookings. Fill out this form, and we’ll get in touch shortly.
          </p>

          <label className="block mb-4">
            <span className="text-neutral-700 font-medium mb-2 block">Your Name</span>
            <input
              type="text"
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              placeholder="John Doe"
            />
          </label>

          <label className="block mb-4">
            <span className="text-neutral-700 font-medium mb-2 block">Your Email</span>
            <input
              type="email"
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              placeholder="john@example.com"
            />
          </label>

          <label className="block mb-6">
            <span className="text-neutral-700 font-medium mb-2 block">Your Message</span>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              placeholder="Write your message..."
            />
          </label>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            <span>Submit</span>
            <FiSend className="text-xl" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
