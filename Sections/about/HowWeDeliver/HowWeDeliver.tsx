"use client";

import Link from "next/link";

function IconFlags({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M5 3v8h2V5h4l1 2h5v2h-4l-1-2H7v10h2v-6h4l1 2h4v2h-5l-1-2H7V3H5z" />
      <path d="M14 5h6v6l-3-2-1 2h-2V5z" />
    </svg>
  );
}

function IconVetted({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5 20.5c0-3.5 3.5-5 7-5s7 1.5 7 5" />
      <path d="M8 10.5l1.5 1.5 3-3" />
      <path d="M12 2v1.5M12 20.5v1.5M2 12h1.5M20.5 12H22M5.64 5.64l1.06 1.06M17.3 17.3l1.06 1.06M5.64 18.36l1.06-1.06M17.3 6.7l1.06-1.06" />
    </svg>
  );
}

function IconEthical({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 12c-2 0-3.5-1.5-3.5-3.5S10 5 12 5s3.5 1.5 3.5 3.5" />
      <path d="M12 12v7" />
      <path d="M9 19h6" />
      <path d="m10 9 2 2 4-4" />
    </svg>
  );
}

export default function HowWeDeliver() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="how-we-deliver-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="how-we-deliver-heading"
            className="text-[30px] font-bold tracking-tight text-[#2F333E] md:text-[30px] lg:text-[48px] xl:text-[48px]"
          >
            How We Deliver{" "}
            <span className="text-[#2563EB]">Better Staffing</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#6B7280] md:text-[14px] lg:text-[16px] xl:text-[16px]">
            Trusted radiology staffing built on expertise, flexibility, and care.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 md:items-end lg:mt-14 lg:grid-cols-4 lg:items-end lg:gap-6">
          {/* Card 1: tallest */}
          <article
            className="flex min-h-[300px] flex-col rounded-2xl p-6 sm:min-h-[340px] sm:p-7 lg:min-h-[380px]"
            style={{
              background:
                "linear-gradient(180deg, #BAE6FD 0%, #7DD3FC 45%, #1E3A5F 100%)",
            }}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center text-[#1E3A5F] sm:h-12 sm:w-12">
              <IconFlags className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-[20px] font-bold text-[#1E3A5F]">
              Radiology-Driven Leadership
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#1E3A5F]/95">
              Built by professionals who know imaging from the inside.
            </p>
          </article>

          {/* Card 2: shorter than 1 */}
          <article className="flex min-h-[260px] flex-col rounded-2xl bg-[#1B557B] p-6 sm:min-h-[300px] sm:p-7 lg:min-h-[340px]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center text-white sm:h-12 sm:w-12">
              <IconVetted className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-[20px] font-bold text-white">
              Vetted Professionals
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/90">
              Qualified, compliant and ready to perform.
            </p>
          </article>

          {/* Card 3: shorter than 2 */}
          <article className="flex min-h-[180px] flex-col rounded-2xl bg-[#CDDAE2] p-6 sm:min-h-[220px] sm:p-7 lg:min-h-[260px]">
            <p className="text-[14px] font-medium text-[#4B5563]">
              Staffing that scales with your needs.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center justify-center gap-2 self-center rounded-xl bg-[#1F5C86] px-5 py-3.5 text-[16px] font-medium text-white shadow transition hover:bg-[#1a4d6f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5C86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E5E7EB] sm:px-6 sm:py-4"
            >
              View Services
              <span aria-hidden>→</span>
            </Link>
          </article>

          {/* Card 4: shortest */}
          <article className="flex min-h-[220px] flex-col justify-center rounded-2xl bg-[#1DB3D6] p-6 text-center sm:min-h-[260px] sm:p-7 lg:min-h-[300px]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center text-white sm:h-12 sm:w-12">
              <IconEthical className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-[20px] font-bold text-white">
              Ethical by Design
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/95">
              People-first, inclusive, and transparent.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
