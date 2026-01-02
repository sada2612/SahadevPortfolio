import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({
  size = 'md',
  color = 'blue',
  variant = 'default',
  text = '',
  fullscreen = false,
  className = '',
  showBackground = true
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    green: 'text-green-600 dark:text-green-400',
    red: 'text-red-600 dark:text-red-400',
    orange: 'text-orange-600 dark:text-orange-400',
    pink: 'text-pink-600 dark:text-pink-400',
    white: 'text-white',
    gray: 'text-gray-600 dark:text-gray-400'
  };

  // Default spinner
  const DefaultSpinner = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      <motion.div
        className="absolute inset-0 border-2 border-current rounded-full opacity-20"
      />
      <motion.div
        className="absolute inset-0 border-2 border-current rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );

  // Dots spinner
  const DotsSpinner = () => (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${colorClasses[color]}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );

  // Pulse spinner
  const PulseSpinner = () => (
    <motion.div
      className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  // Ring spinner
  const RingSpinner = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-current rounded-full"
          style={{
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );

  // Cube spinner
  const CubeSpinner = () => (
    <div className={`relative ${sizeClasses[size]}`}>
      <motion.div
        className="absolute inset-0 bg-current rounded"
        animate={{
          rotateX: 360,
          rotateY: 360
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      />
    </div>
  );

  const spinnerVariants = {
    default: <DefaultSpinner />,
    dots: <DotsSpinner />,
    pulse: <PulseSpinner />,
    ring: <RingSpinner />,
    cube: <CubeSpinner />
  };

  const SpinnerContent = () => (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="mb-3">
        {spinnerVariants[variant] || spinnerVariants.default}
      </div>
      {text && (
        <motion.p
          className={`text-sm font-medium mt-2 ${colorClasses[color]}`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {showBackground && (
          <motion.div
            className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <SpinnerContent />
        </motion.div>
      </div>
    );
  }

  return <SpinnerContent />;
};

// Loading overlay for components
export const LoadingOverlay = ({ isLoading, children, spinnerProps = {} }) => {
  if (!isLoading) return children;

  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm flex items-center justify-center rounded-lg">
        <LoadingSpinner {...spinnerProps} />
      </div>
    </div>
  );
};

// Skeleton loading component
export const SkeletonLoader = ({ 
  type = 'text',
  count = 1,
  className = '',
  height,
  width
}) => {
  const skeletons = Array(count).fill(0);

  const SkeletonItem = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse ${className}`}
            style={{ height: height || '200px', width: width || '100%' }}
          />
        );
      case 'circle':
        return (
          <div className={`bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse ${className}`}
            style={{ height: height || '50px', width: width || '50px' }}
          />
        );
      case 'text':
      default:
        return (
          <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
            style={{ 
              height: height || '20px', 
              width: width || '100%',
              marginBottom: '8px'
            }}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      {skeletons.map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

// Content loader with skeleton
export const ContentLoader = ({ isLoading, children, skeletonProps = {} }) => {
  if (isLoading) {
    return <SkeletonLoader {...skeletonProps} />;
  }

  return children;
};

// Loading progress bar
export const LoadingProgress = ({ progress, showPercentage = true }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        {showPercentage && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Loading... {progress}%
          </span>
        )}
        {showPercentage && (
          <span className="text-xs text-gray-500">{progress}/100</span>
        )}
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;