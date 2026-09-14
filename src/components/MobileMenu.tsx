import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand, contact, cta, navLinks } from "@/content/site";
import { ButtonLink } from "./Button";
import { WhatsAppButton } from "./WhatsAppButton";

type Props = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="منوی موبایل"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] bg-ink text-ink-foreground transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <span className="latin text-xl tracking-[0.34em]">{brand.name}</span>
        <button
          type="button"
          aria-label="بستن منو"
          onClick={onClose}
          className="grid size-11 place-items-center rounded-sm border border-ink-foreground/30 hover:bg-ink-foreground/10"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="ناوبری موبایل" className="shell mt-6">
        <ul className="divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between py-5 text-lg font-light transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <span>{link.labelFa}</span>
                <span className="latin text-xs text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <ButtonLink href="#booking" onClick={onClose} variant="light" size="lg">
            {cta.bookFa}
          </ButtonLink>
          <WhatsAppButton variant="ghost" size="lg" className="text-ink-foreground" />
        </div>

        <div className="mt-10 space-y-2 text-sm font-light text-ink-muted">
          <p>{contact.phoneFa}</p>
          <p>{contact.email}</p>
          <p>{contact.hoursFa}</p>
        </div>
      </nav>
    </div>
  );
}
