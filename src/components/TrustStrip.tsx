import { stats } from "@/content/data";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section aria-label="آمار و اعتبار" className="border-b border-border bg-sand">
      <div className="shell py-10 md:py-14">
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.labelFa}
              delay={(i * 80) as 0 | 80 | 160 | 240}
              className="border-border ps-4 md:ps-8 [&:not(:first-child)]:border-s"
            >
              <dt className="sr-only">{stat.labelFa}</dt>
              <dd>
                <span className="latin block text-3xl font-light md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs font-light text-muted-foreground md:text-sm">
                  {stat.labelFa}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
