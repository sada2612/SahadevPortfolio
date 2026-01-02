import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ 
  value, 
  label, 
  icon = '📊', 
  color = 'from-blue-500 to-cyan-500',
  delay = 0,
  animate = true,
  className = '',
  trend = null,
  description = ''
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial={animate ? "hidden" : false}
      animate={animate ? "visible" : false}
      whileHover="hover"
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden group ${className}`}
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-10 rounded-bl-full`}></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1 gradient-text">
              {value}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {label}
            </h3>
          </div>
          
          {/* Icon */}
          <div className="text-3xl">
            {icon}
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {description}
          </p>
        )}

        {/* Trend indicator */}
        {trend && (
          <div className="flex items-center gap-2 mt-2">
            <div className={`flex items-center ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <svg 
                className={`w-4 h-4 mr-1 ${trend.isPositive ? '' : 'transform rotate-180'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-sm font-medium">
                {trend.value}
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {trend.label}
            </span>
          </div>
        )}

        {/* Progress bar (optional) */}
        {trend?.percentage && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>Progress</span>
              <span>{trend.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${trend.percentage}%` }}
                transition={{ duration: 1, delay: delay + 0.3 }}
                className={`h-full bg-gradient-to-r ${color} rounded-full`}
              />
            </div>
          </div>
        )}

        {/* Decorative dots */}
        <div className="flex gap-1 mt-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Predefined stat cards for common use cases
export const ExperienceCard = ({ years = '6+', ...props }) => (
  <StatsCard
    value={years}
    label="Years Experience"
    icon="🎯"
    color="from-blue-500 to-cyan-500"
    description="Building scalable enterprise solutions"
    {...props}
  />
);

export const ProjectsCard = ({ count = '25+', ...props }) => (
  <StatsCard
    value={count}
    label="Projects Delivered"
    icon="🚀"
    color="from-purple-500 to-pink-500"
    description="Successfully completed projects"
    {...props}
  />
);

export const CertificationsCard = ({ count = '7', ...props }) => (
  <StatsCard
    value={count}
    label="Certifications"
    icon="🏆"
    color="from-green-500 to-emerald-500"
    description="Industry recognized credentials"
    {...props}
  />
);

export const ClientsCard = ({ count = '15+', ...props }) => (
  <StatsCard
    value={count}
    label="Happy Clients"
    icon="💼"
    color="from-orange-500 to-red-500"
    description="Satisfied business partners"
    {...props}
  />
);

export const TechStackCard = ({ count = '50+', ...props }) => (
  <StatsCard
    value={count}
    label="Technologies"
    icon="⚡"
    color="from-violet-500 to-fuchsia-500"
    description="Mastered tools & frameworks"
    {...props}
  />
);

// Stats Grid Component
export const StatsGrid = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ${className}`}>
      {children}
    </div>
  );
};

// Default export
export default StatsCard;