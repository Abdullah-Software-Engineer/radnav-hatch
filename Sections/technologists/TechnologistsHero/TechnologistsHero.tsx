import Link from "next/link";
import Image from "next/image";

export default function TechnologistsHero() {
  return (
    <section
      className="relative w-full bg-white px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:px-8 lg:pt-36 lg:pb-28"
      aria-label="Technologists hero"
    >
      <div className="mx-auto w-full max-w-[1390px]">
        {/* Rounded container with bg image + overlay */}
        <div className="relative overflow-hidden rounded-[50px] min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px]">
          {/* Background image */}
          <Image
            src="/for-technology/Mask.webp"
            alt="Radiology technologists and healthcare professionals"
            
            fill
            className="object-fill "
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />

          {/* Content — left-aligned */}
          <div className="relative z-1000 flex h-full min-h-[420px] flex-col justify-center px-6 py-14 sm:min-h-[480px] sm:px-10 sm:py-16 md:min-h-[520px] md:max-w-xl md:px-14 md:py-20 lg:min-h-[560px] lg:max-w-2xl lg:px-16 lg:py-24">
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              Your Career, Your Terms
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg md:text-lg">
              Join a network of top radiology professionals. Whether you&apos;re
              looking for flexibility, better pay, or your next adventure, we&apos;ve
              got opportunities waiting for you.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#1a4d6f] shadow-md transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-4"
              >
                Apply Now
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
