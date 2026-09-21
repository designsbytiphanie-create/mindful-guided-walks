import Link from "next/link";
import type { ReactNode } from "react";

export function TextLink({
  href,
  children,
  dark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  const colors = dark
    ? "text-lichen hover:text-birch"
    : "text-loam hover:text-deep-moss";

  return (
    <Link
      href={href}
      className={`inline-block py-2.5 underline decoration-1 underline-offset-4 text-base font-semibold transition-colors ${colors} ${className}`}
    >
      {children}
    </Link>
  );
}
