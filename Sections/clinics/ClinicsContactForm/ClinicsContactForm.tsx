"use client";

export default function ClinicsContactForm() {
  return (
    <section
      id="contact-form"
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center sm:mb-16">
          <h2
            id="contact-form-heading"
            className="text-2xl font-bold tracking-tight text-[#2A3852] sm:text-3xl md:text-4xl"
          >
            Ready to Fill Your Staffing Gaps?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#555555] sm:text-lg">
            Tell us your needs and we&apos;ll match you with qualified technologists within 24 hours.
          </p>
        </header>

        <form
          className="space-y-8"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="organization-name"
                className="block text-sm font-medium text-[#333333]"
              >
                Name of Organization
              </label>
              <input
                id="organization-name"
                type="text"
                name="organizationName"
                placeholder="Enter your organization's name"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
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
                placeholder="Enter your work email"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="block text-sm font-medium text-[#333333]"
              >
                Contact number
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-location"
                className="block text-sm font-medium text-[#333333]"
              >
                City, State
              </label>
              <input
                id="contact-location"
                type="text"
                name="cityState"
                placeholder="Enter your City and State"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="job-title"
              className="block text-sm font-medium text-[#333333]"
            >
              Job title
            </label>
            <input
              id="job-title"
              type="text"
              name="jobTitle"
              placeholder="Enter your job title"
              className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-[#333333]"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Please provide details about your facility's specific needs and our team will get back to you promptly."
              className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91] resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-[#1a4d6f] py-4 text-base font-medium text-white transition hover:bg-[#153d5a] focus:outline-none focus:ring-2 focus:ring-[#1a4d6f] focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

