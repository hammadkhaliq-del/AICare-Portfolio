import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { teamMembers } from '../data/teamData';

const TeamMembers = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#1E1E28]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card surface
        textPrimary: "text-white",       // Headings and names
        textSecondary: "text-gray-400",  // Body text / Department
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for roles/accents
    };

    // ⚪ LIGHT MODE PALETTE 
    const LIGHT = {
        background: "bg-gray-50",
        surface: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        accentBlue: "text-blue-600", // Standard light mode accent
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

    // Department/Sub-text color
    const cardDepartmentColor = isDarkMode 
        ? PALETTE.textSecondary
        : LIGHT.textSecondary;

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
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingTextColor}`}>Our Team</h2>
                    <p className={`text-lg ${bodyTextColor}`}>Talented professionals across all departments</p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={member.name}
                            className={`${cardBgClass} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.5,
                                delay: Math.min(0.3, index * 0.05), // Cap the delay at 0.3s for large teams
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="p-6 text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 + Math.min(0.2, index * 0.03) }}
                                >
                                    <img 
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </motion.div>
                                <h3 className={`text-xl font-bold mb-2 ${cardTitleColor}`}>{member.name}</h3>
                                <p className={`font-semibold mb-1 ${cardRoleColor}`}>{member.role}</p>
                                <p className={`text-sm ${cardDepartmentColor}`}>{member.department}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;