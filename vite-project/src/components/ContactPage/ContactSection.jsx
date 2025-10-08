// -----------------------------------------------------------
// Component 3: ContactSection.jsx
// -----------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm"; // Assuming ContactForm is in the same directory
import ContactInfo from "./ContactInfo"; // Assuming ContactInfo is in the same directory
// IMPORTANT: You must create this context hook at the path below!
import { useTheme } from "../../context/ThemeContext"; 

function ContactSection() {
    // 1. Theme Hook and Palette
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const PALETTE = {
        surface: "bg-[#1f1f23]",
        border: "border-[#373740]",
        shadow: "shadow-2xl shadow-black/50", // Darker shadow for dark mode
    };

    // Dynamic Classes
    const cardBgClass = isDarkMode ? PALETTE.surface : 'bg-white';
    const cardBorderClass = isDarkMode ? PALETTE.border : 'border-gray-200';
    const formShadowClass = isDarkMode ? PALETTE.shadow : 'shadow-2xl shadow-gray-200';
    const infoShadowClass = isDarkMode ? 'shadow-xl shadow-black/30' : 'shadow-lg';


    return (
        <section
            aria-label="Contact Information and Form"
            className="py-12 mx-auto max-w-7xl px-6"
        >
            <div className="grid gap-10 md:grid-cols-2 items-stretch">
                {/* Form Card */}
                <motion.div
                    className={`${cardBgClass} ${cardBorderClass} rounded-xl ${formShadowClass} p-8 h-full transform transition-all duration-300 hover:translate-y-[-5px] border`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <ContactForm />
                </motion.div>

                {/* Info Card */}
                <motion.div
                    className={`${cardBgClass} ${cardBorderClass} rounded-xl ${infoShadowClass} p-8 h-full transform transition-all duration-300 hover:translate-y-[-5px] border`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                    <ContactInfo />
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;