"use client";

import Image from "next/image";

const FEATURES = [
  "Efficient scheduling and shift coverage",
  "Real-time updates and alerts",
  "Flexible shift management with approvals",
  "Accurate time tracking and compliance",
];

export default function HowWeKeepYouCovered() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="how-we-keep-you-covered-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2
              id="how-we-keep-you-covered-heading"
              className="text-[30px] font-bold tracking-tight text-[#1F2937] md:text-[36px] lg:text-[48px] xl:text-[48px]"
            >
              How We Keep You{" "}
              <span className="text-[#7eb8d4]">Covered</span>
            </h2>
            
            <p className="mt-4 text-[14px] leading-relaxed text-[#1F2937] md:text-[15px] lg:text-[16px] xl:text-[16px]">
              Smart systems and proactive management that eliminate staffing gaps.
            </p>
            
            <p className="mt-4 text-[14px] leading-relaxed text-[#1F2937] md:text-[15px] lg:text-[16px] xl:text-[16px]">
              We actively manage schedules, monitor coverage needs and respond quickly to changes ensuring your imaging department stays fully operational and supported at all times.
            </p>

            {/* Feature List */}
            <div className="mt-6 space-y-3 sm:mt-8 md:mt-10">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="relative flex items-center rounded-lg bg-[#F3F4F6] px-4 py-3 pl-6 sm:px-5 sm:py-4 md:px-6 md:py-4"
                >
                  {/* Blue vertical bar on the left */}
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#7eb8d4]" />
                  <p className="text-[14px] font-medium text-[#1F2937] sm:text-[15px] md:text-[16px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-5 lg:gap-6">
            {/* Top Image */}
            <div className="relative aspect-[5/4] w-full max-w-full overflow-hidden rounded-xl sm:rounded-2xl md:max-w-xs md:ml-auto lg:max-w-md">
              <Image
                src="/service/image-1.png"
                alt="Doctor examining medical imaging film"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 320px, 400px"
              />
              {/* Light blue circular overlay */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#7eb8d4]/20 blur-3xl md:h-28 md:w-28 lg:h-40 lg:w-40" />
            </div>

            {/* Bottom Image */}
            <div className="relative aspect-[5/4] w-full max-w-full overflow-hidden rounded-xl sm:rounded-2xl md:max-w-xs md:ml-auto lg:max-w-md">
              <Image
                src="/service/image-2.png"
                alt="Medical technology and data visualization"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 320px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

