// -----------------------------------------------------------
// Component 4: OfficeLocations.jsx (Integrates OfficeCard.jsx)
// -----------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
// IMPORTANT: You must create this context hook at the path below!
import { useTheme } from "../../context/ThemeContext"; 

// Sub-Component: OfficeCard.jsx logic
function OfficeCard({ office, index, themeClasses }) {
    return (
        <motion.div
            className={`${themeClasses.cardBg} ${themeClasses.cardBorder} rounded-xl ${themeClasses.cardShadow} p-6 w-80 transform transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
        >
            <h3 className={`text-xl font-bold ${themeClasses.titleColor}`}>{office.city}</h3>
            <p className={`text-base font-medium mt-1 ${themeClasses.typeColor}`}>{office.type}</p>
            <p className={`mt-4 text-sm ${themeClasses.bodyColor}`}>{office.addr}</p>
            <p className={`mt-1 text-sm font-mono ${themeClasses.bodyColor}`}>{office.phone}</p>
        </motion.div>
    );
}

// Main Component: OfficeLocations.jsx
function OfficeLocations() {
    // 1. Theme Hook and Palette
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const PALETTE = {
        surface: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accentText: "text-[#8b5cf6]", // violet-500
        border: "border-[#373740]",
        shadow: "shadow-xl shadow-black/30",
    };

    const themeClasses = {
        titleColor: isDarkMode ? PALETTE.textPrimary : "text-gray-900",
        bodyColor: isDarkMode ? PALETTE.textSecondary : "text-gray-600",
        typeColor: isDarkMode ? PALETTE.accentText : "text-blue-800",
        cardBg: isDarkMode ? PALETTE.surface : "bg-gray-50",
        cardBorder: isDarkMode ? PALETTE.border : "border-gray-200",
        cardShadow: isDarkMode ? PALETTE.shadow : "shadow-sm",
    };
    
    // Data Array
    const offices = [
        {
            id: "pakistan-hq",
            city: "Pakistan",
            type: "Main Headquarters",
            addr: "High End Computing Lab, Comsats University Islamabad, Islamabad",
            phone: "+1 (416) 123-4567"
        },
        // Add more offices here if needed:
        /*
        {
            id: "usa-branch",
            city: "California, USA",
            type: "R&D Office",
            addr: "100 AI Blvd, Silicon Valley, CA 94000",
            phone: "+1 (650) 987-6543"
        },
        */
    ];

    return (
        <section className="mt-20 mx-auto max-w-7xl px-6" aria-labelledby="office-locations-heading">
            <motion.h2
                id="office-locations-heading"
                className={`text-center text-3xl font-bold mb-10 ${themeClasses.titleColor} transition-colors duration-300`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            >
                Our Main Office Location
            </motion.h2>

            {/* This div centers a single card or arranges multiple in a row */}
            <div className="flex justify-center gap-6">
                {offices.map((office, index) => (
                    <OfficeCard key={office.id} office={office} index={index} themeClasses={themeClasses} />
                ))}
            </div>
        </section>
    );
}

export default OfficeLocations;