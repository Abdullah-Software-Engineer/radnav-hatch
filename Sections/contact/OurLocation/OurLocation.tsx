"use client";

const ADDRESS = "2955 North Milwaukee Avenue, Chicago, Illinois 60618, United States.";

export default function OurLocation() {
  return (
    <section
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
      aria-labelledby="our-location-heading"
    >
      <div className="mx-auto max-w-[1390px]">
        <h2
          id="our-location-heading"
          className="text-2xl font-bold tracking-tight text-[#2A3852] sm:text-3xl md:text-4xl mb-6"
        >
          Our Location
        </h2>
        <p className="text-base text-[#555555] mb-8 sm:text-lg">
          {ADDRESS}
        </p>

        {/* Map Container */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#f1f5f9] shadow-md aspect-video">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5!2d-87.7!3d41.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62d8d3e5e5e5e5e5!2s2955%20N%20Milwaukee%20Ave%2C%20Chicago%2C%20IL%2060618!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Radnav Solutions Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}

