import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  rounded = 'md',
  className = '',
  href,
  to,
  target,
  rel,
  onClick,
  type = 'button',
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    xs: 'text-xs px-2.5 py-1.5',
    sm: 'text-sm px-3 py-2',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-6 py-3',
    xl: 'text-lg px-8 py-4'
  };

  // Variant classes
  const variantClasses = {
    // Primary variants
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
    'primary-outline': 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400',
    'primary-ghost': 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20',
    
    // Secondary variants
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500',
    'secondary-outline': 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400 dark:border-gray-400',
    'secondary-ghost': 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800',
    
    // Success variants
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 focus:ring-green-500',
    'success-outline': 'border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 dark:text-green-400 dark:border-green-400',
    
    // Danger variants
    danger: 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-red-500',
    'danger-outline': 'border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 dark:text-red-400 dark:border-red-400',
    
    // Warning variants
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700 focus:ring-yellow-500',
    'warning-outline': 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-400',
    
    // Light variants
    light: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600',
    
    // Gradient variants
    gradient: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 focus:ring-purple-500',
    
    // Glass effect
    glass: 'backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 border border-white/30 dark:border-gray-700/30 text-white hover:bg-white/30 dark:hover:bg-gray-900/30'
  };

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full'
  };

  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${roundedClasses[rounded]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
    loading: { opacity: 0.8 }
  };

  // Loading spinner
  const LoadingSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="mr-2"
    >
      <FiLoader className="w-4 h-4" />
    </motion.div>
  );

  // Icon component
  const Icon = ({ position }) => {
    if (!icon || isLoading) return null;
    if (position !== iconPosition) return null;
    
    return (
      <span className={position === 'left' ? 'mr-2' : 'ml-2'}>
        {icon}
      </span>
    );
  };

  // Content
  const Content = () => (
    <>
      {isLoading && <LoadingSpinner />}
      <Icon position="left" />
      <span className="whitespace-nowrap">{children}</span>
      <Icon position="right" />
    </>
  );

  // Render as Link
  if (to) {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        animate={isLoading ? "loading" : ""}
        variants={buttonVariants}
      >
        <Link
          to={to}
          className={buttonClasses}
          {...props}
        >
          <Content />
        </Link>
      </motion.div>
    );
  }

  // Render as anchor
  if (href) {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        animate={isLoading ? "loading" : ""}
        variants={buttonVariants}
      >
        <a
          href={href}
          target={target}
          rel={rel}
          className={buttonClasses}
          {...props}
        >
          <Content />
        </a>
      </motion.div>
    );
  }

  // Render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover="hover"
      whileTap="tap"
      animate={isLoading ? "loading" : ""}
      variants={buttonVariants}
      className={buttonClasses}
      {...props}
    >
      <Content />
    </motion.button>
  );
};

// Icon Button (circular)
export const IconButton = ({
  icon,
  size = 'md',
  variant = 'primary',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    xs: 'w-7 h-7 text-xs',
    sm: 'w-9 h-9 text-sm',
    md: 'w-11 h-11',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-16 h-16 text-xl'
  };

  return (
    <Button
      size={size}
      variant={variant}
      rounded="full"
      icon={icon}
      className={`p-0 ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
};

// Button Group
export const ButtonGroup = ({ 
  children, 
  orientation = 'horizontal',
  className = '' 
}) => {
  const groupClasses = orientation === 'vertical' 
    ? 'flex flex-col space-y-0 divide-y divide-gray-200 dark:divide-gray-700'
    : 'inline-flex space-x-0 divide-x divide-gray-200 dark:divide-gray-700';

  return (
    <div className={`${groupClasses} rounded-lg overflow-hidden ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: `${child.props.className || ''} rounded-none`,
            rounded: 'none'
          });
        }
        return child;
      })}
    </div>
  );
};

// Floating Action Button
export const Fab = ({
  icon,
  position = 'bottom-right',
  size = 'md',
  variant = 'primary',
  className = '',
  ...props
}) => {
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
    'center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} z-40 ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IconButton
        icon={icon}
        size={size}
        variant={variant}
        rounded="full"
        {...props}
      />
    </motion.div>
  );
};

export default Button;