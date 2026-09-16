import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { brand, contact, navLinks } from "@/content/site";
import { services } from "@/content/data";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

/** Newsletter handler placeholder — connect to email provider / CRM later. */
async function subscribe(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (import.meta.env.DEV) console.info("[LUXORA] newsletter", email);
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "invalid">("idle");
useEffect(() => {
  if (state !== "done") return;

  const timer = window.setTimeout(() => {
    setState("idle");
  }, 3000);

  return () => window.clearTimeout(timer);
}, [state]);
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setState("invalid");
      return;
    }
    setState("loading");
    await subscribe(email);
    setState("done");
    setEmail("");
  };

  return (
    <div>
      <span className="eyebrow latin text-ink-muted">LUXORA NOTES</span>
      <p className="fa-body mt-4 text-sm text-ink-muted">
        ماهی یک بار، یادداشت کوتاهی درباره مراقبت از پوست، روش‌های تازه و تجربه‌های کلینیک.
      </p>

      {state === "done" ? (
        <p role="status" className="mt-6 flex items-center gap-2 text-sm text-accent">
          <Check className="size-4" aria-hidden="true" />
          ثبت شد؛ از همراهی شما سپاسگزاریم.
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              ایمیل شما
            </label>
            <input
              id="newsletter-email"
              type="email"
              dir="ltr"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state === "invalid") setState("idle");
              }}
              aria-invalid={state === "invalid"}
              aria-describedby={state === "invalid" ? "newsletter-error" : undefined}
              placeholder="email@example.com"
              className={cn(
                "min-h-12 w-full rounded-sm border bg-transparent px-4 text-start text-sm font-light text-ink-foreground placeholder:text-ink-muted/70 focus:border-accent focus:outline-none",
                state === "invalid" ? "border-destructive" : "border-ink-foreground/25",
              )}
            />
            {state === "invalid" && (
              <p id="newsletter-error" className="mt-2 text-xs text-destructive">
                ایمیل معتبر وارد کنید.
              </p>
            )}
          </div>
          <Button type="submit" variant="light" disabled={state === "loading"}>
            عضویت
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell border-t border-ink-foreground/10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <span className="latin text-2xl tracking-[0.34em]">{brand.name}</span>
            <p className="latin mt-3 text-xs tracking-[0.32em] text-accent">
              {brand.taglineEn}
            </p>
            <p className="fa-body mt-6 max-w-sm text-sm text-ink-muted">
              کلینیک زیبایی و سلامت پوست؛ جایی که تصمیم‌های درمانی بر پایه دانش گرفته می‌شود و
              نتیجه، طبیعی می‌ماند.
            </p>
          </div>

          <nav aria-label="پیوندهای فوتر" className="lg:col-span-2">
            <h2 className="eyebrow latin text-ink-muted">MENU</h2>
            <ul className="mt-5 space-y-3 text-sm font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
                  >
                    {link.labelFa}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow latin text-ink-muted">SERVICES</h2>
            <ul className="mt-5 space-y-3 text-sm font-light">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
                  >
                    {service.titleFa}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-2">
            <h2 className="eyebrow latin text-ink-muted">CONTACT</h2>
            <ul className="mt-5 space-y-3 text-sm font-light text-ink-muted">
              <li>{contact.cityFa}</li>
              <li>
                <a href={contact.phoneHref} className="hover:text-ink-foreground">
                  {contact.phoneFa}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-ink-foreground">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink-foreground"
                >
                  {contact.instagramHandle}
                </a>
              </li>
              <li>{contact.hoursFa}</li>
            </ul>
          </address>

          <div className="lg:col-span-2">
            <Newsletter />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/10 pt-6 text-xs font-light text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© ۲۰۲۶ {brand.name}. نمونه نمایشی — تمام اطلاعات کسب‌وکار فرضی است.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#faq" className="hover:text-ink-foreground">
                حریم خصوصی
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-ink-foreground">
                شرایط استفاده
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
