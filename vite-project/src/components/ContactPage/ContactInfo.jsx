// -----------------------------------------------------------
// Component 2: ContactInfo.jsx (FIXED for Dark Mode Icon Styling and Link Colors)
// -----------------------------------------------------------
import React from "react";
import { Mail, Phone, Clock, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext"; 

// Reusable component for each contact detail item
const ContactInfoItem = ({ icon: Icon, title, children, index, themeClasses }) => (
    <motion.div
        className="flex items-start gap-4 group"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 * index }}
    >
        <motion.div
            className={`h-10 w-10 flex items-center justify-center rounded-lg ${themeClasses.iconBg} ${themeClasses.iconHoverBg} transition-colors duration-300`}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Icon className={`h-6 w-6 ${themeClasses.iconColor}`} />
        </motion.div>
        <div>
            <div className={`font-semibold text-lg ${themeClasses.titleColor}`}>{title}</div>
            <div className={`text-base ${themeClasses.contentColor}`}>
                {children}
            </div>
        </div>
    </motion.div>
);

function ContactInfo() {
    // 1. Theme Hook and Palette
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const PALETTE = {
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accentText: "text-[#8b5cf6]", // violet-500
        
        // Custom dark mode icon colors based on request
        darkModeIconBg: "bg-white",
        darkModeIconColor: "text-black",
    };

    const themeClasses = {
        headingColor: isDarkMode ? PALETTE.textPrimary : "text-gray-800",
        titleColor: isDarkMode ? PALETTE.textPrimary : "text-gray-900",
        contentColor: isDarkMode ? PALETTE.textSecondary : "text-gray-600",
        
        // --- Icon Fixes ---
        iconBg: isDarkMode ? PALETTE.darkModeIconBg : "bg-yellow-50",
        iconColor: isDarkMode ? PALETTE.darkModeIconColor : "text-blue-800",
        iconHoverBg: isDarkMode ? "group-hover:bg-gray-100" : "group-hover:bg-blue-50",
        // ------------------
        
        // FIX 1: Set link color to white in dark mode, as requested.
        linkColor: isDarkMode ? "text-white" : "text-blue-800",
        // FIX 2: Introduce conditional hover color for better dark mode UX.
        linkHoverColor: isDarkMode ? "hover:text-gray-300" : "hover:text-blue-900",
    };

    return (
        <motion.section
            aria-labelledby="contact-info-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                id="contact-info-heading"
                className={`text-xl font-bold mb-4 ${themeClasses.headingColor} transition-colors duration-300`}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Global Contact Information
            </motion.h2>

            <div className="space-y-6">
                <ContactInfoItem icon={Building2} title="Headquarters" index={0} themeClasses={themeClasses}>
                    <p>
                        High End Computing Lab<br />
                        Comsats University Islamabad, Islamabad<br />
                        Pakistan
                    </p>
                </ContactInfoItem>

                <ContactInfoItem icon={Phone} title="Phone & Support" index={1} themeClasses={themeClasses}>
                    <p>
                        <span className="font-mono">+1 (555) 123-4567</span><br />
                        <span className="text-sm">Mon-Fri 8AM–6PM PST | 24/7 Emergency Support</span>
                    </p>
                </ContactInfoItem>

                <ContactInfoItem icon={Mail} title="Email" index={2} themeClasses={themeClasses}>
                    <p>
                        <motion.a
                            href="mailto:info@aicare.com"
                            // FIX 3: Use dynamic hover class
                            className={`${themeClasses.linkColor} ${themeClasses.linkHoverColor} hover:underline transition-colors`}
                            whileHover={{ scale: 1.03 }}
                        >
                            info@aicare.com
                        </motion.a>
                        <br />
                        <motion.a
                            href="mailto:support@aicare.com"
                            // FIX 3: Use dynamic hover class
                            className={`${themeClasses.linkColor} ${themeClasses.linkHoverColor} hover:underline transition-colors`}
                            whileHover={{ scale: 1.03 }}
                        >
                            support@aicare.com
                        </motion.a>
                    </p>
                </ContactInfoItem>

                <ContactInfoItem icon={Clock} title="Business Hours" index={3} themeClasses={themeClasses}>
                    <p>
                        Monday - Friday: 8:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 2:00 PM<br />
                        Sunday: Closed
                    </p>
                </ContactInfoItem>
            </div>
        </motion.section>
    );
}

export default ContactInfo;
