"use client";

import Image from "next/image";
import Link from "next/link";

export default function ScheduleCTA() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="schedule-cta-heading"
    >
      <div className="mx-auto w-full max-w-[85%] sm:max-w-[80%] lg:max-w-full">
        {/* Rounded container with background image + overlay + content */}
        <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl lg:rounded-[2.5rem]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/home/sechdule-cta/Rectangle.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              aria-hidden
            />
          </div>
        
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
            <h2
              id="schedule-cta-heading"
              className="max-w-4xl text-[22px] leading-snug text-white sm:text-[26px] md:text-[30px] lg:text-[48px] xl:text-[48px] md:leading-snug"
            >
              Ease workload pressure and maintain high-quality care with expert
              radiology navigators built to support your team.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-6 py-4 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#0EA5E9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 sm:mt-10 sm:px-8 sm:py-4"
            >
              Schedule a conversation today
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
