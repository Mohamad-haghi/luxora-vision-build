import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/content/site";
import { images } from "@/content/images";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

const rows = [
  { icon: MapPin, labelFa: "نشانی", value: `${contact.cityFa} — ${contact.addressFa}`, href: undefined },
  { icon: Phone, labelFa: "تلفن", value: contact.phoneFa, href: contact.phoneHref },
  { icon: Mail, labelFa: "ایمیل", value: contact.email, href: `mailto:${contact.email}` },
  {
    icon: Instagram,
    labelFa: "اینستاگرام",
    value: contact.instagramHandle,
    href: contact.instagramUrl,
  },
  { icon: Clock, labelFa: "ساعات کاری", value: contact.hoursFa, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="section-y scroll-mt-20 bg-surface-soft">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            index="09"
            latin="CONTACT"
            titleFa="تماس با لوکسورا"
            descriptionFa="برای پرسش‌های کوتاه واتساپ سریع‌ترین راه است؛ برای رزرو، فرم مشاوره را تکمیل کنید."
          />

          <dl className="mt-10 border-t border-border">
            {rows.map((row, i) => (
              <Reveal
                key={row.labelFa}
                delay={((i % 4) * 80) as 0 | 80 | 160 | 240}
                className="flex items-start gap-4 border-b border-border py-5"
              >
                <row.icon className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-light text-muted-foreground">{row.labelFa}</dt>
                  <dd className="mt-1 text-sm">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="transition-colors duration-300 hover:text-gold"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <div className="mt-8">
            <WhatsAppButton />
          </div>

          <p className="mt-8 text-xs font-light text-muted-foreground">
            اطلاعات تماس این صفحه نمایشی و فرضی است.
          </p>
        </div>

        <Reveal className="lg:col-span-6">
          <img
            src={images.contactRoom}
            alt="اتاق درمان لوکسورا در نور ملایم شب"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
          />
        </Reveal>
      </div>
    </section>
  );
}
