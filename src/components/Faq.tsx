import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/content/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="section-y scroll-mt-20 bg-surface-soft">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            index="07"
            latin="FAQ"
            titleFa="سؤالات متداول"
            descriptionFa="اگر پاسخ پرسش شما اینجا نبود، در واتساپ پیام بدهید."
          />
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-border">
            {faqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <li key={item.id} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`panel-${item.id}`}
                      id={`trigger-${item.id}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-start transition-colors duration-300 hover:text-gold"
                    >
                      <span className="text-base font-normal md:text-lg">
                        {item.questionFa}
                      </span>
                      <Plus
                        className={cn(
                          "mt-1 size-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isOpen && "rotate-45",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={`panel-${item.id}`}
                    role="region"
                    aria-labelledby={`trigger-${item.id}`}
                    hidden={!isOpen}
                    className="grid transition-all duration-500"
                  >
                    <p className="fa-body max-w-2xl pb-7 text-sm">{item.answerFa}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
