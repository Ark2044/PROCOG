import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white">Procog</h3>
            <p className="mt-2 text-sm">
              Empowering risk management collaboration.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex justify-center md:justify-start">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          <p>&copy; 2024 Procog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
