"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

const REQUIREMENTS = [
  "Active state license(s)",
  "ARRT certification or equivalent",
  "BLS certification",
  "1+ year of clinical experience",
];

export default function BasicRequirements() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="basic-requirements-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <motion.h2
          id="basic-requirements-heading"
          className="text-[30px] font-bold tracking-tight text-center mb-10 sm:mb-12 md:text-[30px] lg:text-[48px] xl:text-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#171717]">Basic</span>{" "}
          <span className="text-[#2E5D81]">Requirements</span>
        </motion.h2>

        <motion.div
          className="mx-auto w-full rounded-2xl border border-[#BFD8E8] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.ul
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-around md:gap-4"
            role="list"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {REQUIREMENTS.map((item) => (
              <motion.li
                key={item}
                className="flex items-center gap-3"
                variants={cardAnimation}
                whileHover={{ x: 5 }}
              >
                <svg
                  className="h-6 w-6 shrink-0 text-[#1E3A5F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[15px] font-medium text-[#171717] sm:text-[16px]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
