import { MessageCircle } from "lucide-react";
import { ButtonLink } from "./Button";
import { cta, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "solid" | "outline" | "light" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

/** Single place where the WhatsApp CTA is composed. */
export function WhatsAppButton({ variant = "outline", size = "md", className }: Props) {
  return (
    <ButtonLink
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {cta.whatsappFa}
    </ButtonLink>
  );
}

/** Floating mobile-first contact affordance. */
export function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={cta.whatsappFa}
      className={cn(
        "fixed bottom-5 left-5 z-40 grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)]",
        "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5",
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
    </a>
  );
}
