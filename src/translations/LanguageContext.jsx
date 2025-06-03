import React, { createContext, useContext, useState, useEffect } from 'react';
import { detectLanguage, DEFAULT_LANGUAGE } from './languageDetection';

// Import all translation files
import enTranslations from './en.json';
import itTranslations from './it.json';
import esTranslations from './es.json';
import frTranslations from './fr.json';
import deTranslations from './de.json';
import roTranslations from './ro.json';

// Create the language context
const LanguageContext = createContext();

// Translation resources
const resources = {
  en: enTranslations,
  it: itTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  ro: roTranslations
};

/**
 * Language Provider component
 * Provides language context to the application
 */
export const LanguageProvider = ({ children }) => {
  // Detect language on initial render
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState(resources[DEFAULT_LANGUAGE]);

  useEffect(() => {
    // Detect language from browser settings
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    setTranslations(resources[detectedLang]);
  }, []);

  /**
   * Change the current language
   * @param {string} lang - Language code to switch to
   */
  const changeLanguage = (lang) => {
    if (resources[lang]) {
      setLanguage(lang);
      setTranslations(resources[lang]);
    }
  };

  /**
   * Get translation for a key
   * @param {string} key - Translation key
   * @param {Object} params - Parameters to replace in the translation
   * @returns {string} Translated text
   */
  const t = (key, params = {}) => {
    // Get the translation from the current language
    let translation = key.split('.').reduce((obj, k) => obj && obj[k], translations);
    
    // If translation not found, try to get it from the default language
    if (!translation && language !== DEFAULT_LANGUAGE) {
      translation = key.split('.').reduce((obj, k) => obj && obj[k], resources[DEFAULT_LANGUAGE]);
    }
    
    // If still no translation, return the key
    if (!translation) return key;
    
    // Replace parameters in the translation
    if (params && Object.keys(params).length) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{{${param}}}`, params[param]);
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to use the language context
 * @returns {Object} Language context
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};