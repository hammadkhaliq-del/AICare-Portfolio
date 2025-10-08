import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function CTASection() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#2a2a30]",     // Main dark background
        textPrimary: "text-white",       // Headings
        textSecondary: "text-gray-400",  // Body text
        accentViolet: "bg-[#8B5CF6]",    // Violet-500 for primary button
        accentVioletHover: "hover:bg-[#7C3AED]", // Darker violet on hover
        borderViolet: "border-[#8B5CF6]", // Violet border for secondary button
        textViolet: "text-[#8B5CF6]",    // Violet text for secondary button
        hoverBgTransparent: "hover:bg-[#8B5CF6]/10", // Subtle violet bg on hover
    };

    // Dynamic Classes
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-white';
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';

    // Primary Button: Solid Violet
    const primaryButtonClass = isDarkMode 
        ? `${PALETTE.accentViolet} text-white ${PALETTE.accentVioletHover} shadow-lg` 
        : 'bg-black text-white transition-transform duration-300 transform hover:scale-110';

    // Secondary Button: Outlined Violet
    const secondaryButtonClass = isDarkMode 
        ? `bg-transparent border ${PALETTE.borderViolet} ${PALETTE.textViolet} ${PALETTE.hoverBgTransparent}`
        : 'bg-white border border-black text-black hover:bg-gray-100';

    return (
        // Apply dynamic background class to the section
        <motion.section 
            className={`py-16 text-center transition-colors duration-300 ${sectionBgClass}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-3xl mx-auto px-4">
                <motion.h2 
                    className={`text-3xl font-bold mb-6 ${headingTextColor}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Ready to Transform Your Healthcare Practice?
                </motion.h2>
                
                <motion.p 
                    className={`mb-8 ${bodyTextColor}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Join hundreds of healthcare facilities already using AI Care to improve patient outcomes and streamline operations.
                </motion.p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* Primary Button */}
                    <motion.button 
                        className={`px-6 py-3 font-medium rounded-lg transition duration-300 ${primaryButtonClass}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Schedule Demo
                    </motion.button>
                    
                    {/* Secondary Button */}
                    <motion.button 
                        className={`px-6 py-3 border font-medium rounded-lg transition duration-300 ${secondaryButtonClass}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Sales
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
}