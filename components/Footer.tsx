import Link from "next/link";

const navLinks = [
  { label: "Walks", href: "/walks" },
  { label: "Dates", href: "/dates" },
  { label: "Bedrock Babes", href: "/bedrock-babes" },
  { label: "Corporate", href: "/corporate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-deep-moss text-birch">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="heading-type text-[32px] font-medium">
          Mindful Guided Walks
        </p>
        <p className="mt-1 text-[16px] tracking-widest">
          GO OUTSIDE · GO WITHIN
        </p>
        <p className="mt-4 text-base">North Shore, Massachusetts</p>

        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base hover:text-lichen"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-birch/20 pt-6 text-base">
          <Link href="/liability-waiver" className="hover:text-lichen">
            Liability waiver
          </Link>
          <a
            href="#"
            className="hover:text-lichen"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
