"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

const BENEFITS = [
  {
    text: "Proactive coverage management",
    bgClass: "bg-[#7eb8d4]",
    hasDashedOutline: true,
  },
  {
    text: "Qualified, compliant radiology professionals",
    bgClass: "bg-[#4a9fc4]",
    hasDashedOutline: false,
  },
  {
    text: "Real-time visibility into schedules",
    bgClass: "bg-[#2a8ba8]",
    hasDashedOutline: false,
  },
  {
    text: "Deep expertise in radiology operations",
    bgClass: "bg-[#1a4d6f]",
    hasDashedOutline: true,
  },
];

export default function KeyBenefits() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="key-benefits-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header — centered */}
        <header className="mb-12 text-center sm:mb-14 md:mb-16">
          <motion.h2
            id="key-benefits-heading"
            className="text-[30px] font-bold tracking-tight text-[#1F2937] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Key Benefits
          </motion.h2>
          <motion.p
            className="mt-4 text-[14px] leading-relaxed text-[#1F2937] md:text-[14px] lg:text-[16px] xl:text-[16px] md:max-w-2xl md:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            More than staffing—reliable partnership you can trust.
          </motion.p>
        </header>

        {/* Benefits — horizontal line on all screen sizes */}
        <motion.div
          className="flex flex-nowrap items-center justify-center overflow-hidden"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {BENEFITS.map(({ text, bgClass, hasDashedOutline }, index) => (
            <motion.div
              key={text}
              className={`group relative flex h-24 w-24 shrink-0 items-center justify-center transition-all duration-300 hover:z-20 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-52 xl:w-52 ${index > 0 ? "-ml-3 sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-12" : ""}`}
              variants={cardAnimation}
              whileHover={{ scale: 1.15, zIndex: 20 }}
            >
              {hasDashedOutline && (
                <div
                  className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#7eb8d4] transition-all duration-300 group-hover:scale-110 group-hover:border-[#5aa3c4]"
                  aria-hidden
                />
              )}
              <div
                className={`relative z-10 flex h-full w-full items-center justify-center rounded-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/25 ${bgClass}`}
              >
                <p className="px-2 text-center text-[10px] font-medium leading-tight text-white transition-transform duration-300 group-hover:scale-105 sm:px-3 sm:text-xs md:px-4 md:text-sm lg:text-base">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
