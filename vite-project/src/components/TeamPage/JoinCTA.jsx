import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; 

const JoinCTA = () => {
    // 1. Theme setup
    const { theme } = useTheme(); 
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE (Harmonized with CompanyCulture component)
    const PALETTE = {
        background: "bg-[#1E1E28]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card surface (used for secondary button hover)
        textPrimary: "text-white",      // Headings and titles
        textSecondary: "text-gray-400", // Body text
        accentViolet: "text-[#8B5CF6]", // Violet-500
        border: "border-[#293e58]",     // Subtle dark border
    };

    // ⚪ LIGHT MODE PALETTE (Harmonized with previous components)
    const LIGHT = {
        background: "bg-gray-50",
        surface: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        secondaryBorder: 'border-gray-300',
        secondaryText: 'text-gray-700',
        secondaryHover: 'hover:bg-gray-100',
    };

    // 2. Dynamic Class Assignments
    const sectionBgClass = isDarkMode ? PALETTE.background : LIGHT.background;
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : LIGHT.textPrimary;
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : LIGHT.textSecondary;
    
    // Primary Button
    const primaryButtonClass = isDarkMode 
        ? `bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white 
           px-8 py-4 rounded-xl font-semibold shadow-xl shadow-fuchsia-800/20 
           hover:shadow-fuchsia-800/40 transition-all duration-300 whitespace-nowrap`
        : `bg-black text-white 
           px-8 py-4 rounded-xl font-semibold shadow-lg 
           hover:bg-gray-800 transition-all duration-300 whitespace-nowrap`;
        
    // Secondary Button 
    const secondaryButtonClass = isDarkMode
        ? `border-2 ${PALETTE.border} ${PALETTE.textPrimary} 
           px-8 py-4 rounded-xl font-semibold 
           hover:bg-[#293e58] transition-colors whitespace-nowrap` 
        : `border-2 ${LIGHT.secondaryBorder} ${LIGHT.secondaryText} 
           px-8 py-4 rounded-xl font-semibold ${LIGHT.secondaryHover} 
           transition-colors whitespace-nowrap`;


    return (
        <section className={`py-20 ${sectionBgClass} transition-colors duration-300`}>
            <motion.div 
                className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <motion.h2 
                    className={`text-3xl md:text-4xl font-bold ${headingTextColor} mb-6 transition-colors duration-300`}
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Join Our Mission
                </motion.h2>
                <motion.p 
                    className={`text-lg ${bodyTextColor} mb-8 transition-colors duration-300`}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Be part of a team that's transforming healthcare through AI innovation. We're always looking for talented individuals who share our passion for improving patient outcomes.
                </motion.p>
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Primary CTA */}
                    <motion.a 
                        href="#careers" 
                        className={primaryButtonClass}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Open Positions
                    </motion.a>
                    {/* Secondary CTA */}
                    <motion.a 
                        href="#benefits" 
                        className={secondaryButtonClass}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn About Benefits
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default JoinCTA;