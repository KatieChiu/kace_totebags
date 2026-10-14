/**
 * Replace these values with your real business details.
 * The WhatsApp number must include the country code, digits only (e.g. "5215512345678").
 */
export const siteConfig = {
  brandName: 'KACE',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
  instagramUser: process.env.NEXT_PUBLIC_INSTAGRAM_USER ?? '',
  images: {
    logo: '/images/logo.png',
    hero: '/images/hero-totes.png',
    toteManta: '/images/tote-manta.png',
    toteJean: '/images/tote-jean.png',
    miniTotes: '/images/mini-totes.png',
    personaliza: '/images/personaliza.png',
    catalog: '/images/catalog.png',
  },
}

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  const number = siteConfig.whatsappNumber.replace(/\D/g, '')
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`
}

export function instagramLink() {
  const user = siteConfig.instagramUser.replace(/^@/, '')
  return user ? `https://instagram.com/${user}` : 'https://instagram.com/kacetotes'
}
export function FacebookLink() {
  const user = siteConfig.instagramUser.replace(/^@/, '')
  return user ? `https://www.facebook.com/share/1CEFMnwcGP/` : 'https://facebook.com/kacetotes'
}

export const messages = {
  general: '¡Hola! Me gustaría hacer un pedido de una tote bag personalizada.',
  manta: '¡Hola! Me interesa personalizar la Tote de manta. ¿Me pueden dar más información?',
  jean: '¡Hola! Me interesa personalizar la Tote de jean. ¿Me pueden dar más información?',
  mini: '¡Hola! Quisiera cotizar mini totes personalizadas para regalos. ¿Me pueden compartir precios por cantidad y opciones de personalización?',
  pedido: '¡Hola! Quiero crear mi pedido de tote personalizada. Tela: (manta / jean). Mi idea es: ',
}
