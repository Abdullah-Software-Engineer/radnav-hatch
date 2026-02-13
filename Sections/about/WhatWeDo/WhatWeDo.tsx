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
      className="relative w-full px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        {/* Rounded container: background image + overlay + content + cards */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background image + overlay — behind the cards */}
          <div className="relative aspect-4/3 min-h-[320px] sm:aspect-21/9 sm:min-h-[380px] md:min-h-[420px]">
            <Image
              src="/what-we-do/Mask%20group.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={false}
            />
          
            {/* Title and subtitle — top-left, above overlay */}
            <div className="absolute left-0 top-0 z-10 p-6 sm:p-8 md:p-10 lg:p-12">
              <h2
                id="what-we-do-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
              >
                What We Do
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/95 sm:mt-4 sm:text-lg">
                Specialized radiology staffing solutions designed to support care
                teams and maintain continuity.
              </p>
            </div>
          </div>

          {/* White cards — in front, anchored at bottom of background */}
          <div className="absolute bottom-[20px] left-0 right-0 z-20 px-4 pb-0 pt-0 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8">
              {CARDS.map(({ title, description, icon }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-xl  bg-white p-6 shadow-lg shadow-gray-900/15 sm:p-7 "
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1E3A5F] text-white">
                    {icon}
                  </div>
                  <h3 className="text-base font-bold text-[#1F2937] sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
