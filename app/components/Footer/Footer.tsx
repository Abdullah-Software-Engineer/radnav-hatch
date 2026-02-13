"use client";

import Link from "next/link";
import { useState } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Technologists", href: "/technologists" },
  { label: "For Clinics", href: "/clinics" },
  { label: "Contact Us", href: "/contact" },
];

const ADDRESS_LINES = [
  "2955 North Milwaukee",
  "Avenue, Chicago, Illinois",
  "60618, United States.",
];

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    // Simulate submit; replace with real API call
    setTimeout(() => {
      setStatus("done");
      setEmail("");
    }, 600);
  };

  return (
    <footer className="bg-[#285A7E] text-white">
      <div className="mx-auto max-w-[1390px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Address */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight">Address</h3>
            <address className="not-italic">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block text-white/95">
                  {line}
                </span>
              ))}
            </address>
            <div className="flex flex-col gap-3 pt-1">
              <a
                href="mailto:info@radnavsolutions.com"
                className="flex items-center gap-2 text-white/95 transition hover:text-white"
              >
                <EnvelopeIcon className="h-5 w-5 shrink-0" />
                <span>info@radnavsolutions.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/95">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                <span>Phone Number</span>
              </div>
            </div>
          </section>

          {/* Stay Updated / Newsletter */}
          <section className="space-y-4 lg:flex lg:flex-col lg:items-center lg:text-center">
            <div>
              <h3 className="text-lg font-bold tracking-tight">Stay Updated</h3>
              <p className="mt-2 text-sm text-white/90">
                Sign up to hear from us about specials events.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md overflow-hidden rounded-full bg-white shadow-lg focus-within:ring-2 focus-within:ring-white/30 focus-within:ring-offset-2 focus-within:ring-offset-[#285A7E]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-[#285A7E] placeholder:text-gray-500 focus:outline-none"
                aria-label="Email for newsletter"
                disabled={status === "submitting"}
              />
              <button
                type="submit"
                className="shrink-0 bg-[#1e4260] px-5 py-3 font-semibold text-white transition hover:bg-[#183550] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-70"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "..." : "Subscribe"}
              </button>
            </form>
            {status === "done" && (
              <p className="text-sm text-white/90">Thanks for subscribing.</p>
            )}
          </section>

          {/* Quick Links */}
          <section className="space-y-4 lg:flex lg:flex-col lg:items-end">
            <h3 className="text-lg font-bold tracking-tight">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/95 transition hover:text-white hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-[1390px] px-4 py-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-white/70">
            ©2026 Radnav Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
