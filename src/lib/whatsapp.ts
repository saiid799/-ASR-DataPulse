import type { Language } from './translations'

// WhatsApp configuration and smart dynamic trilingual link generator
export const WHATSAPP_CONFIG = {
  phoneNumber: '905537457644', // Turkish business WhatsApp number (+90 553 745 76 44)
  displayNumber: '+90 553 745 76 44',
  defaultGreetingAr: 'السلام عليكم، أود الاستفسار عن خدمات هندسة البيانات والذكاء الاصطناعي لمنشأتنا.',
  defaultGreetingEn: 'Hello, I would like to inquire about your data engineering and AI solutions for our company.',
  defaultGreetingTr: 'Merhaba, şirketimiz için veri mühendisliği ve yapay zeka çözümleri hakkında bilgi almak istiyorum.',
}

export type LocalizedMessage = string | {
  ar?: string
  en?: string
  tr?: string
}

/**
 * Intelligently determines the target language based on:
 * 1. Explicitly chosen website language
 * 2. Stored user preference in localStorage
 * 3. User's browser/device primary language (Arabic, Turkish, or English default)
 */
export function getEffectiveLanguage(explicitLang?: Language): Language {
  if (explicitLang === 'ar' || explicitLang === 'en' || explicitLang === 'tr') {
    return explicitLang
  }

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('asr_datapulse_lang') as Language
      if (stored === 'ar' || stored === 'en' || stored === 'tr') {
        return stored
      }

      // Check device / browser language
      const navLang = (navigator.language || (navigator as any).userLanguage || '').toLowerCase()
      if (navLang.startsWith('tr')) return 'tr'
      if (navLang.startsWith('ar')) return 'ar'
    } catch {
      // ignore
    }
  }

  return 'ar'
}

/**
 * Generates an ultra-clean WhatsApp link with smart trilingual message resolution
 */
export function generateWhatsAppLink(
  customMessage?: LocalizedMessage,
  lang?: Language
): string {
  const effectiveLang = getEffectiveLanguage(lang)

  let messageText = ''

  if (typeof customMessage === 'object' && customMessage !== null) {
    messageText =
      customMessage[effectiveLang] ||
      customMessage.ar ||
      customMessage.en ||
      customMessage.tr ||
      ''
  } else if (typeof customMessage === 'string' && customMessage.trim().length > 0) {
    messageText = customMessage.trim()
  }

  if (!messageText) {
    if (effectiveLang === 'tr') messageText = WHATSAPP_CONFIG.defaultGreetingTr
    else if (effectiveLang === 'en') messageText = WHATSAPP_CONFIG.defaultGreetingEn
    else messageText = WHATSAPP_CONFIG.defaultGreetingAr
  }

  // Clean URL encoding with zero malformed multi-byte character issues
  const encoded = encodeURIComponent(messageText.trim())
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encoded}`
}
