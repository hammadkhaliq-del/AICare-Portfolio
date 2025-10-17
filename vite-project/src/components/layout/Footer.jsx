import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Icon = ({ path, className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
    </svg>
);

export default function Footer() {

    const socialIcons = [
        { icon: FaTwitter, href: '#', label: 'Twitter (X)' },
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        { icon: FaGithub, href: '#', label: 'GitHub' },
        { icon: FaYoutube, href: '#', label: 'YouTube' }, 
    ];

    const contactInfo = [
        { icon: FaMapMarkerAlt, text: '123 AI Avenue, Innovation City, CA 90210' },
        { icon: FaEnvelope, text: 'contact@aicare.com', href: 'mailto:contact@aicare.com' },
        { icon: FaPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* The padding is already responsive: px-4 (mobile) -> sm:px-6 (tablet) -> lg:px-8 (desktop) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-5">
                
                {/* Main Grid: Adjusting column spans for better tablet/mobile layout */}
                <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-8">
                    
                    {/* Column 1: Company Info and Social Icons */}
                    {/* On mobile/tablet, span the full width of the main content grid (1/1) */}
                    {/* On large screens, use the specified 4/10 width (lg:col-span-4) */}
                    <div className="md:col-span-4 lg:col-span-4">
                        {/* Logo and Company Name */}
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                                <Icon 
                                    path="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM12 18.27l-.6-.55c-3.15-2.88-5.4-5.07-5.4-7.22 0-1.87 1.25-3.12 3-3.12.87 0 1.76.38 2.3.93l.7.7.7-.7c.54-.55 1.43-.93 2.3-.93 1.75 0 3 1.25 3 3.12 0 2.15-2.25 4.34-5.4 7.22l-.6.55zM12 9.5l-3-3H6v2h2.5l1.5 1.5-1.5 1.5H6v2h4.5l3-3-3-3H18V9.5h-6z"
                                    className="h-6 w-6 text-gray-900"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">AI Care</span>
                        </div>

                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Revolutionizing healthcare through AI-powered solutions. Making world-class medical expertise accessible to everyone, everywhere.
                        </p>
                        
                        {/* Social Icons - Simple borders and subtle hover */}
                        <div className="flex space-x-3 mt-6"> 
                            {socialIcons.map((item) => (
                                <a
                                key={item.label}
                                href={item.href}
                                aria-label={item.label}
                                // Simple styling: rounded corners, border, subtle hover
                                className="w-10 h-10 flex items-center justify-center 
                                            bg-gray-900 border border-gray-700 rounded-lg 
                                            text-gray-400 hover:text-white 
                                            hover:border-gray-500 transition-all duration-200"
                                >
                                <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
        
                    {/* Column 2: Links (Products, Company) and Contact Info */}
                    {/* On mobile/tablet, span the full width of the main content grid (1/1) */}
                    {/* On large screens, use the specified 6/10 width (lg:col-span-6) */}
                    {/* The internal layout is a 2-column grid on mobile, 3 on medium screens */}
                    <div className="md:col-span-4 lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        
                        {/* Products Section (1/3 or 1/2 width) */}
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
                            <ul className="mt-4 space-y-3 text-gray-400">
                                <li><Link to="/products" className="hover:text-white">Dx3D</Link></li>
                                <li><Link to="/products" className="hover:text-white">Dx2D</Link></li>
                                <li><Link to="/products" className="hover:text-white">TSS</Link></li>
                                <li><Link to="/products" className="hover:text-white">MedScribe</Link></li>
                                <li><Link to="/products" className="hover:text-white">Rx Scan</Link></li>
                                <li><Link to="/products" className="hover:text-white">SearchDoc</Link></li>
                            </ul>
                        </div>
                        
                        {/* Company Section (1/3 or 1/2 width) */}
                        <div>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                            <ul className="mt-4 space-y-3 text-gray-400">
                                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                                <li><Link to="/products" className="hover:text-white">Products</Link></li>
                                <li><Link to="/team" className="hover:text-white">Team</Link></li>
                                <li><Link to="/contact" className="hover:text-white">Contacts</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info Section (Spans 2 columns on mobile, 1 on tablet/desktop) */}
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact Us</h3>
                            <ul className="mt-4 space-y-3 text-gray-400">
                                {contactInfo.map((item, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <item.icon className="w-4 h-4 flex-shrink-0 mt-1.5 text-gray-500" />
                                        {item.href ? (
                                            <a href={item.href} className="hover:text-white leading-relaxed">
                                                {item.text}
                                            </a>
                                        ) : (
                                            <span className="leading-relaxed">{item.text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
        
                {/* Email Subscription Section */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                    {/* flex-col (mobile) -> md:flex-row (tablet/desktop) for stacking/side-by-side */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        
                        {/* Text Block: full width on mobile, 1/2 on tablet/desktop */}
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <h3 className="text-md font-bold text-white tracking-wider">Stay Updated</h3>
                            <p className="mt-2 text-gray-400">Get the latest updates on AI Care products and healthcare innovations.</p>
                        </div>
                        
                        {/* Form Block: full width on mobile, 5/12 on tablet/desktop */}
                        <div className="w-full md:w-5/12">
                            {/* Ensured the input and button stay inline on all devices */}
                            <form className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    // Subtle dark background, minimal border
                                    className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-gray-600 focus:border-gray-600 text-white placeholder-gray-500" 
                                />
                                <button 
                                    type="submit" 
                                    // White button for contrast, simple hover
                                    className="bg-white ml-4 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex-shrink-0" // Added flex-shrink-0
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    {/* Stacks on mobile (flex-col) and goes side-by-side on tablet/desktop (md:flex-row) */}
                    <div className="text-sm sm:text-lg text-gray-500 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <p>&copy; {new Date().getFullYear()} AI Care. All rights reserved.</p>
                        {/* Scaled down the font size for the long 'Backed by' text on mobile/small screens */}
                        <p className="text-sm sm:text-lg text-right md:text-left">Backed by MIDL — National Center of Artificial Intelligence (NCAI)</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}