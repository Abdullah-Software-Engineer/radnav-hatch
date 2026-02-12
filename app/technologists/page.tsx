import ScheduleCTA from "@/Sections/home/ScheduleCTA/ScheduleCTA";
import BasicRequirements from "@/Sections/technologists/BasicRequirements/BasicRequirements";
import CareerApplyForm from "@/Sections/technologists/CareerApplyForm/CareerApplyForm";
import TechnologistsHero from "@/Sections/technologists/TechnologistsHero/TechnologistsHero";
import WhyTechsLoveUs from "@/Sections/technologists/WhyTechsLoveUs/WhyTechsLoveUs";

export const metadata = {
  title: "Technologists | Radnav Solutions",
  description:
    "Your career, your terms. Join a network of top radiology professionals with flexibility, better pay, and new opportunities.",
};

export default function TechnologistsPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechnologistsHero />
      <WhyTechsLoveUs />
      <BasicRequirements />
      <CareerApplyForm />
      <ScheduleCTA />
    </main>
  );
}
