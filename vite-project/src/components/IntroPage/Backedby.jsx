import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Import the useTheme hook

function Backedby() {
    // 1. Use the theme hook to get the current state
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 NEW DARK MODE PALETTE MAPPING
    const PALETTE = {
        background: "bg-[#2a2a30]",
        card: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        // Note: Using Tailwind's violet-400/500 classes for stat/tag colors where possible
    };

    // 1. Section Background 
    // Applying background class directly now that it's a Tailwind utility
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-[#F8FAFC]';
    
    // 2. Text Colors
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const footerTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-500';
    
    // 3. Card Styling (Dark Mode: #1f1f23)
    const cardBgClass = isDarkMode ? `${PALETTE.card} shadow-xl` : 'bg-white shadow-md'; 
    // Subtle, lighter gray border for the dark card
    const cardBorderClass = isDarkMode ? 'border-[#333]' : 'border-gray-200/60'; 

    return (
        // Apply dynamic background class to the section
        <section 
            className={`py-20 ${sectionBgClass} transition-colors duration-300`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Trusted Partnership Tag: Using the Violet accent color (violet-500/300) */}
                <div className="inline-block bg-violet-100/50 text-violet-700 text-sm font-semibold py-1 px-3 rounded-full mb-4 dark:bg-violet-900/50 dark:text-violet-300 transition-colors duration-300">
                    ○ Trusted Partnership
                </div>
                
                {/* Main Heading */}
                <h2 className={`text-3xl md:text-4xl font-bold ${headingTextColor} transition-colors duration-300`}>
                    Backed by Leading AI Institutions
                </h2>
                
                {/* Body Paragraph */}
                <p className={`mt-4 text-lg ${bodyTextColor} max-w-3xl mx-auto transition-colors duration-300`}>
                    Our cutting-edge AI technology is supported by <span className="font-bold">MIDL</span> — National Center of Artificial Intelligence (<span className="font-bold">NCAI</span>), ensuring world-class research and development standards.
                </p>
                
                {/* Partnership Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    
                    {/* MIDL Card */}
                    <div className={`p-8 rounded-2xl ${cardBgClass} border ${cardBorderClass} transition-colors duration-300`}>
                        {/* Improved MIDL Icon - Building/Charts */}
                        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-500 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 10.5V17h2v-6.5H7z" />
                                <path d="M11 7v10h2V7h-2z" />
                                <path d="M15 13v4h2v-4h-2z" />
                                <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" />
                            </svg>
                        </div>
                        <h3 className={`text-2xl font-bold ${headingTextColor}`}>MIDL</h3>
                        <p className={`${bodyTextColor} mt-1`}>Medical Intelligence Development Lab</p>
                        {/* Status Tag: Green remains for success/active status */}
                        <div className="mt-4 inline-block bg-green-100 text-green-700 text-xs font-semibold py-1 px-3 rounded-full dark:bg-green-900/50 dark:text-green-300 transition-colors duration-300">
                            ✓ Active Partnership
                        </div>
                    </div>
                    
                    {/* NCAI Card */}
                    <div className={`p-8 rounded-2xl ${cardBgClass} border ${cardBorderClass} transition-colors duration-300`}>
                        {/* Improved NCAI Icon - Brain */}
                        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-purple-600 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2c-1.3 0-2.4 1.1-2.4 2.4 0 .8.4 1.5 1 2-1.1.3-2 1.1-2.4 2.2-.3-.1-.5-.1-.8-.1-1.3 0-2.4 1.1-2.4 2.4 0 1 .7 1.9 1.6 2.2-.1.3-.1.5-.1.8 0 1.3 1.1 2.4 2.4 2.4.2 0 .4 0 .6-.1.4.8 1.1 1.3 2 1.3.8 0 1.5-.4 1.9-1 .4.6 1.2 1 2.1 1 1.1 0 2-.7 2.3-1.7h.1c1.3 0 2.4-1.1 2.4-2.4 0-.5-.1-.9-.4-1.3.5-.4.7-1 .7-1.7 0-1.3-1.1-2.4-2.4-2.4-.2 0-.5 0-.7.1-.3-.7-1-1.2-1.8-1.2-.3 0-.5.1-.8.2-.2-.4-.3-.9-.3-1.3 0-1.3-1.1-2.4-2.4-2.4zM7.4 14.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm1.5-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm3.5 5.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm.5-9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm3.5 5.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
                            </svg>
                        </div>
                        <h3 className={`text-2xl font-bold ${headingTextColor}`}>NCAI</h3>
                        <p className={`${bodyTextColor} mt-1`}>National Center of Artificial Intelligence</p>
                        {/* Status Tag: Green remains for success/active status */}
                        <div className="mt-4 inline-block bg-green-100 text-green-700 text-xs font-semibold py-1 px-3 rounded-full dark:bg-green-900/50 dark:text-green-300 transition-colors duration-300">
                            ✓ Research Partner
                        </div>
                    </div>
                </div>
                
                {/* Stats Section: Using lighter shades of the original colors for better dark mode visibility */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        {/* Improved Funding Icon - Lightbulb/Idea */}
                        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-500 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm-1.5 14.5h3v-1h-3v1zm1.5-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                <path d="M9 20h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-1z" />
                            </svg>
                        </div>
                        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">$50M+</p>
                        <p className={`${bodyTextColor} mt-1`}>Research Funding</p>
                    </div>
                    <div className="text-center">
                        {/* Improved Researchers Icon - Team/People */}
                        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-purple-600 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                        </div>
                        <p className="text-4xl font-bold text-purple-600 dark:text-violet-400 transition-colors duration-300">200+</p>
                        <p className={`${bodyTextColor} mt-1`}>AI Researchers</p>
                    </div>
                    <div className="text-center">
                        {/* Improved Countries Icon - Globe */}
                        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-green-600 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <p className="text-4xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">15+</p>
                        <p className={`${bodyTextColor} mt-1`}>Countries</p>
                    </div>
                </div>
                
                {/* Compliance Footer */}
                <div className={`mt-12 flex justify-center items-center space-x-6 text-sm font-medium ${footerTextColor} transition-colors duration-300`}>
                    <span>✓ ISO 27001 Certified</span>
                    <span>✓ FDA Approved</span>
                    <span>✓ HIPAA Compliant</span>
                </div>
            </div>
        </section>
    );
}

export default Backedby;