import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { leadership } from '../data/teamData';

const LeadershipTeam = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#1E1E28]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card surface
        textPrimary: "text-white",       // Headings and names
        textSecondary: "text-gray-400",  // Body text, Education
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for roles/accents
        tagBg: "bg-[#8B5CF6]/20",        // Subtle violet background for tags
        tagText: "text-[#8B5CF6]",       // Violet text for tags
    };

    // ⚪ LIGHT MODE PALETTE
    const LIGHT = {
        background: "bg-white",
        surface: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        accentBlue: "text-blue-600",
        tagBg: "bg-blue-100",           // Light blue background for tags
        tagText: "text-blue-700",       // Darker blue text for tags
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
    
    // Role color (Violet in dark, Blue in light)
    const cardRoleColor = isDarkMode 
        ? PALETTE.accentViolet 
        : LIGHT.accentBlue;
    
    // Icon and Education Text
    const educationIconColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-500';
    const educationTextColor = isDarkMode ? PALETTE.textSecondary : LIGHT.textSecondary;

    // Specialty Tags
    const tagBgClass = isDarkMode ? PALETTE.tagBg : LIGHT.tagBg;
    const tagTextColor = isDarkMode ? PALETTE.tagText : LIGHT.tagText;

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
                        Leadership Team
                    </h2>
                    <p className={`text-lg ${bodyTextColor}`}>
                        Experienced leaders driving innovation in healthcare AI
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {leadership.map((leader, index) => (
                        <motion.div 
                            key={leader.name}
                            className={`${cardBgClass} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
                            initial={{ 
                                opacity: 0, 
                                x: index % 2 === 0 ? -50 : 50 // Even from left, odd from right
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <div className="p-8">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                                    <motion.div 
                                        className="flex-shrink-0"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    >
                                        <img 
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                                        />
                                    </motion.div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className={`text-2xl font-bold mb-2 ${cardTitleColor}`}>{leader.name}</h3>
                                        <p className={`font-semibold mb-3 ${cardRoleColor}`}>{leader.role}</p>
                                        <p className={`mb-4 leading-relaxed ${bodyTextColor}`}>{leader.bio}</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-center sm:justify-start space-x-2">
                                                <GraduationCap className={`h-4 w-4 ${educationIconColor}`} />
                                                <span className={`text-sm ${educationTextColor}`}>{leader.education}</span>
                                            </div>
                                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                                {leader.specialties.map((specialty, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className={`px-3 py-1 text-xs rounded-full ${tagBgClass} ${tagTextColor}`}
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipTeam;