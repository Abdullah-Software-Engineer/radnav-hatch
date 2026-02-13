"use client";

import Link from "next/link";
import Image from "next/image";

export default function ClinicsHero() {
  return (
    <section
      className="relative w-full bg-white px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:px-8 lg:pt-36 lg:pb-28"
      aria-label="Clinics hero"
    >
      <div className="mx-auto w-full">
        {/* Rounded container with bg image + overlay */}
        <div className="relative overflow-hidden rounded-[50px] min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px]">
          {/* Background image */}
          <Image
            src="/clinics/Mask (5).webp"
            alt="Medical professionals in radiology department"
            width={1280}
            height={800}
            className="absolute inset-0 h-full w-full object-contain"
            priority
          />
          
          {/* Dark blue overlay */}
          {/* <div className="absolute inset-0 bg-[#1a4d6f]/80" /> */}

          {/* Content — left-aligned with dark blue background */}
          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-center px-6 py-14 sm:min-h-[480px] sm:px-10 sm:py-16 md:min-h-[520px] md:max-w-2xl md:px-14 md:py-20 lg:min-h-[560px] lg:max-w-3xl lg:px-16 lg:py-24">
            <div className="bg-[#1a4d6f] rounded-2xl p-8 sm:p-10 md:p-12 lg:p-14">
              <h1 className="text-[30px] font-bold leading-tight text-white md:text-[30px] lg:text-[48px] xl:text-[48px] lg:leading-[1.2]">
                Reliable Radiology Staffing for Your Facility
              </h1>
              <p className="mt-4 text-[16px] leading-relaxed text-white/95 sm:mt-5 md:text-[16px] lg:text-[16px] xl:text-[18px]">
                From emergency coverage to long-term placements, we connect you with experienced, credentialed radiology technologists who seamlessly integrate with your team.
              </p>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-[#1a4d6f] shadow-md transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-4 lg:text-[14px] xl:text-[16px]"
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
    </section>
  );
}

