import { ArrowLeft } from "lucide-react";
import { services, type Service } from "@/content/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function ServiceCard({
  service,
  ratio,
  className,
}: {
  service: Service;
  ratio: string;
  className?: string;
}) {
  return (
    <a
      href="#booking"
      className={cn("group block", className)}
      aria-label={`${service.titleFa} — رزرو مشاوره`}
    >
      <div className={cn("relative overflow-hidden bg-muted", ratio)}>
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden="true"
        />
        <span className="latin absolute end-4 top-4 text-xs tracking-[0.24em] text-ink-foreground/80">
          {service.index}
        </span>
      </div>

      <div className="flex items-start justify-between gap-6 border-b border-border py-5">
        <div>
          <h3 className="text-lg font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1">
            {service.titleFa}
            <span className="latin ms-3 text-xs tracking-[0.2em] text-muted-foreground">
              {service.latin}
            </span>
          </h3>
          <p className="fa-body mt-2 max-w-sm text-sm">{service.descriptionFa}</p>
        </div>
        <span
          className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-border transition-[transform,border-color,background-color] duration-500 group-hover:-translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
          aria-hidden="true"
        >
          <ArrowLeft className="size-4" />
        </span>
      </div>
    </a>
  );
}

export function Services() {
  const [first, second, third, fourth, fifth] = services;

  return (
    <section id="services" className="section-y scroll-mt-20 bg-background">
      <div className="shell">
        <SectionHeading
          index="01"
          latin="SERVICES"
          titleFa="خدمات تخصصی لوکسورا"
          descriptionFa="پنج حوزه اصلی که هرکدام با پروتکل مستقل، تجهیزات اختصاصی و تیم آموزش‌دیده ارائه می‌شوند."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ServiceCard service={first} ratio="aspect-[4/5] md:aspect-[16/11]" />
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5 lg:mt-16">
            <ServiceCard service={second} ratio="aspect-[4/3]" />
          </Reveal>

          <Reveal delay={160} className="lg:col-span-4">
            <ServiceCard service={third} ratio="aspect-[3/4]" />
          </Reveal>

          <Reveal delay={240} className="lg:col-span-4 lg:mt-14">
            <ServiceCard service={fourth} ratio="aspect-[3/4]" />
          </Reveal>

          <Reveal delay={320} className="lg:col-span-4 lg:mt-28">
            <ServiceCard service={fifth} ratio="aspect-[3/4]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
