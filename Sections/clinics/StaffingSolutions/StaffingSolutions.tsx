"use client";

const MODALITIES = [
  "CT Technologists",
  "MRI Technologists",
  "X-Ray Technologists",
  "Mammography Technologists",
  "Interventional Radiology Techs",
  "Nuclear Medicine Technologists",
];

export default function StaffingSolutions() {
  return (
    <section
      className="relative w-full bg-[#FAFAFA] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="staffing-solutions-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <h2
            id="staffing-solutions-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            <span className="text-[#1a4d6f]">Staffing Solutions</span>{" "}
            <span className="text-[#171717]">We Provide</span>
          </h2>
          <p className="mt-4 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
            Access specialized talent across all radiology modalities.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MODALITIES.map((modality) => (
            <article
              key={modality}
              className="flex items-center gap-4 rounded-lg border border-[#E0E7FF] bg-white p-4 sm:p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E0E7FF]">
                <svg
                  className="h-5 w-5 text-[#1a4d6f]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-base font-medium text-[#171717] sm:text-lg">
                {modality}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

