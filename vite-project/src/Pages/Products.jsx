import React from 'react';
import { motion } from 'framer-motion'; 
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/ProductPage/HeroSection';
import ProductCard from '../components/ProductPage/ProductCard';
import IntegrationSection from '../components/ProductPage/IntegrationSection';
import CTASection from '../components/ProductPage/CTASection';
import { productData } from '../components/data/productData';

export default function Products() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    // 🟣 VIOLET DARK MODE PALETTE
    const PALETTE = {
        background: "bg-[#1E1E28]",     // Main dark background
    };

    // Apply the main background class to the page wrapper
    const mainWrapperClass = isDarkMode 
        ? PALETTE.background
        : 'bg-white';
    
    const headingColor = isDarkMode ? 'text-white' : 'text-gray-900';

    // Calculate the total number of cards
    const totalCards = productData.length;

    return (
        // Apply dynamic background class here to the root page element
        <div className={`min-h-screen transition-colors duration-300 ${mainWrapperClass}`}>
            
            <HeroSection />

            {/* Product Grid Container with animations */}
            <motion.div 
                className="max-w-7xl mx-auto px-4 py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                {/* Title with animation */}
                <motion.h2 
                    className={`text-3xl font-bold text-center mb-10 ${headingColor}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Core AI Solutions
                </motion.h2>

                {/* Grid container */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Pass the index prop to each ProductCard for row-based animations */}
                    {productData.map((product, index) => (
                        <ProductCard 
                            key={index} 
                            product={product} 
                            index={index}
                            totalCards={totalCards}
                        />
                    ))}
                </motion.div>
            </motion.div>
            
            <IntegrationSection/>
            <CTASection/>
        </div>
    );
}