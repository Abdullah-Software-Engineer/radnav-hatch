"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

const SERVICES = [
  {
    title: "Radiology Staffing & Imaging Support",
    description:
      "We place experienced, vetted radiology technologists who deliver accurate imaging and compassionate patient care available for temporary, permanent, and on-demand coverage.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5" />
        <circle cx="16" cy="8" r="3" />
        <path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" />
      </svg>
    ),
  },
  {
    title: "Safety, Compliance & Training",
    description:
      "Our professionals stay current with evolving safety standards and regulations through continuous training, ensuring compliance and patient safety at every facility.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Technology-Enabled Workforce Management",
    description:
      "Advanced scheduling, real-time notifications, and built-in communication tools ensure seamless coverage, accurate time tracking, and reduced administrative workload.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.65 4.65 0 0 1 8.91 14" />
      </svg>
    ),
  },
];

export default function OurServices() {
  return (
    <section
      className="relative w-full bg-white pt-[30px] pb-[40px]"
      aria-labelledby="our-services-heading"
    >
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned */}
        <header className="mb-12 max-w-3xl sm:mb-14 md:mb-16">
          <motion.h2
            id="our-services-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Our{" "}
            <span className="text-[#2E5D81]">Services</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[14px] lg:text-[16px] xl:text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Comprehensive radiology staffing and imaging support designed to
            adapt to your facility&apos;s needs.
          </motion.p>
        </header>

        {/* Cards — equal height, premium look */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map(({ title, description, icon }) => (
            <motion.article
              key={title}
              className="group flex flex-col rounded-2xl border border-[#2E5D81] bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_6px_16px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_10px_24px_-4px_rgba(0,0,0,0.08)] hover:border-[#1f405a] sm:p-8"
              variants={cardAnimation}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E5D81] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1f405a] group-hover:rotate-3 sm:mb-6 sm:h-14 sm:w-14">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
              </div>
              <h3 className="text-[20px] font-bold tracking-tight text-[#171717] transition-colors duration-300 group-hover:text-[#2E5D81]">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5B7281] sm:mt-4">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
