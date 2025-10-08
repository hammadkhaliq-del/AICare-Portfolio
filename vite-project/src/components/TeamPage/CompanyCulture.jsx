import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, BookOpen, Heart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Dummy Data for demonstration (replace with actual import if running this component)
const culturalValues = [
    { title: 'Innovation', description: 'We embrace curiosity and risk-taking to push the boundaries of healthcare AI.', icon: 'Lightbulb', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
    { title: 'Collaboration', description: 'Success is a team effort built on mutual respect and shared goals across disciplines.', icon: 'Users', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'Continuous Learning', description: 'The pace of AI demands constant education and professional development.', icon: 'BookOpen', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
    { title: 'Patient Focus', description: 'Our ultimate purpose is to build tools that genuinely improve patient care and safety.', icon: 'Heart', bgColor: 'bg-red-100', iconColor: 'text-red-600' },
];

const CompanyCulture = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // Map icon names to their components
    const iconComponents = {
        Lightbulb: Lightbulb,
        Users: Users,
        BookOpen: BookOpen,
        Heart: Heart
    };

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#1E1E28]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card surface
        textPrimary: "text-white",       // Headings and titles
        textSecondary: "text-gray-400",  // Body text
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for consistent icons
        subtleSurface: "bg-[#293e58]", // Subtle dark bg for icon container
    };

    // ⚪ LIGHT MODE PALETTE (Harmonized with previous components)
    const LIGHT = {
        background: "bg-gray-50",
        surface: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
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

    // Unified Dark Mode Icon Styles
    const darkIconColor = PALETTE.accentViolet;
    const darkIconBg = PALETTE.subtleSurface;

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
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingTextColor}`}>Our Culture</h2>
                    <p className={`text-lg ${bodyTextColor}`}>What makes AI Care a great place to work</p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {culturalValues.map((value, index) => {
                        const IconComponent = iconComponents[value.icon];

                        // Determine icon styling based on theme
                        const iconColorClass = isDarkMode ? darkIconColor : value.iconColor;
                        const iconBgClass = isDarkMode ? darkIconBg : value.bgColor;

                        return (
                            <motion.div 
                                key={index} 
                                className={`text-center p-6 rounded-2xl shadow-lg transition-all duration-300 ${cardBgClass}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.1 // Simple staggered entrance
                                }}
                            >
                                <div className={`w-16 h-16 ${iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <IconComponent className={`h-8 w-8 ${iconColorClass}`} />
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${cardTitleColor}`}>{value.title}</h3>
                                <p className={`text-sm ${bodyTextColor}`}>{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CompanyCulture;