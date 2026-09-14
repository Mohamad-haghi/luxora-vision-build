import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand, cta, navLinks } from "@/content/site";
import { ButtonLink } from "./Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-border bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
          <a
            href="#top"
            className={cn(
              "latin shrink-0 text-xl tracking-[0.34em] transition-colors duration-500 md:text-2xl",
              scrolled ? "text-foreground" : "text-ink-foreground",
            )}
          >
            {brand.name}
          </a>

          <nav aria-label="ناوبری اصلی" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative py-2 text-[0.8125rem] font-light transition-colors duration-300",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100",
                      scrolled
                        ? "text-foreground hover:text-gold"
                        : "text-ink-foreground/90 hover:text-ink-foreground",
                    )}
                  >
                    {link.labelFa}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="#booking"
              variant={scrolled ? "solid" : "light"}
              className="hidden sm:inline-flex"
            >
              {cta.bookFa}
            </ButtonLink>

            <button
              type="button"
              aria-label="باز کردن منو"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={cn(
                "grid size-11 place-items-center rounded-sm border transition-colors duration-300 lg:hidden",
                scrolled
                  ? "border-border text-foreground hover:bg-secondary"
                  : "border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10",
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
