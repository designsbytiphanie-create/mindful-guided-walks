import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "primary-inverted"
  | "secondary"
  | "secondary-inverted";

const base =
  "inline-flex items-center justify-center rounded-[22px_2px_22px_2px] px-6 py-3 text-base font-semibold transition-colors";

// Single rule, no exceptions: filled buttons are Fern on light backgrounds,
// Lichen on dark backgrounds. Hover on dark backgrounds brightens to Birch.
const variants: Record<ButtonVariant, string> = {
  primary: "bg-fern text-forest-ink hover:bg-deep-moss hover:text-birch",
  "primary-inverted": "bg-lichen text-forest-ink hover:bg-birch",
  secondary:
    "ring-1 ring-inset ring-loam bg-transparent text-forest-ink hover:bg-loam/10",
  "secondary-inverted":
    "ring-1 ring-inset ring-birch bg-transparent text-birch hover:bg-birch/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
