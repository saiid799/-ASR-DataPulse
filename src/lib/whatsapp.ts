// WhatsApp configuration and dynamic trilingual link generator
export const WHATSAPP_CONFIG = {
  phoneNumber: '905537457644', // Turkish business WhatsApp number (+90 553 745 76 44)
  displayNumber: '+90 553 745 76 44',
  defaultGreetingAr: 'السلام عليكم، أود الاستفسار عن خدمات هندسة البيانات والذكاء الاصطناعي لمنشأتنا.',
  defaultGreetingEn: 'Hello, I would like to inquire about your data engineering and AI solutions for our company.',
  defaultGreetingTr: 'Merhaba, şirketimiz için veri mühendisliği ve yapay zeka çözümleri hakkında bilgi almak istiyorum.',
}

export function generateWhatsAppLink(customMessage?: string, lang: 'ar' | 'en' | 'tr' = 'ar'): string {
  let defaultMsg = WHATSAPP_CONFIG.defaultGreetingAr
  if (lang === 'en') defaultMsg = WHATSAPP_CONFIG.defaultGreetingEn
  if (lang === 'tr') defaultMsg = WHATSAPP_CONFIG.defaultGreetingTr

  const message = customMessage ? customMessage.trim() : defaultMsg
  
  // Clean encoding ensuring no malformed characters
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encoded}`
}
