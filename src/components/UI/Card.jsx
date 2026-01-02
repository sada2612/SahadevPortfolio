import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const Card = ({
  children,
  title,
  subtitle,
  icon,
  image,
  imageAlt = '',
  footer,
  href,
  onClick,
  variant = 'default',
  padding = 'md',
  hoverable = true,
  className = '',
  border = true,
  shadow = 'md',
  rounded = 'lg',
  ...props
}) => {
  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  };

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-3xl'
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800',
    elevated: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    glass: 'backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/20',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
    outline: 'border-2 border-gray-200 dark:border-gray-700',
    flat: 'bg-gray-50 dark:bg-gray-900'
  };

  // Base classes
  const baseClasses = 'transition-all duration-300 overflow-hidden';
  
  // Combine classes
  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${shadowClasses[shadow]}
    ${roundedClasses[rounded]}
    ${border ? 'border border-gray-200 dark:border-gray-700' : ''}
    ${hoverable ? 'hover:shadow-xl hover:-translate-y-1' : ''}
    ${className}
  `.trim();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Card content
  const CardContent = () => (
    <>
      {/* Image */}
      {image && (
        <div className="relative mb-6 overflow-hidden rounded-t-lg -mx-6 -mt-6">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Header */}
      {(title || subtitle || icon) && (
        <div className="mb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {icon && (
                <div className="mb-3 text-3xl">
                  {icon}
                </div>
              )}
              {title && (
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {subtitle}
                </p>
              )}
            </div>
            {href && (
              <div className="text-gray-400 dark:text-gray-500">
                <FiArrowRight className="w-5 h-5" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </>
  );

  // Render as link
  if (href) {
    return (
      <motion.a
        href={href}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={hoverable ? "hover" : ""}
        className={`group block ${cardClasses}`}
        {...props}
      >
        <CardContent />
      </motion.a>
    );
  }

  // Render as clickable div
  if (onClick) {
    return (
      <motion.div
        onClick={onClick}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={hoverable ? "hover" : ""}
        className={`group cursor-pointer ${cardClasses}`}
        {...props}
      >
        <CardContent />
      </motion.div>
    );
  }

  // Render as regular div
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverable ? "hover" : ""}
      className={`group ${cardClasses}`}
      {...props}
    >
      <CardContent />
    </motion.div>
  );
};

// Card with stats
export const StatsCard = ({ 
  value, 
  label, 
  icon,
  trend,
  color = 'blue',
  ...props 
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500',
    indigo: 'from-indigo-500 to-blue-500'
  };

  return (
    <Card
      variant="gradient"
      className="relative overflow-hidden"
      {...props}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        <div className={`w-full h-full bg-gradient-to-br ${colorClasses[color]} rounded-full`} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">
            {icon}
          </div>
          {trend && (
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              trend.isPositive 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {trend.value}
            </span>
          )}
        </div>
        
        <div className="text-3xl font-bold mb-1">
          {value}
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {label}
        </div>
      </div>
    </Card>
  );
};

// Card with action
export const ActionCard = ({ 
  title,
  description,
  actionText = 'Learn More',
  actionIcon = <FiArrowRight />,
  onAction,
  ...props 
}) => {
  return (
    <Card {...props}>
      <div className="mb-4">
        {title && (
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      
      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          {actionText}
          {actionIcon && (
            <span className="ml-2">
              {actionIcon}
            </span>
          )}
        </button>
      )}
    </Card>
  );
};

// Card grid layout
export const CardGrid = ({ 
  children, 
  columns = 3,
  gap = 'md',
  className = '' 
}) => {
  const gridColumns = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
  };

  const gridGap = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10'
  };

  return (
    <div className={`grid ${gridColumns[columns]} ${gridGap[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;