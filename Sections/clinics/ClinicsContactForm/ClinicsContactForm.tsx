"use client";

export default function ClinicsContactForm() {
  return (
    <section
      id="contact-form"
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="mb-12 text-center sm:mb-16">
          <h2
            id="contact-form-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[36px] lg:text-[48px]"
          >
            Ready to Fill Your <span className="text-[#2E5D81]">Staffing Gaps?</span>
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#5B7281] sm:text-[18px]">
            Tell us your needs and we&apos;ll match you with qualified technologists within 24 hours.
          </p>
        </header>

        <form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="organization-name"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  Name of Organization
                </label>
                <input
                  id="organization-name"
                  type="text"
                  name="organizationName"
                  placeholder="Enter your organization's name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
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
                  placeholder="Enter your work email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-phone"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  Contact number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-location"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  City, State
                </label>
                <input
                  id="contact-location"
                  type="text"
                  name="cityState"
                  placeholder="Enter your City and State"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="job-title"
                className="block text-[14px] font-medium text-[#171717]"
              >
                Job title
              </label>
              <input
                id="job-title"
                type="text"
                name="jobTitle"
                placeholder="Enter your job title"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-[14px] font-medium text-[#171717]"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Please provide details about your facility's specific needs and our team will get back to you promptly."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#2E5D81] py-4 text-[16px] font-semibold text-white transition hover:bg-[#234b6b] focus:outline-none focus:ring-2 focus:ring-[#2E5D81] focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </form>
      </div>
    </section>
  );
}

