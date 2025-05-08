import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4 py-30 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -left-10 -top-10"
          >
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <FaExclamationTriangle className="text-blue-600 text-2xl" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-9xl font-bold text-blue-600 mb-4"
          >
            404
          </motion.h1>
        </div>

        {/* Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Oops! Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-600 mb-8 max-w-lg mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link 
            to="/" 
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaHome className="mr-2" />
            Return Home
          </Link>
          <Link 
            to="/search" 
            className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <FaSearch className="mr-2" />
            Search Our Site
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center px-6 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Contact Support
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-200"
        >
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
            <Link to="/projects" className="text-blue-600 hover:underline">Our Projects</Link>
            <Link to="/team" className="text-blue-600 hover:underline">Our Team</Link>
            <Link to="/join" className="text-blue-600 hover:underline">Join Us</Link>
            <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating animation elements */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 bottom-1/4 w-8 h-8 rounded-full bg-blue-200 opacity-30"
      />
      <motion.div 
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute right-10 top-1/3 w-12 h-12 rounded-full bg-blue-100 opacity-40"
      />
    </div>
  );
};

export default PageNotFound;