/**
 * Central brand + contact configuration.
 * NOTE: all business details below are fictional demo content.
 * Replace them here (single source of truth) when connecting the real business.
 */

export const brand = {
  name: "LUXORA",
  taglineEn: "BEAUTY, REDEFINED.",
  taglineFa: "زیبایی، با نگاه علمی و ظریف.",
  descriptionFa:
    "کلینیک زیبایی و سلامت پوست لوکسورا؛ ترکیبی از دانش پزشکی، تکنولوژی روز و نگاه زیبایی‌شناسانه برای نتایجی طبیعی و متناسب با چهره هر فرد.",
} as const;

export const contact = {
  cityFa: "تهران، ایران",
  addressFa: "تهران، خیابان ولی‌عصر، برج لوکسورا، طبقه ۷",
  phoneFa: "۰۲۱-۱۲۳۴۵۶۷۸",
  phoneHref: "tel:+982112345678",
  email: "hello@luxora.ir",
  instagramHandle: "@luxora.clinic",
  instagramUrl: "https://instagram.com",
  hoursFa: "شنبه تا پنجشنبه، ۹ تا ۲۰",
  /** Placeholder number — replace with the real business WhatsApp number. */
  whatsappNumber: "989120000000",
  whatsappMessage: "سلام، برای رزرو مشاوره در لوکسورا راهنمایی می‌خواستم.",
} as const;

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const navLinks = [
  { labelFa: "خدمات", href: "#services" },
  { labelFa: "درباره ما", href: "#philosophy" },
  { labelFa: "نتایج", href: "#results" },
  { labelFa: "متخصصین", href: "#specialists" },
  { labelFa: "سؤالات متداول", href: "#faq" },
  { labelFa: "تماس", href: "#contact" },
] as const;

export const cta = {
  bookFa: "رزرو مشاوره",
  whatsappFa: "تماس در واتساپ",
  servicesFa: "مشاهده خدمات",
} as const;
