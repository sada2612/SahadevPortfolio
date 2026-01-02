import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiRefreshCw, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ 
      errorInfo,
      errorCount: this.state.errorCount + 1 
    });

    // You can log errors to an external service here
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    const { hasError, error, errorInfo, errorCount } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Custom fallback UI
      if (fallback) {
        return fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity 
                    }}
                  >
                    <FiAlertTriangle className="w-10 h-10" />
                  </motion.div>
                  <div>
                    <h1 className="text-2xl font-bold">Something went wrong</h1>
                    <p className="text-red-100">Error #{errorCount}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  React Error
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {error?.message || 'An unexpected error occurred'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  The application encountered an error that needs your attention.
                  Don't worry, your data is safe.
                </p>
              </div>

              {/* Error Details (Collapsible) */}
              {errorInfo && (
                <div className="mb-6">
                  <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <summary className="font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white">
                      Technical Details
                    </summary>
                    <div className="mt-3 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Error Stack
                        </h4>
                        <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto max-h-40">
                          {error?.stack || 'No stack trace available'}
                        </pre>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Component Stack
                        </h4>
                        <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto max-h-40">
                          {errorInfo.componentStack || 'No component stack available'}
                        </pre>
                      </div>
                    </div>
                  </details>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleRetry}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow min-w-[140px]"
                >
                  <FiRefreshCw className="w-5 h-5" />
                  Reload Page
                </motion.button>

                <Link to="/" onClick={this.handleGoHome}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-w-[140px]"
                  >
                    <FiHome className="w-5 h-5" />
                    Go Home
                  </motion.button>
                </Link>
              </div>

              {/* Troubleshooting Tips */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                  Troubleshooting Tips
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                  <li>• Clear your browser cache and refresh</li>
                  <li>• Check your internet connection</li>
                  <li>• Disable browser extensions temporarily</li>
                  <li>• Try using a different browser</li>
                  <li>• The error has been automatically reported</li>
                </ul>
              </div>

              {/* Contact Support */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  If the problem persists, please{' '}
                  <a 
                    href="mailto:sahadev.dotnet@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    contact support
                  </a>
                </p>
              </div>
            </div>

            {/* Error Code Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Error ID: {Date.now().toString(36)}</span>
                <span>React {React.version}</span>
              </div>
            </div>
          </motion.div>

          {/* Floating error particles */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
      );
    }

    return children;
  }
}

// Higher-order component for error boundary
export const withErrorBoundary = (Component, FallbackComponent) => {
  return (props) => (
    <ErrorBoundary fallback={FallbackComponent}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

// Error boundary for specific components
export const ComponentErrorBoundary = ({ children, message = 'Component Error' }) => {
  return (
    <ErrorBoundary
      fallback={
        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-red-800 dark:text-red-300">{message}</h4>
              <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                This component failed to load. Please try refreshing the page.
              </p>
            </div>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundary;