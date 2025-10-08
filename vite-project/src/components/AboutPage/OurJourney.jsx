import React from 'react';
import { Lightbulb, Rocket, Globe } from "lucide-react";
import { useTheme } from '../../context/ThemeContext'; // Import useTheme

export default function OurJourney({ isVisible }) {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#2a2a30]",     // Main dark background
        textPrimary: "text-white",      // Headings
        textSecondary: "text-gray-400", // Body text
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for icons/accents
        subtleSurface: "bg-[#293e58]", // Subtle dark bg for icon container
    };

    // Dynamic Classes (Updated for Violet Theme)
    const sectionBgClass = isDarkMode 
        ? PALETTE.background
        : 'bg-white';

    const headingTextColor = isDarkMode 
        ? PALETTE.textPrimary 
        : 'text-gray-900';

    const subHeadingTextColor = isDarkMode
        ? PALETTE.textPrimary // Use primary text for the bold title
        : 'text-gray-900';

    const bodyTextColor = isDarkMode 
        ? PALETTE.textSecondary 
        : 'text-gray-600'; 
    
    // Unified Icon Styles for Dark Mode
    const darkIconBg = PALETTE.subtleSurface;
    const darkIconColor = PALETTE.accentViolet; // All icons are VIOLET in dark mode

    // Icon/Accent Colors (Retained original light mode colors, unified dark mode colors)
    const iconStyles = [
        { Icon: Lightbulb, iconColor: isDarkMode ? darkIconColor : 'text-[#4785ff]', bg: isDarkMode ? darkIconBg : 'bg-[#e6f0ff]' }, 
        { Icon: Rocket, iconColor: isDarkMode ? darkIconColor : 'text-[#40c057]', bg: isDarkMode ? darkIconBg : 'bg-[#e6ffee]' }, 
        { Icon: Globe, iconColor: isDarkMode ? darkIconColor : 'text-[#9775fa]', bg: isDarkMode ? darkIconBg : 'bg-[#f0e6ff]' },
    ];

    const journeyItems = [
        { year: '2019', title: 'Foundation', description: 'Founded by a team of medical professionals and AI researchers at MRDL, with the vision to bridge the gap between cutting-edge AI technology and practical healthcare applications.' },
        { year: '2021', title: 'First Product', description: 'Launched Dx2D, our first AI-powered diagnostic tool for 2D medical imaging, achieving breakthrough accuracy rates in radiology departments across major hospitals.' },
        { year: '2023', title: 'Global Expansion', description: 'Expanded internationally with our complete AI healthcare suite, partnering with healthcare systems across North America, Europe, and Asia to improve patient outcomes globally.' },
    ];


    return (
        <section 
            id="journey-section"
            className={`py-20 px-4 md:px-8 transition-colors duration-300 ${sectionBgClass}`}
        >
            <div 
                className={`max-w-6xl mx-auto transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${headingTextColor}`}>Our Journey</h2>
                    <p className={`text-lg ${bodyTextColor}`}>
                        From research lab to global healthcare transformation
                    </p>
                </div>
                
                <div className="space-y-12 md:space-y-16">
                    {journeyItems.map((item, index) => {
                        const { Icon, iconColor, bg } = iconStyles[index];
                        
                        return (
                            <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                                {/* Icon / Timeline Point */}
                                <div className="md:w-1/6 flex justify-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bg}`}>
                                        <Icon className={`w-7 h-7 ${iconColor}`} />
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="md:w-5/6">
                                    <h3 className={`text-xl font-bold mb-3 ${subHeadingTextColor}`}>
                                        {item.year} - {item.title}
                                    </h3>
                                    <p className={`${bodyTextColor}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}