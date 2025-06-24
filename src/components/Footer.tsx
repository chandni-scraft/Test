
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/418d1373-60be-4a7d-b6b4-24b13f354281.png" 
                alt="SurgeAhead" 
                className="h-8 md:h-10" 
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Empowering future medical professionals with expert interview training and comprehensive preparation programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                Email: info@surgeahead.com
              </p>
              <p className="text-gray-300 text-sm">
                Phone: +1 (555) 123-4567
              </p>
              <div className="pt-4">
                <Link to="/workshops#booking" className="inline-block bg-white hover:bg-gray-100 text-[#2d343e] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 SurgeAhead. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
