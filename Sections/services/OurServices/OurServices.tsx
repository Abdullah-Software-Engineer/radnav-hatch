"use client";

const SERVICES = [
  {
    title: "Radiology Staffing & Imaging Support",
    description:
      "We place experienced, vetted radiology technologists who deliver accurate imaging and compassionate patient care available for temporary, permanent, and on-demand coverage.",
    icon: (
      <svg
        className="h-6 w-6"
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
    title: "Safety, Compliance & Training",
    description:
      "Our professionals stay current with evolving safety standards and regulations through continuous training, ensuring compliance and patient safety at every facility.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Technology-Enabled Workforce Management",
    description:
      "Advanced scheduling, real-time notifications, and built-in communication tools ensure seamless coverage, accurate time tracking, and reduced administrative workload.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.65 4.65 0 0 1 8.91 14" />
      </svg>
    ),
  },
];

export default function OurServices() {
  return (
    <section
      className="relative w-full bg-[#FAFAFA] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="our-services-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header — left-aligned */}
        <header className="mb-12 max-w-3xl sm:mb-14 md:mb-16">
          <h2
            id="our-services-heading"
            className="text-[30px] font-bold tracking-tight text-[#1F2937] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            Our{" "}
            <span className="text-[#1B557B]">Services</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#4B5563] md:text-[14px] lg:text-[16px] xl:text-[16px] lg:w-167">
            Comprehensive radiology staffing and imaging support designed to
            adapt to your facility&apos;s needs.
          </p>
        </header>

        {/* Cards — equal height, premium look */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8">
          {SERVICES.map(({ title, description, icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-[#1B557B] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_6px_16px_-2px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E3A5F] text-white sm:mb-6 sm:h-14 sm:w-14">
                {icon}
              </div>
              <h3 className="text-[20px] font-bold tracking-tight text-[#1F2937]">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#4B5563] sm:mt-4">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
