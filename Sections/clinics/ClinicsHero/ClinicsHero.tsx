"use client";

import Link from "next/link";
import Image from "next/image";

export default function ClinicsHero() {
  return (
    <section
      className="relative w-full pt-24 pb-0 sm:pt-28 md:pt-32 lg:pt-36"
      aria-label="Clinics hero"
    >
      {/* Full Width Container - 20px margins, 20px border radius (contains image) */}
      <div className="relative mx-5 overflow-hidden rounded-[20px] sm:mx-5 md:mx-5 lg:mx-5">
        {/* Background image - full width, absolute to cover content height */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/clinics/Mask.webp"
            alt="Radiology technologists and healthcare professionals"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Content Container - 1390px max-width, no left padding (contains title, subtitle) */}
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1380px] pl-4 pr-4 sm:pl-0 sm:pr-6 lg:pr-8">
            <div className="flex min-h-[400px] flex-col justify-center py-8 sm:min-h-[450px] sm:py-10 md:min-h-[500px] md:py-12 lg:min-h-[550px]">
              {/* Title and subtitle — top-left of the 1390px container */}
              <div className="pl-4 sm:pl-6 lg:pl-8">
                <h1
                  className="text-[30px] font-bold tracking-tight text-white md:text-[30px] lg:text-[48px] xl:text-[48px]"
                >
                  Reliable Radiology Staffing for Your Facility
                </h1>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/95 sm:mt-4 md:text-[14px] lg:text-[16px] xl:text-[16px]">
                  From emergency coverage to long-term placements, we connect you with experienced, credentialed radiology technologists who seamlessly integrate with your team.
                </p>
                <div className="mt-8 sm:mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2E5D81] shadow-md transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-4 lg:text-[14px] xl:text-[16px]"
                  >
                    Contact Us
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
        </div>
      </div>
    </section>
  );
}
