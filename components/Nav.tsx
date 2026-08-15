"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Note: /poc is a redirect to / and is deliberately not listed here, so the
// nav never offers two links that land on the same page.
const links = [
  { href: "/", label: "Proof of Concept" },
  { href: "/screener", label: "Screener Responses" },
  { href: "/about", label: "How It Was Built" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {links.map(({ href, label }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={
              "text-sm font-medium tracking-wide transition-colors " +
              (isActive
                ? "text-white border-b-2 border-blue-400 pb-0.5"
                : "text-gray-400 hover:text-gray-200")
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
