// Contact.jsx (FIXED for Dark Mode)

import React from "react";
// Import the hook to access the current theme
import { useTheme } from "../context/ThemeContext"; 
import PageHeader from "../components/ContactPage/PageHeader";
import ContactSection from "../components/ContactPage/ContactSection";
import OfficeLocations from "../components/ContactPage/OfficeLocations";
import ProductFAQSection from "../components/ContactPage/ProductFAQSection";


function Contact() {
  // Use the theme context to get the current theme state
  const { theme } = useTheme(); 
  
  // Conditionally set the background class
  const backgroundClass = theme === 'dark' ? 'bg-[#121212]' : 'bg-white';
  
  return (
    // Applied the dynamic background class
    <div className={backgroundClass}> 
      {/* The top-level container is now full width and changes color with the theme.
        We add vertical padding on children, but no horizontal padding on this container.
      */}
      
      {/* PageHeader and OfficeLocations still need a centered container for good readability. */}
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <PageHeader />
      </div>

      {/* ContactSection will now naturally stretch, applying its own padding and content centering. */}
      <ContactSection />
      
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <OfficeLocations />
      </div>

      {/* ProductFAQSection already has internal background and padding logic and will stretch nicely */}
      <ProductFAQSection />
    </div>
  );
}

export default Contact;