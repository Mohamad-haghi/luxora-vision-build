import { processSteps } from "@/content/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="section-y bg-sand">
      <div className="shell">
        <SectionHeading
          index="06"
          latin="YOUR LUXORA JOURNEY"
          titleFa="مسیر شما در لوکسورا"
          descriptionFa="چهار مرحله روشن، از اولین گفت‌وگو تا پیگیری نتیجه."
        />

        <ol className="mt-14 grid gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {processSteps.map((step, i) => (
            <li key={step.number}>
              <Reveal
                delay={(i * 80) as 0 | 80 | 160 | 240}
                className="h-full border-t border-border-strong pt-6 lg:pe-6"
              >
                <span className="latin block text-4xl font-light text-gold">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-medium">{step.titleFa}</h3>
                <p className="fa-body mt-3 text-sm">{step.textFa}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
