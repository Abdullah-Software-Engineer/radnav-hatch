const BENEFITS = [
  {
    text: "Proactive coverage management",
    bgClass: "bg-[#7eb8d4]",
    hasDashedOutline: true,
  },
  {
    text: "Qualified, compliant radiology professionals",
    bgClass: "bg-[#4a9fc4]",
    hasDashedOutline: false,
  },
  {
    text: "Real-time visibility into schedules",
    bgClass: "bg-[#2a8ba8]",
    hasDashedOutline: false,
  },
  {
    text: "Deep expertise in radiology operations",
    bgClass: "bg-[#1a4d6f]",
    hasDashedOutline: true,
  },
];

export default function KeyBenefits() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="key-benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header — centered */}
        <header className="mb-12 text-center sm:mb-14 md:mb-16">
          <h2
            id="key-benefits-heading"
            className="text-[30px] font-bold tracking-tight text-[#1F2937] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            Our Key Benefits
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#1F2937] md:text-[14px] lg:text-[16px] xl:text-[16px] md:max-w-2xl md:mx-auto">
            More than staffing—reliable partnership you can trust.
          </p>
        </header>

        {/* Benefits — four circles in one row, minimal gap / slight overlap */}
        <div className="flex flex-nowrap items-center justify-center overflow-visible">
          {BENEFITS.map(({ text, bgClass, hasDashedOutline }, index) => (
            <div
              key={text}
              className={`relative flex h-44 w-44 shrink-0 items-center justify-center sm:h-48 sm:w-48 md:h-52 md:w-52 ${index > 0 ? "-ml-6 sm:-ml-8 md:-ml-10 lg:-ml-12" : ""}`}
            >
              {hasDashedOutline && (
                <div
                  className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#7eb8d4]"
                  aria-hidden
                />
              )}
              <div
                className={`relative z-10 flex h-36 w-36 items-center justify-center rounded-full sm:h-40 sm:w-40 md:h-44 md:w-44 ${bgClass}`}
              >
                <p className="px-4 text-center text-sm font-medium leading-snug text-white sm:text-base">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
