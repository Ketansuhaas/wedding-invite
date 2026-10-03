"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { wedding } from "@/config/wedding";
import { Countdown } from "@/components/Countdown";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/travel", label: "Getting There" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // `trailingSlash` means pathname is "/events/", so compare loosely.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-ivory/25 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-display italic text-xl tracking-wide text-ink transition-colors hover:text-gold"
            onClick={() => setOpen(false)}
          >
            {wedding.partnerA} <span className="text-gold">&</span>{" "}
            {wedding.partnerB}
          </Link>

          {/* Its own pill: the header bar itself is nearly transparent, so the
              countdown needs a brighter ground of its own to stay legible over
              the photograph. Hidden on the narrowest screens, where the
              wordmark and menu button already fill the bar. */}
          <div className="hidden rounded-full border border-gold/40 bg-ivory/80 px-4 py-1.5 backdrop-blur-md sm:block">
            <Countdown date={wedding.weddingDate} compact />
          </div>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors hover:text-gold ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 p-2 text-ink md:hidden"
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M5 5l12 12" />
                <path d="M17 5L5 17" />
              </>
            ) : (
              <>
                <path d="M3 6h16" />
                <path d="M3 11h16" />
                <path d="M3 16h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-line/50 bg-ivory/70 px-6 pb-4 backdrop-blur-md md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block py-3 text-sm tracking-wide ${
                  isActive(link.href) ? "text-gold" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
