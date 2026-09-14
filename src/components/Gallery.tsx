import { useMemo, useState } from "react";
import { galleryFilters, galleryItems, type GalleryCategory } from "@/content/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("all");

  const items = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active],
  );

  return (
    <section id="results" className="section-y scroll-mt-20 bg-background">
      <div className="shell">
        <SectionHeading
          index="04"
          latin="RESULTS"
          titleFa="نتایج و فضای کلینیک"
          descriptionFa="گزیده‌ای از درمان‌ها، جزئیات مراقبت و فضای کاری لوکسورا."
        />

        <div className="mt-10 flex flex-wrap gap-2 md:mt-14" role="group" aria-label="فیلتر نتایج">
          {galleryFilters.map((filter) => {
            const isActive = filter.id === active;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(filter.id)}
                className={cn(
                  "min-h-11 rounded-sm border px-5 text-[0.8125rem] font-light transition-[background-color,color,border-color,transform] duration-300",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {filter.labelFa}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={((i % 4) * 80) as 0 | 80 | 160 | 240}
              className={cn("group relative overflow-hidden bg-muted", item.span)}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 text-ink-foreground opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
                <span className="text-sm font-light">{item.captionFa}</span>
                <span className="latin text-[0.625rem] tracking-[0.2em] text-accent">
                  {item.category.toUpperCase()}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="fa-body mt-10">در این دسته فعلاً نمونه‌ای ثبت نشده است.</p>
        )}
      </div>
    </section>
  );
}
