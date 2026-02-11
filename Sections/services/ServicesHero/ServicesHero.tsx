import Link from "next/link";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full bg-white px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:px-8 lg:pt-36 lg:pb-28"
      aria-label="Services hero"
    >
      <div className="mx-auto w-full ">
        {/* Rounded gradient container — matches hero image layout */}
        <div className="relative overflow-hidden rounded-tr-[20px] rounded-br-[120px]  rounded-tl-[120px] rounded-bl-[20px]  bg-linear-to-r from-[#1a4d6f] via-[#1F5C86] to-[#2a8ba8] px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-16 lg:py-24">


          {/* Decorative circles — bottom-left */}
          <div
            className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/20 sm:h-52 sm:w-52"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-0 h-28 w-28 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/15 sm:h-36 sm:w-36"
            aria-hidden
          />
          {/* Decorative circles — top-right */}
          <div
            className="absolute right-0 top-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 sm:h-52 sm:w-52"
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 h-28 w-28 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-36 sm:w-36"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              Reliable Radiology Staffing, Built for Modern Healthcare
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg md:text-xl">
              Trusted radiology professionals and smart workforce solutions that
              keep your facility fully staffed and focused on patient care.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#1a4d6f] shadow-md transition hover:bg-white/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-4"
              >
                Talk To Our Team
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
