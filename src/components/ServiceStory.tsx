import { ArrowLeft } from "lucide-react";
import { images } from "@/content/images";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const points = [
  { titleFa: "ارزیابی اختصاصی", textFa: "تحلیل بافت، رنگدانه و میزان آب‌رسانی پوست پیش از هر تصمیم." },
  { titleFa: "پروتکل مرحله‌ای", textFa: "ترکیب درمان‌های سطحی و عمقی با فاصله‌های زمانی حساب‌شده." },
  { titleFa: "نتیجه طبیعی", textFa: "هدف، بازگرداندن کیفیت پوست است؛ نه تغییر چهره." },
];

export function ServiceStory() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="bg-ink text-ink-foreground">
      <div className="grid lg:grid-cols-2">
        <div ref={ref} className="relative min-h-[60vw] overflow-hidden lg:min-h-[42rem]">
          <img
            src={images.storySkin}
            alt="پرتره‌ای با پوست شاداب و طبیعی در نور ملایم"
            loading="lazy"
            className={cn(
              "size-full object-cover media-mask",
              inView && "media-mask-in",
            )}
          />
        </div>

        <div className="flex items-center px-5 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow latin text-ink-muted">FEATURED · SKIN RENEWAL</span>
              <h2 className="latin mt-4 display-lg text-ink-foreground">SKIN RENEWAL</h2>
              <p className="fa-title mt-4 text-ink-foreground">بازسازی و جوانسازی پوست</p>
              <p className="fa-body mt-5 text-ink-muted">
                پوست هر فرد تاریخ خودش را دارد؛ آفتاب، ژنتیک، خواب و استرس. ما پیش از پیشنهاد
                هر روشی، این تاریخ را می‌خوانیم و سپس کوتاه‌ترین مسیر ممکن را طراحی می‌کنیم.
              </p>
            </Reveal>

            <dl className="mt-10 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
              {points.map((point, i) => (
                <Reveal
                  key={point.titleFa}
                  delay={((i + 1) * 80) as 80 | 160 | 240}
                  className="flex gap-6 py-5"
                >
                  <dt className="w-32 shrink-0 text-sm font-medium">{point.titleFa}</dt>
                  <dd className="fa-body text-sm text-ink-muted">{point.textFa}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={160} className="mt-10">
              <ButtonLink href="#booking" variant="light" size="lg">
                رزرو مشاوره پوست
                <ArrowLeft className="size-4" aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
