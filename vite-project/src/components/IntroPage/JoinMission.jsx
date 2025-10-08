import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Import the useTheme hook

export default function JoinMission() {
    // 1. Use the theme hook
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accentBg: "bg-[#8b5cf6]",      // violet-500
        accentHover: "hover:bg-[#7c3aed]", // violet-600
    };

    // Define dynamic classes
    const outerBgClass = isDarkMode ? "bg-[#121212]" : "bg-white";
    const sectionBgClass = isDarkMode ? PALETTE.background : "bg-gray-100/80";
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : "text-gray-900";
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : "text-gray-600";
    
    // Button classes
    const buttonClass = isDarkMode 
        ? `${PALETTE.accentBg} text-white ${PALETTE.accentHover} shadow-lg` 
        : "bg-gray-900 text-white hover:bg-gray-800";

    return (
        // Outer background only appears dark in dark mode
        <div className={`${outerBgClass} px-48 py-20`}>
          <div className={`${outerBgClass} px-8 transition-colors duration-300`}>
              <section className={`py-16 ${sectionBgClass} transition-colors duration-300 rounded-xl`}>
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      
                      {/* Heading */}
                      <h2 className={`text-3xl font-bold ${headingTextColor} transition-colors duration-300`}>
                          Join Our Mission
                      </h2>
                      
                      {/* Body Text */}
                      <p className={`mt-3 text-lg ${bodyTextColor} transition-colors duration-300`}>
                          We're always looking for talented individuals who share our passion for revolutionizing healthcare through AI.
                      </p>
                      
                      {/* Call to Action Button */}
                      <div className="mt-8">
                          <button className={`font-semibold py-3 px-8 rounded-lg transition-colors duration-300 ${buttonClass}`}>
                              View Open Positions
                          </button>
                      </div>
                  </div>
              </section>
          </div>
        </div>
    );
}
