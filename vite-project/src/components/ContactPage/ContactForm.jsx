// -----------------------------------------------------------
// Component 1: ContactForm.jsx
// -----------------------------------------------------------
import React, { useState } from "react";
import { motion } from "framer-motion";
// IMPORTANT: You must create this context hook at the path below!
import { useTheme } from "../../context/ThemeContext"; 

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // 1. Theme Hook and Palette
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const PALETTE = {
        surface: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accent: "bg-[#8b5cf6]",      // violet-500
        accentText: "text-[#8b5cf6]", // violet-500
        accentHover: "hover:bg-[#a78bfa]", // violet-400
        inputBorder: isDarkMode ? "border-[#373740]" : "border-gray-300",
        inputBg: isDarkMode ? "bg-[#121212] text-white" : "bg-white text-gray-900",
        inputFocus: isDarkMode ? "focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/30" : "focus:border-blue-800 focus:ring-1 focus:ring-blue-100",
    };
    
    // Dynamic Classes
    const headingClass = isDarkMode ? PALETTE.textPrimary : "text-gray-800";
    const labelClass = isDarkMode ? PALETTE.textSecondary : "text-gray-700";
    const buttonClass = isDarkMode 
        ? `${PALETTE.accent} text-white ${PALETTE.accentHover} focus:ring-2 focus:ring-[#8b5cf6]/50`
        : 'bg-black text-white hover:bg-gray-800';
    const successBgClass = isDarkMode ? "bg-green-900/50" : "bg-green-50";
    const successTextClass = isDarkMode ? "text-green-300" : "text-green-700";
    const successHeadingClass = isDarkMode ? "text-green-400" : "text-green-800";
    const successIconClass = isDarkMode ? "text-green-400" : "text-green-500";


    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) { newErrors.name = "Name is required"; }
        if (!formData.email.trim()) { newErrors.email = "Email is required"; } else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Email is invalid"; }
        if (!formData.message.trim()) { newErrors.message = "Message is required"; }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
        // Clear error as the user types
        if (errors[id]) { setErrors(prev => ({ ...prev, [id]: null })); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) { return; }
        
        setIsSubmitting(true);
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            
            // Success logic
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5 seconds
        } catch (error) {
            console.error("Form submission error:", error);
            // Handle error state if needed
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h2 className={`text-xl font-bold mb-6 ${headingClass} transition-colors duration-300`}>Send us a Message</h2>

            {submitted ? (
                // Success Message UI
                <motion.div
                    className="flex-grow flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={`text-center p-6 rounded-lg ${successBgClass} transition-colors duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 mx-auto mb-4 ${successIconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h3 className={`text-lg font-semibold mb-2 ${successHeadingClass}`}>Message Sent!</h3>
                        <p className={successTextClass}>Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                </motion.div>
            ) : (
                // Contact Form UI
                <form className="h-full flex flex-col space-y-4" onSubmit={handleSubmit} noValidate>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <label htmlFor="name" className={`block text-sm font-medium ${labelClass} transition-colors duration-300`}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className={`mt-1 w-full rounded-md border ${errors.name ? 'border-red-500' : PALETTE.inputBorder} px-4 py-2 text-base ${PALETTE.inputBg} ${PALETTE.inputFocus} transition-all duration-200`}
                            value={formData.name}
                            onChange={handleChange}
                            aria-invalid={errors.name ? "true" : "false"}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className="mt-1 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label htmlFor="email" className={`block text-sm font-medium ${labelClass} transition-colors duration-300`}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className={`mt-1 w-full rounded-md border ${errors.email ? 'border-red-500' : PALETTE.inputBorder} px-4 py-2 text-base ${PALETTE.inputBg} ${PALETTE.inputFocus} transition-all duration-200`}
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-600">
                                {errors.email}
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        className="flex-grow flex flex-col min-h-[120px]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor="message" className={`block text-sm font-medium mb-1 ${labelClass} transition-colors duration-300`}>
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Type your message..."
                            className={`w-full flex-grow rounded-md border ${errors.message ? 'border-red-500' : PALETTE.inputBorder} px-4 py-3 text-base ${PALETTE.inputBg} ${PALETTE.inputFocus} resize-none transition-all duration-200`}
                            value={formData.message}
                            onChange={handleChange}
                            aria-invalid={errors.message ? "true" : "false"}
                            aria-describedby={errors.message ? "message-error" : undefined}
                        ></textarea>
                        {errors.message && (
                            <p id="message-error" className="mt-1 text-sm text-red-600">
                                {errors.message}
                            </p>
                        )}
                    </motion.div>

                    <motion.button
                        type="submit"
                        className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer mt-4 ${buttonClass} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : "Send Message"}
                    </motion.button>
                </form>
            )}
        </motion.div>
    );
}

export default ContactForm;