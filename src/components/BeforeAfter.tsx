import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { images } from "@/content/images";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      event.preventDefault();
      setFromClientX(event.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (event.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <section className="section-y bg-background">
      <div className="shell">
        <SectionHeading
          index="02"
          latin="BEFORE / AFTER"
          titleFa="پیش و پس از درمان"
          descriptionFa="نوار مقایسه را با نگه‌داشتن و کشیدن جابه‌جا کنید تا تفاوت را ببینید."
        />

        <Reveal className="mt-12 md:mt-16">
          <div
            ref={containerRef}
            className="relative aspect-[4/5] w-full select-none overflow-hidden bg-muted sm:aspect-[16/10]"
            onPointerDown={(event) => {
              draggingRef.current = true;
              setFromClientX(event.clientX);
            }}
            style={{ touchAction: "none" }}
          >
            <img
              src={images.baAfter}
              alt="نمونه وضعیت پوست پس از دوره درمان"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={images.baBefore}
                alt="نمونه وضعیت پوست پیش از شروع درمان"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>

            <span className="latin absolute start-4 top-4 rounded-sm bg-ink/70 px-3 py-1 text-[0.6875rem] tracking-[0.2em] text-ink-foreground">
              BEFORE
            </span>
            <span className="latin absolute end-4 top-4 rounded-sm bg-background/85 px-3 py-1 text-[0.6875rem] tracking-[0.2em] text-foreground">
              AFTER
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
              style={{ left: `${position}%` }}
            />

            <div
              role="slider"
              tabIndex={0}
              aria-label="نوار مقایسه پیش و پس از درمان"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={onKeyDown}
              onPointerDown={() => {
                draggingRef.current = true;
              }}
              className="absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-background/70 bg-background text-foreground shadow-[var(--shadow-lift)]"
              style={{ left: `${position}%` }}
            >
              <MoveHorizontal className="size-5" aria-hidden="true" />
            </div>
          </div>

          <p className="mt-4 text-xs font-light text-muted-foreground">
            نتایج درمان بسته به شرایط هر فرد متفاوت است. تصاویر این بخش نمونه‌ای و صرفاً برای
            نمایش هستند.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
