import ScheduleCTA from "@/Sections/home/ScheduleCTA/ScheduleCTA";
import KeyBenefits from "@/Sections/services/KeyBenefits/KeyBenefits";
import HowWeKeepYouCovered from "@/Sections/services/HowWeKeepYouCovered/HowWeKeepYouCovered";
import OurServices from "@/Sections/services/OurServices/OurServices";
import ServicesHero from "@/Sections/services/ServicesHero/ServicesHero";

export const metadata = {
  title: "Services | Radnav Solutions",
  description:
    "Reliable radiology staffing and workforce solutions for modern healthcare.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <OurServices />
      <HowWeKeepYouCovered />
      <KeyBenefits />
      <ScheduleCTA/>
    </main>
  );
}
