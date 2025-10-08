import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NotFound404 = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();
  
  // Handle mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      mouseX.set(x / width);
      mouseY.set(y / height);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Start sequence animations
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Style variables based on theme
  const bgClass = isDarkMode ? "bg-[#0f101a]" : "bg-gray-50";
  const primaryTextClass = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryTextClass = isDarkMode ? "text-gray-300" : "text-gray-600";
  const accentColorClass = isDarkMode ? "text-[#9563f8]" : "text-blue-600";
  const primaryColor = isDarkMode ? "#9563f8" : "#3b82f6";
  const secondaryColor = isDarkMode ? "#7c3aed" : "#2563eb";
  const gradientStart = isDarkMode ? "#9563f8" : "#3b82f6";
  const gradientEnd = isDarkMode ? "#7c3aed" : "#2563eb";
  
  // Interactive gradient for background shine effect
  const backgroundGradient = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) => `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, ${isDarkMode ? 'rgba(149, 99, 248, 0.15)' : 'rgba(59, 130, 246, 0.2)'} 0%, transparent 50%)`
  );

  return (
    <div 
      className={`min-h-screen ${bgClass} flex flex-col items-center justify-center overflow-hidden relative`}
      ref={containerRef}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ background: backgroundGradient }}
      />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* Animated circles in background */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-opacity-10 ${i % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}`}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0.2
          }}
          animate={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            scale: Math.random() * 0.5 + 0.5,
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${(i + 2) * 100}px`,
            height: `${(i + 2) * 100}px`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 py-16 z-10 flex flex-col items-center relative">
        {/* 404 Number */}
        <div className="mb-8 relative">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* 3D layered 404 text */}
            {[...Array(10)].map((_, i) => (
              <motion.h1
                key={i}
                className={`text-9xl font-black absolute left-0 top-0 ${i === 9 ? accentColorClass : 'text-transparent'}`}
                style={{
                  textShadow: i < 9 ? `0px ${i * 0.5}px 0px rgba(${isDarkMode ? '149, 99, 248' : '59, 130, 246'}, ${0.1 - i * 0.01})` : 'none',
                  WebkitTextStroke: i === 9 ? `1px ${primaryColor}` : 'none',
                  zIndex: 10 - i,
                }}
                initial={{ y: 50,x: 40, opacity: 0 }}
                animate={{ y: -75,x: 100, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.05 * i }}
              >
                404
              </motion.h1>
            ))}
          </motion.div>
          
          {/* Animated AI Brain Icon */}
          <motion.div
            className="absolute -right-24 -top-20"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M100 20C55.8 20 20 55.8 20 100C20 144.2 55.8 180 100 180C144.2 180 180 144.2 180 100C180 55.8 144.2 20 100 20ZM100 60C122.1 60 140 77.9 140 100C140 122.1 122.1 140 100 140C77.9 140 60 122.1 60 100C60 77.9 77.9 60 100 60Z"
                stroke={primaryColor}
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              
              {/* Neural Network Nodes */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                const radius = 60;
                const x = 100 + radius * Math.cos(angle);
                const y = 100 + radius * Math.sin(angle);
                
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="5"
                    fill={primaryColor}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: [0, 1.5, 1] }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  />
                );
              })}
              
              {/* Neural Network Connections */}
              {[...Array(12)].map((_, i) => {
                const startAngle = (i * 30) * Math.PI / 180;
                const endAngle = ((i * 30) + Math.random() * 120 + 30) * Math.PI / 180;
                const innerRadius = 30;
                const outerRadius = 60;
                
                const x1 = 100 + innerRadius * Math.cos(startAngle);
                const y1 = 100 + innerRadius * Math.sin(startAngle);
                const x2 = 100 + outerRadius * Math.cos(endAngle);
                const y2 = 100 + outerRadius * Math.sin(endAngle);
                
                return (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={primaryColor}
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                  />
                );
              })}
              
              {/* Core Brain */}
              <motion.circle
                cx="100"
                cy="100"
                r="20"
                fill={`url(#brain-gradient-${isDarkMode ? 'dark' : 'light'})`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              
              {/* Gradient definitions */}
              <defs>
                <radialGradient id={`brain-gradient-${isDarkMode ? 'dark' : 'light'}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor={gradientStart} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={gradientEnd} stopOpacity="0.3" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        
        {/* Error Message */}
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mt-10 mb-6 ${primaryTextClass} text-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Neural Network Disruption Detected
        </motion.h2>
        
        <motion.div
          className={`h-0.5 w-20 ${isDarkMode ? 'bg-purple-500' : 'bg-blue-500'} mb-6`}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        
        <motion.p
          className={`text-lg sm:text-xl max-w-lg text-center mb-10 ${secondaryTextClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Our AI algorithms can't locate the page you've requested. It may have been moved, deleted, or exists in an alternate dimension outside our current data architecture.
        </motion.p>
        
        {/* Diagnostic Data */}
        <motion.div
          className={`w-full max-w-md p-4 rounded-lg mb-10 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white/70'} backdrop-blur border ${isDarkMode ? 'border-purple-900/30' : 'border-blue-100'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Diagnostic Report</span>
            <span className={`text-xs ${accentColorClass}`}>{new Date().toISOString().replace('T', ' ').substring(0, 19)}</span>
          </div>
          
          <div className={`h-0.5 w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-3`}></div>
          
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Error Code:</span>
              <span className={accentColorClass}>404_PAGE_NOT_FOUND</span>
            </div>
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Path:</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{window.location.pathname}</span>
            </div>
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Status:</span>
              <span className={`${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>Failed</span>
            </div>
          </div>
        </motion.div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link to="/">
            <motion.button
              className={`px-6 py-3 rounded-lg font-semibold text-white cursor-pointer ${isDarkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} shadow-lg ${isDarkMode ? 'shadow-purple-900/30' : 'shadow-blue-700/30'}`}
              whileHover={{ scale: 1.05, boxShadow: `0 10px 25px -5px ${isDarkMode ? 'rgba(124, 58, 237, 0.5)' : 'rgba(37, 99, 235, 0.5)'}` }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Return to Homebase
            </motion.button>
          </Link>
          
          <motion.button
            className={`px-6 py-3 rounded-lg font-semibold border-2 cursor-pointer ${isDarkMode ? 'border-purple-800/60 text-purple-300 hover:bg-purple-900/30' : 'border-blue-200 text-blue-700 hover:bg-blue-50'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            onClick={() => window.history.back()}
          >
            Go Back
          </motion.button>
        </div>
        
        {/* EKG Line Animation */}
        <motion.div
          className="mt-16 w-full max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <svg width="100%" height="40" viewBox="0 0 400 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0 25 L50 25 L60 10 L70 40 L80 15 L90 25 L150 25 L155 5 L165 45 L175 25 L400 25"
              stroke={primaryColor}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
            />
          </svg>
        </motion.div>
        
        {/* Footer text */}
        <motion.div
          className={`mt-4 text-xs ${secondaryTextClass} text-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          AI Care © {new Date().getFullYear()} | Systems Operating Normally | <span className={accentColorClass}>Support</span>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound404;