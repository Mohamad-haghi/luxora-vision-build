import { images } from "./images";

export type Service = {
  id: string;
  index: string;
  titleFa: string;
  latin: string;
  descriptionFa: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "skin",
    index: "01",
    titleFa: "پوست",
    latin: "SKIN",
    descriptionFa:
      "ارزیابی دقیق وضعیت پوست و طراحی مسیر درمانی برای بافت یکدست، منافذ ظریف‌تر و روشنی طبیعی.",
    image: images.serviceSkin,
    alt: "نمای نزدیک از پوست سالم و طبیعی صورت",
  },
  {
    id: "laser",
    index: "02",
    titleFa: "لیزر",
    latin: "LASER",
    descriptionFa:
      "استفاده از دستگاه‌های نسل جدید با تنظیم اختصاصی پارامترها بر اساس نوع پوست و میزان حساسیت.",
    image: images.serviceLaser,
    alt: "دستگاه لیزر مدرن در اتاق درمان کلینیک",
  },
  {
    id: "rejuvenation",
    index: "03",
    titleFa: "جوانسازی",
    latin: "REJUVENATION",
    descriptionFa:
      "بازگرداندن شادابی و استحکام پوست با روش‌های کم‌تهاجمی و دوره‌های درمانی برنامه‌ریزی‌شده.",
    image: images.serviceRejuvenation,
    alt: "انجام درمان جوانسازی صورت در فضایی آرام",
  },
  {
    id: "contour",
    index: "04",
    titleFa: "فرم‌دهی صورت",
    latin: "CONTOUR",
    descriptionFa:
      "تعریف دقیق خطوط چهره با رعایت تناسب طبیعی؛ تغییری که دیده نمی‌شود، احساس می‌شود.",
    image: images.serviceContour,
    alt: "نمای جانبی از خط فک و گردن در نور ملایم",
  },
  {
    id: "wellness",
    index: "05",
    titleFa: "مراقبت و Wellness",
    latin: "WELLNESS",
    descriptionFa:
      "برنامه‌های مراقبت خانگی و جلسات آرام‌سازی که نتیجه درمان را در طول زمان حفظ می‌کند.",
    image: images.serviceWellness,
    alt: "فضای آرام و مینیمال بخش مراقبت کلینیک",
  },
];

export type Stat = { value: string; labelFa: string };

export const stats: Stat[] = [
  { value: "+۱۰", labelFa: "سال تجربه" },
  { value: "+۵۰۰۰", labelFa: "مراجعه" },
  { value: "۹۸٪", labelFa: "رضایت مراجعین" },
  { value: "—", labelFa: "تخصص و تکنولوژی" },
];

export type Specialist = {
  id: string;
  nameFa: string;
  roleFa: string;
  credentialsFa: string;
  image: string;
};

/** Fictional demo profiles — not real people. */
export const specialists: Specialist[] = [
  {
    id: "s1",
    nameFa: "دکتر مهسا آرین",
    roleFa: "متخصص پوست و زیبایی",
    credentialsFa: "بورد تخصصی پوست · ۱۴ سال تجربه بالینی",
    image: images.specialist1,
  },
  {
    id: "s2",
    nameFa: "دکتر سام رستگار",
    roleFa: "جراحی زیبایی و فرم‌دهی صورت",
    credentialsFa: "فلوشیپ زیبایی صورت · عضو انجمن پزشکی زیبایی",
    image: images.specialist2,
  },
  {
    id: "s3",
    nameFa: "نگار سلیمی",
    roleFa: "مسئول درمان‌های لیزر و مراقبت پوست",
    credentialsFa: "کارشناس ارشد فیزیک پزشکی · مدرس دوره‌های لیزر",
    image: images.specialist3,
  },
];

export type GalleryCategory = "all" | "skin" | "laser" | "face" | "wellness";

export const galleryFilters: { id: GalleryCategory; labelFa: string }[] = [
  { id: "all", labelFa: "همه" },
  { id: "skin", labelFa: "پوست" },
  { id: "laser", labelFa: "لیزر" },
  { id: "face", labelFa: "صورت" },
  { id: "wellness", labelFa: "Wellness" },
];

