import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Innovate4DigiJob</h3>
            <p className="text-blue-100">
              Empowering digital skills for the future workforce through innovative training and job placement solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaYoutube].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Courses', 'About Us', 'Success Stories', 'Blog', 'FAQs'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-white transition flex items-center"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-200" />
                <p className="text-blue-100">
                  College Baptiste Gacuba II, Rubavu District, Rwanda
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-200" />
                <p className="text-blue-100">+250 123 456 789</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-200" />
                <p className="text-blue-100">contact@innovate4digijob.com</p>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-3 text-blue-200" />
                <p className="text-blue-100">Mon-Fri: 8AM - 5PM</p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-blue-100">
              Subscribe to our newsletter for the latest updates and course offerings.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-blue-500 pt-6 mt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Innovate4DigiJob. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-100 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;