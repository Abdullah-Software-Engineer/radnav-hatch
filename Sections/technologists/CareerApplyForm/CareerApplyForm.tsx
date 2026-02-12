"use client";

export default function CareerApplyForm() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="career-form-heading"
    >
      <div className="mx-auto max-w-2xl">
        <header className="mb-12 text-center sm:mb-16">
          <h2
            id="career-form-heading"
            className="text-2xl font-bold tracking-tight text-[#2A3852] sm:text-3xl md:text-4xl"
          >
            Ready to Take Control of Your Career?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#555555] sm:text-lg">
            Join a pool of radiology technologists at RadNav.
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
                htmlFor="career-name"
                className="block text-sm font-medium text-[#333333]"
              >
                Name
              </label>
              <input
                id="career-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="career-email"
                className="block text-sm font-medium text-[#333333]"
              >
                Email
              </label>
              <input
                id="career-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="career-phone"
                className="block text-sm font-medium text-[#333333]"
              >
                Contact number
              </label>
              <input
                id="career-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="career-location"
                className="block text-sm font-medium text-[#333333]"
              >
                City, State
              </label>
              <input
                id="career-location"
                type="text"
                name="cityState"
                placeholder="Enter your City and State"
                className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] placeholder:text-[#A9A9A9] focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="career-resume"
              className="block text-sm font-medium text-[#333333]"
            >
              Upload resume
            </label>
            <input
              id="career-resume"
              type="file"
              name="resume"
              accept=".pdf"
              className="w-full rounded-md border border-[#D1D9E0] bg-white px-4 py-3.5 text-[#333333] file:mr-4 file:rounded file:border-0 file:bg-[#286B91] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white file:cursor-pointer focus:border-[#286B91] focus:outline-none focus:ring-1 focus:ring-[#286B91]"
            />
            <p className="text-sm text-[#A9A9A9]">
              Upload your resume (.pdf)
            </p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-[#286B91] py-4 text-base font-medium text-white transition hover:bg-[#215a7a] focus:outline-none focus:ring-2 focus:ring-[#286B91] focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
