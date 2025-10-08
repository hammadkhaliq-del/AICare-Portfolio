import React from 'react';
import { motion } from 'framer-motion';
import { UserStar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Dummy Data for demonstration (replace with actual import if running this component)
const advisors = [
    { name: "Dr. Evelyn Reed", role: "AI Ethics", affiliation: "Stanford School of Medicine" },
    { name: "Prof. Ben Carter", role: "Data Science Lead", affiliation: "MIT Department of CS" },
    { name: "Dr. Lena Khan", role: "Clinical Integration", affiliation: "Global Health Systems Inc." },
];

const AdvisoryBoard = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#1E1E28]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card surface
        textPrimary: "text-white",       // Headings and titles
        textSecondary: "text-gray-400",  // Body text
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for roles/accents
        iconBgGradient: "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]", // Violet gradient for icon
    };

    // ⚪ LIGHT MODE PALETTE
    const LIGHT = {
        background: "bg-white",
        surface: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        accentBlue: "text-blue-600",
        iconBgGradient: "bg-gradient-to-r from-blue-500 to-purple-500", // Original light gradient
    };

    // Dynamic Classes (Controlled by isDarkMode)
    const sectionBgClass = isDarkMode ? PALETTE.background : LIGHT.background;
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : LIGHT.textPrimary;
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : LIGHT.textSecondary;
    
    const cardBgClass = isDarkMode 
        ? PALETTE.surface
        : LIGHT.surface;

    const cardTitleColor = isDarkMode 
        ? PALETTE.textPrimary 
        : LIGHT.textPrimary;
    
    // Role/Accent color
    const cardRoleColor = isDarkMode 
        ? PALETTE.accentViolet 
        : LIGHT.accentBlue;

    const iconBgClass = isDarkMode 
        ? PALETTE.iconBgGradient 
        : LIGHT.iconBgGradient;

    return (
        <section className={`py-20 transition-colors duration-300 ${sectionBgClass}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingTextColor}`}>
                        Advisory Board
                    </h2>
                    <p className={`text-lg ${bodyTextColor}`}>
                        Distinguished experts guiding our strategic direction
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {advisors.map((advisor, index) => (
                        <motion.div 
                            key={advisor.name}
                            className={`${cardBgClass} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5,
                                delay: index * 0.1 // Simple staggered entrance
                            }}
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 ${iconBgClass} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                <UserStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${cardTitleColor}`}>{advisor.name}</h3>
                            <p className={`font-semibold mb-2 ${cardRoleColor}`}>{advisor.role}</p>
                            <p className={`text-sm ${bodyTextColor}`}>{advisor.affiliation}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvisoryBoard;