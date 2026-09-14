import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index?: string;
  latin: string;
  titleFa: string;
  descriptionFa?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  index,
  latin,
  titleFa,
  descriptionFa,
  tone = "light",
  align = "start",
  className,
  children,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span
            className={cn(
              "latin text-sm",
              dark ? "text-ink-muted" : "text-muted-foreground",
            )}
          >
            {index}
          </span>
        )}
        <span
          className={cn("h-px w-10", dark ? "bg-ink-muted/40" : "bg-border-strong")}
          aria-hidden="true"
        />
        <span className={cn("eyebrow latin", dark && "text-ink-muted")}>{latin}</span>
      </div>

      <h2
        className={cn(
          "fa-title mt-5 max-w-2xl",
          align === "center" && "mx-auto",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {titleFa}
      </h2>

      {descriptionFa && (
        <p
          className={cn(
            "fa-body mt-4 max-w-xl",
            align === "center" && "mx-auto",
            dark && "text-ink-muted",
          )}
        >
          {descriptionFa}
        </p>
      )}

      {children}
    </Reveal>
  );
}
