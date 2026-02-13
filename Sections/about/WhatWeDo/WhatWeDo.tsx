"use client";

import Image from "next/image";

const CARDS = [
  {
    title: "Comprehensive Staffing Solutions",
    description:
      "A complete range of radiology staffing options designed to optimize resources and maintain clinical excellence.",
    icon: (
      <svg
        className="h-8 w-8 sm:h-9 sm:w-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5" />
        <circle cx="16" cy="8" r="3" />
        <path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" />
      </svg>
    ),
  },
  {
    title: "Radiology Navigators",
    description:
      "Dedicated professionals who ensure consistent, top-tier medical imaging support wherever needed, helping facilities maintain efficiency.",
    icon: (
      <svg
        className="h-8 w-8 sm:h-9 sm:w-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M2 12h2l2-4 2 8 2-6 2 2h2" />
      </svg>
    ),
  },
  {
    title: "Technology-Driven Workforce Solutions",
    description:
      "We combine data and innovation to deliver smarter, more accurate staffing solutions.",
    icon: (
      <svg
        className="h-8 w-8 sm:h-9 sm:w-9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        <path d="M12 5.5V8M12 16v2.5M8 12h-2.5M18.5 12H16" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="what-we-do-heading"
    >
      {/* Full Width Container - 20px margins, 20px border radius (contains image) */}
      <div className="relative mx-5 overflow-hidden rounded-[20px] sm:mx-5 md:mx-5 lg:mx-5">
        {/* Background image - full width, absolute to cover content height */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/what-we-do/Mask%20group.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>

        {/* Content Container - 1390px max-width, no left padding (contains title, subtitle, cards) */}
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1380px] pl-4 pr-4 sm:pl-0 sm:pr-6 lg:pr-8">
            <div className="flex flex-col justify-between gap-10 py-8 sm:gap-12 sm:py-10 md:min-h-[500px] md:py-12 lg:min-h-[550px]">
              {/* Title and subtitle — top-left of the 1390px container */}
              <div className="pl-4 sm:pl-6 lg:pl-8">
                <h2
                  id="what-we-do-heading"
                  className="text-[30px] font-bold tracking-tight text-white md:text-[30px] lg:text-[48px] xl:text-[48px]"
                >
                  What We Do
                </h2>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/95 sm:mt-4 md:text-[14px] lg:text-[16px] xl:text-[16px]">
                  Specialized radiology staffing solutions designed to support care
                  teams and maintain continuity.
                </p>
              </div>

              {/* White cards — at bottom of the 1390px container */}
              <div>
                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8">
                  {CARDS.map(({ title, description, icon }) => (
                    <article
                      key={title}
                      className="flex flex-col rounded-xl bg-white p-6 shadow-lg shadow-gray-900/15 sm:p-7"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2E5D81] text-white">
                        {icon}
                      </div>
                      <h3 className="text-[20px] font-bold text-[#171717]">
                        {title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#5B7281]">
                        {description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
