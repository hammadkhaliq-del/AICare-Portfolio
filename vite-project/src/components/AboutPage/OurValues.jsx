import React from 'react';
import { Heart, Shield, Users } from "lucide-react";
import { useTheme } from '../../context/ThemeContext'; // Import useTheme

export default function OurValues({ isVisible }) {
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
    const mainBg = isDarkMode 
        ? PALETTE.background
        : 'bg-[#f8fafc]'; 

    const cardBg = isDarkMode 
        ? `${PALETTE.surface} shadow-lg` // Use dark surface for cards
        : 'bg-white shadow-sm'; 

    const headingTextColor = isDarkMode 
        ? PALETTE.textPrimary 
        : 'text-gray-900';

    const bodyTextColor = isDarkMode 
        ? PALETTE.textSecondary
        : 'text-gray-600';

    const cardTitleColor = isDarkMode 
        ? PALETTE.textPrimary 
        : 'text-gray-900';
    
    // Unified Dark Mode Icon Styles
    const darkIconColor = PALETTE.accentViolet;
    const darkIconBg = PALETTE.subtleSurface;

    // Icon/Accent Color Mapping
    const valueCards = [
        // Patient First
        { Icon: Heart, title: 'Patient First', description: "Every decision we make is guided by what's best for patient care and safety. We prioritize safety, accuracy, and accessibility in all our solutions.", 
            iconColor: isDarkMode ? darkIconColor : 'text-[#fa5252]', 
            bg: isDarkMode ? darkIconBg : 'bg-[#ffe6e6]' },
        // Trust & Security
        { Icon: Shield, title: 'Trust & Security', description: 'We maintain the highest standards of data security and privacy, ensuring that sensitive medical information is always protected and compliant.', 
            iconColor: isDarkMode ? darkIconColor : 'text-[#4785ff]', 
            bg: isDarkMode ? darkIconBg : 'bg-[#e6f0ff]' },
        // Collaboration
        { Icon: Users, title: 'Collaboration', description: 'We believe in the power of human-AI collaboration, creating tools that enhance medical expertise rather than replace human judgment.', 
            iconColor: isDarkMode ? darkIconColor : 'text-[#40c057]', 
            bg: isDarkMode ? darkIconBg : 'bg-[#e6ffee]' },
    ];


    return (
        <section 
            id="values-section"
            className={`py-20 px-4 md:px-8 transition-colors duration-300 ${mainBg}`}
        >
            <div 
                className={`max-w-6xl mx-auto transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingTextColor}`}>Our Values</h2>
                    <p className={`text-lg ${bodyTextColor}`}>
                        The principles that guide everything we do
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {valueCards.map((card, index) => (
                        <div key={index} className={`${cardBg} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
                            {/* Icon container uses dark surface, icon uses violet accent in dark mode */}
                            <div className={`mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center ${card.bg}`}>
                                <card.Icon className={`w-7 h-7 ${card.iconColor}`} />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 text-center ${cardTitleColor}`}>{card.title}</h3>
                            <p className={`text-center ${bodyTextColor}`}>
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}