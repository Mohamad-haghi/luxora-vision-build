import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans text-[0.8125rem] font-medium tracking-[0.08em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const variants: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground border border-primary hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
  outline:
    "border border-border-strong text-foreground hover:border-primary hover:bg-secondary hover:-translate-y-0.5",
  light:
    "border border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground hover:text-ink hover:-translate-y-0.5",
  ghost: "text-foreground hover:text-gold",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5",
  lg: "min-h-12 px-7 py-3",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
