import React, { useState } from 'react';
import { useTheme } from "../../context/ThemeContext";

// ====================================================================
// PALETTE DEFINITIONS (Centralized for Violet Theme)
// ====================================================================

const PALETTE = {
    background: "bg-[#2a2a30]",
    surface: "bg-[#1f1f23]",
    textPrimary: "text-[#f5f5f5]",
    textSecondary: "text-[#a1a1aa]",
    accent: "text-[#8b5cf6]",      // violet-500 for text/borders
    accentBg: "bg-[#8b5cf6]",      // violet-500 for solid fills
    accentHover: "hover:text-[#7c3aed]", // violet-600
    subtleSurface: "bg-[#293e58]", // A slightly lighter surface for contrast (custom dark blue, like the original card)
};

// ====================================================================
// SOLUTION CARD COMPONENT
// ====================================================================

const SolutionCard = ({ 
    icon, 
    title, 
    description, 
    features, 
    tag,
    linkUrl = "/products" // UPDATED: Default link to /products
}) => {
    // 1. Get Theme
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const [isHovered, setIsHovered] = useState(false);

    // Dynamic Classes (Updated for Violet Theme)
    const cardBgClass = isDarkMode ? PALETTE.surface : 'bg-white'; 
    // UPDATED: Removed accent from default border class
    const cardBorderClass = isDarkMode ? 'border-transparent' : 'border-gray-200/60'; 
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    
    // Icon Container uses the slightly brighter dark blue surface
    const iconContainerBg = isDarkMode ? `${PALETTE.subtleSurface} ${PALETTE.accent}` : 'bg-gray-100 text-gray-900';

    // Tag styles
    const tagClasses = {
        'Popular': isDarkMode ? 'bg-orange-800/50 text-orange-300' : 'bg-orange-100 text-orange-800',
        'New': isDarkMode ? 'bg-green-800/50 text-green-300' : 'bg-green-100 text-green-800',
    };
    const currentTagClass = tag ? tagClasses[tag] || tagClasses['Popular'] : '';

    // CTA Button
    const buttonClasses = isDarkMode 
        ? `${PALETTE.subtleSurface} text-white ${PALETTE.accentHover}` 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-blue-600';
    
    // Violet checkmark for dark mode
    const checkmarkColor = isDarkMode ? PALETTE.accent : 'text-orange-500'; 


    return (
        <div 
            className={`
                rounded-xl transition-all duration-300 h-full
                border ${cardBorderClass} ${cardBgClass}
                ${isHovered 
                    // UPDATED: Simplified hover to just lift and default shadow
                    ? `shadow-xl transform -translate-y-1` 
                    : 'shadow-md'}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-6 sm:p-8 flex flex-col h-full">
                {/* Card Header with Icon and optional Tag */}
                <div className="flex justify-between items-start mb-4">
                    {/* Icon Container */}
                    <div className={`w-14 h-14 flex items-center justify-center rounded-lg text-2xl shadow-sm ${iconContainerBg} transition-colors duration-300`}>
                        {icon}
                    </div>
                    
                    {/* Tag */}
                    {tag && (
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${currentTagClass} transition-colors duration-300`}>
                            {tag}
                        </span>
                    )}
                </div>
                
                {/* Card Content */}
                <h3 className={`text-xl font-bold mb-2 ${headingTextColor} transition-colors duration-300`}>
                    {title}
                </h3>
                
                <p className={`mb-4 flex-grow ${bodyTextColor} transition-colors duration-300`}>
                    {description}
                </p>
                
                {/* Features List */}
                <ul className={`space-y-2 mb-5 ${bodyTextColor} transition-colors duration-300`}>
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                            {/* Checkmark Icon - Updated color */}
                            <span className={`${checkmarkColor} text-sm mr-2 mt-1 transition-colors duration-300`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </span> 
                            <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Call to Action Button */}
                <a 
                    href={linkUrl} // Uses the updated linkUrl
                    className={`mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium
                        transition-all duration-200 text-sm sm:text-base ${buttonClasses}`}
                >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};


// ====================================================================
// SOLUTIONS COMPONENT 
// ====================================================================

export default function Solutions() {
    // 2. Get Theme
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    
    // **Using the centralized PALETTE values**
    const sectionBgClass = isDarkMode 
        ? PALETTE.background
        : 'bg-[#F8FAF4]';
        
    const tagBgClass = isDarkMode 
        ? `${PALETTE.surface} ${PALETTE.accent}` 
        : 'bg-blue-100 text-blue-700';
        
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    const highlightColor = isDarkMode ? PALETTE.accent : 'text-blue-600';


    const solutions = [
        { 
            title: 'Dx2D', 
            description: 'Advanced 2D medical imaging analysis with AI-powered diagnostic assistance for X-rays, CT scans, and MRI images.', 
            features: ['Real-time Analysis', 'Multi-format Support', '99.9% Accuracy', 'DICOM Compatible'], 
            icon: '🖼️',
            tag: 'Popular'
        },
        { 
            title: 'Dx3D', 
            description: '3D volumetric imaging analysis with advanced reconstruction and AI-driven pathology detection for complex medical cases.', 
            features: ['3D Reconstruction', 'Volume Analysis', 'Cross-sectional Views', 'Advanced Rendering'], 
            icon: '🧊'
        },
        { 
            title: 'TSS', 
            description: 'Treatment Support System that provides personalized treatment recommendations based on patient data and medical history.', 
            features: ['Personalized Plans', 'Evidence-based', 'Drug Interactions', 'Outcome Tracking'], 
            icon: '💊',
            tag: 'New'
        },
        { 
            title: 'MedScribe', 
            description: 'AI-powered medical transcription and documentation system that converts voice notes into structured medical records.', 
            features: ['Voice Recognition', 'Medical Terminology', 'Auto-formatting', 'HIPAA Secure'], 
            icon: '📝'
        },
        { 
            title: 'Rx Scan', 
            description: 'Prescription scanning and verification system with drug interaction checking and dosage optimization.', 
            features: ['OCR Technology', 'Drug Database', 'Interaction Alerts', 'Dosage Verification'], 
            icon: '🧾'
        },
        { 
            title: 'SearchDoc', 
            description: 'Intelligent medical document search and retrieval system with natural language processing capabilities.', 
            features: ['Natural Language', 'Smart Search', 'Document Analysis', 'Quick Retrieval'], 
            icon: '🔍'
        },
    ];

    return (
        <section 
            className={`py-20 ${sectionBgClass} transition-colors duration-300`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    
                    {/* Section Tag */}
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${tagBgClass} transition-colors duration-300`}>
                        <span className={highlightColor}>○</span> Our Solutions
                    </span>
                    
                    {/* Heading */}
                    <h2 className={`text-3xl md:text-4xl xl:text-5xl font-bold mb-6 ${headingTextColor} transition-colors duration-300`}>
                        AI-Powered Healthcare <span className={highlightColor}>Solutions</span>
                    </h2>
                    
                    {/* Body Text */}
                    <p className={`text-lg max-w-3xl mx-auto ${bodyTextColor} transition-colors duration-300`}>
                        Discover our comprehensive suite of AI-driven healthcare tools designed to enhance patient care, 
                        improve diagnostic accuracy, and streamline medical workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={index} {...solution} /> 
                    ))}
                </div>
            </div>
        </section>
    );
}