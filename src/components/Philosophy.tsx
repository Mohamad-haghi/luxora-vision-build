import { images } from "@/content/images";
import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const pillars = [
  {
    titleFa: "تصمیم بر پایه دانش",
    textFa:
      "هر پیشنهاد درمانی به شواهد علمی و ارزیابی بالینی تکیه دارد، نه به مد روز یا خواسته لحظه‌ای.",
  },
  {
    titleFa: "احترام به تفاوت‌ها",
    textFa:
      "چهره‌ها یکسان نیستند؛ برنامه درمانی هم نباید یکسان باشد. تناسب فردی مبنای کار ماست.",
  },
  {
    titleFa: "ظرافت در اجرا",
    textFa: "کمترین دخالت ممکن برای بهترین نتیجه ممکن؛ تغییری که به چشم نمی‌آید اما دیده می‌شود.",
  },
];

export function Philosophy() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="philosophy" className="section-y scroll-mt-20 bg-sand">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div ref={ref} className="relative">
            <img
              src={images.philosophy}
              alt="فضای پذیرش کلینیک لوکسورا با متریال طبیعی و نور ملایم"
              loading="lazy"
              className={cn(
                "aspect-[4/5] w-full object-cover media-mask",
                inView && "media-mask-in",
              )}
            />
            <div className="absolute -bottom-6 end-6 flex size-24 flex-col items-center justify-center rounded-full bg-ink text-ink-foreground md:size-28">
              <span className="latin text-xl">10+</span>
              <span className="latin text-[0.625rem] tracking-[0.2em]">YEARS</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:ps-8">
          <Reveal>
            <span className="eyebrow latin">THE LUXORA PHILOSOPHY</span>
            <h2 className="fa-title mt-5">نگاه ما به زیبایی</h2>
            <span className="mt-8 block h-px w-16 bg-border-strong" aria-hidden="true" />
            <p className="fa-body mt-8">
              زیبایی برای ما نتیجه جمعِ سه چیز است: دانش پزشکی، تکنولوژی قابل اعتماد و قضاوت
              زیبایی‌شناسانه. اگر یکی از این سه غایب باشد، نتیجه یا بی‌اثر می‌شود یا غیرطبیعی.
            </p>
            <p className="fa-body mt-4">
              ما به مراجع اجازه می‌دهیم بداند چه چیزی ممکن است و چه چیزی نیست. همین شفافیت،
              پایه‌ی اعتمادی است که ده سال روی آن ساخته‌ایم.
            </p>
          </Reveal>

          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.titleFa}
                delay={((i + 1) * 80) as 80 | 160 | 240}
                className="border-t border-border pt-5"
              >
                <dt className="text-sm font-medium">{pillar.titleFa}</dt>
                <dd className="fa-body mt-3 text-sm">{pillar.textFa}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
