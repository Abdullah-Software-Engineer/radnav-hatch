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
      <div className="mx-auto max-w-[1390px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Text Content (50% width) */}
          <div className="flex flex-col justify-center">
            <h2
              id="how-we-keep-you-covered-heading"
              className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[36px] lg:text-[48px] xl:text-[48px]"
            >
              How We Keep You{" "}
              <span className="text-[#2E5D81]">Covered</span>
            </h2>
            
            <p className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[15px] lg:text-[16px] xl:text-[16px]">
              Smart systems and proactive management that eliminate staffing gaps.
            </p>
            
            <p className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[15px] lg:text-[16px] xl:text-[16px]">
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
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#2E5D81]" />
                  <p className="text-[14px] font-medium text-[#171717] sm:text-[15px] md:text-[16px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image (50% width) */}
          <div className="flex items-center justify-center">
            <div className="relative min-h-[500px] w-full overflow-hidden rounded-xl sm:rounded-2xl md:min-h-[600px] lg:min-h-[700px]">
              <Image
                src="/service/right-side.png"
                alt="Doctor examining medical imaging film"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

