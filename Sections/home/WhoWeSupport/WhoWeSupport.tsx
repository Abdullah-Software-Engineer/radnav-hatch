"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, cardAnimation } from "../../../app/utils/animations";

const ArrowIcon = () => (
  <svg
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17L17 7M17 7h-10v10"
    />
  </svg>
);

const cards = [
  {
    title: "For Hospitals & Clinics",
    description:
      "Access a pool of vetted radiology technologists ready to fill your staffing needs whether temporary, permanent, or on-demand.",
    href: "#",
    variant: "filled" as const,
  },
  {
    title: "For Hospitals & Clinics",
    description:
      "Access a pool of vetted radiology technologists ready to fill your staffing needs whether temporary, permanent, or on-demand.",
    href: "#",
    variant: "outline" as const,
  },
];

export default function WhoWeSupport() {
  return (
    <section
      className="relative w-full bg-[#f8fafc] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="who-we-support-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        {/* Heading + subheading — centered */}
        <header className="mx-auto max-w-3xl text-center">
          <motion.h2
            id="who-we-support-heading"
            className="text-[30px] font-bold tracking-tight text-[#333333] md:text-[30px] lg:text-[48px] xl:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Who We{" "}
            <span className="text-[#2D78AD]">Support</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[14px] text-[#333333] md:text-[14px] lg:text-[16px] xl:text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Customized radiology staffing solutions designed for today&apos;s
            healthcare demands.
          </motion.p>
        </header>

        {/* Two cards — side by side on large screens, stacked on small */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:mt-14 lg:grid-cols-2 lg:gap-10 xl:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className={`group flex flex-col rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/15 sm:p-8 md:p-10 ${
                card.variant === "filled"
                  ? "bg-[#2D6B8C] hover:bg-[#255a77]"
                  : "border-2 border-[#2D6B8C] bg-white hover:border-[#1f4a66]"
              }`}
              variants={cardAnimation}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3
                className={`text-[20px] font-bold transition-transform duration-300 group-hover:translate-x-1 ${
                  card.variant === "filled"
                    ? "text-white"
                    : "text-[#2D6B8C]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={
                  card.variant === "filled"
                    ? "mt-4 flex-1 text-[14px] text-white/95 leading-relaxed"
                    : "mt-4 flex-1 text-[14px] text-[#2D6B8C] leading-relaxed"
                }
              >
                {card.description}
              </p>
              <Link
                href={card.href}
                className={`mt-6 inline-flex items-center gap-2 text-[16px] font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group-hover:translate-x-1 ${
                  card.variant === "filled"
                    ? "text-white hover:opacity-90 focus-visible:ring-white focus-visible:ring-offset-[#2D6B8C]"
                    : "text-[#2D6B8C] hover:opacity-80 focus-visible:ring-[#2D6B8C]"
                }`}
              >
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
