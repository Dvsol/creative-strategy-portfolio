"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/breakdowns", label: "Breakdowns" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const navItems = NAV.map((item) => ({
    ...item,
    label: isHome && item.href === "/breakdowns" ? "Field Notes" : item.label,
  }));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className={`mx-auto flex h-14 max-w-6xl items-center justify-between md:px-8 ${isHome ? "px-3 sm:px-5" : "px-5"}`}>
        <Link href="/" className={`group flex items-baseline gap-2 ${isHome ? "shrink-0 whitespace-nowrap" : ""}`}>
          <span className="display text-lg font-semibold tracking-tight">
            Field Notes
          </span>
          <span className="annotation hidden text-faint transition-colors group-hover:text-accent sm:inline">
            / why it worked
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={isHome && item.href === "/work-with-me"
                    ? "annotation inline-flex min-h-11 items-center bg-ink px-4 py-3 text-paper transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    : `annotation transition-colors hover:text-accent ${
                    isActive(item.href) ? "text-accent" : "text-soft"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
        {isHome && (
          <Link href="/work-with-me" className="annotation inline-flex min-h-11 shrink-0 items-center whitespace-nowrap bg-ink px-2 py-2 text-paper transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Work With Me
          </Link>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`annotation border border-line px-3 py-1.5 text-soft hover:border-ink hover:text-ink md:hidden ${isHome ? "min-h-11" : ""}`}
        >
          {open ? "Close" : "Menu"}
        </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-paper md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {navItems.map((item, i) => (
              <li key={item.href} className={i > 0 ? "border-t border-line" : ""}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-3 text-sm font-medium ${
                    isActive(item.href) ? "text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                  <span className="annotation text-faint">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
