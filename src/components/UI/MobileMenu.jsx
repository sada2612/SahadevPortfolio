import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiFolder, 
  FiCode, 
  FiUser, 
  FiMail,
  FiChevronRight,
  FiExternalLink
} from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';

const MobileMenu = ({ 
  items,
  isOpen,
  onClose,
  className = ''
}) => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Default menu items if none provided
  const menuItems = items || [
    { path: '/', label: 'Home', icon: <FiHome /> },
    { path: '/projects', label: 'Projects', icon: <FiFolder /> },
    { path: '/skills', label: 'Skills', icon: <FiCode /> },
    { path: '/about', label: 'About', icon: <FiUser /> },
    { path: '/contact', label: 'Contact', icon: <FiMail /> }
  ];

  // Close menu when route changes
  useEffect(() => {
    onClose();
    setActiveSubmenu(null);
  }, [location.pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col ${className}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">CC</span>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 dark:text-white">Menu</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Navigation</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <div key={item.path || index}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => handleSubmenuToggle(index)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                            location.pathname.startsWith(item.path)
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-lg">
                              {item.icon}
                            </div>
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <motion.div
                            animate={{ rotate: activeSubmenu === index ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiChevronRight />
                          </motion.div>
                        </button>

                        {/* Submenu */}
                        <AnimatePresence>
                          {activeSubmenu === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-10 mt-1 space-y-1 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                    location.pathname === child.path
                                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                                  }`}
                                >
                                  <span className="text-sm">•</span>
                                  <span className="text-sm">{child.label}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          location.pathname === item.path
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <div className="text-lg">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                        {item.external && (
                          <FiExternalLink className="ml-auto text-sm opacity-50" />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200 dark:border-gray-800" />

              {/* External Links */}
              <div className="space-y-1">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Connect
                </h3>
                {[
                  { label: 'GitHub', url: 'https://github.com/sada2612', icon: '💻' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sahadev-padavale/', icon: '💼' },
                  { label: 'Twitter', url: '/', icon: '🐦' },
                  { label: 'Email', url: 'mailto:sahadev.dotnet@gmail.com', icon: '✉️' }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                    <FiExternalLink className="ml-auto text-sm opacity-50" />
                  </a>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                <ThemeToggle size="sm" variant="outlined" showSystem={false} />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © 2025 Sahadev Padavale
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Senior Full Stack Engineer
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Mobile Menu Trigger Button
export const MobileMenuButton = ({ onClick, isOpen, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { rotate: 90 },
          closed: { rotate: 0 }
        }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </motion.div>

      {/* Notification dot */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.button>
  );
};

// Hook for mobile menu state
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
};

export default MobileMenu;