import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Import the useTheme hook

export default function HeroSection() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#121212]",     // Main dark background
        textPrimary: "text-white",       // Headings
        textSecondary: "text-gray-400",  // Body text
        accentGradient: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]", // Violet gradient
    };

    // Dynamic Classes
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-white';
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';

    return (
        <section className={`text-center py-16 sm:py-20 transition-colors duration-300 ${sectionBgClass}`}>
            {/* Title */}
            <h1 className={`text-4xl md:text-6xl font-extrabold ${headingTextColor}`}>
                AI Healthcare <span 
                    // Apply violet-focused gradient in dark mode
                    className={`text-transparent bg-clip-text ${isDarkMode ? PALETTE.accentGradient : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}
                >
                    Solutions
                </span>
            </h1>

            {/* Subtitle */}
            <p className={`mt-6 max-w-3xl mx-auto text-lg px-4 ${bodyTextColor}`}>
                AI Care, an initiative of MIDL–NCAI, is dedicated to building cutting-edge 
                AI and ML solutions for the healthcare industry. Our mission is to enhance 
                diagnostic accuracy, streamline medical workflows, and empower hospitals with 
                smart, data-driven tools for better patient outcomes.
            </p>
        </section>
    );
}