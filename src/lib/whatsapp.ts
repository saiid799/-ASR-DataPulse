// WhatsApp configuration and dynamic bilingual link generator
export const WHATSAPP_CONFIG = {
  phoneNumber: '905537457644', // Turkish business WhatsApp number (+90 553 745 76 44)
  displayNumber: '+90 553 745 76 44',
  defaultGreetingAr: 'السلام عليكم، أود الاستفسار عن خدمات هندسة البيانات والذكاء الاصطناعي لمنشأتنا.',
  defaultGreetingEn: 'Hello, I would like to inquire about your data engineering and AI solutions for our company.',
}

export function generateWhatsAppLink(customMessage?: string, lang: 'ar' | 'en' = 'ar'): string {
  const defaultMsg = lang === 'ar' ? WHATSAPP_CONFIG.defaultGreetingAr : WHATSAPP_CONFIG.defaultGreetingEn
  const message = customMessage ? customMessage.trim() : defaultMsg
  
  // Clean encoding ensuring no malformed characters
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encoded}`
}
