import React from 'react';
import { Building2, Users, Shield, Zap } from "lucide-react";
import { useTheme } from '../../context/ThemeContext'; // Import useTheme

export default function OurImpact({ isVisible }) {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#121212]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Card background
        textPrimary: "text-white",      // Headings and stat values
        textSecondary: "text-gray-400", // Body and stat labels
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for icons/accents
        subtleSurface: "bg-[#293e58]", // Subtle dark bg for icon container
    };

    // Dynamic Classes (Updated for Violet Theme)
    const mainBg = isDarkMode 
        ? PALETTE.background
        : 'bg-[#f8fafc]'; 

    const cardBg = isDarkMode 
        ? PALETTE.surface 
        : 'bg-white'; 

    const headingTextColor = isDarkMode 
        ? PALETTE.textPrimary 
        : 'text-gray-900';

    const bodyTextColor = isDarkMode 
        ? PALETTE.textSecondary
        : 'text-gray-600';

    const statValueColor = isDarkMode 
        ? PALETTE.textPrimary
        : 'text-gray-900';

    const statLabelColor = isDarkMode 
        ? PALETTE.textSecondary
        : 'text-gray-600';
    
    // Unified Icon Styles for Dark Mode
    const darkIconBg = PALETTE.subtleSurface;
    const darkIconColor = PALETTE.accentViolet; // All icons are VIOLET in dark mode
    
    // Icon/Accent Colors (Retained original light mode colors)
    const iconStyles = [
        { bg: isDarkMode ? darkIconBg : 'bg-[#e6f0ff]', icon: isDarkMode ? darkIconColor : 'text-[#4785ff]' }, // Blue
        { bg: isDarkMode ? darkIconBg : 'bg-[#e6ffee]', icon: isDarkMode ? darkIconColor : 'text-[#40c057]' }, // Green
        { bg: isDarkMode ? darkIconBg : 'bg-[#f0e6ff]', icon: isDarkMode ? darkIconColor : 'text-[#9775fa]' }, // Purple
        { bg: isDarkMode ? darkIconBg : 'bg-[#fff4e6]', icon: isDarkMode ? darkIconColor : 'text-[#fd7e14]' }, // Orange
    ];
    
    const stats = [
        { Icon: Building2, value: '500+', label: 'Healthcare Facilities', index: 0 },
        { Icon: Users, value: '2M+', label: 'Patients Served', index: 1 },
        { Icon: Shield, value: '98.7%', label: 'Diagnostic Accuracy', index: 2 },
        { Icon: Zap, value: '75%', label: 'Faster Diagnosis', index: 3 },
    ];


    return (
        <section 
            id="impact-section"
            className={`py-20 px-4 md:px-8 transition-colors duration-300 ${mainBg}`}
        >
            <div 
                className={`max-w-6xl mx-auto transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingTextColor}`}>Our Impact</h2>
                    <p className={`text-lg ${bodyTextColor}`}>
                        Transforming healthcare one diagnosis at a time
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const { Icon, value, label } = stat;
                        const colors = iconStyles[index];

                        return (
                            <div 
                                key={index}
                                className={`${cardBg} rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300`}
                            >
                                {/* Icon Container: Dark background, Violet icon in dark mode */}
                                <div className={`mx-auto mb-5 w-14 h-14 rounded-full flex items-center justify-center ${colors.bg}`}>
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                                </div>
                                <div className={`text-3xl font-bold mb-2 ${statValueColor}`}>{value}</div>
                                <div className={`text-sm ${statLabelColor}`}>{label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}