export type GalleryItem = {
  id: string;
  category: Exclude<GalleryCategory, "all">;
  captionFa: string;
  image: string;
  alt: string;
  /** tailwind span classes for the asymmetric editorial grid */
  span: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "skin",
    captionFa: "روتین مراقبت اختصاصی",
    image: images.gallery1,
    alt: "استفاده از سرم مراقبت پوست روی دست",
    span: "md:col-span-7 aspect-[4/3]",
  },
  {
    id: "g2",
    category: "wellness",
    captionFa: "تجربه آرام کلینیک",
    image: images.gallery2,
    alt: "حوله و لباس کتانی تاشده در فضای اسپا",
    span: "md:col-span-5 aspect-[3/4]",
  },
  {
    id: "g3",
    category: "laser",
    captionFa: "درمان لیزری کنترل‌شده",
    image: images.gallery3,
    alt: "انجام درمان لیزر روی پوست صورت با عینک محافظ",
    span: "md:col-span-5 aspect-square",
  },
  {
    id: "g4",
    category: "face",
    captionFa: "تعادل و تناسب چهره",
    image: images.gallery4,
    alt: "پرتره سه‌رخ از چهره‌ای با خطوط طبیعی",
    span: "md:col-span-4 aspect-[3/4]",
  },
  {
    id: "g5",
    category: "wellness",
    captionFa: "مراقبت پس از درمان",
    image: images.gallery5,
    alt: "حوله کتانی و کاسه سرامیکی روی سطح بژ",
    span: "md:col-span-3 aspect-[3/4]",
  },
  {
    id: "g6",
    category: "skin",
    captionFa: "بافت یکدست پوست",
    image: images.gallery6,
    alt: "نمای نزدیک از پیشانی و ابرو با پوست یکدست",
    span: "md:col-span-7 aspect-[16/10]",
  },
  {
    id: "g7",
    category: "face",
    captionFa: "خطوط ظریف صورت",
    image: images.serviceContour,
    alt: "نمای جانبی از خط فک در نور ملایم",
    span: "md:col-span-5 aspect-square",
  },
];

export type Testimonial = {
  id: string;
  quoteFa: string;
  nameFa: string;
  serviceFa: string;
  rating: number;
};

/** Fictional demo testimonials. */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quoteFa:
      "چیزی که برایم مهم بود، طبیعی ماندن چهره‌ام بود. در جلسه اول همه گزینه‌ها با صراحت توضیح داده شد و در نهایت ساده‌ترین مسیر انتخاب شد.",
    nameFa: "س. کریمی",
    serviceFa: "فرم‌دهی صورت",
    rating: 5,
  },
  {
    id: "t2",
    quoteFa:
      "بعد از سال‌ها امتحان کردن روش‌های مختلف، اولین بار بود که کسی وضعیت پوستم را دقیق بررسی کرد و برنامه‌ای مرحله‌به‌مرحله داد.",
    nameFa: "م. توکلی",
    serviceFa: "درمان پوست",
    rating: 5,
  },
  {
    id: "t3",
    quoteFa:
      "جلسات لیزر با آرامش و دقت انجام شد؛ هر بار تنظیمات دستگاه بر اساس واکنش پوستم تغییر می‌کرد. این توجه به جزئیات حس اطمینان می‌داد.",
    nameFa: "ر. نجفی",
    serviceFa: "لیزر",
    rating: 5,
  },
  {
    id: "t4",
    quoteFa:
      "فضای کلینیک آرام است و حس معاینه پزشکی خشک را ندارد. پیگیری بعد از درمان هم واقعاً انجام شد، نه فقط وعده.",
    nameFa: "ن. اسدی",
    serviceFa: "جوانسازی",
    rating: 5,
  },
  {
    id: "t5",
    quoteFa:
      "انتظار داشتم به من چند پکیج فروخته شود؛ اما پیشنهاد نهایی کوتاه‌تر و کم‌هزینه‌تر از تصورم بود. همین صداقت باعث شد بمانم.",
    nameFa: "ه. شریفی",
    serviceFa: "مشاوره و مراقبت",
    rating: 5,
  },
];

