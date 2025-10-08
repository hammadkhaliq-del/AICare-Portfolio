import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Icon = ({ path, className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
);

// Custom ScrollToTop component to handle scrolling to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function Header() {
  // Use the theme context
  const { theme, toggleTheme } = useTheme();
  
  // Get current location to determine active link
  const location = useLocation();
  
  // Check if dark mode is active
  const isDarkMode = theme === 'dark';

  // Function to determine if a link is active
  const isActive = (path) => {
    // For home page
    if (path === '/' && location.pathname === '/') return true;
    // For other pages, check if current path starts with this path 
    // (to handle subpages like /products/something)
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Active and inactive link styles
  const activeLinkClass = isDarkMode 
    ? 'text-white border-white' 
    : 'text-gray-900 border-gray-900';
  
  const inactiveLinkClass = isDarkMode 
    ? 'text-gray-300 hover:text-white hover:border-white border-transparent' 
    : 'text-gray-600 hover:text-gray-900 hover:border-gray-900 border-transparent';

  // Update dark mode background to #121212 per the user's request
  const headerBgClass = isDarkMode 
    ? 'bg-[#121212]/90 border-[#2a2a2a]/50' 
    : 'bg-white/30 border-white/20';

  return (
    <>
      {/* Add ScrollToTop component to handle scrolling */}
      <ScrollToTop />
      
      <header className={`${headerBgClass} backdrop-blur h-22 sticky top-0 z-50 border-b transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <div className={`${isDarkMode ? 'bg-white-600' : 'bg-gray-900'} p-2 rounded-lg transition-colors duration-300`}>
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
            
            <nav className="text-lg pt-10 pb-7 hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`font-medium border-b-2 transition-colors duration-300 ${isActive('/') ? activeLinkClass : inactiveLinkClass}`}
              >
                Intro
              </Link>
              <Link 
                to="/about" 
                className={`font-medium border-b-2 transition-colors duration-300 ${isActive('/about') ? activeLinkClass : inactiveLinkClass}`}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className={`font-medium border-b-2 transition-colors duration-300 ${isActive('/products') ? activeLinkClass : inactiveLinkClass}`}
              >
                Products
              </Link>
              <Link 
                to="/team" 
                className={`font-medium border-b-2 transition-colors duration-300 ${isActive('/team') ? activeLinkClass : inactiveLinkClass}`}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium border-b-2 transition-colors duration-300 ${isActive('/contact') ? activeLinkClass : inactiveLinkClass}`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center">
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}