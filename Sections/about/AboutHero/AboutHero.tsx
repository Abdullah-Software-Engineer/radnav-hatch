"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedLink } from "../../../app/utils/animations";

export default function AboutHero() {
  return (
    <section
      className="relative w-full px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32 md:pb-20 lg:px-8 lg:pt-36 lg:pb-24"
      aria-label="About Radnav Solutions"
    >
      <div className="mx-auto w-full max-w-[1390px]">
        {/* Card-style container: two equal columns on large screens, stacked on small */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-200/60 sm:rounded-3xl">
          <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2 lg:min-h-[520px]">
            {/* Left column — text */}
            <div className="flex flex-col justify-center bg-[#F8F8F8] px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-14 lg:py-20">
              <motion.h1
                className="text-[30px] font-bold leading-[1.2] tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px] xl:leading-[1.15]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Building stronger radiology teams through{" "}
                <span className="text-[#2E5D81]">trusted staffing solutions.</span>
              </motion.h1>
              <motion.p
                className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#6B7280] sm:mt-6 md:text-[16px] lg:text-[16px] xl:text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Radnav Solutions is a healthcare staffing partner specializing in
                radiology workforce solutions. Founded by industry
                professionals, we understand the clinical precision, technical
                expertise, and reliability required to deliver consistent,
                high-quality patient care.
              </motion.p>
              <motion.p
                className="mt-3 max-w-xl text-[16px] leading-relaxed text-[#6B7280] sm:mt-4 md:text-[16px] lg:text-[16px] xl:text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                We connect healthcare institutions with vetted radiology
                professionals who are ready to support operations, reduce
                workload pressure, and maintain continuity of care.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedLink
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1F5C86] px-5 py-3.5 text-[14px] font-medium text-white shadow transition hover:bg-[#1a4d6f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5C86] focus-visible:ring-offset-2 sm:px-6 sm:py-4 lg:text-[14px] xl:text-[16px]"
                >
                  Connect With Us
                </AnimatedLink>
                <AnimatedLink
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D1D5DB] bg-transparent px-5 py-3.5 text-[14px] font-medium text-[#4B5563] transition hover:border-[#9CA3AF] hover:bg-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 sm:px-6 sm:py-4 lg:text-[14px] xl:text-[16px]"
                >
                  Our Services
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
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </AnimatedLink>
              </motion.div>
            </div>

            {/* Right column — image with Verified credentials overlay */}
            <div className="relative min-h-[300px] bg-[#F1F5F9] sm:min-h-[360px] lg:min-h-0">
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src="/About-us/hero.png"
                  alt="Healthcare professionals from Radnav Solutions — verified radiology staffing experts"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Verified credentials badge — upper-right, overlapping image */}
              <div
                className="absolute right-5 top-6 z-10 flex items-center gap-2.5 rounded-xl bg-[#E0E2E4] px-4 py-3 shadow-md sm:right-8 sm:top-10 lg:right-[90%] lg:top-[26%]"
                aria-label="Verified credentials"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-[#4B5563]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M3 18l4-4 4 3 6-7" />
                  <path d="M14 9l6 0v6" />
                </svg>
                <span className="text-[12px] font-medium text-[#4B5563] lg:text-[12px] xl:text-[14px]">
                  Verified credentials
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
