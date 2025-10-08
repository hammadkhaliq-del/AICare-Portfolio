import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from "../../context/ThemeContext";

// ====================================================================
// PALETTE DEFINITIONS (Centralized for Violet Theme)
// ====================================================================

const PALETTE = {
    background: "bg-[#2a2a30]",
    surface: "bg-[#1f1f23]",
    textPrimary: "text-[#f5f5f5]",
    textSecondary: "text-[#a1a1aa]",
    accentText: "text-[#8b5cf6]",      // violet-500 for text
    accentBgHover: "hover:text-[#8b5cf6]", // violet-500 hover
    subtleSurface: "bg-[#293e58]",     // A slightly lighter surface for social buttons/image border
};


// ====================================================================
// SOCIAL ICON COMPONENT (Theme Agnostic - uses parent color)
// ====================================================================

const SocialIcon = ({ type }) => {
    switch (type) {
        case 'github':
            return <Github size={18} />;
        case 'linkedin':
            return <Linkedin size={18} />;
        case 'twitter':
            return <Twitter size={18} />;
        default:
            return null;
    }
};

// ====================================================================
// TEAM MEMBER CARD COMPONENT (Dark Mode Ready)
// ====================================================================

const TeamMember = ({ img, name, role, bio, socials }) => {
    // Get Theme in the child component
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // Dynamic Classes (Updated for Violet Theme)
    // Card background: Use the dark surface
    const cardBgClass = isDarkMode ? PALETTE.surface : 'bg-white';
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bioTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';
    
    // Role text color: Use the violet accent
    const roleTextColor = isDarkMode ? PALETTE.accentText : 'text-blue-600';
    
    // Image border: Use the subtle surface for a slight contrast
    const imageBorderClass = isDarkMode ? `border-[${PALETTE.subtleSurface.replace('bg-', '')}]` : 'border-gray-100';

    // Social Button Classes
    // BG: Subtle surface. Hover BG: Main surface. Text: Primary Text. Hover Text: Violet accent.
    const socialButtonBg = isDarkMode 
        ? `${PALETTE.subtleSurface} hover:${PALETTE.surface}`
        : 'bg-gray-100 hover:bg-gray-200';
    const socialButtonText = isDarkMode 
        ? `${PALETTE.textPrimary} ${PALETTE.accentBgHover}` 
        : 'text-gray-600 hover:text-gray-900';

    return (
        <div className={`p-6 rounded-xl transition-all duration-300 ${cardBgClass} ${isDarkMode ? 'shadow-xl' : 'shadow-md'} hover:shadow-2xl`}>
            <div className="text-center">
                <div className="relative mx-auto">
                    {/* Image border adjusted for dark mode */}
                    <img className={`h-36 w-36 rounded-full object-cover mx-auto border-2 ${imageBorderClass}`} src={img} alt={name} />
                </div>
                {/* Text Colors adjusted for dark mode */}
                <h3 className={`mt-4 text-xl font-bold ${headingTextColor}`}>{name}</h3>
                <p className={`font-semibold ${roleTextColor}`}>{role}</p>
                <p className={`mt-3 ${bioTextColor}`}>{bio}</p>
                
                {/* Social Icons adjusted for dark mode */}
                <div className="mt-5 flex justify-center space-x-3">
                    {socials.map((social, i) => (
                        <a 
                            key={i} 
                            href={social.url} 
                            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${socialButtonBg} ${socialButtonText}`}
                            aria-label={social.type}
                        >
                            <SocialIcon type={social.type} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ====================================================================
// TEAM COMPONENT (Dark Mode Ready)
// ====================================================================

export default function Team() {
    // Get Theme in the parent component
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // **Using the centralized PALETTE values**
    const sectionBgClass = isDarkMode 
        ? PALETTE.background
        : 'bg-[#F8FAF4]'; 
        
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-600';

    const team = [
        {
            name: 'Dr. Sarah Chen',
            role: 'CEO & Co-Founder',
            bio: 'Former Stanford AI researcher with 15+ years in medical imaging and machine learning.',
            img: 'https://images.unsplash.com/photo-1573496359112-58846a7b2a3a?auto=format&fit=crop&q=80&w=200&h=200',
            socials: [
                { type: 'linkedin', url: '#' },
                { type: 'twitter', url: '#' },
                { type: 'github', url: '#' }
            ]
        },
        {
            name: 'Dr. Michael Rodriguez',
            role: 'CTO & Co-Founder',
            bio: 'AI systems architect with expertise in deep learning and healthcare data infrastructure.',
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
            socials: [
                { type: 'linkedin', url: '#' },
                { type: 'github', url: '#' }
            ]
        },
        {
            name: 'Dr. Aisha Patel',
            role: 'COO & Co-Founder',
            bio: 'Board-certified radiologist and AI ethics expert, ensuring clinical accuracy and safety.',
            img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
            socials: [
                { type: 'linkedin', url: '#' },
                { type: 'twitter', url: '#' }
            ]
        }
    ];

    return (
        <section 
            // Apply centralized background class
            className={`py-20 transition-colors duration-300 ${sectionBgClass}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading */}
                <h2 className={`text-3xl md:text-4xl font-bold ${headingTextColor} transition-colors duration-300`}>Meet Our Team</h2>
                {/* Subtext */}
                <p className={`mt-4 text-lg max-w-2xl mx-auto ${bodyTextColor} transition-colors duration-300`}>
                    World-class experts in AI, healthcare, and technology working together to revolutionize medical care.
                </p>
                {/* Team Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {team.map((member, i) => <TeamMember key={i} {...member} />)}
                </div>
            </div>
        </section>
    );
}