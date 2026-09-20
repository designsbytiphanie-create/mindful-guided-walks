import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "primary-inverted";

const base =
  "inline-flex items-center justify-center rounded-[22px_2px_22px_2px] px-6 py-3 text-base font-semibold transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-fern text-forest-ink hover:bg-deep-moss hover:text-birch",
  "primary-inverted": "bg-birch text-forest-ink hover:bg-lichen",
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
