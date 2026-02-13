"use client";

import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17L17 7M17 7h-10v10"
    />
  </svg>
);

export default function AboutUs() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top: text left, image right */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16 lg:items-center">
          <div>
            <h2
              id="about-heading"
              className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            >
              Know More About{" "}
              <span className="text-[#2E5D81]">Radnav Solutions</span>
            </h2>
            <p className="mt-5 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
              At Radnav Solutions, we bridge the gap between healthcare
              facilities and exceptional radiologic technologists. Our mission
              is to ensure that every facility receives skilled professionals
              who deliver outstanding patient care.
            </p>
            <p className="mt-4 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
              With years of experience in medical staffing, we understand the
              unique challenges healthcare facilities face. We&apos;re committed
              to providing reliable, efficient, and personalized staffing
              solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-[#2E5D81] px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-[#2E5D81]/20 transition hover:bg-[#264a6a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-[#8BA3B6]/60 bg-white px-5 py-3 text-[14px] font-semibold text-[#171717] transition hover:bg-[#f8fafc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2"
              >
                Our Services
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[340px]">
            <Image
              src="/home/about-us/image.webp"
              alt="Healthcare professional at workstation reviewing medical imaging"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Bottom: three equal-height cards — image, teal CTA, image */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:mt-16 lg:grid-cols-3 lg:gap-6 lg:h-[360px]">
          <article className="relative min-h-[280px] overflow-hidden rounded-xl shadow-sm lg:min-h-full lg:h-full">
            <Image
              src="/home/about-us/Rectangle (1).webp"
              alt="Doctor explaining X-ray results to patient"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </article>
          <article className="flex min-h-[280px] flex-col items-center justify-center rounded-xl bg-[#0d9488] px-6 py-8 text-center shadow-sm sm:px-8 sm:py-10 lg:min-h-full lg:h-full">
            <p className="text-[20px] font-bold leading-snug text-white">
              24/7 support
              <br />
              for healthcare
              <br />
              facilities
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[16px] font-semibold text-[#2E5D81] shadow-md transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d9488]"
            >
              Contact Now
              <ArrowIcon />
            </Link>
          </article>
          <article className="relative min-h-[280px] overflow-hidden rounded-xl shadow-sm lg:min-h-full lg:h-full">
            <Image
              src="/home/about-us/Rectangle (2).webp"
              alt="Medical team discussion in facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
