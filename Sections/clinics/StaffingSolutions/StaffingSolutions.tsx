"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

const MODALITIES = [
  "CT Technologists",
  "MRI Technologists",
  "X-Ray Technologists",
  "Mammography Technologists",
  "Interventional Radiology Techs",
  "Nuclear Medicine Technologists",
];

export default function StaffingSolutions() {
  return (
    <section
      className="relative w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14"
      aria-labelledby="staffing-solutions-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <motion.h2
            id="staffing-solutions-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#2E5D81]">Staffing Solutions</span>{" "}
            <span className="text-[#171717]">We Provide</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[#5B7281] text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Access specialized talent across all radiology modalities.
          </motion.p>
        </header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {MODALITIES.map((modality) => (
            <motion.article
              key={modality}
              className="group flex items-center gap-4 rounded-lg border border-[#BFD8E8] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/10 hover:border-[#2E5D81]"
              variants={cardAnimation}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <svg
                className="h-6 w-6 shrink-0 text-[#2E5D81] transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-[16px] font-medium text-[#171717] transition-colors duration-300 group-hover:text-[#2E5D81]">
                {modality}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

