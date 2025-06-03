/**
 * Language detection utility
 * Detects the user's preferred language from browser settings
 * Falls back to English if the preferred language is not supported
 */

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'it', 'es', 'fr', 'de', 'ro'];
export const DEFAULT_LANGUAGE = 'en';

/**
 * Detects the user's preferred language from browser settings
 * @returns {string} The detected language code or default language if not supported
 */
export const detectLanguage = () => {
  // Get browser language
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Extract the language code (first 2 characters)
  const langCode = browserLang.substring(0, 2).toLowerCase();
  
  // Check if the language is supported
  if (SUPPORTED_LANGUAGES.includes(langCode)) {
    return langCode;
  }
  
  // Fall back to default language
  return DEFAULT_LANGUAGE;
};