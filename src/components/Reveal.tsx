import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 80 | 160 | 240 | 320;
  as?: ElementType;
};

const delayClass: Record<number, string> = {
  0: "",
  80: "[transition-delay:80ms]",
  160: "[transition-delay:160ms]",
  240: "[transition-delay:240ms]",
  320: "[transition-delay:320ms]",
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", delayClass[delay], inView && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}
