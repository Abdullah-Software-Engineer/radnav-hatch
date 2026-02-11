"use client";

import Image from "next/image";

const FEATURES = [
  { label: "Efficient scheduling and shift coverage", active: true },
  { label: "Real-time updates and alerts", active: false },
  { label: "Flexible shift management with approvals", active: false },
  { label: "Accurate time tracking and compliance", active: false },
];

const BENEFITS = [
  "Proactive coverage management",
  "Qualified, compliant radiology professionals",
  "Real-time visibility into schedules",
  "Deep expertise in radiology operations",
];

export default function KeepYouCovered() {
  return (
    <>
      {/* Section 1: How We Keep You Covered */}
      <section
        className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
        aria-labelledby="keep-covered-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16 lg:items-start">
            {/* Left: title, paragraphs, feature list */}
            <div>
              <h2
                id="keep-covered-heading"
                className="text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl md:text-4xl"
              >
                How We Keep You{" "}
                <span className="text-[#2563EB]">Covered</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
                Smart systems and proactive management that eliminate staffing
                gaps.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#4B5563] sm:text-lg">
                We actively manage schedules, monitor coverage needs and respond
                quickly to changes ensuring your imaging department stays fully
                operational and supported at all times.
              </p>
              <ul className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4" role="list">
                {FEATURES.map(({ label, active }) => (
                  <li key={label}>
                    <span
                      className={`block rounded-xl px-5 py-4 text-left text-sm font-medium sm:py-4 sm:text-base ${
                        active
                          ? "bg-[#2563EB] text-white"
                          : "border border-[#93C5FD] bg-[#EFF6FF] text-[#1F2937]"
                      }`}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: two stacked images */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#E0F2FE]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#BAE6FD]/40 to-[#7DD3FC]/20" />
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#93C5FD]/30 sm:h-48 sm:w-48"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center text-[#64748B] text-sm">
                  {/* Placeholder: replace with actual doctor/scan image src */}
                  <span className="opacity-60">Imaging & coverage</span>
                </div>
              </div>
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-[#F1F5F9]">
                <Image
                  src="/service/Frame.png"
                  alt="Technology and connectivity for radiology staffing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Key Benefits */}
      <section
        className="relative w-full bg-[#FAFAFA] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
        aria-labelledby="key-benefits-heading"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center sm:mb-14 md:mb-16">
            <h2
              id="key-benefits-heading"
              className="text-2xl font-bold tracking-tight text-[#1F2937] sm:text-3xl md:text-4xl"
            >
              Our Key{" "}
              <span className="text-[#2563EB]">Benefits</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
              More than staffing—reliable partnership you can trust.
            </p>
          </header>

          {/* Four gradient circles; 4th has dashed outline */}
          <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {BENEFITS.map((text, i) => (
              <div
                key={text}
                className="relative z-10 flex flex-[1_1_calc(50%-1rem)] min-w-[200px] max-w-[280px] items-center justify-center sm:min-w-[220px] lg:max-w-[260px]"
              >
                <div
                  className={`flex h-36 w-36 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-white sm:h-40 sm:w-40 sm:text-base lg:h-44 lg:w-44 ${
                    i === 3 ? "border-2 border-dashed border-[#93C5FD]" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(180deg, #93C5FD 0%, #2563EB 100%)",
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
