import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function IntegrationSection() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#121212]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card background
        textPrimary: "text-white",       // Headings and card titles
        textSecondary: "text-gray-400",  // Body text
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for icons/accents
        subtleSurface: "bg-[#293e58]", // Subtle dark bg for icon container
    };

    // Dynamic Classes (Updated for Violet Theme)
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-gray-50';
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const cardBgClass = isDarkMode ? PALETTE.surface : 'bg-white';
    const cardTitleColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const cardBodyColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';

    // Unified Dark Mode Icon Styles
    const darkIconColor = PALETTE.accentViolet.replace('text-', 'text-');
    const darkIconBg = PALETTE.subtleSurface;

    // Define card data with dynamic colors
    const integrationCards = [
        // EHR Systems Integration (Blue in light mode)
        { 
            title: 'EHR Systems', 
            description: 'Compatible with Epic, Cerner, Allscripts, and other major electronic health record systems.', 
            IconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            iconColor: isDarkMode ? darkIconColor : 'text-blue-600',
            bg: isDarkMode ? darkIconBg : 'bg-blue-100'
        },
        // PACS Integration (Green in light mode)
        { 
            title: 'PACS Integration', 
            description: 'Direct integration with Picture Archiving and Communication Systems for seamless imaging workflows.', 
            IconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
            iconColor: isDarkMode ? darkIconColor : 'text-green-600',
            bg: isDarkMode ? darkIconBg : 'bg-green-100'
        },
        // Cloud & On-Premise (Purple in light mode)
        { 
            title: 'Cloud & On-Premise', 
            description: 'Flexible deployment options including cloud-based, on-premise, and hybrid configurations.', 
            IconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
            iconColor: isDarkMode ? darkIconColor : 'text-purple-600',
            bg: isDarkMode ? darkIconBg : 'bg-purple-100'
        },
    ];

    const Icon = ({ path, className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
        </svg>
    );

    // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.section 
            className={`py-16 transition-colors duration-300 ${sectionBgClass}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2 
                    className={`text-3xl font-bold text-center mb-4 ${headingTextColor}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Seamless Integration
                </motion.h2>
                <motion.p 
                    className={`text-center mb-10 max-w-3xl mx-auto ${bodyTextColor}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Our products integrate with your existing healthcare infrastructure
                </motion.p>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {integrationCards.map((card, index) => (
                        <motion.div 
                            key={index} 
                            className={`${cardBgClass} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Icon Container: Subtle dark bg, Violet icon in dark mode */}
                            <motion.div 
                                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${card.bg}`}
                                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                            >
                                <Icon path={card.IconPath} className={`h-6 w-6 ${card.iconColor}`} />
                            </motion.div>
                            <h3 className={`text-xl font-semibold mb-2 ${cardTitleColor}`}>{card.title}</h3>
                            <p className={`text-sm ${cardBodyColor}`}>
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}