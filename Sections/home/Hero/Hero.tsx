"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white pt-32 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24"
      aria-label="Hero"
    >
      {/* Content Container - 1390px max-width, with global padding */}
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
        {/* Top: headline + paragraph — responsive two-column / stacked */}
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(280px,400px)] lg:gap-12 xl:gap-16 lg:items-end">
          <div>
            <h1 className="text-[36px] font-bold tracking-tight text-[#171717] md:text-[48px] lg:text-[56px] xl:text-[56px] max-w-3xl leading-[1.15]">
              Connecting Healthcare with{" "}
              <span className="text-[#2E5D81]">Qualified Technologists</span>
            </h1>
          </div>
          <p className="text-[16px] text-[#5B7281] leading-relaxed md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-lg lg:max-w-none lg:pb-1">
            Connecting hospitals and clinics with experienced radiology technologists when and where they&apos;re needed.
          </p>
        </div>
      </div>

      {/* Full Width Container - below content container */}
      <div className="w-full mt-10 sm:mt-12 md:mt-14 lg:mt-16">
        {/* Image Container - 20px margins on all sides, 20px border radius */}
        <div className="relative mx-5 sm:mx-5 md:mx-5 lg:mx-5 overflow-hidden rounded-[20px] bg-[#f1f5f9] shadow-md aspect-16/10 sm:aspect-video">
          <Image
            src="/home/hero.webp"
            alt="Radnav Solutions — connecting healthcare with qualified radiology technologists"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
