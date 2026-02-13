"use client";

import Image from "next/image";

export default function OurGoal() {
  return (
    <section className="relative w-full bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto mb-6 max-w-3xl text-center sm:mb-8 md:mb-10">
          <h2 className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]">
            Our <span className="text-[#2E5D81]">Goals</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[14px] lg:text-[16px] xl:text-[16px]">
            We are driven to transform healthcare staffing through dedication,
            innovation and commitment to excellence.
          </p>
        </header>

        {/* Diagram Container */}
        <div className="relative mx-auto aspect-[16/9] w-full -mt-20 sm:-mt-10 md:-mt-12">
          {/* Background Image (Diagram) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/home/our-goal/singleimage.webp"
              alt="Our Goals Diagram"
              width={1200}
              height={800}
              className="h-auto w-full max-w-5xl object-contain"
              priority
            />
          </div>

          {/* Overlays / Content Cards */}
          
          {/* Goal 01 - Top Left */}
          <div className="absolute left-0 top-[12%] w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:top-[14%] sm:w-[280px] md:left-[2%] md:top-[18%] md:w-[300px] lg:left-0 lg:top-[20%] lg:w-[320px]">
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Bridge the gap between healthcare facilities and qualified
              technologists.
            </p>
          </div>

          {/* Goal 02 - Top Right */}
          <div className="absolute right-0 top-[12%] w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:top-[14%] sm:w-[280px] md:right-[2%] md:top-[18%] md:w-[300px] lg:right-0 lg:top-[20%] lg:w-[320px]">
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Continuously improve our processes to deliver exceptional service.
            </p>
          </div>

          {/* Goal 03 - Bottom Left */}
          <div className="absolute bottom-[8%] left-0 w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:bottom-[10%] sm:w-[280px] md:bottom-[12%] md:left-[2%] md:w-[300px] lg:bottom-[15%] lg:left-0 lg:w-[320px]">
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Maintain the highest standards of professional credentialing.
            </p>
          </div>

          {/* Goal 04 - Bottom Right */}
          <div className="absolute bottom-[8%] right-0 w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:bottom-[10%] sm:w-[280px] md:bottom-[12%] md:right-[2%] md:w-[300px] lg:bottom-[15%] lg:right-0 lg:w-[320px]">
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Build lasting partnerships with facilities and professionals alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
