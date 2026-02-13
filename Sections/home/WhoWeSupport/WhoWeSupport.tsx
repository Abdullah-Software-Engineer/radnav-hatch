"use client";

import Link from "next/link";

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
      <div className="mx-auto max-w-7xl">
        {/* Heading + subheading — centered */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="who-we-support-heading"
            className="text-[30px] font-bold tracking-tight text-[#333333] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            Who We{" "}
            <span className="text-[#2D78AD]">Support</span>
          </h2>
          <p className="mt-4 text-[14px] text-[#333333] md:text-[14px] lg:text-[16px] xl:text-[16px]">
            Customized radiology staffing solutions designed for today&apos;s
            healthcare demands.
          </p>
        </header>

        {/* Two cards — side by side on large screens, stacked on small */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:mt-14 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {cards.map((card, index) => (
            <article
              key={index}
              className={
                card.variant === "filled"
                  ? "flex flex-col rounded-2xl bg-[#2D6B8C] p-6 shadow-sm sm:p-8 md:p-10"
                  : "flex flex-col rounded-2xl border-2 border-[#2D6B8C] bg-white p-6 shadow-sm sm:p-8 md:p-10"
              }
            >
              <h3
                className={
                  card.variant === "filled"
                    ? "text-[20px] font-bold text-white"
                    : "text-[20px] font-bold text-[#2D6B8C]"
                }
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
                className={
                  card.variant === "filled"
                    ? "mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D6B8C]"
                    : "mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-[#2D6B8C] transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6B8C] focus-visible:ring-offset-2"
                }
              >
                Learn more
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
