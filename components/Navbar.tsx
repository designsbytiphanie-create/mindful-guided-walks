"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

const navLinks = [
  { label: "Walks", href: "/walks" },
  { label: "Dates", href: "/dates" },
  { label: "Bedrock Babes", href: "/bedrock-babes" },
  { label: "Corporate", href: "/corporate" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lichen bg-birch">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="heading-type text-xl font-medium text-forest-ink"
        >
          Mindful Guided Walks
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-forest-ink hover:text-deep-moss"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact">Contact</Button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-forest-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-lichen bg-birch px-6 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base text-forest-ink hover:text-deep-moss"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-2 w-fit">
            Contact
          </Button>
        </nav>
      )}
    </header>
  );
}
