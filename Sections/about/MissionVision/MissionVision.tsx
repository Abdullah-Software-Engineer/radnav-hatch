"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section
      className="relative w-full bg-[#F8F8F8] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Our Mission */}
          <motion.article
            className="max-w-xl"
            aria-labelledby="mission-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="mission-heading"
              className="text-[30px] font-bold tracking-tight text-[#333333] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            >
              Our{" "}
              <span className="text-[#2C5282]">Mission</span>
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#333333] sm:mt-5 md:text-[14px] lg:text-[16px] xl:text-[16px]">
              To elevate healthcare delivery by providing ethically driven,
              diverse, and industry-leading radiology staffing solutions. We
              are committed to matching exceptional clinical and technical
              talent with healthcare organizations that value quality, efficiency,
              and patient-centered care.
            </p>
          </motion.article>

          {/* Our Vision */}
          <motion.article
            className="max-w-xl"
            aria-labelledby="vision-heading"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="vision-heading"
              className="text-[30px] font-bold tracking-tight text-[#333333] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            >
              Our{" "}
              <span className="text-[#2C5282]">Vision</span>
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#333333] sm:mt-5 md:text-[14px] lg:text-[16px] xl:text-[16px]">
              We envision a healthcare system strengthened by reliable staffing,
              ethical practices and innovative solutions. As we expand our
              footprint nationwide, we remain committed to continuous improvement,
              diversity and advancing healthcare communities through smarter
              workforce strategies.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
