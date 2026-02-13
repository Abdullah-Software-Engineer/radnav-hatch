import ScheduleCTA from "@/Sections/home/ScheduleCTA/ScheduleCTA";
import ClinicsContactForm from "@/Sections/clinics/ClinicsContactForm/ClinicsContactForm";
import ClinicsHero from "@/Sections/clinics/ClinicsHero/ClinicsHero";
import StaffingSolutions from "@/Sections/clinics/StaffingSolutions/StaffingSolutions";
import WhyClinicsChooseRadnav from "@/Sections/clinics/WhyClinicsChooseRadnav/WhyClinicsChooseRadnav";

export const metadata = {
  title: "For Clinics | Radnav Solutions",
  description:
    "Reliable radiology staffing for your facility. From emergency coverage to long-term placements, we connect you with experienced, credentialed radiology technologists.",
};

export default function ClinicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ClinicsHero />
      <WhyClinicsChooseRadnav />
      <StaffingSolutions />
      <ClinicsContactForm />
      <ScheduleCTA />
    </main>
  );
}

