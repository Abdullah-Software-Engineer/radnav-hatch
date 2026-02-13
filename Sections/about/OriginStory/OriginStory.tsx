"use client";

import Image from "next/image";

export default function OriginStory() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="origin-story-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Two-column: image left, text right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-start lg:gap-14 xl:gap-16">
          {/* Left: image with rounded corners + blue accent */}
          <div className="relative shrink-0">
            <div
              className="absolute -bottom-4 -right-4 z-0 h-5 w-28 rounded-2xl bg-[#1E3A5F] sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32 lg:h-60 lg:w-70"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-gray-200/50 sm:rounded-3xl">
              <Image
                src="/About-us/hero.png"
                alt="Medical professionals in a modern imaging facility reviewing diagnostic technology"
                width={560}
                height={400}
                className="aspect-4/3 w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* Right: headline + body */}
          <div className="flex flex-col lg:pt-2">
            <h2
              id="origin-story-heading"
              className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            >
              Our{" "}
              <span className="text-[#1E3A5F]">Origin Story</span>
            </h2>
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <p className="text-[14px] leading-relaxed text-[#4B5563] md:text-[14px] lg:text-[16px] xl:text-[16px]">
                Radnav Solutions was founded by a seasoned Radiologic Technologist
                who recognized a critical gap in traditional staffing models—many
                agencies lacked a true understanding of the complex demands of
                imaging departments.
              </p>
              <p className="text-[14px] leading-relaxed text-[#4B5563] md:text-[14px] lg:text-[16px] xl:text-[16px]">
                Driven by firsthand experience, we built a staffing approach
                rooted in empathy, expertise and precision. Our growth has been
                guided not by scale alone, but by our ability to consistently
                match the right professionals with the right opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Centered quote */}
        <blockquote className="mx-auto mt-14 max-w-3xl text-center sm:mt-16 md:mt-20">
          <p className="text-xl font-semibold leading-snug text-[#171717] sm:text-2xl md:text-3xl">
            &ldquo;Our goal is not just to fill roles but to help healthcare
            organizations thrive.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
