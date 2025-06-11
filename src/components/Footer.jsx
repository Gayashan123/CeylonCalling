import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="py-10 container mx-auto text-gray-300 bg-gradient-to-r from-teal-800 via-blue-700 to-teal-600">
      <div className="container px-4 mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Company Info */}
          <div className="sm:text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">About Us</h2>
            <p className="text-sm leading-relaxed">
              Find your favorite food spots around the city with just a few
              clicks. Explore a variety of cuisines and hidden gems near you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-red-500"
                  className="cursor-pointer hover:text-gray-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-red-500"
                  className="cursor-pointer hover:text-gray-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-red-500"
                  className="cursor-pointer hover:text-gray-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-teal-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:text-center">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Contact Us
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-center space-x-2">
                <i className="text-teal-300 bx bx-phone-call"></i>
                <span>+94 752069762</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <i className="text-teal-300 bx bx-envelope"></i>
                <span>gayak3088@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-teal-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between mt-8 text-sm md:flex-row">
          <p className="text-white">© 2025 CodeGeeks . All rights reserved.</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-facebook"></i>
            </a>
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-twitter"></i>
            </a>
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              className="transition-all transform hover:scale-110 hover:text-teal-300"
            >
              <i className="text-2xl bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
