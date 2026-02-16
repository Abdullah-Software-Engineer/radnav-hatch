"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

export default function OurGoal() {
  return (
    <section className="relative w-full bg-white pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto mb-6 max-w-3xl text-center sm:mb-8 md:mb-10">
          <motion.h2
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Our <span className="text-[#2E5D81]">Goals</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[14px] leading-relaxed text-[#5B7281] md:text-[14px] lg:text-[16px] xl:text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We are driven to transform healthcare staffing through dedication,
            innovation and commitment to excellence.
          </motion.p>
        </header>

        {/* Mobile View (Grid) */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            variants={cardAnimation}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="mb-3 block text-4xl font-bold text-[#E5E7EB]">01</span>
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Bridge the gap between healthcare facilities and qualified
              technologists.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            variants={cardAnimation}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="mb-3 block text-4xl font-bold text-[#E5E7EB]">02</span>
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Continuously improve our processes to deliver exceptional service.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            variants={cardAnimation}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="mb-3 block text-4xl font-bold text-[#E5E7EB]">03</span>
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Maintain the highest standards of professional credentialing.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            variants={cardAnimation}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <span className="mb-3 block text-4xl font-bold text-[#E5E7EB]">04</span>
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Build lasting partnerships with facilities and professionals alike.
            </p>
          </motion.div>
        </motion.div>

        {/* Desktop View (Diagram) */}
        <div className="relative mx-auto hidden aspect-[16/9] w-full -mt-12 lg:block">
          {/* Background Image (Diagram) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/home/our-goal/singleimage.webp"
              alt="Our Goals Diagram"
              width={1200}
              height={800}
              className="h-auto w-full max-w-5xl object-contain"
              priority
            />
          </div>

          {/* Overlays / Content Cards */}
          
          {/* Goal 01 - Top Left */}
          <motion.div
            className="absolute left-0 top-[12%] w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:top-[14%] sm:w-[280px] md:left-[2%] md:top-[18%] md:w-[300px] lg:left-0 lg:top-[20%] lg:w-[320px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Bridge the gap between healthcare facilities and qualified
              technologists.
            </p>
          </motion.div>

          {/* Goal 02 - Top Right */}
          <motion.div
            className="absolute right-0 top-[12%] w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:top-[14%] sm:w-[280px] md:right-[2%] md:top-[18%] md:w-[300px] lg:right-0 lg:top-[20%] lg:w-[320px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Continuously improve our processes to deliver exceptional service.
            </p>
          </motion.div>

          {/* Goal 03 - Bottom Left */}
          <motion.div
            className="absolute bottom-[8%] left-0 w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:bottom-[10%] sm:w-[280px] md:bottom-[12%] md:left-[2%] md:w-[300px] lg:bottom-[15%] lg:left-0 lg:w-[320px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Maintain the highest standards of professional credentialing.
            </p>
          </motion.div>

          {/* Goal 04 - Bottom Right */}
          <motion.div
            className="absolute bottom-[8%] right-0 w-[240px] rounded-2xl border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-sm sm:bottom-[10%] sm:w-[280px] md:bottom-[12%] md:right-[2%] md:w-[300px] lg:bottom-[15%] lg:right-0 lg:w-[320px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
              Build lasting partnerships with facilities and professionals alike.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
