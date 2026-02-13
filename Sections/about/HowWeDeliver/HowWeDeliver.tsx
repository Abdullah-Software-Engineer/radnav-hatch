"use client";

import Link from "next/link";
import Image from "next/image";

export default function HowWeDeliver() {
  return (
    <section
      className="relative w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-20"
      aria-labelledby="how-we-deliver-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="how-we-deliver-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            How We Deliver{" "}
            <span className="text-[#2E5D81]">Better Staffing</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[14px] lg:text-[16px] xl:text-[16px]">
            Trusted radiology staffing built on expertise, flexibility, and care.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 md:items-end lg:mt-16 lg:grid-cols-4 lg:items-end lg:gap-6">
          {/* Card 1: tallest - Gradient */}
          <article
            className="flex min-h-[340px] flex-col justify-center rounded-[30px] p-8 sm:min-h-[380px] lg:min-h-[420px]"
            style={{
              background: "linear-gradient(180deg, #AEE2F8 0%, #2E5D81 100%)",
            }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center">
              <Image
                src="/About-us/Radiology.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="text-[24px] font-medium leading-tight text-[#171717]">
              Radiology-Driven Leadership
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#171717]">
              Built by professionals who know imaging from the inside.
            </p>
          </article>

          {/* Card 2: Dark Blue */}
          <article className="flex min-h-[300px] flex-col justify-center rounded-[30px] bg-[#2E5D81] p-8 sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center">
              <Image
                src="/About-us/Vetted.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="text-[24px] font-medium leading-tight text-white">
              Vetted Professionals
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-white/90">
              Qualified, compliant and ready to perform.
            </p>
          </article>

          {/* Card 3: Light Gray/Blue - Shortest */}
          <article className="flex min-h-[200px] flex-col justify-center rounded-[30px] bg-[#DDE5EB] p-8 sm:min-h-[240px] lg:min-h-[220px]">
            <p className="text-[20px] font-medium leading-tight text-[#171717]">
              Staffing that scales with your needs.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#2E5D81] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#1f405a]"
            >
              View Services
              <span aria-hidden>→</span>
            </Link>
          </article>

          {/* Card 4: Cyan - Medium */}
          <article className="flex min-h-[300px] flex-col justify-center rounded-[30px] bg-[#4FB3D9] p-8 sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center">
              <Image
                src="/About-us/Ethical.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="text-[24px] font-medium leading-tight text-white">
              Ethical by Design
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-white/95">
              People-first, inclusive, and transparent.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
