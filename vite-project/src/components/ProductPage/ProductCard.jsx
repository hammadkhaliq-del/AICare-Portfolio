import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckLg } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

export default function ProductCard({ product, index, totalCards }) {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const { 
        title, 
        subtitle, 
        description, 
        features,
        icon,
        tag
    } = product;

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        surface: "bg-[#2a2a30]",        // Card background (Dark Grey Surface)
        border: "border-[#373737]",     // Dark border
        textPrimary: "text-white",       // Title/headings
        textSecondary: "text-gray-400",  // Subtitle/description/features
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for checkmarks, button hover, etc.
        accentVioletBg: "bg-[#8B5CF6]/10", // Subtle violet bg for tags
        accentTagText: "text-[#8B5CF6]",
        buttonBg: "bg-[#293e58]",       // Darker surface for button background
    };

    // Dynamic Classes
    const cardBgClass = isDarkMode 
        ? `${PALETTE.surface} ${PALETTE.border} border` // Apply dark surface and border
        : 'bg-white border border-gray-200/60';

    const titleColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const subtitleColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const descriptionColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const featureTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';

    // Accent Icon Colors: Checkmarks are VIOLET in dark mode
    const checkmarkColor = isDarkMode ? PALETTE.accentViolet : 'text-green-500';

    // Learn More Button
    const buttonClass = isDarkMode 
        ? `${PALETTE.buttonBg} ${PALETTE.textPrimary} hover:bg-[#375073] hover:${PALETTE.accentViolet}` 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-blue-600';
    
    // Tag Colors (Adjusted for theme)
    const tagClass = isDarkMode 
        ? `${PALETTE.accentVioletBg} ${PALETTE.accentTagText}` 
        : (tag === 'Popular' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800');
    
    // Determine if card is in first or second row (assuming 3 per row)
    const isFirstRow = index < 3;
    
    // Animation variants based on row position
    const cardVariants = {
        hidden: { 
            x: isFirstRow ? -100 : 100, // First row from left, second row from right
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 70, // Lower stiffness for gentler motion
                damping: 20,   // Higher damping for smoother animation
                delay: index * 0.1, // Stagger based on index
                duration: 0.8   // Slightly longer duration for smoother motion
            }
        }
    };

    return (
        <motion.div 
            className={`${cardBgClass} rounded-xl shadow-md h-full transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02]`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="p-6 flex flex-col h-full">
                
                {/* Card Header with Icon and optional Tag */}
                <div className="flex justify-between items-start mb-4">
                    {/* Icon: Using product's provided colors */}
                    <motion.div 
                        className={`w-14 h-14 flex items-center justify-center rounded-lg ${product.iconBg} text-2xl`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className={`${product.iconColor}`}>{icon}</div>
                    </motion.div>
                    
                    {tag && (
                        <motion.span 
                            className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${tagClass}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.3 }}
                        >
                            {tag}
                        </motion.span>
                    )}
                </div>
                
                {/* Title and Subtitle */}
                <h3 className={`text-xl font-bold mb-1 ${titleColor}`}>{title}</h3>
                <p className={`text-sm mb-3 ${subtitleColor}`}>{subtitle}</p>
                
                {/* Description */}
                <p className={`mb-5 text-sm flex-grow ${descriptionColor}`}>
                    {description}
                </p>
                
                {/* Features List */}
                <ul className={`space-y-2 mb-6`}>
                    {features.map((feature, idx) => (
                        <motion.li 
                            key={idx} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (idx * 0.1) }}
                        >
                            <span className={`${checkmarkColor} mr-2 mt-0.5`}>
                                <BsCheckLg size={14} />
                            </span> 
                            <span className={`text-sm ${featureTextColor}`}>{feature}</span>
                        </motion.li>
                    ))}
                </ul>
                
                {/* Learn More Button */}
                <motion.button 
                    className={`mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium
                        transition-all duration-200 text-sm ${buttonClass}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaArrowRight className="ml-2" size={12} />
                    </motion.span>
                </motion.button>
            </div>
        </motion.div>
    );
}