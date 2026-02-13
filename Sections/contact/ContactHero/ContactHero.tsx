"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      className="relative w-full bg-white px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:px-8 lg:pt-36 lg:pb-28"
      aria-label="Contact hero"
    >
      <div className="mx-auto w-full max-w-[1390px]">
        {/* Rounded container with bg image + overlay */}
        <div className="relative overflow-hidden rounded-[50px] min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px]">
          {/* Background image */}
          <Image
            src="/get-in-touch/Mask.webp"
            alt="Professional working at desk"
            width={1280}
            height={800}
            className="absolute inset-0 h-full w-full object-cover blur-sm"
            priority
          />
          
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-[#1a4d6f]/80" />

          {/* Content — centered */}
          <div className="relative z-10 flex h-full min-h-[420px] flex-col items-center justify-center px-6 py-14 text-center sm:min-h-[480px] sm:px-10 sm:py-16 md:min-h-[520px] md:px-14 md:py-20 lg:min-h-[560px] lg:px-16 lg:py-24">
            <h1 className="text-[30px] font-bold leading-tight text-white md:text-[30px] lg:text-[48px] xl:text-[48px] lg:leading-[1.2] max-w-4xl">
              Let&apos;s Talk About Your Staffing Needs
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-white/95 sm:mt-7 md:text-[16px] lg:text-[16px] xl:text-[18px] max-w-2xl">
              Whether you&apos;re a healthcare facility seeking reliable radiology staffing or a technologist exploring new opportunities, we&apos;re here to help.
            </p>
            <div className="mt-10 sm:mt-12">
              <Link
                href="#get-in-touch"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-[#1a4d6f] shadow-md transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-4 lg:text-[14px] xl:text-[16px]"
              >
                Learn More About Us
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

