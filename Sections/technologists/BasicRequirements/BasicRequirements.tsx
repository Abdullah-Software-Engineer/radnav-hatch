"use client";

const REQUIREMENTS = [
  "Active state license(s)",
  "ARRT certification or equivalent",
  "BLS certification",
  "1+ year of clinical experience",
];

export default function BasicRequirements() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="basic-requirements-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="basic-requirements-heading"
          className="text-2xl font-bold tracking-tight text-center mb-12 sm:mb-14 sm:text-3xl md:text-4xl"
        >
          <span className="text-[#2A3852]">Basic</span>{" "}
          <span className="text-[#286B91]">Requirements</span>
        </h2>

        <div className="rounded-xl border border-[#D1D9E0] bg-white px-8 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 max-w-5xl mx-auto">
          <ul
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12 md:gap-x-14"
            role="list"
          >
            {REQUIREMENTS.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#286B91] bg-white text-[#286B91]"
                  aria-hidden
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-[#333333] sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
