"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OriginStory() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="origin-story-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        {/* Two-column: image left, text right - 50/50 split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
          {/* Left: image with rounded corners + blue accent */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute -bottom-4 -right-4 z-0 h-5 w-28 rounded-2xl bg-[#1E3A5F] sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32 lg:h-60 lg:w-70"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-gray-200/50 sm:rounded-3xl">
              <Image
                src="/About-us/image.png"
                alt="Medical professionals in a modern imaging facility reviewing diagnostic technology"
                width={560}
                height={400}
                className="aspect-4/3 w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: headline + body */}
          <motion.div
            className="flex flex-col lg:pt-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="origin-story-heading"
              className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            >
              Our{" "}
              <span className="text-[#2E5D81]">Origin Story</span>
            </h2>
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              <p className="text-[14px] leading-relaxed text-[#5B7281] md:text-[14px] lg:text-[16px] xl:text-[16px]">
                Radnav Solutions was founded by a seasoned Radiologic Technologist
                who recognized a critical gap in traditional staffing models—many
                agencies lacked a true understanding of the complex demands of
                imaging departments.
              </p>
              <p className="text-[14px] leading-relaxed text-[#5B7281] md:text-[14px] lg:text-[16px] xl:text-[16px]">
                Driven by firsthand experience, we built a staffing approach
                rooted in empathy, expertise and precision. Our growth has been
                guided not by scale alone, but by our ability to consistently
                match the right professionals with the right opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Centered quote */}
        <motion.blockquote
          className="mx-auto mt-14 max-w-3xl text-center sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl font-semibold leading-snug text-[#171717] sm:text-2xl md:text-3xl">
            &ldquo;Our goal is not just to fill roles but to help healthcare
            organizations thrive.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
