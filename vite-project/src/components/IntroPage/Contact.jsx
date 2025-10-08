import React from "react";
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from "../../context/ThemeContext";

function Contact() {
    // 1. Use the theme hook
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 NEW DARK MODE PALETTE MAPPING
    const PALETTE = {
        background: "bg-[#2a2a30]",
        surface: "bg-[#18181b]", // Used for input fields and enterprise block
        card: "bg-[#1f1f23]",
        textPrimary: "text-[#f5f5f5]",
        textSecondary: "text-[#a1a1aa]",
        accent: "text-[#8b5cf6]", // violet-500
        buttonBg: "bg-[#8b5cf6]",
        buttonHover: "hover:bg-[#7c3aed]", // violet-600
    };

    // 1. Section Background 
    const sectionBgClass = isDarkMode ? PALETTE.background : 'bg-[#F8FAF4]';
    
    // 2. Card & Form Card Backgrounds
    const cardBgClass = isDarkMode ? PALETTE.card : 'bg-[#FFFFFF]';
    // Use card color but define a very subtle border for contrast
    const formCardBgClass = isDarkMode 
        ? `${PALETTE.card} shadow-xl border-[#333]`
        : 'bg-white shadow-md border-gray-200';

    // 3. Text Colors
    const headingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const subHeadingTextColor = isDarkMode ? PALETTE.textPrimary : 'text-gray-900';
    const bodyTextColor = isDarkMode ? PALETTE.textSecondary : 'text-gray-500';
    
    // Highlight Text Color (Dark Mode: Violet Accent)
    const highlightTextColor = isDarkMode 
        ? `${PALETTE.accent} ${PALETTE.buttonHover} transition-colors` 
        : 'text-gray-600';

    // 4. Input and Icon Styling
    // Input Background (Dark Mode: #18181b)
    const inputBgClass = isDarkMode 
        ? `${PALETTE.surface} ${PALETTE.textPrimary} placeholder-gray-400 focus:ring-[#8b5cf6] border-transparent` 
        : 'bg-[#F7F7F8] text-gray-900 focus:ring-gray-400 border-transparent';
    
    // Icon Background/Color: White BG/Black text (High contrast for icons)
    const iconBgClass = isDarkMode ? 'bg-white text-black' : 'bg-black text-white'; 
    
    // 5. CTA Button Class (Dark Mode: Violet Background, White Text)
    const ctaButtonClass = isDarkMode
        ? `${PALETTE.buttonBg} text-white font-semibold py-3 px-4 rounded-lg ${PALETTE.buttonHover} transition-colors cursor-pointer`
        : 'bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer';

    // 6. Enterprise Block Background (Dark Mode: #18181b)
    const enterpriseBlockBg = isDarkMode ? PALETTE.surface : 'bg-[#F5F6FA]';
    const enterpriseButtonClass = ctaButtonClass.replace('py-3 px-4', 'py-2 px-5');

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted with the Violet Theme!");
    };

    // Contact data structure for better linking
    const contactItems = [
        { icon: Mail, title: "Email Us", detail: "hello@aicare.com", note: "Send us an email and we'll respond within 24 hours.", href: "mailto:hello@aicare.com" },
        { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567", note: "Mon-Fri from 8am to 6pm PST", href: "tel:+15551234567" },
        { icon: MapPin, title: "Visit Us", detail: "San Francisco, CA", note: "123 Innovation Drive, Suite 100", href: "#map" },
    ];

    return (
        <section 
            className={`py-20 ${sectionBgClass} transition-colors duration-300`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold ${headingTextColor} transition-colors duration-300`}>Get In Touch</h2>
                    <p className={`mt-4 text-lg ${bodyTextColor} max-w-3xl mx-auto transition-colors duration-300`}>
                        Ready to revolutionize your healthcare practice? Let's discuss how AI Care can help you deliver better patient outcomes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-24">
                    <div className="space-y-8">
                        <h3 className={`text-2xl font-bold ${subHeadingTextColor}`}>Let's Start a Conversation</h3>
                        
                        {/* Contact Info Cards */}
                        {contactItems.map((item, index) => (
                            <div key={index} className={`${cardBgClass} p-6 rounded-xl flex items-start space-x-5 transition-colors duration-300 shadow-sm`}>
                                {/* Icon */}
                                <div className={`${iconBgClass} p-3 rounded-lg flex-shrink-0 transition-colors duration-300`}>
                                    <item.icon size={24} />
                                </div>
                                {/* Text Content */}
                                <div>
                                    <h4 className={`font-semibold text-lg ${subHeadingTextColor}`}>{item.title}</h4>
                                    <a 
                                        href={item.href} 
                                        className={`font-medium ${highlightTextColor}`}
                                        target={item.title === "Visit Us" ? '_self' : '_blank'} 
                                        rel="noopener noreferrer" 
                                    >
                                        {item.detail}
                                    </a>
                                    <p className={`text-sm mt-1 ${bodyTextColor}`}>{item.note}</p>
                                </div>
                            </div>
                        ))}

                        {/* Enterprise Solutions Block */}
                        <div className={`p-6 rounded-lg shadow-lg ${enterpriseBlockBg} transition-colors duration-300`}>
                            <h4 className={`font-semibold text-lg ${subHeadingTextColor}`}>Enterprise Solutions</h4>
                            <p className={`mt-2 ${bodyTextColor}`}>Looking for custom AI healthcare solutions for your organization? Our enterprise team is ready to help.</p>
                            <button type="button" className={`mt-4 ${enterpriseButtonClass}`}>Schedule Demo</button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`p-8 rounded-2xl border ${formCardBgClass} transition-colors duration-300`}>
                        <h3 className={`text-2xl font-bold ${subHeadingTextColor} mb-8`}>Send us a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Input Fields */}
                            {[
                                { id: 'full-name', label: 'Full Name *', type: 'text', placeholder: 'Enter your full name' },
                                { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'Enter your email' },
                                { id: 'company', label: 'Company/Organization', type: 'text', placeholder: 'Enter your company name' },
                            ].map((field, index) => (
                                <div key={index}>
                                    <label htmlFor={field.id} className={`block text-sm font-semibold ${subHeadingTextColor} mb-1`}>{field.label}</label>
                                    <input 
                                        type={field.type} 
                                        name={field.id} 
                                        id={field.id} 
                                        placeholder={field.placeholder} 
                                        className={`mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${inputBgClass}`} 
                                        required={field.label.includes('*')}
                                    />
                                </div>
                            ))}
                            
                            {/* Textarea */}
                            <div>
                                <label htmlFor="message" className={`block text-sm font-semibold ${subHeadingTextColor} mb-1`}>Message *</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows="5" 
                                    placeholder="Tell us about your project or questions..." 
                                    className={`mt-1 block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${inputBgClass}`}
                                    required
                                ></textarea>
                                <p className={`text-xs mt-2 ${bodyTextColor}`}>0/500 characters</p>
                            </div>
                            
                            {/* Submit Button */}
                            <div>
                                <button type="submit" className={`w-full ${ctaButtonClass}`}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;