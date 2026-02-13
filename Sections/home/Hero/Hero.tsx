"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
      aria-label="Hero"
    >
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

        {/* Single hero image */}
        <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-16 w-full overflow-hidden rounded-xl bg-[#f1f5f9] shadow-md aspect-16/10 sm:aspect-video">
          <Image
            src="/home/hero.webp"
            alt="Radnav Solutions — connecting healthcare with qualified radiology technologists"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
