"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      className="relative w-full pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:py-24"
      aria-label="Contact hero"
    >
      {/* Full Width Container - 20px margins, 20px border radius (contains image) */}
      <div className="relative mx-5 overflow-hidden rounded-[20px] sm:mx-5 md:mx-5 lg:mx-5">
        {/* Background image - full width, absolute to cover content height */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/get-in-touch/Mask.webp"
            alt="Professional working at desk"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Content Container - 1390px max-width, centered content */}
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1380px] pl-4 pr-4 sm:pl-0 sm:pr-6 lg:pr-8">
            <div className="flex min-h-[400px] flex-col items-center justify-center py-8 text-center sm:min-h-[450px] sm:py-10 md:min-h-[500px] md:py-12 lg:min-h-[550px]">
              {/* Title and subtitle — centered */}
              <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="text-[30px] font-bold leading-tight text-white md:text-[30px] lg:text-[48px] xl:text-[48px] lg:leading-[1.2] max-w-4xl">
                  Let&apos;s Talk About Your Staffing Needs
                </h1>
                <p className="mt-6 text-[16px] leading-relaxed text-white/95 sm:mt-7 md:text-[16px] lg:text-[16px] xl:text-[18px] max-w-2xl mx-auto">
                  Whether you&apos;re a healthcare facility seeking reliable radiology staffing or a technologist exploring new opportunities, we&apos;re here to help.
                </p>
                <div className="mt-10 sm:mt-12">
                  <Link
                    href="#get-in-touch"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2E5D81] shadow-md transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-4 lg:text-[14px] xl:text-[16px]"
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
        </div>
      </div>
    </section>
  );
}

