import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/**
 * Helper component for rendering SVG icons consistently.
 */
const Icon = ({ path, className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
    </svg>
);

/**
 * Custom hook to scroll the window to the top on every route change.
 */
function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        // Ensure scrolling happens when the pathname changes (new page navigation)
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

/**
 * Main application Header component, including navigation, logo, and theme toggle.
 */
export default function Header() {
    // State to manage the open/closed status of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Hooks for theme and location
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const isDarkMode = theme === 'dark';

    // Handler to close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Handler to close the menu on route change (in case of internal changes not captured by Link)
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Function to determine if a link is active
    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    // Dynamic Tailwind classes based on theme/activity
    const activeLinkClass = isDarkMode 
        ? 'text-white border-white' 
        : 'text-gray-900 border-gray-900';
    
    const inactiveLinkClass = isDarkMode 
        ? 'text-gray-300 hover:text-white hover:border-white border-transparent' 
        : 'text-gray-600 hover:text-gray-900 hover:border-gray-900 border-transparent';

    // Header styling: semi-transparent background with blur and sticky positioning
    const headerBgClass = isDarkMode 
        ? 'bg-[#121212]/90 border-[#2a2a2a]/50' 
        : 'bg-white/30 border-white/20';
    
    // Mobile menu background styling (full opacity for readability)
    const mobileMenuBgClass = isDarkMode ? 'bg-[#121212]' : 'bg-white';

    return (
        <>
            <ScrollToTop />
            
            <header className={`${headerBgClass} backdrop-blur sticky top-0 z-50 border-b transition-colors duration-300`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Header Bar: Height set to h-16, contents vertically centered */}
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Logo and App Name */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 flex items-center space-x-2">
                                <div className={`${isDarkMode ? 'bg-white-600' : 'bg-gray-900'} p-2 rounded-lg transition-colors duration-300`}>
                                    {/* Icon path for 'AI Care' logo */}
                                    <Icon 
                                        path="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM12 18.27l-.6-.55c-3.15-2.88-5.4-5.07-5.4-7.22 0-1.87 1.25-3.12 3-3.12.87 0 1.76.38 2.3.93l.7.7.7-.7c.54-.55 1.43-.93 2.3-.93 1.75 0 3 1.25 3 3.12 0 2.15-2.25 4.34-5.4 7.22l-.6.55zM12 9.5l-3-3H6v2h2.5l1.5 1.5-1.5 1.5H6v2h4.5l3-3-3-3H18V9.5h-6z" 
                                        className="h-6 w-6 text-white" 
                                    />
                                </div>
                                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                                    AI Care
                                </span>
                            </div>
                        </div>
                        
                        {/* Desktop Navigation Links */}
                        {/* Hidden on mobile, flex on md/tablet+ */}
                        <nav className="text-lg hidden md:flex space-x-8">
                            {/* Navigation items array to avoid repetition */}
                            {[
                                { to: "/", label: "Intro" },
                                { to: "/about", label: "About" },
                                { to: "/products", label: "Products" },
                                { to: "/team", label: "Team" },
                                { to: "/contact", label: "Contact" },
                            ].map((item) => (
                                <Link 
                                    key={item.to}
                                    to={item.to} 
                                    className={`
                                        font-medium border-b-2 pb-1 
                                        transition-colors duration-300 
                                        ${isActive(item.to) ? activeLinkClass : inactiveLinkClass}
                                    `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                        
                        {/* Theme Toggle Button and Hamburger Menu Button container */}
                        <div className="flex items-center space-x-2">
                            {/* Theme Toggle */}
                            <button 
                                className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-300 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-300`}
                                onClick={toggleTheme}
                                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {isDarkMode ? (
                                    <Sun className="h-6 w-6" />
                                ) : (
                                    <Moon className="h-6 w-6" />
                                )}
                            </button>

                            {/* Hamburger Menu Toggle (Visible only on mobile) */}
                            <button
                                className={`md:hidden p-2 rounded-full ${isDarkMode ? 'text-white hover:bg-slate-800' : 'text-gray-900 hover:bg-gray-100'} transition-colors duration-300`}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                title={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {/* Dynamically positioned and styled for smooth vertical operation */}
                <div 
                    id="mobile-menu"
                    className={`
                        md:hidden absolute w-full left-0 transition-transform duration-300 ease-in-out
                        ${mobileMenuBgClass} shadow-xl border-t border-gray-200 dark:border-[#2a2a2a]
                        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'}
                    `}
                >
                    <nav className="flex flex-col p-4 space-y-2">
                        {[
                            { to: "/", label: "Intro" },
                            { to: "/about", label: "About" },
                            { to: "/products", label: "Products" },
                            { to: "/team", label: "Team" },
                            { to: "/contact", label: "Contact" },
                        ].map((item) => (
                            <Link 
                                key={item.to}
                                to={item.to} 
                                // Apply styles for the full-width mobile button look
                                className={`
                                    py-2 px-3 rounded-lg text-lg text-left font-semibold
                                    ${isActive(item.to) 
                                        ? 'bg-violet-600 text-white' // Active link background for mobile
                                        : (isDarkMode ? 'text-gray-300 hover:bg-slate-800' : 'text-gray-800 hover:bg-gray-100')
                                    }
                                    transition-colors duration-200
                                `}
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
