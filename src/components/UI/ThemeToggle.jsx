import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

const ThemeToggle = ({ 
  size = 'md',
  variant = 'default',
  className = '',
  showLabels = false,
  showSystem = true
}) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [mounted, setMounted] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10',
    lg: 'w-12 h-12 text-lg'
  };

  const variants = {
    default: 'rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700',
    minimal: 'rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800',
    outlined: 'rounded-full border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500',
    filled: 'rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white'
  };

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // System theme
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.removeItem('theme');
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (!showSystem) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [showSystem]);

  const toggleTheme = () => {
    if (showSystem) {
      setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');
    } else {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <FiMoon className="w-5 h-5" />;
      case 'system':
        return <FiMonitor className="w-5 h-5" />;
      default:
        return <FiSun className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System';
      default:
        return 'Light Mode';
    }
  };

  const getNextThemeLabel = () => {
    if (showSystem) {
      return theme === 'light' ? 'Switch to Dark' : 
             theme === 'dark' ? 'Switch to System' : 
             'Switch to Light';
    }
    return theme === 'light' ? 'Switch to Dark' : 'Switch to Light';
  };

  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} ${variants[variant]} ${className} animate-pulse`} />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`flex items-center justify-center transition-all duration-200 ${sizeClasses[size]} ${variants[variant]} ${className}`}
      aria-label={getNextThemeLabel()}
      title={getNextThemeLabel()}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {getThemeIcon()}
      </motion.div>

      {showLabels && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-2 text-sm font-medium"
        >
          {getThemeLabel()}
        </motion.span>
      )}
    </motion.button>
  );
};

// Animated theme toggle with orbit effect
export const AnimatedThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 ${className}`}
      aria-label="Toggle theme"
    >
      {/* Sun/Moon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? (
          <FiSun className="w-7 h-7 text-yellow-500" />
        ) : (
          <FiMoon className="w-7 h-7 text-blue-400" />
        )}
      </motion.div>

      {/* Orbit particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400 dark:bg-yellow-400"
          style={{
            top: '50%',
            left: '50%',
            marginLeft: '-2px',
            marginTop: '-2px',
          }}
          animate={{
            x: theme === 'light' 
              ? [0, Math.cos(i * 120 * Math.PI / 180) * 20, 0]
              : [0, Math.cos(i * 120 * Math.PI / 180) * 30, 0],
            y: theme === 'light'
              ? [0, Math.sin(i * 120 * Math.PI / 180) * 20, 0]
              : [0, Math.sin(i * 120 * Math.PI / 180) * 30, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-200 dark:border-gray-700"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
    </button>
  );
};

// Theme selector with options
export const ThemeSelector = ({ className = '' }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  const themes = [
    { id: 'light', name: 'Light', icon: <FiSun />, color: 'text-yellow-500' },
    { id: 'dark', name: 'Dark', icon: <FiMoon />, color: 'text-blue-400' },
    { id: 'system', name: 'System', icon: <FiMonitor />, color: 'text-gray-500' }
  ];

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
    const root = document.documentElement;
    
    if (themeId === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (themeId === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.removeItem('theme');
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 ${className}`}>
      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Theme</h3>
      <div className="space-y-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              currentTheme === theme.id
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`${theme.color}`}>
                {theme.icon}
              </div>
              <span className="font-medium">{theme.name}</span>
            </div>
            {currentTheme === theme.id && (
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;