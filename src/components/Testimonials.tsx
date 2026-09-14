import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/content/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.min(testimonials.length - 1, Math.max(0, next));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft * (track.dir === "rtl" ? 1 : 1), behavior: "smooth" });
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setIndex(clamped);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let min = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(childCenter - center);
        if (distance < min) {
          min = distance;
          closest = i;
        }
      });
      setIndex(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section-y bg-ink text-ink-foreground">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="05"
            latin="CLIENT STORIES"
            titleFa="تجربه مراجعین"
            descriptionFa="روایت‌هایی از مسیر درمان در لوکسورا."
            tone="dark"
          />

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="مورد قبلی"
              onClick={() => scrollToIndex(index - 1)}
              className="grid size-11 place-items-center rounded-full border border-ink-foreground/25 transition-colors duration-300 hover:bg-ink-foreground hover:text-ink"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="مورد بعدی"
              onClick={() => scrollToIndex(index + 1)}
              className="grid size-11 place-items-center rounded-full border border-ink-foreground/25 transition-colors duration-300 hover:bg-ink-foreground hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:mt-16 md:gap-8"
        >
          {testimonials.map((item) => (
            <li
              key={item.id}
              className="w-[85%] shrink-0 snap-center border border-ink-foreground/12 p-6 sm:w-[60%] md:p-9 lg:w-[38%]"
            >
              <div className="flex gap-1" aria-label={`امتیاز ${item.rating} از ۵`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="fa-body mt-6 text-ink-foreground/90">
                «{item.quoteFa}»
              </blockquote>
              <footer className="mt-8 flex items-center justify-between border-t border-ink-foreground/12 pt-5">
                <span className="text-sm">{item.nameFa}</span>
                <span className="text-xs font-light text-ink-muted">{item.serviceFa}</span>
              </footer>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center gap-2" aria-hidden="true">
          {testimonials.map((item, i) => (
            <span
              key={item.id}
              className={cn(
                "h-px transition-all duration-500",
                i === index ? "w-10 bg-accent" : "w-5 bg-ink-foreground/25",
              )}
            />
          ))}
        </div>

        <p className="mt-8 text-xs font-light text-ink-muted">
          نام‌ها و روایت‌ها نمونه و فرضی هستند.
        </p>
      </div>
    </section>
  );
}
