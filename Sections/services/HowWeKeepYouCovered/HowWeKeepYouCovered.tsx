"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

const FEATURES = [
  "Efficient scheduling and shift coverage",
  "Real-time updates and alerts",
  "Flexible shift management with approvals",
  "Accurate time tracking and compliance",
];

export default function HowWeKeepYouCovered() {
  return (
    <div
      className="relative w-full bg-white "
      aria-labelledby="how-we-keep-you-covered-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:gap-2 xl:gap-3">
          {/* Left Side - Text Content (50% width) */}
          <div className="flex flex-col justify-center">
            <motion.h2
              id="how-we-keep-you-covered-heading"
              className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[36px] lg:text-[48px] xl:text-[48px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              How We Keep You{" "}
              <span className="text-[#2E5D81]">Covered</span>
            </motion.h2>
            
            <motion.p
              className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[15px] lg:text-[16px] xl:text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Smart systems and proactive management that eliminate staffing gaps.
            </motion.p>
            
            <motion.p
              className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[15px] lg:text-[16px] xl:text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We actively manage schedules, monitor coverage needs and respond quickly to changes ensuring your imaging department stays fully operational and supported at all times.
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="mt-6 space-y-3 sm:mt-8 md:mt-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center rounded-lg bg-[#F3F4F6] px-4 py-3 pl-6 sm:px-5 sm:py-4 md:px-6 md:py-4"
                  variants={cardAnimation}
                  whileHover={{ x: 5 }}
                >
                  {/* Blue vertical bar on the left */}
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#2E5D81]" />
                  <p className="text-[14px] font-medium text-[#171717] sm:text-[15px] md:text-[16px]">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Image (50% width) */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative min-h-[500px] w-full overflow-hidden rounded-xl sm:rounded-2xl md:min-h-[600px] lg:min-h-[700px]">
              <Image
                src="/service/right-side.png"
                alt="Doctor examining medical imaging film"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

