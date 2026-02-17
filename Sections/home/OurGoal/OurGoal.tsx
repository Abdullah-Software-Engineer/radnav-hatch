"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

export default function OurGoal() {
  return (
    <section className="relative w-full bg-white pt-8 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
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

        {/* Mobile/Tablet View (< lg) */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { id: "01", text: "Bridge the gap between healthcare facilities and qualified technologists." },
            { id: "02", text: "Continuously improve our processes to deliver exceptional service." },
            { id: "03", text: "Maintain the highest standards of professional credentialing." },
            { id: "04", text: "Build lasting partnerships with facilities and professionals alike." },
          ].map((item) => (
            <motion.div
              key={item.id}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
              variants={cardAnimation}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4 relative h-12 w-16">
                <Image 
                  src={`/home/our-goal/${item.id}.png`} 
                  alt={item.id} 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
              <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop View (>= lg) */}
        <div className="relative mx-auto hidden w-full lg:block">
          <div className="relative mx-auto flex aspect-[16/8] w-full items-center justify-center">
            {/* Central Image */}
            <div className="relative h-full w-[45%] xl:w-[50%]">
              <Image
                src="/home/our-goal/bg-work.png"
                alt="Our Goals Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Goal 01 - Top Left */}
            <motion.div
              className="absolute left-0 top-[5%] w-[25%] xl:top-[8%] xl:w-[280px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -top-4 -right-2 h-10 w-14 xl:-top-6 xl:-right-4 xl:h-16 xl:w-20 z-[1]">
                 <Image src="/home/our-goal/01.png" alt="01" fill className="object-contain" />
              </div>
              <div className="relative z-[2] rounded-2xl border border-white/60 bg-white/20 backdrop-blur-[1px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] xl:p-6">
                <p className="text-[14px] font-medium leading-relaxed text-[#333333] xl:text-[15px]">
                  Bridge the gap between healthcare facilities and qualified technologists.
                </p>
              </div>
            </motion.div>

            {/* Goal 02 - Top Right */}
            <motion.div
              className="absolute right-0 top-[5%] w-[25%] xl:top-[8%] xl:w-[280px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
               <div className="absolute -top-4 -left-2 h-10 w-14 xl:-top-6 xl:-left-4 xl:h-16 xl:w-20 z-[1]">
                 <Image src="/home/our-goal/02.png" alt="02" fill className="object-contain" />
              </div>
              <div className="relative z-[2] rounded-2xl border border-white/60 bg-white/20 backdrop-blur-[1px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] xl:p-6">
                <p className="text-[14px] font-medium leading-relaxed text-[#333333] text-right xl:text-[15px]">
                  Continuously improve our processes to deliver exceptional service.
                </p>
              </div>
            </motion.div>

            {/* Goal 03 - Bottom Left */}
            <motion.div
              className="absolute bottom-[5%] left-0 w-[25%] xl:bottom-[8%] xl:w-[280px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -top-4 -right-2 h-10 w-14 xl:-top-6 xl:-right-4 xl:h-16 xl:w-20 z-[1]">
                 <Image src="/home/our-goal/03.png" alt="03" fill className="object-contain" />
              </div>
              <div className="relative z-[2] rounded-2xl border border-white/60 bg-white/20 backdrop-blur-[1px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] xl:p-6">
                <p className="text-[14px] font-medium leading-relaxed text-[#333333] xl:text-[15px]">
                  Maintain the highest standards of professional credentialing.
                </p>
              </div>
            </motion.div>

            {/* Goal 04 - Bottom Right */}
            <motion.div
              className="absolute bottom-[5%] right-0 w-[25%] xl:bottom-[8%] xl:w-[280px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
               <div className="absolute -top-4 -left-2 h-10 w-14 xl:-top-6 xl:-left-4 xl:h-16 xl:w-20 z-[1]">
                 <Image src="/home/our-goal/04.png" alt="04" fill className="object-contain" />
              </div>
              <div className="relative z-[2] rounded-2xl border border-white/60 bg-white/20 backdrop-blur-[1px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] xl:p-6">
                <p className="text-[14px] font-medium leading-relaxed text-[#333333] text-right xl:text-[15px]">
                  Build lasting partnerships with facilities and professionals alike.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
