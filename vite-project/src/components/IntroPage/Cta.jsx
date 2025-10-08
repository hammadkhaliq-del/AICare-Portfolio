import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Import the useTheme hook

function Cta() {
    // 1. Use the theme hook
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 NEW DARK MODE PALETTE MAPPING
    const PALETTE = {
        background: "bg-[#121212]",
        surface: "bg-[#18181b]",
        card: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accent: "text-[#8b5cf6]", // violet-500
        buttonBg: "bg-[#8b5cf6]",
        buttonHover: "hover:bg-[#7c3aed]", // violet-600
    };

    // Define core dynamic classes
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-white';
    const cardBgClass = isDarkMode ? PALETTE.card : 'bg-gray-100/80';
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';

    // Button Classes
    // 1. Primary: Solid Violet Background
    const primaryButtonClass = isDarkMode 
        ? `${PALETTE.buttonBg} text-white ${PALETTE.buttonHover}`
        : 'bg-gray-900 text-white hover:bg-gray-800';
    
    // 2. Secondary: Transparent/Bordered Violet (Outlined)
    const secondaryButtonClass = isDarkMode 
        ? `bg-transparent ${PALETTE.accent} border-[#8b5cf6] hover:bg-[#8b5cf6]/10`
        : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-200';

    return (
        // Apply dynamic background to the outer section
        <section className={`py-20 ${sectionBgClass} transition-colors duration-300`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Apply dynamic background to the inner card */}
                <div className={`${cardBgClass} rounded-2xl p-8 md:p-16 text-center transition-colors duration-300`}>
                    
                    {/* Heading */}
                    <h2 className={`text-3xl md:text-4xl font-bold ${headingTextColor} transition-colors duration-300`}>
                        Ready to Transform Your Healthcare Practice?
                    </h2>
                    
                    {/* Body Text */}
                    <p className={`mt-4 text-lg ${bodyTextColor} max-w-2xl mx-auto transition-colors duration-300`}>
                        Join thousands of healthcare professionals who are already using AI Care to improve patient outcomes and streamline their workflows.
                    </p>
                    
                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        
                        {/* Primary Button (Start Free Trial) */}
                        <button className={`w-full sm:w-auto font-semibold py-3 px-8 rounded-lg transition-colors cursor-pointer ${primaryButtonClass}`}>
                            Start Free Trial
                        </button>
                        
                        {/* Secondary Button (Schedule Demo) */}
                        <button className={`w-full sm:w-auto font-semibold py-3 px-8 rounded-lg transition-colors border-2 ${secondaryButtonClass} cursor-pointer`}>
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;