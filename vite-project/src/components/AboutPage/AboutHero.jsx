import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Ensure this path is correct

export default function AboutHero() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#121212]",     // Main dark background used in the last CTA
        textPrimary: "text-white",       // White text for headings
        textSecondary: "text-gray-300",  // Lighter gray for body text
        accentText: "text-[#8B5CF6]",    // Violet-500 accent color
    };

    // Dynamic Classes (Updated for Violet Theme)
    const sectionBgClass = isDarkMode 
        ? PALETTE.background
        : 'bg-gradient-to-b from-[#f0f4f9] to-[#ffffff]'; 

    const headingTextColor = isDarkMode 
        ? PALETTE.textPrimary 
        : 'text-gray-900';

    const bodyTextColor = isDarkMode 
        ? PALETTE.textSecondary 
        : 'text-gray-600'; 
    
    // The accent text class uses the solid violet color
    const accentTextColor = isDarkMode 
        ? PALETTE.accentText 
        : 'text-indigo-600'; // Using a darker indigo for light mode if gradient is removed

    return (
        <section className={`py-20 px-4 transition-colors duration-300 ${sectionBgClass}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${headingTextColor}`}>
                    About{" "}
                    {/* Replaced gradient with solid violet accent color */}
                    <span className={accentTextColor}>
                        AI Care
                    </span>
                </h1>
                <p
                    className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${bodyTextColor}`}
                >
                    Revolutionizing healthcare through **artificial intelligence**, making medical diagnosis and treatment
                    more accurate, accessible, and efficient for healthcare providers worldwide.
                </p>
            </div>
        </section>
    );
}