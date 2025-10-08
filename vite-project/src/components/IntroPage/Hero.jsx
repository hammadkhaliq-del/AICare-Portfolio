import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // Import the useTheme hook

const Hero = () => {
    // 1. Use the theme hook
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 NEW DARK MODE PALETTE MAPPING
    const PALETTE = {
        background: "bg-[#121212]",
        card: "bg-[#1f1f23]", // Used for background cards, not the dashboard
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accent: "text-[#8b5cf6]", // violet-500
        buttonBg: "bg-[#8b5cf6]",
        buttonHover: "hover:bg-[#7c3aed]", // violet-600
        accentHoverText: "hover:text-[#7c3aed]",
    };

    // Words to cycle through
    const words = ["Healthcare", "Diagnostics", "Medicine", "Treatment"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, [words.length]);
    
    // Dynamic classes based on theme
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-white';
    const mainHeadingColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const statTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-700';

    // Primary Button: Solid Violet
    const primaryButtonBg = isDarkMode 
        ? `${PALETTE.buttonBg} text-white ${PALETTE.buttonHover}` 
        : 'bg-black text-white hover:bg-gray-800';
    
    // Secondary Button: Violet Text
    const secondaryButtonText = isDarkMode 
        ? `${PALETTE.accent} ${PALETTE.accentHoverText}` 
        : 'text-gray-800 hover:text-gray-700';

    // Blob colors (using the new background/surface colors for subtle contrast)
    const blueBlobColor = isDarkMode ? 'bg-indigo-900/40' : 'bg-blue-100/50';
    const purpleBlobColor = isDarkMode ? 'bg-purple-900/40' : 'bg-purple-100/50';

    // The gradient for the cycling word: from violet-500 to violet-800
    const animatedWordGradient = "block text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#5b21b6] bg-clip-text";

    // --- FORCED LIGHT MODE STYLES FOR THE DASHBOARD MOCKUP ---
    const dashboardInnerBg = 'bg-white'; // Always white
    const dashboardTextColor = 'text-black'; // Always dark text
    const dashboardCardBg = 'bg-gray-100'; // Always light card background (can use white or light gray)
    const diagnosisCardBg = 'bg-blue-50';
    const monitorCardBg = 'bg-green-50';
    // -----------------------------------------------------------


    return (
        // Apply dynamic background to the section
        <section className={`relative flex items-center justify-center ${sectionBgClass} py-8 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] transition-colors duration-300`}>
            {/* Large background blobs - Dynamic Colors */}
            <motion.div
                className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full ${blueBlobColor} filter blur-[100px]`}
                animate={{
                    x: [0, 10, 0],
                    y: [0, 15, 0],
                    opacity: [0.4, 0.5, 0.4],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ zIndex: 0 }}
            />
            
            <motion.div
                className={`absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full ${purpleBlobColor} filter blur-[100px]`}
                animate={{
                    x: [0, -15, 0],
                    y: [0, -10, 0],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ zIndex: 0 }}
            />

            {/* Small decorative circles - Dark Mode adapted */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${10 + i * 5}px`,
                        height: `${10 + i * 5}px`,
                        // Use a subtle shade of the accent color for animation
                        backgroundColor: i % 2 === 0 
                            ? isDarkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(165, 180, 252, 0.6)' 
                            : isDarkMode ? 'rgba(124, 58, 237, 0.5)' : 'rgba(216, 180, 254, 0.6)',
                        top: `${15 + (i * 12)}%`,
                        right: `${8 + (i * 10)}%`,
                        zIndex: 1,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center md:text-left md:pr-8">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWordIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className={animatedWordGradient} // Violet Gradient
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </AnimatePresence>
                        {/* Apply dynamic color to the static text */}
                        <span className={`block ${mainHeadingColor} mt-1 transition-colors duration-300`}>Reinvented.</span>
                    </h1>

                    {/* Apply dynamic color to body text */}
                    <p className={`text-xl ${bodyTextColor} mb-8 transition-colors duration-300`}>
                        Your AI-powered care companion, backed by <span className="font-semibold">NCAI</span>
                    </p>

                    {/* Stats List - Apply dynamic color to stat text */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-10">
                        <div className={`flex items-center space-x-3 ${statTextColor} transition-colors duration-300`}>
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                            <span>99.9% Accuracy</span>
                        </div>
                        <div className={`flex items-center space-x-3 ${statTextColor} transition-colors duration-300`}>
                            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                            <span>50K+ Patients</span>
                        </div>
                        <div className={`flex items-center space-x-3 ${statTextColor} transition-colors duration-300`}>
                            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
                            <span>24/7 Support</span>
                        </div>
                    </div>

                    {/* Buttons - Apply dynamic classes */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition duration-300 ${primaryButtonBg}`}
                        >
                            Get Started
                        </motion.button>

                        <motion.button
                            whileHover={{ x: 5 }}
                            className={`px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center transition duration-300 ${secondaryButtonText}`}
                        >
                            Explore Products
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Right Dashboard Mockup */}
                <div className="flex justify-center md:justify-end">
                    <motion.div
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        animate={{
                            rotateX: isHovered ? 8 : 0,
                            rotateY: isHovered ? -8 : 0,
                            scale: isHovered ? 1.04 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full max-w-lg transform-gpu perspective-1000"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Device mockup with shadow */}
                        <div className="relative bg-black rounded-[2rem] shadow-2xl p-2.5 overflow-hidden"
                            style={{
                                // Keep the dark, deep shadow on the device frame
                                boxShadow: isDarkMode
                                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                                    : '0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
                            }}>
                            
                            {/* Camera notch */}
                            <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10 flex justify-center items-center">
                                <div className="w-3 h-3 bg-gray-800 rounded-full mx-1"></div>
                                <div className="w-1 h-1 bg-blue-500 rounded-full mx-1"></div>
                            </div>

                            {/* Dashboard Content - FORCED WHITE BACKGROUND */}
                            <div className={`relative ${dashboardInnerBg} rounded-[1.7rem] p-6 ${dashboardTextColor} overflow-hidden transition-colors duration-300`}>
                                
                                {/* Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold">AI Care Dashboard</h3>
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        // Use the primary accent color
                                        className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center"
                                    >
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {/* AI Diagnosis Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        // Use fixed light card colors
                                        className={`${diagnosisCardBg} rounded-2xl p-5 transition-colors duration-300`}
                                    >
                                        <div className="mb-2 w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                        </div>
                                        <p className={`font-medium text-blue-900`}>AI Diagnosis</p>
                                        <div className={`flex items-center mt-2 text-sm text-blue-800`}>
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            <span>Active</span>
                                        </div>
                                    </motion.div>

                                    {/* Health Monitor Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        // Use fixed light card colors
                                        className={`${monitorCardBg} rounded-2xl p-5 transition-colors duration-300`}
                                    >
                                        <div className="mb-2 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 14.808L12 21.88l9.08-7.072a12.001 12.001 0 00-1.079-9.808z"></path>
                                            </svg>
                                        </div>
                                        <p className={`font-medium text-green-900`}>Health Monitor</p>
                                        <div className={`flex items-center mt-2 text-sm text-green-800`}>
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            <span>Online</span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Doctor Card */}
                                <div className={`${dashboardCardBg} rounded-2xl p-5 flex items-center transition-colors duration-300`}>
                                    {/* Use the primary accent color for the avatar */}
                                    <div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center mr-4 text-white">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-medium text-gray-900`}>Dr. Sarah Chen</p>
                                        <p className={`text-sm text-gray-600`}>Cardiologist</p>
                                        <p className={`text-sm text-gray-500 mt-1`}>Your next appointment is scheduled for tomorrow at 2:00 PM</p>
                                    </div>
                                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full ml-4"></div>
                                </div>

                                {/* Bottom accent */}
                                <motion.div
                                    className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                    </svg>
                                </motion.div>
                            </div>
                        </div>

                        {/* Accent dots around the mockup */}
                        <motion.div
                            // Use the primary accent color
                            className="absolute -top-3 -right-3 w-6 h-6 bg-[#8b5cf6] rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-10 -left-4 w-8 h-8 bg-green-500 rounded-full"
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;