export type ProcessStep = { number: string; titleFa: string; textFa: string };

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    titleFa: "مشاوره",
    textFa:
      "گفت‌وگویی بدون عجله درباره خواسته‌ها، سابقه درمانی و انتظارات واقعی شما از نتیجه.",
  },
  {
    number: "02",
    titleFa: "ارزیابی شخصی",
    textFa:
      "بررسی تخصصی پوست و ساختار چهره با ابزارهای تشخیصی، برای تصمیم‌گیری بر پایه داده نه حدس.",
  },
  {
    number: "03",
    titleFa: "برنامه درمانی",
    textFa:
      "طراحی مسیری مرحله‌ای با زمان‌بندی، هزینه و نتیجه مورد انتظار شفاف؛ پیش از شروع، همه‌چیز روشن است.",
  },
  {
    number: "04",
    titleFa: "پیگیری و مراقبت",
    textFa:
      "کنترل نتیجه در بازه‌های مشخص و اصلاح روتین مراقبت خانگی برای ماندگاری بیشتر.",
  },
];

export type FaqItem = { id: string; questionFa: string; answerFa: string };

export const faqs: FaqItem[] = [
  {
    id: "f1",
    questionFa: "آیا برای دریافت خدمات نیاز به مشاوره اولیه است؟",
    answerFa:
      "بله. هر مسیر درمانی با یک جلسه مشاوره آغاز می‌شود تا وضعیت پوست، سابقه پزشکی و انتظار شما از نتیجه بررسی شود. بدون این مرحله، پیشنهاد درمان دقیق نخواهد بود.",
  },
  {
    id: "f2",
    questionFa: "جلسه مشاوره چقدر طول می‌کشد؟",
    answerFa:
      "به‌طور معمول بین ۳۰ تا ۴۵ دقیقه. در این زمان ارزیابی انجام می‌شود، گزینه‌ها مقایسه می‌شوند و برنامه پیشنهادی همراه با جزئیات هزینه و زمان‌بندی ارائه می‌گردد.",
  },
  {
    id: "f3",
    questionFa: "ماندگاری نتایج چقدر است؟",
    answerFa:
      "بستگی به نوع درمان دارد؛ از چند ماه در روش‌های سطحی تا بیش از یک سال در برنامه‌های ترکیبی. سبک زندگی، مراقبت خانگی و پیگیری منظم نقش تعیین‌کننده‌ای در حفظ نتیجه دارند.",
  },
  {
    id: "f4",
    questionFa: "قبل از درمان چه نکاتی را باید رعایت کرد؟",
    answerFa:
      "خودداری از لایه‌برداری‌های شدید و نور آفتاب مستقیم در روزهای پیش از جلسه، اطلاع دادن داروهای مصرفی و مرطوب نگه داشتن پوست. دستورالعمل کامل پیش از هر جلسه به شما داده می‌شود.",
  },
  {
    id: "f5",
    questionFa: "دوره نقاهت چگونه است؟",
    answerFa:
      "بیشتر درمان‌های ما کم‌تهاجمی هستند و بازگشت به فعالیت روزمره در همان روز امکان‌پذیر است. قرمزی یا حساسیت خفیف ممکن است چند ساعت تا دو روز باقی بماند.",
  },
  {
    id: "f6",
    questionFa: "چطور بهترین روش درمانی را انتخاب کنم؟",
    answerFa:
      "انتخاب روش وظیفه شما نیست. کار ما این است که پس از ارزیابی، گزینه‌های ممکن را با مزایا و محدودیت‌هایشان توضیح دهیم و کم‌ریسک‌ترین مسیر برای رسیدن به نتیجه دلخواه را پیشنهاد کنیم.",
  },
];

export const serviceOptionsFa = [
  "مشاوره عمومی",
  "درمان پوست",
  "لیزر",
  "جوانسازی",
  "فرم‌دهی صورت",
  "مراقبت و Wellness",
];

export const timeOptionsFa = ["صبح (۹ تا ۱۲)", "بعدازظهر (۱۲ تا ۱۶)", "عصر (۱۶ تا ۲۰)"];
