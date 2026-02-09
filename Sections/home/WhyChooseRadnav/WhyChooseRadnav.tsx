"use client";

import Image from "next/image";

const CARDS = [
  {
    icon: "/why-choose-radnav/1.webp",
    title: "Efficiency",
    description:
      "Streamlined processes that quickly match facilities with qualified technologists, minimizing downtime.",
  },
  {
    icon: "/why-choose-radnav/2.webp",
    title: "Skilled Professionals",
    description:
      "Access to a network of vetted, certified radiologic technologists with proven expertise.",
  },
  {
    icon: "/why-choose-radnav/3.webp",
    title: "Innovation",
    description:
      "Modern staffing solutions leveraging technology for seamless communication and scheduling.",
  },
  {
    icon: "/why-choose-radnav/4.webp",
    title: "Commitment",
    description:
      "Dedicated to supporting both healthcare facilities and technologists with personalized care.",
  },
];

export default function WhyChooseRadnav() {
  return (
    <section
      className="relative w-full bg-[#214E6E] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28 rounded-b-3xl"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <h2
            id="why-choose-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Why Choose Radnav?
          </h2>
          <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
            We deliver staffing solutions that set us apart in the healthcare
            industry.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {CARDS.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl bg-white p-6 shadow-lg shadow-black/10 transition-shadow hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#214E6E]">
                <Image
                  src={icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-[#171717]">
                {title}
              </h3>
              <p className="mt-2 text-[#5B7281] text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
