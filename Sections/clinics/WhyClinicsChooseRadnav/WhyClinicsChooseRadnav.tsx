"use client";

const FEATURES = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Rapid Placement",
    description:
      "Get qualified technologists within 24-48 hours for urgent staffing needs.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Fully Credentialed",
    description:
      "Every technologist is licensed, certified, and background-checked.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Specialized Talent",
    description:
      "Access CT, MRI, X-ray, mammography, and interventional specialists.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
    title: "Flexible Terms",
    description:
      "Per diem, travel, temp-to-perm, or permanent placements available.",
  },
];

export default function WhyClinicsChooseRadnav() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="why-clinics-choose-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <h2
            id="why-clinics-choose-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            Why Hospitals Choose RadNav
          </h2>
          <p className="mt-4 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
            We understand the critical nature of radiology departments. That&apos;s why we deliver quality staffing solutions, fast.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {FEATURES.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a4d6f] text-white">
                {icon}
              </div>
              <h3 className="mt-4 text-[20px] font-bold tracking-tight text-[#171717]">
                {title}
              </h3>
              <p className="mt-2 text-[#5B7281] text-[14px] leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

