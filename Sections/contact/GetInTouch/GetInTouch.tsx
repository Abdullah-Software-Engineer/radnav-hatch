"use client";

import { useState } from "react";

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const WORKING_HOURS = [
  { day: "Mon", hours: "08:00 am - 06:00 pm" },
  { day: "Tue", hours: "08:00 am - 06:00 pm" },
  { day: "Wed", hours: "08:00 am - 06:00 pm" },
  { day: "Thur", hours: "08:00 am - 06:00 pm" },
  { day: "Fri", hours: "08:00 am - 06:00 pm" },
  { day: "Sat", hours: "Closed" },
  { day: "Sun", hours: "Closed" },
];

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("done");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="get-in-touch"
      className="relative w-full bg-white px-4 pt-4 pb-16 sm:px-6 sm:pt-6 sm:pb-20 md:pt-8 md:pb-24 lg:px-8 lg:pt-10 lg:pb-28"
      aria-labelledby="get-in-touch-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <div className="relative overflow-hidden rounded-[30px] bg-[#FAFAFA] px-4 py-6 sm:px-10 sm:py-12 md:px-12 md:py-16 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2
                id="get-in-touch-heading"
                className="mb-6 text-2xl font-bold tracking-tight text-[#171717] sm:mb-8 sm:text-3xl md:text-4xl"
              >
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-[14px] font-medium text-[#171717]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-lg bg-[#E2E8F0] px-4 py-3 text-[#171717] placeholder:text-[#5B7281] focus:outline-none focus:ring-2 focus:ring-[#2E5D81] sm:py-3.5"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-[14px] font-medium text-[#171717]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-lg bg-[#E2E8F0] px-4 py-3 text-[#171717] placeholder:text-[#5B7281] focus:outline-none focus:ring-2 focus:ring-[#2E5D81] sm:py-3.5"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-phone"
                    className="block text-[14px] font-medium text-[#171717]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg bg-[#E2E8F0] px-4 py-3 text-[#171717] placeholder:text-[#5B7281] focus:outline-none focus:ring-2 focus:ring-[#2E5D81] sm:py-3.5"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-[14px] font-medium text-[#171717]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please write your concerns here and our team will reach out to you."
                    className="w-full resize-none rounded-lg bg-[#E2E8F0] px-4 py-3 text-[#171717] placeholder:text-[#5B7281] focus:outline-none focus:ring-2 focus:ring-[#2E5D81]"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-lg bg-[#2E5D81] px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-[#234b6b] focus:outline-none focus:ring-2 focus:ring-[#2E5D81] focus:ring-offset-2 disabled:opacity-70 sm:w-auto sm:px-8 sm:py-3.5"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {status === "done" && (
                  <p className="text-sm text-green-600">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Right: Contact Information Card */}
            <div className="flex flex-col gap-4 rounded-2xl bg-[#2E5D81] p-6 text-white shadow-lg sm:gap-6 sm:p-8 lg:p-10">
              {/* Email Block */}
              <div className="flex items-center gap-3 rounded-xl bg-[#4A7A9C] p-4 transition hover:bg-[#5B8BAD] sm:gap-4 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#2E5D81] sm:h-12 sm:w-12">
                  <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <a
                  href="mailto:info@radnavsolutions.com"
                  className="break-words text-[14px] font-medium text-white sm:text-[16px] md:text-[18px]"
                >
                  info@radnavsolutions.com
                </a>
              </div>

              {/* Phone Block */}
              <div className="flex items-center gap-3 rounded-xl bg-[#4A7A9C] p-4 transition hover:bg-[#5B8BAD] sm:gap-4 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#2E5D81] sm:h-12 sm:w-12">
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-[14px] font-medium text-white sm:text-[16px] md:text-[18px]">
                  Phone Number
                </span>
              </div>

              {/* Working Hours Block */}
              <div className="flex-1 rounded-xl bg-[#4A7A9C] p-6 transition hover:bg-[#5B8BAD] sm:p-8">
                <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#2E5D81] sm:h-12 sm:w-12">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white sm:text-[20px]">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-2.5 pl-0 sm:space-y-3 sm:pl-16">
                  {WORKING_HOURS.map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex justify-between text-[14px] text-white/95 sm:text-[15px]"
                    >
                      <span className="font-medium">{day}:</span>
                      <span className="text-right">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

