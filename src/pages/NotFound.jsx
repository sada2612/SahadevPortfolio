import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Animated 404 */}
          <div className="relative mb-8">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-9xl md:text-[200px] font-bold gradient-text mb-4"
            >
              404
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-0 left-1/4 text-4xl"
            >
              🚀
            </motion.div>
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -360, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-10 right-1/4 text-4xl"
            >
              💻
            </motion.div>
            <motion.div
              animate={{
                x: [0, 60, 0],
                y: [0, 80, 0],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute bottom-10 left-1/3 text-4xl"
            >
              🔍
            </motion.div>
          </div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Oops! The page you're looking for seems to have drifted off into the digital cosmos.
            It might have been moved, deleted, or perhaps never existed in this universe.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md mx-auto mb-10"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search the website..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all"
              >
                <FiHome className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              Maybe you were looking for:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800/50 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Did You Know?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌌</div>
                <p className="text-gray-600 dark:text-gray-400">
                  There are more possible website URLs than stars in the observable universe
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-gray-600 dark:text-gray-400">
                  This 404 page loads faster than it takes to blink your eye
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔗</div>
                <p className="text-gray-600 dark:text-gray-400">
                  Most broken links are caused by typos - double-check your URL!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Pssst... try pressing <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Shift</kbd> + <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">R</kbd> to refresh
            </p>
          </motion.div>
        </motion.div>

        {/* Space Animation Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -1000],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;