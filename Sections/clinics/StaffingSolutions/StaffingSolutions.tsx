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
      className="relative w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14"
      aria-labelledby="staffing-solutions-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <h2
            id="staffing-solutions-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            <span className="text-[#2E5D81]">Staffing Solutions</span>{" "}
            <span className="text-[#171717]">We Provide</span>
          </h2>
          <p className="mt-4 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
            Access specialized talent across all radiology modalities.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((modality) => (
            <article
              key={modality}
              className="flex items-center gap-4 rounded-lg border border-[#BFD8E8] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <svg
                className="h-6 w-6 shrink-0 text-[#2E5D81]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-[16px] font-medium text-[#171717]">
                {modality}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

