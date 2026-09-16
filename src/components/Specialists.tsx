import { ArrowLeft } from "lucide-react";
import { specialists } from "@/content/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Specialists() {
  return (
    <section id="specialists" className="section-y scroll-mt-20 bg-surface-soft">
      <div className="shell">
        <SectionHeading
          index="03"
          latin="SPECIALISTS"
          titleFa="تیم متخصصین"
          descriptionFa="کادر درمان لوکسورا؛ ترکیبی از تخصص پزشکی و تجربه بالینی چندساله."
        />

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {specialists.map((person, i) => (
            <li key={person.id}>
              <Reveal delay={(i * 80) as 0 | 80 | 160}>
                <a href="#booking" className="group block">
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={person.image}
                      alt={`پرتره ${person.nameFa}، ${person.roleFa}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-border py-5">
                    <div>
                      <h3 className="text-base font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1">
                        {person.nameFa}
                      </h3>
                      <p className="mt-1 text-sm font-light text-muted-foreground">
                        {person.roleFa}
                      </p>
                      <p className="mt-2 text-xs font-light text-muted-foreground">
                        {person.credentialsFa}
                      </p>
                    </div>
                    <span
                      className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-border transition-[transform,border-color,background-color] duration-500 group-hover:-translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      aria-hidden="true"
                    >
                      <ArrowLeft className="size-4" />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs font-light text-muted-foreground">
          پروفایل‌های این بخش نمونه و فرضی هستند و به افراد واقعی اشاره نمی‌کنند.
        </p>
      </div>
    </section>
  );
}
