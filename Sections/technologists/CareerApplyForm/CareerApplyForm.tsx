"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "../../../app/utils/animations";

export default function CareerApplyForm() {
  const [fileName, setFileName] = useState<string>("");

  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="career-form-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <header className="mb-12 text-center sm:mb-16">
          <motion.h2
            id="career-form-heading"
            className="text-[30px] font-bold tracking-tight text-[#171717] md:text-[36px] lg:text-[48px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to Take <span className="text-[#2E5D81]">Control of Your Career?</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[16px] leading-relaxed text-[#5B7281] sm:text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Join a pool of radiology technologists at RadNav.
          </motion.p>
        </header>

        <form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="career-name"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  Name
                </label>
                <input
                  id="career-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="career-email"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  Email
                </label>
                <input
                  id="career-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="career-phone"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  Contact number
                </label>
                <input
                  id="career-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="career-location"
                  className="block text-[14px] font-medium text-[#171717]"
                >
                  City, State
                </label>
                <input
                  id="career-location"
                  type="text"
                  name="cityState"
                  placeholder="Enter your City and State"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#171717] placeholder:text-gray-400 focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="career-resume"
                className="block text-[14px] font-medium text-[#171717]"
              >
                Upload resume
              </label>
              <div className="relative">
                <input
                  id="career-resume"
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    setFileName(file ? file.name : "");
                  }}
                  className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#171717] file:mr-4 file:rounded file:border-0 file:bg-transparent file:px-0 file:py-0 file:text-sm file:font-medium file:text-transparent file:cursor-pointer focus:border-[#2E5D81] focus:outline-none focus:ring-1 focus:ring-[#2E5D81] [&::file-selector-button]:hidden"
                />
                {!fileName && (
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-400">
                    Upload your resume (.pdf)
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <AnimatedButton
                type="submit"
                className="w-full rounded-lg bg-[#2E5D81] py-4 text-[16px] font-semibold text-white transition hover:bg-[#234b6b] focus:outline-none focus:ring-2 focus:ring-[#2E5D81] focus:ring-offset-2"
              >
                Submit Application
              </AnimatedButton>
            </div>
          </form>
      </div>
    </section>
  );
}
