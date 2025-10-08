import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Import the useTheme hook

// Placeholder for an icon component (Kept as provided)
const Icon = ({ path, className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
    </svg>
);

export default function Revolutionizing() {
    // 1. Use the theme hook
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#121212]",
        surface: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accent: "bg-[#8b5cf6]",      // violet-500 for main blocks
        accentText: "text-[#8b5cf6]", // violet-500 for text
        accentDark: "bg-[#5b21b6]",   // violet-800 for deeper contrast
    };


    // Define core dynamic classes
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-white';
    
    // Use the accent color for the tag text, and a dark surface for the tag background
    const tagBgClass = isDarkMode 
        ? `${PALETTE.surface} ${PALETTE.accentText}` 
        : 'bg-gray-100 text-gray-700';

    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const featureHeadingColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    
    // Transparent Overlay on Image (Using dark surface with transparency)
    const overlayBgClass = isDarkMode 
        ? `${PALETTE.surface}/80 backdrop-blur-sm` 
        : 'bg-white/70 backdrop-blur-sm'; 
    
    // Small FDA Approved tag (Using dark surface with primary text color)
    const fdaTagBgClass = isDarkMode 
        ? `${PALETTE.surface} ${PALETTE.textPrimary} shadow-xl` 
        : 'bg-white text-gray-700 shadow-lg';
    
    // FDA Icon background uses a deeper violet for contrast
    const fdaIconBgClass = isDarkMode 
        ? `${PALETTE.accentDark} text-white` 
        : 'bg-blue-100 text-blue-600';

    // The feature icon container class, now uniformly violet in dark mode
    const featureIconClass = isDarkMode 
        ? `flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg ${PALETTE.accent} text-white`
        : `flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg`; // Original colors remain for light mode


    return (
        // Apply dynamic background class to the section
        <section className={`py-20 lg:py-28 ${sectionBgClass} transition-colors duration-300`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        {/* Tag */}
                        <div className={`inline-block text-sm font-semibold py-1 px-3 rounded-full mb-4 ${tagBgClass} transition-colors duration-300`}>
                            <span className={isDarkMode ? PALETTE.accentText : 'text-gray-500'}>○</span> About AI Care
                        </div>
                        
                        {/* Main Heading */}
                        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${headingTextColor} transition-colors duration-300`}>
                            Revolutionizing Healthcare with AI
                        </h2>
                        
                        {/* Body Text */}
                        <p className={`mt-4 text-lg ${bodyTextColor} transition-colors duration-300`}>
                            At AI Care, we're pioneering the future of healthcare through cutting-edge artificial intelligence. Our mission is to make world-class medical expertise accessible to everyone, everywhere.
                        </p>
                        
                        {/* Feature List */}
                        <dl className="mt-10 space-y-10">
                            {/* Feature 1: Advanced AI Diagnostics */}
                            <div className="flex">
                                <div 
                                    className={isDarkMode 
                                        ? featureIconClass 
                                        : 'flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500 text-white'}
                                >
                                    <Icon path="M19.36 10.36A10.001 10.001 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.89-.53-3.64-1.45-5.14l-1.55 1.55c.62 1.05.99 2.27.99 3.59 0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.33 0 2.55.37 3.59.99l1.55-1.55A9.914 9.914 0 0012 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8c0-1.63-.48-3.14-1.3-4.4l-1.34 1.34z" className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className={`text-lg font-medium ${featureHeadingColor}`}>Advanced AI Diagnostics</h4>
                                    <p className={`mt-1 ${bodyTextColor}`}>Our AI models are trained on millions of medical cases, providing accurate diagnoses in seconds.</p>
                                </div>
                            </div>
                            {/* Feature 2: HIPAA Compliant */}
                            <div className="flex">
                                <div 
                                    className={isDarkMode 
                                        ? featureIconClass 
                                        : 'flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-green-500 text-white'}
                                >
                                    <Icon path="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className={`text-lg font-medium ${featureHeadingColor}`}>HIPAA Compliant</h4>
                                    <p className={`mt-1 ${bodyTextColor}`}>Your data is protected with enterprise-grade security and full HIPAA compliance.</p>
                                </div>
                            </div>
                            {/* Feature 3: Expert Medical Team */}
                            <div className="flex">
                                <div 
                                    className={isDarkMode 
                                        ? featureIconClass 
                                        : 'flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-purple-500 text-white'}
                                >
                                    <Icon path="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className={`text-lg font-medium ${featureHeadingColor}`}>Expert Medical Team</h4>
                                    <p className={`mt-1 ${bodyTextColor}`}>Backed by leading physicians and researchers from top medical institutions worldwide.</p>
                                </div>
                            </div>
                        </dl>
                    </div>
                    
                    {/* Image Side */}
                    <div className="relative mt-10 lg:mt-0">
                        <img className="rounded-2xl shadow-xl w-full" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Doctor working with AI" />
                        
                        {/* FDA Approved Tag */}
                        <div className={`absolute -top-4 -left-4 p-3 rounded-lg flex items-center space-x-2 ${fdaTagBgClass} transition-colors duration-300`}>
                            <div className={`w-8 h-8 flex items-center justify-center rounded-md font-bold ${fdaIconBgClass} transition-colors duration-300`}>FDA</div>
                            <span className="text-sm font-semibold">Approved</span>
                        </div>
                        
                        {/* Stats Overlay */}
                        <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-4 w-full p-4">
                            {[
                                // Updated dark mode classes for stat values to use violet instead of blue/green/purple
                                { value: "99.9%", label: "Diagnostic Accuracy", color: isDarkMode ? PALETTE.accentText : "text-blue-600" },
                                { value: "50K+", label: "Patients Served", color: isDarkMode ? PALETTE.accentText : "text-green-600" },
                                { value: "24/7", label: "Support", color: isDarkMode ? PALETTE.accentText : "text-purple-600" },
                                { value: "15+", label: "Countries", color: isDarkMode ? PALETTE.accentText : "text-orange-600" },
                            ].map((stat, index) => (
                                <div key={index} className={`${overlayBgClass} p-4 rounded-lg text-center transition-colors duration-300`}>
                                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                    <p className={`text-sm ${bodyTextColor} transition-colors duration-300`}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}