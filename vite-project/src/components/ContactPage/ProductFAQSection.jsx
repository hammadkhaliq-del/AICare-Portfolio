import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';

// FAQ data moved to separate file for better organization
import { faqData } from '../data/faqData';

// FAQItem Component
const FAQItem = ({ question, answer, isOpen, onClick, bulletPointColor, faqQuestionColor, faqAnswerColor, index }) => (
  <motion.div 
    className="pb-3 border-b last:border-b-0 last:pb-0" 
    style={{ borderColor: 'inherit' }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.3 }}
  >
    <h4 className={`font-medium ${faqQuestionColor} flex items-start gap-2`}>
      <motion.span 
        className={`${bulletPointColor} text-xl font-extrabold`}
        animate={{ scale: isOpen ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        •
      </motion.span> 
      <button 
        onClick={onClick} 
        className="text-left hover:underline focus:outline-none focus:underline w-full"
      >
        {question}
      </button>
    </h4>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`mt-1 text-sm ${faqAnswerColor} pl-6`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// FAQ Category Component
const FAQCategory = ({ 
  category, 
  isOpen, 
  onToggle, 
  activeItemId,
  setActiveItemId,
  themeClasses,
  index
}) => {
  const { 
    cardBgClass, cardBorderClass, innerBorderClass, 
    faqTitleColor, faqQuestionColor, faqAnswerColor, 
    bulletPointColor, chevronColor 
  } = themeClasses;

  return (
    <motion.div
      className={`${cardBgClass} ${cardBorderClass} rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className={`text-lg font-semibold ${faqTitleColor}`}>{category.title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ChevronUp className={`h-6 w-6 ${chevronColor}`} />
          ) : (
            <ChevronDown className={`h-6 w-6 ${chevronColor}`} />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden">
              <div className={`p-5 pt-0 border-t ${innerBorderClass} space-y-4`}>
                {category.faqs.map((faq, idx) => (
                  <FAQItem
                    key={idx}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={activeItemId === `${category.id}-${idx}`}
                    onClick={() => setActiveItemId(
                      activeItemId === `${category.id}-${idx}` ? null : `${category.id}-${idx}`
                    )}
                    bulletPointColor={bulletPointColor}
                    faqQuestionColor={faqQuestionColor}
                    faqAnswerColor={faqAnswerColor}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function ProductFAQSection() {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [activeItemId, setActiveItemId] = useState(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const themeClasses = {
    // Section theme
    sectionBgClass: isDarkMode ? "bg-[#1E1E28]" : "bg-gray-50",
    headingTextColor: isDarkMode ? "text-white" : "text-gray-900",
    bodyTextColor: isDarkMode ? "text-gray-400" : "text-gray-600",
    
    // Card theme
    cardBgClass: isDarkMode ? "bg-[#1f1f23]" : "bg-white",
    cardBorderClass: isDarkMode ? "border-[#1F1F23]" : "border-gray-200",
    innerBorderClass: isDarkMode ? "border-[#293e58]" : "border-gray-100",
    faqTitleColor: isDarkMode ? "text-white" : "text-gray-900",
    faqQuestionColor: isDarkMode ? "text-white" : "text-gray-800",
    faqAnswerColor: isDarkMode ? "text-gray-400" : "text-gray-600",
    
    // Accent elements
    bulletPointColor: isDarkMode ? "text-[#8B5CF6]" : "text-yellow-600",
    chevronColor: isDarkMode ? "text-[#8B5CF6]" : "text-blue-800",
    supportBadgeBg: isDarkMode ? "bg-[#293e58]" : "bg-blue-50",
    supportBadgeText: isDarkMode ? "text-[#8B5CF6]" : "text-blue-800",
  };

  const toggleCategory = (id) => {
    setOpenCategoryId(openCategoryId === id ? null : id);
  };

  return (
    <motion.section 
      className={`mt-24 transition-colors duration-300 py-12 ${themeClasses.sectionBgClass}`} 
      aria-labelledby="faq-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className={`px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3 ${themeClasses.supportBadgeBg} ${themeClasses.supportBadgeText}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 10, 
            delay: 0.2 
          }}
        >
          ○ Support
        </motion.span>
        <motion.h2 
          id="faq-heading" 
          className={`text-3xl font-bold ${themeClasses.headingTextColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          className={`mx-auto mt-3 max-w-2xl text-lg ${themeClasses.bodyTextColor}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Quick answers to common questions about our products and company
        </motion.p>
      </motion.div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((category, index) => (
          <FAQCategory
            key={category.id}
            category={category}
            isOpen={openCategoryId === category.id}
            onToggle={() => toggleCategory(category.id)}
            activeItemId={activeItemId}
            setActiveItemId={setActiveItemId}
            themeClasses={themeClasses}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default ProductFAQSection;