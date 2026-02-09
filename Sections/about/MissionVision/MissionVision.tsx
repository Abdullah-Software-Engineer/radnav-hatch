"use client";

export default function MissionVision() {
  return (
    <section
      className="relative w-full bg-[#F8F8F8] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Our Mission */}
          <article className="max-w-xl" aria-labelledby="mission-heading">
            <h2
              id="mission-heading"
              className="text-2xl font-bold tracking-tight text-[#333333] sm:text-3xl"
            >
              Our{" "}
              <span className="text-[#2C5282]">Mission</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#333333] sm:mt-5 sm:text-lg">
              To elevate healthcare delivery by providing ethically driven,
              diverse, and industry-leading radiology staffing solutions. We
              are committed to matching exceptional clinical and technical
              talent with healthcare organizations that value quality, efficiency,
              and patient-centered care.
            </p>
          </article>

          {/* Our Vision */}
          <article className="max-w-xl" aria-labelledby="vision-heading">
            <h2
              id="vision-heading"
              className="text-2xl font-bold tracking-tight text-[#333333] sm:text-3xl"
            >
              Our{" "}
              <span className="text-[#2C5282]">Vision</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#333333] sm:mt-5 sm:text-lg">
              We envision a healthcare system strengthened by reliable staffing,
              ethical practices and innovative solutions. As we expand our
              footprint nationwide, we remain committed to continuous improvement,
              diversity and advancing healthcare communities through smarter
              workforce strategies.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
