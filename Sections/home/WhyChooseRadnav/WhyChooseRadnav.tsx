"use client";

import Image from "next/image";

const CARDS = [
  {
    icon: "/home/why-choose-radnav/1.webp",
    title: "Efficiency",
    description:
      "Streamlined processes that quickly match facilities with qualified technologists, minimizing downtime.",
  },
  {
    icon: "/home/why-choose-radnav/2.webp",
    title: "Skilled Professionals",
    description:
      "Access to a network of vetted, certified radiologic technologists with proven expertise.",
  },
  {
    icon: "/home/why-choose-radnav/3.webp",
    title: "Innovation",
    description:
      "Modern staffing solutions leveraging technology for seamless communication and scheduling.",
  },
  {
    icon: "/home/why-choose-radnav/4.webp",
    title: "Commitment",
    description:
      "Dedicated to supporting both healthcare facilities and technologists with personalized care.",
  },
];

export default function WhyChooseRadnav() {
  return (
    <section
      className="relative w-full"
      aria-labelledby="why-choose-heading"
    >
      {/* Container with 20px margins and 20px border radius */}
      <div className="mx-5 sm:mx-5 md:mx-5 lg:mx-5 relative rounded-[20px] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home/whychooseus.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Content with relative positioning */}
        <div className="relative z-10 mx-auto max-w-[1390px] px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16">
            <h2
              id="why-choose-heading"
              className="text-[30px] font-bold tracking-tight text-white md:text-[30px] lg:text-[48px] xl:text-[48px]"
            >
              Why Choose Radnav?
            </h2>
            <p className="mt-4 text-white/90 text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-relaxed">
              We deliver staffing solutions that set us apart in the healthcare
              industry.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {CARDS.map(({ icon, title, description }) => (
              <article
                key={title}
                className="group flex flex-col items-center text-center rounded-xl bg-white p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#214E6E] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-[20px] font-bold tracking-tight text-[#171717] transition-colors duration-300 group-hover:text-[#2E5D81]">
                  {title}
                </h3>
                <p className="mt-2 text-[#5B7281] text-[14px] leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
