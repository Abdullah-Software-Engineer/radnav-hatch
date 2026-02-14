"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedLink } from "../../../app/utils/animations";

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
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function AboutUs() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        {/* Top: text left, image right */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16 lg:items-center">
          <div>
            <motion.h2
              id="about-heading"
              className="text-[30px] font-bold tracking-tight leading-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Know More <span className="text-[#2E5D81]">About Radnav Solutions</span>
            </motion.h2>
            <motion.p
              className="mt-5 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              At Radnav Solutions, we bridge the gap between healthcare
              facilities and exceptional radiologic technologists. Our mission
              is to ensure that every facility receives skilled professionals
              who deliver outstanding patient care.
            </motion.p>
            <motion.p
              className="mt-4 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              With years of experience in medical staffing, we understand the
              unique challenges healthcare facilities face. We&apos;re committed
              to providing reliable, efficient, and personalized staffing
              solutions.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatedLink
                href="/about"
                className="inline-flex items-center justify-center rounded-[30px] bg-[#2E5D81] px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-[#2E5D81]/20 transition hover:bg-[#264a6a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2"
              >
                Learn More
              </AnimatedLink>
              <AnimatedLink
                href="/services"
                className="inline-flex items-center gap-2 rounded-[30px] border border-[#2E5D81] bg-white px-8 py-3.5 text-[14px] font-semibold text-[#2E5D81] transition hover:bg-[#f8fafc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32709D] focus-visible:ring-offset-2"
              >
                Our Services
                <ArrowIcon />
              </AnimatedLink>
            </motion.div>
          </div>
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-[20px] lg:aspect-auto lg:h-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/home/about-us/image.webp"
              alt="Healthcare professional at workstation reviewing medical imaging"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Bottom: customized grid layout */}
        <motion.div
          className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 md:mt-10 lg:grid-cols-[1.8fr_1fr_1fr] lg:gap-6 lg:h-[360px]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Left: Wide image */}
          <motion.article
            className="relative min-h-[280px] overflow-hidden rounded-[20px] shadow-sm lg:min-h-full lg:h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/home/about-us/Rectangle (1).webp"
              alt="Doctor explaining X-ray results to patient"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.article>

          {/* Middle: Blue card */}
          <motion.article
            className="flex min-h-[280px] flex-col items-start justify-center rounded-[20px] bg-[#5BB5D9] px-6 py-8 text-left shadow-sm sm:px-8 sm:py-10 lg:min-h-full lg:h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-[24px] font-medium leading-tight text-white">
              24/7 support for
              <br />
              healthcare
              <br />
              facilities
            </p>
            <AnimatedLink
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#171717] shadow-md transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5BB5D9]"
            >
              Contact Now
              <ArrowIcon />
            </AnimatedLink>
          </motion.article>

          {/* Right: Standard image */}
          <motion.article
            className="relative min-h-[280px] overflow-hidden rounded-[20px] shadow-sm lg:min-h-full lg:h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/home/about-us/Rectangle (2).webp"
              alt="Medical team discussion in facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
