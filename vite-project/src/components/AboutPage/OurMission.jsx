import React from 'react';
import { Check } from "lucide-react";
import { useTheme } from '../../context/ThemeContext'; // Import useTheme
import aboutImage from "../../assets/abouthero.jpg";

export default function OurMission({ isVisible }) {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#2a2a30]",     // Main dark background
        surface: "bg-[#1f1f23]",        // Surface/Chip background
        textPrimary: "text-white",       // Headings
        textSecondary: "text-gray-400",  // Body text
        accentViolet: "text-[#8B5CF6]",  // Violet-500 for the accent heading and check icons
    };

    // Dynamic Classes (Updated for Violet Theme)
    const sectionBgClass = isDarkMode 
        ? PALETTE.background
        : 'bg-white';

    // Mission Heading uses the VIOLET accent color
    const subHeadingColor = isDarkMode 
        ? PALETTE.accentViolet
        : 'text-gray-900'; 

    const bodyTextColor = isDarkMode 
        ? PALETTE.textSecondary
        : 'text-gray-600'; 

    // Checkmark chip background uses the dark surface
    const checkmarkBgClass = isDarkMode 
        ? PALETTE.surface 
        : 'bg-[#f0f4f9]'; 

    const checkmarkTextColor = isDarkMode 
        ? PALETTE.textPrimary
        : 'text-gray-700';

    // Checkmark icon uses the VIOLET accent for consistency
    const checkmarkIconColor = isDarkMode 
        ? PALETTE.accentViolet
        : 'text-green-600'; // Keep green in light mode if desired


    return (
        <section 
            id="mission-section"
            className={`py-20 px-4 md:px-8 transition-colors duration-300 ${sectionBgClass}`}
        >
            <div 
                className={`max-w-6xl mx-auto transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        {/* Dynamic heading color applied */}
                        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${subHeadingColor}`}>
                            Our Mission
                        </h2>
                        {/* Dynamic body text color applied */}
                        <p
                            className={`text-lg leading-relaxed mb-4 ${bodyTextColor}`}
                        >
                            To democratize access to advanced medical AI technology, empowering healthcare professionals 
                            with intelligent tools that enhance diagnostic accuracy and improve patient outcomes.
                        </p>
                        <p
                            className={`text-lg leading-relaxed mb-8 ${bodyTextColor}`}
                        >
                            We believe that artificial intelligence should augment human expertise, not replace it, 
                            creating a collaborative environment where technology and medical professionals work together.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* Checkmark Chips with dynamic colors */}
                            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${checkmarkBgClass}`}>
                                <Check
                                    className={`w-5 h-5 ${checkmarkIconColor}`}
                                />
                                <span className={`text-sm font-medium ${checkmarkTextColor}`}>FDA Compliant</span>
                            </div>
                            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${checkmarkBgClass}`}>
                                <Check
                                    className={`w-5 h-5 ${checkmarkIconColor}`}
                                />
                                <span className={`text-sm font-medium ${checkmarkTextColor}`}>HIPAA Secure</span>
                            </div>
                            <div className={`flex items-center gap-2 rounded-lg px-4 py-2 ${checkmarkBgClass}`}>
                                <Check
                                    className={`w-5 h-5 ${checkmarkIconColor}`}
                                />
                                <span className={`text-sm font-medium ${checkmarkTextColor}`}>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Content */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={aboutImage}
                                alt="Modern medical facility"
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: "16/10" }}
                            />
                        </div>
                        {/* Accent Blob - Using the primary violet/purple colors for the blob */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-purple-800 opacity-10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}