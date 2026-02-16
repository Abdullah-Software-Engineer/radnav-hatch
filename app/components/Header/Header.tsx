"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Technologists", href: "/technologists" },
  { label: "For Clinics", href: "/clinics" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    // Exact match or starts with the href (for nested routes)
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 
        ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-xs"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1390px] items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex shrink-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2 rounded-lg"
          aria-label="Radnav Solutions home"
        >
          <span className="relative flex h-12 w-auto shrink-0 items-center justify-center overflow-hidden sm:h-14">
            <Image
              src="/header/logo.webp"
              alt=""
              width={180}
              height={56}
              className="h-full w-auto object-contain object-center"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            
          </span>
        </Link>

        {/* Desktop nav: glass pill, more transparent when header is transparent */}
        <nav
          className={`hidden items-center gap-1 rounded-full border px-4 py-2 backdrop-blur-md lg:flex ${
            scrolled
              ? "border-[#CDDAE2]/40 bg-[#CDDAE2] dark:border-[#1B557B] dark:bg-[#CDDAE2]"
              : "border-[#CDDAE2]/50 bg-[#CDDAE2] dark:border-[#1B557B] dark:bg-[#CDDAE2]"
          }`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2 ${
                  active
                    ? "text-[#32709D] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:bg-[#32709D]"
                    : "text-[#212424] hover:text-[#32709D] dark:text-[#212424] dark:hover:text-[#5B9AB8]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2E5D81] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2E5D81]/25 transition hover:bg-[#264a6a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#2E5D81] transition hover:bg-[#2E5D81]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          className="border-t border-[#8BA3B6]/30 bg-white/90 px-4 py-4 backdrop-blur-md dark:border-white/10 dark:bg-black/80"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      active
                        ? "bg-[#2E5D81]/10 text-[#32709D]"
                        : "text-[#5B7281] hover:bg-[#2E5D81]/5 hover:text-[#32709D] dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-[#5B9AB8]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-[#8BA3B6]/30 pt-4 dark:border-white/10">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-full bg-[#2E5D81] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#264a6a]"
            >
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
