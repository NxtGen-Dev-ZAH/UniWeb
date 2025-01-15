import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 w-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Renograte</h3>
            <p className="text-gray-400">
              Integrating renovation into real estate transactions.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/properties"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="/renovations"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Renovations
                </a>
              </li>
              <li>
                <a
                  href="/market-analysis"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Market Analysis
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <FiMapPin className="mr-2" /> Washington D.C., USA
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" /> Phone: (123) 456-7890
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2" /> Email: info@renograte.com
              </li>
              <li>24/7/365</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#0C71C3] transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#0C71C3] transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#0C71C3] transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#0C71C3] transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Renograte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
