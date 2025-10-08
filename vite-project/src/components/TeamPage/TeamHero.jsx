import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Import useTheme

const TeamHero = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#121212]",     
        textPrimary: "text-white",       
        textSecondary: "text-gray-400",  
        // Subtle dark gradient for depth
        bgGradient: "bg-gradient-to-br from-[#1E1E28] via-[#1f1f23] to-[#1E1E28]", 
        // Consistent violet accent gradient
        accentGradient: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]", // Violet-500 to Violet-400
    };

    // ⚪ LIGHT MODE PALETTE (Harmonized with previous components)
    const LIGHT = {
        background: "bg-[#F8FAF4]",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        // Bright, clean light gradient
        bgGradient: "bg-gradient-to-br from-blue-50 via-white to-purple-50", 
        // Original light accent gradient
        accentGradient: "bg-gradient-to-r from-blue-600 to-purple-600", 
    };

    // Dynamic Classes (Controlled by isDarkMode)
    const bgGradientClass = isDarkMode ? PALETTE.bgGradient : LIGHT.bgGradient;
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : LIGHT.textPrimary;
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : LIGHT.textSecondary;
    const accentGradientClass = isDarkMode ? PALETTE.accentGradient : LIGHT.accentGradient;
    const bgColor = isDarkMode ? PALETTE.background : LIGHT.background

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Dynamic Background Gradient */}
            <div className={`absolute inset-0 transition-colors duration-300 ${bgColor}`}></div>
            
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${headingTextColor}`}>
                        Meet Our <span className={`text-transparent bg-clip-text ${accentGradientClass}`}>Team</span>
                    </h1>
                    <p className={`text-xl leading-relaxed ${bodyTextColor}`}>
                        World-class medical professionals, AI researchers, and technology experts united by a shared mission to revolutionize healthcare through artificial intelligence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TeamHero; 