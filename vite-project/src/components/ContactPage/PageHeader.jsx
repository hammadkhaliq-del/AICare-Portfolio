// -----------------------------------------------------------
// Component 5: PageHeader.jsx
// -----------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
// IMPORTANT: You must create this context hook at the path below!
import { useTheme } from "../../context/ThemeContext"; 

function PageHeader() {
    // 1. Theme Hook and Palette
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const PALETTE = {
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accentGradient: "from-[#8b5cf6] via-[#a78bfa] to-[#c4b5fd]", // violet-based gradient
    };

    // Dynamic Classes
    const headingClass = isDarkMode ? PALETTE.textPrimary : "text-gray-900";
    const bodyClass = isDarkMode ? PALETTE.textSecondary : "text-gray-500";
    const gradientClass = isDarkMode 
        ? `bg-gradient-to-r ${PALETTE.accentGradient} text-transparent bg-clip-text` 
        : 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text';
    
    return (
        <header className="mb-16 text-center pt-8">
            <motion.h1
                className={`text-5xl font-extrabold tracking-tight md:text-6xl ${headingClass} transition-colors duration-300`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Get in <span className={gradientClass}>Touch</span>
            </motion.h1>

            <motion.p
                className={`mx-auto mt-4 max-w-3xl text-lg ${bodyClass} transition-colors duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
                Ready to transform your healthcare practice with AI? Our specialized team is here
                to help you get started with the right solutions for your needs.
            </motion.p>
        </header>
    );
}

export default PageHeader;