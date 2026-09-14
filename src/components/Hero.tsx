import { useEffect, useState } from "react";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { brand, cta } from "@/content/site";
import { images } from "@/content/images";
import { ButtonLink } from "./Button";
import { usePrefersReducedMotion } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [offset, setOffset] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (reduced || window.innerWidth < 1024) return;
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.12, 90));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="پرتره‌ای آرام از پوستی سالم در فضای کلینیک لوکسورا"
          width={1600}
          height={1200}
          className={cn(
            "size-full object-cover object-center transition-[transform,opacity] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            ready ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
          )}
          style={{ transform: `translateY(${offset}px)` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/70"
          aria-hidden="true"
        />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <p
            className={cn(
              "eyebrow latin text-ink-muted transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            LUXORA — TEHRAN · AESTHETIC & WELLNESS
          </p>

          <h1
            className={cn(
              "latin mt-5 text-ink-foreground transition-all duration-1000 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <span className="block display-xl tracking-[0.16em]">{brand.name}</span>
            <span className="mt-3 block text-[clamp(0.9rem,2.4vw,1.5rem)] tracking-[0.4em] text-accent">
              {brand.taglineEn}
            </span>
          </h1>

          <p
            className={cn(
              "fa-title mt-8 max-w-xl text-ink-foreground transition-all duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            {brand.taglineFa}
          </p>

          <p
            className={cn(
              "fa-body mt-5 max-w-xl text-ink-muted transition-all duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            در لوکسورا هر درمان با ارزیابی تخصصی آغاز می‌شود؛ سپس با تکنولوژی روز و قضاوت
            زیبایی‌شناسانه، مسیری شخصی طراحی می‌کنیم که نتیجه‌اش طبیعی، متناسب و پایدار باشد.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-wrap items-center gap-3 transition-all duration-1000 delay-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <ButtonLink href="#booking" size="lg">
              {cta.bookFa}
              <ArrowLeft className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#services" variant="light" size="lg">
              {cta.servicesFa}
            </ButtonLink>
          </div>

          <ul
            className={cn(
              "mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-light text-ink-muted transition-all duration-1000 delay-500",
              ready ? "opacity-100" : "opacity-0",
            )}
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              کادر درمان دارای بورد تخصصی
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="size-4 text-accent" aria-hidden="true" />
              تجهیزات نسل جدید و پروتکل‌های استاندارد
            </li>
          </ul>
        </div>

        <div
          className="mt-14 hidden items-center gap-3 text-ink-muted md:flex"
          aria-hidden="true"
        >
          <span className="eyebrow latin text-ink-muted">SCROLL</span>
          <span className="relative h-10 w-px overflow-hidden bg-ink-foreground/20">
            <span className="absolute inset-x-0 top-0 h-4 animate-[scrollHint_2.4s_ease-in-out_infinite] bg-accent" />
          </span>
        </div>
      </div>

      <style>{`@keyframes scrollHint{0%{transform:translateY(-100%)}60%,100%{transform:translateY(300%)}}`}</style>
    </section>
  );
}
