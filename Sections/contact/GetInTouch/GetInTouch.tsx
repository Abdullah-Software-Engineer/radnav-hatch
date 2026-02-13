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
    // Simulate submit; replace with real API call
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
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="get-in-touch-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Contact Form */}
          <div className="rounded-2xl bg-[#F5F5F5] p-8 shadow-sm sm:p-10 md:p-12">
            <h2
              id="get-in-touch-heading"
              className="text-2xl font-bold tracking-tight text-[#2A3852] sm:text-3xl md:text-4xl mb-8"
            >
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[#333333]"
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
                  className="w-full rounded-lg border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[#333333]"
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
                  className="w-full rounded-lg border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-[#333333]"
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
                  className="w-full rounded-lg border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#333333]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Please write your concerns here and our team will reach out to you."
                  className="w-full rounded-lg border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91] resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg bg-[#1a4d6f] py-4 text-base font-medium text-white transition hover:bg-[#153d5a] focus:outline-none focus:ring-2 focus:ring-[#1a4d6f] focus:ring-offset-2 disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status === "done" && (
                <p className="text-sm text-green-600 text-center">
                  Thank you! We&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="rounded-2xl bg-[#1a4d6f] p-8 text-white shadow-sm sm:p-10 md:p-12">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@radnavsolutions.com"
                    className="text-lg font-medium text-white transition hover:text-white/90"
                  >
                    info@radnavsolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-white">Phone Number</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-4">
                      Working Hours
                    </h3>
                    <div className="space-y-2">
                      {WORKING_HOURS.map(({ day, hours }) => (
                        <div
                          key={day}
                          className="flex justify-between items-center text-white/95"
                        >
                          <span className="font-medium">{day}:</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

