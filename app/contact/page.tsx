import ContactHero from "@/Sections/contact/ContactHero/ContactHero";
import GetInTouch from "@/Sections/contact/GetInTouch/GetInTouch";
import OurLocation from "@/Sections/contact/OurLocation/OurLocation";

export const metadata = {
  title: "Contact Us | Radnav Solutions",
  description:
    "Get in touch with Radnav Solutions. Whether you're a healthcare facility seeking reliable radiology staffing or a technologist exploring new opportunities, we're here to help.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <GetInTouch />
      <OurLocation />
    </main>
  );
}

