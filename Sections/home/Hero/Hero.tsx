"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white pt-32 sm:pt-32 md:pt-36 lg:pt-40 pb-5"
      aria-label="Hero"
    >
      {/* Content Container - 1390px max-width, with global padding */}
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
        {/* Top: headline + paragraph — responsive two-column / stacked */}
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(280px,400px)] lg:gap-12 xl:gap-16 lg:items-end">
          <div>
            <motion.h1
              className="text-[36px] font-bold tracking-tight text-[#171717] md:text-[48px] lg:text-[56px] xl:text-[56px] max-w-3xl leading-[1.15]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Connecting Healthcare with{" "}
              <span className="text-[#2E5D81]">Qualified Technologists</span>
            </motion.h1>
          </div>
          <motion.p
            className="text-[16px] text-[#5B7281] leading-relaxed md:text-[16px] lg:text-[18px] xl:text-[20px] max-w-lg lg:max-w-none lg:pb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Connecting hospitals and clinics with experienced radiology technologists when and where they&apos;re needed.
          </motion.p>
        </div>
      </div>

      {/* Full Width Container - below content container */}
      <div className="w-full mt-5">
        {/* Video Container - 20px margins on all sides, 20px border radius */}
        <motion.div
          className="relative mx-5 sm:mx-5 md:mx-5 lg:mx-5 overflow-hidden rounded-[20px] bg-[#f1f5f9] shadow-md aspect-16/10 sm:aspect-video"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            src="/home/radnav-video.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label="Radnav Solutions — connecting healthcare with qualified radiology technologists"
          />
        </motion.div>
      </div>
    </section>
  );
}
